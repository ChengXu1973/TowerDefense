module com {

    export class StringUtil {

        /** 获取全局唯一标识符（GUID，Globally Unique Identifier）/ UUID(Universally Unique IDentifier)
         * @param {number} len - UUID的长度（默认为8位）
         * @param {number} radix - 基数（默认为16进制）
         */
        public static getUUID(len: number = 8, radix: number = 16): string {
            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
            var uuid = [], i;
            radix = radix || chars.length;
            if (len) {
                // Compact form
                for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
            } else {
                // rfc4122, version 4 form
                var r;
                // rfc4122 requires these characters
                uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
                uuid[14] = '4';
                // Fill in random data.  At i==19 set the high bits of clock sequence as
                // per rfc4122, sec. 4.1.5
                for (i = 0; i < 36; i++) {
                    if (!uuid[i]) {
                        r = 0 | Math.random() * 16;
                        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                    }
                }
            }
            return uuid.join('');
        }

        /**校验 汉字、字母、数字或汉字、字母、数字的组合 false不合法 true合法*/
        public static checkNameValid(str: string): boolean {
            let reg = new RegExp(/^[A-Za-z0-9\u4e00-\u9fa5]+$/);
            return reg.test(str);
        }

        /** 获取字符串实际长度，中文字符长度为2，英文字符长度为1 */
        public static getStrLen(str: string): number {
            var len = 0;
            for (var i = 0; i < str.length; i++) {
                var c = str.charCodeAt(i);
                if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
                    len++;
                } else {
                    len += 2;
                }
            }
            return len;
        }

		/** 按照字符串实际长度对字符串进行截取，中文字符长度为2，英文字符长度为1
		 * @param str {string} 需要截取的字符串
		 * @param length {number} 截取的长度
		 * @param startIndex {number} 开始截取的位置，默认为0
		 */
        public static sliceByLen(str: string, length: number, startIndex: number = 0): string {
            let newStr = "";
            let len = 0;
            for (var i = startIndex; i < str.length; i++) {
                var c = str.charCodeAt(i);
                if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
                    len++;
                } else {
                    len += 2;
                }
                if (len <= length) {
                    newStr += str[i];
                }
            }
            return newStr;
        }

		/** 按照字符串实际长度对字符串进行截取，中文字符长度为2，英文字符长度为1, 截取之后显示...结尾
		 * @param str {string} 需要截取的字符串
		 * @param length {number} 截取的长度
		 * @param startIndex {number} 开始截取的位置，默认为0
		 */
        public static sliceByLen2(str: string, length: number, startIndex: number = 0): string {
            let newStr = this.sliceByLen(str, length, startIndex);
            if (newStr != str) newStr = newStr + "...";
            return newStr;
        }

        /**校验邮箱格式 */
        public static checkMail(mail: string): boolean {
            let myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            if (!myreg.test(mail)) {
                return false;
            }
            return true;
        }

		/**
		 * 解析url里的参数
		 * 返回参数构成的对象
		 */
        public static getUrlParam(url: string): any {
            var position = url.indexOf("?");
            var parameterStr = url.substr(position + 1);
            var arr = parameterStr.split("&");
            var obj = {};
            for (var i = 0; i < arr.length; i++) {
                var data = arr[i].split("=");
                obj[data[0]] = data[1];
            }
            return obj;
        }
    }
}