module game {

    /** 关卡数据 */
    export class LevelData {
        /** 皮肤名 */
        public skin: string;
        /** 地图宽 */
        public width: number;
        /** 地图高 */
        public height: number;
        /** 路径
         * @desc 二维数组，存放的是路径各个转折点的坐标
         */
        public path: Array<Array<number>>;
        /** 塔的类型 */
        public tower: Array<number>;
        /** 怪的类型 */
        public enemy: Array<number>;
        /** 怪的波数 */
        public round: number;
        /** 初始金钱 */
        public money: number;
        /** 初始怪物数量 */
        public enemyNum: number;
        /** 初始防御塔 */
        public defaultTower: Array<TowerPosition>;
    }

    export class TowerPosition {
        public type: BulletType;
        public level: DamageLevel;
        public pos: Array<number>;
    }
}