
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
      var cardSprite = new CardSprite(); // 自定义初始化

      cardSprite.initCard(numbers, CardSpriteX, CardSpriteY);
      return cardSprite;
    }
  },
  initCard: function initCard(numbers, CardSpriteX, CardSpriteY) // 初始化
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDYXJkU3ByaXRlLmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiR2FtZVVpVG9vbHMiLCJDYXJkU3ByaXRlIiwiY2MiLCJDbGFzcyIsIk5vZGUiLCJwcm9wZXJ0aWVzIiwiY2FyZFNwcml0ZSIsIm51bWJlciIsImlzU2VsZWN0IiwiaXNGaXJzdFNlbGVjdCIsImN0b3IiLCJhZGRDb21wb25lbnQiLCJTcHJpdGUiLCJzdGF0aWNzIiwiY3JlYXRlQ2FyZFNwcml0ZSIsIm51bWJlcnMiLCJDYXJkU3ByaXRlWCIsIkNhcmRTcHJpdGVZIiwiaW5pdENhcmQiLCJDYXJkU2hvdyIsInNldFBvc2l0aW9uIiwid2lkdGgiLCJDQVJEX1dJRFRIIiwiaGVpZ2h0Iiwic2l6ZU1vZGUiLCJTaXplTW9kZSIsIkNVU1RPTSIsImdldFNwcml0ZUZyYW1lIiwic2V0TnVtYmVyIiwiZ2V0TnVtYmVyIiwiQ2FyZENsaWNrU2hvdyIsIkNsaWNrVHlwZSIsInJlbW92ZUFsbENoaWxkcmVuIiwibW92ZSIsIm1vdmVCeSIsInYyIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJyZXZlcnNlIiwiZWZmZWN0cyIsInciLCJnZXRDb250ZW50U2l6ZSIsInNjYWxlIiwic2V0U2NhbGUiLCJhZGRDaGlsZCIsIm1vdmUxIiwic2NhbGVCeSIsImFjdGlvbnMiLCJyZXBlYXRGb3JldmVyIiwiZ2V0SXNTZWxlY3QiLCJnZXRJc0ZpcnN0U2VsZWN0IiwiaXNWaXNpYmxlIiwib3BhY2l0eSIsInNldFZpc2libGUiLCJpc1RydWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxh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QUFpQkQsS0FBSyxHQUFHLElBQXpCO0FBQ0g7QUFDSjtBQUNKLEdBL0VxQjtBQWdGdEJPLEVBQUFBLFdBaEZzQix5QkFnRlI7QUFDVixXQUFPLEtBQUt6QyxRQUFaO0FBQ0gsR0FsRnFCO0FBbUZ0QjBDLEVBQUFBLGdCQW5Gc0IsOEJBbUZIO0FBQ2YsV0FBTyxLQUFLekMsYUFBWjtBQUNILEdBckZxQjtBQXNGdEIwQyxFQUFBQSxTQXRGc0IsdUJBc0ZWO0FBQ1IsV0FBTyxLQUFLQyxPQUFMLElBQWdCLEdBQXZCO0FBQ0gsR0F4RnFCO0FBeUZ0QkMsRUFBQUEsVUF6RnNCLHNCQXlGWEMsTUF6RlcsRUF5Rkg7QUFDZixTQUFLRixPQUFMLEdBQWVFLE1BQU0sR0FBRyxHQUFILEdBQVMsQ0FBOUI7QUFDSDtBQTNGcUIsQ0FBVCxDQUFqQjtBQThGQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdkQsVUFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XG52YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcbnZhciBHYW1lVWlUb29scyA9IHJlcXVpcmUoXCJHYW1lVWlUb29sc1wiKTtcbnZhciBDYXJkU3ByaXRlID0gY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLk5vZGUsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjYXJkU3ByaXRlOiBudWxsLFxuICAgICAgICBudW1iZXI6IDAsLy8g5pi+56S65pWw5a2XXG4gICAgICAgIGlzU2VsZWN0OiBmYWxzZSwvL+iusOW9leaYr+WQpumAieS4rVxuICAgICAgICBpc0ZpcnN0U2VsZWN0OiBmYWxzZSwvL+iusOW9leaYr+WQpuS4uuesrOS4gOasoemAieS4rVxuICAgIH0sXG4gICAgY3RvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNhcmRTcHJpdGUgPSB0aGlzLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgIH0sXG5cdC8v54m55Lu3OS455YWD5LiA5aWXY29jb3NjcmVhdG9y5Luj56CB6IGU57O7UTI0ODMzNjcwODQgXG4vL+aIquWbviDpk77mjqXvvJpodHRwczovL3NoYXJlLndlaXl1bi5jb20vbGVHQUhwbkIg5a+G56CB77yaYjl1ZHR2XG4gICAgc3RhdGljczoge1xuICAgICAgICBjcmVhdGVDYXJkU3ByaXRlOiBmdW5jdGlvbiAobnVtYmVycywgQ2FyZFNwcml0ZVgsIENhcmRTcHJpdGVZKSB7XG4gICAgICAgICAgICBsZXQgY2FyZFNwcml0ZSA9IG5ldyBDYXJkU3ByaXRlKCk7XG4gICAgICAgICAgICAvLyDoh6rlrprkuYnliJ3lp4vljJZcbiAgICAgICAgICAgIGNhcmRTcHJpdGUuaW5pdENhcmQobnVtYmVycywgQ2FyZFNwcml0ZVgsIENhcmRTcHJpdGVZKTtcbiAgICAgICAgICAgIHJldHVybiBjYXJkU3ByaXRlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBpbml0Q2FyZDogZnVuY3Rpb24gKG51bWJlcnMsIENhcmRTcHJpdGVYLCBDYXJkU3ByaXRlWSkvLyDliJ3lp4vljJZcbiAgICB7XG4gICAgICAgIC8vIOWIneWni+WMluaVsOWtl1xuICAgICAgICB0aGlzLm51bWJlciA9IG51bWJlcnM7XG4gICAgICAgIHRoaXMuQ2FyZFNob3coKTtcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihDYXJkU3ByaXRlWCwgQ2FyZFNwcml0ZVkpO1xuICAgICAgICB0aGlzLndpZHRoID0gR2FtZUNvbmZpZy5DQVJEX1dJRFRIO1xuICAgICAgICB0aGlzLmhlaWdodCA9IEdhbWVDb25maWcuQ0FSRF9XSURUSDtcbiAgICAgICAgdGhpcy5jYXJkU3ByaXRlLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcbiAgICB9LFxuICAgIENhcmRTaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIOWIpOaWreaVsOWtl+eahOWkp+Wwj+adpeiwg+aVtOminOiJslxuICAgICAgICBpZiAodGhpcy5udW1iZXIgPT0gMSkge1xuICAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX2dhbWUvYmFycmllclwiLCB0aGlzLmNhcmRTcHJpdGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyID09IC0xKSB7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL3BvcGdhbWVfNjFcIiwgdGhpcy5jYXJkU3ByaXRlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciA9PSAwKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmNhcmRTcHJpdGUuc3ByaXRlRnJhbWUgPSBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL2VtcHR5bFwiKTtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX2dhbWUvZW1wdHlsXCIsIHRoaXMuY2FyZFNwcml0ZSApO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyID49IDIgJiYgdGhpcy5udW1iZXIgPD0gMTMxMDcyKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmNhcmRTcHJpdGUuc3ByaXRlRnJhbWUgPSBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL25cIiArIHRoaXMubnVtYmVyKTtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX2dhbWUvblwiICsgdGhpcy5udW1iZXIsIHRoaXMuY2FyZFNwcml0ZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNldE51bWJlcjogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgICB9LFxuICAgIGdldE51bWJlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gICAgfSxcbiAgICAvKlxuKuWIm+W7uueCueWHu+eJueaViFxuKkNsaWNrVHlwZSAw56e76Zmk54m55pWIIDHngrnlh7vliqjnlLvnibnmlYggMueCueWHu+mdmeaAgeeJueaViFxuKi9cbiAgICBDYXJkQ2xpY2tTaG93KENsaWNrVHlwZSkge1xuICAgICAgICBpZiAoQ2xpY2tUeXBlID09IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIHRoaXMuaXNTZWxlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdFNlbGVjdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG1vdmUgPSBjYy5tb3ZlQnkoMC4wNSwgY2MudjIoMCwgMikpO1xuICAgICAgICAgICAgdGhpcy5ydW5BY3Rpb24oY2Muc2VxdWVuY2UobW92ZSwgbW92ZS5yZXZlcnNlKCkpKTtcbiAgICAgICAgICAgIHRoaXMuaXNTZWxlY3QgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGVmZmVjdHMgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3BfZ2FtZS9wb3BnYW1lXzYxXCIsIGVmZmVjdHMuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkpO1xuICAgICAgICAgICAgbGV0IHcgPSBlZmZlY3RzLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0O1xuICAgICAgICAgICAgbGV0IHNjYWxlID0gdGhpcy5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCAvIHc7XG4gICAgICAgICAgICBlZmZlY3RzLnNldFNjYWxlKHNjYWxlKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoZWZmZWN0cyk7XG4gICAgICAgICAgICBpZiAoQ2xpY2tUeXBlID09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3RTZWxlY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBtb3ZlMSA9IGNjLnNjYWxlQnkoMC40LCAxLjE1KTtcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9ucyA9IGNjLnNlcXVlbmNlKG1vdmUxLCBtb3ZlMS5yZXZlcnNlKCkpO1xuICAgICAgICAgICAgICAgIGVmZmVjdHMucnVuQWN0aW9uKGFjdGlvbnMucmVwZWF0Rm9yZXZlcigpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQ2xpY2tUeXBlID09IDIpIHtcbiAgICAgICAgICAgICAgICBlZmZlY3RzLnNldFNjYWxlKHNjYWxlICsgMC4wNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldElzU2VsZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1NlbGVjdDtcbiAgICB9LFxuICAgIGdldElzRmlyc3RTZWxlY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRmlyc3RTZWxlY3Q7XG4gICAgfSxcbiAgICBpc1Zpc2libGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wYWNpdHkgPT0gMjU1O1xuICAgIH0sXG4gICAgc2V0VmlzaWJsZShpc1RydWUpIHtcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gaXNUcnVlID8gMjU1IDogMDtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYXJkU3ByaXRlOyJdfQ==