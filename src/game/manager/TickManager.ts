module game {

    /** 统一执行ticker的update函数 */
    export class TickManager {

        // -------------------------- init --------------------------

        public constructor() {
            this.speed = 1;
            this._tickers = [];
        }

        public static instance: TickManager;
        public static getInstance(): TickManager {
            if (!this.instance) {
                this.instance = new TickManager();
            }
            return this.instance;
        }

        private _speed: number;
        /** 游戏速度 */
        public get speed(): number {
            return this._speed;
        }
        public set speed(v: number) {
            this._speed = v === 1 ? 1 : 2;
        }

        /** 优化 — 使用对象来储存tickers，避免获取对象时总要执行数组循环 */
        private _tickers: Array<{ ticker: ITicker; priority: TickerPriority }>;

        // -------------------------- API --------------------------

        /** 获取队列中的ticker */
        public getTicker(hash: string): ITicker {
            for (let i = this._tickers.length - 1; i >= 0; i--) {
                if (this._tickers[i].ticker.hash === hash) {
                    return this._tickers[i].ticker;
                }
            }
            return null;
        }

        /** 添加一个ticker
         * @param {ITicker} obj
         * @param {TickerPriority} priority 执行优先级，数字越大越靠后执行
         */
        public addTicker(obj: ITicker, priority: TickerPriority): void {
            for (let i = this._tickers.length - 1; i >= 0; i--) {
                if (this._tickers[i].ticker.hash === obj.hash) {
                    return;
                }
            }
            this._tickers.push({
                ticker: obj,
                priority: priority
            });
        }

        /** 移除一个ticker */
        public removeTicker(hash: string): void {
            for (let i = this._tickers.length - 1; i >= 0; i--) {
                if (this._tickers[i].ticker.hash === hash) {
                    this._tickers.splice(i, 1);
                    return;
                }
            }
        }

        /** 移除所有ticker */
        public removeAllTickers(): void {
            this._tickers = [];
        }

        public startTick(): void {
            this._tickers.sort((a, b) => {
                return a.priority - b.priority;
            })
            egret.startTick(this.tick, this);
        }

        public stopTick(): void {
            egret.stopTick(this.tick, this);
        }

        // -------------------------- func --------------------------

        private tick(timeStamp: number): boolean {
            for (let i = 0; i < this.speed; i++) {
                this._tickers.forEach((tickObj, index) => {
                    tickObj.ticker.update(timeStamp);
                });
            }
            return false;
        }
    }

    export const enum TickerPriority {
        tower,
        bullet,
        enemy,
        building,
        scene,
    }

}