module com {

    export class Http {

        /**
         * Http协议的封装
         * @param method {egret.HttpMethod} egret.HttpMethod.GET |　egret.HttpMethod.POST
         */
        public static send(method: egret.HttpMethod): Promise<{}> {
            return new Promise((resolve, reject) => {
                let request = new egret.HttpRequest();
                let address = '';
                request.once(egret.Event.COMPLETE, () => {
                    resolve();
                }, this);
                request.once(egret.IOErrorEvent.IO_ERROR, () => {
                    reject();
                }, this);
                if (method === egret.HttpMethod.GET) {
                    request.open(address, egret.HttpMethod.GET);
                    request.send();
                }
                else if (method === egret.HttpMethod.POST) {
                    request.open(address, egret.HttpMethod.POST);
                    request.send();
                }
            });
        }

    }
}