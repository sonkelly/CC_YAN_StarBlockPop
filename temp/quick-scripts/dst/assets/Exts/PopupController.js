
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