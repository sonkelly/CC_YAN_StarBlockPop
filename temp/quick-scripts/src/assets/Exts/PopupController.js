"use strict";
cc._RF.push(module, '436eembDk5P1rh/T79asjZa', 'PopupController');
// Exts/PopupController.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var PopupController_1;
Object.defineProperty(exports, "__esModule", { value: true });
const GameDefines_1 = __importDefault(require("../Script/Ultis/GameDefines"));
const { ccclass, property } = cc._decorator;
let PopupController = PopupController_1 = class PopupController extends cc.Component {
    constructor() {
        super(...arguments);
        this.GUI = null;
        this.initedNodes = new Map();
        this.isRewardPopup = false;
    }
    static get instance() {
        if (!PopupController_1._instance) {
            PopupController_1._instance = new PopupController_1();
        }
        return PopupController_1._instance;
    }
    onLoad() {
        PopupController_1._instance = this;
    }
    openPopupShop() {
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
    openPopupSetting() {
        let settingTS = this.initedNodes.get(GameDefines_1.default.POPUP_NAME.PO_SETTING);
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
                this.initedNodes.set(GameDefines_1.default.popupDailyReward, newDailyRewardTS);
                this.GUI.addChild(newDailyReward);
                newDailyReward.setSiblingIndex(this.GUI.childrenCount - 1);
            }
        }).catch(function (e) {
        });
    }
    loadPrefab(preName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Helper.extraBundle != null) {
                return new Promise((resolv, reject) => {
                    Helper.extraBundle.load("prefab/" + preName, cc.Prefab, function (err, prefab) {
                        if (!err && prefab) {
                            resolv(prefab);
                        }
                        else {
                            reject(err);
                        }
                    });
                });
            }
            else {
                return new Promise((resolv, reject) => {
                    cc.assetManager.loadBundle('ExtraBundle', (err, bundle) => {
                        Helper.extraBundle = bundle;
                        bundle.load("prefab/" + preName, cc.Prefab, function (err, prefab) {
                            if (!err && prefab) {
                                resolv(prefab);
                            }
                            else {
                                reject(err);
                            }
                        });
                    });
                });
            }
        });
    }
};
PopupController._instance = null;
// LIFE-CYCLE CALLBACKS:
PopupController.DieAudioPlayer = null;
PopupController.clickId = null;
PopupController.dieId = null;
__decorate([
    property({ type: cc.Node })
], PopupController.prototype, "GUI", void 0);
PopupController = PopupController_1 = __decorate([
    ccclass
], PopupController);
exports.default = PopupController;

cc._RF.pop();