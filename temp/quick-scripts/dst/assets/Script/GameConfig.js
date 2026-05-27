
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f937eblcKFPZItT3ZuvdIyg', 'GameConfig');
// Script/GameConfig.js

"use strict";

var LoadingSceneType = {
  LoadingSceneFirst: 0,
  //首次进入
  LoadingSceneEnterGame: 1,
  //进入游戏
  LoadingSceneBackGame: 2 //返回游戏
};

var MainMenu = {
  MainMenuNumClassic: 0,
  // 经典模式
  MainMenuNumPop: 5,
  //消除叠加模式
  MainMenuNumPopStar: 6,
  //消灭星星模式
  MainMenuSpace: 7 //清空
};

var PropsMenu = {
  PropsMenuBackout: 0,
  //撤销功能
  PropsMenuDestroyCard: 1,
  //销毁一个卡片
  PropsMenuExchangeCard: 2,
  //调换卡片
  PropsMenuShrinkNum: 3,
  //使卡片数字除2
  PropsMenuRemoveAcross: 4,
  //使卡片横排消除
  PropsMenuRemoveVertical: 5,
  //使卡片竖排消除
  PropsMenuSpace: 6 //清空
};

var GameConfig = {
  GameName: "一起消灭星星",
  GameClubButton: null,
  //游戏圈按钮
  GameScene: null,
  GameLogic: null,
  LoadingSceneType: LoadingSceneType,
  MainMenu: MainMenu,
  PropsMenu: PropsMenu,
  DEVICE_WIDTH: 720,
  // 屏幕宽度
  DEVICE_HEIGHT: 1280,
  CARD_WIDTH: 0,
  // 卡片宽度
  CAED_LINES: 4,
  // 卡片个数

  MAIN_MENU_NUM: -1000,
  // 模式类型标识

  loadingSceneType: LoadingSceneType.LoadingSceneFirst,
  // 加载界面
  mainMenu: MainMenu.MainMenuSpace,
  // 主选择菜单

  propsMenu: PropsMenu.PropsMenuSpace,
  // 道具功能

  IS_GAME_MUSIC: true,
  // 游戏音效

  IS_GAME_SHARE: false,
  // 游戏分享
  IS_GAME_OVER: false,
  // 游戏是否结束
  IS_GAME_WIN: false //游戏是否胜利
};

