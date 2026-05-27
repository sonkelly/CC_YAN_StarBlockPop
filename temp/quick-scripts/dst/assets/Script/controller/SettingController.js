
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