module game {

    export class GlobalData {

        public constructor() { }

        // server path
        public static HttpServerPath: string = "http://127.0.0.1:7001";
        public static WebSocketServerPath: string = "http://127.0.0.1:7001";

        // game
        public static skin: string = '';

        // size  7 * 13 | 115 * 115
        public static size: number = 115;

    }
}