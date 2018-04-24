module game {

    /** UIScene 基类 */
    export class BaseScene extends eui.Component {

        public constructor(scene: SceneUI) {
            super();
            this.data = scene.data || null;
            this.once(eui.UIEvent.COMPLETE, this.uiComplete, this);
            this.once(eui.UIEvent.REMOVED_FROM_STAGE, this.dispose, this);
            this.skinName = `resource/game_ui/${scene.name}Skin.exml`;
        }

        private uiComplete(): void {
            this.initData();
            this.initUI();
            this.initEvent(true);
        }

        /** scene初始数据 */
        protected data: any;

        /** 初始化场景数据 */
        protected initData(): void { }

        /** 注册/注销场景事件 */
        protected initEvent(b: boolean): void { }

        /** 初始化场景UI */
        protected initUI(): void { }

        /** 从舞台移除后清理场景数据 */
        public dispose(): void {
            this.initEvent(false);
        }
    }
}