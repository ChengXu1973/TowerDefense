module game {

    /** 子弹debuff效果 */
    export class Debuff {

        public constructor() { }

        /** debuff效果类型 */
        public type: DebuffType;
        /** 伤害值/每秒伤害值/debuff效果数值 */
        public value: number;
        /** debuff效果持续时间（单位毫秒 - ms） */
        public time: number;
        /** debuff效果开始作用时间（单位毫秒 - ms） */
        public effectTime?: number;
    }

    /** 子弹debuff效果枚举 */
    export const enum DebuffType {
        /** 一次性伤害（普通子弹击中） */
        HIT,
        /** 持续掉血（燃烧） */
        BLEED,
        /** 减速（冰冻） */
        SLOW,
        /** 静止（静止道具） */
        STILL,
        /** 虚弱（易伤效果） */
        WEAK,
    }

}