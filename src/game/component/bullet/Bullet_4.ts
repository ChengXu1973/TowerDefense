module game {

    export class Bullet_4 extends BaseBullet {

        public constructor() {
            super();
        }

        /** 碰撞后目标受到子弹debuff效果，子弹根据情况进行销毁
        * @desc 特殊子弹的效果（扩散伤害等）需要在子弹与目标碰撞后在目标处生成衍生子弹；
        */
        public hit(): void {
            this.needClear = true;
        }

        protected initDisplay(): void {
            this.width = GlobalData.size;
            this.height = GlobalData.size;
            let b = new eui.Rect(10, 10, 0xF36B3B);
            b.x = 52;
            b.y = 52;
            this.addChild(b);
        }

        protected updatePos(): void {
            let targetObj = <BaseTower>TickManager.getInstance().getTicker(this.target);
            if (targetObj) {
                let y = targetObj.y - this.y;
                let x = targetObj.x - this.x;
                let d = Math.sqrt(x * x + y * y);
                if (d > 0) {
                    this.direction = egret.Point.create(x / d, y / d);
                } else {
                    this.direction = egret.Point.create(0, 0);
                }
            }
            if (this.velocity) {
                this.x += this.velocity * this.direction.x * GlobalData.size / 60;
                this.y += this.velocity * this.direction.y * GlobalData.size / 60;
            }
        }

        protected updateDisplay(): void {

        }
    }
}