module game {

    /** 所有防御塔的基类 */
    export class BaseTower extends egret.Sprite implements ITicker {

        // -------------------------- init setting --------------------------

        public constructor() {
            super();
            this.hash = com.StringUtil.getUUID();
        }

        public start(): void {
            TickManager.getInstance().addTicker(this, TickerPriority.tower);
        }

        public clear(): void {
            TickManager.getInstance().removeTicker(this.hash);
        }

        public update(timeStamp: number): void {
            // update tower cd
            this.cd -= 16.7;
            this.cd = Math.max(0, this.cd);
            // check bullet
            if (this.target && this.cd <= 0) {
                this.generateBullet(timeStamp);
            }
        }

        public hash: string;

        // -------------------------- API --------------------------

        public initTower(type: BulletType): void {
            this.cd = 0;
            this.target = "";
            this.type = type;
            this.level = DamageLevel.Basic;
            this.setDisplay();
        }

        public upgrade(): void {
            switch (this.level) {
                case DamageLevel.Basic:
                    this.level = DamageLevel.Advanced;
                    break;
                case DamageLevel.Advanced:
                case DamageLevel.Ultimate:
                    this.level = DamageLevel.Ultimate;
                    break;
            }
            this.cd = 0;
            this.setDisplay();
        }

        // -------------------------- props --------------------------

        /** 炮塔level */
        public level: DamageLevel;

        /** 炮塔子弹类型 */
        public type: BulletType;

        /** 炮台攻击范围 */
        public range: number;

        /** 技能CD（单位毫秒 | ms） */
        public cd: number;

        /** 攻击目标的hash */
        public target: string;

        // -------------------------- protected func --------------------------

        /** 检查子弹冷却时间并生成子弹 */
        protected generateBullet(timeStamp: number): void {
            this.dispatchEventWith(GameEvent.CreateBullet, true, {
                type: this.type,
                level: this.level,
                startX: this.x,
                startY: this.y,
                target: this.target
            });
            this.cd = Bullet.getCD(this.type, this.level);
        }

        /** 更新渲染 */
        protected setDisplay(): void {

        }

    }
}