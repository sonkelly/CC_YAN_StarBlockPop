"use strict";
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