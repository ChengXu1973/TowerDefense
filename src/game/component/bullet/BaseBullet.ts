module game {

    /** 所有子弹的基类 */
    export class BaseBullet extends egret.Sprite implements ITicker {

        // -------------------------- init setting --------------------------

        public constructor() {
            super();
            this.hash = com.StringUtil.getUUID();
        }

        public start(): void {
            TickManager.getInstance().addTicker(this, TickerPriority.bullet);
        }

        public clear(): void {
            TickManager.getInstance().removeTicker(this.hash);
        }

        public update(timeStamp: number): void {
            this.updatePos();
            this.updateDisplay();
            this.checkNeedClear();
        }

        public hash: string;

        // -------------------------- props --------------------------

        /** 子弹等级 */
        public level: DamageLevel;

        /** 子弹类型 */
        public type: BulletType;

        /** 子弹的碰撞范围 */
        public hitRange: number;

        /** 子弹的debuff效果 */
        public debuff: Array<Debuff>;

        /** 是否需要从舞台清除 */
        public needClear: boolean;

        /** 子弹攻击目标的hash */
        public target: string;

        /** 子弹移动速度 */
        protected velocity: number;

        /** 子弹移动方向单位向量 */
        protected direction: egret.Point;

        // -------------------------- API --------------------------

        /** 初始化一个子弹 */
        public initBullet(type: BulletType, level: DamageLevel, startX: number, startY: number, target: string): void {
            this.level = level;
            this.type = type;
            this.needClear = false;
            this.target = target;
            this.hitRange = Bullet.getHitRange(this.type, this.level)
            this.debuff = Bullet.getDebuff(this.type, this.level);
            this.velocity = Bullet.getVelocity(this.type, this.level);
            // init x y
            this.x = startX;
            this.y = startY;
            // 获取子弹移动方向
            this.direction = egret.Point.create(0, 0);
            let targetObj = <BaseTower>TickManager.getInstance().getTicker(target);
            if (targetObj) {
                let x = targetObj.x - startX;
                let y = targetObj.y - startY;
                let d = Math.sqrt(x * x + y * y);
                if (d > 0) {
                    this.direction = egret.Point.create(x / d, y / d);
                }
            }
            // display
            this.initDisplay();
            // add to tickManager
            this.start();
        }

        /** 碰撞后目标受到子弹debuff效果，子弹根据情况进行销毁
         * @desc 特殊子弹的效果（扩散伤害等）需要在子弹与目标碰撞后在目标处生成衍生子弹；
         */
        public hit(): void { }

        // -------------------------- protected func --------------------------

        /** 更新大小与位置信息 */
        protected updatePos(): void {
            if (this.velocity) {
                this.x += this.velocity * this.direction.x * GlobalData.size / 60;
                this.y += this.velocity * this.direction.y * GlobalData.size / 60;
            }
        }

        /** 检测是否需要消除 */
        protected checkNeedClear() {
            if (this.x + this.width <= 0
                || this.y + this.height <= 0
                || this.x + this.width > 1920
                || this.y + this.height > 1080) {
                this.needClear = true;
            }
        }

        protected initDisplay(): void {
            this.width = GlobalData.size;
            this.height = GlobalData.size;
        }

        protected updateDisplay(): void {

        }

    }
}