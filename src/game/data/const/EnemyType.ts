module game {

    /** 敌人类型 */
    export const enum EnemyType {
        enemy_0,
        enemy_1,
    }

    /** 敌人静态属性查询 */
    export class Enemy {

        /** 获取敌人移动速度 */
        public static getSpeed(type: EnemyType): number {
            let speed = 1;
            switch (type) {
                case EnemyType.enemy_0:
                    speed = 0.5;
                    break;
                case EnemyType.enemy_1:
                    speed = 0.8;
                    break;
            }
            return speed / 60;
        }

        /** 获取敌人HP */
        public static getHP(type: EnemyType): number {
            let HP = 100;
            switch (type) {
                case EnemyType.enemy_0:
                    HP = 120;
                    break;
                case EnemyType.enemy_1:
                    HP = 80;
                    break;
            }
            return HP;
        }

        /** 获取敌人area */
        public static getArea(type: EnemyType): number {
            let area = 10;
            switch (type) {
                case EnemyType.enemy_0:
                    area = 12;
                    break;
                case EnemyType.enemy_1:
                    area = 8;
                    break;
            }
            return area;
        }

    }
}