import GameDefines from "../Script/Ultis/GameDefines";

const { ccclass, property } = cc._decorator;


@ccclass
export default class PopupController extends cc.Component {

    static _instance: PopupController | null = null;

    static get instance() {
        if (!PopupController._instance) {
            PopupController._instance = new PopupController();
        }
        return PopupController._instance;
    }

    @property({ type: cc.Node })
    GUI: cc.Node = null;

    private initedNodes: Map<string, any> = new Map();




    // LIFE-CYCLE CALLBACKS:
    static DieAudioPlayer: any = null;

    static clickId: any = null;
    static dieId: any = null;
    public isRewardPopup: boolean = false;
    onLoad() {
        PopupController._instance = this;
    }

    public openPopupShop(): void {
        // this.isRewardPopup = true;
        // let dailyRewardTS = this.initedNodes.get(GameDefines.popupDailyReward);
        // if (dailyRewardTS) {
        //     dailyRewardTS.initDailyReward();
        //     dailyRewardTS.node.setSiblingIndex(this.GUI.childrenCount - 1);
        //     return;
        // }

        // this.loadPrefab("DailyReward").then((prefabDaily) => {
        //     let newDailyReward = cc.instantiate(prefabDaily);
        //     if (newDailyReward) {
        //         let newDailyRewardTS = newDailyReward.getComponent("DailyRewardManager");
        //         newDailyRewardTS.initDailyReward();
        //         this.initedNodes.set(GameDefines.popupDailyReward, newDailyRewardTS);
        //         this.GUI.addChild(newDailyReward);
        //         newDailyReward.setSiblingIndex(this.GUI.childrenCount - 1);
        //     }
        // }).catch(function (e) {

        // })

    }

    public openPopupSetting() {
        let settingTS = this.initedNodes.get(GameDefines.POPUP_NAME.PO_SETTING);
        if (settingTS) {
            settingTS.initDailyReward();
            settingTS.node.setSiblingIndex(this.GUI.childrenCount - 1);
            return;
        }

        this.loadPrefab("PopupSetting").then((prefabSetting) => {
            let newDailyReward = cc.instantiate(prefabDaily);
            if (newDailyReward) {
                let newDailyRewardTS = newDailyReward.getComponent("DailyRewardManager");
                newDailyRewardTS.initDailyReward();
                this.initedNodes.set(GameDefines.popupDailyReward, newDailyRewardTS);
                this.GUI.addChild(newDailyReward);
                newDailyReward.setSiblingIndex(this.GUI.childrenCount - 1);
            }
        }).catch(function (e) {

        })
    }

    public async loadPrefab(preName): Promise<cc.Prefab> {
        if (Helper.extraBundle != null) {
            return new Promise((resolv, reject) => {
                Helper.extraBundle.load("prefab/" + preName, cc.Prefab, function (err, prefab) {
                    if (!err && prefab) {
                        resolv(prefab as cc.Prefab);
                    } else {
                        reject(err);
                    }
                });
            })
        } else {
            return new Promise((resolv, reject) => {
                cc.assetManager.loadBundle('ExtraBundle', (err, bundle) => {
                    Helper.extraBundle = bundle;
                    bundle.load("prefab/" + preName, cc.Prefab, function (err, prefab) {
                        if (!err && prefab) {
                            resolv(prefab as cc.Prefab);
                        } else {
                            reject(err);
                        }
                    });
                });
            })
        }
    }
}
