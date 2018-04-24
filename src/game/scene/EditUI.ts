module game {

    export class EditUI extends BaseScene {

        public constructor(scene: SceneUI) {
            super(scene);
        }

        // -------------------------- init --------------------------

        /** 初始化场景数据 */
        protected initData(): void {
            this.isDrawing = false;
        }

        /** 初始化场景UI */
        protected initUI(): void {
            for (let i = 0; i < 13; i++) {
                for (let j = 0; j < 7; j++) {
                    let rect = this.groupPath.getChildByName(`x${i}y${j}`);
                    if (rect) {
                        rect.visible = false;
                    }
                }
            }
        }

        // --------------------------  props --------------------------

        private current: Array<number>;
        private path: Array<Array<number>>;

        // -------------------------- skin --------------------------

        private rectTouchArea: eui.Rect;
        private groupPath: eui.Group;

        // -------------------------- event --------------------------

        /** 注册/注销场景事件 */
        protected initEvent(b: boolean): void {
            if (b) {
                this.rectTouchArea.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.beginDraw, this);
                this.rectTouchArea.addEventListener(egret.TouchEvent.TOUCH_END, this.cancleDraw, this);
                this.rectTouchArea.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.cancleDraw, this);
            } else {
                this.rectTouchArea.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.beginDraw, this);
                this.rectTouchArea.removeEventListener(egret.TouchEvent.TOUCH_END, this.cancleDraw, this);
                this.rectTouchArea.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.cancleDraw, this);
            }
        }

        private isDrawing: boolean = false;

        private beginDraw(evt: egret.TouchEvent): void {
            this.isDrawing = true;
            let lx = evt.localX;
            let ly = evt.localY;
            let x = Math.floor(lx / GlobalData.size);
            let y = Math.floor(ly / GlobalData.size);
            this.current = [x, y];
            this.path = [
                [x, y]
            ];
            this.showPath(x, y);
            this.rectTouchArea.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.draw, this);
        }

        private draw(evt: egret.TouchEvent): void {
            if (!this.isDrawing) {
                return;
            }
            let lx = evt.localX;
            let ly = evt.localY;
            let x = Math.floor(lx / GlobalData.size);
            let y = Math.floor(ly / GlobalData.size);
            let pos = this.path[this.path.length - 1];
            if (pos[0] == x && pos[1] == y) {
                return;
            }
            this.path.push([x, y]);
            this.showPath(x, y);
        }

        private cancleDraw(): void {
            this.isDrawing = false;
            this.rectTouchArea.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.draw, this);
            this.checkValid();
        }

        private checkValid(): void {
            let valid = true;
            let tip = "没画好！";
            if (this.path.length < 3) {
                valid = false;
                tip = "太短了！";
            }
            let start = this.path[0];
            let end = this.path[this.path.length - 1];
            if (start[0] == end[0] && start[1] == end[1]) {
                valid = false;
                tip = "起点和终点不能重合！"
            }
            for (let i = 1; i < this.path.length - 1; i++) {
                let p = this.path[i];
                if (start[0] == p[0] && start[1] == p[1]) {
                    valid = false;
                    tip = "路径不能与起点或终点重合！"
                    break;
                }
                if (end[0] == p[0] && end[1] == p[1]) {
                    valid = false;
                    tip = "路径不能与起点或终点重合！"
                    break;
                }
            }
            for (let i = 1; i < this.path.length; i++) {
                let last = this.path[i - 1];
                let current = this.path[i];
                if (last[0] != current[0] && last[1] != current[1]) {
                    valid = false;
                }
            }
            if (valid) {
                this.openGameUI();
            } else {
                alert(tip);
                this.path = [];
                this.current = [];
                for (let i = 0; i < 13; i++) {
                    for (let j = 0; j < 7; j++) {
                        let rect = this.groupPath.getChildByName(`x${i}y${j}`);
                        if (rect) {
                            rect.visible = false;
                        }
                    }
                }
            }
        }

        // -------------------------- func --------------------------

        private openGameUI(): void {
            let data: game.LevelData = {
                /** 皮肤名 */
                skin: "alien",
                /** 地图宽 */
                width: 13,
                /** 地图高 */
                height: 7,
                /** 路径
                 * @desc 二维数组，存放的是路径各个转折点的坐标
                 */
                path: [
                    [0, 0],
                    [2, 0],
                    [2, 4],
                    [10, 4],
                    [10, 2],
                    [12, 2]
                ],
                /** 塔的类型 */
                tower: [0, 1, 2],
                /** 怪的类型 */
                enemy: [0, 1],
                /** 怪的波数 */
                round: 30,
                /** 初始金钱 */
                money: 10000,
                /** 初始怪物数量 */
                enemyNum: 5,
                /** 初始防御塔 */
                defaultTower: [
                    {
                        type: 0,
                        level: 1,
                        pos: [3, 3]
                    },
                    {
                        type: 5,
                        level: 1,
                        pos: [4, 3]
                    },
                    {
                        type: 4,
                        level: 0,
                        pos: [5, 3]
                    },
                    {
                        type: 1,
                        level: 0,
                        pos: [6, 3]
                    },
                    {
                        type: 2,
                        level: 0,
                        pos: [7, 3]
                    },
                    {
                        type: 3,
                        level: 2,
                        pos: [11, 3]
                    },
                ]
            };
            data.path = this.path;
            data.defaultTower = [];
            game.ScenesManager.getInstance().initUIScene(game.Scenes.GAMEUI, data);
        }

        private showPath(x, y): void {
            let rect = this.groupPath.getChildByName(`x${x}y${y}`);
            if (rect) {
                rect.visible = true;
            }
        }

        // -------------------------- dispose --------------------------

        /** 从舞台移除后清理场景数据 */
        public dispose(): void {
            super.dispose();
        }

    }
}