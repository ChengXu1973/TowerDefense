module game {

    export class Enemy_1 extends BaseEnemy {

        public constructor() {
            super();
            this.type = EnemyType.enemy_1;
            this.initEnemy();
        }

        /** 初始化显示样式 */
        protected setDisplay(): void {
            this.width = GlobalData.size;
            this.height = GlobalData.size;
            let m = new eui.Rect(15, 15, 0xf26c3a);
            m.x = 50;
            m.y = 50;
            this.addChild(m);
        }

        /** 更新显示样式 */
        protected updateDisplay(): void {
            // 检查debuff效果渲染
        }

    }
}