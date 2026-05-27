
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/GamePass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '96845POniBJCI0lyGy969Pc', 'GamePass');
// Script/panel/GamePass.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameData = require("GameData");
var GameUiTools = require("GameUiTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    passLabel: cc.Label,
    scoreLabel: cc.Label,
    nextPassButton: cc.Node,
    //下一关按钮
    shareButton: cc.Node,
    //分享按钮
    backButton: cc.Node //返回按钮
  },
  onLoad: function onLoad() {
    this.passLabel.string = "第  " + GameData.getGamePassNum() + "  关";
    this.scoreLabel.string = GameData.score0;
    GameUiTools.setButtonClickEvents(this, this.nextPassButton, "buttonFunc");
    GameUiTools.setButtonClickEvents(this, this.shareButton, "buttonFunc");
    GameUiTools.setButtonClickEvents(this, this.backButton, "buttonFunc");
  },
  buttonFunc: function buttonFunc(event) {
    var button = event.target;
    if (this.shareButton == button) {
      GameTools.playSimpleAudioEngine(0);
      GameTools.sharePicture();
    } else if (this.nextPassButton == button) {
      GameTools.playSimpleAudioEngine(0);
      this.node.destroy();
      GameConfig.GameLogic.autoCreateCardNumber();
    } else if (this.backButton == button) {
      GameTools.playSimpleAudioEngine(0);
      GameConfig.GameLogic.autoCreateCardNumber();
      GameConfig.GameLogic.saveMemoryInformation();
      this.loadingResource();
    }
    return true;
  },
  loadingResource: function loadingResource() {
    GameConfig.loadingSceneType = GameConfig.LoadingSceneType.LoadingSceneBackGame;
    GameConfig.mainMenu = GameConfig.MainMenu.MainMenuSpace;
    cc.director.loadScene("LoadingScene");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcR2FtZVBhc3MuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVG9vbHMiLCJHYW1lRGF0YSIsIkdhbWVVaVRvb2xzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwYXNzTGFiZWwiLCJMYWJlbCIsInNjb3JlTGFiZWwiLCJuZXh0UGFzc0J1dHRvbiIsIk5vZGUiLCJzaGFyZUJ1dHRvbiIsImJhY2tCdXR0b24iLCJvbkxvYWQiLCJzdHJpbmciLCJnZXRHYW1lUGFzc051bSIsInNjb3JlMCIsInNldEJ1dHRvbkNsaWNrRXZlbnRzIiwiYnV0dG9uRnVuYyIsImV2ZW50IiwiYnV0dG9uIiwidGFyZ2V0IiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwic2hhcmVQaWN0dXJlIiwibm9kZSIsImRlc3Ryb3kiLCJHYW1lTG9naWMiLCJhdXRvQ3JlYXRlQ2FyZE51bWJlciIsInNhdmVNZW1vcnlJbmZvcm1hdGlvbiIsImxvYWRpbmdSZXNvdXJjZSIsImxvYWRpbmdTY2VuZVR5cGUiLCJMb2FkaW5nU2NlbmVUeXBlIiwiTG9hZGluZ1NjZW5lQmFja0dhbWUiLCJtYWluTWVudSIsIk1haW5NZW51IiwiTWFpbk1lbnVTcGFjZSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0QyxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDcEMsSUFBSUUsUUFBUSxHQUFHRixPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ2xDLElBQUlHLFdBQVcsR0FBR0gsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUN4Q0ksRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFDckJDLFVBQVUsRUFBRTtJQUNSQyxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0ssS0FBSztJQUNuQkMsVUFBVSxFQUFFTixFQUFFLENBQUNLLEtBQUs7SUFDcEJFLGNBQWMsRUFBRVAsRUFBRSxDQUFDUSxJQUFJO0lBQUU7SUFDekJDLFdBQVcsRUFBRVQsRUFBRSxDQUFDUSxJQUFJO0lBQUU7SUFDdEJFLFVBQVUsRUFBRVYsRUFBRSxDQUFDUSxJQUFJLENBQUU7RUFDekIsQ0FBQztFQUVERyxNQUFNLFdBQUFBLE9BQUEsRUFBRztJQUNMLElBQUksQ0FBQ1AsU0FBUyxDQUFDUSxNQUFNLEdBQUcsS0FBSyxHQUFHZCxRQUFRLENBQUNlLGNBQWMsRUFBRSxHQUFHLEtBQUs7SUFDakUsSUFBSSxDQUFDUCxVQUFVLENBQUNNLE1BQU0sR0FBR2QsUUFBUSxDQUFDZ0IsTUFBTTtJQUN4Q2YsV0FBVyxDQUFDZ0Isb0JBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQ1IsY0FBYyxFQUFFLFlBQVksQ0FBQztJQUN6RVIsV0FBVyxDQUFDZ0Isb0JBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQ04sV0FBVyxFQUFFLFlBQVksQ0FBQztJQUN0RVYsV0FBVyxDQUFDZ0Isb0JBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQ0wsVUFBVSxFQUFFLFlBQVksQ0FBQztFQUN6RSxDQUFDO0VBRURNLFVBQVUsRUFBRSxTQUFBQSxXQUFVQyxLQUFLLEVBQUU7SUFDekIsSUFBSUMsTUFBTSxHQUFHRCxLQUFLLENBQUNFLE1BQU07SUFDekIsSUFBSSxJQUFJLENBQUNWLFdBQVcsSUFBSVMsTUFBTSxFQUFFO01BQzVCckIsU0FBUyxDQUFDdUIscUJBQXFCLENBQUMsQ0FBQyxDQUFDO01BQ2xDdkIsU0FBUyxDQUFDd0IsWUFBWSxFQUFFO0lBQzVCLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ2QsY0FBYyxJQUFJVyxNQUFNLEVBQUU7TUFDdENyQixTQUFTLENBQUN1QixxQkFBcUIsQ0FBQyxDQUFDLENBQUM7TUFDbEMsSUFBSSxDQUFDRSxJQUFJLENBQUNDLE9BQU8sRUFBRTtNQUNuQjVCLFVBQVUsQ0FBQzZCLFNBQVMsQ0FBQ0Msb0JBQW9CLEVBQUU7SUFDL0MsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDZixVQUFVLElBQUlRLE1BQU0sRUFBRTtNQUNsQ3JCLFNBQVMsQ0FBQ3VCLHFCQUFxQixDQUFDLENBQUMsQ0FBQztNQUNsQ3pCLFVBQVUsQ0FBQzZCLFNBQVMsQ0FBQ0Msb0JBQW9CLEVBQUU7TUFDM0M5QixVQUFVLENBQUM2QixTQUFTLENBQUNFLHFCQUFxQixFQUFFO01BQzVDLElBQUksQ0FBQ0MsZUFBZSxFQUFFO0lBQzFCO0lBQ0EsT0FBTyxJQUFJO0VBQ2YsQ0FBQztFQUNEQSxlQUFlLEVBQUUsU0FBQUEsZ0JBQUEsRUFBWTtJQUN6QmhDLFVBQVUsQ0FBQ2lDLGdCQUFnQixHQUFHakMsVUFBVSxDQUFDa0MsZ0JBQWdCLENBQUNDLG9CQUFvQjtJQUM5RW5DLFVBQVUsQ0FBQ29DLFFBQVEsR0FBR3BDLFVBQVUsQ0FBQ3FDLFFBQVEsQ0FBQ0MsYUFBYTtJQUN2RGpDLEVBQUUsQ0FBQ2tDLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDLGNBQWMsQ0FBQztFQUN6QztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcclxudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XHJcbnZhciBHYW1lRGF0YSA9IHJlcXVpcmUoXCJHYW1lRGF0YVwiKTtcclxudmFyIEdhbWVVaVRvb2xzID0gcmVxdWlyZShcIkdhbWVVaVRvb2xzXCIpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcGFzc0xhYmVsOiBjYy5MYWJlbCxcclxuICAgICAgICBzY29yZUxhYmVsOiBjYy5MYWJlbCxcclxuICAgICAgICBuZXh0UGFzc0J1dHRvbjogY2MuTm9kZSwgLy/kuIvkuIDlhbPmjInpkq5cclxuICAgICAgICBzaGFyZUJ1dHRvbjogY2MuTm9kZSwgLy/liIbkuqvmjInpkq5cclxuICAgICAgICBiYWNrQnV0dG9uOiBjYy5Ob2RlLCAvL+i/lOWbnuaMiemSrlxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5wYXNzTGFiZWwuc3RyaW5nID0gXCLnrKwgIFwiICsgR2FtZURhdGEuZ2V0R2FtZVBhc3NOdW0oKSArIFwiICDlhbNcIjtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gR2FtZURhdGEuc2NvcmUwO1xyXG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMubmV4dFBhc3NCdXR0b24sIFwiYnV0dG9uRnVuY1wiKTtcclxuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLnNoYXJlQnV0dG9uLCBcImJ1dHRvbkZ1bmNcIik7XHJcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5iYWNrQnV0dG9uLCBcImJ1dHRvbkZ1bmNcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGJ1dHRvbkZ1bmM6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hhcmVCdXR0b24gPT0gYnV0dG9uKSB7XHJcbiAgICAgICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XHJcbiAgICAgICAgICAgIEdhbWVUb29scy5zaGFyZVBpY3R1cmUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubmV4dFBhc3NCdXR0b24gPT0gYnV0dG9uKSB7XHJcbiAgICAgICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZUxvZ2ljLmF1dG9DcmVhdGVDYXJkTnVtYmVyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJhY2tCdXR0b24gPT0gYnV0dG9uKSB7XHJcbiAgICAgICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XHJcbiAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZUxvZ2ljLmF1dG9DcmVhdGVDYXJkTnVtYmVyKCk7XHJcbiAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZUxvZ2ljLnNhdmVNZW1vcnlJbmZvcm1hdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdSZXNvdXJjZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBsb2FkaW5nUmVzb3VyY2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBHYW1lQ29uZmlnLmxvYWRpbmdTY2VuZVR5cGUgPSBHYW1lQ29uZmlnLkxvYWRpbmdTY2VuZVR5cGUuTG9hZGluZ1NjZW5lQmFja0dhbWU7XHJcbiAgICAgICAgR2FtZUNvbmZpZy5tYWluTWVudSA9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVTcGFjZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJMb2FkaW5nU2NlbmVcIik7XHJcbiAgICB9LFxyXG59KTtcclxuIl19