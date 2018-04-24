module game {

    export class Bullet_2 extends BaseBullet {

        public constructor() {
            super();
            this.width = GlobalData.size;
            this.height = GlobalData.size;
            this.shape = new egret.Shape();
            this.shape.alpha = 0;
            this.shape.x = GlobalData.size / 2;
            this.shape.y = GlobalData.size / 2;
            this.shape.graphics.beginFill(0x0E9AA5, 1);
            this.shape.graphics.drawCircle(GlobalData.size / 2, GlobalData.size / 2, GlobalData.size / 2);
            this.shape.graphics.endFill();
            this.addChild(this.shape);
        }

        /** 碰撞后目标受到子弹debuff效果，子弹根据情况进行销毁
        * @desc 特殊子弹的效果（扩散伤害等）需要在子弹与目标碰撞后在目标处生成衍生子弹；
        */
        public hit(): void {
        }

        protected initDisplay(): void {
            this.hitRange = 0;
            this.shape.alpha = 0;
            this.shape.x = GlobalData.size / 2;
            this.shape.y = GlobalData.size / 2;
            this.shape.scaleX = 1;
            this.shape.scaleY = 1;
        }

        private shape: egret.Shape;

        public initBullet(type: BulletType, level: DamageLevel, startX: number, startY: number, target: string): void {
            super.initBullet(type, level, startX, startY, target);
            this.hitRange = 1;
        }

        public clear(): void {
            super.clear();
            this.initDisplay();
        }

        protected updateDisplay(): void {
            this.hitRange += GlobalData.size / 60;
            this.shape.alpha = Math.max((GlobalData.size * 2 - this.hitRange) / (GlobalData.size * 2), 0);
            this.shape.scaleX = this.hitRange / GlobalData.size;
            this.shape.scaleY = this.hitRange / GlobalData.size;
            this.shape.x = (GlobalData.size - this.hitRange) / 2;
            this.shape.y = (GlobalData.size - this.hitRange) / 2;
        }

        /** 检测是否需要消除 */
        protected checkNeedClear() {
            if (this.hitRange >= GlobalData.size * 2) {
                this.needClear = true;
            }
        }
    }
}