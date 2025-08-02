
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/GamePropHelp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '14994fnx85J5J1PEYcF4MrT', 'GamePropHelp');
// Script/panel/GamePropHelp.js

"use strict";

var GameConfig = require("GameConfig");

var GameTools = require("GameTools");

var GameData = require("GameData");

var GameUiTools = require("GameUiTools");

cc.Class({
  "extends": cc.Component,
  properties: {
    backColor: cc.Node,
    title: cc.Sprite,
    propType: cc.Sprite,
    helpText: cc.Label,
    backButton: cc.Node,
    //返回按钮
    getPropButton: cc.Node //获取按钮

  },
  onLoad: function onLoad() {
    GameUiTools.setButtonClickEvents(this, this.backButton, "buttonFunc");
    GameUiTools.setButtonClickEvents(this, this.getPropButton, "buttonFunc");
  },
  setPropType: function setPropType(propType) {
    this.propTypeNumber = propType;

    if (propType == 0) {
      ameUiTools.getSpriteFrame("pop_game/popgame_46", this.title);
      GameUiTools.getSpriteFrame("pop_game/popgame_25", this.propType);
      this.helpText.string = "敲碎你不想要的星星";
    } else if (propType == 1) {
      GameUiTools.getSpriteFrame("pop_game/popgame_38", this.title);
      GameUiTools.getSpriteFrame("pop_game/popgame_31", this.propType);
      this.helpText.string = "可炸掉选中的横排和竖排的星星";
    } else if (propType == 2) {
      GameUiTools.getSpriteFrame("pop_game/popgame_57", this.title);
      GameUiTools.getSpriteFrame("pop_game/popgame_30", this.propType);
      this.helpText.string = "点击星星，可和周围星星交换";
    }
  },
  buttonFunc: function buttonFunc(event) {
    var button = event.target;

    if (this.backButton == button) {
      GameTools.playSimpleAudioEngine(0);
      this.node.destroy();
    } else if (this.getPropButton == button) {
      GameTools.playSimpleAudioEngine(0);
      GameTools.sharePicture();
      GameData.setGamePropNumber(this.propTypeNumber, 1);
      GameConfig.GameScene.setGamePropNumber(this.propTypeNumber);
      this.node.destroy();
    }

    return true;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcR2FtZVByb3BIZWxwLmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiR2FtZURhdGEiLCJHYW1lVWlUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmFja0NvbG9yIiwiTm9kZSIsInRpdGxlIiwiU3ByaXRlIiwicHJvcFR5cGUiLCJoZWxwVGV4dCIsIkxhYmVsIiwiYmFja0J1dHRvbiIsImdldFByb3BCdXR0b24iLCJvbkxvYWQiLCJzZXRCdXR0b25DbGlja0V2ZW50cyIsInNldFByb3BUeXBlIiwicHJvcFR5cGVOdW1iZXIiLCJhbWVVaVRvb2xzIiwiZ2V0U3ByaXRlRnJhbWUiLCJzdHJpbmciLCJidXR0b25GdW5jIiwiZXZlbnQiLCJidXR0b24iLCJ0YXJnZXQiLCJwbGF5U2ltcGxlQXVkaW9FbmdpbmUiLCJub2RlIiwiZGVzdHJveSIsInNoYXJlUGljdHVyZSIsInNldEdhbWVQcm9wTnVtYmVyIiwiR2FtZVNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJRSxRQUFRLEdBQUdGLE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUNBLElBQUlHLFdBQVcsR0FBR0gsT0FBTyxDQUFDLGFBQUQsQ0FBekI7O0FBQ0FJLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0ssSUFETjtBQUVSQyxJQUFBQSxLQUFLLEVBQUVOLEVBQUUsQ0FBQ08sTUFGRjtBQUdSQyxJQUFBQSxRQUFRLEVBQUVSLEVBQUUsQ0FBQ08sTUFITDtBQUlSRSxJQUFBQSxRQUFRLEVBQUVULEVBQUUsQ0FBQ1UsS0FKTDtBQUtSQyxJQUFBQSxVQUFVLEVBQUVYLEVBQUUsQ0FBQ0ssSUFMUDtBQUthO0FBQ3JCTyxJQUFBQSxhQUFhLEVBQUVaLEVBQUUsQ0FBQ0ssSUFOVixDQU1nQjs7QUFOaEIsR0FGUDtBQVdMUSxFQUFBQSxNQVhLLG9CQVdJO0FBQ0xkLElBQUFBLFdBQVcsQ0FBQ2Usb0JBQVosQ0FBaUMsSUFBakMsRUFBdUMsS0FBS0gsVUFBNUMsRUFBd0QsWUFBeEQ7QUFDQVosSUFBQUEsV0FBVyxDQUFDZSxvQkFBWixDQUFpQyxJQUFqQyxFQUF1QyxLQUFLRixhQUE1QyxFQUEyRCxZQUEzRDtBQUNILEdBZEk7QUFnQkxHLEVBQUFBLFdBaEJLLHVCQWdCT1AsUUFoQlAsRUFnQmlCO0FBQ2xCLFNBQUtRLGNBQUwsR0FBc0JSLFFBQXRCOztBQUNBLFFBQUlBLFFBQVEsSUFBSSxDQUFoQixFQUFtQjtBQUNmUyxNQUFBQSxVQUFVLENBQUNDLGNBQVgsQ0FBMEIscUJBQTFCLEVBQWlELEtBQUtaLEtBQXREO0FBQ0FQLE1BQUFBLFdBQVcsQ0FBQ21CLGNBQVosQ0FBMkIscUJBQTNCLEVBQWtELEtBQUtWLFFBQXZEO0FBQ0EsV0FBS0MsUUFBTCxDQUFjVSxNQUFkLEdBQXVCLFdBQXZCO0FBQ0gsS0FKRCxNQUlPLElBQUlYLFFBQVEsSUFBSSxDQUFoQixFQUFtQjtBQUN0QlQsTUFBQUEsV0FBVyxDQUFDbUIsY0FBWixDQUEyQixxQkFBM0IsRUFBa0QsS0FBS1osS0FBdkQ7QUFDQVAsTUFBQUEsV0FBVyxDQUFDbUIsY0FBWixDQUEyQixxQkFBM0IsRUFBa0QsS0FBS1YsUUFBdkQ7QUFDQSxXQUFLQyxRQUFMLENBQWNVLE1BQWQsR0FBdUIsZ0JBQXZCO0FBQ0gsS0FKTSxNQUlBLElBQUlYLFFBQVEsSUFBSSxDQUFoQixFQUFtQjtBQUN2QlQsTUFBQUEsV0FBVyxDQUFDbUIsY0FBWixDQUEyQixxQkFBM0IsRUFBa0QsS0FBS1osS0FBdkQ7QUFDQ1AsTUFBQUEsV0FBVyxDQUFDbUIsY0FBWixDQUEyQixxQkFBM0IsRUFBa0QsS0FBS1YsUUFBdkQ7QUFDQSxXQUFLQyxRQUFMLENBQWNVLE1BQWQsR0FBdUIsZUFBdkI7QUFDSDtBQUNKLEdBL0JJO0FBaUNMQyxFQUFBQSxVQUFVLEVBQUUsb0JBQVVDLEtBQVYsRUFBaUI7QUFDekIsUUFBSUMsTUFBTSxHQUFHRCxLQUFLLENBQUNFLE1BQW5COztBQUNBLFFBQUksS0FBS1osVUFBTCxJQUFtQlcsTUFBdkIsRUFBK0I7QUFDM0J6QixNQUFBQSxTQUFTLENBQUMyQixxQkFBVixDQUFnQyxDQUFoQztBQUNBLFdBQUtDLElBQUwsQ0FBVUMsT0FBVjtBQUNILEtBSEQsTUFHTyxJQUFJLEtBQUtkLGFBQUwsSUFBc0JVLE1BQTFCLEVBQWtDO0FBQ3JDekIsTUFBQUEsU0FBUyxDQUFDMkIscUJBQVYsQ0FBZ0MsQ0FBaEM7QUFDQTNCLE1BQUFBLFNBQVMsQ0FBQzhCLFlBQVY7QUFDQTdCLE1BQUFBLFFBQVEsQ0FBQzhCLGlCQUFULENBQTJCLEtBQUtaLGNBQWhDLEVBQWdELENBQWhEO0FBQ0FyQixNQUFBQSxVQUFVLENBQUNrQyxTQUFYLENBQXFCRCxpQkFBckIsQ0FBdUMsS0FBS1osY0FBNUM7QUFDQSxXQUFLUyxJQUFMLENBQVVDLE9BQVY7QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSDtBQTlDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG52YXIgR2FtZURhdGEgPSByZXF1aXJlKFwiR2FtZURhdGFcIik7XG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYmFja0NvbG9yOiBjYy5Ob2RlLFxuICAgICAgICB0aXRsZTogY2MuU3ByaXRlLFxuICAgICAgICBwcm9wVHlwZTogY2MuU3ByaXRlLFxuICAgICAgICBoZWxwVGV4dDogY2MuTGFiZWwsXG4gICAgICAgIGJhY2tCdXR0b246IGNjLk5vZGUsIC8v6L+U5Zue5oyJ6ZKuXG4gICAgICAgIGdldFByb3BCdXR0b246IGNjLk5vZGUsIC8v6I635Y+W5oyJ6ZKuXG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5iYWNrQnV0dG9uLCBcImJ1dHRvbkZ1bmNcIik7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMuZ2V0UHJvcEJ1dHRvbiwgXCJidXR0b25GdW5jXCIpO1xuICAgIH0sXG5cbiAgICBzZXRQcm9wVHlwZShwcm9wVHlwZSkge1xuICAgICAgICB0aGlzLnByb3BUeXBlTnVtYmVyID0gcHJvcFR5cGU7XG4gICAgICAgIGlmIChwcm9wVHlwZSA9PSAwKSB7XG4gICAgICAgICAgICBhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX2dhbWUvcG9wZ2FtZV80NlwiLCB0aGlzLnRpdGxlKTtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX2dhbWUvcG9wZ2FtZV8yNVwiLCB0aGlzLnByb3BUeXBlKTtcbiAgICAgICAgICAgIHRoaXMuaGVscFRleHQuc3RyaW5nID0gXCLmlbLnoo7kvaDkuI3mg7PopoHnmoTmmJ/mmJ9cIjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wVHlwZSA9PSAxKSB7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL3BvcGdhbWVfMzhcIiwgdGhpcy50aXRsZSk7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL3BvcGdhbWVfMzFcIiwgdGhpcy5wcm9wVHlwZSk7XG4gICAgICAgICAgICB0aGlzLmhlbHBUZXh0LnN0cmluZyA9IFwi5Y+v54K45o6J6YCJ5Lit55qE5qiq5o6S5ZKM56uW5o6S55qE5pif5pifXCI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcFR5cGUgPT0gMikge1xuICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL3BvcGdhbWVfNTdcIiwgdGhpcy50aXRsZSk7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL3BvcGdhbWVfMzBcIiwgdGhpcy5wcm9wVHlwZSk7XG4gICAgICAgICAgICB0aGlzLmhlbHBUZXh0LnN0cmluZyA9IFwi54K55Ye75pif5pif77yM5Y+v5ZKM5ZGo5Zu05pif5pif5Lqk5o2iXCI7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYnV0dG9uRnVuYzogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICh0aGlzLmJhY2tCdXR0b24gPT0gYnV0dG9uKSB7XG4gICAgICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDApO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdldFByb3BCdXR0b24gPT0gYnV0dG9uKSB7XG4gICAgICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDApO1xuICAgICAgICAgICAgR2FtZVRvb2xzLnNoYXJlUGljdHVyZSgpO1xuICAgICAgICAgICAgR2FtZURhdGEuc2V0R2FtZVByb3BOdW1iZXIodGhpcy5wcm9wVHlwZU51bWJlciwgMSk7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVTY2VuZS5zZXRHYW1lUHJvcE51bWJlcih0aGlzLnByb3BUeXBlTnVtYmVyKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbn0pO1xuIl19