module.exports = GameConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lQ29uZmlnLmpzIl0sIm5hbWVzIjpbIkxvYWRpbmdTY2VuZVR5cGUiLCJMb2FkaW5nU2NlbmVGaXJzdCIsIkxvYWRpbmdTY2VuZUVudGVyR2FtZSIsIkxvYWRpbmdTY2VuZUJhY2tHYW1lIiwiTWFpbk1lbnUiLCJNYWluTWVudU51bUNsYXNzaWMiLCJNYWluTWVudU51bVBvcCIsIk1haW5NZW51TnVtUG9wU3RhciIsIk1haW5NZW51U3BhY2UiLCJQcm9wc01lbnUiLCJQcm9wc01lbnVCYWNrb3V0IiwiUHJvcHNNZW51RGVzdHJveUNhcmQiLCJQcm9wc01lbnVFeGNoYW5nZUNhcmQiLCJQcm9wc01lbnVTaHJpbmtOdW0iLCJQcm9wc01lbnVSZW1vdmVBY3Jvc3MiLCJQcm9wc01lbnVSZW1vdmVWZXJ0aWNhbCIsIlByb3BzTWVudVNwYWNlIiwiR2FtZUNvbmZpZyIsIkdhbWVOYW1lIiwiR2FtZUNsdWJCdXR0b24iLCJHYW1lU2NlbmUiLCJHYW1lTG9naWMiLCJERVZJQ0VfV0lEVEgiLCJERVZJQ0VfSEVJR0hUIiwiQ0FSRF9XSURUSCIsIkNBRURfTElORVMiLCJNQUlOX01FTlVfTlVNIiwibG9hZGluZ1NjZW5lVHlwZSIsIm1haW5NZW51IiwicHJvcHNNZW51IiwiSVNfR0FNRV9NVVNJQyIsIklTX0dBTUVfU0hBUkUiLCJJU19HQU1FX09WRVIiLCJJU19HQU1FX1dJTiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsZ0JBQWdCLEdBQUc7RUFDbkJDLGlCQUFpQixFQUFFLENBQUM7RUFBQztFQUNyQkMscUJBQXFCLEVBQUUsQ0FBQztFQUFDO0VBQ3pCQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7QUFDNUIsQ0FBQzs7QUFDRCxJQUFJQyxRQUFRLEdBQUc7RUFDWEMsa0JBQWtCLEVBQUUsQ0FBQztFQUFDO0VBQ3RCQyxjQUFjLEVBQUUsQ0FBQztFQUFDO0VBQ2xCQyxrQkFBa0IsRUFBRSxDQUFDO0VBQUM7RUFDdEJDLGFBQWEsRUFBRSxDQUFDO0FBQ3BCLENBQUM7O0FBRUQsSUFBSUMsU0FBUyxHQUFHO0VBQ1pDLGdCQUFnQixFQUFFLENBQUM7RUFBQztFQUNwQkMsb0JBQW9CLEVBQUUsQ0FBQztFQUFDO0VBQ3hCQyxxQkFBcUIsRUFBRSxDQUFDO0VBQUM7RUFDekJDLGtCQUFrQixFQUFFLENBQUM7RUFBQztFQUN0QkMscUJBQXFCLEVBQUUsQ0FBQztFQUFDO0VBQ3pCQyx1QkFBdUIsRUFBRSxDQUFDO0VBQUM7RUFDM0JDLGNBQWMsRUFBRSxDQUFDLENBQUM7QUFDdEIsQ0FBQzs7QUFFRCxJQUFJQyxVQUFVLEdBQUc7RUFDYkMsUUFBUSxFQUFFLFFBQVE7RUFDbEJDLGNBQWMsRUFBRSxJQUFJO0VBQUM7RUFDckJDLFNBQVMsRUFBRSxJQUFJO0VBQ2ZDLFNBQVMsRUFBRSxJQUFJO0VBRWZyQixnQkFBZ0IsRUFBRUEsZ0JBQWdCO0VBQ2xDSSxRQUFRLEVBQUVBLFFBQVE7RUFDbEJLLFNBQVMsRUFBRUEsU0FBUztFQUVwQmEsWUFBWSxFQUFFLEdBQUc7RUFBRTtFQUNuQkMsYUFBYSxFQUFFLElBQUk7RUFFbkJDLFVBQVUsRUFBRSxDQUFDO0VBQUM7RUFDZEMsVUFBVSxFQUFFLENBQUM7RUFBQzs7RUFFZEMsYUFBYSxFQUFFLENBQUMsSUFBSTtFQUFDOztFQUVyQkMsZ0JBQWdCLEVBQUUzQixnQkFBZ0IsQ0FBQ0MsaUJBQWlCO0VBQUM7RUFDckQyQixRQUFRLEVBQUV4QixRQUFRLENBQUNJLGFBQWE7RUFBQzs7RUFFakNxQixTQUFTLEVBQUVwQixTQUFTLENBQUNPLGNBQWM7RUFBQzs7RUFFcENjLGFBQWEsRUFBRSxJQUFJO0VBQUM7O0VBRXBCQyxhQUFhLEVBQUUsS0FBSztFQUFDO0VBQ3JCQyxZQUFZLEVBQUUsS0FBSztFQUFDO0VBQ3BCQyxXQUFXLEVBQUUsS0FBSyxDQUFFO0FBQ3hCLENBQUM7O0FBQ0RDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHbEIsVUFBVSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIExvYWRpbmdTY2VuZVR5cGUgPSB7XHJcbiAgICBMb2FkaW5nU2NlbmVGaXJzdDogMCwvL+mmluasoei/m+WFpVxyXG4gICAgTG9hZGluZ1NjZW5lRW50ZXJHYW1lOiAxLC8v6L+b5YWl5ri45oiPXHJcbiAgICBMb2FkaW5nU2NlbmVCYWNrR2FtZTogMiwvL+i/lOWbnua4uOaIj1xyXG59O1xyXG52YXIgTWFpbk1lbnUgPSB7XHJcbiAgICBNYWluTWVudU51bUNsYXNzaWM6IDAsLy8g57uP5YW45qih5byPXHJcbiAgICBNYWluTWVudU51bVBvcDogNSwvL+a2iOmZpOWPoOWKoOaooeW8j1xyXG4gICAgTWFpbk1lbnVOdW1Qb3BTdGFyOiA2LC8v5raI54Gt5pif5pif5qih5byPXHJcbiAgICBNYWluTWVudVNwYWNlOiA3Ly/muIXnqbpcclxufTtcclxuXHJcbnZhciBQcm9wc01lbnUgPSB7XHJcbiAgICBQcm9wc01lbnVCYWNrb3V0OiAwLC8v5pKk6ZSA5Yqf6IO9XHJcbiAgICBQcm9wc01lbnVEZXN0cm95Q2FyZDogMSwvL+mUgOavgeS4gOS4quWNoeeJh1xyXG4gICAgUHJvcHNNZW51RXhjaGFuZ2VDYXJkOiAyLC8v6LCD5o2i5Y2h54mHXHJcbiAgICBQcm9wc01lbnVTaHJpbmtOdW06IDMsLy/kvb/ljaHniYfmlbDlrZfpmaQyXHJcbiAgICBQcm9wc01lbnVSZW1vdmVBY3Jvc3M6IDQsLy/kvb/ljaHniYfmqKrmjpLmtojpmaRcclxuICAgIFByb3BzTWVudVJlbW92ZVZlcnRpY2FsOiA1LC8v5L2/5Y2h54mH56uW5o6S5raI6ZmkXHJcbiAgICBQcm9wc01lbnVTcGFjZTogNiwvL+a4heepulxyXG59O1xyXG5cclxudmFyIEdhbWVDb25maWcgPSB7XHJcbiAgICBHYW1lTmFtZTogXCLkuIDotbfmtojnga3mmJ/mmJ9cIixcclxuICAgIEdhbWVDbHViQnV0dG9uOiBudWxsLC8v5ri45oiP5ZyI5oyJ6ZKuXHJcbiAgICBHYW1lU2NlbmU6IG51bGwsXHJcbiAgICBHYW1lTG9naWM6IG51bGwsXHJcblxyXG4gICAgTG9hZGluZ1NjZW5lVHlwZTogTG9hZGluZ1NjZW5lVHlwZSxcclxuICAgIE1haW5NZW51OiBNYWluTWVudSxcclxuICAgIFByb3BzTWVudTogUHJvcHNNZW51LFxyXG5cclxuICAgIERFVklDRV9XSURUSDogNzIwLCAvLyDlsY/luZXlrr3luqZcclxuICAgIERFVklDRV9IRUlHSFQ6IDEyODAsXHJcblxyXG4gICAgQ0FSRF9XSURUSDogMCwvLyDljaHniYflrr3luqZcclxuICAgIENBRURfTElORVM6IDQsLy8g5Y2h54mH5Liq5pWwXHJcblxyXG4gICAgTUFJTl9NRU5VX05VTTogLTEwMDAsLy8g5qih5byP57G75Z6L5qCH6K+GXHJcblxyXG4gICAgbG9hZGluZ1NjZW5lVHlwZTogTG9hZGluZ1NjZW5lVHlwZS5Mb2FkaW5nU2NlbmVGaXJzdCwvLyDliqDovb3nlYzpnaJcclxuICAgIG1haW5NZW51OiBNYWluTWVudS5NYWluTWVudVNwYWNlLC8vIOS4u+mAieaLqeiPnOWNlVxyXG5cclxuICAgIHByb3BzTWVudTogUHJvcHNNZW51LlByb3BzTWVudVNwYWNlLC8vIOmBk+WFt+WKn+iDvVxyXG5cclxuICAgIElTX0dBTUVfTVVTSUM6IHRydWUsLy8g5ri45oiP6Z+z5pWIXHJcblxyXG4gICAgSVNfR0FNRV9TSEFSRTogZmFsc2UsLy8g5ri45oiP5YiG5LqrXHJcbiAgICBJU19HQU1FX09WRVI6IGZhbHNlLC8vIOa4uOaIj+aYr+WQpue7k+adn1xyXG4gICAgSVNfR0FNRV9XSU46IGZhbHNlLCAvL+a4uOaIj+aYr+WQpuiDnOWIqVxyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVDb25maWc7XHJcblxyXG4iXX0=