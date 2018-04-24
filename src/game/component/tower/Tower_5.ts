module game {

    export class Tower_5 extends BaseTower {

        public constructor() {
            super();
            this.initTower(BulletType.bullet_5);
            this.range = 2 * GlobalData.size;
        }

        protected setDisplay(): void {
            this.width = GlobalData.size;
            this.height = GlobalData.size;
            let t = new eui.Rect(65, 65, 0xEF1547);
            t.x = 25;
            t.y = 25;
            this.addChild(t);
        }
    }
}