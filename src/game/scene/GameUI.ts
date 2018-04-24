module game {

    export class GameUI extends BaseScene {

        public constructor(scene: SceneUI) {
            super(scene);
        }

        // -------------------------- init --------------------------

        /** 初始化场景数据 */
        protected initData(): void {

        }

        /** 初始化场景UI */
        protected initUI(): void {
            this.lv = new Level(this.data);
            this.groupLevel.addChild(this.lv);
            this.rectStart.visible = true;
            this.labelStart.visible = true;
        }

        // --------------------------  props --------------------------

        private lv: Level;

        // -------------------------- skin --------------------------

        private groupLevel: eui.Group;
        private btnPause: eui.Button;
        private switchSpeed: eui.ToggleSwitch;
        private rectStart: eui.Rect;
        private labelStart: eui.Label;
        private btnClear: eui.Button;
        private btnFreeze: eui.Button;

        // -------------------------- event --------------------------

        /** 注册/注销场景事件 */
        protected initEvent(b: boolean): void {
            if (b) {
                this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTap, this);
            } else {
                this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTap, this);
            }
        }

        private handleTap(evt: egret.TouchEvent): void {
            switch (evt.target) {
                case this.btnPause:
                    TickManager.getInstance().stopTick();
                    this.rectStart.visible = true;
                    this.labelStart.visible = true;
                    break;
                case this.switchSpeed:
                    TickManager.getInstance().speed = this.switchSpeed.selected ? 2 : 1;
                    break;
                case this.rectStart:
                    this.rectStart.visible = false;
                    this.labelStart.visible = false;
                    TickManager.getInstance().startTick();
                    break;
                case this.btnClear:
                    this.lv.clearAllEnemy();
                    break;
                case this.btnFreeze:
                    this.lv.freezeAllEnemy();
                    break;
            }
        }

        // -------------------------- func --------------------------


        // -------------------------- dispose --------------------------

        /** 从舞台移除后清理场景数据 */
        public dispose(): void {
            super.dispose();
        }

    }
}