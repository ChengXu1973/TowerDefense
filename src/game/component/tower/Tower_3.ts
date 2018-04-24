module game {

    export class Tower_3 extends BaseTower {

        public constructor() {
            super();
            this.initTower(BulletType.bullet_3);
            this.range = 3 * GlobalData.size;
        }

        protected setDisplay(): void {
            this.width = GlobalData.size;
            this.height = GlobalData.size;
            let t = new eui.Rect(65, 65, 0x1593f2);
            t.x = 25;
            t.y = 25;
            this.addChild(t);
        }
    }
}