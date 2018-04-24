module game {

    export class GameEvent {
        /** 生成一颗子弹 */
        public static CreateBullet: string = "CreateBullet";
        /** 敌人到达检查点 */
        public static EnemyClear: string = "EnemyClear";
        /** 卖塔 */
        public static TowerSold: string = "TowerSold";
        // /** 子弹消失 */
        // public static BulletClear: string = "BulletClear";
    }

}