import PopupBase from "../../Exts/PopupBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SettingController extends PopupBase {

    @property(cc.Label) label: cc.Label | null = null;


    public initSetting(){
        
    }

    btnBackOnClick() {
        this.closeWithEffect()
    }


}
