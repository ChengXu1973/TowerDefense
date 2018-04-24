module game {

    export class Tower_1 extends BaseTower {

        public constructor() {
            super();
            this.initTower(BulletType.bullet_1);
            this.range = 2 * GlobalData.size;
        }

        protected setDisplay(): void {
            this.width = GlobalData.size;
            this.height = GlobalData.size;
            let t = new eui.Rect(65, 65, 0xe9495c);
            t.x = 25;
            t.y = 25;
            this.addChild(t);
        }
    }
}