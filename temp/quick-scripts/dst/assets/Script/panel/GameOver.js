
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/GameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dec8fHCKaxKIrsVoVxgLzJp', 'GameOver');
// Script/panel/GameOver.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
var GameData = require("GameData");
cc.Class({
  "extends": cc.Component,
  properties: {
    backColor: cc.Node,
    backButton: cc.Node,
    //返回按钮
    reviveButton: cc.Node //复活按钮
  },
  onLoad: function onLoad() {
    GameTools.submitScore(GameData.heightScore); //提交得分
    if (GameData.heightScore > GameData.getHeightScore()) {
      GameData.setHeightScore(GameData.heightScore);
    }
    GameUiTools.setButtonClickEvents(this, this.backButton, "buttonFunc");
    GameUiTools.setButtonClickEvents(this, this.reviveButton, "buttonFunc");
  },
  buttonFunc: function buttonFunc(event) {
    var button = event.target;
    if (this.reviveButton == button) {
      GameTools.playSimpleAudioEngine(0);
      if (GameData.getGameIntegral() >= 30) {
        GameConfig.IS_GAME_OVER = false;
        GameConfig.GameLogic.backGame();
        GameData.setGamePropNumber(0, 1);
        GameData.setGamePropNumber(1, 1);
        GameData.setGamePropNumber(2, 1);
        GameData.setGameIntegral(-30);
        GameConfig.GameScene.setGamePropNumber(0);
        GameConfig.GameScene.setGamePropNumber(1);
        GameConfig.GameScene.setGamePropNumber(2);
        this.node.destroy();
        if (GameConfig.IS_GAME_MUSIC) {
          GameTools.playBackgroundMusic();
        }
      }
    } else if (this.backButton == button) {
      GameTools.playSimpleAudioEngine(0);
      this.loadingResource();
    }
    return true;
  },
  loadingResource: function loadingResource() {
    GameTools.removeRankData();
    GameData.setHaveGameData(false);
    GameData.setGamePassNum(1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcR2FtZU92ZXIuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVG9vbHMiLCJHYW1lVWlUb29scyIsIkdhbWVEYXRhIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiYWNrQ29sb3IiLCJOb2RlIiwiYmFja0J1dHRvbiIsInJldml2ZUJ1dHRvbiIsIm9uTG9hZCIsInN1Ym1pdFNjb3JlIiwiaGVpZ2h0U2NvcmUiLCJnZXRIZWlnaHRTY29yZSIsInNldEhlaWdodFNjb3JlIiwic2V0QnV0dG9uQ2xpY2tFdmVudHMiLCJidXR0b25GdW5jIiwiZXZlbnQiLCJidXR0b24iLCJ0YXJnZXQiLCJwbGF5U2ltcGxlQXVkaW9FbmdpbmUiLCJnZXRHYW1lSW50ZWdyYWwiLCJJU19HQU1FX09WRVIiLCJHYW1lTG9naWMiLCJiYWNrR2FtZSIsInNldEdhbWVQcm9wTnVtYmVyIiwic2V0R2FtZUludGVncmFsIiwiR2FtZVNjZW5lIiwibm9kZSIsImRlc3Ryb3kiLCJJU19HQU1FX01VU0lDIiwicGxheUJhY2tncm91bmRNdXNpYyIsImxvYWRpbmdSZXNvdXJjZSIsInJlbW92ZVJhbmtEYXRhIiwic2V0SGF2ZUdhbWVEYXRhIiwic2V0R2FtZVBhc3NOdW0iLCJsb2FkaW5nU2NlbmVUeXBlIiwiTG9hZGluZ1NjZW5lVHlwZSIsIkxvYWRpbmdTY2VuZUJhY2tHYW1lIiwibWFpbk1lbnUiLCJNYWluTWVudSIsIk1haW5NZW51U3BhY2UiLCJkaXJlY3RvciIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDdEMsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDLElBQUlFLFdBQVcsR0FBR0YsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUN4QyxJQUFJRyxRQUFRLEdBQUdILE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDbENJLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBQ3JCQyxVQUFVLEVBQUU7SUFDUkMsU0FBUyxFQUFFSixFQUFFLENBQUNLLElBQUk7SUFDbEJDLFVBQVUsRUFBRU4sRUFBRSxDQUFDSyxJQUFJO0lBQUU7SUFDckJFLFlBQVksRUFBRVAsRUFBRSxDQUFDSyxJQUFJLENBQUU7RUFDM0IsQ0FBQztFQUVERyxNQUFNLFdBQUFBLE9BQUEsRUFBRztJQUNMWCxTQUFTLENBQUNZLFdBQVcsQ0FBQ1YsUUFBUSxDQUFDVyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzdDLElBQUlYLFFBQVEsQ0FBQ1csV0FBVyxHQUFHWCxRQUFRLENBQUNZLGNBQWMsRUFBRSxFQUFFO01BQ2xEWixRQUFRLENBQUNhLGNBQWMsQ0FBQ2IsUUFBUSxDQUFDVyxXQUFXLENBQUM7SUFDakQ7SUFDQVosV0FBVyxDQUFDZSxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDUCxVQUFVLEVBQUUsWUFBWSxDQUFDO0lBQ3JFUixXQUFXLENBQUNlLG9CQUFvQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUNOLFlBQVksRUFBRSxZQUFZLENBQUM7RUFDM0UsQ0FBQztFQUVETyxVQUFVLEVBQUUsU0FBQUEsV0FBVUMsS0FBSyxFQUFFO0lBQ3pCLElBQUlDLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxNQUFNO0lBQ3pCLElBQUksSUFBSSxDQUFDVixZQUFZLElBQUlTLE1BQU0sRUFBRTtNQUM3Qm5CLFNBQVMsQ0FBQ3FCLHFCQUFxQixDQUFDLENBQUMsQ0FBQztNQUNsQyxJQUFJbkIsUUFBUSxDQUFDb0IsZUFBZSxFQUFFLElBQUksRUFBRSxFQUFFO1FBQ2xDeEIsVUFBVSxDQUFDeUIsWUFBWSxHQUFHLEtBQUs7UUFDL0J6QixVQUFVLENBQUMwQixTQUFTLENBQUNDLFFBQVEsRUFBRTtRQUMvQnZCLFFBQVEsQ0FBQ3dCLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEN4QixRQUFRLENBQUN3QixpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDeEIsUUFBUSxDQUFDd0IsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQ3hCLFFBQVEsQ0FBQ3lCLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM3QjdCLFVBQVUsQ0FBQzhCLFNBQVMsQ0FBQ0YsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQ3pDNUIsVUFBVSxDQUFDOEIsU0FBUyxDQUFDRixpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDekM1QixVQUFVLENBQUM4QixTQUFTLENBQUNGLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUNHLElBQUksQ0FBQ0MsT0FBTyxFQUFFO1FBQ25CLElBQUloQyxVQUFVLENBQUNpQyxhQUFhLEVBQUU7VUFDMUIvQixTQUFTLENBQUNnQyxtQkFBbUIsRUFBRTtRQUNuQztNQUNKO0lBQ0osQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDdkIsVUFBVSxJQUFJVSxNQUFNLEVBQUU7TUFDbENuQixTQUFTLENBQUNxQixxQkFBcUIsQ0FBQyxDQUFDLENBQUM7TUFDbEMsSUFBSSxDQUFDWSxlQUFlLEVBQUU7SUFDMUI7SUFDQSxPQUFPLElBQUk7RUFDZixDQUFDO0VBQ0RBLGVBQWUsRUFBRSxTQUFBQSxnQkFBQSxFQUFZO0lBQ3pCakMsU0FBUyxDQUFDa0MsY0FBYyxFQUFFO0lBQzFCaEMsUUFBUSxDQUFDaUMsZUFBZSxDQUFDLEtBQUssQ0FBQztJQUMvQmpDLFFBQVEsQ0FBQ2tDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDMUJ0QyxVQUFVLENBQUN1QyxnQkFBZ0IsR0FBR3ZDLFVBQVUsQ0FBQ3dDLGdCQUFnQixDQUFDQyxvQkFBb0I7SUFDOUV6QyxVQUFVLENBQUMwQyxRQUFRLEdBQUcxQyxVQUFVLENBQUMyQyxRQUFRLENBQUNDLGFBQWE7SUFDdkR2QyxFQUFFLENBQUN3QyxRQUFRLENBQUNDLFNBQVMsQ0FBQyxjQUFjLENBQUM7RUFDekM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XHJcbnZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xyXG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XHJcbnZhciBHYW1lRGF0YSA9IHJlcXVpcmUoXCJHYW1lRGF0YVwiKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJhY2tDb2xvcjogY2MuTm9kZSxcclxuICAgICAgICBiYWNrQnV0dG9uOiBjYy5Ob2RlLCAvL+i/lOWbnuaMiemSrlxyXG4gICAgICAgIHJldml2ZUJ1dHRvbjogY2MuTm9kZSwgLy/lpI3mtLvmjInpkq5cclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIEdhbWVUb29scy5zdWJtaXRTY29yZShHYW1lRGF0YS5oZWlnaHRTY29yZSk7IC8v5o+Q5Lqk5b6X5YiGXHJcbiAgICAgICAgaWYgKEdhbWVEYXRhLmhlaWdodFNjb3JlID4gR2FtZURhdGEuZ2V0SGVpZ2h0U2NvcmUoKSkge1xyXG4gICAgICAgICAgICBHYW1lRGF0YS5zZXRIZWlnaHRTY29yZShHYW1lRGF0YS5oZWlnaHRTY29yZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMuYmFja0J1dHRvbiwgXCJidXR0b25GdW5jXCIpO1xyXG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMucmV2aXZlQnV0dG9uLCBcImJ1dHRvbkZ1bmNcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGJ1dHRvbkZ1bmM6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHRoaXMucmV2aXZlQnV0dG9uID09IGJ1dHRvbikge1xyXG4gICAgICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDApO1xyXG4gICAgICAgICAgICBpZiAoR2FtZURhdGEuZ2V0R2FtZUludGVncmFsKCkgPj0gMzApIHtcclxuICAgICAgICAgICAgICAgIEdhbWVDb25maWcuSVNfR0FNRV9PVkVSID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVMb2dpYy5iYWNrR2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgR2FtZURhdGEuc2V0R2FtZVByb3BOdW1iZXIoMCwgMSk7XHJcbiAgICAgICAgICAgICAgICBHYW1lRGF0YS5zZXRHYW1lUHJvcE51bWJlcigxLCAxKTtcclxuICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNldEdhbWVQcm9wTnVtYmVyKDIsIDEpO1xyXG4gICAgICAgICAgICAgICAgR2FtZURhdGEuc2V0R2FtZUludGVncmFsKC0zMCk7XHJcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVTY2VuZS5zZXRHYW1lUHJvcE51bWJlcigwKTtcclxuICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZVNjZW5lLnNldEdhbWVQcm9wTnVtYmVyKDEpO1xyXG4gICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5HYW1lU2NlbmUuc2V0R2FtZVByb3BOdW1iZXIoMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcuSVNfR0FNRV9NVVNJQykge1xyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5wbGF5QmFja2dyb3VuZE11c2ljKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYmFja0J1dHRvbiA9PSBidXR0b24pIHtcclxuICAgICAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgwKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nUmVzb3VyY2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgbG9hZGluZ1Jlc291cmNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgR2FtZVRvb2xzLnJlbW92ZVJhbmtEYXRhKCk7XHJcbiAgICAgICAgR2FtZURhdGEuc2V0SGF2ZUdhbWVEYXRhKGZhbHNlKTtcclxuICAgICAgICBHYW1lRGF0YS5zZXRHYW1lUGFzc051bSgxKTtcclxuICAgICAgICBHYW1lQ29uZmlnLmxvYWRpbmdTY2VuZVR5cGUgPSBHYW1lQ29uZmlnLkxvYWRpbmdTY2VuZVR5cGUuTG9hZGluZ1NjZW5lQmFja0dhbWU7XHJcbiAgICAgICAgR2FtZUNvbmZpZy5tYWluTWVudSA9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVTcGFjZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJMb2FkaW5nU2NlbmVcIik7XHJcbiAgICB9LFxyXG59KTtcclxuIl19