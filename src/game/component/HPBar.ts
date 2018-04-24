module game {

    /** 血条组件 */
    export class HPBar extends egret.Sprite {

        public constructor() {
            super();
            this.delay = 1500;
            this.touchEnabled = false;
            this.width = GlobalData.size;
            this.height = GlobalData.size;
            this.alpha = 0;
            this.totalBar = new eui.Rect(HPBar.barW, HPBar.barH, 0xE83838);
            this.totalBar.x = (GlobalData.size - HPBar.barW) / 2;
            this.totalBar.y = 10;
            this.addChild(this.totalBar);
            this.currentBar = new eui.Rect(HPBar.barW, HPBar.barH, 0xB1B336);
            this.currentBar.x = (GlobalData.size - HPBar.barW) / 2;
            this.currentBar.y = 10;
            this.addChild(this.currentBar);
        }

        // -------------------------- props --------------------------

        private timeSign: number;

        /** 血条隐藏时间 */
        private delay: number;

        private totalBar: eui.Rect;

        private currentBar: eui.Rect;

        private static barW: number = 45;

        private static barH: number = 6;

        // -------------------------- API --------------------------

        /** 设置血量 */
        public setHP(total, current): void {
            this.currentBar.width = current * HPBar.barW / total;
        }

        /** 显示血条 */
        public setVisible(show: boolean = true): void {
            if (this.timeSign) {
                clearTimeout(this.timeSign);
            }
            if (!show) {
                this.alpha = 0;
                return;
            }
            this.alpha = 1;
            this.timeSign = setTimeout(() => {
                this.alpha = 0;
            }, this.delay);
        }

        /** 释放资源 */
        public clear(): void {
            if (this.timeSign) {
                clearTimeout(this.timeSign);
            }
        }

    }
}