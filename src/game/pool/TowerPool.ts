module game {

    /** 防御塔对象池 */
    export class TowerPool implements IPool {

        /** 构造函数 */
        public constructor() {
            this._items = [];
        }
        /** 单例对象 */
        private static _instance: TowerPool;
        /** 获取单例对象 */
        public static getInstance() {
            if (!this._instance) {
                this._instance = new TowerPool();
            }
            return this._instance;
        }

        /** 对象池数组 */
        private _items: Array<Array<BaseTower>>;

        // -------------------------- API --------------------------

        /** 获取一个对象 */
        public getItem(type: BulletType): BaseTower {
            let item = null;
            if (!this._items[type]) {
                this._items[type] = [];
            }
            if (this._items[type].length > 0) {
                item = this._items[type].pop();
            } else {
                switch (type) {
                    case BulletType.bullet_0:
                        item = new Tower_0();
                        break;
                    case BulletType.bullet_1:
                        item = new Tower_1();
                        break;
                    case BulletType.bullet_2:
                        item = new Tower_2();
                        break;
                    case BulletType.bullet_3:
                        item = new Tower_3();
                        break;
                    case BulletType.bullet_4:
                        item = new Tower_4();
                        break;
                    case BulletType.bullet_5:
                        item = new Tower_5();
                        break;
                }
            }
            return item;
        }

        /** 将对象退回池中 */
        public storeItem(item: BaseTower): void {
            item.clear();
            item.hash = com.StringUtil.getUUID();
            if (!this._items[item.type]) {
                this._items[item.type] = [];
            }
            this._items[item.type].push(item);
        }

        /** 释放资源（貌似没啥用） */
        public clear(): void {
            this._items = null;
        }

    }
}