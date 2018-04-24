module game {

    /** 对象池基础结构 */
    export interface IPool {
        /** 获取一个对象 */
        getItem(type?): any;
        /** 将对象退回池中 */
        storeItem(item: any): void;
        /** 释放资源（貌似没啥用） */
        clear(): void;
    }
}