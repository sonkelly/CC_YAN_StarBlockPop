
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Exts/PersistNode');
require('./assets/Exts/PopupBase');
require('./assets/Exts/PopupController');
require('./assets/Script/AnimLayerTool');
require('./assets/Script/CardSprite');
require('./assets/Script/GameConfig');
require('./assets/Script/GameData');
require('./assets/Script/GamePopStar');
require('./assets/Script/GameScene');
require('./assets/Script/GameTools');
require('./assets/Script/GameUiTools');
require('./assets/Script/LoadingScene');
require('./assets/Script/MenuUI');
require('./assets/Script/Ultis/GameDefines');
require('./assets/Script/assist/AnimInAndOut');
require('./assets/Script/controller/SettingController');
require('./assets/Script/panel/GameHelp');
require('./assets/Script/panel/GameOver');
require('./assets/Script/panel/GamePass');
require('./assets/Script/panel/GamePropHelp');
require('./assets/Script/panel/GamePropNode');
require('./assets/Script/panel/RankingListView');
require('./assets/Script/panel/ShowMessage');
require('./assets/migration/use_v2.0.x_cc.Toggle_event');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Exts/PopupController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXh0c1xcUG9wdXBDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhFQUFzRDtBQUV0RCxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFJNUMsSUFBcUIsZUFBZSx1QkFBcEMsTUFBcUIsZUFBZ0IsU0FBUSxFQUFFLENBQUMsU0FBUztJQUF6RDs7UUFZSSxRQUFHLEdBQVksSUFBSSxDQUFDO1FBRVosZ0JBQVcsR0FBcUIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQVUzQyxrQkFBYSxHQUFZLEtBQUssQ0FBQztJQTZFMUMsQ0FBQztJQWpHRyxNQUFNLEtBQUssUUFBUTtRQUNmLElBQUksQ0FBQyxpQkFBZSxDQUFDLFNBQVMsRUFBRTtZQUM1QixpQkFBZSxDQUFDLFNBQVMsR0FBRyxJQUFJLGlCQUFlLEVBQUUsQ0FBQztTQUNyRDtRQUNELE9BQU8saUJBQWUsQ0FBQyxTQUFTLENBQUM7SUFDckMsQ0FBQztJQWdCRCxNQUFNO1FBQ0YsaUJBQWUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFTSxhQUFhO1FBQ2hCLDZCQUE2QjtRQUM3QiwwRUFBMEU7UUFDMUUsdUJBQXVCO1FBQ3ZCLHVDQUF1QztRQUN2QyxzRUFBc0U7UUFDdEUsY0FBYztRQUNkLElBQUk7UUFFSix5REFBeUQ7UUFDekQsd0RBQXdEO1FBQ3hELDRCQUE0QjtRQUM1QixvRkFBb0Y7UUFDcEYsOENBQThDO1FBQzlDLGdGQUFnRjtRQUNoRiw2Q0FBNkM7UUFDN0Msc0VBQXNFO1FBQ3RFLFFBQVE7UUFDUiwwQkFBMEI7UUFFMUIsS0FBSztJQUVULENBQUM7SUFFTSxnQkFBZ0I7UUFDbkIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMscUJBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxD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OiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVEZWZpbmVzIGZyb20gXCIuLi9TY3JpcHQvVWx0aXMvR2FtZURlZmluZXNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0aWMgX2luc3RhbmNlOiBQb3B1cENvbnRyb2xsZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmICghUG9wdXBDb250cm9sbGVyLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBQb3B1cENvbnRyb2xsZXIuX2luc3RhbmNlID0gbmV3IFBvcHVwQ29udHJvbGxlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUG9wdXBDb250cm9sbGVyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlIH0pXHJcbiAgICBHVUk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaW5pdGVkTm9kZXM6IE1hcDxzdHJpbmcsIGFueT4gPSBuZXcgTWFwKCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBzdGF0aWMgRGllQXVkaW9QbGF5ZXI6IGFueSA9IG51bGw7XHJcblxyXG4gICAgc3RhdGljIGNsaWNrSWQ6IGFueSA9IG51bGw7XHJcbiAgICBzdGF0aWMgZGllSWQ6IGFueSA9IG51bGw7XHJcbiAgICBwdWJsaWMgaXNSZXdhcmRQb3B1cDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIFBvcHVwQ29udHJvbGxlci5faW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuUG9wdXBTaG9wKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMuaXNSZXdhcmRQb3B1cCA9IHRydWU7XHJcbiAgICAgICAgLy8gbGV0IGRhaWx5UmV3YXJkVFMgPSB0aGlzLmluaXRlZE5vZGVzLmdldChHYW1lRGVmaW5lcy5wb3B1cERhaWx5UmV3YXJkKTtcclxuICAgICAgICAvLyBpZiAoZGFpbHlSZXdhcmRUUykge1xyXG4gICAgICAgIC8vICAgICBkYWlseVJld2FyZFRTLmluaXREYWlseVJld2FyZCgpO1xyXG4gICAgICAgIC8vICAgICBkYWlseVJld2FyZFRTLm5vZGUuc2V0U2libGluZ0luZGV4KHRoaXMuR1VJLmNoaWxkcmVuQ291bnQgLSAxKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5sb2FkUHJlZmFiKFwiRGFpbHlSZXdhcmRcIikudGhlbigocHJlZmFiRGFpbHkpID0+IHtcclxuICAgICAgICAvLyAgICAgbGV0IG5ld0RhaWx5UmV3YXJkID0gY2MuaW5zdGFudGlhdGUocHJlZmFiRGFpbHkpO1xyXG4gICAgICAgIC8vICAgICBpZiAobmV3RGFpbHlSZXdhcmQpIHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBuZXdEYWlseVJld2FyZFRTID0gbmV3RGFpbHlSZXdhcmQuZ2V0Q29tcG9uZW50KFwiRGFpbHlSZXdhcmRNYW5hZ2VyXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgbmV3RGFpbHlSZXdhcmRUUy5pbml0RGFpbHlSZXdhcmQoKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuaW5pdGVkTm9kZXMuc2V0KEdhbWVEZWZpbmVzLnBvcHVwRGFpbHlSZXdhcmQsIG5ld0RhaWx5UmV3YXJkVFMpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5HVUkuYWRkQ2hpbGQobmV3RGFpbHlSZXdhcmQpO1xyXG4gICAgICAgIC8vICAgICAgICAgbmV3RGFpbHlSZXdhcmQuc2V0U2libGluZ0luZGV4KHRoaXMuR1VJLmNoaWxkcmVuQ291bnQgLSAxKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgIC8vIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuUG9wdXBTZXR0aW5nKCkge1xyXG4gICAgICAgIGxldCBzZXR0aW5nVFMgPSB0aGlzLmluaXRlZE5vZGVzLmdldChHYW1lRGVmaW5lcy5QT1BVUF9OQU1FLlBPX1NFVFRJTkcpO1xyXG4gICAgICAgIGlmIChzZXR0aW5nVFMpIHtcclxuICAgICAgICAgICAgc2V0dGluZ1RTLmluaXREYWlseVJld2FyZCgpO1xyXG4gICAgICAgICAgICBzZXR0aW5nVFMubm9kZS5zZXRTaWJsaW5nSW5kZXgodGhpcy5HVUkuY2hpbGRyZW5Db3VudCAtIDEpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvYWRQcmVmYWIoXCJQb3B1cFNldHRpbmdcIikudGhlbigocHJlZmFiU2V0dGluZykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmV3RGFpbHlSZXdhcmQgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWJEYWlseSk7XHJcbiAgICAgICAgICAgIGlmIChuZXdEYWlseVJld2FyZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0RhaWx5UmV3YXJkVFMgPSBuZXdEYWlseVJld2FyZC5nZXRDb21wb25lbnQoXCJEYWlseVJld2FyZE1hbmFnZXJcIik7XHJcbiAgICAgICAgICAgICAgICBuZXdEYWlseVJld2FyZFRTLmluaXREYWlseVJld2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0ZWROb2Rlcy5zZXQoR2FtZURlZmluZXMucG9wdXBEYWlseVJld2FyZCwgbmV3RGFpbHlSZXdhcmRUUyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdVSS5hZGRDaGlsZChuZXdEYWlseVJld2FyZCk7XHJcbiAgICAgICAgICAgICAgICBuZXdEYWlseVJld2FyZC5zZXRTaWJsaW5nSW5kZXgodGhpcy5HVUkuY2hpbGRyZW5Db3VudCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgbG9hZFByZWZhYihwcmVOYW1lKTogUHJvbWlzZTxjYy5QcmVmYWI+IHtcclxuICAgICAgICBpZiAoSGVscGVyLmV4dHJhQnVuZGxlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHYsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgSGVscGVyLmV4dHJhQnVuZGxlLmxvYWQoXCJwcmVmYWIvXCIgKyBwcmVOYW1lLCBjYy5QcmVmYWIsIGZ1bmN0aW9uIChlcnIsIHByZWZhYikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXJyICYmIHByZWZhYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHYocHJlZmFiIGFzIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHYsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUoJ0V4dHJhQnVuZGxlJywgKGVyciwgYnVuZGxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgSGVscGVyLmV4dHJhQnVuZGxlID0gYnVuZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bmRsZS5sb2FkKFwicHJlZmFiL1wiICsgcHJlTmFtZSwgY2MuUHJlZmFiLCBmdW5jdGlvbiAoZXJyLCBwcmVmYWIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnIgJiYgcHJlZmFiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHYocHJlZmFiIGFzIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/assist/AnimInAndOut.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0c73cXTEdFOEIiRT1cSAep1', 'AnimInAndOut');
// Script/assist/AnimInAndOut.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // use this for initialization
  onLoad: function onLoad() {
    // onLoad要执行的全都在onEnable中进行了
  },
  onEnable: function onEnable() {
    this.node.opacity = 0;
    this.node.setScale(0);
    var fadeIn = cc.fadeIn(0.2);
    var scaleTo = cc.scaleTo(0.2, 1);
    this.node.runAction(cc.spawn(fadeIn, scaleTo));
  },
  animateAndDestroy: function animateAndDestroy() {
    var _this = this;
    if (this.isDestroying) {
      return;
    }
    this.isDestroying = true;
    var fadeOut = cc.fadeOut(0.2);
    var scaleTo = cc.scaleTo(0.2, 0);
    var callFunc = cc.callFunc(function () {
      if (_this.node) {
        _this.node.destroy();
      }
    });
    this.node.runAction(cc.sequence(cc.spawn(fadeOut, scaleTo), callFunc));
  },
  animateAndDisable: function animateAndDisable() {
    var _this2 = this;
    if (this.isDestroying) {
      return;
    }
    this.isDestroying = true;
    var fadeOut = cc.fadeOut(0.2);
    var scaleTo = cc.scaleTo(0.2, 0);
    var callFunc = cc.callFunc(function () {
      _this2.node.active = false;
    });
    this.node.runAction(cc.sequence(cc.spawn(fadeOut, scaleTo), callFunc));
  }

  // called every frame, uncomment this function to activate update callback
  // update: function (dt) {

  // },
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhc3Npc3RcXEFuaW1JbkFuZE91dC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIm9uRW5hYmxlIiwibm9kZSIsIm9wYWNpdHkiLCJzZXRTY2FsZSIsImZhZGVJbiIsInNjYWxlVG8iLCJydW5BY3Rpb24iLCJzcGF3biIsImFuaW1hdGVBbmREZXN0cm95IiwiX3RoaXMiLCJpc0Rlc3Ryb3lpbmciLCJmYWRlT3V0IiwiY2FsbEZ1bmMiLCJkZXN0cm95Iiwic2VxdWVuY2UiLCJhbmltYXRlQW5kRGlzYWJsZSIsIl90aGlzMiIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRSxDQUVaLENBQUM7RUFFRDtFQUNBQyxNQUFNLEVBQUUsU0FBQUEsT0FBQSxFQUFZO0lBQ2hCO0VBQUEsQ0FDSDtFQUVEQyxRQUFRLEVBQUUsU0FBQUEsU0FBQSxFQUFZO0lBQ2xCLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLEdBQUcsQ0FBQztJQUNyQixJQUFJLENBQUNELElBQUksQ0FBQ0UsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyQixJQUFJQyxNQUFNLEdBQUdULEVBQUUsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUMzQixJQUFJQyxPQUFPLEdBQUdWLEVBQUUsQ0FBQ1UsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDaEMsSUFBSSxDQUFDSixJQUFJLENBQUNLLFNBQVMsQ0FBQ1gsRUFBRSxDQUFDWSxLQUFLLENBQUNILE1BQU0sRUFBRUMsT0FBTyxDQUFDLENBQUM7RUFDbEQsQ0FBQztFQUVERyxpQkFBaUIsRUFBRSxTQUFBQSxrQkFBQSxFQUFZO0lBQUEsSUFBQUMsS0FBQTtJQUMzQixJQUFJLElBQUksQ0FBQ0MsWUFBWSxFQUFFO01BQ25CO0lBQ0o7SUFDQSxJQUFJLENBQUNBLFlBQVksR0FBRyxJQUFJO0lBRXhCLElBQUlDLE9BQU8sR0FBR2hCLEVBQUUsQ0FBQ2dCLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDN0IsSUFBSU4sT0FBTyxHQUFHVixFQUFFLENBQUNVLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLElBQUlPLFFBQVEsR0FBR2pCLEVBQUUsQ0FBQ2lCLFFBQVEsQ0FBQyxZQUFJO01BQzNCLElBQUlILEtBQUksQ0FBQ1IsSUFBSSxFQUFFO1FBQ1hRLEtBQUksQ0FBQ1IsSUFBSSxDQUFDWSxPQUFPLEVBQUU7TUFDdkI7SUFDSixDQUFDLENBQUM7SUFDRixJQUFJLENBQUNaLElBQUksQ0FBQ0ssU0FBUyxDQUFDWCxFQUFFLENBQUNtQixRQUFRLENBQUNuQixFQUFFLENBQUNZLEtBQUssQ0FBQ0ksT0FBTyxFQUFFTixPQUFPLENBQUMsRUFBRU8sUUFBUSxDQUFDLENBQUM7RUFDMUUsQ0FBQztFQUVERyxpQkFBaUIsRUFBRSxTQUFBQSxrQkFBQSxFQUFZO0lBQUEsSUFBQUMsTUFBQTtJQUMzQixJQUFJLElBQUksQ0FBQ04sWUFBWSxFQUFFO01BQ25CO0lBQ0o7SUFDQSxJQUFJLENBQUNBLFlBQVksR0FBRyxJQUFJO0lBRXhCLElBQUlDLE9BQU8sR0FBR2hCLEVBQUUsQ0FBQ2dCLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDN0IsSUFBSU4sT0FBTyxHQUFHVixFQUFFLENBQUNVLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLElBQUlPLFFBQVEsR0FBR2pCLEVBQUUsQ0FBQ2lCLFFBQVEsQ0FBQyxZQUFJO01BQzNCSSxNQUFJLENBQUNmLElBQUksQ0FBQ2dCLE1BQU0sR0FBRyxLQUFLO0lBQzVCLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ2hCLElBQUksQ0FBQ0ssU0FBUyxDQUFDWCxFQUFFLENBQUNtQixRQUFRLENBQUNuQixFQUFFLENBQUNZLEtBQUssQ0FBQ0ksT0FBTyxFQUFFTixPQUFPLENBQUMsRUFBRU8sUUFBUSxDQUFDLENBQUM7RUFDMUU7O0VBRUE7RUFDQTs7RUFFQTtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gb25Mb2Fk6KaB5omn6KGM55qE5YWo6YO95Zyob25FbmFibGXkuK3ov5vooYzkuoZcclxuICAgIH0sXHJcblxyXG4gICAgb25FbmFibGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDApO1xyXG4gICAgICAgIHZhciBmYWRlSW4gPSBjYy5mYWRlSW4oMC4yKTtcclxuICAgICAgICB2YXIgc2NhbGVUbyA9IGNjLnNjYWxlVG8oMC4yLCAxKTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNwYXduKGZhZGVJbiwgc2NhbGVUbykpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhbmltYXRlQW5kRGVzdHJveTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVzdHJveWluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNEZXN0cm95aW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdmFyIGZhZGVPdXQgPSBjYy5mYWRlT3V0KDAuMik7XHJcbiAgICAgICAgdmFyIHNjYWxlVG8gPSBjYy5zY2FsZVRvKDAuMiwgMCk7XHJcbiAgICAgICAgdmFyIGNhbGxGdW5jID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc3Bhd24oZmFkZU91dCwgc2NhbGVUbyksIGNhbGxGdW5jKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFuaW1hdGVBbmREaXNhYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZXN0cm95aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3lpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICB2YXIgZmFkZU91dCA9IGNjLmZhZGVPdXQoMC4yKTtcclxuICAgICAgICB2YXIgc2NhbGVUbyA9IGNjLnNjYWxlVG8oMC4yLCAwKTtcclxuICAgICAgICB2YXIgY2FsbEZ1bmMgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zcGF3bihmYWRlT3V0LCBzY2FsZVRvKSwgY2FsbEZ1bmMpKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Ultis/GameDefines.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5c218nbPtpCeZYWXJRXF6qr', 'GameDefines');
// Script/Ultis/GameDefines.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GemShopType = exports.GameStatus = exports.GameScene = exports.BoxesOption = exports.BuildType = exports.Tracking = exports.GamePlatform = exports.GameDataType = exports.GameMode = void 0;
var GameMode;
(function (GameMode) {
    GameMode[GameMode["SINGLE"] = 0] = "SINGLE";
    GameMode[GameMode["MULTIPLAYER"] = 2] = "MULTIPLAYER";
})(GameMode = exports.GameMode || (exports.GameMode = {}));
var GameDataType;
(function (GameDataType) {
    GameDataType[GameDataType["MIDI"] = 0] = "MIDI";
    GameDataType[GameDataType["JSON"] = 1] = "JSON";
})(GameDataType = exports.GameDataType || (exports.GameDataType = {}));
var GamePlatform;
(function (GamePlatform) {
    GamePlatform[GamePlatform["YANDEX"] = 0] = "YANDEX";
    GamePlatform[GamePlatform["POKI"] = 1] = "POKI";
    GamePlatform[GamePlatform["CRAZYGAMES"] = 2] = "CRAZYGAMES";
    GamePlatform[GamePlatform["COOLMATHGAMES"] = 3] = "COOLMATHGAMES";
    GamePlatform[GamePlatform["Y8"] = 4] = "Y8";
    GamePlatform[GamePlatform["GAMEDISTRIBUTION"] = 5] = "GAMEDISTRIBUTION";
    GamePlatform[GamePlatform["FACEBOOK"] = 6] = "FACEBOOK";
    GamePlatform[GamePlatform["LOCAL"] = 7] = "LOCAL";
})(GamePlatform = exports.GamePlatform || (exports.GamePlatform = {}));
var Tracking;
(function (Tracking) {
    Tracking[Tracking["USE_TRACKING"] = 0] = "USE_TRACKING";
    Tracking[Tracking["BLOCK_TRACKING"] = 1] = "BLOCK_TRACKING";
})(Tracking = exports.Tracking || (exports.Tracking = {}));
var BuildType;
(function (BuildType) {
    BuildType[BuildType["LITTLE"] = 0] = "LITTLE";
    BuildType[BuildType["FULL"] = 1] = "FULL";
    BuildType[BuildType["RESTRICT"] = 2] = "RESTRICT";
})(BuildType = exports.BuildType || (exports.BuildType = {}));
var BoxesOption;
(function (BoxesOption) {
    BoxesOption[BoxesOption["USE_BOX"] = 0] = "USE_BOX";
    BoxesOption[BoxesOption["HOME_ONLY"] = 1] = "HOME_ONLY";
})(BoxesOption = exports.BoxesOption || (exports.BoxesOption = {}));
var GameScene;
(function (GameScene) {
    GameScene[GameScene["HOME"] = 0] = "HOME";
    GameScene[GameScene["GAMEPLAY"] = 1] = "GAMEPLAY";
})(GameScene = exports.GameScene || (exports.GameScene = {}));
var GameStatus;
(function (GameStatus) {
    GameStatus[GameStatus["ONLOAD"] = 0] = "ONLOAD";
    GameStatus[GameStatus["LOADED"] = 1] = "LOADED";
    GameStatus[GameStatus["PLAYING"] = 2] = "PLAYING";
    GameStatus[GameStatus["PAUSED"] = 3] = "PAUSED";
    GameStatus[GameStatus["DIED"] = 4] = "DIED";
    GameStatus[GameStatus["WIN"] = 5] = "WIN";
    GameStatus[GameStatus["REVIVE"] = 6] = "REVIVE";
    GameStatus[GameStatus["WAITNEXTLOOP"] = 7] = "WAITNEXTLOOP";
    GameStatus[GameStatus["FTUE"] = 8] = "FTUE";
})(GameStatus = exports.GameStatus || (exports.GameStatus = {}));
var GemShopType;
(function (GemShopType) {
    GemShopType[GemShopType["BUY"] = 0] = "BUY";
    GemShopType[GemShopType["ADS"] = 1] = "ADS";
    GemShopType[GemShopType["ALL"] = 2] = "ALL";
})(GemShopType = exports.GemShopType || (exports.GemShopType = {}));
const GameDefines = {
    GameMode: {
        SINGLE: 0, QUICK_PLAY: 1, MULTIPLAYER: 2
    },
    GameScene: {
        HOME: 0, GAMEPLAY: 1
    },
    GameDataType: {
        MIDI: 0, JSON: 1
    },
    GamePlatform: {
        YANDEX: 0, POKI: 1, CRAZYGAMES: 2, COOLMATHGAMES: 3, Y8: 4, GAMEDISTRIBUTION: 5, FACEBOOK: 6, LOCAL: 7
    },
    Tracking: {
        USE_TRACKING: 0, BLOCK_TRACKING: 1
    },
    BuildType: {
        LITTLE: 0, FULL: 1, RESTRICT: 2
    },
    BoxesOption: {
        USE_BOX: 0, HOME_ONLY: 1
    },
    QuickPlayState: {
        NONE: 0, INIT: 1, START: 2, SYNC_TIME: 3, NEXT_LOOP: 4, EXIT: 5, FINISH: 6
    },
    MultiPlayerState: {
        NONE: 0, PLAYING: 1, READY: 2, STARTGAME: 3, DEAD: 4, UPDATE_SCORE: 5, DISCONNECT: 6, FINISH: 7, START_COUNT_DOWN: 8
    },
    PlayerState: {
        NONE: 0, PLAYING: 1, DEAD: 2
    },
    TileType: {
        SHORT: 1,
        LONG: 2,
    },
    HitTileReponseData: function () {
        this.userId = 0;
        this.score = 0;
    },
    SongData: function (t, e, i, o, n, r) {
        this.songId = "";
        this.mp3Url = "";
        this.levelUrl = "";
        this.title = "";
        this.artist = "";
        this.duration = 0;
        this.songId = t;
        this.mp3Url = e;
        this.levelUrl = i;
        this.title = o;
        this.artist = n;
        this.duration = r;
        this.update = function (t) {
            this.songId = t.songId;
            this.mp3Url = t.mp3Url;
            this.levelUrl = t.levelUrl;
            this.title = t.title;
            this.artist = t.artist;
            this.duration = t.duration;
        };
    },
    countDiamondRewardDay0: 100,
    diamondRevivePay: 100,
    dailyReward: [
        {
            index: 0,
            titleKey: "daily_day_1",
            countReward: 100,
            spr_icon: "daily_gem_01",
            type: "diamond"
        },
        {
            index: 1,
            titleKey: "daily_day_2",
            countReward: 200,
            spr_icon: "daily_gem_02",
            type: "diamond"
        },
        {
            index: 2,
            titleKey: "daily_day_3",
            countReward: 300,
            spr_icon: "daily_gem_03",
            type: "song"
        },
        {
            index: 3,
            titleKey: "daily_day_4",
            countReward: 400,
            spr_icon: "daily_gem_04",
            type: "diamond"
        },
        {
            index: 4,
            titleKey: "daily_day_5",
            countReward: 500,
            spr_icon: "daily_gem_05",
            type: "theme"
        },
        {
            index: 5,
            titleKey: "daily_day_6",
            countReward: 1000,
            spr_icon: "daily_gem_06",
            type: "diamond"
        },
    ],
    themes: [
        {
            id: "default",
            type: "ads"
        },
        {
            id: "PT_16",
            type: "ads"
        },
        {
            id: "PT_1",
            type: "ads"
        },
        {
            id: "PT_2",
            type: "ads"
        },
        {
            id: "PT_3",
            type: "ads"
        },
        {
            id: "PT_4",
            type: "ads"
        },
        {
            id: "PT_5",
            type: "diamond",
            price: 500
        },
        {
            id: "PT_6",
            type: "ads"
        },
        {
            id: "PT_8",
            type: "ads"
        },
        {
            id: "PT_9",
            type: "diamond",
            price: 500
        },
        {
            id: "PT_10",
            type: "ads"
        },
        {
            id: "PT_11",
            type: "ads"
        },
        {
            id: "PT_12",
            type: "diamond",
            price: 500
        },
        {
            id: "PT_13",
            type: "ads"
        },
        {
            id: "PT_14",
            type: "ads"
        },
        {
            id: "PT_15",
            type: "diamond",
            price: 500
        }
    ],
    languages: [
        {
            index: 0,
            name: "English",
            key: "en"
        },
        {
            index: 0,
            name: "Russia",
            key: "ru"
        },
        {
            index: 0,
            name: "English",
            key: "tr"
        },
        {
            index: 0,
            name: "Korean",
            key: "ko"
        },
        {
            index: 0,
            name: "English",
            key: "zh"
        },
        {
            index: 0,
            name: "Japan",
            key: "ja"
        },
    ],
    gems: {
        type: GemShopType.ADS,
        items: [
            {
                id: 1,
                reward: 100,
                price: 2.99,
                sale: 0,
                icon: "gem_01",
                typeReward: GemShopType.ADS,
            },
            {
                id: 2,
                reward: 200,
                price: 2.99,
                sale: 0,
                icon: "gem_02",
                typeReward: GemShopType.BUY,
            },
            {
                id: 3,
                reward: 300,
                price: 3.99,
                sale: 0,
                icon: "gem_03",
                typeReward: GemShopType.BUY,
            },
            {
                id: 4,
                reward: 400,
                price: 4.99,
                sale: 0,
                icon: "gem_04",
                typeReward: GemShopType.BUY,
            },
            {
                id: 5,
                reward: 500,
                price: 5.99,
                sale: 0,
                icon: "gem_05",
                typeReward: GemShopType.BUY,
            },
            {
                id: 6,
                reward: 1000,
                price: 6.99,
                sale: 0,
                icon: "gem_06",
                typeReward: GemShopType.BUY,
            },
        ]
    },
    popupRewardDay0: "popup-reward-day-0",
    popupDailyReward: "popup-daily-reward",
    popupMainSetting: "popup-main-setting",
    popupShopGems: "popup-shop-gems",
    popupFastShopGems: "popup-fast-shop-gems",
    popupBoxInfo: "popup-box-info",
    popupWhatNext: "popup-what-next",
    popupAudioSync: "popup-audio-sync",
    popupVIP: "popup-vip",
    popupStarter: "popup-starter-pack",
    keyOptions: [
        // { name: "Space", keyCode: cc.macro.KEY.space },
        // { name: "Enter", keyCode: cc.macro.KEY.enter },
        { name: "Arrow Up", keyCode: cc.macro.KEY.up },
        { name: "Arrow Down", keyCode: cc.macro.KEY.down },
        { name: "Arrow Left", keyCode: cc.macro.KEY.left },
        { name: "Arrow Right", keyCode: cc.macro.KEY.right },
        // { name: "Shift", keyCode: cc.macro.KEY.shift },
        // { name: "Ctrl", keyCode: cc.macro.KEY.ctrl },
        // { name: "Alt", keyCode: cc.macro.KEY.alt },
        // { name: "Pause", keyCode: cc.macro.KEY.pause },
        // { name: "Capslock", keyCode: cc.macro.KEY.capslock },
        // { name: "ESC", keyCode: cc.macro.KEY.escape },
        // { name: "End", keyCode: cc.macro.KEY.end },
        // { name: "Home", keyCode: cc.macro.KEY.home },
        // { name: "Select", keyCode: cc.macro.KEY.select },
        // { name: "Insert", keyCode: cc.macro.KEY.insert },
        // { name: "Delete", keyCode: cc.macro.KEY.Delete },
        { name: "A", keyCode: cc.macro.KEY.a },
        { name: "B", keyCode: cc.macro.KEY.b },
        { name: "C", keyCode: cc.macro.KEY.c },
        { name: "D", keyCode: cc.macro.KEY.d },
        { name: "E", keyCode: cc.macro.KEY.e },
        { name: "F", keyCode: cc.macro.KEY.f },
        { name: "G", keyCode: cc.macro.KEY.g },
        { name: "H", keyCode: cc.macro.KEY.h },
        { name: "I", keyCode: cc.macro.KEY.i },
        { name: "J", keyCode: cc.macro.KEY.j },
        { name: "K", keyCode: cc.macro.KEY.k },
        { name: "L", keyCode: cc.macro.KEY.l },
        { name: "M", keyCode: cc.macro.KEY.m },
        { name: "N", keyCode: cc.macro.KEY.n },
        { name: "O", keyCode: cc.macro.KEY.o },
        { name: "P", keyCode: cc.macro.KEY.p },
        { name: "Q", keyCode: cc.macro.KEY.q },
        { name: "R", keyCode: cc.macro.KEY.r },
        { name: "S", keyCode: cc.macro.KEY.s },
        { name: "T", keyCode: cc.macro.KEY.t },
        { name: "U", keyCode: cc.macro.KEY.u },
        { name: "V", keyCode: cc.macro.KEY.v },
        { name: "W", keyCode: cc.macro.KEY.w },
        { name: "X", keyCode: cc.macro.KEY.x },
        { name: "Y", keyCode: cc.macro.KEY.y },
        { name: "Z", keyCode: cc.macro.KEY.z },
        { name: "Num 1", keyCode: cc.macro.KEY.num1 },
        { name: "Num 2", keyCode: cc.macro.KEY.num2 },
        { name: "Num 3", keyCode: cc.macro.KEY.num3 },
        { name: "Num 4", keyCode: cc.macro.KEY.num4 },
        { name: "Num 5", keyCode: cc.macro.KEY.num5 },
        { name: "Num 6", keyCode: cc.macro.KEY.num6 },
        { name: "Num 7", keyCode: cc.macro.KEY.num7 },
        { name: "Num 8", keyCode: cc.macro.KEY.num8 },
        { name: "Num 9", keyCode: cc.macro.KEY.num9 },
        { name: "Num 0", keyCode: cc.macro.KEY.num0 },
    ],
    PAY_MENT_KEY: "vip",
    PAY_MENT_KEY_STARTER: "starter",
    useEffectTransBackground: true,
    showDifficalty: true,
    showRewardDay0: false,
    isHideTutorialSongList: true,
    isShowIntertialAds: true,
    HEATH_COUNT: 3,
    SONG_RESULT_COUNT: 6,
    PERFECT_POW: 0.1,
    GREAT_POW: 0.05,
    COOL_POW: -0.15,
    MISS_POW: -2.6,
    MAX_TIME_MISS: 10,
    TIME_DELAY_FIRST_TILE: 3,
    useShield: true,
    TIME_SHIELD: 4,
    isAutoPlayPreview: false,
    restrictContent: true,
    maxGemReward: 100,
    useSliderTile: false,
    useAudioSync: true,
    useLanguageSetting: true,
    server: "",
    EVENT_NAME: {
        EPT_GAME_INIT: "game_init",
        EPT_OPEN_BOX: "open_box",
        EPT_UNLOCK_BOX: "unlock_box",
        EPT_UNLOCK_FAILD: "unlock_box_faild",
        EPT_SONG_PREVIVEW_START: "song_preview_start",
        EPT_SONG_PREVIVEW_STOP: "song_preview_stop",
        EPT_SONG_CLICK: "song_click",
        EPT_SONG_UNLOCK: "song_unlock",
        EPT_SONG_UNLOCK_DIAMOND: "song_unlock_diamond",
        EPT_SONG_START: "song_start",
        EPT_SONG_FAILD: "song_faild",
        EPT_SONG_REVIVE: "song_revive",
        EPT_SONG_RESULT: "song_result",
        EPT_SHOP_THEME_OPEN: "shop_theme_open",
        EPT_SELECTED_THEME: "selected_theme",
        EPT_DAILY_REWARD_CLAIM: "daily_reward_claim",
        EPT_CLAIM_FIRST_REWARD: "claim_first_reward",
        EPT_TUTORIAL_COMPLETE: "tutorial_complete",
    },
    POPUP_NAME: {
        PO_SETTING: "po_setting",
        PO_SHOP: "po_shop"
    }
};
exports.default = GameDefines;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVbHRpc1xcR2FtZURlZmluZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxRQUdYO0FBSEQsV0FBWSxRQUFRO0lBQ2hCLDJDQUFVLENBQUE7SUFDVixxREFBZSxDQUFBO0FBQ25CLENBQUMsRUFIVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUduQjtBQUVELElBQVksWUFHWDtBQUhELFdBQVksWUFBWTtJQUNwQiwrQ0FBUSxDQUFBO0lBQ1IsK0NBQVEsQ0FBQTtBQUNaLENBQUMsRUFIVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQUd2QjtBQUVELElBQVksWUFTWDtBQVRELFdBQVksWUFBWTtJQUNwQixtREFBVSxDQUFBO0lBQ1YsK0NBQVEsQ0FBQTtJQUNSLDJEQUFjLENBQUE7SUFDZCxpRUFBaUIsQ0FBQTtJQUNqQiwyQ0FBTSxDQUFBO0lBQ04sdUVBQW9CLENBQUE7SUFDcEIsdURBQVksQ0FBQTtJQUNaLGlEQUFTLENBQUE7QUFDYixDQUFDLEVBVFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFTdkI7QUFFRCxJQUFZLFFBR1g7QUFIRCxXQUFZLFFBQVE7SUFDaEIsdURBQWdCLENBQUE7SUFDaEIsMkRBQWtCLENBQUE7QUFDdEIsQ0FBQyxFQUhXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBR25CO0FBRUQsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ2pCLDZDQUFVLENBQUE7SUFDVix5Q0FBUSxDQUFBO0lBQ1IsaURBQVksQ0FBQTtBQUNoQixDQUFDLEVBSlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFJcEI7QUFFRCxJQUFZLFdBR1g7QUFIRCxXQUFZLFdBQVc7SUFDbkIsbURBQVcsQ0FBQTtJQUNYLHVEQUFhLENBQUE7QUFDakIsQ0FBQyxFQUhXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBR3RCO0FBRUQs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b0Q7UUFDcEQsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7UUFDN0MsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7UUFDN0MsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7UUFDN0MsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7UUFDN0MsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7UUFDN0MsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7UUFDN0MsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7UUFDN0MsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7UUFDN0MsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7UUFDN0MsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7S0FFaEQ7SUFDRCxZQUFZLEVBQUUsS0FBSztJQUNuQixvQkFBb0IsRUFBRSxTQUFTO0lBQy9CLHdCQUF3QixFQUFFLElBQUk7SUFDOUIsY0FBYyxFQUFFLElBQUk7SUFDcEIsY0FBYyxFQUFFLEtBQUs7SUFDckIsc0JBQXNCLEVBQUUsSUFBSTtJQUM1QixrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCLFdBQVcsRUFBRSxDQUFDO0lBQ2QsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixXQUFXLEVBQUUsR0FBRztJQUNoQixTQUFTLEVBQUUsSUFBSTtJQUNmLFFBQVEsRUFBRSxDQUFDLElBQUk7SUFDZixRQUFRLEVBQUUsQ0FBQyxHQUFHO0lBQ2QsYUFBYSxFQUFFLEVBQUU7SUFDakIscUJBQXFCLEVBQUUsQ0FBQztJQUV4QixTQUFTLEVBQUUsSUFBSTtJQUNmLFdBQVcsRUFBRSxDQUFDO0lBRWQsaUJBQWlCLEVBQUUsS0FBSztJQUN4QixlQUFlLEVBQUUsSUFBSTtJQUNyQixZQUFZLEVBQUUsR0FBRztJQUNqQixhQUFhLEVBQUUsS0FBSztJQUNwQixZQUFZLEVBQUUsSUFBSTtJQUNsQixrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCLE1BQU0sRUFBRSxFQUFFO0lBQ1YsVUFBVSxFQUFFO1FBQ1IsYUFBYSxFQUFFLFdBQVc7UUFDMUIsWUFBWSxFQUFFLFVBQVU7UUFDeEIsY0FBYyxFQUFFLFlBQVk7UUFDNUIsZ0JBQWdCLEVBQUUsa0JBQWtCO1FBQ3BDLHVCQUF1QixFQUFFLG9CQUFvQjtRQUM3QyxzQkFBc0IsRUFBRSxtQkFBbUI7UUFDM0MsY0FBYyxFQUFFLFlBQVk7UUFDNUIsZUFBZSxFQUFFLGFBQWE7UUFDOUIsdUJBQXVCLEVBQUUscUJBQXFCO1FBQzlDLGNBQWMsRUFBRSxZQUFZO1FBQzVCLGNBQWMsRUFBRSxZQUFZO1FBQzVCLGVBQWUsRUFBRSxhQUFhO1FBQzlCLGVBQWUsRUFBRSxhQUFhO1FBQzlCLG1CQUFtQixFQUFFLGlCQUFpQjtRQUN0QyxrQkFBa0IsRUFBRSxnQkFBZ0I7UUFDcEMsc0JBQXNCLEVBQUUsb0JBQW9CO1FBQzVDLHNCQUFzQixFQUFFLG9CQUFvQjtRQUM1QyxxQkFBcUIsRUFBRSxtQkFBbUI7S0FDN0M7SUFFRCxVQUFVLEVBQUU7UUFDUixVQUFVLEVBQUUsWUFBWTtRQUN4QixPQUFPLEVBQUUsU0FBUztLQUNyQjtDQUNKLENBQUM7QUFFRixrQkFBZSxXQUFXLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBHYW1lTW9kZSB7XHJcbiAgICBTSU5HTEUgPSAwLFxyXG4gICAgTVVMVElQTEFZRVIgPSAyLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBHYW1lRGF0YVR5cGUge1xyXG4gICAgTUlESSA9IDAsXHJcbiAgICBKU09OID0gMSxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gR2FtZVBsYXRmb3JtIHtcclxuICAgIFlBTkRFWCA9IDAsXHJcbiAgICBQT0tJID0gMSxcclxuICAgIENSQVpZR0FNRVMgPSAyLFxyXG4gICAgQ09PTE1BVEhHQU1FUyA9IDMsXHJcbiAgICBZOCA9IDQsXHJcbiAgICBHQU1FRElTVFJJQlVUSU9OID0gNSxcclxuICAgIEZBQ0VCT09LID0gNixcclxuICAgIExPQ0FMID0gN1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBUcmFja2luZyB7XHJcbiAgICBVU0VfVFJBQ0tJTkcgPSAwLFxyXG4gICAgQkxPQ0tfVFJBQ0tJTkcgPSAxXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJ1aWxkVHlwZSB7XHJcbiAgICBMSVRUTEUgPSAwLFxyXG4gICAgRlVMTCA9IDEsXHJcbiAgICBSRVNUUklDVCA9IDIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJveGVzT3B0aW9uIHtcclxuICAgIFVTRV9CT1ggPSAwLFxyXG4gICAgSE9NRV9PTkxZID0gMVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBHYW1lU2NlbmUge1xyXG4gICAgSE9NRSA9IDAsXHJcbiAgICBHQU1FUExBWSA9IDEsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEdhbWVTdGF0dXMge1xyXG4gICAgT05MT0FELFxyXG4gICAgTE9BREVELFxyXG4gICAgUExBWUlORyxcclxuICAgIFBBVVNFRCxcclxuICAgIERJRUQsXHJcbiAgICBXSU4sXHJcbiAgICBSRVZJVkUsXHJcbiAgICBXQUlUTkVYVExPT1AsXHJcbiAgICBGVFVFXHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEl0ZW1SZXdhcmREYXRhIHtcclxuICAgIGluZGV4OiBudW1iZXIsXHJcbiAgICB0aXRsZUtleTogc3RyaW5nLFxyXG4gICAgY291bnRSZXdhcmQ6IG51bWJlcixcclxuICAgIHNwcl9pY29uOiBzdHJpbmdcclxuICAgIHR5cGU6IHN0cmluZyxcclxuICAgIHNvbmc6IGFueSxcclxuICAgIHRoZW1lOiBhbnlcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJEYXRhIHtcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICB4OiBudW1iZXIsXHJcbiAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgbmFtZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEdlbVNob3BUeXBlIHtcclxuICAgIEJVWSxcclxuICAgIEFEUyxcclxuICAgIEFMTFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJveFNob3Age1xyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIHJld2FyZDogQXJyYXk8YW55PixcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIHByaWNlOiBudW1iZXIsXHJcbiAgICBzYWxlOiBudW1iZXIsXHJcbiAgICBpY29uOiBzdHJpbmdcclxuICAgIGJnOiBzdHJpbmcsXHJcbiAgICB0eXBlOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHZW1TaG9wIHtcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICByZXdhcmQ6IG51bWJlcixcclxuICAgIHByaWNlOiBudW1iZXIsXHJcbiAgICBzYWxlOiBudW1iZXIsXHJcbiAgICBpY29uOiBzdHJpbmcsXHJcbiAgICB0eXBlUmV3YXJkOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTb25nUGxheWVkQ291bnQge1xyXG4gICAgc29uZ0lkOiBudW1iZXIsXHJcbiAgICBjb3VudDogbnVtYmVyXHJcbn1cclxuXHJcblxyXG5jb25zdCBHYW1lRGVmaW5lcyA9IHtcclxuICAgIEdhbWVNb2RlOiB7XHJcbiAgICAgICAgU0lOR0xFOiAwLCBRVUlDS19QTEFZOiAxLCBNVUxUSVBMQVlFUjogMlxyXG4gICAgfSxcclxuICAgIEdhbWVTY2VuZToge1xyXG4gICAgICAgIEhPTUU6IDAsIEdBTUVQTEFZOiAxXHJcbiAgICB9LFxyXG4gICAgR2FtZURhdGFUeXBlOiB7XHJcbiAgICAgICAgTUlESTogMCwgSlNPTjogMVxyXG4gICAgfSxcclxuICAgIEdhbWVQbGF0Zm9ybToge1xyXG4gICAgICAgIFlBTkRFWDogMCwgUE9LSTogMSwgQ1JBWllHQU1FUzogMiwgQ09PTE1BVEhHQU1FUzogMywgWTg6IDQsIEdBTUVESVNUUklCVVRJT046IDUsIEZBQ0VCT09LOiA2LCBMT0NBTDogN1xyXG4gICAgfSxcclxuXHJcbiAgICBUcmFja2luZzoge1xyXG4gICAgICAgIFVTRV9UUkFDS0lORzogMCwgQkxPQ0tfVFJBQ0tJTkc6IDFcclxuICAgIH0sXHJcblxyXG4gICAgQnVpbGRUeXBlOiB7XHJcbiAgICAgICAgTElUVExFOiAwLCBGVUxMOiAxLCBSRVNUUklDVDogMlxyXG4gICAgfSxcclxuICAgIEJveGVzT3B0aW9uOiB7XHJcbiAgICAgICAgVVNFX0JPWDogMCwgSE9NRV9PTkxZOiAxXHJcbiAgICB9LFxyXG4gICAgUXVpY2tQbGF5U3RhdGU6IHtcclxuICAgICAgICBOT05FOiAwLCBJTklUOiAxLCBTVEFSVDogMiwgU1lOQ19USU1FOiAzLCBORVhUX0xPT1A6IDQsIEVYSVQ6IDUsIEZJTklTSDogNlxyXG4gICAgfSxcclxuICAgIE11bHRpUGxheWVyU3RhdGU6IHtcclxuICAgICAgICBOT05FOiAwLCBQTEFZSU5HOiAxLCBSRUFEWTogMiwgU1RBUlRHQU1FOiAzLCBERUFEOiA0LCBVUERBVEVfU0NPUkU6IDUsIERJU0NPTk5FQ1Q6IDYsIEZJTklTSDogNywgU1RBUlRfQ09VTlRfRE9XTjogOFxyXG4gICAgfSxcclxuICAgIFBsYXllclN0YXRlOiB7XHJcbiAgICAgICAgTk9ORTogMCwgUExBWUlORzogMSwgREVBRDogMlxyXG4gICAgfSxcclxuICAgIFRpbGVUeXBlOiB7XHJcbiAgICAgICAgU0hPUlQ6IDEsXHJcbiAgICAgICAgTE9ORzogMixcclxuICAgIH0sXHJcbiAgICBIaXRUaWxlUmVwb25zZURhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnVzZXJJZCA9IDA7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICB9LFxyXG4gICAgU29uZ0RhdGE6IGZ1bmN0aW9uICh0LCBlLCBpLCBvLCBuLCByKSB7XHJcbiAgICAgICAgdGhpcy5zb25nSWQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMubXAzVXJsID0gXCJcIjtcclxuICAgICAgICB0aGlzLmxldmVsVXJsID0gXCJcIlxyXG4gICAgICAgIHRoaXMudGl0bGUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuYXJ0aXN0ID0gXCJcIjtcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gMDtcclxuICAgICAgICB0aGlzLnNvbmdJZCA9IHQ7XHJcbiAgICAgICAgdGhpcy5tcDNVcmwgPSBlO1xyXG4gICAgICAgIHRoaXMubGV2ZWxVcmwgPSBpO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBvO1xyXG4gICAgICAgIHRoaXMuYXJ0aXN0ID0gbjtcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gcjtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvbmdJZCA9IHQuc29uZ0lkO1xyXG4gICAgICAgICAgICB0aGlzLm1wM1VybCA9IHQubXAzVXJsO1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsVXJsID0gdC5sZXZlbFVybDtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHQudGl0bGU7XHJcbiAgICAgICAgICAgIHRoaXMuYXJ0aXN0ID0gdC5hcnRpc3Q7XHJcbiAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSB0LmR1cmF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb3VudERpYW1vbmRSZXdhcmREYXkwOiAxMDAsXHJcbiAgICBkaWFtb25kUmV2aXZlUGF5OiAxMDAsXHJcbiAgICBkYWlseVJld2FyZDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgICAgIHRpdGxlS2V5OiBcImRhaWx5X2RheV8xXCIsXHJcbiAgICAgICAgICAgIGNvdW50UmV3YXJkOiAxMDAsXHJcbiAgICAgICAgICAgIHNwcl9pY29uOiBcImRhaWx5X2dlbV8wMVwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcImRpYW1vbmRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbmRleDogMSxcclxuICAgICAgICAgICAgdGl0bGVLZXk6IFwiZGFpbHlfZGF5XzJcIixcclxuICAgICAgICAgICAgY291bnRSZXdhcmQ6IDIwMCxcclxuICAgICAgICAgICAgc3ByX2ljb246IFwiZGFpbHlfZ2VtXzAyXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZGlhbW9uZFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGluZGV4OiAyLFxyXG4gICAgICAgICAgICB0aXRsZUtleTogXCJkYWlseV9kYXlfM1wiLFxyXG4gICAgICAgICAgICBjb3VudFJld2FyZDogMzAwLFxyXG4gICAgICAgICAgICBzcHJfaWNvbjogXCJkYWlseV9nZW1fMDNcIixcclxuICAgICAgICAgICAgdHlwZTogXCJzb25nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW5kZXg6IDMsXHJcbiAgICAgICAgICAgIHRpdGxlS2V5OiBcImRhaWx5X2RheV80XCIsXHJcbiAgICAgICAgICAgIGNvdW50UmV3YXJkOiA0MDAsXHJcbiAgICAgICAgICAgIHNwcl9pY29uOiBcImRhaWx5X2dlbV8wNFwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcImRpYW1vbmRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbmRleDogNCxcclxuICAgICAgICAgICAgdGl0bGVLZXk6IFwiZGFpbHlfZGF5XzVcIixcclxuICAgICAgICAgICAgY291bnRSZXdhcmQ6IDUwMCxcclxuICAgICAgICAgICAgc3ByX2ljb246IFwiZGFpbHlfZ2VtXzA1XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwidGhlbWVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbmRleDogNSxcclxuICAgICAgICAgICAgdGl0bGVLZXk6IFwiZGFpbHlfZGF5XzZcIixcclxuICAgICAgICAgICAgY291bnRSZXdhcmQ6IDEwMDAsXHJcbiAgICAgICAgICAgIHNwcl9pY29uOiBcImRhaWx5X2dlbV8wNlwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcImRpYW1vbmRcIlxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiYWRzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IFwiUFRfMTZcIixcclxuICAgICAgICAgICAgdHlwZTogXCJhZHNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogXCJQVF8xXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiYWRzXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBcIlBUXzJcIixcclxuICAgICAgICAgICAgdHlwZTogXCJhZHNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogXCJQVF8zXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiYWRzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IFwiUFRfNFwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcImFkc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBcIlBUXzVcIixcclxuICAgICAgICAgICAgdHlwZTogXCJkaWFtb25kXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiA1MDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IFwiUFRfNlwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcImFkc1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgICxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBcIlBUXzhcIixcclxuICAgICAgICAgICAgdHlwZTogXCJhZHNcIlxyXG4gICAgICAgIH1cclxuICAgICAgICAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogXCJQVF85XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZGlhbW9uZFwiLFxyXG4gICAgICAgICAgICBwcmljZTogNTAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgICxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBcIlBUXzEwXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiYWRzXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IFwiUFRfMTFcIixcclxuICAgICAgICAgICAgdHlwZTogXCJhZHNcIlxyXG4gICAgICAgIH1cclxuICAgICAgICAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogXCJQVF8xMlwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcImRpYW1vbmRcIixcclxuICAgICAgICAgICAgcHJpY2U6IDUwMFxyXG4gICAgICAgIH1cclxuICAgICAgICAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogXCJQVF8xM1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcImFkc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiBcIlBUXzE0XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiYWRzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IFwiUFRfMTVcIixcclxuICAgICAgICAgICAgdHlwZTogXCJkaWFtb25kXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiA1MDBcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgbGFuZ3VhZ2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbmRleDogMCxcclxuICAgICAgICAgICAgbmFtZTogXCJFbmdsaXNoXCIsXHJcbiAgICAgICAgICAgIGtleTogXCJlblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgICAgICBuYW1lOiBcIlJ1c3NpYVwiLFxyXG4gICAgICAgICAgICBrZXk6IFwicnVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbmRleDogMCxcclxuICAgICAgICAgICAgbmFtZTogXCJFbmdsaXNoXCIsXHJcbiAgICAgICAgICAgIGtleTogXCJ0clwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgICAgICBuYW1lOiBcIktvcmVhblwiLFxyXG4gICAgICAgICAgICBrZXk6IFwia29cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbmRleDogMCxcclxuICAgICAgICAgICAgbmFtZTogXCJFbmdsaXNoXCIsXHJcbiAgICAgICAgICAgIGtleTogXCJ6aFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkphcGFuXCIsXHJcbiAgICAgICAgICAgIGtleTogXCJqYVwiXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBnZW1zOiB7XHJcbiAgICAgICAgdHlwZTogR2VtU2hvcFR5cGUuQURTLCAvLyBzZXQgdG8gQURTIGZvciBzaG93IG9ubHkgaXRlbSBhZHMgZ2V0IGdlbVxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgcmV3YXJkOiAxMDAsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogMi45OSxcclxuICAgICAgICAgICAgICAgIHNhbGU6IDAsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcImdlbV8wMVwiLFxyXG4gICAgICAgICAgICAgICAgdHlwZVJld2FyZDogR2VtU2hvcFR5cGUuQURTLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgICAgIHJld2FyZDogMjAwLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDIuOTksXHJcbiAgICAgICAgICAgICAgICBzYWxlOiAwLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJnZW1fMDJcIixcclxuICAgICAgICAgICAgICAgIHR5cGVSZXdhcmQ6IEdlbVNob3BUeXBlLkJVWSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgICAgICByZXdhcmQ6IDMwMCxcclxuICAgICAgICAgICAgICAgIHByaWNlOiAzLjk5LFxyXG4gICAgICAgICAgICAgICAgc2FsZTogMCxcclxuICAgICAgICAgICAgICAgIGljb246IFwiZ2VtXzAzXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlUmV3YXJkOiBHZW1TaG9wVHlwZS5CVVksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgICAgICAgcmV3YXJkOiA0MDAsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogNC45OSxcclxuICAgICAgICAgICAgICAgIHNhbGU6IDAsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcImdlbV8wNFwiLFxyXG4gICAgICAgICAgICAgICAgdHlwZVJld2FyZDogR2VtU2hvcFR5cGUuQlVZLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogNSxcclxuICAgICAgICAgICAgICAgIHJld2FyZDogNTAwLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDUuOTksXHJcbiAgICAgICAgICAgICAgICBzYWxlOiAwLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJnZW1fMDVcIixcclxuICAgICAgICAgICAgICAgIHR5cGVSZXdhcmQ6IEdlbVNob3BUeXBlLkJVWSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDYsXHJcbiAgICAgICAgICAgICAgICByZXdhcmQ6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogNi45OSxcclxuICAgICAgICAgICAgICAgIHNhbGU6IDAsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcImdlbV8wNlwiLFxyXG4gICAgICAgICAgICAgICAgdHlwZVJld2FyZDogR2VtU2hvcFR5cGUuQlVZLFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgcG9wdXBSZXdhcmREYXkwOiBcInBvcHVwLXJld2FyZC1kYXktMFwiLFxyXG4gICAgcG9wdXBEYWlseVJld2FyZDogXCJwb3B1cC1kYWlseS1yZXdhcmRcIixcclxuICAgIHBvcHVwTWFpblNldHRpbmc6IFwicG9wdXAtbWFpbi1zZXR0aW5nXCIsXHJcbiAgICBwb3B1cFNob3BHZW1zOiBcInBvcHVwLXNob3AtZ2Vtc1wiLFxyXG4gICAgcG9wdXBGYXN0U2hvcEdlbXM6IFwicG9wdXAtZmFzdC1zaG9wLWdlbXNcIixcclxuICAgIHBvcHVwQm94SW5mbzogXCJwb3B1cC1ib3gtaW5mb1wiLFxyXG4gICAgcG9wdXBXaGF0TmV4dDogXCJwb3B1cC13aGF0LW5leHRcIixcclxuICAgIHBvcHVwQXVkaW9TeW5jOiBcInBvcHVwLWF1ZGlvLXN5bmNcIixcclxuICAgIHBvcHVwVklQOiBcInBvcHVwLXZpcFwiLFxyXG4gICAgcG9wdXBTdGFydGVyOiBcInBvcHVwLXN0YXJ0ZXItcGFja1wiLFxyXG4gICAga2V5T3B0aW9uczogW1xyXG4gICAgICAgIC8vIHsgbmFtZTogXCJTcGFjZVwiLCBrZXlDb2RlOiBjYy5tYWNyby5LRVkuc3BhY2UgfSxcclxuICAgICAgICAvLyB7IG5hbWU6IFwiRW50ZXJcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLmVudGVyIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIkFycm93IFVwXCIsIGtleUNvZGU6IGNjLm1hY3JvLktFWS51cCB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJBcnJvdyBEb3duXCIsIGtleUNvZGU6IGNjLm1hY3JvLktFWS5kb3duIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIkFycm93IExlZnRcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLmxlZnQgfSxcclxuICAgICAgICB7IG5hbWU6IFwiQXJyb3cgUmlnaHRcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLnJpZ2h0IH0sXHJcbiAgICAgICAgLy8geyBuYW1lOiBcIlNoaWZ0XCIsIGtleUNvZGU6IGNjLm1hY3JvLktFWS5zaGlmdCB9LFxyXG4gICAgICAgIC8vIHsgbmFtZTogXCJDdHJsXCIsIGtleUNvZGU6IGNjLm1hY3JvLktFWS5jdHJsIH0sXHJcbiAgICAgICAgLy8geyBuYW1lOiBcIkFsdFwiLCBrZXlDb2RlOiBjYy5tYWNyby5LRVkuYWx0IH0sXHJcbiAgICAgICAgLy8geyBuYW1lOiBcIlBhdXNlXCIsIGtleUNvZGU6IGNjLm1hY3JvLktFWS5wYXVzZSB9LFxyXG4gICAgICAgIC8vIHsgbmFtZTogXCJDYXBzbG9ja1wiLCBrZXlDb2RlOiBjYy5tYWNyby5LRVkuY2Fwc2xvY2sgfSxcclxuICAgICAgICAvLyB7IG5hbWU6IFwiRVNDXCIsIGtleUNvZGU6IGNjLm1hY3JvLktFWS5lc2NhcGUgfSxcclxuICAgICAgICAvLyB7IG5hbWU6IFwiRW5kXCIsIGtleUNvZGU6IGNjLm1hY3JvLktFWS5lbmQgfSxcclxuICAgICAgICAvLyB7IG5hbWU6IFwiSG9tZVwiLCBrZXlDb2RlOiBjYy5tYWNyby5LRVkuaG9tZSB9LFxyXG4gICAgICAgIC8vIHsgbmFtZTogXCJTZWxlY3RcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLnNlbGVjdCB9LFxyXG4gICAgICAgIC8vIHsgbmFtZTogXCJJbnNlcnRcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLmluc2VydCB9LFxyXG4gICAgICAgIC8vIHsgbmFtZTogXCJEZWxldGVcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLkRlbGV0ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJBXCIsIGtleUNvZGU6IGNjLm1hY3JvLktFWS5hIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIkJcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLmIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiQ1wiLCBrZXlDb2RlOiBjYy5tYWNyby5LRVkuYyB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJEXCIsIGtleUNvZGU6IGNjLm1hY3JvLktFWS5kIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIkVcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLmUgfSxcclxuICAgICAgICB7IG5hbWU6IFwiRlwiLCBrZXlDb2RlOiBjYy5tYWNyby5LRVkuZiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJHXCIsIGtleUNvZGU6IGNjLm1hY3JvLktFWS5nIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIkhcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLmggfSxcclxuICAgICAgICB7IG5hbWU6IFwiSVwiLCBrZXlDb2RlOiBjYy5tYWNyby5LRVkuaSB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJKXCIsIGtleUNvZGU6IGNjLm1hY3JvLktFWS5qIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIktcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLmsgfSxcclxuICAgICAgICB7IG5hbWU6IFwiTFwiLCBrZXlDb2RlOiBjYy5tYWNyby5LRVkubCB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJNXCIsIGtleUNvZGU6IGNjLm1hY3JvLktFWS5tIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIk5cIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLm4gfSxcclxuICAgICAgICB7IG5hbWU6IFwiT1wiLCBrZXlDb2RlOiBjYy5tYWNyby5LRVkubyB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJQXCIsIGtleUNvZGU6IGNjLm1hY3JvLktFWS5wIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIlFcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLnEgfSxcclxuICAgICAgICB7IG5hbWU6IFwiUlwiLCBrZXlDb2RlOiBjYy5tYWNyby5LRVkuciB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJTXCIsIGtleUNvZGU6IGNjLm1hY3JvLktFWS5zIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIlRcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLnQgfSxcclxuICAgICAgICB7IG5hbWU6IFwiVVwiLCBrZXlDb2RlOiBjYy5tYWNyby5LRVkudSB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJWXCIsIGtleUNvZGU6IGNjLm1hY3JvLktFWS52IH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIldcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLncgfSxcclxuICAgICAgICB7IG5hbWU6IFwiWFwiLCBrZXlDb2RlOiBjYy5tYWNyby5LRVkueCB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJZXCIsIGtleUNvZGU6IGNjLm1hY3JvLktFWS55IH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIlpcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLnogfSxcclxuICAgICAgICB7IG5hbWU6IFwiTnVtIDFcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLm51bTEgfSxcclxuICAgICAgICB7IG5hbWU6IFwiTnVtIDJcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLm51bTIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiTnVtIDNcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLm51bTMgfSxcclxuICAgICAgICB7IG5hbWU6IFwiTnVtIDRcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLm51bTQgfSxcclxuICAgICAgICB7IG5hbWU6IFwiTnVtIDVcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLm51bTUgfSxcclxuICAgICAgICB7IG5hbWU6IFwiTnVtIDZcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLm51bTYgfSxcclxuICAgICAgICB7IG5hbWU6IFwiTnVtIDdcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLm51bTcgfSxcclxuICAgICAgICB7IG5hbWU6IFwiTnVtIDhcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLm51bTggfSxcclxuICAgICAgICB7IG5hbWU6IFwiTnVtIDlcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLm51bTkgfSxcclxuICAgICAgICB7IG5hbWU6IFwiTnVtIDBcIiwga2V5Q29kZTogY2MubWFjcm8uS0VZLm51bTAgfSxcclxuXHJcbiAgICBdLFxyXG4gICAgUEFZX01FTlRfS0VZOiBcInZpcFwiLFxyXG4gICAgUEFZX01FTlRfS0VZX1NUQVJURVI6IFwic3RhcnRlclwiLFxyXG4gICAgdXNlRWZmZWN0VHJhbnNCYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgc2hvd0RpZmZpY2FsdHk6IHRydWUsXHJcbiAgICBzaG93UmV3YXJkRGF5MDogZmFsc2UsXHJcbiAgICBpc0hpZGVUdXRvcmlhbFNvbmdMaXN0OiB0cnVlLFxyXG4gICAgaXNTaG93SW50ZXJ0aWFsQWRzOiB0cnVlLFxyXG4gICAgSEVBVEhfQ09VTlQ6IDMsXHJcbiAgICBTT05HX1JFU1VMVF9DT1VOVDogNixcclxuICAgIFBFUkZFQ1RfUE9XOiAwLjEsXHJcbiAgICBHUkVBVF9QT1c6IDAuMDUsXHJcbiAgICBDT09MX1BPVzogLTAuMTUsXHJcbiAgICBNSVNTX1BPVzogLTIuNixcclxuICAgIE1BWF9USU1FX01JU1M6IDEwLFxyXG4gICAgVElNRV9ERUxBWV9GSVJTVF9USUxFOiAzLFxyXG5cclxuICAgIHVzZVNoaWVsZDogdHJ1ZSxcclxuICAgIFRJTUVfU0hJRUxEOiA0LFxyXG5cclxuICAgIGlzQXV0b1BsYXlQcmV2aWV3OiBmYWxzZSxcclxuICAgIHJlc3RyaWN0Q29udGVudDogdHJ1ZSxcclxuICAgIG1heEdlbVJld2FyZDogMTAwLFxyXG4gICAgdXNlU2xpZGVyVGlsZTogZmFsc2UsXHJcbiAgICB1c2VBdWRpb1N5bmM6IHRydWUsXHJcbiAgICB1c2VMYW5ndWFnZVNldHRpbmc6IHRydWUsXHJcbiAgICBzZXJ2ZXI6IFwiXCIsXHJcbiAgICBFVkVOVF9OQU1FOiB7XHJcbiAgICAgICAgRVBUX0dBTUVfSU5JVDogXCJnYW1lX2luaXRcIiwgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGxheWVyX2dlbVxyXG4gICAgICAgIEVQVF9PUEVOX0JPWDogXCJvcGVuX2JveFwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJveFR5cGUsIGJveFByaWNlLCBwbGF5ZXJfZ2VtLCBpc1VubG9ja2VkXHJcbiAgICAgICAgRVBUX1VOTE9DS19CT1g6IFwidW5sb2NrX2JveFwiLCAgICAgICAgICAgICAgICAgICAgICAgLy8gYm94VHlwZSwgYm94UHJpY2UsIHBsYXllcl9nZW0sIGxvY2FsXHJcbiAgICAgICAgRVBUX1VOTE9DS19GQUlMRDogXCJ1bmxvY2tfYm94X2ZhaWxkXCIsICAgICAgICAgICAgICAgLy8gYm94VHlwZSwgYm94UHJpY2UsIHBsYXllcl9nZW0sIGxvY2FsXHJcbiAgICAgICAgRVBUX1NPTkdfUFJFVklWRVdfU1RBUlQ6IFwic29uZ19wcmV2aWV3X3N0YXJ0XCIsICAgICAgLy8gc29uZ19uYW1lLCBzb25nX2lkLCBsb2NhbCwgdHlwZV9wbGF5LCBwbGF5ZXJfZ2VtXHJcbiAgICAgICAgRVBUX1NPTkdfUFJFVklWRVdfU1RPUDogXCJzb25nX3ByZXZpZXdfc3RvcFwiLCAgICAgICAgLy8gc29uZ19uYW1lLCBzb25nX2lkLCBsb2NhbCwgcGxheWVyX2dlbVxyXG4gICAgICAgIEVQVF9TT05HX0NMSUNLOiBcInNvbmdfY2xpY2tcIiwgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvbmdfbmFtZSwgc29uZ19pZCwgdGFiLCBwbGF5ZXJfZ2VtXHJcbiAgICAgICAgRVBUX1NPTkdfVU5MT0NLOiBcInNvbmdfdW5sb2NrXCIsICAgICAgICAgICAgICAgICAgICAgLy8gc29uZ19uYW1lLCBzb25nX2lkLCB0YWIsIHBsYXllcl9nZW1cclxuICAgICAgICBFUFRfU09OR19VTkxPQ0tfRElBTU9ORDogXCJzb25nX3VubG9ja19kaWFtb25kXCIsICAgICAvLyBzb25nX25hbWUsIHNvbmdfaWQsIHRhYiwgcGxheWVyX2dlbVxyXG4gICAgICAgIEVQVF9TT05HX1NUQVJUOiBcInNvbmdfc3RhcnRcIiwgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvbmdfbmFtZSwgc29uZ19pZCwgdGhlbWUsIHBsYXllcl9nZW1cclxuICAgICAgICBFUFRfU09OR19GQUlMRDogXCJzb25nX2ZhaWxkXCIsICAgICAgICAgICAgICAgICAgICAgICAvLyBzb25nX25hbWUsIHNvbmdfaWQsIHBsYXllcl9nZW1cclxuICAgICAgICBFUFRfU09OR19SRVZJVkU6IFwic29uZ19yZXZpdmVcIiwgICAgICAgICAgICAgICAgICAgICAvLyBzb25nX25hbWUsIHNvbmdfaWQsIHBsYXllcl9nZW1cclxuICAgICAgICBFUFRfU09OR19SRVNVTFQ6IFwic29uZ19yZXN1bHRcIiwgICAgICAgICAgICAgICAgICAgICAvLyBzb25nX25hbWUsIHNvbmdfaWQsIHBsYXllcl9nZW1cclxuICAgICAgICBFUFRfU0hPUF9USEVNRV9PUEVOOiBcInNob3BfdGhlbWVfb3BlblwiLCAgICAgICAgICAgICAvLyBzb25nX25hbWUsIHNvbmdfaWQsIHBsYXllcl9nZW1cclxuICAgICAgICBFUFRfU0VMRUNURURfVEhFTUU6IFwic2VsZWN0ZWRfdGhlbWVcIiwgICAgICAgICAgICAgICAvLyBzb25nX25hbWUsIHNvbmdfaWQsIHRoZW1lX2lkLCBwbGF5ZXJfZ2VtXHJcbiAgICAgICAgRVBUX0RBSUxZX1JFV0FSRF9DTEFJTTogXCJkYWlseV9yZXdhcmRfY2xhaW1cIiwgICAgICAgLy8gcmV3YXJkX2RheSwgcmV3YXJkLCBwbGF5ZXJfZ2VtXHJcbiAgICAgICAgRVBUX0NMQUlNX0ZJUlNUX1JFV0FSRDogXCJjbGFpbV9maXJzdF9yZXdhcmRcIiwgICAgICAgLy8gcmV3YXJkLCBwbGF5ZXJfZ2VtXHJcbiAgICAgICAgRVBUX1RVVE9SSUFMX0NPTVBMRVRFOiBcInR1dG9yaWFsX2NvbXBsZXRlXCIsICAgICAgICAgLy8gcGxheWVyX2dlbVxyXG4gICAgfSxcclxuXHJcbiAgICBQT1BVUF9OQU1FOiB7XHJcbiAgICAgICAgUE9fU0VUVElORzogXCJwb19zZXR0aW5nXCIsXHJcbiAgICAgICAgUE9fU0hPUDogXCJwb19zaG9wXCJcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVEZWZpbmVzOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/controller/SettingController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7711aE3ZKNImobFiluzeu2o', 'SettingController');
// Script/controller/SettingController.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PopupBase_1 = __importDefault(require("../../Exts/PopupBase"));
const { ccclass, property } = cc._decorator;
let SettingController = class SettingController extends PopupBase_1.default {
    constructor() {
        super(...arguments);
        this.label = null;
    }
    initSetting() {
    }
    btnBackOnClick() {
        this.closeWithEffect();
    }
};
__decorate([
    property(cc.Label)
], SettingController.prototype, "label", void 0);
SettingController = __decorate([
    ccclass
], SettingController);
exports.default = SettingController;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb250cm9sbGVyXFxTZXR0aW5nQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUE2QztBQUU3QyxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFHNUMsSUFBcUIsaUJBQWlCLEdBQXRDLE1BQXFCLGlCQUFrQixTQUFRLG1CQUFTO0lBQXhEOztRQUV3QixVQUFLLEdBQW9CLElBQUksQ0FBQztJQVl0RCxDQUFDO0lBVFUsV0FBVztJQUVsQixDQUFDO0lBRUQsY0FBYztRQUNWLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtJQUMxQixDQUFDO0NBR0osQ0FBQTtBQVp1QjtJQUFuQixRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFBK0I7QUFGakMsaUJBQWlCO0lBRHJDLE9BQU87R0FDYSxpQkFBaUIsQ0FjckM7a0JBZG9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb3B1cEJhc2UgZnJvbSBcIi4uLy4uL0V4dHMvUG9wdXBCYXNlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nQ29udHJvbGxlciBleHRlbmRzIFBvcHVwQmFzZSB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpIGxhYmVsOiBjYy5MYWJlbCB8IG51bGwgPSBudWxsO1xuXG5cbiAgICBwdWJsaWMgaW5pdFNldHRpbmcoKXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgYnRuQmFja09uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuY2xvc2VXaXRoRWZmZWN0KClcbiAgICB9XG5cblxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/GameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dec8fHCKaxKIrsVoVxgLzJp', 'GameOver');
// Script/panel/GameOver.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
var GameData = require("GameData");
cc.Class({
  "extends": cc.Component,
  properties: {
    backColor: cc.Node,
    backButton: cc.Node,
    //返回按钮
    reviveButton: cc.Node //复活按钮
  },
  onLoad: function onLoad() {
    GameTools.submitScore(GameData.heightScore); //提交得分
    if (GameData.heightScore > GameData.getHeightScore()) {
      GameData.setHeightScore(GameData.heightScore);
    }
    GameUiTools.setButtonClickEvents(this, this.backButton, "buttonFunc");
    GameUiTools.setButtonClickEvents(this, this.reviveButton, "buttonFunc");
  },
  buttonFunc: function buttonFunc(event) {
    var button = event.target;
    if (this.reviveButton == button) {
      GameTools.playSimpleAudioEngine(0);
      if (GameData.getGameIntegral() >= 30) {
        GameConfig.IS_GAME_OVER = false;
        GameConfig.GameLogic.backGame();
        GameData.setGamePropNumber(0, 1);
        GameData.setGamePropNumber(1, 1);
        GameData.setGamePropNumber(2, 1);
        GameData.setGameIntegral(-30);
        GameConfig.GameScene.setGamePropNumber(0);
        GameConfig.GameScene.setGamePropNumber(1);
        GameConfig.GameScene.setGamePropNumber(2);
        this.node.destroy();
        if (GameConfig.IS_GAME_MUSIC) {
          GameTools.playBackgroundMusic();
        }
      }
    } else if (this.backButton == button) {
      GameTools.playSimpleAudioEngine(0);
      this.loadingResource();
    }
    return true;
  },
  loadingResource: function loadingResource() {
    GameTools.removeRankData();
    GameData.setHaveGameData(false);
    GameData.setGamePassNum(1);
    GameConfig.loadingSceneType = GameConfig.LoadingSceneType.LoadingSceneBackGame;
    GameConfig.mainMenu = GameConfig.MainMenu.MainMenuSpace;
    cc.director.loadScene("LoadingScene");
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcR2FtZU92ZXIuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVG9vbHMiLCJHYW1lVWlUb29scyIsIkdhbWVEYXRhIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiYWNrQ29sb3IiLCJOb2RlIiwiYmFja0J1dHRvbiIsInJldml2ZUJ1dHRvbiIsIm9uTG9hZCIsInN1Ym1pdFNjb3JlIiwiaGVpZ2h0U2NvcmUiLCJnZXRIZWlnaHRTY29yZSIsInNldEhlaWdodFNjb3JlIiwic2V0QnV0dG9uQ2xpY2tFdmVudHMiLCJidXR0b25GdW5jIiwiZXZlbnQiLCJidXR0b24iLCJ0YXJnZXQiLCJwbGF5U2ltcGxlQXVkaW9FbmdpbmUiLCJnZXRHYW1lSW50ZWdyYWwiLCJJU19HQU1FX09WRVIiLCJHYW1lTG9naWMiLCJiYWNrR2FtZSIsInNldEdhbWVQcm9wTnVtYmVyIiwic2V0R2FtZUludGVncmFsIiwiR2FtZVNjZW5lIiwibm9kZSIsImRlc3Ryb3kiLCJJU19HQU1FX01VU0lDIiwicGxheUJhY2tncm91bmRNdXNpYyIsImxvYWRpbmdSZXNvdXJjZSIsInJlbW92ZVJhbmtEYXRhIiwic2V0SGF2ZUdhbWVEYXRhIiwic2V0R2FtZVBhc3NOdW0iLCJsb2FkaW5nU2NlbmVUeXBlIiwiTG9hZGluZ1NjZW5lVHlwZSIsIkxvYWRpbmdTY2VuZUJhY2tHYW1lIiwibWFpbk1lbnUiLCJNYWluTWVudSIsIk1haW5NZW51U3BhY2UiLCJkaXJlY3RvciIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDdEMsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDLElBQUlFLFdBQVcsR0FBR0YsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUN4QyxJQUFJRyxRQUFR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QyxjQUFjLENBQUM7RUFDekM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XHJcbnZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xyXG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XHJcbnZhciBHYW1lRGF0YSA9IHJlcXVpcmUoXCJHYW1lRGF0YVwiKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJhY2tDb2xvcjogY2MuTm9kZSxcclxuICAgICAgICBiYWNrQnV0dG9uOiBjYy5Ob2RlLCAvL+i/lOWbnuaMiemSrlxyXG4gICAgICAgIHJldml2ZUJ1dHRvbjogY2MuTm9kZSwgLy/lpI3mtLvmjInpkq5cclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIEdhbWVUb29scy5zdWJtaXRTY29yZShHYW1lRGF0YS5oZWlnaHRTY29yZSk7IC8v5o+Q5Lqk5b6X5YiGXHJcbiAgICAgICAgaWYgKEdhbWVEYXRhLmhlaWdodFNjb3JlID4gR2FtZURhdGEuZ2V0SGVpZ2h0U2NvcmUoKSkge1xyXG4gICAgICAgICAgICBHYW1lRGF0YS5zZXRIZWlnaHRTY29yZShHYW1lRGF0YS5oZWlnaHRTY29yZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMuYmFja0J1dHRvbiwgXCJidXR0b25GdW5jXCIpO1xyXG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMucmV2aXZlQnV0dG9uLCBcImJ1dHRvbkZ1bmNcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGJ1dHRvbkZ1bmM6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHRoaXMucmV2aXZlQnV0dG9uID09IGJ1dHRvbikge1xyXG4gICAgICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDApO1xyXG4gICAgICAgICAgICBpZiAoR2FtZURhdGEuZ2V0R2FtZUludGVncmFsKCkgPj0gMzApIHtcclxuICAgICAgICAgICAgICAgIEdhbWVDb25maWcuSVNfR0FNRV9PVkVSID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVMb2dpYy5iYWNrR2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgR2FtZURhdGEuc2V0R2FtZVByb3BOdW1iZXIoMCwgMSk7XHJcbiAgICAgICAgICAgICAgICBHYW1lRGF0YS5zZXRHYW1lUHJvcE51bWJlcigxLCAxKTtcclxuICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNldEdhbWVQcm9wTnVtYmVyKDIsIDEpO1xyXG4gICAgICAgICAgICAgICAgR2FtZURhdGEuc2V0R2FtZUludGVncmFsKC0zMCk7XHJcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVTY2VuZS5zZXRHYW1lUHJvcE51bWJlcigwKTtcclxuICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZVNjZW5lLnNldEdhbWVQcm9wTnVtYmVyKDEpO1xyXG4gICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5HYW1lU2NlbmUuc2V0R2FtZVByb3BOdW1iZXIoMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcuSVNfR0FNRV9NVVNJQykge1xyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5wbGF5QmFja2dyb3VuZE11c2ljKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYmFja0J1dHRvbiA9PSBidXR0b24pIHtcclxuICAgICAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgwKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nUmVzb3VyY2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgbG9hZGluZ1Jlc291cmNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgR2FtZVRvb2xzLnJlbW92ZVJhbmtEYXRhKCk7XHJcbiAgICAgICAgR2FtZURhdGEuc2V0SGF2ZUdhbWVEYXRhKGZhbHNlKTtcclxuICAgICAgICBHYW1lRGF0YS5zZXRHYW1lUGFzc051bSgxKTtcclxuICAgICAgICBHYW1lQ29uZmlnLmxvYWRpbmdTY2VuZVR5cGUgPSBHYW1lQ29uZmlnLkxvYWRpbmdTY2VuZVR5cGUuTG9hZGluZ1NjZW5lQmFja0dhbWU7XHJcbiAgICAgICAgR2FtZUNvbmZpZy5tYWluTWVudSA9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVTcGFjZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJMb2FkaW5nU2NlbmVcIik7XHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5c1e996ZgRF74Ib0kGwThK2', 'use_v2.0.x_cc.Toggle_event');
// migration/use_v2.0.x_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only compatible with projects prior to v2.1.0.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 之前版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */

if (cc.Toggle) {
  // Whether the 'toggle' and 'checkEvents' events are fired when 'toggle.check() / toggle.uncheck()' is called in the code
  // 在代码中调用 'toggle.check() / toggle.uncheck()' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_check = true;
}

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMC54X2NjLlRvZ2dsZV9ldmVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIlRvZ2dsZSIsIl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLEVBQUUsQ0FBQ0MsTUFBTSxFQUFFO0VBQ1g7RUFDQTtFQUNBRCxFQUFFLENBQUNDLE1BQU0sQ0FBQ0MsMkJBQTJCLEdBQUcsSUFBSTtBQUNoRCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgQ29jb3MgQ3JlYXRvciBhbmQgaXMgb25seSBjb21wYXRpYmxlIHdpdGggcHJvamVjdHMgcHJpb3IgdG8gdjIuMS4wLlxyXG4gKiBZb3UgZG8gbm90IG5lZWQgdG8gbWFudWFsbHkgYWRkIHRoaXMgc2NyaXB0IGluIGFueSBvdGhlciBwcm9qZWN0LlxyXG4gKiBJZiB5b3UgZG9uJ3QgdXNlIGNjLlRvZ2dsZSBpbiB5b3VyIHByb2plY3QsIHlvdSBjYW4gZGVsZXRlIHRoaXMgc2NyaXB0IGRpcmVjdGx5LlxyXG4gKiBJZiB5b3VyIHByb2plY3QgaXMgaG9zdGVkIGluIFZDUyBzdWNoIGFzIGdpdCwgc3VibWl0IHRoaXMgc2NyaXB0IHRvZ2V0aGVyLlxyXG4gKlxyXG4gKiDmraTohJrmnKznlLEgQ29jb3MgQ3JlYXRvciDoh6rliqjnlJ/miJDvvIzku4XnlKjkuo7lhbzlrrkgdjIuMS4wIOS5i+WJjeeJiOacrOeahOW3peeoi++8jFxyXG4gKiDkvaDml6DpnIDlnKjku7vkvZXlhbblroPpobnnm67kuK3miYvliqjmt7vliqDmraTohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5Lit5rKh55So5YiwIFRvZ2dsZe+8jOWPr+ebtOaOpeWIoOmZpOivpeiEmuacrOOAglxyXG4gKiDlpoLmnpzkvaDnmoTpobnnm67mnInmiZjnrqHkuo4gZ2l0IOetieeJiOacrOW6k++8jOivt+WwhuatpOiEmuacrOS4gOW5tuS4iuS8oOOAglxyXG4gKi9cclxuXHJcbmlmIChjYy5Ub2dnbGUpIHtcclxuICAgIC8vIFdoZXRoZXIgdGhlICd0b2dnbGUnIGFuZCAnY2hlY2tFdmVudHMnIGV2ZW50cyBhcmUgZmlyZWQgd2hlbiAndG9nZ2xlLmNoZWNrKCkgLyB0b2dnbGUudW5jaGVjaygpJyBpcyBjYWxsZWQgaW4gdGhlIGNvZGVcclxuICAgIC8vIOWcqOS7o+eggeS4reiwg+eUqCAndG9nZ2xlLmNoZWNrKCkgLyB0b2dnbGUudW5jaGVjaygpJyDml7bmmK/lkKbop6blj5EgJ3RvZ2dsZScg5LiOICdjaGVja0V2ZW50cycg5LqL5Lu2XHJcbiAgICBjYy5Ub2dnbGUuX3RyaWdnZXJFdmVudEluU2NyaXB0X2NoZWNrID0gdHJ1ZTtcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Exts/PersistNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85e321mA3ZJKKH/pLABFp7B', 'PersistNode');
// Exts/PersistNode.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ccclass, property } = cc._decorator;
let PersistNode = class PersistNode extends cc.Component {
    onLoad() {
        cc.game.addPersistRootNode(this.node);
        cc.game.on(cc.game.EVENT_SHOW, this.onShow, this);
        cc.game.on(cc.game.EVENT_HIDE, this.onHide, this);
    }
    backHome() { }
    onViewShow(event) {
        console.log(event.node.name);
    }
    onViewHidden(event) {
    }
    onDestroy() {
    }
    onShow() { }
    onHide() {
    }
    start() {
    }
    onLoadingSuccess() { }
    onGameStart() { }
};
PersistNode = __decorate([
    ccclass
], PersistNode);
exports.default = PersistNode;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXh0c1xcUGVyc2lzdE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFHNUMsSUFBcUIsV0FBVyxHQUFoQyxNQUFxQixXQUFZLFNBQVEsRUFBRSxDQUFDLFNBQVM7SUFFakQsTUFBTTtRQUNGLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEQsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsUUFBUSxLQUFJLENBQUM7SUFFYixVQUFVLENBQUMsS0FBd0I7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBd0I7SUFFckMsQ0FBQztJQUVELFNBQVM7SUFFVCxDQUFDO0lBSUQsTUFBTSxLQUFJLENBQUM7SUFFWCxNQUFNO0lBQ04sQ0FBQztJQUVELEtBQUs7SUFFTCxDQUFDO0lBRUQsZ0JBQWdCLEtBQUksQ0FBQztJQUVyQixXQUFXLEtBQUksQ0FBQztDQUNuQixDQUFBO0FBcENvQixXQUFXO0lBRC9CLE9BQU87R0FDYSxXQUFXLENBb0MvQjtrQkFwQ29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzaXN0Tm9kZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX1NIT1csIHRoaXMub25TaG93LCB0aGlzKTtcclxuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfSElERSwgdGhpcy5vbkhpZGUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGJhY2tIb21lKCkge31cclxuXHJcbiAgICBvblZpZXdTaG93KGV2ZW50OiB7IG5vZGU6IGNjLk5vZGUgfSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50Lm5vZGUubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25WaWV3SGlkZGVuKGV2ZW50OiB7IG5vZGU6IGNjLk5vZGUgfSkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICBcclxuXHJcbiAgICBvblNob3coKSB7fVxyXG5cclxuICAgIG9uSGlkZSgpIHtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWRpbmdTdWNjZXNzKCkge31cclxuXHJcbiAgICBvbkdhbWVTdGFydCgpIHt9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CardSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a4ef50jralNeI7oo4DmKqQv', 'CardSprite');
// Script/CardSprite.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
var CardSprite = cc.Class({
  "extends": cc.Node,
  properties: {
    cardSprite: null,
    number: 0,
    // 显示数字
    isSelect: false,
    //记录是否选中
    isFirstSelect: false //记录是否为第一次选中
  },

  ctor: function ctor() {
    this.cardSprite = this.addComponent(cc.Sprite);
  },
  //特价9.9元一套cocoscreator代码联系Q2483367084 
  //截图 链接：https://share.weiyun.com/leGAHpnB 密码：b9udtv
  statics: {
    createCardSprite: function createCardSprite(numbers, CardSpriteX, CardSpriteY) {
      var cardSprite = new CardSprite();
      // 自定义初始化
      cardSprite.initCard(numbers, CardSpriteX, CardSpriteY);
      return cardSprite;
    }
  },
  initCard: function initCard(numbers, CardSpriteX, CardSpriteY)
  // 初始化
  {
    // 初始化数字
    this.number = numbers;
    this.CardShow();
    this.setPosition(CardSpriteX, CardSpriteY);
    this.width = GameConfig.CARD_WIDTH;
    this.height = GameConfig.CARD_WIDTH;
    this.cardSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
  },
  CardShow: function CardShow() {
    // 判断数字的大小来调整颜色
    if (this.number == 1) {
      GameUiTools.getSpriteFrame("pop_game/barrier", this.cardSprite);
    } else if (this.number == -1) {
      GameUiTools.getSpriteFrame("pop_game/popgame_61", this.cardSprite);
    } else if (this.number == 0) {
      // this.cardSprite.spriteFrame = GameUiTools.getSpriteFrame("pop_game/emptyl");
      GameUiTools.getSpriteFrame("pop_game/emptyl", this.cardSprite);
    } else if (this.number >= 2 && this.number <= 131072) {
      // this.cardSprite.spriteFrame = GameUiTools.getSpriteFrame("pop_game/n" + this.number);
      GameUiTools.getSpriteFrame("pop_game/n" + this.number, this.cardSprite);
    }
  },
  setNumber: function setNumber(number) {
    this.number = number;
  },
  getNumber: function getNumber() {
    return this.number;
  },
  /*
  *创建点击特效
  *ClickType 0移除特效 1点击动画特效 2点击静态特效
  */
  CardClickShow: function CardClickShow(ClickType) {
    if (ClickType == 0) {
      this.removeAllChildren();
      this.isSelect = false;
      this.isFirstSelect = false;
    } else {
      var move = cc.moveBy(0.05, cc.v2(0, 2));
      this.runAction(cc.sequence(move, move.reverse()));
      this.isSelect = true;
      var effects = new cc.Node();
      GameUiTools.getSpriteFrame("pop_game/popgame_61", effects.addComponent(cc.Sprite));
      var w = effects.getContentSize().height;
      var scale = this.getContentSize().height / w;
      effects.setScale(scale);
      this.addChild(effects);
      if (ClickType == 1) {
        this.isFirstSelect = true;
        var move1 = cc.scaleBy(0.4, 1.15);
        var actions = cc.sequence(move1, move1.reverse());
        effects.runAction(actions.repeatForever());
      } else if (ClickType == 2) {
        effects.setScale(scale + 0.05);
      }
    }
  },
  getIsSelect: function getIsSelect() {
    return this.isSelect;
  },
  getIsFirstSelect: function getIsFirstSelect() {
    return this.isFirstSelect;
  },
  isVisible: function isVisible() {
    return this.opacity == 255;
  },
  setVisible: function setVisible(isTrue) {
    this.opacity = isTrue ? 255 : 0;
  }
});
module.exports = CardSprite;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDYXJkU3ByaXRlLmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiR2FtZVVpVG9vbHMiLCJDYXJkU3ByaXRlIiwiY2MiLCJDbGFzcyIsIk5vZGUiLCJwcm9wZXJ0aWVzIiwiY2FyZFNwcml0ZSIsIm51bWJlciIsImlzU2VsZWN0IiwiaXNGaXJzdFNlbGVjdCIsImN0b3IiLCJhZGRDb21wb25lbnQiLCJTcHJpdGUiLCJzdGF0aWNzIiwiY3JlYXRlQ2FyZFNwcml0ZSIsIm51bWJlcnMiLCJDYXJkU3ByaXRlWCIsIkNhcmRTcHJpdGVZIiwiaW5pdENhcmQiLCJDYXJkU2hvdyIsInNldFBvc2l0aW9uIiwid2lkdGgiLCJDQVJEX1dJRFRIIiwiaGVpZ2h0Iiwic2l6ZU1vZGUiLCJTaXplTW9kZSIsIkNVU1RPTSIsImdldFNwcml0ZUZyYW1lIiwic2V0TnVtYmVyIiwiZ2V0TnVtYmVyIiwiQ2FyZENsaWNrU2hvdyIsIkNsaWNrVHlwZSIsInJlbW92ZUFsbENoaWxkcmVuIiwibW92ZSIsIm1vdmVCeSIsInYyIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJyZXZlcnNlIiwiZWZmZWN0cyIsInciLCJnZXRDb250ZW50U2l6ZSIsInNjYWxlIiwic2V0U2NhbGUiLCJhZGRDaGlsZCIsIm1vdmUxIiwic2NhbGVCeSIsImFjdGlvbnMiLCJyZXBlYXRGb3JldmVyIiwiZ2V0SXNTZWxlY3QiLCJnZXRJc0ZpcnN0U2VsZWN0IiwiaXNWaXNpYmxlIiwib3BhY2l0eSIsInNldFZpc2libGUiLCJpc1RydWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0QyxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDcEMsSUFBSUUsV0FBVyxHQUFHRixPQUFPLENBQUMsYUFB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QVMsSUFBSSxDQUFDLEVBQUU7UUFDdkJRLE9BQU8sQ0FBQ0ksUUFBUSxDQUFDRCxLQUFLLEdBQUcsSUFBSSxDQUFDO01BQ2xDO0lBQ0o7RUFDSixDQUFDO0VBQ0RPLFdBQVcsV0FBQUEsWUFBQSxFQUFHO0lBQ1YsT0FBTyxJQUFJLENBQUN6QyxRQUFRO0VBQ3hCLENBQUM7RUFDRDBDLGdCQUFnQixXQUFBQSxpQkFBQSxFQUFHO0lBQ2YsT0FBTyxJQUFJLENBQUN6QyxhQUFhO0VBQzdCLENBQUM7RUFDRDBDLFNBQVMsV0FBQUEsVUFBQSxFQUFHO0lBQ1IsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFBSSxHQUFHO0VBQzlCLENBQUM7RUFDREMsVUFBVSxXQUFBQSxXQUFDQyxNQUFNLEVBQUU7SUFDZixJQUFJLENBQUNGLE9BQU8sR0FBR0UsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDO0VBQ25DO0FBQ0osQ0FBQyxDQUFDO0FBRUZDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHdkQsVUFBVSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcclxudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XHJcbnZhciBHYW1lVWlUb29scyA9IHJlcXVpcmUoXCJHYW1lVWlUb29sc1wiKTtcclxudmFyIENhcmRTcHJpdGUgPSBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Ob2RlLFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGNhcmRTcHJpdGU6IG51bGwsXHJcbiAgICAgICAgbnVtYmVyOiAwLC8vIOaYvuekuuaVsOWtl1xyXG4gICAgICAgIGlzU2VsZWN0OiBmYWxzZSwvL+iusOW9leaYr+WQpumAieS4rVxyXG4gICAgICAgIGlzRmlyc3RTZWxlY3Q6IGZhbHNlLC8v6K6w5b2V5piv5ZCm5Li656ys5LiA5qyh6YCJ5LitXHJcbiAgICB9LFxyXG4gICAgY3RvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2FyZFNwcml0ZSA9IHRoaXMuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICB9LFxyXG5cdC8v54m55Lu3OS455YWD5LiA5aWXY29jb3NjcmVhdG9y5Luj56CB6IGU57O7UTI0ODMzNjcwODQgXHJcbi8v5oiq5Zu+IOmTvuaOpe+8mmh0dHBzOi8vc2hhcmUud2VpeXVuLmNvbS9sZUdBSHBuQiDlr4bnoIHvvJpiOXVkdHZcclxuICAgIHN0YXRpY3M6IHtcclxuICAgICAgICBjcmVhdGVDYXJkU3ByaXRlOiBmdW5jdGlvbiAobnVtYmVycywgQ2FyZFNwcml0ZVgsIENhcmRTcHJpdGVZKSB7XHJcbiAgICAgICAgICAgIGxldCBjYXJkU3ByaXRlID0gbmV3IENhcmRTcHJpdGUoKTtcclxuICAgICAgICAgICAgLy8g6Ieq5a6a5LmJ5Yid5aeL5YyWXHJcbiAgICAgICAgICAgIGNhcmRTcHJpdGUuaW5pdENhcmQobnVtYmVycywgQ2FyZFNwcml0ZVgsIENhcmRTcHJpdGVZKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNhcmRTcHJpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGluaXRDYXJkOiBmdW5jdGlvbiAobnVtYmVycywgQ2FyZFNwcml0ZVgsIENhcmRTcHJpdGVZKS8vIOWIneWni+WMllxyXG4gICAge1xyXG4gICAgICAgIC8vIOWIneWni+WMluaVsOWtl1xyXG4gICAgICAgIHRoaXMubnVtYmVyID0gbnVtYmVycztcclxuICAgICAgICB0aGlzLkNhcmRTaG93KCk7XHJcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihDYXJkU3ByaXRlWCwgQ2FyZFNwcml0ZVkpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBHYW1lQ29uZmlnLkNBUkRfV0lEVEg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBHYW1lQ29uZmlnLkNBUkRfV0lEVEg7XHJcbiAgICAgICAgdGhpcy5jYXJkU3ByaXRlLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcclxuICAgIH0sXHJcbiAgICBDYXJkU2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIOWIpOaWreaVsOWtl+eahOWkp+Wwj+adpeiwg+aVtOminOiJslxyXG4gICAgICAgIGlmICh0aGlzLm51bWJlciA9PSAxKSB7XHJcbiAgICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL2JhcnJpZXJcIiwgdGhpcy5jYXJkU3ByaXRlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyID09IC0xKSB7XHJcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX2dhbWUvcG9wZ2FtZV82MVwiLCB0aGlzLmNhcmRTcHJpdGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgPT0gMCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNhcmRTcHJpdGUuc3ByaXRlRnJhbWUgPSBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL2VtcHR5bFwiKTtcclxuICAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3BfZ2FtZS9lbXB0eWxcIiwgdGhpcy5jYXJkU3ByaXRlICk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciA+PSAyICYmIHRoaXMubnVtYmVyIDw9IDEzMTA3Mikge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNhcmRTcHJpdGUuc3ByaXRlRnJhbWUgPSBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL25cIiArIHRoaXMubnVtYmVyKTtcclxuICAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3BfZ2FtZS9uXCIgKyB0aGlzLm51bWJlciwgdGhpcy5jYXJkU3ByaXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0TnVtYmVyOiBmdW5jdGlvbiAobnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XHJcbiAgICB9LFxyXG4gICAgZ2V0TnVtYmVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyO1xyXG4gICAgfSxcclxuICAgIC8qXHJcbirliJvlu7rngrnlh7vnibnmlYhcclxuKkNsaWNrVHlwZSAw56e76Zmk54m55pWIIDHngrnlh7vliqjnlLvnibnmlYggMueCueWHu+mdmeaAgeeJueaViFxyXG4qL1xyXG4gICAgQ2FyZENsaWNrU2hvdyhDbGlja1R5cGUpIHtcclxuICAgICAgICBpZiAoQ2xpY2tUeXBlID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmlzU2VsZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdFNlbGVjdCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBtb3ZlID0gY2MubW92ZUJ5KDAuMDUsIGNjLnYyKDAsIDIpKTtcclxuICAgICAgICAgICAgdGhpcy5ydW5BY3Rpb24oY2Muc2VxdWVuY2UobW92ZSwgbW92ZS5yZXZlcnNlKCkpKTtcclxuICAgICAgICAgICAgdGhpcy5pc1NlbGVjdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBlZmZlY3RzID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3BfZ2FtZS9wb3BnYW1lXzYxXCIsIGVmZmVjdHMuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkpO1xyXG4gICAgICAgICAgICBsZXQgdyA9IGVmZmVjdHMuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IHRoaXMuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLyB3O1xyXG4gICAgICAgICAgICBlZmZlY3RzLnNldFNjYWxlKHNjYWxlKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChlZmZlY3RzKTtcclxuICAgICAgICAgICAgaWYgKENsaWNrVHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3RTZWxlY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vdmUxID0gY2Muc2NhbGVCeSgwLjQsIDEuMTUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbnMgPSBjYy5zZXF1ZW5jZShtb3ZlMSwgbW92ZTEucmV2ZXJzZSgpKTtcclxuICAgICAgICAgICAgICAgIGVmZmVjdHMucnVuQWN0aW9uKGFjdGlvbnMucmVwZWF0Rm9yZXZlcigpKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChDbGlja1R5cGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0cy5zZXRTY2FsZShzY2FsZSArIDAuMDUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldElzU2VsZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzU2VsZWN0O1xyXG4gICAgfSxcclxuICAgIGdldElzRmlyc3RTZWxlY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNGaXJzdFNlbGVjdDtcclxuICAgIH0sXHJcbiAgICBpc1Zpc2libGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3BhY2l0eSA9PSAyNTU7XHJcbiAgICB9LFxyXG4gICAgc2V0VmlzaWJsZShpc1RydWUpIHtcclxuICAgICAgICB0aGlzLm9wYWNpdHkgPSBpc1RydWUgPyAyNTUgOiAwO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ2FyZFNwcml0ZTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d75bPsk+FALqemqL/20DvJ', 'GameData');
// Script/GameData.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameData = {
  scoreCard0: [],
  //记录当前位置
  scoreCard1: [],
  //记录第一次位置
  scoreCard2: [],
  //记录第二次位置
  scoreCard3: [],
  //记录第三次位置
  score0: 0,
  // 记录当前得分
  score1: 0,
  // 记录第一次得分
  score2: 0,
  // 记录第二次得分
  score3: 0,
  // 记录第三次得分
  heightScore: 0,
  // 最高分
  bestNum: 2,
  //最大数字

  initData: function initData() {
    this.scoreCard0 = new Array();
    this.scoreCard1 = new Array();
    this.scoreCard2 = new Array();
    this.scoreCard3 = new Array();
    for (var i = 0; i < GameConfig.CAED_LINES; i++) {
      this.scoreCard0[i] = Array();
      this.scoreCard1[i] = Array();
      this.scoreCard2[i] = Array();
      this.scoreCard3[i] = Array();
    }
    this.score0 = 0; // 记录当前得分
    this.score1 = 0; // 记录第一次得分
    this.score2 = 0; // 记录第二次得分
    this.score3 = 0; // 记录第三次得分
    this.heightScore = 0; // 最高分
    this.bestNum = 2; //最大数字
  },

  getChallengeLevelNum: function getChallengeLevelNum() {
    return 7;
  },
  getChallengeLevelData: function getChallengeLevelData(type) {
    if (type == 0) {
      return "1000100000001000000010001";
    } else if (type == 1) {
      return "1101110001000001000111011";
    } else if (type == 2) {
      return "1100100001001001000010011";
    } else if (type == 3) {
      return "0111000100000000010001110";
    } else if (type == 4) {
      return "0001100001100011000011000";
    } else if (type == 5) {
      return "0000000100011100010000000";
    } else if (type == 6) {
      return "1000101010000000101010001";
    }
  },
  getGameData: function getGameData(cardNum, cardX, cardY) {
    return GameTools.getItemByLocalStorage("gameData_" + GameConfig.MAIN_MENU_NUM + "_" + cardNum + "_" + cardX + "_" + cardY, 0);
  },
  setGameData: function setGameData(gameData, cardNum, cardX, cardY) {
    cc.sys.localStorage.setItem("gameData_" + GameConfig.MAIN_MENU_NUM + "_" + cardNum + "_" + cardX + "_" + cardY, gameData);
  },
  getGameScoreData: function getGameScoreData(scoreNum) {
    return GameTools.getItemByLocalStorage("score_" + GameConfig.MAIN_MENU_NUM + "_" + scoreNum, 0);
  },
  setGameScoreData: function setGameScoreData(score, scoreNum) {
    cc.sys.localStorage.setItem("score_" + GameConfig.MAIN_MENU_NUM + "_" + scoreNum, score);
  },
  isHaveGameData: function isHaveGameData() {
    return GameTools.getItemByLocalStorage("isHaveGameData_" + GameConfig.MAIN_MENU_NUM, false);
  },
  setHaveGameData: function setHaveGameData(isHaveGameData) {
    cc.sys.localStorage.setItem("isHaveGameData_" + GameConfig.MAIN_MENU_NUM, isHaveGameData);
  },
  getScoreNum: function getScoreNum() {
    return GameTools.getItemByLocalStorage("ScoreNum_" + GameConfig.MAIN_MENU_NUM, 0);
  },
  setScoreNum: function setScoreNum(ScoreNum) {
    cc.sys.localStorage.setItem("ScoreNum_" + GameConfig.MAIN_MENU_NUM, ScoreNum);
  },
  getHeightScore: function getHeightScore() {
    return GameTools.getItemByLocalStorage("BestScoreNum_" + GameConfig.MAIN_MENU_NUM, 0);
  },
  setHeightScore: function setHeightScore(heightScore) {
    cc.sys.localStorage.setItem("BestScoreNum_" + GameConfig.MAIN_MENU_NUM, heightScore);
  },
  getIsRecordHeightNum: function getIsRecordHeightNum(heightNum) {
    return GameTools.getItemByLocalStorage("isRecordHeightNum_" + GameConfig.MAIN_MENU_NUM + "_" + heightNum, false);
  },
  setIsRecordHeightNum: function setIsRecordHeightNum(heightNum, isRecord) {
    cc.sys.localStorage.setItem("isRecordHeightNum_" + GameConfig.MAIN_MENU_NUM + "_" + heightNum, isRecord);
  },
  setGameRewards: function setGameRewards(num) {
    //设置游戏奖励
    if (num >= 1024 && !this.getIsRecordHeightNum(num)) {
      GameTools.playSimpleAudioEngine(3);
      this.setIsRecordHeightNum(num, true);
    }
    var gameIntergralNum = 0;
    switch (num) {
      case 128:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 4 - GameConfig.CAED_LINES;
        }
        break;
      case 256:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 5 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 1;
        }
        break;
      case 512:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 6 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 2;
        }
        break;
      case 1024:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 7 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 3;
        }
        break;
      case 2048:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 8 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 4;
        }
        break;
      case 4096:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 9 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 5;
        }
        break;
      case 8192:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 10 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 6;
        }
        break;
      case 16384:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 11 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 7;
        }
        break;
      case 65536:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 12 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 8;
        }
        break;
      case 131072:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 13 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 9;
        }
        break;
      default:
        break;
    }
    if (gameIntergralNum > 0) {
      this.setGameIntegral(gameIntergralNum);
    }
    return gameIntergralNum;
  },
  getGamePropNumber: function getGamePropNumber(propType) {
    return GameTools.getItemByLocalStorage("gameProp" + propType, 0);
  },
  setGamePropNumber: function setGamePropNumber(propType, number) {
    GameTools.setItemByLocalStorage("gameProp" + propType, GameTools.getItemByLocalStorage("gameProp" + propType, 0) + number);
  },
  getGameIntegral: function getGameIntegral()
  //获取积分
  {
    return GameTools.getGameIntegral();
  },
  setGameIntegral: function setGameIntegral(letrgral) {
    GameTools.setGameIntegral(this.getGameIntegral() + letrgral);
  },
  isGameHelp: function isGameHelp() {
    //判断游戏是否进行了帮助
    return GameTools.getItemByLocalStorage("isGameHelp" + GameConfig.mainMenu, false);
  },
  setGameHelp: function setGameHelp(gameHelp) {
    cc.sys.localStorage.setItem("isGameHelp" + GameConfig.mainMenu, gameHelp);
  },
  getGamePassNum: function getGamePassNum() {
    return GameTools.getItemByLocalStorage("passNum" + GameConfig.mainMenu, 1);
  },
  setGamePassNum: function setGamePassNum(passNum) {
    cc.sys.localStorage.setItem("passNum" + GameConfig.mainMenu, passNum);
  },
  getGamePassScore: function getGamePassScore() {
    var passNum = GameData.getGamePassNum();
    return 1000 + (passNum - 1) * 1500 + (passNum - 1) * (passNum - 1) * 500;
  },
  loadGameData: function loadGameData(isLoad) {
    if (isLoad) {
      for (var i = 0; i < GameConfig.CAED_LINES; i++) {
        for (var j = 0; j < GameConfig.CAED_LINES; j++) {
          this.scoreCard0[i][j] = this.getGameData(0, i, j);
          this.bestNum = this.bestNum > this.scoreCard0[i][j] ? this.bestNum : this.scoreCard0[i][j];
          if (this.checkGameData(this.scoreCard0[i][j])) {
            return true;
          }
          this.scoreCard1[i][j] = this.getGameData(1, i, j);
          this.scoreCard2[i][j] = this.getGameData(2, i, j);
          this.scoreCard3[i][j] = this.getGameData(3, i, j);
        }
      }
      this.scoreNum = this.getScoreNum();
      this.score0 = this.getGameScoreData(0);
      this.score1 = this.getGameScoreData(1);
      this.score2 = this.getGameScoreData(2);
      this.score3 = this.getGameScoreData(3);
      GameConfig.IS_GAME_WIN = this.bestNum >= 2048 ? true : false;
    } else {
      this.setHeightScore(this.heightScore);
      for (var _i = 0; _i < GameConfig.CAED_LINES; _i++) {
        for (var _j = 0; _j < GameConfig.CAED_LINES; _j++) {
          this.setGameData(this.scoreCard0[_i][_j], 0, _i, _j);
          this.setGameData(this.scoreCard1[_i][_j], 1, _i, _j);
          this.setGameData(this.scoreCard2[_i][_j], 2, _i, _j);
          this.setGameData(this.scoreCard3[_i][_j], 3, _i, _j);
        }
      }
      this.setScoreNum(this.scoreNum);
      this.setGameScoreData(this.score0, 0);
      this.setGameScoreData(this.score1, 1);
      this.setGameScoreData(this.score2, 2);
      this.setGameScoreData(this.score3, 3);
      this.setHaveGameData(true);
    }
    return false;
  },
  checkGameData: function checkGameData(gameData) {
    if (gameData == 0) {
      return false;
    }
    var num = 1;
    for (var i = 1; i < 25; i++) {
      if (gameData == num) {
        return false;
      }
      num *= 2;
    }
    if (gameData == -1) {
      return false;
    }
    return true;
  }
};
module.exports = GameData;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lRGF0YS5qcyJdLCJuYW1lcyI6WyJHYW1lQ29uZmlnIiwicmVxdWlyZSIsIkdhbWVUb29scyIsIkdhbWVEYXRhIiwic2NvcmVDYXJkMCIsInNjb3JlQ2FyZDEiLCJzY29yZUNhcmQyIiwic2NvcmVDYXJkMyIsInNjb3JlMCIsInNjb3JlMSIsInNjb3JlMiIsInNjb3JlMyIsImhlaWdodFNjb3JlIiwiYmVzdE51bSIsImluaXREYXRhIiwiQXJyYXkiLCJpIiwiQ0FFRF9MSU5FUyIsImdldENoYWxsZW5nZUxldmVsTnVtIiwiZ2V0Q2hhbGxlbmdlTGV2ZWxEYXRhIiwidHlwZSIsImdldEdhbWVEYXRhIiwiY2FyZE51bSIsImNhcmRYIiwiY2FyZFkiLCJnZXRJdGVtQnlMb2NhbFN0b3JhZ2UiLCJNQUlOX01FTlVfTlVNIiwic2V0R2FtZURhdGEiLCJnYW1lRGF0YSIsImNjIiwic3lzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEdhbWVTY29yZURhdGEiLCJzY29yZU51bSIsInNldEdhbWVTY29yZURhdGEiLCJzY29yZSIsImlzSGF2ZUdhbWVEYXRhIiwic2V0SGF2ZUdhbWVEYXRhIiwiZ2V0U2NvcmVOdW0iLCJzZXRTY29yZU51bSIsIlNjb3JlTnVtIiwiZ2V0SGVpZ2h0U2NvcmUiLCJzZXRIZWlnaHRTY29yZSIsImdldElzUmVjb3JkSGVpZ2h0TnVtIiwiaGVpZ2h0TnVtIiwic2V0SXNSZWNvcmRIZWlnaHROdW0iLCJpc1JlY29yZCIsInNldEdhbWVSZXdhcmRzIiwibnVtIiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwiZ2FtZUludGVyZ3JhbE51bSIsIm1haW5NZW51IiwiTWFpbk1lbnUiLCJNYWluTWVudU51bVBvcCIsIk1haW5NZW51TnVtUG9wU3RhciIsInNldEdhbWVJbnRlZ3JhbCIsImdldEdhbWVQcm9wTnVtYmVyIiwicHJvcFR5cGUiLCJzZXRHYW1lUHJvcE51bWJlciIsIm51bWJlciIsInNldEl0ZW1CeUxvY2FsU3RvcmFnZSIsImdldEdhbWVJbnRlZ3JhbCIsImxldHJncmFsIiwiaXNHYW1lSGVscCIsInNldEdhbWVIZWxwIiwiZ2FtZUhlbHAiLCJnZXRHYW1lUGFzc051bSIsInNldEdhbWVQYXNzTnVtIiwicGFzc051bSIsImdldEdhbWVQYXNzU2NvcmUiLCJsb2FkR2FtZURhdGEiLCJpc0xvYWQiLCJqIiwiY2hlY2tHYW1lRGF0YSIsIklTX0dBTUVfV0lOIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDdEMsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDLElBQUlFLFFBQVEsR0FBRztFQUNYQyxVQUFVLEVBQUUsRUFBRTtFQUFFO0VBQ2hCQyxVQUFVLEVBQUUsRUFBRTtFQUFFO0VBQ2hCQyxVQUFVLEVBQUUsRUFBRTtFQUFFO0VBQ2hCQyxVQUFVLEVBQUUsRUFBRTtFQUFFO0VBQ2hCQyxNQUFNLEVBQUUsQ0FBQztFQUFFO0VBQ1hDLE1BQU0sRUFBRSxDQUFDO0VBQUU7RUFDWEMsTUFBTSxFQUFFLENBQUM7RUFBQztFQUNWQyxNQUFNLEVBQUUsQ0FBQztFQUFDO0VBQ1ZDLFdBQVcsRUFBRSxDQUFDO0VBQUU7RUFDaEJDLE9BQU8sRUFBRSxDQUFDO0VBQUU7O0VBRVpDLFFBQVEsRUFBRSxTQUFBQSxTQUFBLEVBQVk7SUFDbEIsSUFBSSxDQUFDVixVQUFVLEdBQUcsSUFBSVcsS0FBSyxFQUFFO0lBQzdCLElBQUksQ0FBQ1YsVUFBVSxHQUFHLElBQUlVLEtBQUssRUFBRTtJQUM3QixJQUFJLENBQUNULFVBQVUsR0FBRyxJQUFJUyxLQUFLLEVBQUU7SUFDN0IsSUFBSSxDQUFDUixVQUFVLEdBQUcsSUFBSVEsS0FBSyxFQUFFO0lBQzdCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHaEIsVUFBVSxDQUFDaUIsVUFBVSxFQUFF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bWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcclxudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XHJcbnZhciBHYW1lRGF0YSA9IHtcclxuICAgIHNjb3JlQ2FyZDA6IFtdLCAvL+iusOW9leW9k+WJjeS9jee9rlxyXG4gICAgc2NvcmVDYXJkMTogW10sIC8v6K6w5b2V56ys5LiA5qyh5L2N572uXHJcbiAgICBzY29yZUNhcmQyOiBbXSwgLy/orrDlvZXnrKzkuozmrKHkvY3nva5cclxuICAgIHNjb3JlQ2FyZDM6IFtdLCAvL+iusOW9leesrOS4ieasoeS9jee9rlxyXG4gICAgc2NvcmUwOiAwLCAvLyDorrDlvZXlvZPliY3lvpfliIZcclxuICAgIHNjb3JlMTogMCwgLy8g6K6w5b2V56ys5LiA5qyh5b6X5YiGXHJcbiAgICBzY29yZTI6IDAsLy8g6K6w5b2V56ys5LqM5qyh5b6X5YiGXHJcbiAgICBzY29yZTM6IDAsLy8g6K6w5b2V56ys5LiJ5qyh5b6X5YiGXHJcbiAgICBoZWlnaHRTY29yZTogMCwgLy8g5pyA6auY5YiGXHJcbiAgICBiZXN0TnVtOiAyLCAvL+acgOWkp+aVsOWtl1xyXG5cclxuICAgIGluaXREYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZUNhcmQwID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5zY29yZUNhcmQxID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5zY29yZUNhcmQyID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5zY29yZUNhcmQzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlQ2FyZDBbaV0gPSBBcnJheSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlQ2FyZDFbaV0gPSBBcnJheSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlQ2FyZDJbaV0gPSBBcnJheSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlQ2FyZDNbaV0gPSBBcnJheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjb3JlMCA9IDA7IC8vIOiusOW9leW9k+WJjeW+l+WIhlxyXG4gICAgICAgIHRoaXMuc2NvcmUxID0gMDsgLy8g6K6w5b2V56ys5LiA5qyh5b6X5YiGXHJcbiAgICAgICAgdGhpcy5zY29yZTIgPSAwOy8vIOiusOW9leesrOS6jOasoeW+l+WIhlxyXG4gICAgICAgIHRoaXMuc2NvcmUzID0gMDsvLyDorrDlvZXnrKzkuInmrKHlvpfliIZcclxuICAgICAgICB0aGlzLmhlaWdodFNjb3JlID0gMDsgLy8g5pyA6auY5YiGXHJcbiAgICAgICAgdGhpcy5iZXN0TnVtID0gMjsgLy/mnIDlpKfmlbDlrZdcclxuICAgIH0sXHJcbiAgICBnZXRDaGFsbGVuZ2VMZXZlbE51bTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiA3O1xyXG4gICAgfSxcclxuICAgIGdldENoYWxsZW5nZUxldmVsRGF0YTogZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgICAgICBpZiAodHlwZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjEwMDAxMDAwMDAwMDEwMDAwMDAwMTAwMDFcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjExMDExMTAwMDEwMDAwMDEwMDAxMTEwMTFcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjExMDAxMDAwMDEwMDEwMDEwMDAwMTAwMTFcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PSAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjAxMTEwMDAxMDAwMDAwMDAwMTAwMDExMTBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PSA0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjAwMDExMDAwMDExMDAwMTEwMDAwMTEwMDBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PSA1KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjAwMDAwMDAxMDAwMTExMDAwMTAwMDAwMDBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PSA2KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjEwMDAxMDEwMTAwMDAwMDAxMDEwMTAwMDFcIjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0R2FtZURhdGE6IGZ1bmN0aW9uIChjYXJkTnVtLCBjYXJkWCwgY2FyZFkpIHtcclxuICAgICAgICByZXR1cm4gR2FtZVRvb2xzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcImdhbWVEYXRhX1wiICsgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNICsgXCJfXCIgKyBjYXJkTnVtICsgXCJfXCIgKyBjYXJkWCArIFwiX1wiICsgY2FyZFksIDApO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRHYW1lRGF0YTogZnVuY3Rpb24gKGdhbWVEYXRhLCBjYXJkTnVtLCBjYXJkWCwgY2FyZFkpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJnYW1lRGF0YV9cIiArIEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSArIFwiX1wiICsgY2FyZE51bSArIFwiX1wiICsgY2FyZFggKyBcIl9cIiArIGNhcmRZLCBnYW1lRGF0YSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldEdhbWVTY29yZURhdGE6IGZ1bmN0aW9uIChzY29yZU51bSkge1xyXG4gICAgICAgIHJldHVybiBHYW1lVG9vbHMuZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwic2NvcmVfXCIgKyBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0gKyBcIl9cIiArIHNjb3JlTnVtLCAwKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0R2FtZVNjb3JlRGF0YTogZnVuY3Rpb24gKHNjb3JlLCBzY29yZU51bSkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNjb3JlX1wiICsgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNICsgXCJfXCIgKyBzY29yZU51bSwgc2NvcmUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBpc0hhdmVHYW1lRGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBHYW1lVG9vbHMuZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiaXNIYXZlR2FtZURhdGFfXCIgKyBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0sIGZhbHNlKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0SGF2ZUdhbWVEYXRhOiBmdW5jdGlvbiAoaXNIYXZlR2FtZURhdGEpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpc0hhdmVHYW1lRGF0YV9cIiArIEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSwgaXNIYXZlR2FtZURhdGEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRTY29yZU51bTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBHYW1lVG9vbHMuZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiU2NvcmVOdW1fXCIgKyBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0sIDApO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRTY29yZU51bTogZnVuY3Rpb24gKFNjb3JlTnVtKSB7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiU2NvcmVOdW1fXCIgKyBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0sIFNjb3JlTnVtKTtcclxuICAgIH0sXHJcbiAgICBnZXRIZWlnaHRTY29yZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBHYW1lVG9vbHMuZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiQmVzdFNjb3JlTnVtX1wiICsgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNLCAwKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0SGVpZ2h0U2NvcmU6IGZ1bmN0aW9uIChoZWlnaHRTY29yZSkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkJlc3RTY29yZU51bV9cIiArIEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSwgaGVpZ2h0U2NvcmUpO1xyXG4gICAgfSxcclxuICAgIGdldElzUmVjb3JkSGVpZ2h0TnVtOiBmdW5jdGlvbiAoaGVpZ2h0TnVtKSB7XHJcbiAgICAgICAgcmV0dXJuIEdhbWVUb29scy5nZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJpc1JlY29yZEhlaWdodE51bV9cIiArIEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSArIFwiX1wiICsgaGVpZ2h0TnVtLCBmYWxzZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldElzUmVjb3JkSGVpZ2h0TnVtOiBmdW5jdGlvbiAoaGVpZ2h0TnVtLCBpc1JlY29yZCkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlzUmVjb3JkSGVpZ2h0TnVtX1wiICsgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNICsgXCJfXCIgKyBoZWlnaHROdW0sIGlzUmVjb3JkKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0R2FtZVJld2FyZHM6IGZ1bmN0aW9uIChudW0pIHsgLy/orr7nva7muLjmiI/lpZblirFcclxuICAgICAgICBpZiAoKG51bSA+PSAxMDI0KSAmJiAhdGhpcy5nZXRJc1JlY29yZEhlaWdodE51bShudW0pKSB7XHJcbiAgICAgICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXNSZWNvcmRIZWlnaHROdW0obnVtLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGdhbWVJbnRlcmdyYWxOdW0gPSAwO1xyXG4gICAgICAgIHN3aXRjaCAobnVtKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTI4OlxyXG4gICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcubWFpbk1lbnUgIT0gR2FtZUNvbmZpZy5NYWluTWVudS5NYWluTWVudU51bVBvcCAmJiBHYW1lQ29uZmlnLm1haW5NZW51ICE9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVOdW1Qb3BTdGFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDQgLSBHYW1lQ29uZmlnLkNBRURfTElORVM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyNTY6XHJcbiAgICAgICAgICAgICAgICBpZiAoR2FtZUNvbmZpZy5tYWluTWVudSAhPSBHYW1lQ29uZmlnLk1haW5NZW51Lk1haW5NZW51TnVtUG9wICYmIEdhbWVDb25maWcubWFpbk1lbnUgIT0gR2FtZUNvbmZpZy5NYWluTWVudS5NYWluTWVudU51bVBvcFN0YXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lSW50ZXJncmFsTnVtID0gNSAtIEdhbWVDb25maWcuQ0FFRF9MSU5FUztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVJbnRlcmdyYWxOdW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTEyOlxyXG4gICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcubWFpbk1lbnUgIT0gR2FtZUNvbmZpZy5NYWluTWVudS5NYWluTWVudU51bVBvcCAmJiBHYW1lQ29uZmlnLm1haW5NZW51ICE9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVOdW1Qb3BTdGFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDYgLSBHYW1lQ29uZmlnLkNBRURfTElORVM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lSW50ZXJncmFsTnVtID0gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMjQ6XHJcbiAgICAgICAgICAgICAgICBpZiAoR2FtZUNvbmZpZy5tYWluTWVudSAhPSBHYW1lQ29uZmlnLk1haW5NZW51Lk1haW5NZW51TnVtUG9wICYmIEdhbWVDb25maWcubWFpbk1lbnUgIT0gR2FtZUNvbmZpZy5NYWluTWVudS5NYWluTWVudU51bVBvcFN0YXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lSW50ZXJncmFsTnVtID0gNyAtIEdhbWVDb25maWcuQ0FFRF9MSU5FUztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVJbnRlcmdyYWxOdW0gPSAzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjA0ODpcclxuICAgICAgICAgICAgICAgIGlmIChHYW1lQ29uZmlnLm1haW5NZW51ICE9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVOdW1Qb3AgJiYgR2FtZUNvbmZpZy5tYWluTWVudSAhPSBHYW1lQ29uZmlnLk1haW5NZW51Lk1haW5NZW51TnVtUG9wU3Rhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVJbnRlcmdyYWxOdW0gPSA4IC0gR2FtZUNvbmZpZy5DQUVEX0xJTkVTO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0MDk2OlxyXG4gICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcubWFpbk1lbnUgIT0gR2FtZUNvbmZpZy5NYWluTWVudS5NYWluTWVudU51bVBvcCAmJiBHYW1lQ29uZmlnLm1haW5NZW51ICE9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVOdW1Qb3BTdGFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDkgLSBHYW1lQ29uZmlnLkNBRURfTElORVM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lSW50ZXJncmFsTnVtID0gNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDgxOTI6XHJcbiAgICAgICAgICAgICAgICBpZiAoR2FtZUNvbmZpZy5tYWluTWVudSAhPSBHYW1lQ29uZmlnLk1haW5NZW51Lk1haW5NZW51TnVtUG9wICYmIEdhbWVDb25maWcubWFpbk1lbnUgIT0gR2FtZUNvbmZpZy5NYWluTWVudS5NYWluTWVudU51bVBvcFN0YXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lSW50ZXJncmFsTnVtID0gMTAgLSBHYW1lQ29uZmlnLkNBRURfTElORVM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lSW50ZXJncmFsTnVtID0gNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE2Mzg0OlxyXG4gICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcubWFpbk1lbnUgIT0gR2FtZUNvbmZpZy5NYWluTWVudS5NYWluTWVudU51bVBvcCAmJiBHYW1lQ29uZmlnLm1haW5NZW51ICE9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVOdW1Qb3BTdGFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDExIC0gR2FtZUNvbmZpZy5DQUVEX0xJTkVTO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA2NTUzNjpcclxuICAgICAgICAgICAgICAgIGlmIChHYW1lQ29uZmlnLm1haW5NZW51ICE9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVOdW1Qb3AgJiYgR2FtZUNvbmZpZy5tYWluTWVudSAhPSBHYW1lQ29uZmlnLk1haW5NZW51Lk1haW5NZW51TnVtUG9wU3Rhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVJbnRlcmdyYWxOdW0gPSAxMiAtIEdhbWVDb25maWcuQ0FFRF9MSU5FUztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVJbnRlcmdyYWxOdW0gPSA4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTMxMDcyOlxyXG4gICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcubWFpbk1lbnUgIT0gR2FtZUNvbmZpZy5NYWluTWVudS5NYWluTWVudU51bVBvcCAmJiBHYW1lQ29uZmlnLm1haW5NZW51ICE9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVOdW1Qb3BTdGFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDEzIC0gR2FtZUNvbmZpZy5DQUVEX0xJTkVTO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2FtZUludGVyZ3JhbE51bSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRHYW1lSW50ZWdyYWwoZ2FtZUludGVyZ3JhbE51bSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBnYW1lSW50ZXJncmFsTnVtO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRHYW1lUHJvcE51bWJlcihwcm9wVHlwZSkge1xyXG4gICAgICAgIHJldHVybiBHYW1lVG9vbHMuZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiZ2FtZVByb3BcIiArIHByb3BUeXBlLCAwKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0R2FtZVByb3BOdW1iZXIocHJvcFR5cGUsIG51bWJlcikge1xyXG4gICAgICAgIEdhbWVUb29scy5zZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJnYW1lUHJvcFwiICsgcHJvcFR5cGUsIEdhbWVUb29scy5nZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJnYW1lUHJvcFwiICsgcHJvcFR5cGUsIDApICsgbnVtYmVyKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0R2FtZUludGVncmFsOiBmdW5jdGlvbiAoKSAvL+iOt+WPluenr+WIhlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBHYW1lVG9vbHMuZ2V0R2FtZUludGVncmFsKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0R2FtZUludGVncmFsOiBmdW5jdGlvbiAobGV0cmdyYWwpIHtcclxuICAgICAgICBHYW1lVG9vbHMuc2V0R2FtZUludGVncmFsKHRoaXMuZ2V0R2FtZUludGVncmFsKCkgKyBsZXRyZ3JhbCk7XHJcbiAgICB9LFxyXG4gICAgaXNHYW1lSGVscDogZnVuY3Rpb24gKCkgeyAvL+WIpOaWrea4uOaIj+aYr+WQpui/m+ihjOS6huW4ruWKqVxyXG4gICAgICAgIHJldHVybiBHYW1lVG9vbHMuZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiaXNHYW1lSGVscFwiICsgR2FtZUNvbmZpZy5tYWluTWVudSwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIHNldEdhbWVIZWxwOiBmdW5jdGlvbiAoZ2FtZUhlbHApIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpc0dhbWVIZWxwXCIgKyBHYW1lQ29uZmlnLm1haW5NZW51LCBnYW1lSGVscCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0R2FtZVBhc3NOdW06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gR2FtZVRvb2xzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcInBhc3NOdW1cIiArIEdhbWVDb25maWcubWFpbk1lbnUsIDEpO1xyXG4gICAgfSxcclxuICAgIHNldEdhbWVQYXNzTnVtOiBmdW5jdGlvbiAocGFzc051bSkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBhc3NOdW1cIiArIEdhbWVDb25maWcubWFpbk1lbnUsIHBhc3NOdW0pO1xyXG4gICAgfSxcclxuICAgIGdldEdhbWVQYXNzU2NvcmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgcGFzc051bSA9IEdhbWVEYXRhLmdldEdhbWVQYXNzTnVtKCk7XHJcbiAgICAgICAgcmV0dXJuICgxMDAwICsgKHBhc3NOdW0gLSAxKSAqIDE1MDAgKyAocGFzc051bSAtIDEpICogKHBhc3NOdW0gLSAxKSAqIDUwMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGxvYWRHYW1lRGF0YTogZnVuY3Rpb24gKGlzTG9hZCkge1xyXG4gICAgICAgIGlmIChpc0xvYWQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVDYXJkMFtpXVtqXSA9IHRoaXMuZ2V0R2FtZURhdGEoMCwgaSwgaik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXN0TnVtID0gdGhpcy5iZXN0TnVtID4gdGhpcy5zY29yZUNhcmQwW2ldW2pdID8gdGhpcy5iZXN0TnVtIDogdGhpcy5zY29yZUNhcmQwW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrR2FtZURhdGEodGhpcy5zY29yZUNhcmQwW2ldW2pdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZUNhcmQxW2ldW2pdID0gdGhpcy5nZXRHYW1lRGF0YSgxLCBpLCBqKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlQ2FyZDJbaV1bal0gPSB0aGlzLmdldEdhbWVEYXRhKDIsIGksIGopO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVDYXJkM1tpXVtqXSA9IHRoaXMuZ2V0R2FtZURhdGEoMywgaSwgaik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY29yZU51bSA9IHRoaXMuZ2V0U2NvcmVOdW0oKTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZTAgPSB0aGlzLmdldEdhbWVTY29yZURhdGEoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUxID0gdGhpcy5nZXRHYW1lU2NvcmVEYXRhKDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlMiA9IHRoaXMuZ2V0R2FtZVNjb3JlRGF0YSgyKTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZTMgPSB0aGlzLmdldEdhbWVTY29yZURhdGEoMyk7XHJcbiAgICAgICAgICAgIEdhbWVDb25maWcuSVNfR0FNRV9XSU4gPSAodGhpcy5iZXN0TnVtID49IDIwNDggPyB0cnVlIDogZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SGVpZ2h0U2NvcmUodGhpcy5oZWlnaHRTY29yZSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdhbWVEYXRhKHRoaXMuc2NvcmVDYXJkMFtpXVtqXSwgMCwgaSwgaik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLnNjb3JlQ2FyZDFbaV1bal0sIDEsIGksIGopO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2FtZURhdGEodGhpcy5zY29yZUNhcmQyW2ldW2pdLCAyLCBpLCBqKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdhbWVEYXRhKHRoaXMuc2NvcmVDYXJkM1tpXVtqXSwgMywgaSwgaik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRTY29yZU51bSh0aGlzLnNjb3JlTnVtKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRHYW1lU2NvcmVEYXRhKHRoaXMuc2NvcmUwLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRHYW1lU2NvcmVEYXRhKHRoaXMuc2NvcmUxLCAxKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRHYW1lU2NvcmVEYXRhKHRoaXMuc2NvcmUyLCAyKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRHYW1lU2NvcmVEYXRhKHRoaXMuc2NvcmUzLCAzKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRIYXZlR2FtZURhdGEodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBjaGVja0dhbWVEYXRhOiBmdW5jdGlvbiAoZ2FtZURhdGEpIHtcclxuICAgICAgICBpZiAoZ2FtZURhdGEgPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBudW0gPSAxO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMjU7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZURhdGEgPT0gbnVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbnVtICo9IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lRGF0YSA9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZURhdGE7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f937eblcKFPZItT3ZuvdIyg', 'GameConfig');
// Script/GameConfig.js

"use strict";

var LoadingSceneType = {
  LoadingSceneFirst: 0,
  //首次进入
  LoadingSceneEnterGame: 1,
  //进入游戏
  LoadingSceneBackGame: 2 //返回游戏
};

var MainMenu = {
  MainMenuNumClassic: 0,
  // 经典模式
  MainMenuNumPop: 5,
  //消除叠加模式
  MainMenuNumPopStar: 6,
  //消灭星星模式
  MainMenuSpace: 7 //清空
};

var PropsMenu = {
  PropsMenuBackout: 0,
  //撤销功能
  PropsMenuDestroyCard: 1,
  //销毁一个卡片
  PropsMenuExchangeCard: 2,
  //调换卡片
  PropsMenuShrinkNum: 3,
  //使卡片数字除2
  PropsMenuRemoveAcross: 4,
  //使卡片横排消除
  PropsMenuRemoveVertical: 5,
  //使卡片竖排消除
  PropsMenuSpace: 6 //清空
};

var GameConfig = {
  GameName: "一起消灭星星",
  GameClubButton: null,
  //游戏圈按钮
  GameScene: null,
  GameLogic: null,
  LoadingSceneType: LoadingSceneType,
  MainMenu: MainMenu,
  PropsMenu: PropsMenu,
  DEVICE_WIDTH: 720,
  // 屏幕宽度
  DEVICE_HEIGHT: 1280,
  CARD_WIDTH: 0,
  // 卡片宽度
  CAED_LINES: 4,
  // 卡片个数

  MAIN_MENU_NUM: -1000,
  // 模式类型标识

  loadingSceneType: LoadingSceneType.LoadingSceneFirst,
  // 加载界面
  mainMenu: MainMenu.MainMenuSpace,
  // 主选择菜单

  propsMenu: PropsMenu.PropsMenuSpace,
  // 道具功能

  IS_GAME_MUSIC: true,
  // 游戏音效

  IS_GAME_SHARE: false,
  // 游戏分享
  IS_GAME_OVER: false,
  // 游戏是否结束
  IS_GAME_WIN: false //游戏是否胜利
};

module.exports = GameConfig;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lQ29uZmlnLmpzIl0sIm5hbWVzIjpbIkxvYWRpbmdTY2VuZVR5cGUiLCJMb2FkaW5nU2NlbmVGaXJzdCIsIkxvYWRpbmdTY2VuZUVudGVyR2FtZSIsIkxvYWRpbmdTY2VuZUJhY2tHYW1lIiwiTWFpbk1lbnUiLCJNYWluTWVudU51bUNsYXNzaWMiLCJNYWluTWVudU51bVBvcCIsIk1haW5NZW51TnVtUG9wU3RhciIsIk1haW5NZW51U3BhY2UiLCJQcm9wc01lbnUiLCJQcm9wc01lbnVCYWNrb3V0IiwiUHJvcHNNZW51RGVzdHJveUNhcmQiLCJQcm9wc01lbnVFeGNoYW5nZUNhcmQiLCJQcm9wc01lbnVTaHJpbmtOdW0iLCJQcm9wc01lbnVSZW1vdmVBY3Jvc3MiLCJQcm9wc01lbnVSZW1vdmVWZXJ0aWNhbCIsIlByb3BzTWVudVNwYWNlIiwiR2FtZUNvbmZpZyIsIkdhbWVOYW1lIiwiR2FtZUNsdWJCdXR0b24iLCJHYW1lU2NlbmUiLCJHYW1lTG9naWMiLCJERVZJQ0VfV0lEVEgiLCJERVZJQ0VfSEVJR0hUIiwiQ0FSRF9XSURUSCIsIkNBRURfTElORVMiLCJNQUlOX01FTlVfTlVNIiwibG9hZGluZ1NjZW5lVHlwZSIsIm1haW5NZW51IiwicHJvcHNNZW51IiwiSVNfR0FNRV9NVVNJQyIsIklTX0dBTUVfU0hBUkUiLCJJU19HQU1FX09WRVIiLCJJU19HQU1FX1dJTiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsZ0JBQWdCLEdBQUc7RUFDbkJDLGlCQUFpQixFQUFFLENBQUM7RUFBQztFQUNyQkMscUJBQXFCLEVBQUUsQ0FBQztFQUFDO0VBQ3pCQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7QUFDNUIsQ0FBQzs7QUFDRCxJQUFJQyxRQUFRLEdBQUc7RUFDWEMsa0JBQWtCLEVBQUUsQ0FBQztFQUFDO0VBQ3RCQyxjQUFjLEVBQUUsQ0FBQztFQUFDO0VBQ2xCQyxrQkFBa0IsRUFBRSxDQUFDO0VBQUM7RUFDdEJDLGFBQWEsRUFBRSxDQUFDO0FBQ3BCLENBQUM7O0FBRUQsSUFBSUMsU0FBUyxHQUFHO0VBQ1pDLGdCQUFnQixFQUFFLENBQUM7RUFBQztFQUNwQkMsb0JBQW9CLEVBQUUsQ0FBQztFQUFDO0VBQ3hCQyxxQkFBcUIsRUFBRSxDQUFDO0VBQUM7RUFDekJDLGtCQUFrQixFQUFFLENBQUM7RUFBQztFQUN0QkMscUJBQXFCLEVBQUUsQ0FBQztFQUFDO0VBQ3pCQyx1QkFBdUIsRUFBRSxDQUFDO0VBQUM7RUFDM0JDLGNBQWMsRUFBRSxDQUFDLENBQUM7QUFDdEIsQ0FBQzs7QUFFRCxJQUFJQyxVQUFVLEdBQUc7RUFDYkMsUUFBUSxFQUFFLFFBQVE7RUFDbEJDLGNBQWMsRUFBRSxJQUFJO0VBQUM7RUFDckJDLFNBQVMsRUFBRSxJQUFJO0VBQ2ZDLFNBQVMsRUFBRSxJQUFJO0VBRWZyQixnQkFBZ0IsRUFBRUEsZ0JBQWdCO0VBQ2xDSSxRQUFRLEVBQUVBLFFBQVE7RUFDbEJLLFNBQVMsRUFBRUEsU0FBUztFQUVwQmEsWUFBWSxFQUFFLEdBQUc7RUFBRTtFQUNuQkMsYUFBYSxFQUFFLElBQUk7RUFFbkJDLFVBQVUsRUFBRSxDQUFDO0VBQUM7RUFDZEMsVUFBVSxFQUFFLENBQUM7RUFBQzs7RUFFZEMsYUFBYSxFQUFFLENBQUMsSUFBSTtFQUFDOztFQUVyQkMsZ0JBQWdCLEVBQUUzQixnQkFBZ0IsQ0FBQ0MsaUJBQWlCO0VBQUM7RUFDckQyQixRQUFRLEVBQUV4QixRQUFRLENBQUNJLGFBQWE7RUFBQzs7RUFFakNxQixTQUFTLEVBQUVwQixTQUFTLENBQUNPLGNBQWM7RUFBQzs7RUFFcENjLGFBQWEsRUFBRSxJQUFJO0VBQUM7O0VBRXBCQyxhQUFhLEVBQUUsS0FBSztFQUFDO0VBQ3JCQyxZQUFZLEVBQUUsS0FBSztFQUFDO0VBQ3BCQyxXQUFXLEVBQUUsS0FBSyxDQUFFO0FBQ3hCLENBQUM7O0FBQ0RDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHbEIsVUFBVSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIExvYWRpbmdTY2VuZVR5cGUgPSB7XHJcbiAgICBMb2FkaW5nU2NlbmVGaXJzdDogMCwvL+mmluasoei/m+WFpVxyXG4gICAgTG9hZGluZ1NjZW5lRW50ZXJHYW1lOiAxLC8v6L+b5YWl5ri45oiPXHJcbiAgICBMb2FkaW5nU2NlbmVCYWNrR2FtZTogMiwvL+i/lOWbnua4uOaIj1xyXG59O1xyXG52YXIgTWFpbk1lbnUgPSB7XHJcbiAgICBNYWluTWVudU51bUNsYXNzaWM6IDAsLy8g57uP5YW45qih5byPXHJcbiAgICBNYWluTWVudU51bVBvcDogNSwvL+a2iOmZpOWPoOWKoOaooeW8j1xyXG4gICAgTWFpbk1lbnVOdW1Qb3BTdGFyOiA2LC8v5raI54Gt5pif5pif5qih5byPXHJcbiAgICBNYWluTWVudVNwYWNlOiA3Ly/muIXnqbpcclxufTtcclxuXHJcbnZhciBQcm9wc01lbnUgPSB7XHJcbiAgICBQcm9wc01lbnVCYWNrb3V0OiAwLC8v5pKk6ZSA5Yqf6IO9XHJcbiAgICBQcm9wc01lbnVEZXN0cm95Q2FyZDogMSwvL+mUgOavgeS4gOS4quWNoeeJh1xyXG4gICAgUHJvcHNNZW51RXhjaGFuZ2VDYXJkOiAyLC8v6LCD5o2i5Y2h54mHXHJcbiAgICBQcm9wc01lbnVTaHJpbmtOdW06IDMsLy/kvb/ljaHniYfmlbDlrZfpmaQyXHJcbiAgICBQcm9wc01lbnVSZW1vdmVBY3Jvc3M6IDQsLy/kvb/ljaHniYfmqKrmjpLmtojpmaRcclxuICAgIFByb3BzTWVudVJlbW92ZVZlcnRpY2FsOiA1LC8v5L2/5Y2h54mH56uW5o6S5raI6ZmkXHJcbiAgICBQcm9wc01lbnVTcGFjZTogNiwvL+a4heepulxyXG59O1xyXG5cclxudmFyIEdhbWVDb25maWcgPSB7XHJcbiAgICBHYW1lTmFtZTogXCLkuIDotbfmtojnga3mmJ/mmJ9cIixcclxuICAgIEdhbWVDbHViQnV0dG9uOiBudWxsLC8v5ri45oiP5ZyI5oyJ6ZKuXHJcbiAgICBHYW1lU2NlbmU6IG51bGwsXHJcbiAgICBHYW1lTG9naWM6IG51bGwsXHJcblxyXG4gICAgTG9hZGluZ1NjZW5lVHlwZTogTG9hZGluZ1NjZW5lVHlwZSxcclxuICAgIE1haW5NZW51OiBNYWluTWVudSxcclxuICAgIFByb3BzTWVudTogUHJvcHNNZW51LFxyXG5cclxuICAgIERFVklDRV9XSURUSDogNzIwLCAvLyDlsY/luZXlrr3luqZcclxuICAgIERFVklDRV9IRUlHSFQ6IDEyODAsXHJcblxyXG4gICAgQ0FSRF9XSURUSDogMCwvLyDljaHniYflrr3luqZcclxuICAgIENBRURfTElORVM6IDQsLy8g5Y2h54mH5Liq5pWwXHJcblxyXG4gICAgTUFJTl9NRU5VX05VTTogLTEwMDAsLy8g5qih5byP57G75Z6L5qCH6K+GXHJcblxyXG4gICAgbG9hZGluZ1NjZW5lVHlwZTogTG9hZGluZ1NjZW5lVHlwZS5Mb2FkaW5nU2NlbmVGaXJzdCwvLyDliqDovb3nlYzpnaJcclxuICAgIG1haW5NZW51OiBNYWluTWVudS5NYWluTWVudVNwYWNlLC8vIOS4u+mAieaLqeiPnOWNlVxyXG5cclxuICAgIHByb3BzTWVudTogUHJvcHNNZW51LlByb3BzTWVudVNwYWNlLC8vIOmBk+WFt+WKn+iDvVxyXG5cclxuICAgIElTX0dBTUVfTVVTSUM6IHRydWUsLy8g5ri45oiP6Z+z5pWIXHJcblxyXG4gICAgSVNfR0FNRV9TSEFSRTogZmFsc2UsLy8g5ri45oiP5YiG5LqrXHJcbiAgICBJU19HQU1FX09WRVI6IGZhbHNlLC8vIOa4uOaIj+aYr+WQpue7k+adn1xyXG4gICAgSVNfR0FNRV9XSU46IGZhbHNlLCAvL+a4uOaIj+aYr+WQpuiDnOWIqVxyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVDb25maWc7XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GamePopStar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a3ac4EJGJABo4T04pKYHlg', 'GamePopStar');
// Script/GamePopStar.js

"use strict";

var CardSprite = require("CardSprite");
var GameConfig = require("GameConfig");
var GameData = require("GameData");
var AnimLayerTool = require("AnimLayerTool");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
var TAG_card = 1006;
var GamePopStar = cc.Class({
  "extends": cc.Node,
  properties: {
    firstX: null,
    //点击元素
    firstY: null,
    //点击元素
    endX: null,
    endY: null,
    selectNumber: 0,
    //选中数字
    selectAmount: 0,
    //选中卡片数
    score: 0,
    //分数,
    cardArr: null,
    // 储存卡片类
    firstClickNum: new Array() //记录交换位置
  },

  ctor: function ctor() {
    this.x = -GameConfig.DEVICE_WIDTH / 2;
    this.y = -GameConfig.DEVICE_HEIGHT / 2;
    this.setContentSize(GameConfig.DEVICE_WIDTH * 4, GameConfig.DEVICE_HEIGHT * 4);
    this.init();
  },
  init: function init() {
    this.cardArr = new Array();
    for (var i = 0; i < GameConfig.CAED_LINES; i++) {
      this.cardArr[i] = Array();
    }
    this.firstClickNum[0] = -1;
    this.firstClickNum[1] = -1;
    this.initUI();
  },
  initUI: function initUI() {
    //设置触摸事件监听
    this.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
    this.createCardSprite(); //创建4X4卡片
    if (GameData.isHaveGameData()) {
      this.score = GameData.score0;
      for (var i = 0; i < GameConfig.CAED_LINES; i++) {
        for (var j = 0; j < GameConfig.CAED_LINES; j++) {
          this.cardArr[i][j].number = GameData.scoreCard0[i][j];
          this.cardArr[i][j].CardShow();
          if (GameData.scoreCard2[i][j] == 1) {
            this.cardArr[i][j].setVisible(false);
          }
        }
      }
    } else {
      for (var _i = 0; _i < GameConfig.CAED_LINES; _i++) {
        for (var _j = 0; _j < GameConfig.CAED_LINES; _j++) {
          AnimLayerTool.moveButtonAnim(this.cardArr[_i][_j], true, AnimLayerTool.MoveButtonAnimType.up);
        }
      }
      GameData.score0 = 0;
      GameData.score1 = 0;
      GameData.scoreNum = 0;
      this.score = 0;
      for (var _i2 = 0; _i2 < GameConfig.CAED_LINES; _i2++) {
        for (var _j2 = 0; _j2 < GameConfig.CAED_LINES; _j2++) {
          GameData.scoreCard3[_i2][_j2] = 0;
          GameData.scoreCard2[_i2][_j2] = 0;
          GameData.scoreCard1[_i2][_j2] = this.cardArr[_i2][_j2].number;
          GameData.scoreCard0[_i2][_j2] = this.cardArr[_i2][_j2].number;
        }
      }
    }
  },
  onTouchBegan: function onTouchBegan(event) {
    //获取触摸的X轴和Y轴
    var touchPoint = event.touch.getLocation(); //获取OpenGL坐标（即cocos2d-x坐标，原点在左下角）
    var self = event.getCurrentTarget();
    if (GameConfig.propsMenu != GameConfig.PropsMenu.PropsMenuSpace) {
      self.GamePopStarProperty(touchPoint);
      return false;
    } else {
      //碰撞检测
      if (self.selectAmount == 0) {
        for (var i = 0; i < GameConfig.CAED_LINES; i++) {
          for (var j = 0; j < GameConfig.CAED_LINES; j++) {
            if (self.cardArr[i][j].isVisible() && self.cardArr[i][j].getBoundingBoxToWorld().contains(touchPoint)) {
              GameTools.playSimpleAudioEngine(1);
              self.cardArr[i][j].CardClickShow(1);
              self.inspectionSelect(i, j);
            }
          }
        }
        self.cardVanish();
      }
      return true;
    }
  },
  //道具模式
  GamePopStarProperty: function GamePopStarProperty(touchPoint) {
    //碰撞检测
    for (var i = 0; i < GameConfig.CAED_LINES; i++) {
      for (var j = 0; j < GameConfig.CAED_LINES; j++) {
        if (this.cardArr[i][j].isVisible() && this.cardArr[i][j].getBoundingBoxToWorld().contains(touchPoint)) {
          GameTools.playSimpleAudioEngine(0);
          if (GameConfig.propsMenu == GameConfig.PropsMenu.PropsMenuDestroyCard) {
            this.cardArr[i][j].setVisible(false);
            this.cardVanishAni(0);
            GameData.setGamePropNumber(0, -1);
            GameConfig.GameScene.setGamePropNumber(0);
            GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
            return;
          } else if (GameConfig.propsMenu == GameConfig.PropsMenu.PropsMenuExchangeCard) {
            if (this.firstClickNum[0] == -1) {
              this.firstClickNum[0] = i;
              this.firstClickNum[1] = j;
              if (i > 0 && this.cardArr[i - 1][j].isVisible()) {
                this.cardArr[i - 1][j].CardClickShow(1);
              }
              if (i < GameConfig.CAED_LINES - 1 && this.cardArr[i + 1][j].isVisible()) {
                this.cardArr[i + 1][j].CardClickShow(1);
              }
              if (j > 0 && this.cardArr[i][j - 1].isVisible()) {
                this.cardArr[i][j - 1].CardClickShow(1);
              }
              if (j < GameConfig.CAED_LINES - 1 && this.cardArr[i][j + 1].isVisible()) {
                this.cardArr[i][j + 1].CardClickShow(1);
              }
              //AnimLayerTool.createExchangeCardAnim(this.cardArr[i][j], i, j);
            } else {
              if (Math.abs(i - this.firstClickNum[0]) == 1 && j - this.firstClickNum[1] == 0 || i - this.firstClickNum[0] == 0 && Math.abs(j - this.firstClickNum[1]) == 1) {
                this.cancelSelect();
                AnimLayerTool.createMoveAnim(this.cardArr[i][j], this.cardArr[this.firstClickNum[0]][this.firstClickNum[1]], true);
                AnimLayerTool.createMoveAnim(this.cardArr[this.firstClickNum[0]][this.firstClickNum[1]], this.cardArr[i][j], true);
                var num = this.cardArr[i][j].getNumber();
                this.cardArr[i][j].setNumber(this.cardArr[this.firstClickNum[0]][this.firstClickNum[1]].getNumber());
                this.cardArr[this.firstClickNum[0]][this.firstClickNum[1]].setNumber(num);
                this.firstClickNum[0] = -1;
                this.firstClickNum[1] = -1;
                GameData.setGamePropNumber(2, -1);
                GameConfig.GameScene.setGamePropNumber(2);
                this.cardVanishAni(0); //检测
              } else {
                this.firstClickNum[0] = -1;
                this.firstClickNum[1] = -1;
                this.cancelSelect();
              }
              GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
            }
            return;
          } else if (GameConfig.propsMenu == GameConfig.PropsMenu.PropsMenuRemoveAcross) {
            for (var z = 0; z < GameConfig.CAED_LINES; z++) {
              AnimLayerTool.callFuncPopStarAnim(null, this.cardArr[z][j]);
              this.cardArr[z][j].setVisible(false);
              AnimLayerTool.callFuncPopStarAnim(null, this.cardArr[i][z]);
              this.cardArr[i][z].setVisible(false);
            }
            GameData.setGamePropNumber(1, -1);
            GameConfig.GameScene.setGamePropNumber(1);
            this.cardVanishAni(0);
            GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
            return;
          }
        }
      }
    }
    if (this.firstClickNum[0] != -1) {
      this.cancelSelect();
      this.firstClickNum[0] = -1;
      this.firstClickNum[1] = -1;
    }
    GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
  },
  cardVanishAni: function cardVanishAni(dt) {
    //卡片消失监听动画
    this.doDown();
    this.doLeft();
    this.doCheck(0);
    this.selectAmount = 0;
  },
  cancelSelect: function cancelSelect() {
    //取消选择
    for (var i = 0; i < GameConfig.CAED_LINES; i++) {
      for (var j = 0; j < GameConfig.CAED_LINES; j++) {
        if (this.cardArr[i][j].getIsSelect()) {
          this.cardArr[i][j].CardClickShow(0);
        }
      }
    }
    this.selectAmount = 0;
  },
  cardVanish: function cardVanish() {
    //卡片消失
    if (this.selectAmount >= 2) {
      var firstCardI, firstCardJ;
      var deTime = 0;
      for (var i = 0; i < GameConfig.CAED_LINES; i++) {
        for (var j = 0; j < GameConfig.CAED_LINES; j++) {
          if (this.cardArr[i][j].getIsFirstSelect()) {
            firstCardI = i;
            firstCardJ = j;
          }
          if (this.cardArr[i][j].getIsSelect()) {
            this.cardArr[i][j].CardClickShow(0);
            //this.cardArr[i][j].setVisible(false);
            AnimLayerTool.createPopStarAnim(this.cardArr[i][j], deTime++ * 0.1);
            //AnimLayerTool.callFuncPopStarAnim(this.cardArr[i][j]);
          }
        }
      }

      this.score = this.score + this.selectAmount * this.selectAmount * 5;
      AnimLayerTool.createScoreMoveAnim(this.cardArr[firstCardI][firstCardJ], this.selectAmount * this.selectAmount * 5, false); //加分动画
      AnimLayerTool.createShowMessageBoxAward(this.getParent(), this.selectAmount); //展示奖励对话框

      var scoreNum = GameData.setGameRewards(this.selectNumber); //获取奖励
      AnimLayerTool.createScoreMoveAnim(this.cardArr[firstCardI][firstCardJ], scoreNum, true);
      GameUiTools.scheduleOnce(this, this.cardVanishAni, deTime * 0.1);
      //this.cardVanishAni(0);
    } else {
      this.cancelSelect();
    }
    return false;
  },
  //选择点中卡片
  inspectionSelect: function inspectionSelect(i, j) {
    this.cardArr[i][j].CardClickShow(2);
    this.selectAmount++;
    this.selectNumber = this.cardArr[i][j].getNumber();
    if (i >= 1 && this.cardArr[i - 1][j].isVisible() && !this.cardArr[i - 1][j].getIsSelect()) {
      if (this.selectNumber == this.cardArr[i - 1][j].getNumber()) {
        this.inspectionSelect(i - 1, j);
      }
    }
    if (j < GameConfig.CAED_LINES - 1 && this.cardArr[i][j + 1].isVisible() && !this.cardArr[i][j + 1].getIsSelect()) {
      if (this.selectNumber == this.cardArr[i][j + 1].getNumber()) {
        this.inspectionSelect(i, j + 1);
      }
    }
    if (i < GameConfig.CAED_LINES - 1 && this.cardArr[i + 1][j].isVisible() && !this.cardArr[i + 1][j].getIsSelect()) {
      if (this.selectNumber == this.cardArr[i + 1][j].getNumber()) {
        this.inspectionSelect(i + 1, j);
      }
    }
    if (j >= 1 && this.cardArr[i][j - 1].isVisible() && !this.cardArr[i][j - 1].getIsSelect()) {
      if (this.selectNumber == this.cardArr[i][j - 1].getNumber()) {
        this.inspectionSelect(i, j - 1);
      }
    }
  },
  doDown: function doDown() {
    var isdo = false;
    for (var x = 0; x < GameConfig.CAED_LINES; x++) {
      for (var y = 0; y < GameConfig.CAED_LINES; y++) {
        for (var y1 = y + 1; y1 < GameConfig.CAED_LINES; y1++) {
          if (this.cardArr[x][y1].isVisible()) {
            if (!this.cardArr[x][y].isVisible()) {
              AnimLayerTool.createMoveAnim(this.cardArr[x][y1], this.cardArr[x][y], false);
              this.cardArr[x][y].setNumber(this.cardArr[x][y1].getNumber());
              this.cardArr[x][y].setVisible(true);
              this.cardArr[x][y1].setVisible(false);
              this.cardArr[x][y1].CardShow();
              y--;
              isdo = true;
            }
            break;
          }
        }
      }
    }
    return isdo;
  },
  doLeft: function doLeft() {
    var isdo = false;
    for (var x = 0; x < GameConfig.CAED_LINES; x++) {
      for (var x1 = x + 1; x1 < GameConfig.CAED_LINES; x1++) {
        if (this.cardArr[x1][0].isVisible()) {
          if (!this.cardArr[x][0].isVisible()) {
            for (var y = 0; y < GameConfig.CAED_LINES; y++) {
              if (this.cardArr[x1][y].isVisible()) {
                AnimLayerTool.createMoveAnim(this.cardArr[x1][y], this.cardArr[x][y], false);
              }
              this.cardArr[x][y].setNumber(this.cardArr[x1][y].getNumber());
              this.cardArr[x][y].setVisible(this.cardArr[x1][y].isVisible());
              this.cardArr[x1][y].setVisible(false);
              this.cardArr[x1][y].CardShow();
            }
            x--;
            isdo = true;
          }
          break;
        }
      }
    }
    return isdo;
  },
  //根据屏幕大小创建卡片
  createCardSprite: function createCardSprite() {
    for (var i = 0; i < GameConfig.CAED_LINES; i++) {
      for (var j = 0; j < GameConfig.CAED_LINES; j++) {
        var card = CardSprite.createCardSprite(this.randomCreateCardNumber(), GameConfig.CARD_WIDTH * i + GameConfig.DEVICE_WIDTH / 20.0 + GameConfig.CARD_WIDTH / 2.0, GameConfig.CARD_WIDTH * j + GameConfig.DEVICE_HEIGHT / 8.0);
        this.cardArr[i][j] = card;
        // this.addChild(card, i, j);
        //版本调整
        this.addChild(card);
      }
    }
  },
  //随机产生数字
  randomCreateCardNumber: function randomCreateCardNumber() {
    // let num = cc.random0To1() * 5;
    var num = Math.random() * 5;
    var returnNum = Math.pow(2, Math.floor(num) + 1);
    return returnNum;
  },
  //自动生成卡片
  autoCreateCardNumber: function autoCreateCardNumber(dt) {
    // this.removeChildByTag(TAG_passSprit);
    for (var i = 0; i < GameConfig.CAED_LINES; i++) {
      for (var j = 0; j < GameConfig.CAED_LINES; j++) {
        this.cardArr[i][j].setVisible(true);
        this.cardArr[i][j].setNumber(this.randomCreateCardNumber());
        this.cardArr[i][j].CardShow();
        AnimLayerTool.moveButtonAnim(this.cardArr[i][j], true, AnimLayerTool.MoveButtonAnimType.up);
      }
    }
    GameData.setGamePassNum(GameData.getGamePassNum() + 1);
    GameConfig.GameScene.setPassNum();
    GameConfig.GameScene.progressBar.scaleX = 0;
    GameUiTools.scheduleOnce(this, this.doCheck, 0.15);
  },
  setScore: function setScore() {
    GameConfig.GameScene.setScore(this.score);
  },
  doCheck: function doCheck(dt) {
    this.saveMemoryInformation(); //保存临时信息
    //this.setScore(score);
    var isGameOver = true;
    var isPassGame = true;
    for (var y = 0; y < GameConfig.CAED_LINES; y++) {
      for (var x = 0; x < GameConfig.CAED_LINES; x++) {
        if (this.cardArr[x][y].isVisible()) {
          if (x < GameConfig.CAED_LINES - 1 && this.cardArr[x + 1][y].isVisible() && this.cardArr[x + 1][y].getNumber() == this.cardArr[x][y].getNumber()) {
            isPassGame = false;
            break;
          }
          if (y < GameConfig.CAED_LINES - 1 && this.cardArr[x][y + 1].isVisible() && this.cardArr[x][y + 1].getNumber() == this.cardArr[x][y].getNumber()) {
            isPassGame = false;
            break;
          }
        } else {
          isGameOver = false;
        }
      }
    }
    if (isPassGame) {
      var deTime = 0;
      for (var i = 0; i < GameConfig.CAED_LINES; i++) {
        for (var j = 0; j < GameConfig.CAED_LINES; j++) {
          if (this.cardArr[i][j].isVisible()) {
            if (deTime < 5) {
              AnimLayerTool.createPopStarAnim(this.cardArr[i][j], ++deTime * 0.5);
            } else {
              AnimLayerTool.createPopStarAnim(this.cardArr[i][j], deTime * 0.5);
            }
          }
        }
      }
      if (deTime < 5) {
        this.score = this.score + (5 - deTime) * (5 - deTime) * 5;
        AnimLayerTool.createScoreMoveAnim(this.cardArr[2][2], (5 - deTime) * (5 - deTime) * 5, false); //加分动画
      }

      if (this.score < GameData.getGamePassScore()) {
        GameUiTools.scheduleOnce(this, this.gameOver, 1 + deTime * 0.5);
      } else {
        AnimLayerTool.createShowMessageBoxAward(this.getParent(), -1);
        // GameUiTools.scheduleOnce(this, this.autoCreateCardNumber, 1 + deTime * 0.5);
        GameUiTools.scheduleOnce(this, this.gamePass, 1 + deTime * 0.5);
      }
    }
  },
  gamePass: function gamePass() {
    GameUiTools.loadingLayer("panel/GamePass");
  },
  gameOver: function gameOver(dt)
  //游戏结束
  {
    GameConfig.IS_GAME_OVER = true;
    GameUiTools.loadingLayer("panel/GameOver");
    // cc.loader.loadRes("panel/GameOver", (err, prefab) => {
    //     let node = cc.instantiate(prefab);
    //     GameConfig.GameScene.node.addChild(node);
    // });
  },
  /**
   *撤销游戏
   */
  backGame: function backGame() {
    if (GameData.scoreNum == 1) {
      for (var i = 0; i < GameConfig.CAED_LINES; i++) {
        for (var j = 0; j < GameConfig.CAED_LINES; j++) {
          this.cardArr[i][j].setNumber(GameData.scoreCard1[i][j]);
          this.cardArr[i][j].CardShow();
          if (GameData.scoreCard3[i][j] == 1) {
            this.cardArr[i][j].setVisible(false);
          } else {
            this.cardArr[i][j].setVisible(true);
          }
        }
      }
      this.score = GameData.score1;
      GameData.scoreNum = 0;
      GameData.score0 = GameData.score1;
      for (var _i3 = 0; _i3 < GameConfig.CAED_LINES; _i3++) {
        for (var _j3 = 0; _j3 < GameConfig.CAED_LINES; _j3++) {
          GameData.scoreCard2[_i3][_j3] = GameData.scoreCard3[_i3][_j3];
          GameData.scoreCard0[_i3][_j3] = GameData.scoreCard1[_i3][_j3];
        }
      }
      this.setScore();
    } else {
      GameTools.toastMessage(4);
    }
  },
  saveMemoryInformation: function saveMemoryInformation() {
    if (GameData.scoreNum == 0) {
      GameData.scoreNum = 1;
    }
    GameData.score1 = GameData.score0;
    GameData.score0 = this.score;
    for (var i = 0; i < GameConfig.CAED_LINES; i++) {
      for (var j = 0; j < GameConfig.CAED_LINES; j++) {
        GameData.scoreCard3[i][j] = GameData.scoreCard2[i][j];
        GameData.scoreCard2[i][j] = this.cardArr[i][j].isVisible() ? 0 : 1;
        GameData.scoreCard1[i][j] = GameData.scoreCard0[i][j];
        GameData.scoreCard0[i][j] = this.cardArr[i][j].getNumber();
        GameData.bestNum = GameData.bestNum > this.cardArr[i][j].getNumber() ? GameData.bestNum : this.cardArr[i][j].getNumber();
      }
    }
  }
});
module.exports = GamePopStar;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lUG9wU3Rhci5qcyJdLCJuYW1lcyI6WyJDYXJkU3ByaXRlIiwicmVxdWlyZSIsIkdhbWVDb25maWciLCJHYW1lRGF0YSIsIkFuaW1MYXllclRvb2wiLCJHYW1lVG9vbHMiLCJHYW1lVWlUb29scyIsIlRBR19jYXJkIiwiR2FtZVBvcFN0YXIiLCJjYyIsIkNsYXNzIiwiTm9kZSIsInByb3BlcnRpZXMiLCJmaXJzdFgiLCJmaXJzdFkiLCJlbmRYIiwiZW5kWSIsInNlbGVjdE51bWJlciIsInNlbGVjdEFtb3VudCIsInNjb3JlIiwiY2FyZEFyciIsImZpcnN0Q2xpY2tOdW0iLCJBcnJheSIsImN0b3IiLCJ4IiwiREVWSUNFX1dJRFRIIiwieSIsIkRFVklDRV9IRUlHSFQiLCJzZXRDb250ZW50U2l6ZSIsImluaXQiLCJpIiwiQ0FFRF9MSU5FUyIsImluaXRVSSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoQmVnYW4iLCJjcmVhdGVDYXJkU3ByaXRlIiwiaXNIYXZlR2FtZURhdGEiLCJzY29yZTAiLCJqIiwibnVtYmVyIiwic2NvcmVDYXJkMCIsIkNhcmRTaG93Iiwic2NvcmVDYXJkMiIsInNldFZpc2libGUiLCJtb3ZlQnV0dG9uQW5pbSIsIk1vdmVCdXR0b25BbmltVHlwZSIsInVwIiwic2NvcmUxIiwic2NvcmVOdW0iLCJzY29yZUNhcmQzIiwic2NvcmVDYXJkMSIsImV2ZW50IiwidG91Y2hQb2ludCIsInRvdWNoIiwiZ2V0TG9jYXRpb24iLCJzZWxmIiwiZ2V0Q3VycmVudFRhcmdldCIsInByb3BzTWVudSIsIlByb3BzTWVudSIsIlByb3BzTWVudVNwYWNlIiwiR2FtZVBvcFN0YXJQcm9wZXJ0eSIsImlzVmlzaWJsZSIsImdldEJvdW5kaW5nQm94VG9Xb3JsZCIsImNvbnRhaW5zIiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwiQ2FyZENsaWNrU2hvdyIsImluc3BlY3Rpb25TZWxlY3QiLCJjYXJkVmFuaXNoIiwiUHJvcHNNZW51RGVzdHJveUNhcmQiLCJjYXJkVmFuaXNoQW5pIiwic2V0R2FtZVByb3BOdW1iZXIiLCJHYW1lU2NlbmUiLCJQcm9wc01lbnVFeGNoYW5nZUNhcmQiLCJNYXRoIiwiYWJzIiwiY2FuY2VsU2VsZWN0IiwiY3JlYXRlTW92ZUFuaW0iLCJudW0iLCJnZXROdW1iZXIiLCJzZXROdW1iZXIiLCJQcm9wc01lbnVSZW1vdmVBY3Jvc3MiLCJ6IiwiY2FsbEZ1bmNQb3BTdGFyQW5pbSIsImR0IiwiZG9Eb3duIiwiZG9MZWZ0IiwiZG9DaGVjayIsImdldElzU2VsZWN0IiwiZmlyc3RDYXJkSSIsImZpcnN0Q2FyZEoiLCJkZVRpbWUiLCJnZXRJc0ZpcnN0U2VsZWN0IiwiY3JlYXRlUG9wU3RhckFuaW0iLCJjcmVhdGVTY29yZU1vdmVBbmltIiwiY3JlYXRlU2hvd01lc3NhZ2VCb3hBd2FyZCIsImdldFBhcmVudCIsInNldEdhbWVSZXdhcmRzIiwic2NoZWR1bGVPbmNlIiwiaXNkbyIsInkxIiwieDEiLCJjYXJkIiwicmFuZG9tQ3JlYXRlQ2FyZE51bWJlciIsIkNBUkRfV0lEVEgiLCJhZGRDaGlsZCIsInJhbmRvbSIsInJldHVybk51bSIsInBvdyIsImZsb29yIiwiYXV0b0NyZWF0ZUNhcmROdW1iZXIiLCJzZXRHYW1lUGFzc051bSIsImdldEdhbWVQYXNzTnVtIiwic2V0UGFzc051bSIsInByb2dyZXNzQmFyIiwic2NhbGVYIiwic2V0U2NvcmUiLCJzYXZlTWVtb3J5SW5mb3JtYXRpb24iLCJpc0dhbWVPdmVyIiwiaXNQYXNzR2FtZSIsImdldEdhbWVQYXNzU2NvcmUiLCJnYW1lT3ZlciIsImdhbWVQYXNzIiwibG9hZGluZ0xheWVyIiwiSVNfR0FNRV9PVkVSIiwiYmFja0dhbWUiLCJ0b2FzdE1lc3NhZ2UiLCJiZXN0TnVtIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxZQUFZLENB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QUFDLENBQUMsQ0FBQ1UsQ0FBQyxDQUFDLENBQUN3QyxTQUFTLEVBQUU7UUFDMUQ3RSxRQUFRLENBQUM2SCxPQUFPLEdBQUc3SCxRQUFRLENBQUM2SCxPQUFPLEdBQUcsSUFBSSxDQUFDNUcsT0FBTyxDQUFDVSxDQUFDLENBQUMsQ0FBQ1UsQ0FBQyxDQUFDLENBQUN3QyxTQUFTLEVBQUUsR0FBRzdFLFFBQVEsQ0FBQzZILE9BQU8sR0FBRyxJQUFJLENBQUM1RyxPQUFPLENBQUNVLENBQUMsQ0FBQyxDQUFDVSxDQUFDLENBQUMsQ0FBQ3dDLFNBQVMsRUFBRTtNQUM1SDtJQUNKO0VBQ0o7QUFDSixDQUFDLENBQUM7QUFFRmlELE1BQU0sQ0FBQ0MsT0FBTyxHQUFHMUgsV0FBVyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENhcmRTcHJpdGUgPSByZXF1aXJlKFwiQ2FyZFNwcml0ZVwiKTtcclxudmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcclxudmFyIEdhbWVEYXRhID0gcmVxdWlyZShcIkdhbWVEYXRhXCIpO1xyXG52YXIgQW5pbUxheWVyVG9vbCA9IHJlcXVpcmUoXCJBbmltTGF5ZXJUb29sXCIpO1xyXG52YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcclxudmFyIEdhbWVVaVRvb2xzID0gcmVxdWlyZShcIkdhbWVVaVRvb2xzXCIpO1xyXG5jb25zdCBUQUdfY2FyZCA9IDEwMDY7XHJcbnZhciBHYW1lUG9wU3RhciA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLk5vZGUsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZmlyc3RYOiBudWxsLC8v54K55Ye75YWD57SgXHJcbiAgICAgICAgZmlyc3RZOiBudWxsLC8v54K55Ye75YWD57SgXHJcbiAgICAgICAgZW5kWDogbnVsbCxcclxuICAgICAgICBlbmRZOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdE51bWJlcjogMCwvL+mAieS4reaVsOWtl1xyXG4gICAgICAgIHNlbGVjdEFtb3VudDogMCwvL+mAieS4reWNoeeJh+aVsFxyXG4gICAgICAgIHNjb3JlOiAwLC8v5YiG5pWwLFxyXG4gICAgICAgIGNhcmRBcnI6IG51bGwsLy8g5YKo5a2Y5Y2h54mH57G7XHJcbiAgICAgICAgZmlyc3RDbGlja051bTogbmV3IEFycmF5KCksLy/orrDlvZXkuqTmjaLkvY3nva5cclxuICAgIH0sXHJcbiAgICBjdG9yOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy54ID0gLUdhbWVDb25maWcuREVWSUNFX1dJRFRIIC8gMjtcclxuICAgICAgICB0aGlzLnkgPSAtR2FtZUNvbmZpZy5ERVZJQ0VfSEVJR0hUIC8gMjtcclxuICAgICAgICB0aGlzLnNldENvbnRlbnRTaXplKEdhbWVDb25maWcuREVWSUNFX1dJRFRIICogNCwgR2FtZUNvbmZpZy5ERVZJQ0VfSEVJR0hUICogNCk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2FyZEFyciA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2ldID0gQXJyYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maXJzdENsaWNrTnVtWzBdID0gLTE7XHJcbiAgICAgICAgdGhpcy5maXJzdENsaWNrTnVtWzFdID0gLTE7XHJcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuICAgIH0sXHJcbiAgICBpbml0VUkoKSB7XHJcbiAgICAgICAgLy/orr7nva7op6bmkbjkuovku7bnm5HlkKxcclxuICAgICAgICB0aGlzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hCZWdhbiwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FyZFNwcml0ZSgpOyAvL+WIm+W7ujRYNOWNoeeJh1xyXG4gICAgICAgIGlmIChHYW1lRGF0YS5pc0hhdmVHYW1lRGF0YSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSBHYW1lRGF0YS5zY29yZTA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0ubnVtYmVyID0gR2FtZURhdGEuc2NvcmVDYXJkMFtpXVtqXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uQ2FyZFNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoR2FtZURhdGEuc2NvcmVDYXJkMltpXVtqXSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpXVtqXS5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5tb3ZlQnV0dG9uQW5pbSh0aGlzLmNhcmRBcnJbaV1bal0sIHRydWUsIEFuaW1MYXllclRvb2wuTW92ZUJ1dHRvbkFuaW1UeXBlLnVwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBHYW1lRGF0YS5zY29yZTAgPSAwO1xyXG4gICAgICAgICAgICBHYW1lRGF0YS5zY29yZTEgPSAwO1xyXG4gICAgICAgICAgICBHYW1lRGF0YS5zY29yZU51bSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZURhdGEuc2NvcmVDYXJkM1tpXVtqXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZURhdGEuc2NvcmVDYXJkMltpXVtqXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZURhdGEuc2NvcmVDYXJkMVtpXVtqXSA9IHRoaXMuY2FyZEFycltpXVtqXS5udW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZURhdGEuc2NvcmVDYXJkMFtpXVtqXSA9IHRoaXMuY2FyZEFycltpXVtqXS5udW1iZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Ub3VjaEJlZ2FuKGV2ZW50KSB7XHJcbiAgICAgICAgLy/ojrflj5bop6bmkbjnmoRY6L205ZKMWei9tFxyXG4gICAgICAgIGxldCB0b3VjaFBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTsgLy/ojrflj5ZPcGVuR0zlnZDmoIfvvIjljbNjb2NvczJkLXjlnZDmoIfvvIzljp/ngrnlnKjlt6bkuIvop5LvvIlcclxuICAgICAgICBsZXQgc2VsZiA9IGV2ZW50LmdldEN1cnJlbnRUYXJnZXQoKTtcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5wcm9wc01lbnUgIT0gR2FtZUNvbmZpZy5Qcm9wc01lbnUuUHJvcHNNZW51U3BhY2UpIHtcclxuICAgICAgICAgICAgc2VsZi5HYW1lUG9wU3RhclByb3BlcnR5KHRvdWNoUG9pbnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHsgLy/norDmkp7mo4DmtYtcclxuICAgICAgICAgICAgaWYgKHNlbGYuc2VsZWN0QW1vdW50ID09IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmNhcmRBcnJbaV1bal0uaXNWaXNpYmxlKCkgJiYgc2VsZi5jYXJkQXJyW2ldW2pdLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKHRvdWNoUG9pbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYXJkQXJyW2ldW2pdLkNhcmRDbGlja1Nob3coMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmluc3BlY3Rpb25TZWxlY3QoaSwgaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNhcmRWYW5pc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuLy/pgZPlhbfmqKHlvI9cclxuICAgIEdhbWVQb3BTdGFyUHJvcGVydHkodG91Y2hQb2ludCkge1xyXG4gICAgICAgIC8v56Kw5pKe5qOA5rWLXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXJkQXJyW2ldW2pdLmlzVmlzaWJsZSgpICYmIHRoaXMuY2FyZEFycltpXVtqXS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyh0b3VjaFBvaW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcucHJvcHNNZW51ID09IEdhbWVDb25maWcuUHJvcHNNZW51LlByb3BzTWVudURlc3Ryb3lDYXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpXVtqXS5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkVmFuaXNoQW5pKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5zZXRHYW1lUHJvcE51bWJlcigwLCAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZVNjZW5lLnNldEdhbWVQcm9wTnVtYmVyKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLnByb3BzTWVudSA9IEdhbWVDb25maWcuUHJvcHNNZW51LlByb3BzTWVudVNwYWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lQ29uZmlnLnByb3BzTWVudSA9PSBHYW1lQ29uZmlnLlByb3BzTWVudS5Qcm9wc01lbnVFeGNoYW5nZUNhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RDbGlja051bVswXSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdENsaWNrTnVtWzBdID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RDbGlja051bVsxXSA9IGo7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IDAgJiYgdGhpcy5jYXJkQXJyW2kgLSAxXVtqXS5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpIC0gMV1bal0uQ2FyZENsaWNrU2hvdygxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTIC0gMSAmJiB0aGlzLmNhcmRBcnJbaSArIDFdW2pdLmlzVmlzaWJsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2kgKyAxXVtqXS5DYXJkQ2xpY2tTaG93KDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPiAwICYmIHRoaXMuY2FyZEFycltpXVtqIC0gMV0uaXNWaXNpYmxlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1baiAtIDFdLkNhcmRDbGlja1Nob3coMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUyAtIDEgJiYgdGhpcy5jYXJkQXJyW2ldW2ogKyAxXS5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpXVtqICsgMV0uQ2FyZENsaWNrU2hvdygxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQW5pbUxheWVyVG9vbC5jcmVhdGVFeGNoYW5nZUNhcmRBbmltKHRoaXMuY2FyZEFycltpXVtqXSwgaSwgaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChNYXRoLmFicyhpIC0gdGhpcy5maXJzdENsaWNrTnVtWzBdKSA9PSAxKSAmJiAoKGogLSB0aGlzLmZpcnN0Q2xpY2tOdW1bMV0pID09IDApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICgoKGkgLSB0aGlzLmZpcnN0Q2xpY2tOdW1bMF0pID09IDApICYmIChNYXRoLmFicyhqIC0gdGhpcy5maXJzdENsaWNrTnVtWzFdKSA9PSAxKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbFNlbGVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1MYXllclRvb2wuY3JlYXRlTW92ZUFuaW0odGhpcy5jYXJkQXJyW2ldW2pdLCB0aGlzLmNhcmRBcnJbdGhpcy5maXJzdENsaWNrTnVtWzBdXVt0aGlzLmZpcnN0Q2xpY2tOdW1bMV1dLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbmltTGF5ZXJUb29sLmNyZWF0ZU1vdmVBbmltKHRoaXMuY2FyZEFyclt0aGlzLmZpcnN0Q2xpY2tOdW1bMF1dW3RoaXMuZmlyc3RDbGlja051bVsxXV0sIHRoaXMuY2FyZEFycltpXVtqXSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG51bSA9IHRoaXMuY2FyZEFycltpXVtqXS5nZXROdW1iZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uc2V0TnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbdGhpcy5maXJzdENsaWNrTnVtWzBdXVt0aGlzLmZpcnN0Q2xpY2tOdW1bMV1dLmdldE51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbdGhpcy5maXJzdENsaWNrTnVtWzBdXVt0aGlzLmZpcnN0Q2xpY2tOdW1bMV1dLnNldE51bWJlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0Q2xpY2tOdW1bMF0gPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0Q2xpY2tOdW1bMV0gPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5zZXRHYW1lUHJvcE51bWJlcigyLCAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5HYW1lU2NlbmUuc2V0R2FtZVByb3BOdW1iZXIoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkVmFuaXNoQW5pKDApOyAvL+ajgOa1i1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdENsaWNrTnVtWzBdID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdENsaWNrTnVtWzFdID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxTZWxlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcucHJvcHNNZW51ID0gR2FtZUNvbmZpZy5Qcm9wc01lbnUuUHJvcHNNZW51U3BhY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoR2FtZUNvbmZpZy5wcm9wc01lbnUgPT0gR2FtZUNvbmZpZy5Qcm9wc01lbnUuUHJvcHNNZW51UmVtb3ZlQWNyb3NzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyB6KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1MYXllclRvb2wuY2FsbEZ1bmNQb3BTdGFyQW5pbShudWxsLCB0aGlzLmNhcmRBcnJbel1bal0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW3pdW2pdLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5jYWxsRnVuY1BvcFN0YXJBbmltKG51bGwsIHRoaXMuY2FyZEFycltpXVt6XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bel0uc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgR2FtZURhdGEuc2V0R2FtZVByb3BOdW1iZXIoMSwgLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVTY2VuZS5zZXRHYW1lUHJvcE51bWJlcigxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkVmFuaXNoQW5pKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLnByb3BzTWVudSA9IEdhbWVDb25maWcuUHJvcHNNZW51LlByb3BzTWVudVNwYWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmZpcnN0Q2xpY2tOdW1bMF0gIT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5jZWxTZWxlY3QoKTtcclxuICAgICAgICAgICAgdGhpcy5maXJzdENsaWNrTnVtWzBdID0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDbGlja051bVsxXSA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBHYW1lQ29uZmlnLnByb3BzTWVudSA9IEdhbWVDb25maWcuUHJvcHNNZW51LlByb3BzTWVudVNwYWNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBjYXJkVmFuaXNoQW5pKGR0KSB7Ly/ljaHniYfmtojlpLHnm5HlkKzliqjnlLtcclxuICAgICAgICB0aGlzLmRvRG93bigpO1xyXG4gICAgICAgIHRoaXMuZG9MZWZ0KCk7XHJcbiAgICAgICAgdGhpcy5kb0NoZWNrKDApO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QW1vdW50ID0gMDtcclxuICAgIH0sXHJcblxyXG4gICAgY2FuY2VsU2VsZWN0KCkgey8v5Y+W5raI6YCJ5oupXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXJkQXJyW2ldW2pdLmdldElzU2VsZWN0KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uQ2FyZENsaWNrU2hvdygwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGVjdEFtb3VudCA9IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIGNhcmRWYW5pc2goKSB7Ly/ljaHniYfmtojlpLFcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RBbW91bnQgPj0gMikge1xyXG4gICAgICAgICAgICBsZXQgZmlyc3RDYXJkSSwgZmlyc3RDYXJkSjtcclxuICAgICAgICAgICAgbGV0IGRlVGltZSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXJkQXJyW2ldW2pdLmdldElzRmlyc3RTZWxlY3QoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdENhcmRJID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RDYXJkSiA9IGo7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhcmRBcnJbaV1bal0uZ2V0SXNTZWxlY3QoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uQ2FyZENsaWNrU2hvdygwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmNhcmRBcnJbaV1bal0uc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1MYXllclRvb2wuY3JlYXRlUG9wU3RhckFuaW0odGhpcy5jYXJkQXJyW2ldW2pdLCAoZGVUaW1lKyspICogMC4xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9BbmltTGF5ZXJUb29sLmNhbGxGdW5jUG9wU3RhckFuaW0odGhpcy5jYXJkQXJyW2ldW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSB0aGlzLnNjb3JlICsgdGhpcy5zZWxlY3RBbW91bnQgKiB0aGlzLnNlbGVjdEFtb3VudCAqIDU7XHJcbiAgICAgICAgICAgIEFuaW1MYXllclRvb2wuY3JlYXRlU2NvcmVNb3ZlQW5pbSh0aGlzLmNhcmRBcnJbZmlyc3RDYXJkSV1bZmlyc3RDYXJkSl0sIHRoaXMuc2VsZWN0QW1vdW50ICogdGhpcy5zZWxlY3RBbW91bnQgKiA1LCBmYWxzZSk7Ly/liqDliIbliqjnlLtcclxuICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5jcmVhdGVTaG93TWVzc2FnZUJveEF3YXJkKHRoaXMuZ2V0UGFyZW50KCksIHRoaXMuc2VsZWN0QW1vdW50KTsvL+WxleekuuWlluWKseWvueivneahhlxyXG5cclxuICAgICAgICAgICAgbGV0IHNjb3JlTnVtID0gR2FtZURhdGEuc2V0R2FtZVJld2FyZHModGhpcy5zZWxlY3ROdW1iZXIpOyAvL+iOt+WPluWlluWKsVxyXG4gICAgICAgICAgICBBbmltTGF5ZXJUb29sLmNyZWF0ZVNjb3JlTW92ZUFuaW0odGhpcy5jYXJkQXJyW2ZpcnN0Q2FyZEldW2ZpcnN0Q2FyZEpdLCBzY29yZU51bSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLnNjaGVkdWxlT25jZSh0aGlzLCB0aGlzLmNhcmRWYW5pc2hBbmksIGRlVGltZSAqIDAuMSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5jYXJkVmFuaXNoQW5pKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5jZWxTZWxlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuLy/pgInmi6nngrnkuK3ljaHniYdcclxuICAgIGluc3BlY3Rpb25TZWxlY3QoaSwgaikge1xyXG4gICAgICAgIHRoaXMuY2FyZEFycltpXVtqXS5DYXJkQ2xpY2tTaG93KDIpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QW1vdW50Kys7XHJcbiAgICAgICAgdGhpcy5zZWxlY3ROdW1iZXIgPSB0aGlzLmNhcmRBcnJbaV1bal0uZ2V0TnVtYmVyKCk7XHJcbiAgICAgICAgaWYgKGkgPj0gMSAmJiB0aGlzLmNhcmRBcnJbaSAtIDFdW2pdLmlzVmlzaWJsZSgpICYmICF0aGlzLmNhcmRBcnJbaSAtIDFdW2pdLmdldElzU2VsZWN0KCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0TnVtYmVyID09IHRoaXMuY2FyZEFycltpIC0gMV1bal0uZ2V0TnVtYmVyKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zcGVjdGlvblNlbGVjdChpIC0gMSwgaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGogPCBHYW1lQ29uZmlnLkNBRURfTElORVMgLSAxICYmIHRoaXMuY2FyZEFycltpXVtqICsgMV0uaXNWaXNpYmxlKClcclxuICAgICAgICAgICAgJiYgIXRoaXMuY2FyZEFycltpXVtqICsgMV0uZ2V0SXNTZWxlY3QoKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3ROdW1iZXIgPT0gdGhpcy5jYXJkQXJyW2ldW2ogKyAxXS5nZXROdW1iZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnNwZWN0aW9uU2VsZWN0KGksIGogKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUyAtIDEgJiYgdGhpcy5jYXJkQXJyW2kgKyAxXVtqXS5pc1Zpc2libGUoKVxyXG4gICAgICAgICAgICAmJiAhdGhpcy5jYXJkQXJyW2kgKyAxXVtqXS5nZXRJc1NlbGVjdCgpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdE51bWJlciA9PSB0aGlzLmNhcmRBcnJbaSArIDFdW2pdLmdldE51bWJlcigpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3BlY3Rpb25TZWxlY3QoaSArIDEsIGopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChqID49IDEgJiYgdGhpcy5jYXJkQXJyW2ldW2ogLSAxXS5pc1Zpc2libGUoKVxyXG4gICAgICAgICAgICAmJiAhdGhpcy5jYXJkQXJyW2ldW2ogLSAxXS5nZXRJc1NlbGVjdCgpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdE51bWJlciA9PSB0aGlzLmNhcmRBcnJbaV1baiAtIDFdLmdldE51bWJlcigpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3BlY3Rpb25TZWxlY3QoaSwgaiAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRvRG93bigpIHtcclxuICAgICAgICBsZXQgaXNkbyA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeTEgPSB5ICsgMTsgeTEgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IHkxKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXJkQXJyW3hdW3kxXS5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FyZEFyclt4XVt5XS5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5jcmVhdGVNb3ZlQW5pbSh0aGlzLmNhcmRBcnJbeF1beTFdLCB0aGlzLmNhcmRBcnJbeF1beV0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFyclt4XVt5XS5zZXROdW1iZXIodGhpcy5jYXJkQXJyW3hdW3kxXS5nZXROdW1iZXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbeF1beV0uc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFyclt4XVt5MV0uc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbeF1beTFdLkNhcmRTaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5LS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc2RvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzZG87XHJcbiAgICB9LFxyXG4gICAgZG9MZWZ0KCkge1xyXG4gICAgICAgIGxldCBpc2RvID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IHgrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4MSA9IHggKyAxOyB4MSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgeDErKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FyZEFyclt4MV1bMF0uaXNWaXNpYmxlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FyZEFyclt4XVswXS5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXJkQXJyW3gxXVt5XS5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1MYXllclRvb2wuY3JlYXRlTW92ZUFuaW0odGhpcy5jYXJkQXJyW3gxXVt5XSwgdGhpcy5jYXJkQXJyW3hdW3ldLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbeF1beV0uc2V0TnVtYmVyKHRoaXMuY2FyZEFyclt4MV1beV0uZ2V0TnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW3hdW3ldLnNldFZpc2libGUodGhpcy5jYXJkQXJyW3gxXVt5XS5pc1Zpc2libGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbeDFdW3ldLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW3gxXVt5XS5DYXJkU2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNkbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc2RvO1xyXG4gICAgfSxcclxuICAgIC8v5qC55o2u5bGP5bmV5aSn5bCP5Yib5bu65Y2h54mHXHJcbiAgICBjcmVhdGVDYXJkU3ByaXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhcmQgPSBDYXJkU3ByaXRlLmNyZWF0ZUNhcmRTcHJpdGUodGhpcy5yYW5kb21DcmVhdGVDYXJkTnVtYmVyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5DQVJEX1dJRFRIICogaSArIEdhbWVDb25maWcuREVWSUNFX1dJRFRIIC8gMjAuMCArIEdhbWVDb25maWcuQ0FSRF9XSURUSCAvIDIuMCxcclxuICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkNBUkRfV0lEVEggKiBqICsgR2FtZUNvbmZpZy5ERVZJQ0VfSEVJR0hUIC8gOC4wKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpXVtqXSA9IGNhcmQ7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmFkZENoaWxkKGNhcmQsIGksIGopO1xyXG4gICAgICAgICAgICAgICAgLy/niYjmnKzosIPmlbRcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/pmo/mnLrkuqfnlJ/mlbDlrZdcclxuICAgIHJhbmRvbUNyZWF0ZUNhcmROdW1iZXIoKSB7XHJcbiAgICAgICAgLy8gbGV0IG51bSA9IGNjLnJhbmRvbTBUbzEoKSAqIDU7XHJcbiAgICAgICAgbGV0IG51bSA9IE1hdGgucmFuZG9tKCkgKiA1O1xyXG4gICAgICAgIGxldCByZXR1cm5OdW0gPSBNYXRoLnBvdygyLCAoTWF0aC5mbG9vcihudW0pICsgMSkpO1xyXG4gICAgICAgIHJldHVybiByZXR1cm5OdW07XHJcbiAgICB9LFxyXG4gICAgLy/oh6rliqjnlJ/miJDljaHniYdcclxuICAgIGF1dG9DcmVhdGVDYXJkTnVtYmVyKGR0KSB7XHJcbiAgICAgICAgLy8gdGhpcy5yZW1vdmVDaGlsZEJ5VGFnKFRBR19wYXNzU3ByaXQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2ldW2pdLnNldFZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uc2V0TnVtYmVyKHRoaXMucmFuZG9tQ3JlYXRlQ2FyZE51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpXVtqXS5DYXJkU2hvdygpO1xyXG4gICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5tb3ZlQnV0dG9uQW5pbSh0aGlzLmNhcmRBcnJbaV1bal0sIHRydWUsIEFuaW1MYXllclRvb2wuTW92ZUJ1dHRvbkFuaW1UeXBlLnVwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBHYW1lRGF0YS5zZXRHYW1lUGFzc051bShHYW1lRGF0YS5nZXRHYW1lUGFzc051bSgpICsgMSk7XHJcbiAgICAgICAgR2FtZUNvbmZpZy5HYW1lU2NlbmUuc2V0UGFzc051bSgpO1xyXG4gICAgICAgIEdhbWVDb25maWcuR2FtZVNjZW5lLnByb2dyZXNzQmFyLnNjYWxlWCA9IDA7XHJcbiAgICAgICAgR2FtZVVpVG9vbHMuc2NoZWR1bGVPbmNlKHRoaXMsIHRoaXMuZG9DaGVjaywgMC4xNSk7XHJcbiAgICB9LFxyXG4gICAgc2V0U2NvcmUoKSB7XHJcbiAgICAgICAgR2FtZUNvbmZpZy5HYW1lU2NlbmUuc2V0U2NvcmUodGhpcy5zY29yZSk7XHJcbiAgICB9LFxyXG4gICAgZG9DaGVjayhkdCkge1xyXG4gICAgICAgIHRoaXMuc2F2ZU1lbW9yeUluZm9ybWF0aW9uKCk7IC8v5L+d5a2Y5Li05pe25L+h5oGvXHJcbiAgICAgICAgLy90aGlzLnNldFNjb3JlKHNjb3JlKTtcclxuICAgICAgICBsZXQgaXNHYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgbGV0IGlzUGFzc0dhbWUgPSB0cnVlO1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyB5KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FyZEFyclt4XVt5XS5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4IDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTIC0gMSAmJiB0aGlzLmNhcmRBcnJbeCArIDFdW3ldLmlzVmlzaWJsZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmICh0aGlzLmNhcmRBcnJbeCArIDFdW3ldLmdldE51bWJlcigpID09IHRoaXMuY2FyZEFyclt4XVt5XS5nZXROdW1iZXIoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNQYXNzR2FtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHkgPCBHYW1lQ29uZmlnLkNBRURfTElORVMgLSAxICYmIHRoaXMuY2FyZEFyclt4XVt5ICsgMV0uaXNWaXNpYmxlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKHRoaXMuY2FyZEFyclt4XVt5ICsgMV0uZ2V0TnVtYmVyKCkgPT0gdGhpcy5jYXJkQXJyW3hdW3ldLmdldE51bWJlcigpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1Bhc3NHYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNHYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1Bhc3NHYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBkZVRpbWUgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FyZEFycltpXVtqXS5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVUaW1lIDwgNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5jcmVhdGVQb3BTdGFyQW5pbSh0aGlzLmNhcmRBcnJbaV1bal0sICgrK2RlVGltZSkgKiAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5jcmVhdGVQb3BTdGFyQW5pbSh0aGlzLmNhcmRBcnJbaV1bal0sIGRlVGltZSAqIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkZVRpbWUgPCA1KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlID0gdGhpcy5zY29yZSArICg1IC0gZGVUaW1lKSAqICg1IC0gZGVUaW1lKSAqIDU7XHJcbiAgICAgICAgICAgICAgICBBbmltTGF5ZXJUb29sLmNyZWF0ZVNjb3JlTW92ZUFuaW0odGhpcy5jYXJkQXJyWzJdWzJdLCAoNSAtIGRlVGltZSkgKiAoNSAtIGRlVGltZSkgKiA1LCBmYWxzZSk7Ly/liqDliIbliqjnlLtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zY29yZSA8IEdhbWVEYXRhLmdldEdhbWVQYXNzU2NvcmUoKSkge1xyXG4gICAgICAgICAgICAgICAgR2FtZVVpVG9vbHMuc2NoZWR1bGVPbmNlKHRoaXMsIHRoaXMuZ2FtZU92ZXIsIDEgKyBkZVRpbWUgKiAwLjUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5jcmVhdGVTaG93TWVzc2FnZUJveEF3YXJkKHRoaXMuZ2V0UGFyZW50KCksIC0xKTtcclxuICAgICAgICAgICAgICAgIC8vIEdhbWVVaVRvb2xzLnNjaGVkdWxlT25jZSh0aGlzLCB0aGlzLmF1dG9DcmVhdGVDYXJkTnVtYmVyLCAxICsgZGVUaW1lICogMC41KTtcclxuICAgICAgICAgICAgICAgIEdhbWVVaVRvb2xzLnNjaGVkdWxlT25jZSh0aGlzLCB0aGlzLmdhbWVQYXNzLCAxICsgZGVUaW1lICogMC41KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZ2FtZVBhc3MoKSB7XHJcbiAgICAgICAgR2FtZVVpVG9vbHMubG9hZGluZ0xheWVyKFwicGFuZWwvR2FtZVBhc3NcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGdhbWVPdmVyKGR0KS8v5ri45oiP57uT5p2fXHJcbiAgICB7XHJcbiAgICAgICAgR2FtZUNvbmZpZy5JU19HQU1FX09WRVIgPSB0cnVlO1xyXG4gICAgICAgIEdhbWVVaVRvb2xzLmxvYWRpbmdMYXllcihcInBhbmVsL0dhbWVPdmVyXCIpO1xyXG4gICAgICAgIC8vIGNjLmxvYWRlci5sb2FkUmVzKFwicGFuZWwvR2FtZU92ZXJcIiwgKGVyciwgcHJlZmFiKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAvLyAgICAgR2FtZUNvbmZpZy5HYW1lU2NlbmUubm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKuaSpOmUgOa4uOaIj1xyXG4gICAgICovXHJcbiAgICBiYWNrR2FtZSgpIHtcclxuICAgICAgICBpZiAoR2FtZURhdGEuc2NvcmVOdW0gPT0gMSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2ldW2pdLnNldE51bWJlcihHYW1lRGF0YS5zY29yZUNhcmQxW2ldW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uQ2FyZFNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoR2FtZURhdGEuc2NvcmVDYXJkM1tpXVtqXSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpXVtqXS5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY29yZSA9IEdhbWVEYXRhLnNjb3JlMTtcclxuICAgICAgICAgICAgR2FtZURhdGEuc2NvcmVOdW0gPSAwO1xyXG4gICAgICAgICAgICBHYW1lRGF0YS5zY29yZTAgPSBHYW1lRGF0YS5zY29yZTE7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5zY29yZUNhcmQyW2ldW2pdID0gR2FtZURhdGEuc2NvcmVDYXJkM1tpXVtqXTtcclxuICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5zY29yZUNhcmQwW2ldW2pdID0gR2FtZURhdGEuc2NvcmVDYXJkMVtpXVtqXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFNjb3JlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgR2FtZVRvb2xzLnRvYXN0TWVzc2FnZSg0KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNhdmVNZW1vcnlJbmZvcm1hdGlvbigpIHtcclxuICAgICAgICBpZiAoR2FtZURhdGEuc2NvcmVOdW0gPT0gMCkge1xyXG4gICAgICAgICAgICBHYW1lRGF0YS5zY29yZU51bSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEdhbWVEYXRhLnNjb3JlMSA9IEdhbWVEYXRhLnNjb3JlMDtcclxuICAgICAgICBHYW1lRGF0YS5zY29yZTAgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgR2FtZURhdGEuc2NvcmVDYXJkM1tpXVtqXSA9IEdhbWVEYXRhLnNjb3JlQ2FyZDJbaV1bal07XHJcbiAgICAgICAgICAgICAgICBHYW1lRGF0YS5zY29yZUNhcmQyW2ldW2pdID0gKHRoaXMuY2FyZEFycltpXVtqXS5pc1Zpc2libGUoKSA/IDAgOiAxKTtcclxuICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNjb3JlQ2FyZDFbaV1bal0gPSBHYW1lRGF0YS5zY29yZUNhcmQwW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgR2FtZURhdGEuc2NvcmVDYXJkMFtpXVtqXSA9IHRoaXMuY2FyZEFycltpXVtqXS5nZXROdW1iZXIoKTtcclxuICAgICAgICAgICAgICAgIEdhbWVEYXRhLmJlc3ROdW0gPSBHYW1lRGF0YS5iZXN0TnVtID4gdGhpcy5jYXJkQXJyW2ldW2pdLmdldE51bWJlcigpID8gR2FtZURhdGEuYmVzdE51bSA6IHRoaXMuY2FyZEFycltpXVtqXS5nZXROdW1iZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVQb3BTdGFyO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b71benT1ABC0aPZ2HVTgCte', 'GameScene');
// Script/GameScene.js

"use strict";

var GamePopStar = require("GamePopStar");
var GameData = require("GameData");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
var GameConfig = require("GameConfig");
var AnimLayerTool = require("AnimLayerTool");
var GameScene = cc.Class({
  "extends": cc.Component,
  properties: {
    layerBack: cc.Sprite,
    backButton: cc.Node,
    //返回按钮
    cardNumberTTF: cc.Label,
    // 显示分数控件
    bestScoreTTF: cc.Label,
    // 显示最高分数控件
    progressBar: cc.Node,
    //进度条
    passNumTTF: cc.Label,
    //关数
    propMenu: [cc.Node],
    //道具按钮

    currentScore: 0,
    //当前得分
    isAddScore: false,
    //是否加分

    gameLogicLayer: cc.Node
  },
  ctor: function ctor() {
    GameConfig.GameScene = this;
    GameTools.playBackgroundMusic();
  },
  onLoad: function onLoad() {
    GameConfig.GameLogic = new GamePopStar();
    this.gameLogicLayer.addChild(GameConfig.GameLogic);
    this.currentScore = GameData.score0;
    this.cardNumberTTF.string = GameData.score0;
    this.bestScoreTTF.string = GameData.getGamePassScore();
    this.passNumTTF.string = "第 " + GameData.getGamePassNum() + " 关";
    GameUiTools.setButtonClickEvents(this, this.backButton, "backButtonFunc");
    GameUiTools.setButtonClickEvents(this, this.propMenu, "functionMenuTouchFunc");
  },
  start: function start() {},
  backButtonFunc: function backButtonFunc(event) {
    GameTools.playSimpleAudioEngine(0);
    this.loadingResource();
  },
  functionMenuTouchFunc: function functionMenuTouchFunc(event) {
    GameTools.playSimpleAudioEngine(0);
    var button = event.target;
    if (this.propMenu[0] == button) {
      if (GameData.getGamePropNumber(0) >= 1) {
        GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuDestroyCard;
      } else {
        this.showGamePropHelp(0);
        GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
      }
    } else if (this.propMenu[1] == button) {
      if (GameData.getGamePropNumber(1) >= 1) {
        GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuRemoveAcross;
      } else {
        this.showGamePropHelp(1);
        GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
      }
    } else if (this.propMenu[2] == button) {
      if (GameData.getGamePropNumber(2) >= 1) {
        GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuExchangeCard;
      } else {
        this.showGamePropHelp(2);
        GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
      }
    } else {
      GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
    }
  },
  showGamePropHelp: function showGamePropHelp(propType) {
    cc.loader.loadRes("panel/GamePropHelp", function (err, prefab) {
      var node = cc.instantiate(prefab);
      node.getComponent("GamePropHelp").setPropType(propType);
      cc.director.getScene().children[0].addChild(node);
    });
  },
  setGamePropNumber: function setGamePropNumber(propType) {
    this.propMenu[propType].getComponent("GamePropNode").setPropType();
  },
  setScore: function setScore(score) {
    if (this.currentScore > score) {
      this.currentScore = score;
      this.cardNumberTTF.string = this.currentScore;
    } else {
      this.isAddScore = true;
    }
    if (score > GameData.heightScore) {
      GameData.heightScore = score;
    }
    this.progressBar.scaleX = score / GameData.getGamePassScore() * 0.8;
    if (this.progressBar.scaleX > 0.9) {
      this.progressBar.scaleX = 0.9;
    }
  },
  update: function update(dt) {
    if (this.isAddScore && this.currentScore <= GameData.score0) {
      this.cardNumberTTF.string = this.currentScore++;
      this.currentScore++;
    } else {
      this.isAddScore = false;
    }
  },
  setPassNum: function setPassNum() {
    this.passNumTTF.string = "第 " + GameData.getGamePassNum() + " 关";
    this.bestScoreTTF.string = GameData.getGamePassScore();
  },
  loadingResource: function loadingResource() {
    GameTools.stopBackgroundMusic();
    GameConfig.loadingSceneType = GameConfig.LoadingSceneType.LoadingSceneBackGame;
    cc.director.loadScene("LoadingScene");
  } //特价9.9元一套cocoscreator代码联系Q2483367084 
  //截图 链接：https://share.weiyun.com/leGAHpnB 密码：b9udtv
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lU2NlbmUuanMiXSwibmFtZXMiOlsiR2FtZVBvcFN0YXIiLCJyZXF1aXJlIiwiR2FtZURhdGEiLCJHYW1lVG9vbHMiLCJHYW1lVWlUb29scyIsIkdhbWVDb25maWciLCJBbmltTGF5ZXJUb29sIiwiR2FtZVNjZW5lIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsYXllckJhY2siLCJTcHJpdGUiLCJiYWNrQnV0dG9uIiwiTm9kZSIsImNhcmROdW1iZXJUVEYiLCJMYWJlbCIsImJlc3RTY29yZVRURiIsInByb2dyZXNzQmFyIiwicGFzc051bVRURiIsInByb3BNZW51IiwiY3VycmVudFNjb3JlIiwiaXNBZGRTY29yZSIsImdhbWVMb2dpY0xheWVyIiwiY3RvciIsInBsYXlCYWNrZ3JvdW5kTXVzaWMiLCJvbkxvYWQiLCJHYW1lTG9naWMiLCJhZGRDaGlsZCIsInNjb3JlMCIsInN0cmluZyIsImdldEdhbWVQYXNzU2NvcmUiLCJnZXRHYW1lUGFzc051bSIsInNldEJ1dHRvbkNsaWNrRXZlbnRzIiwic3RhcnQiLCJiYWNrQnV0dG9uRnVuYyIsImV2ZW50IiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwibG9hZGluZ1Jlc291cmNlIiwiZnVuY3Rpb25NZW51VG91Y2hGdW5jIiwiYnV0dG9uIiwidGFyZ2V0IiwiZ2V0R2FtZVByb3BOdW1iZXIiLCJwcm9wc01lbnUiLCJQcm9wc01lbnUiLCJQcm9wc01lbnVEZXN0cm95Q2FyZCIsInNob3dHYW1lUHJvcEhlbHAiLCJQcm9wc01lbnVTcGFjZSIsIlByb3BzTWVudVJlbW92ZUFjcm9zcyIsIlByb3BzTWVudUV4Y2hhbmdlQ2FyZCIsInByb3BUeXBlIiwibG9hZGVyIiwibG9hZFJlcyIsImVyciIsInByZWZhYiIsIm5vZGUiLCJpbnN0YW50aWF0ZSIsImdldENvbXBvbmVudCIsInNldFByb3BUeXBlIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImNoaWxkcmVuIiwic2V0R2FtZVByb3BOdW1iZXIiLCJzZXRTY29yZSIsInNjb3JlIiwiaGVpZ2h0U2NvcmUiLCJzY2FsZVgiLCJ1cGRhdGUiLCJkdCIsInNldFBhc3NOdW0iLCJzdG9wQmFja2dyb3VuZE11c2ljIiwibG9hZGluZ1NjZW5lVHlwZSIsIkxvYWRpbmdTY2VuZVR5cGUiLCJMb2FkaW5nU2NlbmVCYWNrR2FtZSIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDeEMsSUFBSUMsUUFBUSxHQUFHRCxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ2xDLElBQUlFLFNBQVMsR0FBR0YsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUNwQyxJQUFJRyxXQUFXLEdBQUdILE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDeEMsSUFBSUksVUFBVSxHQUFHSixPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3RDLElBQUlLLGFBQWEsR0FBR0wsT0FBTyxDQUFDLGVBQWUsQ0FBQztBQUM1QyxJQUFJTSxTQUFTLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ3JCLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUNyQkMsVUFBVSxFQUFFO0lBQ1JDLFNBQVMsRUFBRUosRUFBRSxDQUFDSyxNQUFNO0lBQ3BCQyxVQUFVLEVBQUVOLEVBQUUsQ0FBQ08sSUFBSTtJQUFFO0lBQ3JCQyxhQUFhLEVBQUVSLEVBQUUsQ0FBQ1MsS0FBSztJQUFDO0lBQ3hCQyxZQUFZLEVBQUVWLEVBQUUsQ0FBQ1MsS0FBSztJQUFDO0lBQ3ZCRSxXQUFXLEVBQUVYLEVBQUUsQ0FBQ08sSUFBSTtJQUFDO0lBQ3JCSyxVQUFVLEVBQUVaLEVBQUUsQ0FBQ1MsS0FBSztJQUFDO0lBQ3JCSSxRQUFRLEVBQUUsQ0FBQ2IsRUFBRSxDQUFDTyxJQUFJLENBQUM7SUFBQzs7SUFFcEJPLFlBQVksRUFBRSxDQUFDO0lBQUM7SUFDaEJDLFVBQVUsRUFBRSxLQUFLO0lBQUM7O0lBRWxC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USxDQUFDZSxTQUFTLENBQUMsY0FBYyxDQUFDO0VBQ3pDLENBQUMsQ0FBQztFQUNOO0FBQ0EsQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZVBvcFN0YXIgPSByZXF1aXJlKFwiR2FtZVBvcFN0YXJcIik7XHJcbnZhciBHYW1lRGF0YSA9IHJlcXVpcmUoXCJHYW1lRGF0YVwiKTtcclxudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XHJcbnZhciBHYW1lVWlUb29scyA9IHJlcXVpcmUoXCJHYW1lVWlUb29sc1wiKTtcclxudmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcclxudmFyIEFuaW1MYXllclRvb2wgPSByZXF1aXJlKFwiQW5pbUxheWVyVG9vbFwiKTtcclxudmFyIEdhbWVTY2VuZSA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYXllckJhY2s6IGNjLlNwcml0ZSxcclxuICAgICAgICBiYWNrQnV0dG9uOiBjYy5Ob2RlLCAvL+i/lOWbnuaMiemSrlxyXG4gICAgICAgIGNhcmROdW1iZXJUVEY6IGNjLkxhYmVsLC8vIOaYvuekuuWIhuaVsOaOp+S7tlxyXG4gICAgICAgIGJlc3RTY29yZVRURjogY2MuTGFiZWwsLy8g5pi+56S65pyA6auY5YiG5pWw5o6n5Lu2XHJcbiAgICAgICAgcHJvZ3Jlc3NCYXI6IGNjLk5vZGUsLy/ov5vluqbmnaFcclxuICAgICAgICBwYXNzTnVtVFRGOiBjYy5MYWJlbCwvL+WFs+aVsFxyXG4gICAgICAgIHByb3BNZW51OiBbY2MuTm9kZV0sLy/pgZPlhbfmjInpkq5cclxuXHJcbiAgICAgICAgY3VycmVudFNjb3JlOiAwLC8v5b2T5YmN5b6X5YiGXHJcbiAgICAgICAgaXNBZGRTY29yZTogZmFsc2UsLy/mmK/lkKbliqDliIZcclxuXHJcbiAgICAgICAgZ2FtZUxvZ2ljTGF5ZXI6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgY3RvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIEdhbWVDb25maWcuR2FtZVNjZW5lID0gdGhpcztcclxuICAgICAgICBHYW1lVG9vbHMucGxheUJhY2tncm91bmRNdXNpYygpO1xyXG4gICAgfSxcclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIEdhbWVDb25maWcuR2FtZUxvZ2ljID0gbmV3IEdhbWVQb3BTdGFyKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lTG9naWNMYXllci5hZGRDaGlsZChHYW1lQ29uZmlnLkdhbWVMb2dpYyk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFNjb3JlID0gR2FtZURhdGEuc2NvcmUwO1xyXG4gICAgICAgIHRoaXMuY2FyZE51bWJlclRURi5zdHJpbmcgPSBHYW1lRGF0YS5zY29yZTA7XHJcbiAgICAgICAgdGhpcy5iZXN0U2NvcmVUVEYuc3RyaW5nID0gR2FtZURhdGEuZ2V0R2FtZVBhc3NTY29yZSgpO1xyXG4gICAgICAgIHRoaXMucGFzc051bVRURi5zdHJpbmcgPSBcIuesrCBcIiArIEdhbWVEYXRhLmdldEdhbWVQYXNzTnVtKCkgKyBcIiDlhbNcIjtcclxuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLmJhY2tCdXR0b24sIFwiYmFja0J1dHRvbkZ1bmNcIik7XHJcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5wcm9wTWVudSwgXCJmdW5jdGlvbk1lbnVUb3VjaEZ1bmNcIik7XHJcbiAgICB9LFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9LFxyXG4gICAgYmFja0J1dHRvbkZ1bmM6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nUmVzb3VyY2UoKTtcclxuICAgIH0sXHJcbiAgICBmdW5jdGlvbk1lbnVUb3VjaEZ1bmM6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBpZiAodGhpcy5wcm9wTWVudVswXSA9PSBidXR0b24pIHtcclxuICAgICAgICAgICAgaWYgKEdhbWVEYXRhLmdldEdhbWVQcm9wTnVtYmVyKDApID49IDEpIHtcclxuICAgICAgICAgICAgICAgIEdhbWVDb25maWcucHJvcHNNZW51ID0gR2FtZUNvbmZpZy5Qcm9wc01lbnUuUHJvcHNNZW51RGVzdHJveUNhcmQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dHYW1lUHJvcEhlbHAoMCk7XHJcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLnByb3BzTWVudSA9IEdhbWVDb25maWcuUHJvcHNNZW51LlByb3BzTWVudVNwYWNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BNZW51WzFdID09IGJ1dHRvbikge1xyXG4gICAgICAgICAgICBpZiAoR2FtZURhdGEuZ2V0R2FtZVByb3BOdW1iZXIoMSkgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5wcm9wc01lbnUgPSBHYW1lQ29uZmlnLlByb3BzTWVudS5Qcm9wc01lbnVSZW1vdmVBY3Jvc3M7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dHYW1lUHJvcEhlbHAoMSk7XHJcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLnByb3BzTWVudSA9IEdhbWVDb25maWcuUHJvcHNNZW51LlByb3BzTWVudVNwYWNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BNZW51WzJdID09IGJ1dHRvbikge1xyXG4gICAgICAgICAgICBpZiAoR2FtZURhdGEuZ2V0R2FtZVByb3BOdW1iZXIoMikgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5wcm9wc01lbnUgPSBHYW1lQ29uZmlnLlByb3BzTWVudS5Qcm9wc01lbnVFeGNoYW5nZUNhcmQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dHYW1lUHJvcEhlbHAoMik7XHJcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLnByb3BzTWVudSA9IEdhbWVDb25maWcuUHJvcHNNZW51LlByb3BzTWVudVNwYWNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgR2FtZUNvbmZpZy5wcm9wc01lbnUgPSBHYW1lQ29uZmlnLlByb3BzTWVudS5Qcm9wc01lbnVTcGFjZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd0dhbWVQcm9wSGVscChwcm9wVHlwZSkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwicGFuZWwvR2FtZVByb3BIZWxwXCIsIChlcnIsIHByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFwiR2FtZVByb3BIZWxwXCIpLnNldFByb3BUeXBlKHByb3BUeXBlKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5jaGlsZHJlblswXS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZXRHYW1lUHJvcE51bWJlcihwcm9wVHlwZSkge1xyXG4gICAgICAgIHRoaXMucHJvcE1lbnVbcHJvcFR5cGVdLmdldENvbXBvbmVudChcIkdhbWVQcm9wTm9kZVwiKS5zZXRQcm9wVHlwZSgpO1xyXG4gICAgfSxcclxuICAgIHNldFNjb3JlOiBmdW5jdGlvbiAoc2NvcmUpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2NvcmUgPiBzY29yZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY29yZSA9IHNjb3JlO1xyXG4gICAgICAgICAgICB0aGlzLmNhcmROdW1iZXJUVEYuc3RyaW5nID0gdGhpcy5jdXJyZW50U2NvcmU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc0FkZFNjb3JlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNjb3JlID4gR2FtZURhdGEuaGVpZ2h0U2NvcmUpIHtcclxuICAgICAgICAgICAgR2FtZURhdGEuaGVpZ2h0U2NvcmUgPSBzY29yZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuc2NhbGVYID0gc2NvcmUgLyAoR2FtZURhdGEuZ2V0R2FtZVBhc3NTY29yZSgpKSAqIDAuODtcclxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0Jhci5zY2FsZVggPiAwLjkpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zY2FsZVggPSAwLjk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBZGRTY29yZSAmJiB0aGlzLmN1cnJlbnRTY29yZSA8PSBHYW1lRGF0YS5zY29yZTApIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJkTnVtYmVyVFRGLnN0cmluZyA9IHRoaXMuY3VycmVudFNjb3JlKys7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjb3JlKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc0FkZFNjb3JlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldFBhc3NOdW0oKSB7XHJcbiAgICAgICAgdGhpcy5wYXNzTnVtVFRGLnN0cmluZyA9IFwi56ysIFwiICsgR2FtZURhdGEuZ2V0R2FtZVBhc3NOdW0oKSArIFwiIOWFs1wiO1xyXG4gICAgICAgIHRoaXMuYmVzdFNjb3JlVFRGLnN0cmluZyA9IEdhbWVEYXRhLmdldEdhbWVQYXNzU2NvcmUoKTtcclxuICAgIH0sXHJcbiAgICBsb2FkaW5nUmVzb3VyY2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBHYW1lVG9vbHMuc3RvcEJhY2tncm91bmRNdXNpYygpO1xyXG4gICAgICAgIEdhbWVDb25maWcubG9hZGluZ1NjZW5lVHlwZSA9IEdhbWVDb25maWcuTG9hZGluZ1NjZW5lVHlwZS5Mb2FkaW5nU2NlbmVCYWNrR2FtZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJMb2FkaW5nU2NlbmVcIik7XHJcbiAgICB9LC8v54m55Lu3OS455YWD5LiA5aWXY29jb3NjcmVhdG9y5Luj56CB6IGU57O7UTI0ODMzNjcwODQgXHJcbi8v5oiq5Zu+IOmTvuaOpe+8mmh0dHBzOi8vc2hhcmUud2VpeXVuLmNvbS9sZUdBSHBuQiDlr4bnoIHvvJpiOXVkdHZcclxufSk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '415acQw6oNBeo2WRVLPUaoS', 'GameTools');
// Script/GameTools.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = {
  love2048FrameCache: null,
  numberLabelAtlas: null,
  backMusicIsPlay: null,
  playSimpleAudioEngine: function playSimpleAudioEngine(engineType) {
    if (GameConfig.IS_GAME_MUSIC) {
      switch (engineType) {
        case 0:
          cc.audioEngine.play(cc.url.raw('resources/sounds/pop_star.mp3'), false, 0.5);
          break;
        case 1:
          cc.audioEngine.play(cc.url.raw('resources/sounds/select.mp3'), false, 0.5);
          break;
        case 2:
          cc.audioEngine.play(cc.url.raw("resources/sounds/landing.mp3"), false, 0.5);
          break;
        case 3:
          cc.audioEngine.play(cc.url.raw("resources/sounds/cheers.mp3"), false, 0.5);
          break;
        default:
          break;
      }
    }
  },
  playBackgroundMusic: function playBackgroundMusic() {
    if (GameConfig.IS_GAME_MUSIC) {
      if (GameTools.backMusicIsPlay == null) {
        GameTools.backMusicIsPlay = cc.audioEngine.play(cc.url.raw('resources/sounds/backMusic.mp3'), true, 0.5);
      }
    }
  },
  stopBackgroundMusic: function stopBackgroundMusic() {
    if (GameTools.backMusicIsPlay != null) {
      cc.audioEngine.stop(GameTools.backMusicIsPlay);
      GameTools.backMusicIsPlay = null;
    }
  },
  getItemByLocalStorage: function getItemByLocalStorage(key, value) {
    var values = cc.sys.localStorage.getItem(key);
    if (values === undefined || values === null || values === '') {
      cc.sys.localStorage.setItem(key, value);
      return value;
    }
    if (typeof value === 'boolean') {
      if (typeof values === 'boolean') {
        return values;
      }
      return "true" == values;
    } else if (typeof value === 'number') {
      return Number(values);
    }
    return values;
  },
  setItemByLocalStorage: function setItemByLocalStorage(key, value) {
    cc.sys.localStorage.setItem(key, value);
  },
  toastMessage: function toastMessage(toastType) {
    cc.loader.loadRes("panel/ShowMessage", function (err, prefab) {
      if (!err) {
        var node = cc.instantiate(prefab);
        node.getComponent(cc.Component).toastType = toastType;
        cc.director.getScene().children[0].addChild(node);
        // cc.director.getScene().getChildByName('Canvas').addChild(node);
      }
    });
  },
  sharePicture: function sharePicture(pictureName) {
    var titleStr = '来跟我一起挑战浪漫2048吧。';
    if ("shareTicket" == pictureName) {
      titleStr = "看看你在群里排第几？来和我挑战浪漫2048吧。";
    } else if ("LotteryLayer" == pictureName) {
      //抽奖页面分享
      titleStr = "浪漫2048福利大放送！快进来抽奖吧！";
    } else if (pictureName != undefined && pictureName != null) {
      titleStr = "我得了" + pictureName + "分," + titleStr;
    }
    if (CC_WECHATGAME) {
      window.wx.shareAppMessage({
        title: titleStr,
        query: "x=" + GameConfig.MAIN_MENU_NUM,
        imageUrl: canvas.toTempFilePathSync({
          destWidth: 500,
          destHeight: 400
        }),
        success: function success(res) {
          if (res.shareTickets != undefined && res.shareTickets.length > 0) {
            if ("shareTicket" == pictureName) {
              window.wx.postMessage({
                messageType: 5,
                MAIN_MENU_NUM: GameConfig.MAIN_MENU_NUM == -1000 ? 1 : GameConfig.MAIN_MENU_NUM,
                shareTicket: res.shareTickets[0]
              });
            }
          }
        }
      });
    } else {
      cc.log("执行了截图" + titleStr);
    }
  },
  getGameIntegral: function getGameIntegral() {
    //获取积分
    return this.getItemByLocalStorage("GameIntegral", 0);
  },
  setGameIntegral: function setGameIntegral(intrgral) {
    // 设置积分
    cc.sys.localStorage.setItem("GameIntegral", intrgral);
  },
  commentGame: function commentGame() {
    //评论
    if (CC_WECHATGAME) {
      window.wx.openCustomerServiceConversation({});
    } else {
      this.toastMessage(1);
      cc.log("执行了评论");
    }
  },
  checkFirstLoginGame: function checkFirstLoginGame() {
    var _this = this;
    //检查是否首次登录
    var loginDate = Math.floor((new Date().getTime() - new Date(2018, 3, 18, 0, 0, 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    if (loginDate > this.getItemByLocalStorage("FirstEnterGameDate", 0)) {
      cc.sys.localStorage.setItem("FirstEnterGameDate", loginDate);
      setTimeout(function () {
        _this.setGameIntegral(_this.getGameIntegral() + 100);
        _this.toastMessage(9);
      }, 1500);
    }
  },
  setCardBackPath: function setCardBackPath(num)
  //设置卡片背景路径
  {
    //GameConfig.setCardBackPath(num, "card/nl2048.png");
  },
  userLogin: function userLogin() {//用户登录
  },
  getRankData: function getRankData(shareTicket) {
    //获取排行榜
    cc.loader.loadRes("panel/RankingListView", function (err, prefab) {
      if (!err) {
        var node = cc.instantiate(prefab);
        if (shareTicket != undefined) {
          node.getComponent(cc.Component).shareTicket = shareTicket;
        }
        // node.setPosition(cc.p(0, 0));
        cc.director.getScene().children[0].addChild(node);
      }
    });
  },
  removeRankData: function removeRankData() {
    //移除排行榜数据
    if (CC_WECHATGAME) {
      window.wx.postMessage({
        messageType: 0
      });
    } else {
      cc.log("移除排行榜数据。");
    }
  },
  submitScore: function submitScore(score) {
    //提交得分
    if (CC_WECHATGAME) {
      window.wx.postMessage({
        messageType: 3,
        MAIN_MENU_NUM: GameConfig.MAIN_MENU_NUM,
        score: score
      });
    } else {
      cc.log("提交得分:" + GameConfig.MAIN_MENU_NUM + " : " + score);
    }
  },
  getSelectAddNum: function getSelectAddNum(num)
  //获取叠加数
  {
    if (num < 4) {
      num = 2;
    } else if (num < 8) {
      num = 4;
    } else if (num < 16) {
      num = 8;
    } else if (num < 32) {
      num = 16;
    } else if (num < 64) {
      num = 32;
    } else if (num < 128) {
      num = 64;
    } else if (num < 256) {
      num = 128;
    } else if (num < 512) {
      num = 256;
    } else if (num < 1024) {
      num = 512;
    } else if (num < 2048) {
      num = 1024;
    } else if (num < 4096) {
      num = 2048;
    } else if (num < 8192) {
      num = 4096;
    } else if (num < 16384) {
      num = 8192;
    } else if (num < 32768) {
      num = 16384;
    } else if (num < 65536) {
      num = 32768;
    } else if (num < 131072) {
      num = 65536;
    } else {
      num = 131072;
    }
    return num;
  }
};
module.exports = GameTools;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lVG9vbHMuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVG9vbHMiLCJsb3ZlMjA0OEZyYW1lQ2FjaGUiLCJudW1iZXJMYWJlbEF0bGFzIiwiYmFja011c2ljSXNQbGF5IiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwiZW5naW5lVHlwZSIsIklTX0dBTUVfTVVTSUMiLCJjYyIsImF1ZGlvRW5naW5lIiwicGxheSIsInVybCIsInJhdyIsInBsYXlCYWNrZ3JvdW5kTXVzaWMiLCJzdG9wQmFja2dyb3VuZE11c2ljIiwic3RvcCIsImdldEl0ZW1CeUxvY2FsU3RvcmFnZSIsImtleSIsInZhbHVlIiwidmFsdWVzIiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCIsInNldEl0ZW0iLCJOdW1iZXIiLCJzZXRJdGVtQnlMb2NhbFN0b3JhZ2UiLCJ0b2FzdE1lc3NhZ2UiLCJ0b2FzdFR5cGUiLCJsb2FkZXIiLCJsb2FkUmVzIiwiZXJyIiwicHJlZmFiIiwibm9kZSIsImluc3RhbnRpYXRlIiwiZ2V0Q29tcG9uZW50IiwiQ29tcG9uZW50IiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImNoaWxkcmVuIiwiYWRkQ2hpbGQiLCJzaGFyZVBpY3R1cmUiLCJwaWN0dXJlTmFtZSIsInRpdGxlU3RyIiwiQ0NfV0VDSEFUR0FNRSIsIndpbmRvdyIsInd4Iiwic2hhcmVBcHBNZXNzYWdlIiwidGl0bGUiLCJxdWVyeSIsIk1BSU5fTUVOVV9OVU0iLCJpbWFnZVVybCIsImNhbnZhcyIsInRvVGVtcEZpbGVQYXRoU3luYyIsImRlc3RXaWR0aCIsImRlc3RIZWlnaHQiLCJzdWNjZXNzIiwicmVzIiwic2hhcmVUaWNrZXRzIiwibGVuZ3RoIiwicG9zdE1lc3NhZ2UiLCJtZXNzYWdlVHlwZSIsInNoYXJlVGlja2V0IiwibG9nIiwiZ2V0R2FtZUludGVncmFsIiwic2V0R2FtZUludGVncmFsIiwiaW50cmdyYWwiLCJjb21tZW50R2FtZSIsIm9wZW5DdXN0b21lclNlcnZpY2VDb252ZXJzYXRpb24iLCJjaGVja0ZpcnN0TG9naW5HYW1lIiwiX3RoaXMiLCJsb2dpbkRhdGUiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwiZ2V0VGltZSIsInNldFRpbWVvdXQiLCJzZXRDYXJkQmFja1BhdGgiLCJudW0iLCJ1c2VyTG9naW4iLCJnZXRSYW5rRGF0YSIsInJlbW92ZVJhbmtEYXRhIiwic3VibWl0U2NvcmUiLCJzY29yZSIsImdldFNlbGVjdEFkZE51bSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3RDLElBQUlDLFNBQVMsR0FBRztFQUNaQyxrQkFBa0IsRUFBRSxJQUFJO0VBQ3hCQyxnQkFBZ0IsRUFBRSxJQUFJO0VBQ3RCQyxlQUFlLEVBQUUsSUFBSTtFQUNyQkMscUJBQXFCLEVBQUUsU0FBQUEsc0JBQVVDLFVBQVUsRUFBRTtJQUN6QyxJQUFJUCxVQUFVLENBQUNRLGFBQWEsRUFBRTtNQUMxQixRQUFRRCxVQUFVO1FBQ2QsS0FBSyxDQUFDO1VBQ0ZFLEVBQUUsQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJLENBQUNGLEVBQUUsQ0FBQ0csR0FBRyxDQUFDQyxHQUFHLENBQUMsK0JBQStCLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDO1VBQzVFO1FBQ0osS0FBSyxDQUFDO1VBQ0ZKLEVBQUUsQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJLENBQUNGLEVBQUUsQ0FBQ0csR0FBRyxDQUFDQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDO1VBQzFFO1FBQ0osS0FBSyxDQUFDO1VBQ0ZKLEVBQUUsQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJLENBQUNGLEVBQUUsQ0FBQ0csR0FBRyxDQUFDQyxHQUFHLENBQUMsOEJBQThCLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxD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LENBQUMsTUFBTSxJQUFJQSxHQUFHLEdBQUcsSUFBSSxFQUFFO01BQ25CQSxHQUFHLEdBQUcsSUFBSTtJQUNkLENBQUMsTUFBTSxJQUFJQSxHQUFHLEdBQUcsSUFBSSxFQUFFO01BQ25CQSxHQUFHLEdBQUcsSUFBSTtJQUNkLENBQUMsTUFBTSxJQUFJQSxHQUFHLEdBQUcsSUFBSSxFQUFFO01BQ25CQSxHQUFHLEdBQUcsSUFBSTtJQUNkLENBQUMsTUFBTSxJQUFJQSxHQUFHLEdBQUcsS0FBSyxFQUFFO01BQ3BCQSxHQUFHLEdBQUcsSUFBSTtJQUNkLENBQUMsTUFBTSxJQUFJQSxHQUFHLEdBQUcsS0FBSyxFQUFFO01BQ3BCQSxHQUFHLEdBQUcsS0FBSztJQUNmLENBQUMsTUFBTSxJQUFJQSxHQUFHLEdBQUcsS0FBSyxFQUFFO01BQ3BCQSxHQUFHLEdBQUcsS0FBSztJQUNmLENBQUMsTUFBTSxJQUFJQSxHQUFHLEdBQUcsTUFBTSxFQUFFO01BQ3JCQSxHQUFHLEdBQUcsS0FBSztJQUNmLENBQUMsTUFBTTtNQUNIQSxHQUFHLEdBQUcsTUFBTTtJQUNoQjtJQUNBLE9BQU9BLEdBQUc7RUFDZDtBQUNKLENBQUM7QUFFRE8sTUFBTSxDQUFDQyxPQUFPLEdBQUdyRixTQUFTIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xyXG52YXIgR2FtZVRvb2xzID0ge1xyXG4gICAgbG92ZTIwNDhGcmFtZUNhY2hlOiBudWxsLFxyXG4gICAgbnVtYmVyTGFiZWxBdGxhczogbnVsbCxcclxuICAgIGJhY2tNdXNpY0lzUGxheTogbnVsbCxcclxuICAgIHBsYXlTaW1wbGVBdWRpb0VuZ2luZTogZnVuY3Rpb24gKGVuZ2luZVR5cGUpIHtcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5JU19HQU1FX01VU0lDKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZW5naW5lVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkoY2MudXJsLnJhdygncmVzb3VyY2VzL3NvdW5kcy9wb3Bfc3Rhci5tcDMnKSwgZmFsc2UsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjYy51cmwucmF3KCdyZXNvdXJjZXMvc291bmRzL3NlbGVjdC5tcDMnKSwgZmFsc2UsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjYy51cmwucmF3KFwicmVzb3VyY2VzL3NvdW5kcy9sYW5kaW5nLm1wM1wiKSwgZmFsc2UsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjYy51cmwucmF3KFwicmVzb3VyY2VzL3NvdW5kcy9jaGVlcnMubXAzXCIpLCBmYWxzZSwgMC41KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGxheUJhY2tncm91bmRNdXNpYzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLklTX0dBTUVfTVVTSUMpIHtcclxuICAgICAgICAgICAgaWYgKEdhbWVUb29scy5iYWNrTXVzaWNJc1BsYXkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgR2FtZVRvb2xzLmJhY2tNdXNpY0lzUGxheSA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoY2MudXJsLnJhdygncmVzb3VyY2VzL3NvdW5kcy9iYWNrTXVzaWMubXAzJyksIHRydWUsIDAuNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3RvcEJhY2tncm91bmRNdXNpYzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChHYW1lVG9vbHMuYmFja011c2ljSXNQbGF5ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChHYW1lVG9vbHMuYmFja011c2ljSXNQbGF5KTtcclxuICAgICAgICAgICAgR2FtZVRvb2xzLmJhY2tNdXNpY0lzUGxheSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldEl0ZW1CeUxvY2FsU3RvcmFnZTogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBsZXQgdmFsdWVzID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgaWYgKHZhbHVlcyA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlcyA9PT0gbnVsbCB8fCB2YWx1ZXMgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZXMgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gXCJ0cnVlXCIgPT0gdmFsdWVzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgICB9LFxyXG4gICAgc2V0SXRlbUJ5TG9jYWxTdG9yYWdlOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcclxuICAgIH0sXHJcbiAgICB0b2FzdE1lc3NhZ2UodG9hc3RUeXBlKSB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJwYW5lbC9TaG93TWVzc2FnZVwiLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkNvbXBvbmVudCkudG9hc3RUeXBlID0gdG9hc3RUeXBlO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5jaGlsZHJlblswXS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoJ0NhbnZhcycpLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAsIHNoYXJlUGljdHVyZShwaWN0dXJlTmFtZSkge1xyXG4gICAgICAgIGxldCB0aXRsZVN0ciA9ICfmnaXot5/miJHkuIDotbfmjJHmiJjmtarmvKsyMDQ45ZCn44CCJztcclxuICAgICAgICBpZiAoXCJzaGFyZVRpY2tldFwiID09IHBpY3R1cmVOYW1lKSB7XHJcbiAgICAgICAgICAgIHRpdGxlU3RyID0gXCLnnIvnnIvkvaDlnKjnvqTph4zmjpLnrKzlh6DvvJ/mnaXlkozmiJHmjJHmiJjmtarmvKsyMDQ45ZCn44CCXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcIkxvdHRlcnlMYXllclwiID09IHBpY3R1cmVOYW1lKSB7Ly/mir3lpZbpobXpnaLliIbkuqtcclxuICAgICAgICAgICAgdGl0bGVTdHIgPSBcIua1qua8qzIwNDjnpo/liKnlpKfmlL7pgIHvvIHlv6vov5vmnaXmir3lpZblkKfvvIFcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHBpY3R1cmVOYW1lICE9IHVuZGVmaW5lZCAmJiBwaWN0dXJlTmFtZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRpdGxlU3RyID0gXCLmiJHlvpfkuoZcIiArIHBpY3R1cmVOYW1lICsgXCLliIYsXCIgKyB0aXRsZVN0cjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKENDX1dFQ0hBVEdBTUUpIHtcclxuICAgICAgICAgICAgd2luZG93Lnd4LnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGVTdHIsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogXCJ4PVwiICsgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6IGNhbnZhcy50b1RlbXBGaWxlUGF0aFN5bmMoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RXaWR0aDogNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RIZWlnaHQ6IDQwMFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5zaGFyZVRpY2tldHMgIT0gdW5kZWZpbmVkICYmIHJlcy5zaGFyZVRpY2tldHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJzaGFyZVRpY2tldFwiID09IHBpY3R1cmVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cud3gucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1BSU5fTUVOVV9OVU06IEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSA9PSAtMTAwMCA/IDEgOiBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVUaWNrZXQ6IHJlcy5zaGFyZVRpY2tldHNbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCLmiafooYzkuobmiKrlm75cIiArIHRpdGxlU3RyKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0R2FtZUludGVncmFsKCkgeyAvL+iOt+WPluenr+WIhlxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcIkdhbWVJbnRlZ3JhbFwiLCAwKTtcclxuICAgIH0sXHJcbiAgICBzZXRHYW1lSW50ZWdyYWwoaW50cmdyYWwpIHsgLy8g6K6+572u56ev5YiGXHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiR2FtZUludGVncmFsXCIsIGludHJncmFsKTtcclxuICAgIH1cclxuICAgICwgY29tbWVudEdhbWUoKSB7IC8v6K+E6K66XHJcbiAgICAgICAgaWYgKENDX1dFQ0hBVEdBTUUpIHtcclxuICAgICAgICAgICAgd2luZG93Lnd4Lm9wZW5DdXN0b21lclNlcnZpY2VDb252ZXJzYXRpb24oe30pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9hc3RNZXNzYWdlKDEpO1xyXG4gICAgICAgICAgICBjYy5sb2coXCLmiafooYzkuobor4TorrpcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAsIGNoZWNrRmlyc3RMb2dpbkdhbWUoKSB7IC8v5qOA5p+l5piv5ZCm6aaW5qyh55m75b2VXHJcbiAgICAgICAgbGV0IGxvZ2luRGF0ZSA9IE1hdGguZmxvb3IoKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbmV3IERhdGUoMjAxOCwgMywgMTgsIDAsIDAsIDAsIDApLmdldFRpbWUoKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgICAgIGlmIChsb2dpbkRhdGUgPiB0aGlzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcIkZpcnN0RW50ZXJHYW1lRGF0ZVwiLCAwKSkge1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJGaXJzdEVudGVyR2FtZURhdGVcIiwgbG9naW5EYXRlKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEdhbWVJbnRlZ3JhbCh0aGlzLmdldEdhbWVJbnRlZ3JhbCgpICsgMTAwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9hc3RNZXNzYWdlKDkpO1xyXG4gICAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLCBzZXRDYXJkQmFja1BhdGgobnVtKS8v6K6+572u5Y2h54mH6IOM5pmv6Lev5b6EXHJcbiAgICB7XHJcbiAgICAgICAgLy9HYW1lQ29uZmlnLnNldENhcmRCYWNrUGF0aChudW0sIFwiY2FyZC9ubDIwNDgucG5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgICwgdXNlckxvZ2luKCkgeyAvL+eUqOaIt+eZu+W9lVxyXG4gICAgfVxyXG5cclxuICAgICwgZ2V0UmFua0RhdGEoc2hhcmVUaWNrZXQpIHsgLy/ojrflj5bmjpLooYzmppxcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInBhbmVsL1JhbmtpbmdMaXN0Vmlld1wiLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGlmIChzaGFyZVRpY2tldCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5Db21wb25lbnQpLnNoYXJlVGlja2V0ID0gc2hhcmVUaWNrZXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBub2RlLnNldFBvc2l0aW9uKGNjLnAoMCwgMCkpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5jaGlsZHJlblswXS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLCByZW1vdmVSYW5rRGF0YSgpIHsvL+enu+mZpOaOkuihjOamnOaVsOaNrlxyXG4gICAgICAgIGlmIChDQ19XRUNIQVRHQU1FKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy53eC5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlVHlwZTogMCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKFwi56e76Zmk5o6S6KGM5qac5pWw5o2u44CCXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICwgc3VibWl0U2NvcmUoc2NvcmUpIHsgLy/mj5DkuqTlvpfliIZcclxuICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xyXG4gICAgICAgICAgICB3aW5kb3cud3gucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVR5cGU6IDMsXHJcbiAgICAgICAgICAgICAgICBNQUlOX01FTlVfTlVNOiBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0sXHJcbiAgICAgICAgICAgICAgICBzY29yZTogc2NvcmUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuaPkOS6pOW+l+WIhjpcIiArIEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSArIFwiIDogXCIgKyBzY29yZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLCBnZXRTZWxlY3RBZGROdW0obnVtKSAvL+iOt+WPluWPoOWKoOaVsFxyXG4gICAge1xyXG4gICAgICAgIGlmIChudW0gPCA0KSB7XHJcbiAgICAgICAgICAgIG51bSA9IDI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPCA4KSB7XHJcbiAgICAgICAgICAgIG51bSA9IDQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPCAxNikge1xyXG4gICAgICAgICAgICBudW0gPSA4O1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtIDwgMzIpIHtcclxuICAgICAgICAgICAgbnVtID0gMTY7XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPCA2NCkge1xyXG4gICAgICAgICAgICBudW0gPSAzMjtcclxuICAgICAgICB9IGVsc2UgaWYgKG51bSA8IDEyOCkge1xyXG4gICAgICAgICAgICBudW0gPSA2NDtcclxuICAgICAgICB9IGVsc2UgaWYgKG51bSA8IDI1Nikge1xyXG4gICAgICAgICAgICBudW0gPSAxMjg7XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPCA1MTIpIHtcclxuICAgICAgICAgICAgbnVtID0gMjU2O1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtIDwgMTAyNCkge1xyXG4gICAgICAgICAgICBudW0gPSA1MTI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPCAyMDQ4KSB7XHJcbiAgICAgICAgICAgIG51bSA9IDEwMjQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPCA0MDk2KSB7XHJcbiAgICAgICAgICAgIG51bSA9IDIwNDg7XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPCA4MTkyKSB7XHJcbiAgICAgICAgICAgIG51bSA9IDQwOTY7XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPCAxNjM4NCkge1xyXG4gICAgICAgICAgICBudW0gPSA4MTkyO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtIDwgMzI3NjgpIHtcclxuICAgICAgICAgICAgbnVtID0gMTYzODQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPCA2NTUzNikge1xyXG4gICAgICAgICAgICBudW0gPSAzMjc2ODtcclxuICAgICAgICB9IGVsc2UgaWYgKG51bSA8IDEzMTA3Mikge1xyXG4gICAgICAgICAgICBudW0gPSA2NTUzNjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBudW0gPSAxMzEwNzI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW07XHJcbiAgICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVUb29sczsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MenuUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dc0a4JWaxJFIaO1kQkeJ3If', 'MenuUI');
// Script/MenuUI.js

"use strict";

var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
var GameConfig = require("GameConfig");
var GameData = require("GameData");
var AnimLayerTool = require("AnimLayerTool");
cc.Class({
  "extends": cc.Component,
  properties: {
    layerBack: cc.Node,
    startGameButton: cc.Node,
    musicButton: cc.Node,
    bestScoreLabel: cc.Label,
    gameIntegral: cc.Label,
    helpButton: cc.Node //帮助按钮
  },
  onLoad: function onLoad() {
    GameUiTools.setButtonClickEvents(this, this.startGameButton, "startGameButtonFunc");
    GameUiTools.setButtonClickEvents(this, this.musicButton, "musicButtonFunc");
    GameUiTools.setButtonClickEvents(this, this.helpButton, "helpButtonFunc");
    if (!GameConfig.IS_GAME_MUSIC) {
      GameUiTools.getSpriteFrame("pop_main/popmain_78", this.musicButton.getComponent(cc.Sprite));
    }
    this.bestScoreLabel.string = GameData.getHeightScore();
    this.gameIntegral.string = GameTools.getGameIntegral();
  },
  start: function start() {
    if (CC_WECHATGAME) {
      if (GameConfig.GameClubButton != null) {
        GameConfig.GameClubButton.show();
      }
    }
  },
  btnStartAdventureOnClick: function btnStartAdventureOnClick(event, customEventData) {
    GameTools.playSimpleAudioEngine(0);
    this.loadingResource();
  },
  musicButtonFunc: function musicButtonFunc() {
    GameTools.playSimpleAudioEngine(0);
    GameConfig.IS_GAME_MUSIC = !GameConfig.IS_GAME_MUSIC;
    GameTools.setItemByLocalStorage("IS_GAME_MUSIC", GameConfig.IS_GAME_MUSIC);
    if (GameConfig.IS_GAME_MUSIC) {
      GameUiTools.getSpriteFrame("pop_main/popmain_58", this.musicButton.getComponent(cc.Sprite));
    } else {
      GameUiTools.getSpriteFrame("pop_main/popmain_78", this.musicButton.getComponent(cc.Sprite));
    }
  },
  btnStartLevelModeOnClick: function btnStartLevelModeOnClick() {},
  btnSettingOnClick: function btnSettingOnClick() {},
  btnShopOnClick: function btnShopOnClick() {},
  btnDailyRewardOnClick: function btnDailyRewardOnClick() {},
  btnRankOnClick: function btnRankOnClick() {
    GameTools.playSimpleAudioEngine(0);
    GameTools.getRankData();
  },
  rankButtonFunc: function rankButtonFunc(event) {},
  helpButtonFunc: function helpButtonFunc(event) {
    GameTools.playSimpleAudioEngine(0);
    GameUiTools.loadingLayer("panel/GameHelp");
  },
  loadingResource: function loadingResource() {
    // cc.director.loadScene('GameScene');
    GameConfig.CAED_LINES = 10;
    GameConfig.MAIN_MENU_NUM = 11;
    GameConfig.mainMenu = GameConfig.MainMenu.MainMenuNumPopStar;
    GameConfig.CARD_WIDTH = (GameConfig.DEVICE_WIDTH - GameConfig.DEVICE_WIDTH / 10.0) / GameConfig.CAED_LINES;
    GameConfig.loadingSceneType = GameConfig.LoadingSceneType.LoadingSceneEnterGame;
    cc.director.loadScene('LoadingScene');
  },
  onDestroy: function onDestroy() {
    if (CC_WECHATGAME) {
      if (GameConfig.GameClubButton != null) {
        GameConfig.GameClubButton.hide();
      }
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNZW51VUkuanMiXSwibmFtZXMiOlsiR2FtZVRvb2xzIiwicmVxdWlyZSIsIkdhbWVVaVRvb2xzIiwiR2FtZUNvbmZpZyIsIkdhbWVEYXRhIiwiQW5pbUxheWVyVG9vbCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGF5ZXJCYWNrIiwiTm9kZSIsInN0YXJ0R2FtZUJ1dHRvbiIsIm11c2ljQnV0dG9uIiwiYmVzdFNjb3JlTGFiZWwiLCJMYWJlbCIsImdhbWVJbnRlZ3JhbCIsImhlbHBCdXR0b24iLCJvbkxvYWQiLCJzZXRCdXR0b25DbGlja0V2ZW50cyIsIklTX0dBTUVfTVVTSUMiLCJnZXRTcHJpdGVGcmFtZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInN0cmluZyIsImdldEhlaWdodFNjb3JlIiwiZ2V0R2FtZUludGVncmFsIiwic3RhcnQiLCJDQ19XRUNIQVRHQU1FIiwiR2FtZUNsdWJCdXR0b24iLCJzaG93IiwiYnRuU3RhcnRBZHZlbnR1cmVPbkNsaWNrIiwiZXZlbnQiLCJjdXN0b21FdmVudERhdGEiLCJwbGF5U2ltcGxlQXVkaW9FbmdpbmUiLCJsb2FkaW5nUmVzb3VyY2UiLCJtdXNpY0J1dHRvbkZ1bmMiLCJzZXRJdGVtQnlMb2NhbFN0b3JhZ2UiLCJidG5TdGFydExldmVsTW9kZU9uQ2xpY2siLCJidG5TZXR0aW5nT25DbGljayIsImJ0blNob3BPbkNsaWNrIiwiYnRuRGFpbHlSZXdhcmRPbkNsaWNrIiwiYnRuUmFua09uQ2xpY2siLCJnZXRSYW5rRGF0YSIsInJhbmtCdXR0b25GdW5jIiwiaGVscEJ1dHRvbkZ1bmMiLCJsb2FkaW5nTGF5ZXIiLCJDQUVEX0xJTkVTIiwiTUFJTl9NRU5VX05VTSIsIm1haW5NZW51IiwiTWFpbk1lbnUiLCJNYWluTWVudU51bVBvcFN0YXIiLCJDQVJEX1dJRFRIIiwiREVWSUNFX1dJRFRIIiwibG9hZGluZ1NjZW5lVHlwZSIsIkxvYWRpbmdTY2VuZVR5cGUiLCJMb2FkaW5nU2NlbmVFbnRlckdhbWUiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIm9uRGVzdHJveSIsImhpZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDLElBQUlDLFdBQVcsR0FBR0QsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUN4QyxJQUFJRSxVQUFVLEdBQUdGLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDdEMsSUFBSUcsUUFBUSxHQUFHSCxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ2xDLElBQUlJLGFBQWEsR0FBR0osT0FBTyxDQUFDLGVBQWUsQ0FBQztBQUM1Q0ssRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0ssSUFBSTtJQUNsQkMsZUFBZSxFQUFFTixFQUFFLENBQUNLLElBQUk7SUFDeEJFLFdBQVcsRUFBRVAsRUFBRSxDQUFDSyxJQUFJO0lBQ3BCRyxjQUFjLEVBQUVSLEVBQUUsQ0FBQ1MsS0FBSztJQUN4QkMsWUFBWSxFQUFFVixFQUFFLENBQUNTLEtBQUs7SUFDdEJFLFVBQVUsRUFBRVgsRUFBRSxDQUFDSyxJQUFJLENBQUU7RUFDekIsQ0FBQztFQUVETyxNQUFNLFdBQUFBLE9BQUEsRUFBRztJQUNMaEIsV0FBVyxDQUFDaUIsb0JBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQ1AsZUFBZSxFQUFFLHFCQUFxQixDQUFDO0lBQ25GVixXQUFXLENBQUNpQixvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDTixXQUFXLEVBQUUsaUJBQWlCLENBQUM7SUFDM0VYLFdBQVcsQ0FBQ2lCLG9CQUFvQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUNGLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQztJQUN6RSxJQUFJLENBQUNkLFVBQVUsQ0FBQ2lCLGFBQWEsRUFBRTtNQUMzQmxC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RSxDQUFDbUQsUUFBUSxDQUFDQyxTQUFTLENBQUMsY0FBYyxDQUFDO0VBQ3pDLENBQUM7RUFFREMsU0FBUyxXQUFBQSxVQUFBLEVBQUc7SUFDUixJQUFJL0IsYUFBYSxFQUFFO01BQ2YsSUFBSXpCLFVBQVUsQ0FBQzBCLGNBQWMsSUFBSSxJQUFJLEVBQUU7UUFDbkMxQixVQUFVLENBQUMwQixjQUFjLENBQUMrQixJQUFJLEVBQUU7TUFDcEM7SUFDSjtFQUNKO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcclxudmFyIEdhbWVVaVRvb2xzID0gcmVxdWlyZShcIkdhbWVVaVRvb2xzXCIpO1xyXG52YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xyXG52YXIgR2FtZURhdGEgPSByZXF1aXJlKFwiR2FtZURhdGFcIik7XHJcbnZhciBBbmltTGF5ZXJUb29sID0gcmVxdWlyZShcIkFuaW1MYXllclRvb2xcIik7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGF5ZXJCYWNrOiBjYy5Ob2RlLFxyXG4gICAgICAgIHN0YXJ0R2FtZUJ1dHRvbjogY2MuTm9kZSxcclxuICAgICAgICBtdXNpY0J1dHRvbjogY2MuTm9kZSxcclxuICAgICAgICBiZXN0U2NvcmVMYWJlbDogY2MuTGFiZWwsXHJcbiAgICAgICAgZ2FtZUludGVncmFsOiBjYy5MYWJlbCxcclxuICAgICAgICBoZWxwQnV0dG9uOiBjYy5Ob2RlLCAvL+W4ruWKqeaMiemSrlxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5zdGFydEdhbWVCdXR0b24sIFwic3RhcnRHYW1lQnV0dG9uRnVuY1wiKTtcclxuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLm11c2ljQnV0dG9uLCBcIm11c2ljQnV0dG9uRnVuY1wiKTtcclxuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLmhlbHBCdXR0b24sIFwiaGVscEJ1dHRvbkZ1bmNcIik7XHJcbiAgICAgICAgaWYgKCFHYW1lQ29uZmlnLklTX0dBTUVfTVVTSUMpIHtcclxuICAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3BfbWFpbi9wb3BtYWluXzc4XCIsIHRoaXMubXVzaWNCdXR0b24uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJlc3RTY29yZUxhYmVsLnN0cmluZyA9IEdhbWVEYXRhLmdldEhlaWdodFNjb3JlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lSW50ZWdyYWwuc3RyaW5nID0gR2FtZVRvb2xzLmdldEdhbWVJbnRlZ3JhbCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xyXG4gICAgICAgICAgICBpZiAoR2FtZUNvbmZpZy5HYW1lQ2x1YkJ1dHRvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVDbHViQnV0dG9uLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYnRuU3RhcnRBZHZlbnR1cmVPbkNsaWNrOiBmdW5jdGlvbihldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgwKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdSZXNvdXJjZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBtdXNpY0J1dHRvbkZ1bmM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XHJcbiAgICAgICAgR2FtZUNvbmZpZy5JU19HQU1FX01VU0lDID0gIUdhbWVDb25maWcuSVNfR0FNRV9NVVNJQztcclxuICAgICAgICBHYW1lVG9vbHMuc2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiSVNfR0FNRV9NVVNJQ1wiLCBHYW1lQ29uZmlnLklTX0dBTUVfTVVTSUMpO1xyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLklTX0dBTUVfTVVTSUMpIHtcclxuICAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3BfbWFpbi9wb3BtYWluXzU4XCIsIHRoaXMubXVzaWNCdXR0b24uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX21haW4vcG9wbWFpbl83OFwiLCB0aGlzLm11c2ljQnV0dG9uLmdldENvbXBvbmVudChjYy5TcHJpdGUpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGJ0blN0YXJ0TGV2ZWxNb2RlT25DbGljaygpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGJ0blNldHRpbmdPbkNsaWNrKCkge1xyXG5cclxuICAgIH0sXHJcbiAgICBidG5TaG9wT25DbGljaygpIHtcclxuXHJcbiAgICB9LFxyXG4gICAgYnRuRGFpbHlSZXdhcmRPbkNsaWNrKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgYnRuUmFua09uQ2xpY2soKSB7XHJcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgwKTtcclxuICAgICAgICBHYW1lVG9vbHMuZ2V0UmFua0RhdGEoKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmFua0J1dHRvbkZ1bmM6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBoZWxwQnV0dG9uRnVuYzogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDApO1xyXG4gICAgICAgIEdhbWVVaVRvb2xzLmxvYWRpbmdMYXllcihcInBhbmVsL0dhbWVIZWxwXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBsb2FkaW5nUmVzb3VyY2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZVNjZW5lJyk7XHJcbiAgICAgICAgR2FtZUNvbmZpZy5DQUVEX0xJTkVTID0gMTA7XHJcbiAgICAgICAgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNID0gMTE7XHJcbiAgICAgICAgR2FtZUNvbmZpZy5tYWluTWVudSA9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVOdW1Qb3BTdGFyO1xyXG4gICAgICAgIEdhbWVDb25maWcuQ0FSRF9XSURUSCA9IChHYW1lQ29uZmlnLkRFVklDRV9XSURUSCAtIEdhbWVDb25maWcuREVWSUNFX1dJRFRIIC8gMTAuMCkgLyBHYW1lQ29uZmlnLkNBRURfTElORVM7XHJcbiAgICAgICAgR2FtZUNvbmZpZy5sb2FkaW5nU2NlbmVUeXBlID0gR2FtZUNvbmZpZy5Mb2FkaW5nU2NlbmVUeXBlLkxvYWRpbmdTY2VuZUVudGVyR2FtZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0xvYWRpbmdTY2VuZScpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKENDX1dFQ0hBVEdBTUUpIHtcclxuICAgICAgICAgICAgaWYgKEdhbWVDb25maWcuR2FtZUNsdWJCdXR0b24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5HYW1lQ2x1YkJ1dHRvbi5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameUiTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6633adSwotPR4cUtDy9WXUH', 'GameUiTools');
// Script/GameUiTools.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameUiTools = {
  getSpriteFrame: function getSpriteFrame(spriteName, curSp) {
    // return new cc.SpriteFrame(cc.url.raw(spriteName));
    cc.loader.loadRes(spriteName, cc.SpriteFrame, function (err, spriteFrame) {
      if (err) {
        cc.error(err.message || err);
        console.log("DEBUG: err" + err);
        return;
      }
      if (curSp) {
        curSp.spriteFrame = spriteFrame;
      }
    });
  },
  newSprite: function newSprite(spriteName, isCache) {
    var sprite = new cc.Node();
    if (isCache) {
      spriteName = spriteName.split('.')[0];
      sprite.addComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(spriteName);
    } else {
      sprite.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame("res/raw-assets/" + spriteName);
    }
    return sprite;
  },
  setNodeSpriteFrame: function setNodeSpriteFrame(node, spriteName) {
    node.getComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(spriteName);
  },
  setButtonClickEvents: function setButtonClickEvents(component, menu, handler, customEventData, isScale) {
    var arrayMenu = new Array();
    if (menu.length == undefined) {
      arrayMenu[0] = menu;
    } else {
      arrayMenu = menu;
    }
    for (var i = 0; i < arrayMenu.length; i++) {
      var clickEventHandler = new cc.Component.EventHandler();
      clickEventHandler.target = component.node; //这个 node 节点是你的事件处理代码组件所属的节点
      clickEventHandler.component = component.node.name; //这个是代码文件名
      clickEventHandler.handler = handler;
      if (menu.length == undefined) {
        clickEventHandler.customEventData = customEventData;
      } else {
        clickEventHandler.customEventData = i;
      }
      var button = arrayMenu[i].addComponent(cc.Button);
      button.clickEvents.push(clickEventHandler);
      if (isScale == undefined || isScale) {
        button.transition = cc.Button.Transition.SCALE;
        button.duration = 0.1;
        button.zoomScale = 1.2;
      }
      // this.secondSetMenu[i].on('click', this.setMenuTouchFunc, this);
    }
  },

  setSecondSetMenuSpriteFram: function setSecondSetMenuSpriteFram(secondSetMenu, isRight) {
    //设置是否勾选图片
    secondSetMenu.getChildren()[0].getComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(isRight ? "menuRight" : "menuClose");
  },
  addCloseSprite: function addCloseSprite(node) {
    var menuClose = new cc.Node();
    menuClose.addComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame("menuClose");
    node.addChild(menuClose);
  },
  scheduleOnce: function scheduleOnce(node, callFunc, delay) {
    //事件调度
    node.runAction(cc.sequence(cc.delayTime(delay), cc.callFunc(callFunc, node)));
  },
  loadingScene: function loadingScene(sceneName, isShowLayer) {
    //加载场景
    if (isShowLayer) {
      cc.loader.loadRes("panel/LoadingLayer", function (err, prefab) {
        var node = cc.instantiate(prefab);
        cc.director.getScene().children[0].addChild(node);
        cc.director.preloadScene(sceneName, function () {
          cc.director.loadScene(sceneName);
        });
      });
    } else {
      cc.director.preloadScene(sceneName, function () {
        cc.director.loadScene(sceneName);
      });
    }
  },
  loadingLayer: function loadingLayer(panelName) {
    //加载图层
    cc.loader.loadRes(panelName, function (err, prefab) {
      if (!err) {
        var node = cc.instantiate(prefab);
        cc.director.getScene().children[0].addChild(node);
      }
    });
  }
};
module.exports = GameUiTools;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lVWlUb29scy5qcyJdLCJuYW1lcyI6WyJHYW1lQ29uZmlnIiwicmVxdWlyZSIsIkdhbWVUb29scyIsIkdhbWVVaVRvb2xzIiwiZ2V0U3ByaXRlRnJhbWUiLCJzcHJpdGVOYW1lIiwiY3VyU3AiLCJjYyIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIm5ld1Nwcml0ZSIsImlzQ2FjaGUiLCJzcHJpdGUiLCJOb2RlIiwic3BsaXQiLCJhZGRDb21wb25lbnQiLCJTcHJpdGUiLCJsb3ZlMjA0OEZyYW1lQ2FjaGUiLCJzZXROb2RlU3ByaXRlRnJhbWUiLCJub2RlIiwiZ2V0Q29tcG9uZW50Iiwic2V0QnV0dG9uQ2xpY2tFdmVudHMiLCJjb21wb25lbnQiLCJtZW51IiwiaGFuZGxlciIsImN1c3RvbUV2ZW50RGF0YSIsImlzU2NhbGUiLCJhcnJheU1lbnUiLCJBcnJheSIsImxlbmd0aCIsInVuZGVmaW5lZCIsImkiLCJjbGlja0V2ZW50SGFuZGxlciIsIkNvbXBvbmVudCIsIkV2ZW50SGFuZGxlciIsInRhcmdldCIsIm5hbWUiLCJidXR0b24iLCJCdXR0b24iLCJjbGlja0V2ZW50cyIsInB1c2giLCJ0cmFuc2l0aW9uIiwiVHJhbnNpdGlvbiIsIlNDQUxFIiwiZHVyYXRpb24iLCJ6b29tU2NhbGUiLCJzZXRTZWNvbmRTZXRNZW51U3ByaXRlRnJhbSIsInNlY29uZFNldE1lbnUiLCJpc1JpZ2h0IiwiZ2V0Q2hpbGRyZW4iLCJhZGRDbG9zZVNwcml0ZSIsIm1lbnVDbG9zZSIsImFkZENoaWxkIiwic2NoZWR1bGVPbmNlIiwiY2FsbEZ1bmMiLCJkZWxheSIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwiZGVsYXlUaW1lIiwibG9hZGluZ1NjZW5lIiwic2NlbmVOYW1lIiwiaXNTaG93TGF5ZXIiLCJwcmVmYWIiLCJpbnN0YW50aWF0ZSIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJjaGlsZHJlbiIsInByZWxvYWRTY2VuZSIsImxvYWRTY2VuZSIsImxvYWRpbmdMYXllciIsInBhbmVsTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3RDLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUNwQyxJQUFJRSxXQUFXLEdBQUc7RUFDZEMsY0FBYyxFQUFFLFNBQUFBLGVBQVVDLFVBQVUsRUFBRUMsS0FBSyxFQUFFO0lBQ3pDO0lBQ0FDLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUNKLFVBQVUsRUFBRUUsRUFBRSxDQUFDRyxXQUFXLEVBQUUsVUFBVUMsR0FBRyxFQUFFQyxXQUFXLEVBQUU7TUFDdEUsSUFBSUQsR0FBRyxFQUFFO1FBQ1RKLEVBQUUsQ0FBQ00sS0FBSyxDQUFDRixHQUFHLENBQUNHLE9BQU8sSUFBSUgsR0FBRyxDQUFDO1FBQzVCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLEdBQUNMLEdBQUcsQ0FBQztRQUM3QjtNQUNBO01BQ0EsSUFBR0wsS0FBSyxFQUFDO1FBQ0xBLEtBQUssQ0FBQ00sV0FBVyxHQUFJQSxXQUFXO01BQ3BDO0lBQ0EsQ0FBQyxDQUFDO0VBQ1YsQ0FBQztFQUNESyxTQUFTLEVBQUUsU0FBQUEsVUFBVVosVUFBVSxFQUFFYSxPQUFPLEVBQUU7SUFDdEMsSUFBSUMsTUFBTSxHQUFHLElBQUlaLEVBQUUsQ0FBQ2EsSUFBSSxFQUFFO0lBQzFCLElBQUlGLE9BQU8sRUFBRTtNQUNUYixVQUFVLEdBQUdBLFVBQVUsQ0FBQ2dCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDckNGLE1BQU0sQ0FBQ0csWUFBWSxDQUFDZixFQUFFLENBQUNnQixNQUFNLENBQUMsQ0FBQ1gsV0FBVyxHQUFHVixTQUFTLENBQUNzQixrQkFBa0Is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QUNwQyxDQUFDLENBQUM7SUFDTjtFQUNKLENBQUM7RUFDRFMsWUFBWSxXQUFBQSxhQUFDQyxTQUFTLEVBQUU7SUFBQztJQUNyQnRFLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUNvRSxTQUFTLEVBQUUsVUFBQ2xFLEdBQUcsRUFBRTBELE1BQU0sRUFBSztNQUMxQyxJQUFJLENBQUMxRCxHQUFHLEVBQUU7UUFDTixJQUFJZSxJQUFJLEdBQUduQixFQUFFLENBQUMrRCxXQUFXLENBQUNELE1BQU0sQ0FBQztRQUNqQzlELEVBQUUsQ0FBQ2dFLFFBQVEsQ0FBQ0MsUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ2QsUUFBUSxDQUFDakMsSUFBSSxDQUFDO01BQ3JEO0lBQ0osQ0FBQyxDQUFDO0VBQ047QUFDSixDQUFDO0FBQ0RvRCxNQUFNLENBQUNDLE9BQU8sR0FBRzVFLFdBQVciLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XHJcbnZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xyXG52YXIgR2FtZVVpVG9vbHMgPSB7XHJcbiAgICBnZXRTcHJpdGVGcmFtZTogZnVuY3Rpb24gKHNwcml0ZU5hbWUsIGN1clNwKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIG5ldyBjYy5TcHJpdGVGcmFtZShjYy51cmwucmF3KHNwcml0ZU5hbWUpKTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhzcHJpdGVOYW1lLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRFQlVHOiBlcnJcIitlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY3VyU3Ape1xyXG4gICAgICAgICAgICAgICAgY3VyU3Auc3ByaXRlRnJhbWUgPSAgc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbmV3U3ByaXRlOiBmdW5jdGlvbiAoc3ByaXRlTmFtZSwgaXNDYWNoZSkge1xyXG4gICAgICAgIGxldCBzcHJpdGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIGlmIChpc0NhY2hlKSB7XHJcbiAgICAgICAgICAgIHNwcml0ZU5hbWUgPSBzcHJpdGVOYW1lLnNwbGl0KCcuJylbMF07XHJcbiAgICAgICAgICAgIHNwcml0ZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IEdhbWVUb29scy5sb3ZlMjA0OEZyYW1lQ2FjaGUuZ2V0U3ByaXRlRnJhbWUoc3ByaXRlTmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3ByaXRlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKFwicmVzL3Jhdy1hc3NldHMvXCIgKyBzcHJpdGVOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNwcml0ZTtcclxuICAgIH0sXHJcbiAgICBzZXROb2RlU3ByaXRlRnJhbWU6IGZ1bmN0aW9uIChub2RlLCBzcHJpdGVOYW1lKSB7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IEdhbWVUb29scy5sb3ZlMjA0OEZyYW1lQ2FjaGUuZ2V0U3ByaXRlRnJhbWUoc3ByaXRlTmFtZSk7XHJcbiAgICB9LFxyXG4gICAgc2V0QnV0dG9uQ2xpY2tFdmVudHM6IGZ1bmN0aW9uIChjb21wb25lbnQsIG1lbnUsIGhhbmRsZXIsIGN1c3RvbUV2ZW50RGF0YSwgaXNTY2FsZSkge1xyXG4gICAgICAgIGxldCBhcnJheU1lbnUgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBpZiAobWVudS5sZW5ndGggPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGFycmF5TWVudVswXSA9IG1lbnU7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFycmF5TWVudSA9IG1lbnU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlNZW51Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IGNvbXBvbmVudC5ub2RlOyAvL+i/meS4qiBub2RlIOiKgueCueaYr+S9oOeahOS6i+S7tuWkhOeQhuS7o+eggee7hOS7tuaJgOWxnueahOiKgueCuVxyXG4gICAgICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBjb21wb25lbnQubm9kZS5uYW1lOy8v6L+Z5Liq5piv5Luj56CB5paH5Lu25ZCNXHJcbiAgICAgICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgICAgICBpZiAobWVudS5sZW5ndGggPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jdXN0b21FdmVudERhdGEgPSBjdXN0b21FdmVudERhdGE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jdXN0b21FdmVudERhdGEgPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBidXR0b24gPSBhcnJheU1lbnVbaV0uYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgICAgICAgICAgaWYgKGlzU2NhbGUgPT0gdW5kZWZpbmVkIHx8IGlzU2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi50cmFuc2l0aW9uID0gY2MuQnV0dG9uLlRyYW5zaXRpb24uU0NBTEU7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uZHVyYXRpb24gPSAwLjE7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uem9vbVNjYWxlID0gMS4yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2Vjb25kU2V0TWVudVtpXS5vbignY2xpY2snLCB0aGlzLnNldE1lbnVUb3VjaEZ1bmMsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRTZWNvbmRTZXRNZW51U3ByaXRlRnJhbTogZnVuY3Rpb24gKHNlY29uZFNldE1lbnUsIGlzUmlnaHQpIHsvL+iuvue9ruaYr+WQpuWLvumAieWbvueJh1xyXG4gICAgICAgIHNlY29uZFNldE1lbnUuZ2V0Q2hpbGRyZW4oKVswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IEdhbWVUb29scy5sb3ZlMjA0OEZyYW1lQ2FjaGUuZ2V0U3ByaXRlRnJhbWUoaXNSaWdodCA/IFwibWVudVJpZ2h0XCIgOiBcIm1lbnVDbG9zZVwiKTtcclxuICAgIH0sXHJcbiAgICBhZGRDbG9zZVNwcml0ZTogZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICBsZXQgbWVudUNsb3NlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICBtZW51Q2xvc2UuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBHYW1lVG9vbHMubG92ZTIwNDhGcmFtZUNhY2hlLmdldFNwcml0ZUZyYW1lKFwibWVudUNsb3NlXCIpO1xyXG4gICAgICAgIG5vZGUuYWRkQ2hpbGQobWVudUNsb3NlKTtcclxuICAgIH0sXHJcbiAgICBzY2hlZHVsZU9uY2U6IGZ1bmN0aW9uIChub2RlLCBjYWxsRnVuYywgZGVsYXkpIHsvL+S6i+S7tuiwg+W6plxyXG4gICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShkZWxheSksIGNjLmNhbGxGdW5jKGNhbGxGdW5jLCBub2RlKSkpO1xyXG4gICAgfSxcclxuICAgIGxvYWRpbmdTY2VuZShzY2VuZU5hbWUsIGlzU2hvd0xheWVyKSB7Ly/liqDovb3lnLrmma9cclxuICAgICAgICBpZiAoaXNTaG93TGF5ZXIpIHtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJwYW5lbC9Mb2FkaW5nTGF5ZXJcIiwgKGVyciwgcHJlZmFiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmNoaWxkcmVuWzBdLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKHNjZW5lTmFtZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShzY2VuZU5hbWUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZU5hbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbG9hZGluZ0xheWVyKHBhbmVsTmFtZSkgey8v5Yqg6L295Zu+5bGCXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMocGFuZWxOYW1lLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuY2hpbGRyZW5bMF0uYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZVVpVG9vbHM7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/LoadingScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa66dpbqYROFqRT9GK3/WP2', 'LoadingScene');
// Script/LoadingScene.js

"use strict";

var GameData = require("GameData");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
var GameConfig = require("GameConfig");
var AnimLayerTool = require("AnimLayerTool");
cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {
    var _this = this;
    setTimeout(function () {
      _this.loadingResource();
    }, 10);
  },
  loadingResource: function loadingResource() {
    if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneFirst) {
      // GameTools.setGameIntegral(GameTools.getGameIntegral()+1000);
      GameConfig.IS_GAME_MUSIC = GameTools.getItemByLocalStorage("IS_GAME_MUSIC", true);
      this.initFrameCache();
      this.initWxSetting();
    } else if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneEnterGame) {
      GameConfig.IS_GAME_OVER = false;
      GameData.initData();
      GameData.heightScore = GameData.getHeightScore();
      if (GameData.isHaveGameData()) {
        if (GameData.loadGameData(true) || GameData.heightScore < 0 || GameData.heightScore > 1073741824) {
          GameData.setHaveGameData(false);
          GameData.heightScore = 0;
          GameData.setHeightScore(0);
        }
      }
    } else if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneBackGame) {
      if (!GameConfig.IS_GAME_OVER) {
        GameData.loadGameData(false);
      }
      // GameData.destroyInstance();
    }

    if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneFirst) {
      cc.director.preloadScene("MenuUI", function () {
        cc.director.loadScene("MenuUI");
      });
    } else if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneEnterGame) {
      cc.director.preloadScene("GameScene", function () {
        cc.director.loadScene("GameScene");
      });
    } else if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneBackGame) {
      cc.director.preloadScene("MenuUI", function () {
        cc.director.loadScene("MenuUI");
      });
    }
  },
  initFrameCache: function initFrameCache() {
    cc.loader.loadRes("number", cc.LabelAtlas, function (err, atlas) {
      GameTools.numberLabelAtlas = atlas;
    });
  },
  initWxSetting: function initWxSetting() {
    if (CC_WECHATGAME) {
      window.wx.onHide(function () {
        //监听小游戏隐藏到后台事件
        if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneEnterGame && !GameConfig.IS_GAME_OVER) {
          GameData.loadGameData(false);
          GameTools.stopBackgroundMusic();
        }
      });
      window.wx.onShow(function () {
        if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneEnterGame && !GameConfig.IS_GAME_OVER) {
          if (GameConfig.IS_GAME_MUSIC) {
            GameTools.playBackgroundMusic();
          }
        }
      });
      window.wx.onAudioInterruptionBegin(function () {
        GameTools.stopBackgroundMusic();
      });
      window.wx.onAudioInterruptionEnd(function () {
        //监听音频中断结束
        if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneEnterGame && !GameConfig.IS_GAME_OVER) {
          if (GameConfig.IS_GAME_MUSIC) {
            GameTools.playBackgroundMusic();
          }
        }
      });
      window.wx.showShareMenu({
        withShareTicket: true
      });
      window.wx.onShareAppMessage(function () {
        // 用户点击了“转发”按钮
        return {
          title: '来跟我一起挑战浪漫2048。',
          imageUrl: canvas.toTempFilePathSync({
            destWidth: 500,
            destHeight: 400
          })
        };
      });
      var LaunchOption = wx.getLaunchOptionsSync();
      if (LaunchOption.query != {} && LaunchOption.query.x != undefined) {
        GameConfig.MAIN_MENU_NUM = Number(LaunchOption.query.x);
      }
      var info = window.wx.getSystemInfoSync();
      GameConfig.GameClubButton = window.wx.createGameClubButton({
        icon: 'green',
        style: {
          left: info.windowWidth / 2 + 25,
          top: info.windowHeight * 90 / 100,
          width: 40,
          height: 40
        }
      });
      GameConfig.GameClubButton.hide();
    } else {
      // GameTools.getRankData("测试群排行");
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxMb2FkaW5nU2NlbmUuanMiXSwibmFtZXMiOlsiR2FtZURhdGEiLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiR2FtZVVpVG9vbHMiLCJHYW1lQ29uZmlnIiwiQW5pbUxheWVyVG9vbCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJfdGhpcyIsInNldFRpbWVvdXQiLCJsb2FkaW5nUmVzb3VyY2UiLCJsb2FkaW5nU2NlbmVUeXBlIiwiTG9hZGluZ1NjZW5lVHlwZSIsIkxvYWRpbmdTY2VuZUZpcnN0IiwiSVNfR0FNRV9NVVNJQyIsImdldEl0ZW1CeUxvY2FsU3RvcmFnZSIsImluaXRGcmFtZUNhY2hlIiwiaW5pdFd4U2V0dGluZyIsIkxvYWRpbmdTY2VuZUVudGVyR2FtZSIsIklTX0dBTUVfT1ZFUiIsImluaXREYXRhIiwiaGVpZ2h0U2NvcmUiLCJnZXRIZWlnaHRTY29yZSIsImlzSGF2ZUdhbWVEYXRhIiwibG9hZEdhbWVEYXRhIiwic2V0SGF2ZUdhbWVEYXRhIiwic2V0SGVpZ2h0U2NvcmUiLCJMb2FkaW5nU2NlbmVCYWNrR2FtZSIsImRpcmVjdG9yIiwicHJlbG9hZFNjZW5lIiwibG9hZFNjZW5lIiwibG9hZGVyIiwibG9hZFJlcyIsIkxhYmVsQXRsYXMiLCJlcnIiLCJhdGxhcyIsIm51bWJlckxhYmVsQXRsYXMiLCJDQ19XRUNIQVRHQU1FIiwid2luZG93Iiwid3giLCJvbkhpZGUiLCJzdG9wQmFja2dyb3VuZE11c2ljIiwib25TaG93IiwicGxheUJhY2tncm91bmRNdXNpYyIsIm9uQXVkaW9JbnRlcnJ1cHRpb25CZWdpbiIsIm9uQXVkaW9JbnRlcnJ1cHRpb25FbmQiLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0Iiwib25TaGFyZUFwcE1lc3NhZ2UiLCJ0aXRsZSIsImltYWdlVXJsIiwiY2FudmFzIiwidG9UZW1wRmlsZVBhdGhTeW5jIiwiZGVzdFdpZHRoIiwiZGVzdEhlaWdodCIsIkxhdW5jaE9wdGlvbiIsImdldExhdW5jaE9wdGlvbnNTeW5jIiwicXVlcnkiLCJ4IiwidW5kZWZpbmVkIiwiTUFJTl9NRU5VX05VTSIsIk51bWJlciIsImluZm8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsIkdhbWVDbHViQnV0dG9uIiwiY3JlYXRlR2FtZUNsdWJCdXR0b24iLCJpY29uIiwic3R5bGUiLCJsZWZ0Iiwid2luZG93V2lkdGgiLCJ0b3AiLCJ3aW5kb3dIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImhpZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ2xDLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUNwQyxJQUFJRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDeEMsSUFBSUcsVUFBVSxHQUFHSCxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3RDLElBQUlJLGFBQWEsR0FBR0osT0FBTyxDQUFDLGVBQWUsQ0FBQztBQUM1Q0ssRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFDckJDLFVBQVUsRUFBRSxDQUFDLENBQUM7RUFFZEMsS0FBSyxXQUFBQSxNQUFBLEVBQUc7SUFBQSxJQUFBQyxLQUFBO0lBQ0pDLFVBQVUsQ0FBQyxZQUFNO01BQ2JELEtBQUksQ0FBQ0UsZUFBZSxFQUFFO0lBQzFCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDVixDQUFDO0VBRURBLGVBQWUsV0FBQUEsZ0JBQUEsRUFBRztJQUNkLElBQUlULFVBQVUsQ0FBQ1UsZ0JBQWdCLElBQUlWLFVBQVUsQ0FBQ1csZ0JBQWdCLENBQUNDLGlCQUFpQixFQUFFO01BQzlFO01BQ0FaLFVBQVUsQ0FBQ2EsYUFBYSxHQUFHZixTQUFTLENBQUNnQixxQkFBcUIsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDO01BQ2pGLElBQUksQ0FBQ0MsY0FBYyxFQUFFO01B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QUlELFlBQVksQ0FBQ0UsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJRixZQUFZLENBQUNFLEtBQUssQ0FBQ0MsQ0FBQyxJQUFJQyxTQUFTLEVBQUU7UUFDL0QxRCxVQUFVLENBQUMyRCxhQUFhLEdBQUdDLE1BQU0sQ0FBQ04sWUFBWSxDQUFDRSxLQUFLLENBQUNDLENBQUMsQ0FBQztNQUMzRDtNQUNBLElBQUlJLElBQUksR0FBR3hCLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDd0IsaUJBQWlCLEVBQUU7TUFDeEM5RCxVQUFVLENBQUMrRCxjQUFjLEdBQUcxQixNQUFNLENBQUNDLEVBQUUsQ0FBQzBCLG9CQUFvQixDQUFDO1FBQ3ZEQyxJQUFJLEVBQUUsT0FBTztRQUNiQyxLQUFLLEVBQUU7VUFDSEMsSUFBSSxFQUFFTixJQUFJLENBQUNPLFdBQVcsR0FBRyxDQUFDLEdBQUcsRUFBRTtVQUMvQkMsR0FBRyxFQUFFUixJQUFJLENBQUNTLFlBQVksR0FBRyxFQUFFLEdBQUcsR0FBRztVQUNqQ0MsS0FBSyxFQUFFLEVBQUU7VUFDVEMsTUFBTSxFQUFFO1FBQ1o7TUFDSixDQUFDLENBQUM7TUFDRnhFLFVBQVUsQ0FBQytELGNBQWMsQ0FBQ1UsSUFBSSxFQUFFO0lBQ3BDLENBQUMsTUFBTTtNQUNIO0lBQUE7RUFFUjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVEYXRhID0gcmVxdWlyZShcIkdhbWVEYXRhXCIpO1xyXG52YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcclxudmFyIEdhbWVVaVRvb2xzID0gcmVxdWlyZShcIkdhbWVVaVRvb2xzXCIpO1xyXG52YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xyXG52YXIgQW5pbUxheWVyVG9vbCA9IHJlcXVpcmUoXCJBbmltTGF5ZXJUb29sXCIpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7fSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nUmVzb3VyY2UoKTtcclxuICAgICAgICB9LCAxMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGxvYWRpbmdSZXNvdXJjZSgpIHtcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5sb2FkaW5nU2NlbmVUeXBlID09IEdhbWVDb25maWcuTG9hZGluZ1NjZW5lVHlwZS5Mb2FkaW5nU2NlbmVGaXJzdCkge1xyXG4gICAgICAgICAgICAvLyBHYW1lVG9vbHMuc2V0R2FtZUludGVncmFsKEdhbWVUb29scy5nZXRHYW1lSW50ZWdyYWwoKSsxMDAwKTtcclxuICAgICAgICAgICAgR2FtZUNvbmZpZy5JU19HQU1FX01VU0lDID0gR2FtZVRvb2xzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcIklTX0dBTUVfTVVTSUNcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEZyYW1lQ2FjaGUoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0V3hTZXR0aW5nKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChHYW1lQ29uZmlnLmxvYWRpbmdTY2VuZVR5cGUgPT0gR2FtZUNvbmZpZy5Mb2FkaW5nU2NlbmVUeXBlLkxvYWRpbmdTY2VuZUVudGVyR2FtZSkge1xyXG4gICAgICAgICAgICBHYW1lQ29uZmlnLklTX0dBTUVfT1ZFUiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBHYW1lRGF0YS5pbml0RGF0YSgpO1xyXG4gICAgICAgICAgICBHYW1lRGF0YS5oZWlnaHRTY29yZSA9IEdhbWVEYXRhLmdldEhlaWdodFNjb3JlKCk7XHJcbiAgICAgICAgICAgIGlmIChHYW1lRGF0YS5pc0hhdmVHYW1lRGF0YSgpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoR2FtZURhdGEubG9hZEdhbWVEYXRhKHRydWUpIHx8IEdhbWVEYXRhLmhlaWdodFNjb3JlIDwgMCB8fCBHYW1lRGF0YS5oZWlnaHRTY29yZSA+IDEwNzM3NDE4MjQpIHtcclxuICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5zZXRIYXZlR2FtZURhdGEoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVEYXRhLmhlaWdodFNjb3JlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5zZXRIZWlnaHRTY29yZSgwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoR2FtZUNvbmZpZy5sb2FkaW5nU2NlbmVUeXBlID09IEdhbWVDb25maWcuTG9hZGluZ1NjZW5lVHlwZS5Mb2FkaW5nU2NlbmVCYWNrR2FtZSkge1xyXG4gICAgICAgICAgICBpZighR2FtZUNvbmZpZy5JU19HQU1FX09WRVIpe1xyXG4gICAgICAgICAgICAgICAgR2FtZURhdGEubG9hZEdhbWVEYXRhKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBHYW1lRGF0YS5kZXN0cm95SW5zdGFuY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLmxvYWRpbmdTY2VuZVR5cGUgPT0gR2FtZUNvbmZpZy5Mb2FkaW5nU2NlbmVUeXBlLkxvYWRpbmdTY2VuZUZpcnN0KSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcIk1lbnVVSVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNZW51VUlcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChHYW1lQ29uZmlnLmxvYWRpbmdTY2VuZVR5cGUgPT0gR2FtZUNvbmZpZy5Mb2FkaW5nU2NlbmVUeXBlLkxvYWRpbmdTY2VuZUVudGVyR2FtZSkge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJHYW1lU2NlbmVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZVNjZW5lXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoR2FtZUNvbmZpZy5sb2FkaW5nU2NlbmVUeXBlID09IEdhbWVDb25maWcuTG9hZGluZ1NjZW5lVHlwZS5Mb2FkaW5nU2NlbmVCYWNrR2FtZSkge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJNZW51VUlcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWVudVVJXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaW5pdEZyYW1lQ2FjaGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIm51bWJlclwiLCBjYy5MYWJlbEF0bGFzLCBmdW5jdGlvbiAoZXJyLCBhdGxhcykge1xyXG4gICAgICAgICAgICBHYW1lVG9vbHMubnVtYmVyTGFiZWxBdGxhcyA9IGF0bGFzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGluaXRXeFNldHRpbmc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xyXG4gICAgICAgICAgICB3aW5kb3cud3gub25IaWRlKGZ1bmN0aW9uICgpIHsvL+ebkeWQrOWwj+a4uOaIj+makOiXj+WIsOWQjuWPsOS6i+S7tlxyXG4gICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcubG9hZGluZ1NjZW5lVHlwZSA9PSBHYW1lQ29uZmlnLkxvYWRpbmdTY2VuZVR5cGUuTG9hZGluZ1NjZW5lRW50ZXJHYW1lICYmICFHYW1lQ29uZmlnLklTX0dBTUVfT1ZFUikge1xyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVEYXRhLmxvYWRHYW1lRGF0YShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnN0b3BCYWNrZ3JvdW5kTXVzaWMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy53eC5vblNob3coKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcubG9hZGluZ1NjZW5lVHlwZSA9PSBHYW1lQ29uZmlnLkxvYWRpbmdTY2VuZVR5cGUuTG9hZGluZ1NjZW5lRW50ZXJHYW1lICYmICFHYW1lQ29uZmlnLklTX0dBTUVfT1ZFUikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChHYW1lQ29uZmlnLklTX0dBTUVfTVVTSUMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnBsYXlCYWNrZ3JvdW5kTXVzaWMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB3aW5kb3cud3gub25BdWRpb0ludGVycnVwdGlvbkJlZ2luKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIEdhbWVUb29scy5zdG9wQmFja2dyb3VuZE11c2ljKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB3aW5kb3cud3gub25BdWRpb0ludGVycnVwdGlvbkVuZCgoKSA9PiB7Ly/nm5HlkKzpn7PpopHkuK3mlq3nu5PmnZ9cclxuICAgICAgICAgICAgICAgIGlmIChHYW1lQ29uZmlnLmxvYWRpbmdTY2VuZVR5cGUgPT0gR2FtZUNvbmZpZy5Mb2FkaW5nU2NlbmVUeXBlLkxvYWRpbmdTY2VuZUVudGVyR2FtZSAmJiAhR2FtZUNvbmZpZy5JU19HQU1FX09WRVIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoR2FtZUNvbmZpZy5JU19HQU1FX01VU0lDKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5wbGF5QmFja2dyb3VuZE11c2ljKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgd2luZG93Lnd4LnNob3dTaGFyZU1lbnUoe3dpdGhTaGFyZVRpY2tldDogdHJ1ZX0pO1xyXG4gICAgICAgICAgICB3aW5kb3cud3gub25TaGFyZUFwcE1lc3NhZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8g55So5oi354K55Ye75LqG4oCc6L2s5Y+R4oCd5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5p2l6Lef5oiR5LiA6LW35oyR5oiY5rWq5ryrMjA0OOOAgicsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IGNhbnZhcy50b1RlbXBGaWxlUGF0aFN5bmMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXN0V2lkdGg6IDUwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdEhlaWdodDogNDAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxldCBMYXVuY2hPcHRpb24gPSB3eC5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xyXG4gICAgICAgICAgICBpZiAoTGF1bmNoT3B0aW9uLnF1ZXJ5ICE9IHt9ICYmIExhdW5jaE9wdGlvbi5xdWVyeS54ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNID0gTnVtYmVyKExhdW5jaE9wdGlvbi5xdWVyeS54KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgaW5mbyA9IHdpbmRvdy53eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVDbHViQnV0dG9uID0gd2luZG93Lnd4LmNyZWF0ZUdhbWVDbHViQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdncmVlbicsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGluZm8ud2luZG93V2lkdGggLyAyICsgMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBpbmZvLndpbmRvd0hlaWdodCAqIDkwIC8gMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVDbHViQnV0dG9uLmhpZGUoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEdhbWVUb29scy5nZXRSYW5rRGF0YShcIua1i+ivlee+pOaOkuihjFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/AnimLayerTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dcf6e/4kv9KYrR4VIQPHtsC', 'AnimLayerTool');
// Script/AnimLayerTool.js

"use strict";

var CardSprite = require("CardSprite");
var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
var DEVICE_WIDTH = GameConfig.DEVICE_WIDTH;
var DEVICE_HEIGHT = GameConfig.DEVICE_HEIGHT;
var MoveButtonAnimType = {
  up: 0,
  //向上
  down: 1,
  //向下
  left: 2,
  //向左
  right: 3,
  //向右
  leftUp: 4,
  //左上
  leftDown: 5,
  //左下
  rightUp: 6,
  //右上
  rightDown: 7 //右下
};

var AnimLayerTool = {
  moveButtonAnimTime: 0.3,
  // 按钮动画移动时间
  MoveButtonAnimType: MoveButtonAnimType,
  bottonAnim: function bottonAnim(button) {
    // 创建按钮特效
    var arrayNode = new Array();
    if (button.length == undefined) {
      arrayNode[0] = button;
    } else {
      arrayNode = button;
    }
    for (var i = 0; i < arrayNode.length; i++) {
      // let time = cc.random0To1() * 5 + 1;
      var time = Math.random() * 5 + 1;
      var width = arrayNode[i].height / 20.0;
      var anim1 = cc.jumpBy(time, cc.v2(width, 0), width, 1);
      var anim2 = cc.jumpBy(time, cc.v2(-width, 0), -width, 1);
      var anim3 = cc.scaleBy(0.3, 1.1, 0.9);
      var anim4 = cc.delayTime(time);
      var actions = cc.sequence(anim1, anim2, anim3, anim3.reverse(), anim4);
      arrayNode[i].runAction(actions.repeatForever());
    }
  },
  createShowMessageBox: function createShowMessageBox(x, y, name, rotation, parentNode) {},
  createShowMessageBoxAward: function createShowMessageBoxAward(parentNode, engineType)
  //创建奖励消息提示框
  {
    var message = new cc.Node();
    if (engineType == -1) {
      // message.addComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame("toast6");
    } else if (engineType < 6) {
      return;
    } else if (engineType < 8) {
      GameUiTools.getSpriteFrame("pop_nopack/txt_good", message.addComponent(cc.Sprite));
    } else if (engineType < 10) {
      GameUiTools.getSpriteFrame("pop_nopack/txt_cool", message.addComponent(cc.Sprite));
    } else if (engineType < 12) {
      GameUiTools.getSpriteFrame("pop_nopack/txt_verygood", message.addComponent(cc.Sprite));
    } else if (engineType < 14) {
      GameUiTools.getSpriteFrame("pop_nopack/txt_smart", message.addComponent(cc.Sprite));
    } else {
      GameUiTools.getSpriteFrame("pop_nopack/txt_boom", message.addComponent(cc.Sprite));
    }
    GameTools.playSimpleAudioEngine(3);
    message.setPosition(0, 0);
    // message.setOpacity(0);
    message.opacity = 0;
    parentNode.addChild(message);
    var action1 = cc.fadeIn(0.5);
    var action2 = cc.delayTime(1);
    var action3 = cc.fadeOut(0.5);
    var moveFinish = cc.callFunc(this.callFuncAddScore, this, message);
    var action4 = cc.sequence(action1, action2, action3, moveFinish);
    message.runAction(action4);
  },
  moveButtonAnim: function moveButtonAnim(button, isShow, moveButtonAnimType) {
    // 按钮消失或出现动画
    var positionX = button.x;
    var positionY = button.y;
    var size = button.getContentSize();
    if (isShow) {
      switch (moveButtonAnimType) {
        case 0:
          // up:
          button.setPosition(positionX, DEVICE_HEIGHT + size.height);
          break;
        case 1:
          // down:
          button.setPosition(positionX, -size.height);
          break;
        case 2:
          // left:
          button.setPosition(-size.width, positionY);
          break;
        case 3:
          // right:
          button.setPosition(DEVICE_WIDTH + size.width, positionY);
          break;
        case 4:
          // leftUp:
          button.setPosition(-size.width, DEVICE_HEIGHT + size.height);
          break;
        case 5:
          // leftDown:
          button.setPosition(-size.width, -size.height);
          break;
        case 6:
          // rightUp:
          button.setPosition(DEVICE_WIDTH + size.width, DEVICE_HEIGHT + size.height);
          break;
        case 7:
          // rightDown:
          button.setPosition(DEVICE_WIDTH + size.width, -size.height);
          break;
        default:
          break;
      }
      var anim1 = cc.moveTo(this.moveButtonAnimTime, cc.v2(positionX, positionY));
      button.runAction(anim1);
    } else {
      var _anim;
      switch (moveButtonAnimType) {
        case 0:
          // up:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(positionX, DEVICE_HEIGHT + size.height));
          break;
        case 1:
          // down:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(positionX, -size.height));
          break;
        case 2:
          // left:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(-size.width, positionY));
          break;
        case 3:
          // right:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(DEVICE_WIDTH + size.width, positionY));
          break;
        case 4:
          // leftUp:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(-size.width, DEVICE_HEIGHT + size.height));
          break;
        case 5:
          // leftDown:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(-size.width, -size.height));
          break;
        case 6:
          // rightUp:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(DEVICE_WIDTH + size.width, DEVICE_HEIGHT + size.height));
          break;
        case 7:
          // rightDown:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(DEVICE_WIDTH + size.width, -size.height));
          break;
        default:
          break;
      }
      button.runAction(_anim);
    }
  },
  createAddScore: function createAddScore(addScore)
  //创建加分动画
  {
    var addScoreSprite = new cc.Node();
    var lable = addScoreSprite.addComponent(cc.Label);
    lable.font = GameTools.numberLabelAtlas;
    lable.string = ":" + addScore;
    addScoreSprite.setPosition(-46, 505);
    // addScoreSprite.setOpacity(100);
    addScoreSprite.opacity = 0;
    GameConfig.GameScene.node.addChild(addScoreSprite);
    var move1 = cc.moveBy(0.3, 0, 106);
    var move2 = cc.fadeIn(0.2);
    var move3 = cc.spawn(move1, move2);
    var moveFinish = cc.callFunc(this.callFuncAddScore, this, addScoreSprite);
    addScoreSprite.runAction(cc.sequence(move3, moveFinish));
  },
  callFuncAddScore: function callFuncAddScore(sender, node)
  //创建加分动画监听
  {
    sender.destroy();
  },
  createScoreMoveAnim: function createScoreMoveAnim(from, score, scoreType) {
    //创建得分移动动画
    if (score > 0) {
      var scoreNumberTTF = new cc.Node();
      var lable = scoreNumberTTF.addComponent(cc.Label);
      lable.font = GameTools.numberLabelAtlas;
      lable.string = ":" + score;
      scoreNumberTTF.setPosition(from.x, from.y);
      from.getParent().addChild(scoreNumberTTF);
      var moveFinish = cc.callFunc(this.callFuncScoreMoveAnim, this, scoreNumberTTF);
      var move1 = null;
      if (scoreType) {
        move1 = cc.moveTo(1, 58 + 360, 408 + 640);
      } else {
        move1 = cc.moveTo(1, -259 + 360, 290 + 640);
      }
      move1.easing(cc.easeExponentialIn());
      scoreNumberTTF.runAction(cc.sequence(move1, moveFinish));
    }
  },
  callFuncScoreMoveAnim: function callFuncScoreMoveAnim(sender, scoreNumberTTF) {
    //得分移动动画监听
    GameConfig.GameLogic.setScore();
    scoreNumberTTF.destroy();
  },
  createChangeCardNumAnim: function createChangeCardNumAnim(card, num)
  //创建移除动画
  {
    var cardSprite = CardSprite.createCardSprite(card.getNumber(), card.getPositionX(), card.getPositionY());
    card.getParent().addChild(cardSprite);
    card.active = false;
    card.setNumber(num);
    cardSprite.setNumber(num);
    var action2 = cc.scaleTo(0.3, 0);
    action2.easing(cc.easeBackIn());
    var action3 = cc.scaleTo(0.1, 1);
    var moveFinish1 = cc.callFunc(this.callFuncChangeCardNum1, this, cardSprite);
    var moveFinish2 = cc.callFunc(this.callFuncChangeCardNum2, this, [cardSprite, card]);
    var actions = cc.sequence(action2, moveFinish1, action3, moveFinish2);
    cardSprite.runAction(actions);
  },
  callFuncChangeCardNum1: function callFuncChangeCardNum1(sender, cardSprite)
  //卡片移除特效监听
  {
    cardSprite.CardShow();
  },
  callFuncChangeCardNum2: function callFuncChangeCardNum2(sender, funData)
  //卡片移除特效监听
  {
    var cardSprite = funData[0];
    var card = funData[1];
    card.CardShow();
    card.active = true;
    cardSprite.destroy();
  },
  createExchangeCardAnim: function createExchangeCardAnim(card, z, x)
  //创建道具交换特效
  {
    var X = card.getPositionX();
    var Y = card.getPositionY();
    var unitSize = GameConfig.CARD_WIDTH / (GameConfig.CAED_LINES + 1);
    var move1 = cc.scaleBy(0.4, 1.15);
    var actions = cc.sequence(move1, move1.reverse());
    if (z > 0) {
      var card1 = CardSprite.createCardSprite(-1, X - unitSize - GameConfig.CARD_WIDTH, Y);
      card.getParent().addChild(card1);
      card1.runAction(actions.clone().repeatForever());
    }
    if (z < GameConfig.CAED_LINES - 1) {
      var card2 = CardSprite.createCardSprite(-1, X + unitSize + GameConfig.CARD_WIDTH, Y);
      card.getParent().addChild(card2);
      card2.runAction(actions.clone().repeatForever());
    }
    if (x > 0) {
      var card3 = CardSprite.createCardSprite(-1, X, Y - unitSize - GameConfig.CARD_WIDTH);
      card.getParent().addChild(card3);
      card3.runAction(actions.clone().repeatForever());
    }
    if (x < GameConfig.CAED_LINES - 1) {
      var card4 = CardSprite.createCardSprite(-1, X, Y + unitSize + GameConfig.CARD_WIDTH);
      card.getParent().addChild(card4);
      card4.runAction(actions.clone().repeatForever());
    }
  },
  createRemoveExchangeCardAnim: function createRemoveExchangeCardAnim(card, z, x)
  //创建道具移除交换特效
  {
    if (z > 0) {
      card.getParent().removeChildByTag(2001);
    }
    if (z < GameConfig.CAED_LINES - 1) {
      card.getParent().removeChildByTag(2002);
    }
    if (x > 0) {
      card.getParent().removeChildByTag(2003);
    }
    if (x < GameConfig.CAED_LINES - 1) {
      card.getParent().removeChildByTag(2004);
    }
  },
  createScaleToCard: function createScaleToCard(card) {
    // 创建卡片初始化动画
    var cardSprite = CardSprite.createCardSprite(card.number, card.x, card.y);
    card.getParent().addChild(cardSprite);
    card.active = false;
    cardSprite.setScale(0);
    var action2 = cc.scaleTo(0.3, 1);
    action2.easing(cc.easeBackOut());
    var moveFinish = cc.callFunc(this.callFuncCard1, this, [cardSprite, card]);
    cardSprite.runAction(cc.sequence(action2, moveFinish));
  },
  callFuncCard1: function callFuncCard1(node, cardSprite) {
    cardSprite[1].CardShow();
    cardSprite[1].active = true;
    cardSprite[0].destroy();
  },
  createMoveAnim: function createMoveAnim(from, to, isShowAnim) {
    var cardSprite = CardSprite.createCardSprite(from.number, from.x, from.y);
    to.getParent().addChild(cardSprite);
    var i = 0;
    var moveFinish = cc.callFunc(this.callFuncCard2, this, [cardSprite, to, isShowAnim]);
    var move1 = cc.moveTo(0.3, cc.v2(to.x, to.y));
    if (i < 1) {
      move1 = cc.moveTo(0.1, cc.v2(to.x, to.y));
    } else if (i < 2) {
      move1.easing(cc.easeBackIn());
    } else if (i < 3) {
      move1.easing(cc.easeBackOut());
    } else if (i < 4) {
      move1.easing(cc.easeBackInOut());
    } else if (i < 5) {
      move1 = cc.jumpTo(0.3, cc.v2(to.x, to.y), GameConfig.CARD_WIDTH, 2);
    }
    cardSprite.runAction(cc.sequence(move1, moveFinish));
  },
  callFuncCard2: function callFuncCard2(sender, to) {
    to[1].CardShow();
    if (to[2]) {
      to[0].number = to[1].number;
      to[0].CardShow();
      var scale = cc.scaleBy(0.02, 1.15);
      var moveFinish = cc.callFunc(this.callFuncCard3, this, to[0]);
      to[0].runAction(cc.sequence(scale, scale.reverse(), moveFinish));
    } else {
      to[0].destroy();
    }
  },
  callFuncCard3: function callFuncCard3(sender, card) {
    card.destroy();
  },
  createPopStarAnim: function createPopStarAnim(from, dTime)
  //创建卡片爆炸特效
  {
    var moveFinish2 = cc.callFunc(this.callFuncPopStarAnim, this, from);
    // from.runAction(cc.sequence(cc.delayTime(dTime), moveFinish2, cc.hide()));
    from.runAction(cc.sequence(cc.delayTime(dTime), moveFinish2, cc.fadeOut()));
  },
  callFuncPopStarAnim: function callFuncPopStarAnim(sender, from)
  //卡片爆炸特效监听
  {
    GameTools.playSimpleAudioEngine(0);
    var emitterNode = new cc.Node();
    emitterNode.setPosition(from.getPosition());
    var move_emitter = emitterNode.addComponent(cc.ParticleSystem);
    // let move_emitter = ParticleExplosion.createWithTotalParticles(30);
    // let move_emitter = new cc.ParticleSystem(30);
    switch (from.getNumber()) {
      // case 2:
      //     move_emitter.texture = "res/raw-assets/resources/particals/noe/partical_tex_yellow";
      //     break;
      // case 4:
      //     move_emitter.texture = "res/raw-assets/resources/particals/noe/partical_tex_blue";
      //     break;
      // case 8:
      //     move_emitter.texture = "res/raw-assets/resources/particals/noe/partical_tex_green";
      //     break;
      // case 16:
      //     move_emitter.texture = "res/raw-assets/resources/particals/noe/partical_tex_red";
      //     break;
      // case 32:
      //     move_emitter.texture = "res/raw-assets/resources/particals/noe/partical_tex_purple";
      //     break;
      case 2:
        move_emitter.texture = "pop_game/n6";
        break;
      case 4:
        move_emitter.texture = "pop_game/n6";
        break;
      case 8:
        move_emitter.texture = "pop_game/n6";
        break;
      case 16:
        move_emitter.texture = "pop_game/n6";
        break;
      case 32:
        move_emitter.texture = "pop_game/n6";
        break;
    }
    move_emitter.startColor = cc.color(255, 255, 255, 255);
    move_emitter.startColorVar = cc.color(0, 0, 0, 0);
    move_emitter.endColorVar = cc.color(0, 0, 0, 0);
    move_emitter.endColor = move_emitter.startColor;
    move_emitter.autoRemoveOnFinish = true;
    move_emitter.duration = 0.1;
    move_emitter.emissionRate = 100;
    move_emitter.life = 2;
    move_emitter.lifeVar = 0.5;
    move_emitter.angle = 90;
    move_emitter.angleVar = 360;
    move_emitter.custom = true;
    move_emitter.playOnLoad = true;
    from.getParent().addChild(emitterNode);
  }
};
module.exports = AnimLayerTool;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBbmltTGF5ZXJUb29sLmpzIl0sIm5hbWVzIjpbIkNhcmRTcHJpdGUiLCJyZXF1aXJlIiwiR2FtZUNvbmZpZyIsIkdhbWVUb29scyIsIkdhbWVVaVRvb2xzIiwiREVWSUNFX1dJRFRIIiwiREVWSUNFX0hFSUdIVCIsIk1vdmVCdXR0b25BbmltVHlwZSIsInVwIiwiZG93biIsImxlZnQiLCJyaWdodCIsImxlZnRVcCIsImxlZnREb3duIiwicmlnaHRVcCIsInJpZ2h0RG93biIsIkFuaW1MYXllclRvb2wiLCJtb3ZlQnV0dG9uQW5pbVRpbWUiLCJib3R0b25BbmltIiwiYnV0dG9uIiwiYXJyYXlOb2RlIiwiQXJyYXkiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJpIiwidGltZSIsIk1hdGgiLCJyYW5kb20iLCJ3aWR0aCIsImhlaWdodCIsImFuaW0xIiwiY2MiLCJqdW1wQnkiLCJ2MiIsImFuaW0yIiwiYW5pbTMiLCJzY2FsZUJ5IiwiYW5pbTQiLCJkZWxheVRpbWUiLCJhY3Rpb25zIiwic2VxdWVuY2UiLCJyZXZlcnNlIiwicnVuQWN0aW9uIiwicmVwZWF0Rm9yZXZlciIsImNyZWF0ZVNob3dNZXNzYWdlQm94IiwieCIsInkiLCJuYW1lIiwicm90YXRpb24iLCJwYXJlbnROb2RlIiwiY3JlYXRlU2hvd01lc3NhZ2VCb3hBd2FyZCIsImVuZ2luZVR5cGUiLCJtZXNzYWdlIiwiTm9kZSIsImdldFNwcml0ZUZyYW1lIiwiYWRkQ29tcG9uZW50IiwiU3ByaXRlIiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwic2V0UG9zaXRpb24iLCJvcGFjaXR5IiwiYWRkQ2hpbGQiLCJhY3Rpb24xIiwiZmFkZUluIiwiYWN0aW9uMiIsImFjdGlvbjMiLCJmYWRlT3V0IiwibW92ZUZpbmlzaCIsImNhbGxGdW5jIiwiY2FsbEZ1bmNBZGRTY29yZSIsImFjdGlvbjQiLCJtb3ZlQnV0dG9uQW5pbSIsImlzU2hvdyIsIm1vdmVCdXR0b25BbmltVHlwZSIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsInNpemUiLCJnZXRDb250ZW50U2l6ZSIsIm1vdmVUbyIsImNyZWF0ZUFkZFNjb3JlIiwiYWRkU2NvcmUiLCJhZGRTY29yZVNwcml0ZSIsImxhYmxlIiwiTGFiZWwiLCJmb250IiwibnVtYmVyTGFiZWxBdGxhcyIsInN0cmluZyIsIkdhbWVTY2VuZSIsIm5vZGUiLCJtb3ZlMSIsIm1vdmVCeSIsIm1vdmUyIiwibW92ZTMiLCJzcGF3biIsInNlbmRlciIsImRlc3Ryb3kiLCJjcmVhdGVTY29yZU1vdmVBbmltIiwiZnJvbSIsInNjb3JlIiwic2NvcmVUeXBlIiwic2NvcmVOdW1iZXJUVEYiLCJnZXRQYXJlbnQiLCJjYWxsRnVuY1Njb3JlTW92ZUFuaW0iLCJlYXNpbmciLCJlYXNlRXhwb25lbnRpYWxJbiIsIkdhbWVMb2dpYyIsInNldFNjb3JlIiwiY3JlYXRlQ2hhbmdlQ2FyZE51bUFuaW0iLCJjYXJkIiwibnVtIiwiY2FyZFNwcml0ZSIsImNyZWF0ZUNhcmRTcHJpdGUiLCJnZXROdW1iZXIiLCJnZXRQb3NpdGlvblgiLCJnZXRQb3NpdGlvblkiLCJhY3RpdmUiLCJzZXROdW1iZXIiLCJzY2FsZVRvIiwiZWFzZUJhY2tJbiIsIm1vdmVGaW5pc2gxIiwiY2FsbEZ1bmNDaGFuZ2VDYXJkTnVtMSIsIm1vdmVGaW5pc2gyIiwiY2FsbEZ1bmNDaGFuZ2VDYXJkTnVtMiIsIkNhcmRTaG93IiwiZnVuRGF0YSIsImNyZWF0ZUV4Y2hhbmdlQ2FyZEFuaW0iLCJ6IiwiWCIsIlkiLCJ1bml0U2l6ZSIsIkNBUkRfV0lEVEgiLCJDQUVEX0xJTkVTIiwiY2FyZDEiLCJjbG9uZSIsImNhcmQyIiwiY2FyZDMiLCJjYXJkNCIsImNyZWF0ZVJlbW92ZUV4Y2hhbmdlQ2FyZEFuaW0iLCJyZW1vdmVDaGlsZEJ5VGFnIiwiY3JlYXRlU2NhbGVUb0NhcmQiLCJudW1iZXIiLCJzZXRTY2FsZSIsImVhc2VCYWNrT3V0IiwiY2FsbEZ1bmNDYXJkMSIsImNyZWF0ZU1vdmVBbmltIiwidG8iLCJpc1Nob3dBbmltIiwiY2FsbEZ1bmNDYXJkMiIsImVhc2VCYWNrSW5PdXQiLCJqdW1wVG8iLCJzY2FsZSIsImNhbGxGdW5jQ2FyZDMiLCJjcmVhdGVQb3BTdGFyQW5pbSIsImRUaW1lIiwiY2FsbEZ1bmNQb3BTdGFyQW5pbSIsImVtaXR0ZXJOb2RlIiwiZ2V0UG9zaXRpb24iLCJtb3ZlX2VtaXR0ZXIiLCJQYXJ0aWNsZVN5c3RlbSIsInRleHR1cmUiLCJzdGFydENvbG9yIiwiY29sb3IiLCJzdGFydENvbG9yVmFyIiwiZW5kQ29sb3JWYXIiLCJlbmRDb2xvciIsImF1dG9SZW1vdmVPbkZpbmlzaCIsImR1cmF0aW9uIiwiZW1pc3Npb25SYXRlIiwibGlmZSIsImxpZmVWYXIiLCJhbmdsZSIsImFuZ2xlVmFyIiwiY3VzdG9tIiwicGxheU9uTG9hZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3RDLElBQUlDLFVBQVUsR0FBR0QsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0QyxJQUFJRSxTQUFTLEdBQUdGLE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDcEMsSUFBSUcsV0FBVyxHQUFHSCxPQUFPLENBQUMsYUFBYSxDQUFDO0FBQ3hDLElBQUlJLFlBQVksR0FBR0gsVUFBVSxDQUFDRyxZQUFZO0FBQzFDLElBQUlDLGFBQWEsR0FBR0osVUFBVSxDQUFDSSxhQUFhO0FBQzVDLElBQUlDLGtCQUFrQixHQUFHO0VBQ3JCQyxFQUFFLEVBQUUsQ0FBQztFQUFDO0VBQ05DLElBQUksRUFBRSxDQUFDO0VBQUM7RUFDUkMsSUFBSSxFQUFFLENBQUM7RUFBQztFQUNSQyxLQUFLLEVBQUUsQ0FBQztFQUFDO0VBQ1RDLE1BQU0sRUFBRSxDQUFDO0VBQUM7RUFDVkMsUUFBUSxFQUFFLENBQUM7RUFBQztFQUNaQyxPQUFPLEVBQUUsQ0FBQztFQUFDO0VBQ1hDLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDakIsQ0FB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ZFNwcml0ZVwiKTtcclxudmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcclxudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XHJcbnZhciBHYW1lVWlUb29scyA9IHJlcXVpcmUoXCJHYW1lVWlUb29sc1wiKTtcclxudmFyIERFVklDRV9XSURUSCA9IEdhbWVDb25maWcuREVWSUNFX1dJRFRIO1xyXG52YXIgREVWSUNFX0hFSUdIVCA9IEdhbWVDb25maWcuREVWSUNFX0hFSUdIVDtcclxudmFyIE1vdmVCdXR0b25BbmltVHlwZSA9IHtcclxuICAgIHVwOiAwLC8v5ZCR5LiKXHJcbiAgICBkb3duOiAxLC8v5ZCR5LiLXHJcbiAgICBsZWZ0OiAyLC8v5ZCR5bemXHJcbiAgICByaWdodDogMywvL+WQkeWPs1xyXG4gICAgbGVmdFVwOiA0LC8v5bem5LiKXHJcbiAgICBsZWZ0RG93bjogNSwvL+W3puS4i1xyXG4gICAgcmlnaHRVcDogNiwvL+WPs+S4ilxyXG4gICAgcmlnaHREb3duOiA3LC8v5Y+z5LiLXHJcbn07XHJcbnZhciBBbmltTGF5ZXJUb29sID0ge1xyXG4gICAgbW92ZUJ1dHRvbkFuaW1UaW1lOiAwLjMsLy8g5oyJ6ZKu5Yqo55S756e75Yqo5pe26Ze0XHJcbiAgICBNb3ZlQnV0dG9uQW5pbVR5cGU6IE1vdmVCdXR0b25BbmltVHlwZSxcclxuICAgIGJvdHRvbkFuaW06IGZ1bmN0aW9uIChidXR0b24pIHsvLyDliJvlu7rmjInpkq7nibnmlYhcclxuICAgICAgICBsZXQgYXJyYXlOb2RlID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgaWYgKGJ1dHRvbi5sZW5ndGggPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGFycmF5Tm9kZVswXSA9IGJ1dHRvbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhcnJheU5vZGUgPSBidXR0b247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlOb2RlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGxldCB0aW1lID0gY2MucmFuZG9tMFRvMSgpICogNSArIDE7XHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gTWF0aC5yYW5kb20oKSAqIDUgKyAxO1xyXG4gICAgICAgICAgICBsZXQgd2lkdGggPSBhcnJheU5vZGVbaV0uaGVpZ2h0IC8gMjAuMDtcclxuICAgICAgICAgICAgbGV0IGFuaW0xID0gY2MuanVtcEJ5KHRpbWUsIGNjLnYyKHdpZHRoLCAwKSwgd2lkdGgsIDEpO1xyXG4gICAgICAgICAgICBsZXQgYW5pbTIgPSBjYy5qdW1wQnkodGltZSwgY2MudjIoLXdpZHRoLCAwKSwgLXdpZHRoLCAxKTtcclxuICAgICAgICAgICAgbGV0IGFuaW0zID0gY2Muc2NhbGVCeSgwLjMsIDEuMSwgMC45KTtcclxuICAgICAgICAgICAgbGV0IGFuaW00ID0gY2MuZGVsYXlUaW1lKHRpbWUpO1xyXG4gICAgICAgICAgICBsZXQgYWN0aW9ucyA9IGNjLnNlcXVlbmNlKGFuaW0xLCBhbmltMiwgYW5pbTMsIGFuaW0zLnJldmVyc2UoKSwgYW5pbTQpO1xyXG4gICAgICAgICAgICBhcnJheU5vZGVbaV0ucnVuQWN0aW9uKGFjdGlvbnMucmVwZWF0Rm9yZXZlcigpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlU2hvd01lc3NhZ2VCb3goeCwgeSwgbmFtZSwgcm90YXRpb24sIHBhcmVudE5vZGUpIHtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVTaG93TWVzc2FnZUJveEF3YXJkKHBhcmVudE5vZGUsIGVuZ2luZVR5cGUpIC8v5Yib5bu65aWW5Yqx5raI5oGv5o+Q56S65qGGXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIGlmIChlbmdpbmVUeXBlID09IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIG1lc3NhZ2UuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBHYW1lVG9vbHMubG92ZTIwNDhGcmFtZUNhY2hlLmdldFNwcml0ZUZyYW1lKFwidG9hc3Q2XCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZW5naW5lVHlwZSA8IDYpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZW5naW5lVHlwZSA8IDgpIHtcclxuICAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3Bfbm9wYWNrL3R4dF9nb29kXCIsIG1lc3NhZ2UuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZW5naW5lVHlwZSA8IDEwKSB7XHJcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX25vcGFjay90eHRfY29vbFwiLG1lc3NhZ2UuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZW5naW5lVHlwZSA8IDEyKSB7XHJcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX25vcGFjay90eHRfdmVyeWdvb2RcIiwgbWVzc2FnZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbmdpbmVUeXBlIDwgMTQpIHtcclxuICAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3Bfbm9wYWNrL3R4dF9zbWFydFwiLCBtZXNzYWdlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9ub3BhY2svdHh0X2Jvb21cIiwgbWVzc2FnZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMyk7XHJcbiAgICAgICAgbWVzc2FnZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICAvLyBtZXNzYWdlLnNldE9wYWNpdHkoMCk7XHJcbiAgICAgICAgbWVzc2FnZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICBwYXJlbnROb2RlLmFkZENoaWxkKG1lc3NhZ2UpO1xyXG5cclxuICAgICAgICBsZXQgYWN0aW9uMSA9IGNjLmZhZGVJbigwLjUpO1xyXG4gICAgICAgIGxldCBhY3Rpb24yID0gY2MuZGVsYXlUaW1lKDEpO1xyXG4gICAgICAgIGxldCBhY3Rpb24zID0gY2MuZmFkZU91dCgwLjUpO1xyXG4gICAgICAgIGxldCBtb3ZlRmluaXNoID0gY2MuY2FsbEZ1bmModGhpcy5jYWxsRnVuY0FkZFNjb3JlLCB0aGlzLCBtZXNzYWdlKTtcclxuICAgICAgICBsZXQgYWN0aW9uNCA9IGNjLnNlcXVlbmNlKGFjdGlvbjEsIGFjdGlvbjIsIGFjdGlvbjMsIG1vdmVGaW5pc2gpO1xyXG4gICAgICAgIG1lc3NhZ2UucnVuQWN0aW9uKGFjdGlvbjQpO1xyXG4gICAgfSxcclxuICAgIG1vdmVCdXR0b25BbmltOiBmdW5jdGlvbiAoYnV0dG9uLCBpc1Nob3csIG1vdmVCdXR0b25BbmltVHlwZSkgey8vIOaMiemSrua2iOWkseaIluWHuueOsOWKqOeUu1xyXG4gICAgICAgIGxldCBwb3NpdGlvblggPSBidXR0b24ueDtcclxuICAgICAgICBsZXQgcG9zaXRpb25ZID0gYnV0dG9uLnk7XHJcbiAgICAgICAgbGV0IHNpemUgPSBidXR0b24uZ2V0Q29udGVudFNpemUoKTtcclxuICAgICAgICBpZiAoaXNTaG93KSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobW92ZUJ1dHRvbkFuaW1UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6Ly8gdXA6XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnNldFBvc2l0aW9uKHBvc2l0aW9uWCwgREVWSUNFX0hFSUdIVCArIHNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTovLyBkb3duOlxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRQb3NpdGlvbihwb3NpdGlvblgsIC1zaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6Ly8gbGVmdDpcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uc2V0UG9zaXRpb24oLXNpemUud2lkdGgsIHBvc2l0aW9uWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6Ly8gcmlnaHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnNldFBvc2l0aW9uKERFVklDRV9XSURUSCArIHNpemUud2lkdGgsIHBvc2l0aW9uWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6Ly8gbGVmdFVwOlxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRQb3NpdGlvbigtc2l6ZS53aWR0aCwgREVWSUNFX0hFSUdIVCArIHNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTovLyBsZWZ0RG93bjpcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uc2V0UG9zaXRpb24oLXNpemUud2lkdGgsIC1zaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6Ly8gcmlnaHRVcDpcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uc2V0UG9zaXRpb24oREVWSUNFX1dJRFRIICsgc2l6ZS53aWR0aCwgREVWSUNFX0hFSUdIVCArIHNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNzovLyByaWdodERvd246XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnNldFBvc2l0aW9uKERFVklDRV9XSURUSCArIHNpemUud2lkdGgsIC1zaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBhbmltMSA9IGNjLm1vdmVUbyh0aGlzLm1vdmVCdXR0b25BbmltVGltZSwgY2MudjIocG9zaXRpb25YLCBwb3NpdGlvblkpKTtcclxuICAgICAgICAgICAgYnV0dG9uLnJ1bkFjdGlvbihhbmltMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgYW5pbTE7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobW92ZUJ1dHRvbkFuaW1UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6Ly8gdXA6XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbTEgPSBjYy5tb3ZlVG8odGhpcy5tb3ZlQnV0dG9uQW5pbVRpbWUsIGNjLnYyKHBvc2l0aW9uWCwgREVWSUNFX0hFSUdIVCArIHNpemUuaGVpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6Ly8gZG93bjpcclxuICAgICAgICAgICAgICAgICAgICBhbmltMSA9IGNjLm1vdmVUbyh0aGlzLm1vdmVCdXR0b25BbmltVGltZSwgY2MudjIocG9zaXRpb25YLCAtc2l6ZS5oZWlnaHQpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjovLyBsZWZ0OlxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW0xID0gY2MubW92ZVRvKHRoaXMubW92ZUJ1dHRvbkFuaW1UaW1lLCBjYy52Migtc2l6ZS53aWR0aCwgcG9zaXRpb25ZKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6Ly8gcmlnaHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbTEgPSBjYy5tb3ZlVG8odGhpcy5tb3ZlQnV0dG9uQW5pbVRpbWUsIGNjLnYyKERFVklDRV9XSURUSCArIHNpemUud2lkdGgsIHBvc2l0aW9uWSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0Oi8vIGxlZnRVcDpcclxuICAgICAgICAgICAgICAgICAgICBhbmltMSA9IGNjLm1vdmVUbyh0aGlzLm1vdmVCdXR0b25BbmltVGltZSwgY2MudjIoLXNpemUud2lkdGgsIERFVklDRV9IRUlHSFQgKyBzaXplLmhlaWdodCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1Oi8vIGxlZnREb3duOlxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW0xID0gY2MubW92ZVRvKHRoaXMubW92ZUJ1dHRvbkFuaW1UaW1lLCBjYy52Migtc2l6ZS53aWR0aCwgLXNpemUuaGVpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6Ly8gcmlnaHRVcDpcclxuICAgICAgICAgICAgICAgICAgICBhbmltMSA9IGNjLm1vdmVUbyh0aGlzLm1vdmVCdXR0b25BbmltVGltZSwgY2MudjIoREVWSUNFX1dJRFRIICsgc2l6ZS53aWR0aCwgREVWSUNFX0hFSUdIVCArIHNpemUuaGVpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6Ly8gcmlnaHREb3duOlxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW0xID0gY2MubW92ZVRvKHRoaXMubW92ZUJ1dHRvbkFuaW1UaW1lLCBjYy52MihERVZJQ0VfV0lEVEggKyBzaXplLndpZHRoLCAtc2l6ZS5oZWlnaHQpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uLnJ1bkFjdGlvbihhbmltMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVBZGRTY29yZShhZGRTY29yZSkgLy/liJvlu7rliqDliIbliqjnlLtcclxuICAgIHtcclxuICAgICAgICBsZXQgYWRkU2NvcmVTcHJpdGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIGxldCBsYWJsZSA9IGFkZFNjb3JlU3ByaXRlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgbGFibGUuZm9udCA9IEdhbWVUb29scy5udW1iZXJMYWJlbEF0bGFzO1xyXG4gICAgICAgIGxhYmxlLnN0cmluZyA9IFwiOlwiICsgYWRkU2NvcmU7XHJcbiAgICAgICAgYWRkU2NvcmVTcHJpdGUuc2V0UG9zaXRpb24oLTQ2LCA1MDUpO1xyXG4gICAgICAgIC8vIGFkZFNjb3JlU3ByaXRlLnNldE9wYWNpdHkoMTAwKTtcclxuICAgICAgICBhZGRTY29yZVNwcml0ZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICBHYW1lQ29uZmlnLkdhbWVTY2VuZS5ub2RlLmFkZENoaWxkKGFkZFNjb3JlU3ByaXRlKTtcclxuICAgICAgICBsZXQgbW92ZTEgPSBjYy5tb3ZlQnkoMC4zLCAwLCAxMDYpO1xyXG4gICAgICAgIGxldCBtb3ZlMiA9IGNjLmZhZGVJbigwLjIpO1xyXG4gICAgICAgIGxldCBtb3ZlMyA9IGNjLnNwYXduKG1vdmUxLCBtb3ZlMik7XHJcbiAgICAgICAgbGV0IG1vdmVGaW5pc2ggPSBjYy5jYWxsRnVuYyh0aGlzLmNhbGxGdW5jQWRkU2NvcmUsIHRoaXMsIGFkZFNjb3JlU3ByaXRlKTtcclxuICAgICAgICBhZGRTY29yZVNwcml0ZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UobW92ZTMsIG1vdmVGaW5pc2gpKTtcclxuICAgIH0sXHJcbiAgICBjYWxsRnVuY0FkZFNjb3JlKHNlbmRlciwgbm9kZSkgLy/liJvlu7rliqDliIbliqjnlLvnm5HlkKxcclxuICAgIHtcclxuICAgICAgICBzZW5kZXIuZGVzdHJveSgpO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZVNjb3JlTW92ZUFuaW06IGZ1bmN0aW9uIChmcm9tLCBzY29yZSwgc2NvcmVUeXBlKSB7IC8v5Yib5bu65b6X5YiG56e75Yqo5Yqo55S7XHJcbiAgICAgICAgaWYgKHNjb3JlID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgc2NvcmVOdW1iZXJUVEYgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgICAgICBsZXQgbGFibGUgPSBzY29yZU51bWJlclRURi5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBsYWJsZS5mb250ID0gR2FtZVRvb2xzLm51bWJlckxhYmVsQXRsYXM7XHJcbiAgICAgICAgICAgIGxhYmxlLnN0cmluZyA9IFwiOlwiICsgc2NvcmU7XHJcbiAgICAgICAgICAgIHNjb3JlTnVtYmVyVFRGLnNldFBvc2l0aW9uKGZyb20ueCwgZnJvbS55KTtcclxuICAgICAgICAgICAgZnJvbS5nZXRQYXJlbnQoKS5hZGRDaGlsZChzY29yZU51bWJlclRURik7XHJcbiAgICAgICAgICAgIGxldCBtb3ZlRmluaXNoID0gY2MuY2FsbEZ1bmModGhpcy5jYWxsRnVuY1Njb3JlTW92ZUFuaW0sIHRoaXMsIHNjb3JlTnVtYmVyVFRGKTtcclxuICAgICAgICAgICAgbGV0IG1vdmUxID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHNjb3JlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgbW92ZTEgPSBjYy5tb3ZlVG8oMSwgNTggKyAzNjAsIDQwOCArIDY0MCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtb3ZlMSA9IGNjLm1vdmVUbygxLCAtMjU5ICsgMzYwLCAyOTAgKyA2NDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1vdmUxLmVhc2luZyhjYy5lYXNlRXhwb25lbnRpYWxJbigpKTtcclxuICAgICAgICAgICAgc2NvcmVOdW1iZXJUVEYucnVuQWN0aW9uKGNjLnNlcXVlbmNlKG1vdmUxLCBtb3ZlRmluaXNoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNhbGxGdW5jU2NvcmVNb3ZlQW5pbTogZnVuY3Rpb24gKHNlbmRlciwgc2NvcmVOdW1iZXJUVEYpIHsgLy/lvpfliIbnp7vliqjliqjnlLvnm5HlkKxcclxuICAgICAgICBHYW1lQ29uZmlnLkdhbWVMb2dpYy5zZXRTY29yZSgpO1xyXG4gICAgICAgIHNjb3JlTnVtYmVyVFRGLmRlc3Ryb3koKTtcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlQ2hhbmdlQ2FyZE51bUFuaW06IGZ1bmN0aW9uIChjYXJkLCBudW0pIC8v5Yib5bu656e76Zmk5Yqo55S7XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNhcmRTcHJpdGUgPSBDYXJkU3ByaXRlLmNyZWF0ZUNhcmRTcHJpdGUoY2FyZC5nZXROdW1iZXIoKSwgY2FyZC5nZXRQb3NpdGlvblgoKSwgY2FyZC5nZXRQb3NpdGlvblkoKSk7XHJcbiAgICAgICAgY2FyZC5nZXRQYXJlbnQoKS5hZGRDaGlsZChjYXJkU3ByaXRlKTtcclxuICAgICAgICBjYXJkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNhcmQuc2V0TnVtYmVyKG51bSk7XHJcbiAgICAgICAgY2FyZFNwcml0ZS5zZXROdW1iZXIobnVtKTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbjIgPSBjYy5zY2FsZVRvKDAuMywgMCk7XHJcbiAgICAgICAgYWN0aW9uMi5lYXNpbmcoY2MuZWFzZUJhY2tJbigpKVxyXG4gICAgICAgIGxldCBhY3Rpb24zID0gY2Muc2NhbGVUbygwLjEsIDEpO1xyXG4gICAgICAgIGxldCBtb3ZlRmluaXNoMSA9IGNjLmNhbGxGdW5jKHRoaXMuY2FsbEZ1bmNDaGFuZ2VDYXJkTnVtMSwgdGhpcywgY2FyZFNwcml0ZSk7XHJcbiAgICAgICAgbGV0IG1vdmVGaW5pc2gyID0gY2MuY2FsbEZ1bmModGhpcy5jYWxsRnVuY0NoYW5nZUNhcmROdW0yLCB0aGlzLCBbY2FyZFNwcml0ZSwgY2FyZF0pO1xyXG4gICAgICAgIGxldCBhY3Rpb25zID0gY2Muc2VxdWVuY2UoYWN0aW9uMiwgbW92ZUZpbmlzaDEsIGFjdGlvbjMsIG1vdmVGaW5pc2gyKTtcclxuICAgICAgICBjYXJkU3ByaXRlLnJ1bkFjdGlvbihhY3Rpb25zKTtcclxuICAgIH0sXHJcbiAgICBjYWxsRnVuY0NoYW5nZUNhcmROdW0xOiBmdW5jdGlvbiAoc2VuZGVyLCBjYXJkU3ByaXRlKSAvL+WNoeeJh+enu+mZpOeJueaViOebkeWQrFxyXG4gICAge1xyXG4gICAgICAgIGNhcmRTcHJpdGUuQ2FyZFNob3coKTtcclxuICAgIH0sXHJcbiAgICBjYWxsRnVuY0NoYW5nZUNhcmROdW0yOiBmdW5jdGlvbiAoc2VuZGVyLCBmdW5EYXRhKSAvL+WNoeeJh+enu+mZpOeJueaViOebkeWQrFxyXG4gICAge1xyXG4gICAgICAgIGxldCBjYXJkU3ByaXRlID0gZnVuRGF0YVswXTtcclxuICAgICAgICBsZXQgY2FyZCA9IGZ1bkRhdGFbMV07XHJcbiAgICAgICAgY2FyZC5DYXJkU2hvdygpO1xyXG4gICAgICAgIGNhcmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjYXJkU3ByaXRlLmRlc3Ryb3koKTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVFeGNoYW5nZUNhcmRBbmltOiBmdW5jdGlvbiAoY2FyZCwgeiwgeCkgLy/liJvlu7rpgZPlhbfkuqTmjaLnibnmlYhcclxuICAgIHtcclxuICAgICAgICBsZXQgWCA9IGNhcmQuZ2V0UG9zaXRpb25YKCk7XHJcbiAgICAgICAgbGV0IFkgPSBjYXJkLmdldFBvc2l0aW9uWSgpO1xyXG4gICAgICAgIGxldCB1bml0U2l6ZSA9IEdhbWVDb25maWcuQ0FSRF9XSURUSCAvIChHYW1lQ29uZmlnLkNBRURfTElORVMgKyAxKTtcclxuICAgICAgICBsZXQgbW92ZTEgPSBjYy5zY2FsZUJ5KDAuNCwgMS4xNSk7XHJcbiAgICAgICAgbGV0IGFjdGlvbnMgPSBjYy5zZXF1ZW5jZShtb3ZlMSwgbW92ZTEucmV2ZXJzZSgpKTtcclxuICAgICAgICBpZiAoeiA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGNhcmQxID0gQ2FyZFNwcml0ZS5jcmVhdGVDYXJkU3ByaXRlKC0xLCBYIC0gdW5pdFNpemUgLSBHYW1lQ29uZmlnLkNBUkRfV0lEVEgsIFkpO1xyXG4gICAgICAgICAgICBjYXJkLmdldFBhcmVudCgpLmFkZENoaWxkKGNhcmQxKTtcclxuICAgICAgICAgICAgY2FyZDEucnVuQWN0aW9uKGFjdGlvbnMuY2xvbmUoKS5yZXBlYXRGb3JldmVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUyAtIDEpIHtcclxuICAgICAgICAgICAgbGV0IGNhcmQyID0gQ2FyZFNwcml0ZS5jcmVhdGVDYXJkU3ByaXRlKC0xLCBYICsgdW5pdFNpemUgKyBHYW1lQ29uZmlnLkNBUkRfV0lEVEgsIFkpO1xyXG4gICAgICAgICAgICBjYXJkLmdldFBhcmVudCgpLmFkZENoaWxkKGNhcmQyKTtcclxuICAgICAgICAgICAgY2FyZDIucnVuQWN0aW9uKGFjdGlvbnMuY2xvbmUoKS5yZXBlYXRGb3JldmVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGNhcmQzID0gQ2FyZFNwcml0ZS5jcmVhdGVDYXJkU3ByaXRlKC0xLCBYLCBZIC0gdW5pdFNpemUgLSBHYW1lQ29uZmlnLkNBUkRfV0lEVEgpO1xyXG4gICAgICAgICAgICBjYXJkLmdldFBhcmVudCgpLmFkZENoaWxkKGNhcmQzKTtcclxuICAgICAgICAgICAgY2FyZDMucnVuQWN0aW9uKGFjdGlvbnMuY2xvbmUoKS5yZXBlYXRGb3JldmVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeCA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUyAtIDEpIHtcclxuICAgICAgICAgICAgbGV0IGNhcmQ0ID0gQ2FyZFNwcml0ZS5jcmVhdGVDYXJkU3ByaXRlKC0xLCBYLCBZICsgdW5pdFNpemUgKyBHYW1lQ29uZmlnLkNBUkRfV0lEVEgpO1xyXG4gICAgICAgICAgICBjYXJkLmdldFBhcmVudCgpLmFkZENoaWxkKGNhcmQ0KTtcclxuICAgICAgICAgICAgY2FyZDQucnVuQWN0aW9uKGFjdGlvbnMuY2xvbmUoKS5yZXBlYXRGb3JldmVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlUmVtb3ZlRXhjaGFuZ2VDYXJkQW5pbTogZnVuY3Rpb24gKGNhcmQsIHosIHgpIC8v5Yib5bu66YGT5YW356e76Zmk5Lqk5o2i54m55pWIXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHogPiAwKSB7XHJcbiAgICAgICAgICAgIGNhcmQuZ2V0UGFyZW50KCkucmVtb3ZlQ2hpbGRCeVRhZygyMDAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHogPCBHYW1lQ29uZmlnLkNBRURfTElORVMgLSAxKSB7XHJcbiAgICAgICAgICAgIGNhcmQuZ2V0UGFyZW50KCkucmVtb3ZlQ2hpbGRCeVRhZygyMDAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHggPiAwKSB7XHJcbiAgICAgICAgICAgIGNhcmQuZ2V0UGFyZW50KCkucmVtb3ZlQ2hpbGRCeVRhZygyMDAzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHggPCBHYW1lQ29uZmlnLkNBRURfTElORVMgLSAxKSB7XHJcbiAgICAgICAgICAgIGNhcmQuZ2V0UGFyZW50KCkucmVtb3ZlQ2hpbGRCeVRhZygyMDA0KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZVNjYWxlVG9DYXJkOiBmdW5jdGlvbiAoY2FyZCkgey8vIOWIm+W7uuWNoeeJh+WIneWni+WMluWKqOeUu1xyXG4gICAgICAgIGxldCBjYXJkU3ByaXRlID0gQ2FyZFNwcml0ZS5jcmVhdGVDYXJkU3ByaXRlKGNhcmQubnVtYmVyLCBjYXJkLngsIGNhcmQueSk7XHJcbiAgICAgICAgY2FyZC5nZXRQYXJlbnQoKS5hZGRDaGlsZChjYXJkU3ByaXRlKTtcclxuICAgICAgICBjYXJkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNhcmRTcHJpdGUuc2V0U2NhbGUoMCk7XHJcbiAgICAgICAgbGV0IGFjdGlvbjIgPSBjYy5zY2FsZVRvKDAuMywgMSk7XHJcbiAgICAgICAgYWN0aW9uMi5lYXNpbmcoY2MuZWFzZUJhY2tPdXQoKSk7XHJcbiAgICAgICAgbGV0IG1vdmVGaW5pc2ggPSBjYy5jYWxsRnVuYyh0aGlzLmNhbGxGdW5jQ2FyZDEsIHRoaXMsIFtjYXJkU3ByaXRlLCBjYXJkXSk7XHJcbiAgICAgICAgY2FyZFNwcml0ZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYWN0aW9uMiwgbW92ZUZpbmlzaCkpO1xyXG4gICAgfSxcclxuICAgIGNhbGxGdW5jQ2FyZDE6IGZ1bmN0aW9uIChub2RlLCBjYXJkU3ByaXRlKSB7XHJcbiAgICAgICAgY2FyZFNwcml0ZVsxXS5DYXJkU2hvdygpO1xyXG4gICAgICAgIGNhcmRTcHJpdGVbMV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGNhcmRTcHJpdGVbMF0uZGVzdHJveSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVNb3ZlQW5pbTogZnVuY3Rpb24gKGZyb20sIHRvLCBpc1Nob3dBbmltKSB7XHJcbiAgICAgICAgbGV0IGNhcmRTcHJpdGUgPSBDYXJkU3ByaXRlLmNyZWF0ZUNhcmRTcHJpdGUoZnJvbS5udW1iZXIsIGZyb20ueCwgZnJvbS55KTtcclxuICAgICAgICB0by5nZXRQYXJlbnQoKS5hZGRDaGlsZChjYXJkU3ByaXRlKTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgbGV0IG1vdmVGaW5pc2ggPSBjYy5jYWxsRnVuYyh0aGlzLmNhbGxGdW5jQ2FyZDIsIHRoaXMsIFtjYXJkU3ByaXRlLCB0bywgaXNTaG93QW5pbV0pO1xyXG4gICAgICAgIGxldCBtb3ZlMSA9IGNjLm1vdmVUbygwLjMsIGNjLnYyKHRvLngsIHRvLnkpKTtcclxuICAgICAgICBpZiAoaSA8IDEpIHtcclxuICAgICAgICAgICAgbW92ZTEgPSBjYy5tb3ZlVG8oMC4xLCBjYy52Mih0by54LCB0by55KSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpIDwgMikge1xyXG4gICAgICAgICAgICBtb3ZlMS5lYXNpbmcoY2MuZWFzZUJhY2tJbigpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGkgPCAzKSB7XHJcbiAgICAgICAgICAgIG1vdmUxLmVhc2luZyhjYy5lYXNlQmFja091dCgpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGkgPCA0KSB7XHJcbiAgICAgICAgICAgIG1vdmUxLmVhc2luZyhjYy5lYXNlQmFja0luT3V0KCkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaSA8IDUpIHtcclxuICAgICAgICAgICAgbW92ZTEgPSBjYy5qdW1wVG8oMC4zLCBjYy52Mih0by54LCB0by55KSwgR2FtZUNvbmZpZy5DQVJEX1dJRFRILCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FyZFNwcml0ZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UobW92ZTEsIG1vdmVGaW5pc2gpKTtcclxuICAgIH0sXHJcbiAgICBjYWxsRnVuY0NhcmQyOiBmdW5jdGlvbiAoc2VuZGVyLCB0bykge1xyXG4gICAgICAgIHRvWzFdLkNhcmRTaG93KCk7XHJcbiAgICAgICAgaWYgKHRvWzJdKSB7XHJcbiAgICAgICAgICAgIHRvWzBdLm51bWJlciA9IHRvWzFdLm51bWJlcjtcclxuICAgICAgICAgICAgdG9bMF0uQ2FyZFNob3coKTtcclxuICAgICAgICAgICAgbGV0IHNjYWxlID0gY2Muc2NhbGVCeSgwLjAyLCAxLjE1KTtcclxuICAgICAgICAgICAgbGV0IG1vdmVGaW5pc2ggPSBjYy5jYWxsRnVuYyh0aGlzLmNhbGxGdW5jQ2FyZDMsIHRoaXMsIHRvWzBdKTtcclxuICAgICAgICAgICAgdG9bMF0ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHNjYWxlLCBzY2FsZS5yZXZlcnNlKCksIG1vdmVGaW5pc2gpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvWzBdLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2FsbEZ1bmNDYXJkMzogZnVuY3Rpb24gKHNlbmRlciwgY2FyZCkge1xyXG4gICAgICAgIGNhcmQuZGVzdHJveSgpO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZVBvcFN0YXJBbmltKGZyb20sIGRUaW1lKSAvL+WIm+W7uuWNoeeJh+eIhueCuOeJueaViFxyXG4gICAge1xyXG4gICAgICAgIGxldCBtb3ZlRmluaXNoMiA9IGNjLmNhbGxGdW5jKHRoaXMuY2FsbEZ1bmNQb3BTdGFyQW5pbSwgdGhpcywgZnJvbSk7XHJcbiAgICAgICAgLy8gZnJvbS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKGRUaW1lKSwgbW92ZUZpbmlzaDIsIGNjLmhpZGUoKSkpO1xyXG4gICAgICAgIGZyb20ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShkVGltZSksIG1vdmVGaW5pc2gyLCBjYy5mYWRlT3V0KCkpKTtcclxuICAgIH0sXHJcbiAgICBjYWxsRnVuY1BvcFN0YXJBbmltKHNlbmRlciwgZnJvbSkgLy/ljaHniYfniIbngrjnibnmlYjnm5HlkKxcclxuICAgIHtcclxuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDApO1xyXG4gICAgICAgIGxldCBlbWl0dGVyTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgZW1pdHRlck5vZGUuc2V0UG9zaXRpb24oZnJvbS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICBsZXQgbW92ZV9lbWl0dGVyID0gZW1pdHRlck5vZGUuYWRkQ29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKTtcclxuICAgICAgICAvLyBsZXQgbW92ZV9lbWl0dGVyID0gUGFydGljbGVFeHBsb3Npb24uY3JlYXRlV2l0aFRvdGFsUGFydGljbGVzKDMwKTtcclxuICAgICAgICAvLyBsZXQgbW92ZV9lbWl0dGVyID0gbmV3IGNjLlBhcnRpY2xlU3lzdGVtKDMwKTtcclxuICAgICAgICBzd2l0Y2ggKGZyb20uZ2V0TnVtYmVyKCkpIHtcclxuICAgICAgICAgICAgLy8gY2FzZSAyOlxyXG4gICAgICAgICAgICAvLyAgICAgbW92ZV9lbWl0dGVyLnRleHR1cmUgPSBcInJlcy9yYXctYXNzZXRzL3Jlc291cmNlcy9wYXJ0aWNhbHMvbm9lL3BhcnRpY2FsX3RleF95ZWxsb3dcIjtcclxuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyBjYXNlIDQ6XHJcbiAgICAgICAgICAgIC8vICAgICBtb3ZlX2VtaXR0ZXIudGV4dHVyZSA9IFwicmVzL3Jhdy1hc3NldHMvcmVzb3VyY2VzL3BhcnRpY2Fscy9ub2UvcGFydGljYWxfdGV4X2JsdWVcIjtcclxuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyBjYXNlIDg6XHJcbiAgICAgICAgICAgIC8vICAgICBtb3ZlX2VtaXR0ZXIudGV4dHVyZSA9IFwicmVzL3Jhdy1hc3NldHMvcmVzb3VyY2VzL3BhcnRpY2Fscy9ub2UvcGFydGljYWxfdGV4X2dyZWVuXCI7XHJcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gY2FzZSAxNjpcclxuICAgICAgICAgICAgLy8gICAgIG1vdmVfZW1pdHRlci50ZXh0dXJlID0gXCJyZXMvcmF3LWFzc2V0cy9yZXNvdXJjZXMvcGFydGljYWxzL25vZS9wYXJ0aWNhbF90ZXhfcmVkXCI7XHJcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gY2FzZSAzMjpcclxuICAgICAgICAgICAgLy8gICAgIG1vdmVfZW1pdHRlci50ZXh0dXJlID0gXCJyZXMvcmF3LWFzc2V0cy9yZXNvdXJjZXMvcGFydGljYWxzL25vZS9wYXJ0aWNhbF90ZXhfcHVycGxlXCI7XHJcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgbW92ZV9lbWl0dGVyLnRleHR1cmUgPSBcInBvcF9nYW1lL242XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgbW92ZV9lbWl0dGVyLnRleHR1cmUgPSBcInBvcF9nYW1lL242XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgbW92ZV9lbWl0dGVyLnRleHR1cmUgPSBcInBvcF9nYW1lL242XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxNjpcclxuICAgICAgICAgICAgICAgIG1vdmVfZW1pdHRlci50ZXh0dXJlID0gXCJwb3BfZ2FtZS9uNlwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzI6XHJcbiAgICAgICAgICAgICAgICBtb3ZlX2VtaXR0ZXIudGV4dHVyZSA9IFwicG9wX2dhbWUvbjZcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1vdmVfZW1pdHRlci5zdGFydENvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICBtb3ZlX2VtaXR0ZXIuc3RhcnRDb2xvclZhciA9IGNjLmNvbG9yKDAsIDAsIDAsIDApO1xyXG4gICAgICAgIG1vdmVfZW1pdHRlci5lbmRDb2xvclZhciA9IGNjLmNvbG9yKDAsIDAsIDAsIDApO1xyXG4gICAgICAgIG1vdmVfZW1pdHRlci5lbmRDb2xvciA9IG1vdmVfZW1pdHRlci5zdGFydENvbG9yO1xyXG4gICAgICAgIG1vdmVfZW1pdHRlci5hdXRvUmVtb3ZlT25GaW5pc2ggPSB0cnVlO1xyXG5cclxuICAgICAgICBtb3ZlX2VtaXR0ZXIuZHVyYXRpb24gPSAwLjE7XHJcbiAgICAgICAgbW92ZV9lbWl0dGVyLmVtaXNzaW9uUmF0ZSA9IDEwMDtcclxuICAgICAgICBtb3ZlX2VtaXR0ZXIubGlmZSA9IDI7XHJcbiAgICAgICAgbW92ZV9lbWl0dGVyLmxpZmVWYXIgPSAwLjU7XHJcbiAgICAgICAgbW92ZV9lbWl0dGVyLmFuZ2xlID0gOTA7XHJcbiAgICAgICAgbW92ZV9lbWl0dGVyLmFuZ2xlVmFyID0gMzYwO1xyXG4gICAgICAgIG1vdmVfZW1pdHRlci5jdXN0b20gPSB0cnVlO1xyXG4gICAgICAgIG1vdmVfZW1pdHRlci5wbGF5T25Mb2FkID0gdHJ1ZTtcclxuICAgICAgICBmcm9tLmdldFBhcmVudCgpLmFkZENoaWxkKGVtaXR0ZXJOb2RlKTtcclxuICAgIH0sXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFuaW1MYXllclRvb2w7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/GamePropHelp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '14994fnx85J5J1PEYcF4MrT', 'GamePropHelp');
// Script/panel/GamePropHelp.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameData = require("GameData");
var GameUiTools = require("GameUiTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    backColor: cc.Node,
    title: cc.Sprite,
    propType: cc.Sprite,
    helpText: cc.Label,
    backButton: cc.Node,
    //返回按钮
    getPropButton: cc.Node //获取按钮
  },
  onLoad: function onLoad() {
    GameUiTools.setButtonClickEvents(this, this.backButton, "buttonFunc");
    GameUiTools.setButtonClickEvents(this, this.getPropButton, "buttonFunc");
  },
  setPropType: function setPropType(propType) {
    this.propTypeNumber = propType;
    if (propType == 0) {
      ameUiTools.getSpriteFrame("pop_game/popgame_46", this.title);
      GameUiTools.getSpriteFrame("pop_game/popgame_25", this.propType);
      this.helpText.string = "敲碎你不想要的星星";
    } else if (propType == 1) {
      GameUiTools.getSpriteFrame("pop_game/popgame_38", this.title);
      GameUiTools.getSpriteFrame("pop_game/popgame_31", this.propType);
      this.helpText.string = "可炸掉选中的横排和竖排的星星";
    } else if (propType == 2) {
      GameUiTools.getSpriteFrame("pop_game/popgame_57", this.title);
      GameUiTools.getSpriteFrame("pop_game/popgame_30", this.propType);
      this.helpText.string = "点击星星，可和周围星星交换";
    }
  },
  buttonFunc: function buttonFunc(event) {
    var button = event.target;
    if (this.backButton == button) {
      GameTools.playSimpleAudioEngine(0);
      this.node.destroy();
    } else if (this.getPropButton == button) {
      GameTools.playSimpleAudioEngine(0);
      GameTools.sharePicture();
      GameData.setGamePropNumber(this.propTypeNumber, 1);
      GameConfig.GameScene.setGamePropNumber(this.propTypeNumber);
      this.node.destroy();
    }
    return true;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcR2FtZVByb3BIZWxwLmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiR2FtZURhdGEiLCJHYW1lVWlUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmFja0NvbG9yIiwiTm9kZSIsInRpdGxlIiwiU3ByaXRlIiwicHJvcFR5cGUiLCJoZWxwVGV4dCIsIkxhYmVsIiwiYmFja0J1dHRvbiIsImdldFByb3BCdXR0b24iLCJvbkxvYWQiLCJzZXRCdXR0b25DbGlja0V2ZW50cyIsInNldFByb3BUeXBlIiwicHJvcFR5cGVOdW1iZXIiLCJhbWVVaVRvb2xzIiwiZ2V0U3ByaXRlRnJhbWUiLCJzdHJpbmciLCJidXR0b25GdW5jIiwiZXZlbnQiLCJidXR0b24iLCJ0YXJnZXQiLCJwbGF5U2ltcGxlQXVkaW9FbmdpbmUiLCJub2RlIiwiZGVzdHJveSIsInNoYXJlUGljdHVyZSIsInNldEdhbWVQcm9wTnVtYmVyIiwiR2FtZVNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0QyxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDcEMsSUFBSUUsUUFBUSxHQUFHRixPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ2xDLElBQUlHLFdBQVcsR0FBR0gsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUN4Q0ksRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFDckJDLFVBQVUsRUFBRTtJQUNSQyxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0ssSUFBSTtJQUNsQkMsS0FBSyxFQUFFTixFQUFFLENBQUNPLE1BQU07SUFDaEJDLFFBQVEsRUFBRVIsRUFBRSxDQUFDTyxNQUFNO0lBQ25CRSxRQUFRLEVBQUVULEVBQUUsQ0FBQ1UsS0FBSztJQUNsQkMsVUFBVSxFQUFFWCxFQUFFLENBQUNLLElBQUk7SUFBRTtJQUNyQk8sYUFBYSxFQUFFWixFQUFFLENBQUNLLElBQUksQ0FBRTtFQUM1QixDQUFDO0VBRURRLE1BQU0sV0FBQUEsT0FBQSxFQUFHO0lBQ0xkLFdBQVcsQ0FBQ2Usb0JBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQ0gsVUFBVSxFQUFFLFlBQVksQ0FBQztJQUNyRVosV0FBVyxDQUFDZSxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDRixhQUFhLEVBQUUsWUFBWSxDQUFDO0VBQzVFLENBQUM7RUFFREcsV0FBVyxXQUFBQSxZQUFDUCxRQUFRLEVBQUU7SUFDbEIsSUFBSSxDQUFDUSxjQUFjLEdBQUdSLFFBQVE7SUFDOUIsSUFBSUEsUUFBUSxJQUFJLENBQUMsRUFBRTtNQUNmUyxVQUFVLENBQUNDLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUNaLEtBQUssQ0FBQztNQUM1RFAsV0FBVyxDQUFDbUIsY0FBYyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQ1YsUUFBUSxDQUFDO01BQ2hFLElBQUksQ0FBQ0MsUUFBUSxDQUFDVSxNQUFNLEdBQUcsV0FBVztJQUN0QyxDQUFDLE1BQU0sSUFBSVgsUUFBUSxJQUFJLENBQUMsRUFBRTtNQUN0QlQsV0FBVyxDQUFDbUIsY0FBYyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQ1osS0FBSyxDQUFDO01BQzdEUCxXQUFXLENBQUNtQixjQUFjLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDVixRQUFRLENBQUM7TUFDaEUsSUFBSSxDQUFDQyxRQUFRLENBQUNVLE1BQU0sR0FBRyxnQkFBZ0I7SUFDM0MsQ0FBQyxNQUFNLElBQUlYLFFBQVEsSUFBSSxDQUFDLEVBQUU7TUFDdkJULFdBQVcsQ0FBQ21CLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUNaLEtBQUssQ0FBQztNQUM1RFAsV0FBVyxDQUFDbUIsY0FBYyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQ1YsUUFBUSxDQUFDO01BQ2hFLElBQUksQ0FBQ0MsUUFBUSxDQUFDVSxNQUFNLEdBQUcsZUFBZTtJQUMxQztFQUNKLENBQUM7RUFFREMsVUFBVSxFQUFFLFNBQUFBLFdBQVVDLEtBQUssRUFBRTtJQUN6QixJQUFJQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0UsTUFBTTtJQUN6QixJQUFJLElBQUksQ0FBQ1osVUFBVSxJQUFJVyxNQUFNLEVBQUU7TUFDM0J6QixTQUFTLENBQUMyQixxQkFBcUIsQ0FBQyxDQUFDLENBQUM7TUFDbEMsSUFBSSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sRUFBRTtJQUN2QixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNkLGFBQWEsSUFBSVUsTUFBTSxFQUFFO01BQ3JDekIsU0FBUyxDQUFDMkIscUJBQXFCLENBQUMsQ0FBQyxDQUFDO01BQ2xDM0IsU0FBUyxDQUFDOEIsWUFBWSxFQUFFO01BQ3hCN0IsUUFBUSxDQUFDOEIsaUJBQWlCLENBQUMsSUFBSSxDQUFDWixjQUFjLEVBQUUsQ0FBQyxDQUFDO01BQ2xEckIsVUFBVSxDQUFDa0MsU0FBUyxDQUFDRCxpQkFBaUIsQ0FBQyxJQUFJLENBQUNaLGNBQWMsQ0FBQztNQUMzRCxJQUFJLENBQUNTLElBQUksQ0FBQ0MsT0FBTyxFQUFFO0lBQ3ZCO0lBQ0EsT0FBTyxJQUFJO0VBQ2Y7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XHJcbnZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xyXG52YXIgR2FtZURhdGEgPSByZXF1aXJlKFwiR2FtZURhdGFcIik7XHJcbnZhciBHYW1lVWlUb29scyA9IHJlcXVpcmUoXCJHYW1lVWlUb29sc1wiKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJhY2tDb2xvcjogY2MuTm9kZSxcclxuICAgICAgICB0aXRsZTogY2MuU3ByaXRlLFxyXG4gICAgICAgIHByb3BUeXBlOiBjYy5TcHJpdGUsXHJcbiAgICAgICAgaGVscFRleHQ6IGNjLkxhYmVsLFxyXG4gICAgICAgIGJhY2tCdXR0b246IGNjLk5vZGUsIC8v6L+U5Zue5oyJ6ZKuXHJcbiAgICAgICAgZ2V0UHJvcEJ1dHRvbjogY2MuTm9kZSwgLy/ojrflj5bmjInpkq5cclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMuYmFja0J1dHRvbiwgXCJidXR0b25GdW5jXCIpO1xyXG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMuZ2V0UHJvcEJ1dHRvbiwgXCJidXR0b25GdW5jXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRQcm9wVHlwZShwcm9wVHlwZSkge1xyXG4gICAgICAgIHRoaXMucHJvcFR5cGVOdW1iZXIgPSBwcm9wVHlwZTtcclxuICAgICAgICBpZiAocHJvcFR5cGUgPT0gMCkge1xyXG4gICAgICAgICAgICBhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX2dhbWUvcG9wZ2FtZV80NlwiLCB0aGlzLnRpdGxlKTtcclxuICAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3BfZ2FtZS9wb3BnYW1lXzI1XCIsIHRoaXMucHJvcFR5cGUpO1xyXG4gICAgICAgICAgICB0aGlzLmhlbHBUZXh0LnN0cmluZyA9IFwi5pWy56KO5L2g5LiN5oOz6KaB55qE5pif5pifXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wVHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX2dhbWUvcG9wZ2FtZV8zOFwiLCB0aGlzLnRpdGxlKTtcclxuICAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3BfZ2FtZS9wb3BnYW1lXzMxXCIsIHRoaXMucHJvcFR5cGUpO1xyXG4gICAgICAgICAgICB0aGlzLmhlbHBUZXh0LnN0cmluZyA9IFwi5Y+v54K45o6J6YCJ5Lit55qE5qiq5o6S5ZKM56uW5o6S55qE5pif5pifXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wVHlwZSA9PSAyKSB7XHJcbiAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3BfZ2FtZS9wb3BnYW1lXzU3XCIsIHRoaXMudGl0bGUpO1xyXG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL3BvcGdhbWVfMzBcIiwgdGhpcy5wcm9wVHlwZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaGVscFRleHQuc3RyaW5nID0gXCLngrnlh7vmmJ/mmJ/vvIzlj6/lkozlkajlm7TmmJ/mmJ/kuqTmjaJcIjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGJ1dHRvbkZ1bmM6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFja0J1dHRvbiA9PSBidXR0b24pIHtcclxuICAgICAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgwKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0UHJvcEJ1dHRvbiA9PSBidXR0b24pIHtcclxuICAgICAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgwKTtcclxuICAgICAgICAgICAgR2FtZVRvb2xzLnNoYXJlUGljdHVyZSgpO1xyXG4gICAgICAgICAgICBHYW1lRGF0YS5zZXRHYW1lUHJvcE51bWJlcih0aGlzLnByb3BUeXBlTnVtYmVyLCAxKTtcclxuICAgICAgICAgICAgR2FtZUNvbmZpZy5HYW1lU2NlbmUuc2V0R2FtZVByb3BOdW1iZXIodGhpcy5wcm9wVHlwZU51bWJlcik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/GamePass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '96845POniBJCI0lyGy969Pc', 'GamePass');
// Script/panel/GamePass.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameData = require("GameData");
var GameUiTools = require("GameUiTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    passLabel: cc.Label,
    scoreLabel: cc.Label,
    nextPassButton: cc.Node,
    //下一关按钮
    shareButton: cc.Node,
    //分享按钮
    backButton: cc.Node //返回按钮
  },
  onLoad: function onLoad() {
    this.passLabel.string = "第  " + GameData.getGamePassNum() + "  关";
    this.scoreLabel.string = GameData.score0;
    GameUiTools.setButtonClickEvents(this, this.nextPassButton, "buttonFunc");
    GameUiTools.setButtonClickEvents(this, this.shareButton, "buttonFunc");
    GameUiTools.setButtonClickEvents(this, this.backButton, "buttonFunc");
  },
  buttonFunc: function buttonFunc(event) {
    var button = event.target;
    if (this.shareButton == button) {
      GameTools.playSimpleAudioEngine(0);
      GameTools.sharePicture();
    } else if (this.nextPassButton == button) {
      GameTools.playSimpleAudioEngine(0);
      this.node.destroy();
      GameConfig.GameLogic.autoCreateCardNumber();
    } else if (this.backButton == button) {
      GameTools.playSimpleAudioEngine(0);
      GameConfig.GameLogic.autoCreateCardNumber();
      GameConfig.GameLogic.saveMemoryInformation();
      this.loadingResource();
    }
    return true;
  },
  loadingResource: function loadingResource() {
    GameConfig.loadingSceneType = GameConfig.LoadingSceneType.LoadingSceneBackGame;
    GameConfig.mainMenu = GameConfig.MainMenu.MainMenuSpace;
    cc.director.loadScene("LoadingScene");
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcR2FtZVBhc3MuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVG9vbHMiLCJHYW1lRGF0YSIsIkdhbWVVaVRvb2xzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwYXNzTGFiZWwiLCJMYWJlbCIsInNjb3JlTGFiZWwiLCJuZXh0UGFzc0J1dHRvbiIsIk5vZGUiLCJzaGFyZUJ1dHRvbiIsImJhY2tCdXR0b24iLCJvbkxvYWQiLCJzdHJpbmciLCJnZXRHYW1lUGFzc051bSIsInNjb3JlMCIsInNldEJ1dHRvbkNsaWNrRXZlbnRzIiwiYnV0dG9uRnVuYyIsImV2ZW50IiwiYnV0dG9uIiwidGFyZ2V0IiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwic2hhcmVQaWN0dXJlIiwibm9kZSIsImRlc3Ryb3kiLCJHYW1lTG9naWMiLCJhdXRvQ3JlYXRlQ2FyZE51bWJlciIsInNhdmVNZW1vcnlJbmZvcm1hdGlvbiIsImxvYWRpbmdSZXNvdXJjZSIsImxvYWRpbmdTY2VuZVR5cGUiLCJMb2FkaW5nU2NlbmVUeXBlIiwiTG9hZGluZ1NjZW5lQmFja0dhbWUiLCJtYWluTWVudSIsIk1haW5NZW51IiwiTWFpbk1lbnVTcGFjZSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0QyxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDcEMsSUFBSUUsUUFBUSxHQUFHRixPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ2xDLElBQUlHLFdBQVcsR0FBR0gsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUN4Q0ksRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFDckJDLFVBQVUsRUFBRTtJQUNSQyxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0ssS0FBSztJQUNuQkMsVUFBVSxFQUFFTixFQUFFLENBQUNLLEtBQUs7SUFDcEJFLGNBQWMsRUFBRVAsRUFBRSxDQUFDUSxJQUFJO0lBQUU7SUFDekJDLFdBQVcsRUFBRVQsRUFBRSxDQUFDUSxJQUFJO0lBQUU7SUFDdEJFLFVBQVUsRUFBRVYsRUFBRSxDQUFDUSxJQUFJLENBQUU7RUFDekIsQ0FBQztFQUVERyxNQUFNLFdBQUFBLE9BQUEsRUFBRztJQUNMLElBQUksQ0FBQ1AsU0FBUyxDQUFDUSxNQUFNLEdBQUcsS0FBSyxHQUFHZCxRQUFRLENBQUNlLGNBQWMsRUFBRSxHQUFHLEtBQUs7SUFDakUsSUFBSSxDQUFDUCxVQUFVLENBQUNNLE1BQU0sR0FBR2QsUUFBUSxDQUFDZ0IsTUFBTTtJQUN4Q2YsV0FBVyxDQUFDZ0Isb0JBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQ1IsY0FBYyxFQUFFLFlBQVksQ0FBQztJQUN6RVIsV0FBVyxDQUFDZ0Isb0JBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQ04sV0FBVyxFQUFFLFlBQVksQ0FBQztJQUN0RVYsV0FBVyxDQUFDZ0Isb0JBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQ0wsVUFBVSxFQUFFLFlBQVksQ0FBQztFQUN6RSxDQUFDO0VBRURNLFVBQVUsRUFBRSxTQUFBQSxXQUFVQyxLQUFLLEVBQUU7SUFDekIsSUFBSUMsTUFBTSxHQUFHRCxLQUFLLENBQUNFLE1BQU07SUFDekIsSUFBSSxJQUFJLENBQUNWLFdBQVcsSUFBSVMsTUFBTSxFQUFFO01BQzVCckIsU0FBUyxDQUFDdUIscUJBQXFCLENBQUMsQ0FBQyxDQUFDO01BQ2xDdkIsU0FBUyxDQUFDd0IsWUFBWSxFQUFFO0lBQzVCLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ2QsY0FBYyxJQUFJVyxNQUFNLEVBQUU7TUFDdENyQixTQUFTLENBQUN1QixxQkFBcUIsQ0FBQyxDQUFDLENBQUM7TUFDbEMsSUFBSSxDQUFDRSxJQUFJLENBQUNDLE9BQU8sRUFBRTtNQUNuQjVCLFVBQVUsQ0FBQzZCLFNBQVMsQ0FBQ0Msb0JBQW9CLEVBQUU7SUFDL0MsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDZixVQUFVLElBQUlRLE1BQU0sRUFBRTtNQUNsQ3JCLFNBQVMsQ0FBQ3VCLHFCQUFxQixDQUFDLENBQUMsQ0FBQztNQUNsQ3pCLFVBQVUsQ0FBQzZCLFNBQVMsQ0FBQ0Msb0JBQW9CLEVBQUU7TUFDM0M5QixVQUFVLENBQUM2QixTQUFTLENBQUNFLHFCQUFxQixFQUFFO01BQzVDLElBQUksQ0FBQ0MsZUFBZSxFQUFFO0lBQzFCO0lBQ0EsT0FBTyxJQUFJO0VBQ2YsQ0FBQztFQUNEQSxlQUFlLEVBQUUsU0FBQUEsZ0JBQUEsRUFBWTtJQUN6QmhDLFVBQVUsQ0FBQ2lDLGdCQUFnQixHQUFHakMsVUFBVSxDQUFDa0MsZ0JBQWdCLENBQUNDLG9CQUFvQjtJQUM5RW5DLFVBQVUsQ0FBQ29DLFFBQVEsR0FBR3BDLFVBQVUsQ0FBQ3FDLFFBQVEsQ0FBQ0MsYUFBYTtJQUN2RGpDLEVBQUUsQ0FBQ2tDLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDLGNBQWMsQ0FBQztFQUN6QztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcclxudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XHJcbnZhciBHYW1lRGF0YSA9IHJlcXVpcmUoXCJHYW1lRGF0YVwiKTtcclxudmFyIEdhbWVVaVRvb2xzID0gcmVxdWlyZShcIkdhbWVVaVRvb2xzXCIpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcGFzc0xhYmVsOiBjYy5MYWJlbCxcclxuICAgICAgICBzY29yZUxhYmVsOiBjYy5MYWJlbCxcclxuICAgICAgICBuZXh0UGFzc0J1dHRvbjogY2MuTm9kZSwgLy/kuIvkuIDlhbPmjInpkq5cclxuICAgICAgICBzaGFyZUJ1dHRvbjogY2MuTm9kZSwgLy/liIbkuqvmjInpkq5cclxuICAgICAgICBiYWNrQnV0dG9uOiBjYy5Ob2RlLCAvL+i/lOWbnuaMiemSrlxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5wYXNzTGFiZWwuc3RyaW5nID0gXCLnrKwgIFwiICsgR2FtZURhdGEuZ2V0R2FtZVBhc3NOdW0oKSArIFwiICDlhbNcIjtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gR2FtZURhdGEuc2NvcmUwO1xyXG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMubmV4dFBhc3NCdXR0b24sIFwiYnV0dG9uRnVuY1wiKTtcclxuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLnNoYXJlQnV0dG9uLCBcImJ1dHRvbkZ1bmNcIik7XHJcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5iYWNrQnV0dG9uLCBcImJ1dHRvbkZ1bmNcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGJ1dHRvbkZ1bmM6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hhcmVCdXR0b24gPT0gYnV0dG9uKSB7XHJcbiAgICAgICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XHJcbiAgICAgICAgICAgIEdhbWVUb29scy5zaGFyZVBpY3R1cmUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubmV4dFBhc3NCdXR0b24gPT0gYnV0dG9uKSB7XHJcbiAgICAgICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZUxvZ2ljLmF1dG9DcmVhdGVDYXJkTnVtYmVyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJhY2tCdXR0b24gPT0gYnV0dG9uKSB7XHJcbiAgICAgICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XHJcbiAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZUxvZ2ljLmF1dG9DcmVhdGVDYXJkTnVtYmVyKCk7XHJcbiAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZUxvZ2ljLnNhdmVNZW1vcnlJbmZvcm1hdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdSZXNvdXJjZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBsb2FkaW5nUmVzb3VyY2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBHYW1lQ29uZmlnLmxvYWRpbmdTY2VuZVR5cGUgPSBHYW1lQ29uZmlnLkxvYWRpbmdTY2VuZVR5cGUuTG9hZGluZ1NjZW5lQmFja0dhbWU7XHJcbiAgICAgICAgR2FtZUNvbmZpZy5tYWluTWVudSA9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVTcGFjZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJMb2FkaW5nU2NlbmVcIik7XHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/GamePropNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'baa95mizZVN5pOs1SeqB98u', 'GamePropNode');
// Script/panel/GamePropNode.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameData = require("GameData");
var GameUiTools = require("GameUiTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    propType: cc.Sprite,
    porpNumberLabel: cc.Label,
    porpNumberNode: cc.Node,
    addNode: cc.Node,
    propTypeNumber: 0
  },
  onLoad: function onLoad() {
    if (this.propTypeNumber == 0) {
      GameUiTools.getSpriteFrame("pop_game/popgame_25", this.propType);
    } else if (this.propTypeNumber == 1) {
      GameUiTools.getSpriteFrame("pop_game/popgame_31", this.propType);
    } else if (this.propTypeNumber == 2) {
      GameUiTools.getSpriteFrame("pop_game/popgame_30", this.propType);
    }
    this.setPropType();
  },
  setPropType: function setPropType() {
    if (GameData.getGamePropNumber(this.propTypeNumber) > 0) {
      this.porpNumberNode.active = true;
      this.porpNumberLabel.string = GameData.getGamePropNumber(this.propTypeNumber);
      this.addNode.active = false;
    } else {
      this.porpNumberNode.active = false;
      this.addNode.active = true;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcR2FtZVByb3BOb2RlLmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiR2FtZURhdGEiLCJHYW1lVWlUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicHJvcFR5cGUiLCJTcHJpdGUiLCJwb3JwTnVtYmVyTGFiZWwiLCJMYWJlbCIsInBvcnBOdW1iZXJOb2RlIiwiTm9kZSIsImFkZE5vZGUiLCJwcm9wVHlwZU51bWJlciIsIm9uTG9hZCIsImdldFNwcml0ZUZyYW1lIiwic2V0UHJvcFR5cGUiLCJnZXRHYW1lUHJvcE51bWJlciIsImFjdGl2ZSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDdEMsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDLElBQUlFLFFBQVEsR0FBR0YsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNsQyxJQUFJRyxXQUFXLEdBQUdILE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDeENJLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBQ3JCQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFFSixFQUFFLENBQUNLLE1BQU07SUFDbkJDLGVBQWUsRUFBRU4sRUFBRSxDQUFDTyxLQUFLO0lBQ3pCQyxjQUFjLEVBQUVSLEVBQUUsQ0FBQ1MsSUFBSTtJQUN2QkMsT0FBTyxFQUFFVixFQUFFLENBQUNTLElBQUk7SUFDaEJFLGNBQWMsRUFBRTtFQUNwQixDQUFDO0VBRURDLE1BQU0sV0FBQUEsT0FBQSxFQUFHO0lBQ0wsSUFBSSxJQUFJLENBQUNELGNBQWMsSUFBSSxDQUFDLEVBQUU7TUFDMUJaLFdBQVcsQ0FBQ2MsY0FBYyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQ1QsUUFBUSxDQUFDO0lBQ3BFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ08sY0FBYyxJQUFJLENBQUMsRUFBRTtNQUNqQ1osV0FBVyxDQUFDYyxjQUFjLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDVCxRQUFRLENBQUM7SUFDcEUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDTyxjQUFjLElBQUksQ0FBQyxFQUFFO01BQ2pDWixXQUFXLENBQUNjLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUNULFFBQVEsQ0FBQztJQUNwRTtJQUNBLElBQUksQ0FBQ1UsV0FBVyxFQUFFO0VBQ3RCLENBQUM7RUFFREEsV0FBVyxXQUFBQSxZQUFBLEVBQUc7SUFDVixJQUFJaEIsUUFBUSxDQUFDaUIsaUJBQWlCLENBQUMsSUFBSSxDQUFDSixjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7TUFDckQsSUFBSSxDQUFDSCxjQUFjLENBQUNRLE1BQU0sR0FBRyxJQUFJO01BQ2pDLElBQUksQ0FBQ1YsZUFBZSxDQUFDVyxNQUFNLEdBQUduQixRQUFRLENBQUNpQixpQkFBaUIsQ0FBQyxJQUFJLENBQUNKLGNBQWMsQ0FBQztNQUM3RSxJQUFJLENBQUNELE9BQU8sQ0FBQ00sTUFBTSxHQUFHLEtBQUs7SUFDL0IsQ0FBQyxNQUFNO01BQ0gsSUFBSSxDQUFDUixjQUFjLENBQUNRLE1BQU0sR0FBRyxLQUFLO01BQ2xDLElBQUksQ0FBQ04sT0FBTyxDQUFDTSxNQUFNLEdBQUcsSUFBSTtJQUM5QjtFQUNKO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xyXG52YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcclxudmFyIEdhbWVEYXRhID0gcmVxdWlyZShcIkdhbWVEYXRhXCIpO1xyXG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwcm9wVHlwZTogY2MuU3ByaXRlLFxyXG4gICAgICAgIHBvcnBOdW1iZXJMYWJlbDogY2MuTGFiZWwsXHJcbiAgICAgICAgcG9ycE51bWJlck5vZGU6IGNjLk5vZGUsXHJcbiAgICAgICAgYWRkTm9kZTogY2MuTm9kZSxcclxuICAgICAgICBwcm9wVHlwZU51bWJlcjogMCxcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BUeXBlTnVtYmVyID09IDApIHtcclxuICAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3BfZ2FtZS9wb3BnYW1lXzI1XCIsIHRoaXMucHJvcFR5cGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wVHlwZU51bWJlciA9PSAxKSB7XHJcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX2dhbWUvcG9wZ2FtZV8zMVwiLCB0aGlzLnByb3BUeXBlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcFR5cGVOdW1iZXIgPT0gMikge1xyXG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL3BvcGdhbWVfMzBcIiwgdGhpcy5wcm9wVHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0UHJvcFR5cGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0UHJvcFR5cGUoKSB7XHJcbiAgICAgICAgaWYgKEdhbWVEYXRhLmdldEdhbWVQcm9wTnVtYmVyKHRoaXMucHJvcFR5cGVOdW1iZXIpID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvcnBOdW1iZXJOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucG9ycE51bWJlckxhYmVsLnN0cmluZyA9IEdhbWVEYXRhLmdldEdhbWVQcm9wTnVtYmVyKHRoaXMucHJvcFR5cGVOdW1iZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wb3JwTnVtYmVyTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5hZGROb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Exts/PopupBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b309DKPnFIO4TAkDBGjZqZ', 'PopupBase');
// Exts/PopupBase.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ccclass, property } = cc._decorator;
let PopupBase = class PopupBase extends cc.Component {
    constructor() {
        super(...arguments);
        this.container = null;
        this._tweenShowPopup = null;
        this._tweenClosePopup = null;
    }
    close() {
        if (this.container) {
            this.container.active = false;
        }
    }
    open() {
        if (this.container) {
            this.container.active = true;
        }
    }
    onLoad() {
        this._tweenShowPopup = cc.tween(this.container).to(0.2, { opacity: 255 });
        this._tweenClosePopup = cc.tween(this.container).to(0.2, { opacity: 0 });
    }
    openWithEffect() {
        if (this.container) {
            this.container.active = true;
            this.container.opacity = 0;
            if (!this._tweenShowPopup) {
                this._tweenShowPopup = cc.tween(this.container).to(0.2, { opacity: 255 });
            }
            this._tweenShowPopup.start();
        }
    }
    closeWithEffect() {
        if (!this._tweenClosePopup) {
            this._tweenClosePopup = cc.tween(this.container).to(0.2, { opacity: 0 });
        }
        this._tweenClosePopup.call(() => {
            this.container.active = false;
        }).start();
    }
};
__decorate([
    property({ type: cc.Node })
], PopupBase.prototype, "container", void 0);
PopupBase = __decorate([
    ccclass
], PopupBase);
exports.default = PopupBase;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRXh0c1xcUG9wdXBCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDO0FBRTVDLElBQXFCLFNBQVMsR0FBOUIsTUFBcUIsU0FBVSxTQUFRLEVBQUUsQ0FBQyxTQUFTO0lBQW5EOztRQUVpQyxjQUFTLEdBQW1CLElBQUksQ0FBQztRQW9COUQsb0JBQWUsR0FBb0IsSUFBSSxDQUFDO1FBQ3hDLHFCQUFnQixHQUFvQixJQUFJLENBQUM7SUFvQjdDLENBQUM7SUF2Q0csS0FBSztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDakM7SUFFTCxDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDaEM7SUFDTCxDQUFDO0lBRVMsTUFBTTtRQUNaLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUlELGNBQWM7UUFDVixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDN0U7WUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDNUU7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0NBQ0osQ0FBQTtBQXpDZ0M7SUFBNUIsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs0Q0FBa0M7QUFGN0MsU0FBUztJQUQ3QixPQUFPO0dBQ2EsU0FBUyxDQTJDN0I7a0JBM0NvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwQmFzZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSB9KSBjb250YWluZXI6IGNjLk5vZGUgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jb250YWluZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3R3ZWVuU2hvd1BvcHVwID0gY2MudHdlZW4odGhpcy5jb250YWluZXIpLnRvKDAuMiwgeyBvcGFjaXR5OiAyNTUgfSk7XHJcbiAgICAgICAgdGhpcy5fdHdlZW5DbG9zZVBvcHVwID0gY2MudHdlZW4odGhpcy5jb250YWluZXIpLnRvKDAuMiwgeyBvcGFjaXR5OiAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF90d2VlblNob3dQb3B1cDogY2MuVHdlZW4gfCBudWxsID0gbnVsbDtcclxuICAgIF90d2VlbkNsb3NlUG9wdXA6IGNjLlR3ZWVuIHwgbnVsbCA9IG51bGw7XHJcbiAgICBvcGVuV2l0aEVmZmVjdCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jb250YWluZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fdHdlZW5TaG93UG9wdXApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3R3ZWVuU2hvd1BvcHVwID0gY2MudHdlZW4odGhpcy5jb250YWluZXIpLnRvKDAuMiwgeyBvcGFjaXR5OiAyNTUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fdHdlZW5TaG93UG9wdXAuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VXaXRoRWZmZWN0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5fdHdlZW5DbG9zZVBvcHVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3R3ZWVuQ2xvc2VQb3B1cCA9IGNjLnR3ZWVuKHRoaXMuY29udGFpbmVyKS50bygwLjIsIHsgb3BhY2l0eTogMCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdHdlZW5DbG9zZVBvcHVwLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/RankingListView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31b56tJWjpPlrcCAXTwiyUM', 'RankingListView');
// Script/panel/RankingListView.js

"use strict";

var GameConfig = require("GameConfig");
var AnimLayerTool = require("AnimLayerTool");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
cc.Class({
  "extends": cc.Component,
  // name: "RankingListView",
  properties: {
    backButton: cc.Node,
    // shareButton: cc.Node,
    rankingScrollView: cc.Sprite,
    //显示排行榜
    shareTicket: null
  },
  onLoad: function onLoad() {},
  start: function start() {
    GameUiTools.setButtonClickEvents(this, this.backButton, "backButtonFunc");
    // GameUiTools.setButtonClickEvents(this, this.shareButton, "shareButtonFunc");
    if (this.shareTicket != null) {
      var shareNode = new cc.Node();
      shareNode.addComponent(cc.Label).string = "群排行";
      shareNode.setPosition(-260, 503);
      this.node.addChild(shareNode);
    }
    if (CC_WECHATGAME) {
      if (window.sharedCanvas != undefined) {
        this.tex = new cc.Texture2D();
        window.sharedCanvas.width = 720;
        window.sharedCanvas.height = 1280;
        // 发消息给子域
        if (this.shareTicket != null) {
          window.wx.postMessage({
            messageType: 5,
            MAIN_MENU_NUM: GameConfig.MAIN_MENU_NUM,
            shareTicket: this.shareTicket
          });
        } else {
          window.wx.postMessage({
            messageType: 1,
            MAIN_MENU_NUM: GameConfig.MAIN_MENU_NUM
          });
        }
      }
    } else {
      var gameTypeNode = new cc.Node();
      gameTypeNode.addComponent(cc.Label).string = "暂无排行榜数据";
      this.node.addChild(gameTypeNode);
      cc.log("获取排行榜数据。" + GameConfig.MAIN_MENU_NUM);
    }
  },
  shareButtonFunc: function shareButtonFunc(event) {
    GameTools.playSimpleAudioEngine(4);
    setTimeout(function () {
      GameTools.sharePicture("shareTicket");
    }, 100);
  },
  backButtonFunc: function backButtonFunc(event) {
    GameTools.playSimpleAudioEngine(0);
    this.node.destroy();
  },
  // 刷新子域的纹理
  _updateSubDomainCanvas: function _updateSubDomainCanvas() {
    if (CC_WECHATGAME) {
      if (window.sharedCanvas != undefined) {
        this.tex.initWithElement(window.sharedCanvas);
        this.tex.handleLoadedTexture();
        this.rankingScrollView.spriteFrame = new cc.SpriteFrame(this.tex);
      }
    }
  },
  update: function update() {
    this._updateSubDomainCanvas();
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcUmFua2luZ0xpc3RWaWV3LmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiQW5pbUxheWVyVG9vbCIsIkdhbWVUb29scyIsIkdhbWVVaVRvb2xzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiYWNrQnV0dG9uIiwiTm9kZSIsInJhbmtpbmdTY3JvbGxWaWV3IiwiU3ByaXRlIiwic2hhcmVUaWNrZXQiLCJvbkxvYWQiLCJzdGFydCIsInNldEJ1dHRvbkNsaWNrRXZlbnRzIiwic2hhcmVOb2RlIiwiYWRkQ29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJzZXRQb3NpdGlvbiIsIm5vZGUiLCJhZGRDaGlsZCIsIkNDX1dFQ0hBVEdBTUUiLCJ3aW5kb3ciLCJzaGFyZWRDYW52YXMiLCJ1bmRlZmluZWQiLCJ0ZXgiLCJUZXh0dXJlMkQiLCJ3aWR0aCIsImhlaWdodCIsInd4IiwicG9zdE1lc3NhZ2UiLCJtZXNzYWdlVHlwZSIsIk1BSU5fTUVOVV9OVU0iLCJnYW1lVHlwZU5vZGUiLCJsb2ciLCJzaGFyZUJ1dHRvbkZ1bmMiLCJldmVudCIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsInNldFRpbWVvdXQiLCJzaGFyZVBpY3R1cmUiLCJiYWNrQnV0dG9uRnVuYyIsImRlc3Ryb3kiLCJfdXBkYXRlU3ViRG9tYWluQ2FudmFzIiwiaW5pdFdpdGhFbGVtZW50IiwiaGFuZGxlTG9hZGVkVGV4dHVyZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3RDLElBQUlDLGFBQWEsR0FBR0QsT0FBTyxDQUFDLGVBQWUsQ0FBQztBQUM1QyxJQUFJRSxTQUFTLEdBQUdGLE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDcEMsSUFBSUcsV0FBVyxH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Q0MsWUFBWSxJQUFJQyxTQUFTLEVBQUU7UUFDbEMsSUFBSSxDQUFDQyxHQUFHLENBQUNrQixlQUFlLENBQUNyQixNQUFNLENBQUNDLFlBQVksQ0FBQztRQUM3QyxJQUFJLENBQUNFLEdBQUcsQ0FBQ21CLG1CQUFtQixFQUFFO1FBQzlCLElBQUksQ0FBQ3BDLGlCQUFpQixDQUFDcUMsV0FBVyxHQUFHLElBQUkzQyxFQUFFLENBQUM0QyxXQUFXLENBQUMsSUFBSSxDQUFDckIsR0FBRyxDQUFDO01BQ3JFO0lBQ0o7RUFDSixDQUFDO0VBQ0RzQixNQUFNLFdBQUFBLE9BQUEsRUFBRztJQUNMLElBQUksQ0FBQ0wsc0JBQXNCLEVBQUU7RUFDakM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XHJcbnZhciBBbmltTGF5ZXJUb29sID0gcmVxdWlyZShcIkFuaW1MYXllclRvb2xcIik7XHJcbnZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xyXG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIC8vIG5hbWU6IFwiUmFua2luZ0xpc3RWaWV3XCIsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYmFja0J1dHRvbjogY2MuTm9kZSxcclxuICAgICAgICAvLyBzaGFyZUJ1dHRvbjogY2MuTm9kZSxcclxuICAgICAgICByYW5raW5nU2Nyb2xsVmlldzogY2MuU3ByaXRlLC8v5pi+56S65o6S6KGM5qacXHJcbiAgICAgICAgc2hhcmVUaWNrZXQ6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfSxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMuYmFja0J1dHRvbiwgXCJiYWNrQnV0dG9uRnVuY1wiKTtcclxuICAgICAgICAvLyBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLnNoYXJlQnV0dG9uLCBcInNoYXJlQnV0dG9uRnVuY1wiKTtcclxuICAgICAgICBpZiAodGhpcy5zaGFyZVRpY2tldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBzaGFyZU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgICAgICBzaGFyZU5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIue+pOaOkuihjFwiO1xyXG4gICAgICAgICAgICBzaGFyZU5vZGUuc2V0UG9zaXRpb24oLTI2MCwgNTAzKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHNoYXJlTm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChDQ19XRUNIQVRHQU1FKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2hhcmVkQ2FudmFzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXggPSBuZXcgY2MuVGV4dHVyZTJEKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2hhcmVkQ2FudmFzLndpZHRoID0gNzIwO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnNoYXJlZENhbnZhcy5oZWlnaHQgPSAxMjgwO1xyXG4gICAgICAgICAgICAgICAgLy8g5Y+R5raI5oGv57uZ5a2Q5Z+fXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGFyZVRpY2tldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lnd4LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVR5cGU6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1BSU5fTUVOVV9OVU06IEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVUaWNrZXQ6IHRoaXMuc2hhcmVUaWNrZXRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lnd4LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVR5cGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1BSU5fTUVOVV9OVU06IEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBnYW1lVHlwZU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgICAgICBnYW1lVHlwZU5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIuaaguaXoOaOkuihjOamnOaVsOaNrlwiO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZ2FtZVR5cGVOb2RlKTtcclxuICAgICAgICAgICAgY2MubG9nKFwi6I635Y+W5o6S6KGM5qac5pWw5o2u44CCXCIgKyBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2hhcmVCdXR0b25GdW5jOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDQpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBHYW1lVG9vbHMuc2hhcmVQaWN0dXJlKFwic2hhcmVUaWNrZXRcIik7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH0sXHJcblxyXG4gICAgYmFja0J1dHRvbkZ1bmM6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8g5Yi35paw5a2Q5Z+f55qE57q555CGXHJcbiAgICBfdXBkYXRlU3ViRG9tYWluQ2FudmFzKCkge1xyXG4gICAgICAgIGlmIChDQ19XRUNIQVRHQU1FKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2hhcmVkQ2FudmFzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXguaW5pdFdpdGhFbGVtZW50KHdpbmRvdy5zaGFyZWRDYW52YXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXguaGFuZGxlTG9hZGVkVGV4dHVyZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5raW5nU2Nyb2xsVmlldy5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0aGlzLnRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVN1YkRvbWFpbkNhbnZhcygpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/GameHelp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92d33tkzdhLxrs4dxYAfPUo', 'GameHelp');
// Script/panel/GameHelp.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    backColor: cc.Node,
    backButton: cc.Node //返回按钮
  },
  onLoad: function onLoad() {
    GameUiTools.setButtonClickEvents(this, this.backButton, "buttonFunc");
  },
  buttonFunc: function buttonFunc(event) {
    var button = event.target;
    if (this.backButton == button) {
      GameTools.playSimpleAudioEngine(0);
      this.node.destroy();
    }
    return true;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcR2FtZUhlbHAuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVG9vbHMiLCJHYW1lVWlUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmFja0NvbG9yIiwiTm9kZSIsImJhY2tCdXR0b24iLCJvbkxvYWQiLCJzZXRCdXR0b25DbGlja0V2ZW50cyIsImJ1dHRvbkZ1bmMiLCJldmVudCIsImJ1dHRvbiIsInRhcmdldCIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsIm5vZGUiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0QyxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDcEMsSUFBSUUsV0FBVyxHQUFHRixPQUFPLENBQUMsYUFBYSxDQUFDO0FBQ3hDRyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUNyQkMsVUFBVSxFQUFFO0lBQ1JDLFNBQVMsRUFBRUosRUFBRSxDQUFDSyxJQUFJO0lBQ2xCQyxVQUFVLEVBQUVOLEVBQUUsQ0FBQ0ssSUFBSSxDQUFFO0VBQ3pCLENBQUM7RUFFREUsTUFBTSxXQUFBQSxPQUFBLEVBQUc7SUFDTFIsV0FBVyxDQUFDUyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDRixVQUFVLEVBQUUsWUFBWSxDQUFDO0VBQ3pFLENBQUM7RUFFREcsVUFBVSxFQUFFLFNBQUFBLFdBQVVDLEtBQUssRUFBRTtJQUN6QixJQUFJQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0UsTUFBTTtJQUN6QixJQUFJLElBQUksQ0FBQ04sVUFBVSxJQUFJSyxNQUFNLEVBQUU7TUFDM0JiLFNBQVMsQ0FBQ2UscUJBQXFCLENBQUMsQ0FBQyxDQUFDO01BQ2xDLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLEVBQUU7SUFDdkI7SUFDQSxPQUFPLElBQUk7RUFDZjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcclxudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XHJcbnZhciBHYW1lVWlUb29scyA9IHJlcXVpcmUoXCJHYW1lVWlUb29sc1wiKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJhY2tDb2xvcjogY2MuTm9kZSxcclxuICAgICAgICBiYWNrQnV0dG9uOiBjYy5Ob2RlLCAvL+i/lOWbnuaMiemSrlxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5iYWNrQnV0dG9uLCBcImJ1dHRvbkZ1bmNcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGJ1dHRvbkZ1bmM6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFja0J1dHRvbiA9PSBidXR0b24pIHtcclxuICAgICAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgwKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/ShowMessage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38b70CDgDNDRrOc8pj7+Z2r', 'ShowMessage');
// Script/panel/ShowMessage.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    messageLabel: cc.Label,
    backButton: cc.Node,
    //返回按钮
    toastType: 0
  },
  start: function start() {
    var toastMessage = null;
    if (this.toastType == 0) {
      toastMessage = "欢迎进入浪漫2048";
    } else if (this.toastType == 1) {
      toastMessage = "该功能苦逼的程序员还在努力开发中，欢迎留言反馈！";
    } else if (this.toastType == 2) {
      toastMessage = "积分不足！！！您可以玩游戏来获取积分，还可以每天登录赚取积分！";
    } else if (this.toastType == 3) {
      toastMessage = "最多只能后退3步！！！";
    } else if (this.toastType == 4) {
      toastMessage = "只能后退1步！！！";
    } else if (this.toastType == 5) {
      toastMessage = "该模式暂无帮助，谢谢！！！";
    } else if (this.toastType == 6) {
      toastMessage = "积分不足！！！您需要300积分来复活。";
    } else if (this.toastType == 7) {
      toastMessage = "恭喜充值成功，感谢您对浪漫2048的支持！！！";
    } else if (this.toastType == 8) {
      toastMessage = "充值失败，谢谢支持！！！";
    } else if (this.toastType == 9) {
      toastMessage = "今天首次进入奖励100积分，每天首次进入游戏都会获取积分哟！！！";
    } else if (this.toastType == 10) {
      toastMessage = "没有找到应用市场";
    } else if (this.toastType == 11) {
      toastMessage = "恭喜获得奖励10积分，感谢您对浪漫2048的支持";
    } else if (this.toastType == 12) {
      toastMessage = "您今天已经领过奖励了，谢谢";
    } else if (this.toastType == 13) {
      toastMessage = "聚合模式暂无自动功能，谢谢";
    } else if (this.toastType == 14) {
      toastMessage = "恭喜获得奖励100积分，感谢您对浪漫2048的支持";
    } else if (this.toastType == 15) {
      toastMessage = "经典模式不能使用道具功能，您可以去试试其它玩法哟！";
    } else if (this.toastType == 16) {
      toastMessage = "上传得分失败，请检查网络";
    } else if (this.toastType == 17) {
      toastMessage = "排行榜数据失败，请检查网络";
    } else if (this.toastType == 18) {
      toastMessage = "上传得分成功，赶紧去看看排行榜吧";
    } else if (this.toastType == 19) {
      toastMessage = "视频奖励";
    } else if (this.toastType == 20) {
      toastMessage = "保存图片成功";
    } else if (this.toastType == 21) {
      toastMessage = "保存图片失败";
    } else if (this.toastType == 22) {
      toastMessage = "点击需要消除的爱心即可消除该爱心！";
    } else if (this.toastType == 23) {
      toastMessage = "点击需要换位的爱心将会选中该爱心，继续点击该爱心周边的爱心即可实现爱心的换位！";
    } else if (this.toastType == 24) {
      toastMessage = "点击需要缩小数字的爱心即可将该爱心的数字缩小2倍";
    } else if (this.toastType == 25) {
      toastMessage = "点击需要消除的爱心即可消除与该爱心同横排的爱心！";
    } else if (this.toastType == 26) {
      toastMessage = "点击需要消除的爱心即可消除与该爱心同竖排的爱心！";
    } else if (this.toastType == 27) {
      toastMessage = "视频播放失败，谢谢！！";
    } else if (this.toastType == 28) {
      toastMessage = "滑动屏幕来移动小方块，两个数字一样的小方块相撞时就会相加合成一个方块，每次操作之后会在空白的方格处随机生成一个2或4的方块，最终得到一个2048的方块就算胜利了，如果16个格子全部填满无法移动的话则游戏结束。";
    } else if (this.toastType == 29) {
      toastMessage = "点击空白爱心，爱心会向点击的位置靠拢，当两个数字相同的爱心相遇时就会合并为两数字之和，全部填满无法移动的话则游戏结束。";
    } else if (this.toastType == 30) {
      toastMessage = "选中连接在一起的相同数字，点击的数字会聚合为更大的数字，其它数字则消除，完成通关所需得分即可进入下一关，否则游戏结束。";
    } else if (this.toastType == 31) {
      toastMessage = "选中连接在一起的相同数字，选中的数字将会被消除，完成通关所需得分即可进入下一关，否则游戏结束。";
    } else {
      toastMessage = this.toastType;
    }
    this.messageLabel.string = toastMessage;

    // GameUiTools.setButtonClickEvents(this, this.backButton, "backButtonFunc");
    // GameUiTools.setButtonClickEvents(this, this.node, "backButtonFunc");
    // if (CC_WECHATGAME) {
    //     this.node.destroy();
    //     wx.showModal({title: "浪漫提示", content: toastMessage,showCancel:false});
    // }
  },

  backButtonFunc: function backButtonFunc(event) {
    GameTools.playSimpleAudioEngine(0);
    this.node.destroy();
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcU2hvd01lc3NhZ2UuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVG9vbHMiLCJHYW1lVWlUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibWVzc2FnZUxhYmVsIiwiTGFiZWwiLCJiYWNrQnV0dG9uIiwiTm9kZSIsInRvYXN0VHlwZSIsInN0YXJ0IiwidG9hc3RNZXNzYWdlIiwic3RyaW5nIiwiYmFja0J1dHRvbkZ1bmMiLCJldmVudCIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsIm5vZGUiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0QyxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDcEMsSUFBSUUsV0FBVyxHQUFHRixPQUFPLENBQUMsYUFBYSxDQUFDO0FBQ3hDRyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLFlBQVksRUFBRUosRUFBRSxDQUFDSyxLQUFLO0lBQ3RCQyxVQUFVLEVBQUVOLEVBQUUsQ0FBQ08sSUFBSTtJQUFDO0lBQ3BCQyxTQUFTLEVBQUU7RUFDZixDQUFDO0VBRURDLEtBQUssV0FBQUEsTUFBQSxFQUFHO0lBQ0osSUFBSUMsWUFBWSxHQUFHLElBQUk7SUFDdkIsSUFBSSxJQUFJLENBQUNGLFNBQVMsSUFBSSxDQUFDLEVBQUU7TUFDckJFLFlBQVksR0FBRyxZQUFZO0lBQy9CLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ0YsU0FBUyxJQUFJLENBQUMsRUFBRTtNQUM1QkUsWUFBWSxHQUFHLDBCQUEwQjtJQUM3QyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNGLFNBQVMsSUFBSSxDQUFDLEVBQUU7TUFDNUJFLFlBQVks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R0FBRywwQkFBMEI7SUFDN0MsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDRixTQUFTLElBQUksRUFBRSxFQUFFO01BQzdCRSxZQUFZLEdBQUcsYUFBYTtJQUNoQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNGLFNBQVMsSUFBSSxFQUFFLEVBQUU7TUFDN0JFLFlBQVksR0FBRywwR0FBMEc7SUFDN0gsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDRixTQUFTLElBQUksRUFBRSxFQUFFO01BQzdCRSxZQUFZLEdBQUcsNkRBQTZEO0lBQ2hGLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ0YsU0FBUyxJQUFJLEVBQUUsRUFBRTtNQUM3QkUsWUFBWSxHQUFHLDZEQUE2RDtJQUNoRixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNGLFNBQVMsSUFBSSxFQUFFLEVBQUU7TUFDN0JFLFlBQVksR0FBRyxpREFBaUQ7SUFDcEUsQ0FBQyxNQUFLO01BQ0ZBLFlBQVksR0FBRyxJQUFJLENBQUNGLFNBQVM7SUFDakM7SUFDQSxJQUFJLENBQUNKLFlBQVksQ0FBQ08sTUFBTSxHQUFHRCxZQUFZOztJQUV2QztJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFDSixDQUFDOztFQUVERSxjQUFjLEVBQUUsU0FBQUEsZUFBVUMsS0FBSyxFQUFFO0lBQzdCZixTQUFTLENBQUNnQixxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDbEMsSUFBSSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sRUFBRTtFQUN2QjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcclxudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XHJcbnZhciBHYW1lVWlUb29scyA9IHJlcXVpcmUoXCJHYW1lVWlUb29sc1wiKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBtZXNzYWdlTGFiZWw6IGNjLkxhYmVsLFxyXG4gICAgICAgIGJhY2tCdXR0b246IGNjLk5vZGUsLy/ov5Tlm57mjInpkq5cclxuICAgICAgICB0b2FzdFR5cGU6IDAsXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGxldCB0b2FzdE1lc3NhZ2UgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5qyi6L+O6L+b5YWl5rWq5ryrMjA0OFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuivpeWKn+iDveiLpumAvOeahOeoi+W6j+WRmOi/mOWcqOWKquWKm+W8gOWPkeS4re+8jOasoui/jueVmeiogOWPjemmiO+8gVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMikge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuenr+WIhuS4jei2s++8ge+8ge+8geaCqOWPr+S7peeOqea4uOaIj+adpeiOt+WPluenr+WIhu+8jOi/mOWPr+S7peavj+WkqeeZu+W9lei1muWPluenr+WIhu+8gVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMykge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuacgOWkmuWPquiDveWQjumAgDPmraXvvIHvvIHvvIFcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDQpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLlj6rog73lkI7pgIAx5q2l77yB77yB77yBXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSA1KSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi6K+l5qih5byP5pqC5peg5biu5Yqp77yM6LCi6LCi77yB77yB77yBXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSA2KSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi56ev5YiG5LiN6Laz77yB77yB77yB5oKo6ZyA6KaBMzAw56ev5YiG5p2l5aSN5rS744CCXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSA3KSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5oGt5Zac5YWF5YC85oiQ5Yqf77yM5oSf6LCi5oKo5a+55rWq5ryrMjA0OOeahOaUr+aMge+8ge+8ge+8gVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gOCkge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuWFheWAvOWksei0pe+8jOiwouiwouaUr+aMge+8ge+8ge+8gVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gOSkge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuS7iuWkqemmluasoei/m+WFpeWlluWKsTEwMOenr+WIhu+8jOavj+Wkqemmluasoei/m+WFpea4uOaIj+mDveS8muiOt+WPluenr+WIhuWTn++8ge+8ge+8gVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTApIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLmsqHmnInmib7liLDlupTnlKjluILlnLpcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDExKSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5oGt5Zac6I635b6X5aWW5YqxMTDnp6/liIbvvIzmhJ/osKLmgqjlr7nmtarmvKsyMDQ455qE5pSv5oyBXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAxMikge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuaCqOS7iuWkqeW3sue7j+mihui/h+WlluWKseS6hu+8jOiwouiwolwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTMpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLogZrlkIjmqKHlvI/mmoLml6Doh6rliqjlip/og73vvIzosKLosKJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDE0KSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5oGt5Zac6I635b6X5aWW5YqxMTAw56ev5YiG77yM5oSf6LCi5oKo5a+55rWq5ryrMjA0OOeahOaUr+aMgVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTUpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLnu4/lhbjmqKHlvI/kuI3og73kvb/nlKjpgZPlhbflip/og73vvIzmgqjlj6/ku6Xljrvor5Xor5XlhbblroPnjqnms5Xlk5/vvIFcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDE2KSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5LiK5Lyg5b6X5YiG5aSx6LSl77yM6K+35qOA5p+l572R57ucXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAxNykge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuaOkuihjOamnOaVsOaNruWksei0pe+8jOivt+ajgOafpee9kee7nFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTgpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLkuIrkvKDlvpfliIbmiJDlip/vvIzotbbntKfljrvnnIvnnIvmjpLooYzmppzlkKdcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDE5KSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi6KeG6aKR5aWW5YqxXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyMCkge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuS/neWtmOWbvueJh+aIkOWKn1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMjEpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLkv53lrZjlm77niYflpLHotKVcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDIyKSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi54K55Ye76ZyA6KaB5raI6Zmk55qE54ix5b+D5Y2z5Y+v5raI6Zmk6K+l54ix5b+D77yBXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyMykge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIueCueWHu+mcgOimgeaNouS9jeeahOeIseW/g+WwhuS8mumAieS4reivpeeIseW/g++8jOe7p+e7reeCueWHu+ivpeeIseW/g+WRqOi+ueeahOeIseW/g+WNs+WPr+WunueOsOeIseW/g+eahOaNouS9je+8gVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMjQpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLngrnlh7vpnIDopoHnvKnlsI/mlbDlrZfnmoTniLHlv4PljbPlj6/lsIbor6XniLHlv4PnmoTmlbDlrZfnvKnlsI8y5YCNXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyNSkge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIueCueWHu+mcgOimgea2iOmZpOeahOeIseW/g+WNs+WPr+a2iOmZpOS4juivpeeIseW/g+WQjOaoquaOkueahOeIseW/g++8gVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMjYpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLngrnlh7vpnIDopoHmtojpmaTnmoTniLHlv4PljbPlj6/mtojpmaTkuI7or6XniLHlv4PlkIznq5bmjpLnmoTniLHlv4PvvIFcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDI3KSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi6KeG6aKR5pKt5pS+5aSx6LSl77yM6LCi6LCi77yB77yBXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyOCkge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIua7keWKqOWxj+W5leadpeenu+WKqOWwj+aWueWdl++8jOS4pOS4quaVsOWtl+S4gOagt+eahOWwj+aWueWdl+ebuOaSnuaXtuWwseS8muebuOWKoOWQiOaIkOS4gOS4quaWueWdl++8jOavj+asoeaTjeS9nOS5i+WQjuS8muWcqOepuueZveeahOaWueagvOWkhOmaj+acuueUn+aIkOS4gOS4qjLmiJY055qE5pa55Z2X77yM5pyA57uI5b6X5Yiw5LiA5LiqMjA0OOeahOaWueWdl+Wwseeul+iDnOWIqeS6hu+8jOWmguaenDE25Liq5qC85a2Q5YWo6YOo5aGr5ruh5peg5rOV56e75Yqo55qE6K+d5YiZ5ri45oiP57uT5p2f44CCXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyOSkge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIueCueWHu+epuueZveeIseW/g++8jOeIseW/g+S8muWQkeeCueWHu+eahOS9jee9rumdoOaLou+8jOW9k+S4pOS4quaVsOWtl+ebuOWQjOeahOeIseW/g+ebuOmBh+aXtuWwseS8muWQiOW5tuS4uuS4pOaVsOWtl+S5i+WSjO+8jOWFqOmDqOWhq+a7oeaXoOazleenu+WKqOeahOivneWImea4uOaIj+e7k+adn+OAglwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMzApIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLpgInkuK3ov57mjqXlnKjkuIDotbfnmoTnm7jlkIzmlbDlrZfvvIzngrnlh7vnmoTmlbDlrZfkvJrogZrlkIjkuLrmm7TlpKfnmoTmlbDlrZfvvIzlhbblroPmlbDlrZfliJnmtojpmaTvvIzlrozmiJDpgJrlhbPmiYDpnIDlvpfliIbljbPlj6/ov5vlhaXkuIvkuIDlhbPvvIzlkKbliJnmuLjmiI/nu5PmnZ/jgIJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDMxKSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi6YCJ5Lit6L+e5o6l5Zyo5LiA6LW355qE55u45ZCM5pWw5a2X77yM6YCJ5Lit55qE5pWw5a2X5bCG5Lya6KKr5raI6Zmk77yM5a6M5oiQ6YCa5YWz5omA6ZyA5b6X5YiG5Y2z5Y+v6L+b5YWl5LiL5LiA5YWz77yM5ZCm5YiZ5ri45oiP57uT5p2f44CCXCI7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSB0aGlzLnRvYXN0VHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlTGFiZWwuc3RyaW5nID0gdG9hc3RNZXNzYWdlO1xyXG5cclxuICAgICAgICAvLyBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLmJhY2tCdXR0b24sIFwiYmFja0J1dHRvbkZ1bmNcIik7XHJcbiAgICAgICAgLy8gR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5ub2RlLCBcImJhY2tCdXR0b25GdW5jXCIpO1xyXG4gICAgICAgIC8vIGlmIChDQ19XRUNIQVRHQU1FKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgLy8gICAgIHd4LnNob3dNb2RhbCh7dGl0bGU6IFwi5rWq5ryr5o+Q56S6XCIsIGNvbnRlbnQ6IHRvYXN0TWVzc2FnZSxzaG93Q2FuY2VsOmZhbHNlfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfSxcclxuXHJcbiAgICBiYWNrQnV0dG9uRnVuYzogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgwKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
