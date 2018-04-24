module game {

    /** 所有敌人的基类 */
    export class BaseEnemy extends egret.Sprite implements ITicker, ILife {

        public constructor() {
            super();
            this.hash = com.StringUtil.getUUID();
            this.hpBar = HPBarPool.getInstance().getItem();
        }

        // -------------------------- implements ITicker --------------------------

        public start(): void {
            TickManager.getInstance().addTicker(this, TickerPriority.enemy);
        }

        public clear(): void {
            TickManager.getInstance().removeTicker(this.hash);
            this.initEnemy();
            this._path = [];
            this.hpBar.setVisible(false);
        }

        public update(timeStamp: number): void {
            this._now = timeStamp;
            this.updatePosition();
            this.executeDebuff();
            if (this.currentHP > 0) {
                this.updateDisplay();
            } else {
                this.clear();
            }
        }

        public hash: string;

        // -------------------------- implements ILife --------------------------

        /** 总生命 */
        public totalHP: number;

        /** 当前生命 */
        public currentHP: number;

        /** 血条 */
        public hpBar: HPBar;

        // -------------------------- basic props --------------------------

        /** 敌人类型 */
        public type: EnemyType;

        /** 怪兽体积 */
        public area: number;

        /** 敌人在路径中所处的节点 */
        public node: number;

        /** 移动速度 */
        protected _speed: number;

        /** 敌人受到的所有debuff效果集合 */
        protected _debuffs: Array<Debuff>;

        /** 敌人受到过debuff的子弹hash集合 */
        protected _history: Array<string>;

        /** timeStamp */
        protected _now: number;

        /** 怪物移动路径 */
        protected _path: Array<Array<number>>;

        // -------------------------- additional props --------------------------

        /** 受到伤害加成倍数 */
        protected _damageBonus: number;

        /** 减速倍速 */
        protected _decelerate: number;

        // -------------------------- API --------------------------

        public initPath(path: Array<Array<number>>): void {
            // deep clone
            let temp = JSON.parse(JSON.stringify(path));
            this._path = temp;
            this.x = this._path[0][0] * GlobalData.size;
            this.y = this._path[0][1] * GlobalData.size;
            this.node = 0;
        }

        public initEnemy(): void {
            this._speed = Enemy.getSpeed(this.type);
            this.totalHP = Enemy.getHP(this.type);
            this.area = Enemy.getArea(this.type);
            this.currentHP = this.totalHP;
            this.hpBar.setHP(this.totalHP, this.currentHP);
            this._debuffs = [];
            this._history = [];
            this._damageBonus = 1;
            this.setDisplay();
            this.hpBar.x = 0;
            this.hpBar.y = 0;
            this.addChild(this.hpBar);
            this.node = 0;
        }

        /** 碰撞后敌人受到子弹debuff效果 */
        public hit(bullet: BaseBullet, needRecord: boolean = true): void {
            if (this._history.indexOf(bullet.hash) > -1) {
                return;
            }
            if (needRecord) {
                this._history.push(bullet.hash + "");
            }
            // deep clone
            let temp = <Array<Debuff>>JSON.parse(JSON.stringify(bullet.debuff));
            this.addDebuff(temp);
        }

        /** 添加debuff - 优化方向：使用对象存储debuff，减速和持续伤害类型的debuff进行按时间段合并，避免debuff数组过长影响性能 */
        public addDebuff(debuff: Array<Debuff>): void {
            // set effectTime
            debuff.forEach((d) => {
                d.effectTime = this._now;
            });
            this._debuffs = this._debuffs.concat(debuff);
            // sort 后易伤排在最后，其次是静止，减速，持续伤害与单次伤害
            this._debuffs.sort((a, b) => {
                return a.type - b.type;
            });
        }

        // -------------------------- protected func --------------------------


        /** 敌人按路径移动 */
        private updatePosition(): void {
            if (isNaN(this.x)) {
                this.x = this._path[0][0] * GlobalData.size;
            }
            if (isNaN(this.y)) {
                this.y = this._path[0][1] * GlobalData.size;
            }
            if (this.node == this._path.length - 1) {
                return;
            }
            // 获取当前移动位置信息
            let node = this.node;
            let lastPos = this._path[node];
            let nextPos = this._path[node + 1];
            let dir = egret.Point.create(
                (nextPos[0] - lastPos[0]) / (Math.abs(nextPos[0] - lastPos[0]) || 1),
                (nextPos[1] - lastPos[1]) / (Math.abs(nextPos[1] - lastPos[1]) || 1)
            );
            let speed = this._speed * this._decelerate;
            this.x += speed * dir.x * GlobalData.size;
            this.y += speed * dir.y * GlobalData.size;
            // 检查是否到达下一个node
            let dis = (nextPos[0] * GlobalData.size - this.x) * dir.x
                + (nextPos[1] * GlobalData.size - this.y) * dir.y;
            if (dis <= 0) {
                this.x = nextPos[0] * GlobalData.size;
                this.y = nextPos[1] * GlobalData.size;
                this.node = node + 1;
            }
            // 检查node与path长度
            if (this.node == this._path.length - 1) {
                this.dispatchEventWith(GameEvent.EnemyClear, true, this.hash);
            }
        }

        /** 执行debuffs
         * @desc 现在是每次重新计算debuff影响到的相关属性，如果性能跟不上可以考虑记录当前已经生效的debuff以及新添加的未生效的debuff，减少计算次数
         */
        protected executeDebuff(): void {
            // 初始化附加属性
            this._damageBonus = 1;
            this._decelerate = 1;
            let needShowHp = false;
            let len = this._debuffs.length - 1;
            // 遍历debuffs
            for (let i = len; i >= 0; i--) {
                let df = this._debuffs[i];
                // 判断df是否存在是临时hack，需要找到df为undefined的具体原因
                if (!df) {
                    continue;
                }
                switch (df.type) {
                    /** 一次性伤害（普通子弹击中） */
                    case DebuffType.HIT:
                        this.currentHP -= (df.value * this._damageBonus);
                        needShowHp = true;
                        break;
                    /** 持续掉血（燃烧） */
                    case DebuffType.BLEED:
                        this.currentHP -= (df.value * 16.7 * this._damageBonus / df.time);
                        needShowHp = true;
                        break;
                    /** 减速（冰冻） */
                    case DebuffType.SLOW:
                        this._decelerate *= df.value;
                        break;
                    /** 静止（静止道具） */
                    case DebuffType.STILL:
                        this._decelerate = 0;
                        break;
                    /** 虚弱（易伤效果） */
                    case DebuffType.WEAK:
                        this._damageBonus *= df.value;
                        break;
                }
                // 判断是否过期
                if (this._now - df.effectTime >= df.time) {
                    this._debuffs.splice(i, 1);
                }
                // fix hp
                this.currentHP = Math.max(0, this.currentHP);
                if (needShowHp) {
                    this.hpBar.setHP(this.totalHP, this.currentHP);
                    this.hpBar.setVisible();
                }
                if (this.currentHP == 0) {
                    this.dispatchEventWith(GameEvent.EnemyClear, true, this.hash);
                }
            }
        }

        /** 初始化显示样式 */
        protected setDisplay(): void {

        }

        /** 更新显示样式 */
        protected updateDisplay(): void {
            // 检查debuff效果渲染
        }

    }
}