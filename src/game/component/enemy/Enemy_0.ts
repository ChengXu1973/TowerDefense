module game {

    export class Enemy_0 extends BaseEnemy {

        public constructor() {
            super();
            this.type = EnemyType.enemy_0;
            this.initEnemy();
        }

        /** 初始化显示样式 */
        protected setDisplay(): void {
            this.width = GlobalData.size;
            this.height = GlobalData.size;
            let m = new eui.Rect(25, 25, 0xa91b6a);
            m.x = 45;
            m.y = 45;
            this.addChild(m);
        }

        /** 更新显示样式 */
        protected updateDisplay(): void {
            // 检查debuff效果渲染
        }

    }
}