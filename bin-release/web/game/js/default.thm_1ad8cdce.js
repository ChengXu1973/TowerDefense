window.skins={};
function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
    __.prototype = b.prototype;
    d.prototype = new __();
};
window.generateEUI = {};
generateEUI.paths = {};
generateEUI.styles = undefined;
generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"}
generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text")
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/game_ui/EditUISkin.exml'] = window.$exmlClass1 = (function (_super) {
	__extends($exmlClass1, _super);
	function $exmlClass1() {
		_super.call(this);
		this.skinParts = ["groupPath","rectTouchArea"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this._Label1_i()];
	}
	var _proto = $exmlClass1.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 1;
		t.fillColor = 0x000000;
		t.percentHeight = 100;
		t.touchEnabled = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 805;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1495;
		t.elementsContent = [this._Rect2_i(),this.groupPath_i(),this.rectTouchArea_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.alpha = 1;
		t.fillColor = 0xeeeeee;
		t.percentHeight = 100;
		t.touchEnabled = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.groupPath_i = function () {
		var t = new eui.Group();
		this.groupPath = t;
		t.height = 805;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 1495;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this._Rect6_i(),this._Rect7_i(),this._Rect8_i(),this._Rect9_i(),this._Rect10_i(),this._Rect11_i(),this._Rect12_i(),this._Rect13_i(),this._Rect14_i(),this._Rect15_i(),this._Rect16_i(),this._Rect17_i(),this._Rect18_i(),this._Rect19_i(),this._Rect20_i(),this._Rect21_i(),this._Rect22_i(),this._Rect23_i(),this._Rect24_i(),this._Rect25_i(),this._Rect26_i(),this._Rect27_i(),this._Rect28_i(),this._Rect29_i(),this._Rect30_i(),this._Rect31_i(),this._Rect32_i(),this._Rect33_i(),this._Rect34_i(),this._Rect35_i(),this._Rect36_i(),this._Rect37_i(),this._Rect38_i(),this._Rect39_i(),this._Rect40_i(),this._Rect41_i(),this._Rect42_i(),this._Rect43_i(),this._Rect44_i(),this._Rect45_i(),this._Rect46_i(),this._Rect47_i(),this._Rect48_i(),this._Rect49_i(),this._Rect50_i(),this._Rect51_i(),this._Rect52_i(),this._Rect53_i(),this._Rect54_i(),this._Rect55_i(),this._Rect56_i(),this._Rect57_i(),this._Rect58_i(),this._Rect59_i(),this._Rect60_i(),this._Rect61_i(),this._Rect62_i(),this._Rect63_i(),this._Rect64_i(),this._Rect65_i(),this._Rect66_i(),this._Rect67_i(),this._Rect68_i(),this._Rect69_i(),this._Rect70_i(),this._Rect71_i(),this._Rect72_i(),this._Rect73_i(),this._Rect74_i(),this._Rect75_i(),this._Rect76_i(),this._Rect77_i(),this._Rect78_i(),this._Rect79_i(),this._Rect80_i(),this._Rect81_i(),this._Rect82_i(),this._Rect83_i(),this._Rect84_i(),this._Rect85_i(),this._Rect86_i(),this._Rect87_i(),this._Rect88_i(),this._Rect89_i(),this._Rect90_i(),this._Rect91_i(),this._Rect92_i(),this._Rect93_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x0y0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x0y1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 0;
		t.y = 115;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x0y2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 0;
		t.y = 230;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x0y3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 0;
		t.y = 345;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x0y4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 0;
		t.y = 460;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x0y5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 0;
		t.y = 575;
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x0y6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 0;
		t.y = 690;
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x1y0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 115;
		t.y = 0;
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x1y1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 115;
		t.y = 115;
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x1y2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 115;
		t.y = 230;
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x1y3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 115;
		t.y = 345;
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x1y4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 115;
		t.y = 460;
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x1y5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 115;
		t.y = 575;
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x1y6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 115;
		t.y = 690;
		return t;
	};
	_proto._Rect17_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x2y0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 230;
		t.y = 0;
		return t;
	};
	_proto._Rect18_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x2y1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 230;
		t.y = 115;
		return t;
	};
	_proto._Rect19_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x2y2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 230;
		t.y = 230;
		return t;
	};
	_proto._Rect20_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x2y3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 230;
		t.y = 345;
		return t;
	};
	_proto._Rect21_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x2y4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 230;
		t.y = 460;
		return t;
	};
	_proto._Rect22_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x2y5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 230;
		t.y = 575;
		return t;
	};
	_proto._Rect23_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x2y6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 230;
		t.y = 690;
		return t;
	};
	_proto._Rect24_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x3y0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 345;
		t.y = 0;
		return t;
	};
	_proto._Rect25_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x3y1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 345;
		t.y = 115;
		return t;
	};
	_proto._Rect26_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x3y2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 345;
		t.y = 230;
		return t;
	};
	_proto._Rect27_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x3y3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 345;
		t.y = 345;
		return t;
	};
	_proto._Rect28_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x3y4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 345;
		t.y = 460;
		return t;
	};
	_proto._Rect29_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x3y5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 345;
		t.y = 575;
		return t;
	};
	_proto._Rect30_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x3y6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 345;
		t.y = 690;
		return t;
	};
	_proto._Rect31_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x4y0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 460;
		t.y = 0;
		return t;
	};
	_proto._Rect32_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x4y1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 460;
		t.y = 115;
		return t;
	};
	_proto._Rect33_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x4y2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 460;
		t.y = 230;
		return t;
	};
	_proto._Rect34_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x4y3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 460;
		t.y = 345;
		return t;
	};
	_proto._Rect35_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x4y4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 460;
		t.y = 460;
		return t;
	};
	_proto._Rect36_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x4y5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 460;
		t.y = 575;
		return t;
	};
	_proto._Rect37_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x4y6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 460;
		t.y = 690;
		return t;
	};
	_proto._Rect38_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x5y0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 575;
		t.y = 0;
		return t;
	};
	_proto._Rect39_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x5y1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 575;
		t.y = 115;
		return t;
	};
	_proto._Rect40_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x5y2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 575;
		t.y = 230;
		return t;
	};
	_proto._Rect41_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x5y3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 575;
		t.y = 345;
		return t;
	};
	_proto._Rect42_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x5y4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 575;
		t.y = 460;
		return t;
	};
	_proto._Rect43_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x5y5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 575;
		t.y = 575;
		return t;
	};
	_proto._Rect44_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x5y6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 575;
		t.y = 690;
		return t;
	};
	_proto._Rect45_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x6y0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 690;
		t.y = 0;
		return t;
	};
	_proto._Rect46_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x6y1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 690;
		t.y = 115;
		return t;
	};
	_proto._Rect47_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x6y2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 690;
		t.y = 230;
		return t;
	};
	_proto._Rect48_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x6y3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 690;
		t.y = 345;
		return t;
	};
	_proto._Rect49_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x6y4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 690;
		t.y = 460;
		return t;
	};
	_proto._Rect50_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x6y5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 690;
		t.y = 575;
		return t;
	};
	_proto._Rect51_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x6y6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 690;
		t.y = 690;
		return t;
	};
	_proto._Rect52_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x7y0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 805;
		t.y = 0;
		return t;
	};
	_proto._Rect53_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x7y1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 805;
		t.y = 115;
		return t;
	};
	_proto._Rect54_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x7y2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 805;
		t.y = 230;
		return t;
	};
	_proto._Rect55_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x7y3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 805;
		t.y = 345;
		return t;
	};
	_proto._Rect56_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x7y4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 805;
		t.y = 460;
		return t;
	};
	_proto._Rect57_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x7y5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 805;
		t.y = 575;
		return t;
	};
	_proto._Rect58_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x7y6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 805;
		t.y = 690;
		return t;
	};
	_proto._Rect59_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x8y0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 920;
		t.y = 0;
		return t;
	};
	_proto._Rect60_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x8y1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 920;
		t.y = 115;
		return t;
	};
	_proto._Rect61_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x8y2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 920;
		t.y = 230;
		return t;
	};
	_proto._Rect62_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x8y3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 920;
		t.y = 345;
		return t;
	};
	_proto._Rect63_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x8y4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 920;
		t.y = 460;
		return t;
	};
	_proto._Rect64_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x8y5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 920;
		t.y = 575;
		return t;
	};
	_proto._Rect65_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x8y6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 920;
		t.y = 690;
		return t;
	};
	_proto._Rect66_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x9y0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1035;
		t.y = 0;
		return t;
	};
	_proto._Rect67_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x9y1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1035;
		t.y = 115;
		return t;
	};
	_proto._Rect68_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x9y2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1035;
		t.y = 230;
		return t;
	};
	_proto._Rect69_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x9y3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1035;
		t.y = 345;
		return t;
	};
	_proto._Rect70_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x9y4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1035;
		t.y = 460;
		return t;
	};
	_proto._Rect71_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x9y5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1035;
		t.y = 575;
		return t;
	};
	_proto._Rect72_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x9y6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1035;
		t.y = 690;
		return t;
	};
	_proto._Rect73_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x10y0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1150;
		t.y = 0;
		return t;
	};
	_proto._Rect74_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x10y1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1150;
		t.y = 115;
		return t;
	};
	_proto._Rect75_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x10y2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1150;
		t.y = 230;
		return t;
	};
	_proto._Rect76_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x10y3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1150;
		t.y = 345;
		return t;
	};
	_proto._Rect77_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x10y4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1150;
		t.y = 460;
		return t;
	};
	_proto._Rect78_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x10y5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1150;
		t.y = 575;
		return t;
	};
	_proto._Rect79_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x10y6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1150;
		t.y = 690;
		return t;
	};
	_proto._Rect80_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x11y0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1265;
		t.y = 0;
		return t;
	};
	_proto._Rect81_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x11y1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1265;
		t.y = 115;
		return t;
	};
	_proto._Rect82_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x11y2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1265;
		t.y = 230;
		return t;
	};
	_proto._Rect83_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x11y3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1265;
		t.y = 345;
		return t;
	};
	_proto._Rect84_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x11y4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1265;
		t.y = 460;
		return t;
	};
	_proto._Rect85_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x11y5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1265;
		t.y = 575;
		return t;
	};
	_proto._Rect86_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x11y6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1265;
		t.y = 690;
		return t;
	};
	_proto._Rect87_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x12y0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1380;
		t.y = 0;
		return t;
	};
	_proto._Rect88_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x12y1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1380;
		t.y = 115;
		return t;
	};
	_proto._Rect89_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x12y2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1380;
		t.y = 230;
		return t;
	};
	_proto._Rect90_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x12y3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1380;
		t.y = 345;
		return t;
	};
	_proto._Rect91_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x12y4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1380;
		t.y = 460;
		return t;
	};
	_proto._Rect92_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x12y5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1380;
		t.y = 575;
		return t;
	};
	_proto._Rect93_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 115;
		t.name = "x12y6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 115;
		t.x = 1380;
		t.y = 690;
		return t;
	};
	_proto.rectTouchArea_i = function () {
		var t = new eui.Rect();
		this.rectTouchArea = t;
		t.alpha = 0.01;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 40;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "在空白区域画一条线";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 800;
		t.y = 58;
		return t;
	};
	return $exmlClass1;
})(eui.Skin);generateEUI.paths['resource/game_ui/GameUISkin.exml'] = window.$exmlClass2 = (function (_super) {
	__extends($exmlClass2, _super);
	function $exmlClass2() {
		_super.call(this);
		this.skinParts = ["btnPause","switchSpeed","btnClear","btnFreeze","groupLevel","rectStart","labelStart"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.btnPause_i(),this.switchSpeed_i(),this._Label1_i(),this._Group1_i(),this.groupLevel_i(),this.rectStart_i(),this.labelStart_i()];
	}
	var _proto = $exmlClass2.prototype;

	_proto.btnPause_i = function () {
		var t = new eui.Button();
		this.btnPause = t;
		t.height = 70;
		t.label = "| |";
		t.width = 70;
		t.x = 648.49;
		t.y = 976.15;
		return t;
	};
	_proto.switchSpeed_i = function () {
		var t = new eui.ToggleSwitch();
		this.switchSpeed = t;
		t.label = "ToggleButton";
		t.x = 1204;
		t.y = 976.15;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "2X";
		t.x = 1218;
		t.y = 1016.15;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 800;
		t.y = 10;
		t.elementsContent = [this.btnClear_i(),this.btnFreeze_i()];
		return t;
	};
	_proto.btnClear_i = function () {
		var t = new eui.Button();
		this.btnClear = t;
		t.label = "ClearAll";
		t.verticalCenter = 0;
		t.x = 150;
		return t;
	};
	_proto.btnFreeze_i = function () {
		var t = new eui.Button();
		this.btnFreeze = t;
		t.label = "Freeze";
		t.verticalCenter = 0;
		t.x = 550;
		return t;
	};
	_proto.groupLevel_i = function () {
		var t = new eui.Group();
		this.groupLevel = t;
		t.height = 805;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1495;
		return t;
	};
	_proto.rectStart_i = function () {
		var t = new eui.Rect();
		this.rectStart = t;
		t.alpha = 0.5;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelStart_i = function () {
		var t = new eui.Label();
		this.labelStart = t;
		t.height = 50;
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "Start";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "bottom";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 154;
		return t;
	};
	return $exmlClass2;
})(eui.Skin);generateEUI.paths['resource/game_ui/component/LevelSkin.exml'] = window.$exmlClass3 = (function (_super) {
	__extends($exmlClass3, _super);
	function $exmlClass3() {
		_super.call(this);
		this.skinParts = ["groupPath","groupTower","groupBuild","groupEnemy","groupBullet","groupEffect","rectTouchArea","rectAddTower","btnAddTower0","btnAddTower1","btnAddTower2","btnAddTower3","btnAddTower4","btnAddTower5","groupAddTower","rectEditTower","btnUpgradeTower","btnDeleteTower","groupEditTower"];
		
		this.height = 805;
		this.width = 1495;
		this.elementsContent = [this._Rect1_i(),this.groupPath_i(),this.groupTower_i(),this.groupBuild_i(),this.groupEnemy_i(),this.groupBullet_i(),this.groupEffect_i(),this.rectTouchArea_i(),this.groupAddTower_i(),this.groupEditTower_i()];
	}
	var _proto = $exmlClass3.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 1;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.groupPath_i = function () {
		var t = new eui.Group();
		this.groupPath = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.groupTower_i = function () {
		var t = new eui.Group();
		this.groupTower = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.groupBuild_i = function () {
		var t = new eui.Group();
		this.groupBuild = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.groupEnemy_i = function () {
		var t = new eui.Group();
		this.groupEnemy = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.groupBullet_i = function () {
		var t = new eui.Group();
		this.groupBullet = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.groupEffect_i = function () {
		var t = new eui.Group();
		this.groupEffect = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rectTouchArea_i = function () {
		var t = new eui.Rect();
		this.rectTouchArea = t;
		t.alpha = 0.01;
		t.percentHeight = 100;
		t.touchEnabled = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.groupAddTower_i = function () {
		var t = new eui.Group();
		this.groupAddTower = t;
		t.percentHeight = 100;
		t.touchThrough = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.rectAddTower_i(),this.btnAddTower0_i(),this.btnAddTower1_i(),this.btnAddTower2_i(),this.btnAddTower3_i(),this.btnAddTower4_i(),this.btnAddTower5_i()];
		return t;
	};
	_proto.rectAddTower_i = function () {
		var t = new eui.Rect();
		this.rectAddTower = t;
		t.alpha = 0.5;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.width = 1920;
		return t;
	};
	_proto.btnAddTower0_i = function () {
		var t = new eui.Button();
		this.btnAddTower0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "一次性伤害";
		t.width = 200;
		t.x = 75;
		t.y = -100;
		return t;
	};
	_proto.btnAddTower1_i = function () {
		var t = new eui.Button();
		this.btnAddTower1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "持续性伤害";
		t.width = 200;
		t.x = 301;
		t.y = -100;
		return t;
	};
	_proto.btnAddTower2_i = function () {
		var t = new eui.Button();
		this.btnAddTower2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "一次性范围伤害";
		t.width = 200;
		t.x = 523;
		t.y = -100;
		return t;
	};
	_proto.btnAddTower3_i = function () {
		var t = new eui.Button();
		this.btnAddTower3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "一次性伤害加减速";
		t.width = 200;
		t.x = 748;
		t.y = -100;
		return t;
	};
	_proto.btnAddTower4_i = function () {
		var t = new eui.Button();
		this.btnAddTower4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "一次性伤害加跟踪";
		t.width = 200;
		t.x = 969;
		t.y = -100;
		return t;
	};
	_proto.btnAddTower5_i = function () {
		var t = new eui.Button();
		this.btnAddTower5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "溅射伤害";
		t.width = 200;
		t.x = 1191;
		t.y = -100;
		return t;
	};
	_proto.groupEditTower_i = function () {
		var t = new eui.Group();
		this.groupEditTower = t;
		t.percentHeight = 100;
		t.touchThrough = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.rectEditTower_i(),this.btnUpgradeTower_i(),this.btnDeleteTower_i()];
		return t;
	};
	_proto.rectEditTower_i = function () {
		var t = new eui.Rect();
		this.rectEditTower = t;
		t.alpha = 0.5;
		t.height = 1080;
		t.horizontalCenter = 0;
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.width = 1920;
		return t;
	};
	_proto.btnUpgradeTower_i = function () {
		var t = new eui.Button();
		this.btnUpgradeTower = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "升级";
		t.width = 200;
		t.x = 523;
		t.y = -100;
		return t;
	};
	_proto.btnDeleteTower_i = function () {
		var t = new eui.Button();
		this.btnDeleteTower = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "删除";
		t.width = 200;
		t.x = 748;
		t.y = -100;
		return t;
	};
	return $exmlClass3;
})(eui.Skin);