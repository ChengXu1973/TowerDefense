module game {

    export class Tower_0 extends BaseTower {

        public constructor() {
            super();
            this.initTower(BulletType.bullet_0);
            this.range = 3 * GlobalData.size;
        }

        protected setDisplay(): void {
            this.width = GlobalData.size;
            this.height = GlobalData.size;
            let t = new eui.Rect(65, 65, 0x279496);
            t.x = 25;
            t.y = 25;
            this.addChild(t);
        }
    }
}