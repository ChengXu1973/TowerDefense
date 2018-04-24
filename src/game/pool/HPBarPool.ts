module game {

    /** 生命条对象池（貌似这个东西没啥卵用，因为继承了ILife接口的东西都有自己的对象池...囧） */
    export class HPBarPool implements IPool {

        /** 构造函数 */
        public constructor() {
            this._items = [];
        }
        /** 单例对象 */
        private static _instance: HPBarPool;
        /** 获取单例对象 */
        public static getInstance() {
            if (!this._instance) {
                this._instance = new HPBarPool();
            }
            return this._instance;
        }

        /** 对象池数组 */
        private _items: Array<HPBar>;

        // -------------------------- API --------------------------

        /** 获取一个对象 */
        public getItem(): HPBar {
            let item = null;
            if (this._items.length > 0) {
                item = this._items.pop();
            } else {
                item = new HPBar();
            }
            return item;
        }

        /** 将对象退回池中 */
        public storeItem(item: HPBar): void {
            item.clear();
            this._items.push(item);
        }

        /** 释放资源（貌似没啥用） */
        public clear(): void {
            this._items.forEach((item) => {
                item.clear();
            })
            this._items = [];
        }

    }
}