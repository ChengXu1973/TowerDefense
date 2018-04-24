module game {

    /** 子弹类型 */
    export const enum BulletType {
        /** 飞行子弹，一次性伤害 */
        bullet_0,
        /** 持续性伤害 */
        bullet_1,
        /** 一次性范围伤害 */
        bullet_2,
        /** 一次性伤害加减速效果 */
        bullet_3,
        /** 一次性伤害，飞行时跟踪初始目标 */
        bullet_4,
        /** 一次性伤害加溅射伤害 */
        bullet_5,
        /** bullet_5类型子弹的溅射伤害 */
        bullet_5_splash,
    }

    /** 子弹静态属性查询 */
    export class Bullet {

        /** 获取子弹碰撞体积/范围 */
        public static getHitRange(type: BulletType, level: DamageLevel): number {
            let base = 20;
            switch (type) {

            }
            switch (level) {
                case DamageLevel.Basic:
                    base *= 1;
                    break;
                case DamageLevel.Advanced:
                    base *= 1.2;
                    break;
                case DamageLevel.Ultimate:
                    base *= 1.5;
                    break;
            }
            return base;
        }

        /** 获取子弹debuff效果 */
        public static getDebuff(type: BulletType, level: DamageLevel): Array<Debuff> {
            let debuffs = [];
            switch (type) {
                case BulletType.bullet_0:
                    debuffs.push({
                        type: DebuffType.HIT, value: 10, time: 0
                    })
                    break;
                case BulletType.bullet_1:
                    debuffs.push({
                        type: DebuffType.BLEED, value: 5, time: 2000
                    })
                    break;
                case BulletType.bullet_2:
                    debuffs.push({
                        type: DebuffType.HIT, value: 6, time: 0
                    })
                    break;
                case BulletType.bullet_3:
                    debuffs.push({
                        type: DebuffType.HIT, value: 4, time: 0
                    });
                    debuffs.push({
                        type: DebuffType.SLOW, value: 0.6, time: 2000
                    });
                    break;
                case BulletType.bullet_4:
                    debuffs.push({
                        type: DebuffType.HIT, value: 10, time: 0
                    })
                    break;
                case BulletType.bullet_5:
                    break;
                case BulletType.bullet_5_splash:
                    debuffs.push({
                        type: DebuffType.HIT, value: 4, time: 0
                    })
                    break;
            }
            return debuffs;
        }

        /** 获取子弹飞行速度 */
        public static getVelocity(type: BulletType, level: DamageLevel): number {
            let speed = 5;
            switch (type) {
                case BulletType.bullet_0:
                    speed = 5;
                    break;
                case BulletType.bullet_1:
                    speed = 4;
                    break;
                case BulletType.bullet_2:
                    speed = 0;
                    break;
                case BulletType.bullet_3:
                    speed = 4;
                    break;
                case BulletType.bullet_4:
                    speed = 0.8;
                    break;
                case BulletType.bullet_5:
                    speed = 4;
                    break;
                case BulletType.bullet_5_splash:
                    speed = 0;
                    break;
            }
            switch (level) {
                case DamageLevel.Basic:
                    speed *= 1;
                    break;
                case DamageLevel.Advanced:
                    speed *= 1.1;
                    break;
                case DamageLevel.Ultimate:
                    speed *= 1.2;
                    break;
            }
            return speed;
        }

        /** 获取子弹发射CD时间 */
        public static getCD(type: BulletType, level: DamageLevel): number {
            let cd = 500;
            switch (type) {
                case BulletType.bullet_0:
                    cd = 500;
                    break;
                case BulletType.bullet_1:
                    cd = 1000;
                    break;
                case BulletType.bullet_2:
                    cd = 1500;
                    break;
                case BulletType.bullet_3:
                    cd = 1000;
                    break;
                case BulletType.bullet_4:
                    cd = 1000;
                    break;
                case BulletType.bullet_5:
                    cd = 1000;
                    break;
            }
            switch (level) {
                case DamageLevel.Basic:
                    cd *= 1;
                    break;
                case DamageLevel.Advanced:
                    cd *= 0.8;
                    break;
                case DamageLevel.Ultimate:
                    cd *= 0.6;
                    break;
            }
            return cd;
        }

    }
}