module game {

    export class Scenes {

        constructor() { }

        public static BGUI: SceneUI = { name: 'BgUI', hierarchy: UIHierarchy.BG };
        public static HOMEUI: SceneUI = { name: 'HomeUI', hierarchy: UIHierarchy.UI };
        public static GAMEUI: SceneUI = { name: 'GameUI', hierarchy: UIHierarchy.UI };
        public static EDITUI: SceneUI = { name: 'EditUI', hierarchy: UIHierarchy.UI };
        public static LOGINUI: SceneUI = { name: 'LoginUI', hierarchy: UIHierarchy.UI };
    }

    export class SceneUI {
        public name: string;
        public hierarchy: UIHierarchy;
        public data?: any;
    }
}