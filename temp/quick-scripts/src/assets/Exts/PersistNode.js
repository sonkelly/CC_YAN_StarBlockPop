"use strict";
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