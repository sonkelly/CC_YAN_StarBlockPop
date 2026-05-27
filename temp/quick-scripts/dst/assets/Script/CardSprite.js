
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDYXJkU3ByaXRlLmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiR2FtZVVpVG9vbHMiLCJDYXJkU3ByaXRlIiwiY2MiLCJDbGFzcyIsIk5vZGUiLCJwcm9wZXJ0aWVzIiwiY2FyZFNwcml0ZSIsIm51bWJlciIsImlzU2VsZWN0IiwiaXNGaXJzdFNlbGVjdCIsImN0b3IiLCJhZGRDb21wb25lbnQiLCJTcHJpdGUiLCJzdGF0aWNzIiwiY3JlYXRlQ2FyZFNwcml0ZSIsIm51bWJlcnMiLCJDYXJkU3ByaXRlWCIsIkNhcmRTcHJpdGVZIiwiaW5pdENhcmQiLCJDYXJkU2hvdyIsInNldFBvc2l0aW9uIiwid2lkdGgiLCJDQVJEX1dJRFRIIiwiaGVpZ2h0Iiwic2l6ZU1vZGUiLCJTaXplTW9kZSIsIkNVU1RPTSIsImdldFNwcml0ZUZyYW1lIiwic2V0TnVtYmVyIiwiZ2V0TnVtYmVyIiwiQ2FyZENsaWNrU2hvdyIsIkNsaWNrVHlwZSIsInJlbW92ZUFsbENoaWxkcmVuIiwibW92ZSIsIm1vdmVCeSIsInYyIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJyZXZlcnNlIiwiZWZmZWN0cyIsInciLCJnZXRDb250ZW50U2l6ZSIsInNjYWxlIiwic2V0U2NhbGUiLCJhZGRDaGlsZCIsIm1vdmUxIiwic2NhbGVCeSIsImFjdGlvbnMiLCJyZXBlYXRGb3JldmVyIiwiZ2V0SXNTZWxlY3QiLCJnZXRJc0ZpcnN0U2VsZWN0IiwiaXNWaXNpYmxlIiwib3BhY2l0eSIsInNldFZpc2libGUiLCJpc1RydWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0QyxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDcEMsSUFBSUUsV0FBVyxHQUFHRixPQUFPLENBQUMsYUFBYSxDQUFDO0FBQ3hDLElBQUlHLFVBQVUsR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDdEIsV0FBU0QsRUFBRSxDQUFDRSxJQUFJO0VBQ2hCQyxVQUFVLEVBQUU7SUFDUkMsVUFBVSxFQUFFLElBQUk7SUFDaEJDLE1BQU0sRUFBRSxDQUFDO0lBQUM7SUFDVkMsUUFBUSxFQUFFLEtBQUs7SUFBQztJQUNoQkMsYUFBYSxFQUFFLEtBQUssQ0FBQztFQUN6QixDQUFDOztFQUNEQyxJQUFJLEVBQUUsU0FBQUEsS0FBQSxFQUFZO0lBQ2QsSUFBSSxDQUFDSixVQUFVLEdBQUcsSUFBSSxDQUFDSyxZQUFZLENBQUNULEVBQUUsQ0FBQ1UsTUFBTSxDQUFDO0VBQ2xELENBQUM7RUFDSjtFQUNEO0VBQ0lDLE9BQU8sRUFBRTtJQUNMQyxnQkFBZ0IsRUFBRSxTQUFBQSxpQkFBVUMsT0FBTyxFQUFFQyxXQUFXLEVBQUVDLFdBQVcsRUFBRTtNQUMzRCxJQUFJWCxVQUFVLEdBQUcsSUFBSUwsVUFBVSxFQUFFO01BQ2pDO01BQ0FLLFVBQVUsQ0FBQ1ksUUFBUSxDQUFDSCxPQUFPLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxDQUFDO01BQ3RELE9BQU9YLFVBQVU7SUFDckI7RUFDSixDQUFDO0VBQ0RZLFFBQVEsRUFBRSxTQUFBQSxTQUFVSCxPQUFPLEVBQUVDLFdBQVcsRUFBRUMsV0FBVztFQUFDO0VBQ3REO0lBQ0k7SUFDQSxJQUFJLENBQUNWLE1BQU0sR0FBR1EsT0FBTztJQUNyQixJQUFJLENBQUNJLFFBQVEsRUFBRTtJQUNmLElBQUksQ0FBQ0MsV0FBVyxDQUFDSixXQUFXLEVBQUVDLFdBQVcsQ0FBQztJQUMxQyxJQUFJLENBQUNJLEtBQUssR0FBR3hCLFVBQVUsQ0FBQ3lCLFVBQVU7SUFDbEMsSUFBSSxDQUFDQyxNQUFNLEdBQUcxQixVQUFVLENBQUN5QixVQUFVO0lBQ25DLElBQUksQ0FBQ2hCLFVBQVUsQ0FBQ2tCLFFBQVEsR0FBR3RCLEVBQUUsQ0FBQ1UsTUFBTSxDQUFDYSxRQUFRLENBQUNDLE1BQU07RUFDeEQsQ0FBQztFQUNEUCxRQUFRLEVBQUUsU0FBQUEsU0FBQSxFQUFZO0lBQ2xCO0lBQ0EsSUFBSSxJQUFJLENBQUNaLE1BQU0sSUFBSSxDQUFDLEVBQUU7TUFDakJQLFdBQVcsQ0FBQzJCLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUNyQixVQUFVLENBQUM7SUFDcEUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDQyxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUU7TUFDMUJQLFdBQVcsQ0FBQzJCLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUNyQixVQUFVLENBQUM7SUFDdEUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDQyxNQUFNLElBQUksQ0FBQyxFQUFFO01BQ3pCO01BQ0FQLFdBQVcsQ0FBQzJCLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUNyQixVQUFVLENBQUU7SUFDbkUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDQyxNQUFNLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQ0EsTUFBTSxJQUFJLE1BQU0sRUFBRTtNQUNsRDtNQUNBUCxXQUFXLENBQUMyQixjQUFjLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQ3BCLE1BQU0sRUFBRSxJQUFJLENBQUNELFVBQVUsQ0FBQztJQUMzRTtFQUNKLENBQUM7RUFDRHNCLFNBQVMsRUFBRSxTQUFBQSxVQUFVckIsTUFBTSxFQUFFO0lBQ3pCLElBQUksQ0FBQ0EsTUFBTSxHQUFHQSxNQUFNO0VBQ3hCLENBQUM7RUFDRHNCLFNBQVMsRUFBRSxTQUFBQSxVQUFBLEVBQVk7SUFDbkIsT0FBTyxJQUFJLENBQUN0QixNQUFNO0VBQ3RCLENBQUM7RUFDRDtBQUNKO0FBQ0E7QUFDQTtFQUNJdUIsYUFBYSxXQUFBQSxjQUFDQyxTQUFTLEVBQUU7SUFDckIsSUFBSUEsU0FBUyxJQUFJLENBQUMsRUFBRTtNQUNoQixJQUFJLENBQUNDLGlCQUFpQixFQUFFO01BQ3hCLElBQUksQ0FBQ3hCLFFBQVEsR0FBRyxLQUFLO01BQ3JCLElBQUksQ0FBQ0MsYUFBYSxHQUFHLEtBQUs7SUFDOUIsQ0FBQyxNQUFNO01BQ0gsSUFBSXdCLElBQUksR0FBRy9CLEVBQUUsQ0FBQ2dDLE1BQU0sQ0FBQyxJQUFJLEVBQUVoQyxFQUFFLENBQUNpQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO01BQ3ZDLElBQUksQ0FBQ0MsU0FBUyxDQUFDbEMsRUFBRSxDQUFDbUMsUUFBUSxDQUFDSixJQUFJLEVBQUVBLElBQUksQ0FBQ0ssT0FBTyxFQUFFLENBQUMsQ0FBQztNQUNqRCxJQUFJLENBQUM5QixRQUFRLEdBQUcsSUFBSTtNQUNwQixJQUFJK0IsT0FBTyxHQUFHLElBQUlyQyxFQUFFLENBQUNFLElBQUksRUFBRTtNQUMzQkosV0FBVyxDQUFDMkIsY0FBYyxDQUFDLHFCQUFxQixFQUFFWSxPQUFPLENBQUM1QixZQUFZLENBQUNULEVBQUUsQ0FBQ1UsTUFBTSxDQUFDLENBQUM7TUFDbEYsSUFBSTRCLENBQUMsR0FBR0QsT0FBTyxDQUFDRSxjQUFjLEVBQUUsQ0FBQ2xCLE1BQU07TUFDdkMsSUFBSW1CLEtBQUssR0FBRyxJQUFJLENBQUNELGNBQWMsRUFBRSxDQUFDbEIsTUFBTSxHQUFHaUIsQ0FBQztNQUM1Q0QsT0FBTyxDQUFDSSxRQUFRLENBQUNELEtBQUssQ0FBQztNQUN2QixJQUFJLENBQUNFLFFBQVEsQ0FBQ0wsT0FBTyxDQUFDO01BQ3RCLElBQUlSLFNBQVMsSUFBSSxDQUFDLEVBQUU7UUFDaEIsSUFBSSxDQUFDdEIsYUFBYSxHQUFHLElBQUk7UUFDekIsSUFBSW9DLEtBQUssR0FBRzNDLEVBQUUsQ0FBQzRDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO1FBQ2pDLElBQUlDLE9BQU8sR0FBRzdDLEVBQUUsQ0FBQ21DLFFBQVEsQ0FBQ1EsS0FBSyxFQUFFQSxLQUFLLENBQUNQLE9BQU8sRUFBRSxDQUFDO1FBQ2pEQyxPQUFPLENBQUNILFNBQVMsQ0FBQ1csT0FBTyxDQUFDQyxhQUFhLEVBQUUsQ0FBQztNQUM5QyxDQUFDLE1BQU0sSUFBSWpCLFNBQVMsSUFBSSxDQUFDLEVBQUU7UUFDdkJRLE9BQU8sQ0FBQ0ksUUFBUSxDQUFDRCxLQUFLLEdBQUcsSUFBSSxDQUFDO01BQ2xDO0lBQ0o7RUFDSixDQUFDO0VBQ0RPLFdBQVcsV0FBQUEsWUFBQSxFQUFHO0lBQ1YsT0FBTyxJQUFJLENBQUN6QyxRQUFRO0VBQ3hCLENBQUM7RUFDRDBDLGdCQUFnQixXQUFBQSxpQkFBQSxFQUFHO0lBQ2YsT0FBTyxJQUFJLENBQUN6QyxhQUFhO0VBQzdCLENBQUM7RUFDRDBDLFNBQVMsV0FBQUEsVUFBQSxFQUFHO0lBQ1IsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFBSSxHQUFHO0VBQzlCLENBQUM7RUFDREMsVUFBVSxXQUFBQSxXQUFDQyxNQUFNLEVBQUU7SUFDZixJQUFJLENBQUNGLE9BQU8sR0FBR0UsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDO0VBQ25DO0FBQ0osQ0FBQyxDQUFDO0FBRUZDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHdkQsVUFBVSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcclxudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XHJcbnZhciBHYW1lVWlUb29scyA9IHJlcXVpcmUoXCJHYW1lVWlUb29sc1wiKTtcclxudmFyIENhcmRTcHJpdGUgPSBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Ob2RlLFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGNhcmRTcHJpdGU6IG51bGwsXHJcbiAgICAgICAgbnVtYmVyOiAwLC8vIOaYvuekuuaVsOWtl1xyXG4gICAgICAgIGlzU2VsZWN0OiBmYWxzZSwvL+iusOW9leaYr+WQpumAieS4rVxyXG4gICAgICAgIGlzRmlyc3RTZWxlY3Q6IGZhbHNlLC8v6K6w5b2V5piv5ZCm5Li656ys5LiA5qyh6YCJ5LitXHJcbiAgICB9LFxyXG4gICAgY3RvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2FyZFNwcml0ZSA9IHRoaXMuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICB9LFxyXG5cdC8v54m55Lu3OS455YWD5LiA5aWXY29jb3NjcmVhdG9y5Luj56CB6IGU57O7UTI0ODMzNjcwODQgXHJcbi8v5oiq5Zu+IOmTvuaOpe+8mmh0dHBzOi8vc2hhcmUud2VpeXVuLmNvbS9sZUdBSHBuQiDlr4bnoIHvvJpiOXVkdHZcclxuICAgIHN0YXRpY3M6IHtcclxuICAgICAgICBjcmVhdGVDYXJkU3ByaXRlOiBmdW5jdGlvbiAobnVtYmVycywgQ2FyZFNwcml0ZVgsIENhcmRTcHJpdGVZKSB7XHJcbiAgICAgICAgICAgIGxldCBjYXJkU3ByaXRlID0gbmV3IENhcmRTcHJpdGUoKTtcclxuICAgICAgICAgICAgLy8g6Ieq5a6a5LmJ5Yid5aeL5YyWXHJcbiAgICAgICAgICAgIGNhcmRTcHJpdGUuaW5pdENhcmQobnVtYmVycywgQ2FyZFNwcml0ZVgsIENhcmRTcHJpdGVZKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNhcmRTcHJpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGluaXRDYXJkOiBmdW5jdGlvbiAobnVtYmVycywgQ2FyZFNwcml0ZVgsIENhcmRTcHJpdGVZKS8vIOWIneWni+WMllxyXG4gICAge1xyXG4gICAgICAgIC8vIOWIneWni+WMluaVsOWtl1xyXG4gICAgICAgIHRoaXMubnVtYmVyID0gbnVtYmVycztcclxuICAgICAgICB0aGlzLkNhcmRTaG93KCk7XHJcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihDYXJkU3ByaXRlWCwgQ2FyZFNwcml0ZVkpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBHYW1lQ29uZmlnLkNBUkRfV0lEVEg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBHYW1lQ29uZmlnLkNBUkRfV0lEVEg7XHJcbiAgICAgICAgdGhpcy5jYXJkU3ByaXRlLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcclxuICAgIH0sXHJcbiAgICBDYXJkU2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIOWIpOaWreaVsOWtl+eahOWkp+Wwj+adpeiwg+aVtOminOiJslxyXG4gICAgICAgIGlmICh0aGlzLm51bWJlciA9PSAxKSB7XHJcbiAgICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL2JhcnJpZXJcIiwgdGhpcy5jYXJkU3ByaXRlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyID09IC0xKSB7XHJcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX2dhbWUvcG9wZ2FtZV82MVwiLCB0aGlzLmNhcmRTcHJpdGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgPT0gMCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNhcmRTcHJpdGUuc3ByaXRlRnJhbWUgPSBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL2VtcHR5bFwiKTtcclxuICAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3BfZ2FtZS9lbXB0eWxcIiwgdGhpcy5jYXJkU3ByaXRlICk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciA+PSAyICYmIHRoaXMubnVtYmVyIDw9IDEzMTA3Mikge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNhcmRTcHJpdGUuc3ByaXRlRnJhbWUgPSBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL25cIiArIHRoaXMubnVtYmVyKTtcclxuICAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3BfZ2FtZS9uXCIgKyB0aGlzLm51bWJlciwgdGhpcy5jYXJkU3ByaXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0TnVtYmVyOiBmdW5jdGlvbiAobnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XHJcbiAgICB9LFxyXG4gICAgZ2V0TnVtYmVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyO1xyXG4gICAgfSxcclxuICAgIC8qXHJcbirliJvlu7rngrnlh7vnibnmlYhcclxuKkNsaWNrVHlwZSAw56e76Zmk54m55pWIIDHngrnlh7vliqjnlLvnibnmlYggMueCueWHu+mdmeaAgeeJueaViFxyXG4qL1xyXG4gICAgQ2FyZENsaWNrU2hvdyhDbGlja1R5cGUpIHtcclxuICAgICAgICBpZiAoQ2xpY2tUeXBlID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmlzU2VsZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdFNlbGVjdCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBtb3ZlID0gY2MubW92ZUJ5KDAuMDUsIGNjLnYyKDAsIDIpKTtcclxuICAgICAgICAgICAgdGhpcy5ydW5BY3Rpb24oY2Muc2VxdWVuY2UobW92ZSwgbW92ZS5yZXZlcnNlKCkpKTtcclxuICAgICAgICAgICAgdGhpcy5pc1NlbGVjdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBlZmZlY3RzID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3BfZ2FtZS9wb3BnYW1lXzYxXCIsIGVmZmVjdHMuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkpO1xyXG4gICAgICAgICAgICBsZXQgdyA9IGVmZmVjdHMuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IHRoaXMuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLyB3O1xyXG4gICAgICAgICAgICBlZmZlY3RzLnNldFNjYWxlKHNjYWxlKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChlZmZlY3RzKTtcclxuICAgICAgICAgICAgaWYgKENsaWNrVHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3RTZWxlY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vdmUxID0gY2Muc2NhbGVCeSgwLjQsIDEuMTUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbnMgPSBjYy5zZXF1ZW5jZShtb3ZlMSwgbW92ZTEucmV2ZXJzZSgpKTtcclxuICAgICAgICAgICAgICAgIGVmZmVjdHMucnVuQWN0aW9uKGFjdGlvbnMucmVwZWF0Rm9yZXZlcigpKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChDbGlja1R5cGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0cy5zZXRTY2FsZShzY2FsZSArIDAuMDUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldElzU2VsZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzU2VsZWN0O1xyXG4gICAgfSxcclxuICAgIGdldElzRmlyc3RTZWxlY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNGaXJzdFNlbGVjdDtcclxuICAgIH0sXHJcbiAgICBpc1Zpc2libGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3BhY2l0eSA9PSAyNTU7XHJcbiAgICB9LFxyXG4gICAgc2V0VmlzaWJsZShpc1RydWUpIHtcclxuICAgICAgICB0aGlzLm9wYWNpdHkgPSBpc1RydWUgPyAyNTUgOiAwO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ2FyZFNwcml0ZTsiXX0=