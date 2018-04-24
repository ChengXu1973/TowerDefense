module game {

    /** 敌人类对象池 */
    export class EnemyPool implements IPool {

        /** 构造函数 */
        public constructor() {
            this._items = [];
        }
        /** 单例对象 */
        private static _instance: EnemyPool;
        /** 获取单例对象 */
        public static getInstance() {
            if (!this._instance) {
                this._instance = new EnemyPool();
            }
            return this._instance;
        }

        /** 对象池数组 */
        private _items: Array<Array<BaseEnemy>>;

        // -------------------------- API --------------------------

        /** 获取一个对象 */
        public getItem(type: EnemyType): BaseEnemy {
            let item = null;
            if (!this._items[type]) {
                this._items[type] = [];
            }
            if (this._items[type].length > 0) {
                item = this._items[type].pop();
            } else {
                switch (type) {
                    case EnemyType.enemy_0:
                        item = new Enemy_0();
                        break;
                    case EnemyType.enemy_1:
                        item = new Enemy_1();
                        break;
                }
            }
            return item;
        }

        /** 将对象退回池中 */
        public storeItem(item: BaseEnemy): void {
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