
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcR2FtZVByb3BIZWxwLmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiR2FtZURhdGEiLCJHYW1lVWlUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmFja0NvbG9yIiwiTm9kZSIsInRpdGxlIiwiU3ByaXRlIiwicHJvcFR5cGUiLCJoZWxwVGV4dCIsIkxhYmVsIiwiYmFja0J1dHRvbiIsImdldFByb3BCdXR0b24iLCJvbkxvYWQiLCJzZXRCdXR0b25DbGlja0V2ZW50cyIsInNldFByb3BUeXBlIiwicHJvcFR5cGVOdW1iZXIiLCJhbWVVaVRvb2xzIiwiZ2V0U3ByaXRlRnJhbWUiLCJzdHJpbmciLCJidXR0b25GdW5jIiwiZXZlbnQiLCJidXR0b24iLCJ0YXJnZXQiLCJwbGF5U2ltcGxlQXVkaW9FbmdpbmUiLCJub2RlIiwiZGVzdHJveSIsInNoYXJlUGljdHVyZSIsInNldEdhbWVQcm9wTnVtYmVyIiwiR2FtZVNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0QyxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDcEMsSUFBSUUsUUFBUSxHQUFHRixPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ2xDLElBQUlHLFdBQVcsR0FBR0gsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUN4Q0ksRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFDckJDLFVBQVUsRUFBRTtJQUNSQyxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0ssSUFBSTtJQUNsQkMsS0FBSyxFQUFFTixFQUFFLENBQUNPLE1BQU07SUFDaEJDLFFBQVEsRUFBRVIsRUFBRSxDQUFDTyxNQUFNO0lBQ25CRSxRQUFRLEVBQUVULEVBQUUsQ0FBQ1UsS0FBSztJQUNsQkMsVUFBVSxFQUFFWCxFQUFFLENBQUNLLElBQUk7SUFBRTtJQUNyQk8sYUFBYSxFQUFFWixFQUFFLENBQUNLLElBQUksQ0FBRTtFQUM1QixDQUFDO0VBRURRLE1BQU0sV0FBQUEsT0FBQSxFQUFHO0lBQ0xkLFdBQVcsQ0FBQ2Usb0JBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQ0gsVUFBVSxFQUFFLFlBQVksQ0FBQztJQUNyRVosV0FBVyxDQUFDZSxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDRixhQUFhLEVBQUUsWUFBWSxDQUFDO0VBQzVFLENBQUM7RUFFREcsV0FBVyxXQUFBQSxZQUFDUCxRQUFRLEVBQUU7SUFDbEIsSUFBSSxDQUFDUSxjQUFjLEdBQUdSLFFBQVE7SUFDOUIsSUFBSUEsUUFBUSxJQUFJLENBQUMsRUFBRTtNQUNmUyxVQUFVLENBQUNDLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUNaLEtBQUssQ0FBQztNQUM1RFAsV0FBVyxDQUFDbUIsY0FBYyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQ1YsUUFBUSxDQUFDO01BQ2hFLElBQUksQ0FBQ0MsUUFBUSxDQUFDVSxNQUFNLEdBQUcsV0FBVztJQUN0QyxDQUFDLE1BQU0sSUFBSVgsUUFBUSxJQUFJLENBQUMsRUFBRTtNQUN0QlQsV0FBVyxDQUFDbUIsY0FBYyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQ1osS0FBSyxDQUFDO01BQzdEUCxXQUFXLENBQUNtQixjQUFjLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDVixRQUFRLENBQUM7TUFDaEUsSUFBSSxDQUFDQyxRQUFRLENBQUNVLE1BQU0sR0FBRyxnQkFBZ0I7SUFDM0MsQ0FBQyxNQUFNLElBQUlYLFFBQVEsSUFBSSxDQUFDLEVBQUU7TUFDdkJULFdBQVcsQ0FBQ21CLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUNaLEtBQUssQ0FBQztNQUM1RFAsV0FBVyxDQUFDbUIsY0FBYyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQ1YsUUFBUSxDQUFDO01BQ2hFLElBQUksQ0FBQ0MsUUFBUSxDQUFDVSxNQUFNLEdBQUcsZUFBZTtJQUMxQztFQUNKLENBQUM7RUFFREMsVUFBVSxFQUFFLFNBQUFBLFdBQVVDLEtBQUssRUFBRTtJQUN6QixJQUFJQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0UsTUFBTTtJQUN6QixJQUFJLElBQUksQ0FBQ1osVUFBVSxJQUFJVyxNQUFNLEVBQUU7TUFDM0J6QixTQUFTLENBQUMyQixxQkFBcUIsQ0FBQyxDQUFDLENBQUM7TUFDbEMsSUFBSSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sRUFBRTtJQUN2QixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNkLGFBQWEsSUFBSVUsTUFBTSxFQUFFO01BQ3JDekIsU0FBUyxDQUFDMkIscUJBQXFCLENBQUMsQ0FBQyxDQUFDO01BQ2xDM0IsU0FBUyxDQUFDOEIsWUFBWSxFQUFFO01BQ3hCN0IsUUFBUSxDQUFDOEIsaUJBQWlCLENBQUMsSUFBSSxDQUFDWixjQUFjLEVBQUUsQ0FBQyxDQUFDO01BQ2xEckIsVUFBVSxDQUFDa0MsU0FBUyxDQUFDRCxpQkFBaUIsQ0FBQyxJQUFJLENBQUNaLGNBQWMsQ0FBQztNQUMzRCxJQUFJLENBQUNTLElBQUksQ0FBQ0MsT0FBTyxFQUFFO0lBQ3ZCO0lBQ0EsT0FBTyxJQUFJO0VBQ2Y7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XHJcbnZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xyXG52YXIgR2FtZURhdGEgPSByZXF1aXJlKFwiR2FtZURhdGFcIik7XHJcbnZhciBHYW1lVWlUb29scyA9IHJlcXVpcmUoXCJHYW1lVWlUb29sc1wiKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJhY2tDb2xvcjogY2MuTm9kZSxcclxuICAgICAgICB0aXRsZTogY2MuU3ByaXRlLFxyXG4gICAgICAgIHByb3BUeXBlOiBjYy5TcHJpdGUsXHJcbiAgICAgICAgaGVscFRleHQ6IGNjLkxhYmVsLFxyXG4gICAgICAgIGJhY2tCdXR0b246IGNjLk5vZGUsIC8v6L+U5Zue5oyJ6ZKuXHJcbiAgICAgICAgZ2V0UHJvcEJ1dHRvbjogY2MuTm9kZSwgLy/ojrflj5bmjInpkq5cclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMuYmFja0J1dHRvbiwgXCJidXR0b25GdW5jXCIpO1xyXG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMuZ2V0UHJvcEJ1dHRvbiwgXCJidXR0b25GdW5jXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRQcm9wVHlwZShwcm9wVHlwZSkge1xyXG4gICAgICAgIHRoaXMucHJvcFR5cGVOdW1iZXIgPSBwcm9wVHlwZTtcclxuICAgICAgICBpZiAocHJvcFR5cGUgPT0gMCkge1xyXG4gICAgICAgICAgICBhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX2dhbWUvcG9wZ2FtZV80NlwiLCB0aGlzLnRpdGxlKTtcclxuICAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3BfZ2FtZS9wb3BnYW1lXzI1XCIsIHRoaXMucHJvcFR5cGUpO1xyXG4gICAgICAgICAgICB0aGlzLmhlbHBUZXh0LnN0cmluZyA9IFwi5pWy56KO5L2g5LiN5oOz6KaB55qE5pif5pifXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wVHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX2dhbWUvcG9wZ2FtZV8zOFwiLCB0aGlzLnRpdGxlKTtcclxuICAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3BfZ2FtZS9wb3BnYW1lXzMxXCIsIHRoaXMucHJvcFR5cGUpO1xyXG4gICAgICAgICAgICB0aGlzLmhlbHBUZXh0LnN0cmluZyA9IFwi5Y+v54K45o6J6YCJ5Lit55qE5qiq5o6S5ZKM56uW5o6S55qE5pif5pifXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wVHlwZSA9PSAyKSB7XHJcbiAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3BfZ2FtZS9wb3BnYW1lXzU3XCIsIHRoaXMudGl0bGUpO1xyXG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL3BvcGdhbWVfMzBcIiwgdGhpcy5wcm9wVHlwZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaGVscFRleHQuc3RyaW5nID0gXCLngrnlh7vmmJ/mmJ/vvIzlj6/lkozlkajlm7TmmJ/mmJ/kuqTmjaJcIjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGJ1dHRvbkZ1bmM6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFja0J1dHRvbiA9PSBidXR0b24pIHtcclxuICAgICAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgwKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0UHJvcEJ1dHRvbiA9PSBidXR0b24pIHtcclxuICAgICAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgwKTtcclxuICAgICAgICAgICAgR2FtZVRvb2xzLnNoYXJlUGljdHVyZSgpO1xyXG4gICAgICAgICAgICBHYW1lRGF0YS5zZXRHYW1lUHJvcE51bWJlcih0aGlzLnByb3BUeXBlTnVtYmVyLCAxKTtcclxuICAgICAgICAgICAgR2FtZUNvbmZpZy5HYW1lU2NlbmUuc2V0R2FtZVByb3BOdW1iZXIodGhpcy5wcm9wVHlwZU51bWJlcik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==