module game {

    export class Tower_4 extends BaseTower {

        public constructor() {
            super();
            this.initTower(BulletType.bullet_4);
            this.range = 2 * GlobalData.size;
        }

        protected setDisplay(): void {
            this.width = GlobalData.size;
            this.height = GlobalData.size;
            let t = new eui.Rect(65, 65, 0xF36B3B);
            t.x = 25;
            t.y = 25;
            this.addChild(t);
        }
    }
}