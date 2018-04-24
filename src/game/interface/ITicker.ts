module game {

    /** ticker基础结构 */
    export interface ITicker {
        /** init */
        start(): void;
        /** update state */
        update(timeStamp: number): void;
        /** dispose */
        clear(): void;
        /** ticker id */
        hash: string;
    }
}