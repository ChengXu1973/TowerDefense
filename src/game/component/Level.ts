module game {

    /** 游戏关卡 */
    export class Level extends eui.Component implements ITicker {

        public constructor(data: LevelData) {
            super();
            this._data = data;
            this.hash = com.StringUtil.getUUID();
            this.addEventListener(eui.UIEvent.COMPLETE, this.uiComplete, this);
            this.addEventListener(eui.UIEvent.REMOVED_FROM_STAGE, this.clear, this);
            this.skinName = "resource/game_ui/component/LevelSkin.exml";
        }

        private uiComplete(): void {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.uiComplete, this);
            this.initListener(true);
            this.initLevel();
            this.start();
        }

        // ---------------------------- implements ITicker ----------------------------

        /** init */
        public start(): void {
            TickManager.getInstance().addTicker(this, TickerPriority.tower);
        }

        /** update state */
        public update(timeStamp: number): void {
            this._ts++;
            this.checkBullets();
            this.checkHits();
            this.checkTowerRange();
            this.generateEnemy();
        }

        /** ticker id */
        public hash: string;

        // ---------------------------- game props ----------------------------

        /** 清除所有enemy */
        public clearAllEnemy(): void {
            for (let i = this._enemys.length - 1; i >= 0; i--) {
                let e = this._enemys[i];
                if (e.node == this._path.length - 1) {
                    // 扣分
                }
                this._enemys.splice(i, 1);
                this.groupEnemy.removeChild(e);
                EnemyPool.getInstance().storeItem(e);
            }
            // 本波怪兽已经清除完毕，3秒后生成下一波沟
            if (this._enemys.length == 0 && this._enemyTs.length == 0) {
                this._wave++;
                if (this._wave > this._data.round) {
                    TickManager.getInstance().stopTick();
                    alert("done!");
                    return;
                }
                let num = Math.ceil(this._data.enemyNum * Math.pow(1.2, this._wave));
                for (let i = 0; i < num; i++) {
                    this._enemyTs.push(60 * 0.5 * (i + 1) + this._ts);
                }
                this._enemyTs.sort((a, b) => {
                    return a - b;
                });
            }
        }

        /** 冻结所有enemy */
        public freezeAllEnemy(): void {
            for (let i = 0; i < this._enemys.length; i++) {
                let enemy = this._enemys[i];
                if (enemy) {
                    enemy.addDebuff([{
                        type: DebuffType.STILL,
                        time: 2000,
                        value: 0
                    }]);
                }
            }
        }

        // ---------------------------- init level ----------------------------

        private initLevel(): void {
            this._wave = 1;
            this._ts = 0;
            this._towers = {};
            this._pathArea = [];
            this._enemys = [];
            this._bullets = [];
            this._enemyTs = [];
            this._path = this._data.path;
            // add road
            for (let i = 0; i < this._path.length - 1; i++) {
                let cur = this._path[i];
                let next = this._path[i + 1];
                let dx = next[0] - cur[0];
                let dy = next[1] - cur[1];
                if (dx == 0) {
                    let x = next[0];
                    let a = Math.max(cur[1], next[1]);
                    let b = Math.min(cur[1], next[1]);
                    for (let y = b; y <= a; y++) {
                        let road = new eui.Rect(GlobalData.size, GlobalData.size, 0x444444);
                        road.x = x * GlobalData.size;
                        road.y = y * GlobalData.size;
                        this.groupPath.addChild(road);
                        this._pathArea.push(`path_${x}_${y}`);
                    }
                }
                if (dy == 0) {
                    let y = next[1];
                    let a = Math.max(cur[0], next[0]);
                    let b = Math.min(cur[0], next[0]);
                    for (let x = b; x <= a; x++) {
                        let road = new eui.Rect(GlobalData.size, GlobalData.size, 0x444444);
                        road.x = x * GlobalData.size;
                        road.y = y * GlobalData.size;
                        this.groupPath.addChild(road);
                        this._pathArea.push(`path_${x}_${y}`);
                    }
                }
            }
            // this._pathArea = Array.from(new Set(this._pathArea));
            this._pathArea = com.ArrayUtil.distinct(this._pathArea);
            // add tower
            for (let i = 0; i < this._data.defaultTower.length; i++) {
                let towerInfo = this._data.defaultTower[i];
                this.addTower(towerInfo);
            }
            // add enemy
            let num = this._data.enemyNum;
            for (let i = 0; i < num; i++) {
                this._enemyTs.push(60 * 0.5 * (i + 1));
            }
            this._enemyTs.sort((a, b) => {
                return a - b;
            });
            // init skin
            this.groupAddTower.visible = false;
            this.groupEditTower.visible = false;
        }

        // ---------------------------- prop ----------------------------

        /** 关卡数据 */
        private _data: LevelData;

        /** 路径 */
        private _path: Array<Array<number>>;

        /** 路径区域 */
        private _pathArea: Array<string>;

        /** 所有子弹的集合 */
        private _bullets: Array<BaseBullet>;

        /** 所有敌人的集合 */
        private _enemys: Array<BaseEnemy>;

        /** 所有塔的集合(键值对，key为pos，value为basetower) */
        private _towers: {};

        /** 当前波数 */
        private _wave: number;

        /** 帧数 */
        private _ts: number;

        /** 出怪帧数 */
        private _enemyTs: Array<number>;

        /** 用户点击的坐标 */
        private _touchPos: egret.Point;

        // ---------------------------- update func ----------------------------

        /** 检查需要回收的子弹 */
        private checkBullets(): void {
            for (let i = this._bullets.length - 1; i >= 0; i--) {
                let b = this._bullets[i];
                if (b.needClear) {
                    this._bullets.splice(i, 1);
                    this.groupBullet.removeChild(b);
                    BulletPool.getInstance().storeItem(b);
                }
            }
        }

        /** 碰撞检测 */
        private checkHits(): void {
            for (let i = this._enemys.length - 1; i >= 0; i--) {
                let enemy = this._enemys[i];
                for (let j = this._bullets.length - 1; j >= 0; j--) {
                    let b = this._bullets[j];
                    // 此处需要根据子弹类型进行不同的碰撞判定
                    let dis = com.NumberUtil.getDistance(b.x, enemy.x, b.y, enemy.y)
                    if (dis <= b.hitRange + enemy.area) {
                        enemy.hit(b);
                        b.hit();
                    }
                }
            }
        }

        /** 检测塔防御范围内是否有怪物 */
        private checkTowerRange(): void {
            for (let key in this._towers) {
                let tower = this._towers[key];
                // 检查敌人是否已经走出塔的防御范围
                if (tower.target) {
                    let e = <BaseEnemy>TickManager.getInstance().getTicker(tower.target);
                    if (e) {
                        let dis = com.NumberUtil.getDistance(e.x, tower.x, e.y, tower.y);
                        if (dis >= e.area + tower.range) {
                            tower.target = "";
                        }
                    } else {
                        tower.target = "";
                    }
                }
                // 检查范围内所有敌人，取node值最大的一个作为target
                else {
                    let enemyInRange: Array<BaseEnemy> = [];
                    for (let i = this._enemys.length - 1; i >= 0; i--) {
                        let e = this._enemys[i];
                        let dis = com.NumberUtil.getDistance(e.x, tower.x, e.y, tower.y);
                        if (dis < e.area + tower.range) {
                            enemyInRange.push(e);
                        }
                    }
                    if (enemyInRange.length) {
                        enemyInRange.sort((a, b) => {
                            return a.node - b.node;
                        });
                        tower.target = enemyInRange[enemyInRange.length - 1].hash;
                    }
                }
            }
        }

        /** 生成新的怪兽 */
        private generateEnemy(): void {
            if (this._enemyTs[0] <= this._ts) {
                let index = ~~((this._data.enemy.length - 0.01) * Math.random());
                let type = this._data.enemy[index];
                let enemy = EnemyPool.getInstance().getItem(type);
                this.groupEnemy.addChild(enemy);
                this._enemys.push(enemy);
                enemy.initPath(this._path);
                enemy.start();
                this._enemyTs.shift();
            }
        }

        // ---------------------------- tower ----------------------------

        /** 获取指定坐标上的tower */
        private getTower(x: number, y: number): BaseTower {
            let key = `tower_${x}_${y}`;
            let tower = this._towers[key] || null;
            return tower;
        }

        /** 添加一个tower */
        private addTower(towerInfo: TowerPosition): void {
            let tower = TowerPool.getInstance().getItem(towerInfo.type);
            for (let j = 0; j < towerInfo.level - 1; j++) {
                tower.upgrade();
            }
            tower.x = towerInfo.pos[0] * GlobalData.size;
            tower.y = towerInfo.pos[1] * GlobalData.size;
            let key = `tower_${towerInfo.pos[0]}_${towerInfo.pos[1]}`;
            this._towers[key] = tower;
            this.groupTower.addChild(tower);
            tower.start();
        }

        /** 移除一个tower */
        private removeTower(x: number, y: number): void {
            let key = `tower_${x}_${y}`;
            let tower: BaseTower = this._towers[key] || null;
            if (tower) {
                this.groupTower.removeChild(tower);
                TowerPool.getInstance().storeItem(tower);
                delete this._towers[key];
            }
        }

        // ---------------------------- skin ----------------------------

        /** 路径层 */
        private groupPath: eui.Group;
        /** 防御塔层 */
        private groupTower: eui.Group;
        /** 建筑物层 */
        private groupBuild: eui.Group;
        /** 敌方层 */
        private groupEnemy: eui.Group;
        /** 子弹层 */
        private groupBullet: eui.Group;
        /** 特效层 */
        private groupEffect: eui.Group;
        /** 触控检测区 */
        private rectTouchArea: eui.Rect;
        /** 用户添加防御塔面板容器 */
        private groupAddTower: eui.Group;
        private rectAddTower: eui.Rect;
        private btnAddTower0: eui.Button;
        private btnAddTower1: eui.Button;
        private btnAddTower2: eui.Button;
        private btnAddTower3: eui.Button;
        private btnAddTower4: eui.Button;
        private btnAddTower5: eui.Button;
        /** 编辑防御塔面板容器 */
        private groupEditTower: eui.Group;
        private rectEditTower: eui.Rect;
        private btnUpgradeTower: eui.Button;
        private btnDeleteTower: eui.Button;

        // ---------------------------- event ----------------------------

        private initListener(b: boolean): void {
            if (b) {
                this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouch, this);
                this.addEventListener(GameEvent.CreateBullet, this.createBullet, this);
                this.addEventListener(GameEvent.EnemyClear, this.clearEnemy, this);
            } else {
                this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouch, this);
                this.removeEventListener(GameEvent.CreateBullet, this.createBullet, this);
                this.removeEventListener(GameEvent.EnemyClear, this.clearEnemy, this);
            }
        }

        private handleTouch(evt: egret.TouchEvent): void {
            switch (evt.target) {
                case this.rectAddTower:
                    this.groupAddTower.visible = false;
                    break;
                case this.rectEditTower:
                    this.groupEditTower.visible = false;
                    break;
                case this.rectTouchArea:
                    this.touchRect(evt);
                    break;
                case this.btnUpgradeTower:
                    let t = this.getTower(this._touchPos.x, this._touchPos.y);
                    t.upgrade();
                    this.groupEditTower.visible = false;
                    break;
                case this.btnDeleteTower:
                    this.removeTower(this._touchPos.x, this._touchPos.y);
                    this.groupEditTower.visible = false;
                    break;
                default:
                    // 检查是否点击的是添加防御塔group
                    let index = [
                        this.btnAddTower0,
                        this.btnAddTower1,
                        this.btnAddTower2,
                        this.btnAddTower3,
                        this.btnAddTower4,
                        this.btnAddTower5
                    ].indexOf(evt.target);
                    if (index > -1) {
                        let towerInfo: TowerPosition = {
                            type: index,
                            level: DamageLevel.Basic,
                            pos: [this._touchPos.x, this._touchPos.y]
                        };
                        this.addTower(towerInfo);
                        this.groupAddTower.visible = false;
                        return;
                    }
                    break;
            }
        }

        /** 用户点击游戏区域 */
        private touchRect(evt: egret.TouchEvent): void {
            let x = evt.localX;
            let y = evt.localY;
            let i = Math.floor(x / GlobalData.size);
            let j = Math.floor(y / GlobalData.size);
            if (this._pathArea.indexOf(`path_${i}_${j}`) > -1) {
                return;
            }
            this._touchPos = egret.Point.create(i, j);
            // 如果点击的是塔
            let tower = this.getTower(i, j);
            if (tower) {
                // 显示卖掉或者升级
                this.btnUpgradeTower.enabled = tower.level != DamageLevel.Ultimate;
                this.groupEditTower.visible = true;
                return;
            }
            // 如果点击的是建筑物
            if (2 < 1) {
                return;
            }
            // 点击的是空地
            this.groupAddTower.visible = true;
        }

        /** 生成一颗子弹 */
        private createBullet(evt: egret.Event): void {
            let d = evt.data;
            let bullet = BulletPool.getInstance().getItem(d.type);
            bullet.initBullet(d.type, d.level, d.startX, d.startY, d.target);
            if (d.target) {
                let targetObj = TickManager.getInstance().getTicker(d.target);
                if (!targetObj) {
                    BulletPool.getInstance().storeItem(bullet);
                    return;
                }
            }
            this.groupBullet.addChild(bullet);
            this._bullets.push(bullet);
            bullet.start();
        }

        /** 敌人到达终点 */
        private clearEnemy(evt: egret.Event): void {
            let hash = evt.data;
            for (let i = this._enemys.length - 1; i >= 0; i--) {
                let e = this._enemys[i];
                if (e.hash == hash) {
                    if (e.node == this._path.length - 1) {
                        // 扣分
                    }
                    this._enemys.splice(i, 1);
                    this.groupEnemy.removeChild(e);
                    EnemyPool.getInstance().storeItem(e);
                }
            }
            // 本波怪兽已经清除完毕，3秒后生成下一波沟
            if (this._enemys.length == 0 && this._enemyTs.length == 0) {
                this._wave++;
                if (this._wave > this._data.round) {
                    TickManager.getInstance().stopTick();
                    alert("done!");
                    return;
                }
                let num = Math.ceil(this._data.enemyNum * Math.pow(1.2, this._wave));
                for (let i = 0; i < num; i++) {
                    this._enemyTs.push(60 * 0.5 * (i + 1) + this._ts);
                }
                this._enemyTs.sort((a, b) => {
                    return a - b;
                });
            }
        }

        // ---------------------------- dispose ----------------------------

        public clear(): void {
            TickManager.getInstance().removeTicker(this.hash);
            this.removeEventListener(eui.UIEvent.REMOVED_FROM_STAGE, this.clear, this);
            this.initListener(false);
        }

    }
}