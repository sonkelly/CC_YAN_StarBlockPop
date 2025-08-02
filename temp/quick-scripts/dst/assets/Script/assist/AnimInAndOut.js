
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
  onLoad: function onLoad() {// onLoad要执行的全都在onEnable中进行了
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
  } // called every frame, uncomment this function to activate update callback
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhc3Npc3RcXEFuaW1JbkFuZE91dC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIm9uRW5hYmxlIiwibm9kZSIsIm9wYWNpdHkiLCJzZXRTY2FsZSIsImZhZGVJbiIsInNjYWxlVG8iLCJydW5BY3Rpb24iLCJzcGF3biIsImFuaW1hdGVBbmREZXN0cm95IiwiaXNEZXN0cm95aW5nIiwiZmFkZU91dCIsImNhbGxGdW5jIiwiZGVzdHJveSIsInNlcXVlbmNlIiwiYW5pbWF0ZUFuZERpc2FibGUiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0w7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZLENBQ2hCO0FBQ0gsR0FWSTtBQVlMQyxFQUFBQSxRQUFRLEVBQUUsb0JBQVk7QUFDbEIsU0FBS0MsSUFBTCxDQUFVQyxPQUFWLEdBQW9CLENBQXBCO0FBQ0EsU0FBS0QsSUFBTCxDQUFVRSxRQUFWLENBQW1CLENBQW5CO0FBQ0EsUUFBSUMsTUFBTSxHQUFHVCxFQUFFLENBQUNTLE1BQUgsQ0FBVSxHQUFWLENBQWI7QUFDQSxRQUFJQyxPQUFPLEdBQUdWLEVBQUUsQ0FBQ1UsT0FBSCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBZDtBQUNBLFNBQUtKLElBQUwsQ0FBVUssU0FBVixDQUFvQlgsRUFBRSxDQUFDWSxLQUFILENBQVNILE1BQVQsRUFBaUJDLE9BQWpCLENBQXBCO0FBQ0gsR0FsQkk7QUFvQkxHLEVBQUFBLGlCQUFpQixFQUFFLDZCQUFZO0FBQUE7O0FBQzNCLFFBQUksS0FBS0MsWUFBVCxFQUF1QjtBQUNuQjtBQUNIOztBQUNELFNBQUtBLFlBQUwsR0FBb0IsSUFBcEI7QUFFQSxRQUFJQyxPQUFPLEdBQUdmLEVBQUUsQ0FBQ2UsT0FBSCxDQUFXLEdBQVgsQ0FBZDtBQUNBLFFBQUlMLE9BQU8sR0FBR1YsRUFBRSxDQUFDVSxPQUFILENBQVcsR0FBWCxFQUFnQixDQUFoQixDQUFkO0FBQ0EsUUFBSU0sUUFBUSxHQUFHaEIsRUFBRSxDQUFDZ0IsUUFBSCxDQUFZLFlBQUk7QUFDM0IsVUFBSSxLQUFJLENBQUNWLElBQVQsRUFBZTtBQUNYLFFBQUEsS0FBSSxDQUFDQSxJQUFMLENBQVVXLE9BQVY7QUFDSDtBQUNKLEtBSmMsQ0FBZjtBQUtBLFNBQUtYLElBQUwsQ0FBVUssU0FBVixDQUFvQlgsRUFBRSxDQUFDa0IsUUFBSCxDQUFZbEIsRUFBRSxDQUFDWSxLQUFILENBQVNHLE9BQVQsRUFBa0JMLE9BQWxCLENBQVosRUFBd0NNLFFBQXhDLENBQXBCO0FBQ0gsR0FsQ0k7QUFvQ0xHLEVBQUFBLGlCQUFpQixFQUFFLDZCQUFZO0FBQUE7O0FBQzNCLFFBQUksS0FBS0wsWUFBVCxFQUF1QjtBQUNuQjtBQUNIOztBQUNELFNBQUtBLFlBQUwsR0FBb0IsSUFBcEI7QUFFQSxRQUFJQyxPQUFPLEdBQUdmLEVBQUUsQ0FBQ2UsT0FBSCxDQUFXLEdBQVgsQ0FBZDtBQUNBLFFBQUlMLE9BQU8sR0FBR1YsRUFBRSxDQUFDVSxPQUFILENBQVcsR0FBWCxFQUFnQixDQUFoQixDQUFkO0FBQ0EsUUFBSU0sUUFBUSxHQUFHaEIsRUFBRSxDQUFDZ0IsUUFBSCxDQUFZLFlBQUk7QUFDM0IsTUFBQSxNQUFJLENBQUNWLElBQUwsQ0FBVWMsTUFBVixHQUFtQixLQUFuQjtBQUNILEtBRmMsQ0FBZjtBQUdBLFNBQUtkLElBQUwsQ0FBVUssU0FBVixDQUFvQlgsRUFBRSxDQUFDa0IsUUFBSCxDQUFZbEIsRUFBRSxDQUFDWSxLQUFILENBQVNHLE9BQVQsRUFBa0JMLE9BQWxCLENBQVosRUFBd0NNLFFBQXhDLENBQXBCO0FBQ0gsR0FoREksQ0FrREw7QUFDQTtBQUVBOztBQXJESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBvbkxvYWTopoHmiafooYznmoTlhajpg73lnKhvbkVuYWJsZeS4rei/m+ihjOS6hlxuICAgIH0sXG5cbiAgICBvbkVuYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZSgwKTtcbiAgICAgICAgdmFyIGZhZGVJbiA9IGNjLmZhZGVJbigwLjIpO1xuICAgICAgICB2YXIgc2NhbGVUbyA9IGNjLnNjYWxlVG8oMC4yLCAxKTtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zcGF3bihmYWRlSW4sIHNjYWxlVG8pKTtcbiAgICB9LFxuXG4gICAgYW5pbWF0ZUFuZERlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZXN0cm95aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3lpbmcgPSB0cnVlO1xuXG4gICAgICAgIHZhciBmYWRlT3V0ID0gY2MuZmFkZU91dCgwLjIpO1xuICAgICAgICB2YXIgc2NhbGVUbyA9IGNjLnNjYWxlVG8oMC4yLCAwKTtcbiAgICAgICAgdmFyIGNhbGxGdW5jID0gY2MuY2FsbEZ1bmMoKCk9PntcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zcGF3bihmYWRlT3V0LCBzY2FsZVRvKSwgY2FsbEZ1bmMpKTtcbiAgICB9LFxuXG4gICAgYW5pbWF0ZUFuZERpc2FibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZXN0cm95aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3lpbmcgPSB0cnVlO1xuXG4gICAgICAgIHZhciBmYWRlT3V0ID0gY2MuZmFkZU91dCgwLjIpO1xuICAgICAgICB2YXIgc2NhbGVUbyA9IGNjLnNjYWxlVG8oMC4yLCAwKTtcbiAgICAgICAgdmFyIGNhbGxGdW5jID0gY2MuY2FsbEZ1bmMoKCk9PntcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc3Bhd24oZmFkZU91dCwgc2NhbGVUbyksIGNhbGxGdW5jKSk7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTsiXX0=