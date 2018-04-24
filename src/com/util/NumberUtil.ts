module com {

    export class NumberUtil {

        public static getDistance(x1: number, x2: number, y1: number, y2: number): number {
            return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        }

    }
}