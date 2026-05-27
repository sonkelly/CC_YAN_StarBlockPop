
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