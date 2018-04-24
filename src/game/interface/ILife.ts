module game {

    /** 具有生命值的物体基础结构 */
    export interface ILife {
        /** 总生命 */
        totalHP: number;
        /** 当前生命 */
        currentHP: number;
        /** 血条 */
        hpBar: HPBar;
    }
}