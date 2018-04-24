module com {

    export class ArrayUtil {

        /** 对point数组进行排序
         * @param arr {egret.Point[]} 需要排序的point数组
         * @param type {number} 排序类型(默认0)： 0 - x大的排前面，x相同y大的排前面 | 1 - y大的排前面，y相同x大的排前面
         */
        public static sortPoints(arr: Array<egret.Point>, type: number = 0): Array<egret.Point> {
            switch (type) {
                case 0:
                    return arr.sort((a: egret.Point, b: egret.Point) => {
                        if (a.x != b.x) {
                            return a.x - b.x;
                        } else {
                            return a.y - b.y;
                        }
                    });
                case 1:
                    return arr.sort((a: egret.Point, b: egret.Point) => {
                        if (a.y != b.y) {
                            return a.y - b.y;
                        } else {
                            return a.x - b.x;
                        }
                    });
            }
        }

        /** 数组随机排序 Fisher–Yates shuffle */
        public static shuffle(arr: Array<any>): Array<any> {
            for (var i = arr.length - 1; i >= 0; i--) {
                var randomIndex = Math.floor(Math.random() * (i + 1));
                var itemAtIndex = arr[randomIndex];
                arr[randomIndex] = arr[i];
                arr[i] = itemAtIndex;
            }
            return arr;
        }

        /** 数组去重 */
        public static distinct(arr: Array<string>): Array<string> {
            if (Array.isArray(arr) && arr.length > 0) {
                let obj = {};
                let len = arr.length;
                for (let i = 0; i < len; i += 1) {
                    obj[arr[i]] = arr[i];
                }
                return Object.keys(obj);
            }
            return [];
        }

    }
}