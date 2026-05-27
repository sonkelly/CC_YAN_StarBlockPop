"use strict";
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