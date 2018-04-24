module game {

    export class Bullet_3 extends BaseBullet {

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
            let b = new eui.Rect(10, 10, 0x1593f2);
            b.x = 52;
            b.y = 52;
            this.addChild(b);
        }

        protected updateDisplay(): void {

        }
    }
}