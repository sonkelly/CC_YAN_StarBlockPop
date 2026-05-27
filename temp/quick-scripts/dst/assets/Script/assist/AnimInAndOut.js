
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