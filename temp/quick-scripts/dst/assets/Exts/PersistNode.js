
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