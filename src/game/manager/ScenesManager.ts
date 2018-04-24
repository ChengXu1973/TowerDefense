module game {

    export class ScenesManager {

        // -------------------------- init --------------------------

        private static _instance: ScenesManager;
        public static getInstance(): ScenesManager {
            if (this._instance == null) {
                this._instance = new ScenesManager();
            }
            return this._instance;
        }

        private container: egret.DisplayObjectContainer;
        private loadingUI: LoadingUI;

        public constructor() {
            this.uiList = [];
            this.container = new egret.DisplayObjectContainer();
            this.container.width = 1080;
            this.container.height = 1920;
            this.container.x = 0;
            this.container.y = 0;
            this.loadingUI = new LoadingUI();
            this.loadingUI.visible = false;
            this.init();
        }

        public addToStage(stg: egret.Stage): void {
            stg.addChild(this.container);
            // this.container.scaleX = stg.stageWidth / 1920;
            // this.container.scaleY = stg.stageHeight / 1080;
            stg.addChild(this.loadingUI);
        }

        private init(): void {
            for (let i = 0; i < UIHierarchy.MAX; i++) {
                let container = new egret.DisplayObjectContainer();
                container = new egret.DisplayObjectContainer();
                container.width = 1920;
                container.height = 1080;
                container.x = 0;
                container.y = 0;
                container.scaleX = this.container.scaleX;
                container.scaleY = this.container.scaleY;
                this["container" + i] = container;
                this.container.addChild(container);
            }
        }

        // -------------------------- props --------------------------

        /** 记录打开UI的历史，主要用于返回上一个UI */
        private uiList: Array<SceneUI>;

        // -------------------------- API --------------------------

        /**需要显示的ui，只能同时存在一个，暂时不支持同时显示多个相同的ui */
        public initUIScene(scene: SceneUI, data?: any) {
            let container: egret.DisplayObjectContainer = this["container" + scene.hierarchy];
            if (scene.hierarchy === UIHierarchy.UI) {
                container.removeChildren();
            }
            let ui;
            scene.data = data;
            ui = new game[`${scene.name}`](scene);
            if (ui) {
                ui.name = scene.name;
                container.addChild(ui);
            }
        }

        // //获取当前UI的实例，方便子级Iem调用父级的方法
        // public getTheUIScene() {
        //     let ui = null;
        //     if (this.container.numChildren > 1) {
        //         ui = this.container.getChildAt(1);
        //     }
        //     return ui;
        // }

        /** 关闭一个UI */
        public closeUIscene(scene: SceneUI) {
            let str = scene.name;
            let container: egret.DisplayObjectContainer = this["container" + scene.hierarchy];
            let dis = container.getChildByName(scene.name);
            container.removeChild(dis);
        }

    }
}