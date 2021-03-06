module game {

    export class Bullet_0 extends BaseBullet {

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
            let b = new eui.Rect(5, 5, 0x000000);
            b.x = 55;
            b.y = 55;
            this.addChild(b);
        }

        protected updateDisplay(): void {

        }
    }
}