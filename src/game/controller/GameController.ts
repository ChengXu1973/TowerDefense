module game {

    export class GameController extends egret.EventDispatcher {

        public constructor() {
            super();
        }

        /** 获取IP信息 */
        public static getIpInfo(): { ip: string; city: string } {
            if (window['ipInfo']) {
                return window['ipInfo']
            }
            return null;
        }

    }
}