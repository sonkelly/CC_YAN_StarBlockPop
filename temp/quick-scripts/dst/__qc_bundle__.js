
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/AnimLayerTool');
require('./assets/Script/CardSprite');
require('./assets/Script/GameConfig');
require('./assets/Script/GameData');
require('./assets/Script/GamePopStar');
require('./assets/Script/GameScene');
require('./assets/Script/GameTools');
require('./assets/Script/GameUiTools');
require('./assets/Script/LoadingScene');
require('./assets/Script/MenuUI');
require('./assets/Script/assist/AnimInAndOut');
require('./assets/Script/panel/GameHelp');
require('./assets/Script/panel/GameOver');
require('./assets/Script/panel/GamePass');
require('./assets/Script/panel/GamePropHelp');
require('./assets/Script/panel/GamePropNode');
require('./assets/Script/panel/RankingListView');
require('./assets/Script/panel/ShowMessage');
require('./assets/migration/use_v2.0.x_cc.Toggle_event');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b71benT1ABC0aPZ2HVTgCte', 'GameScene');
// Script/GameScene.js

"use strict";

var GamePopStar = require("GamePopStar");

var GameData = require("GameData");

var GameTools = require("GameTools");

var GameUiTools = require("GameUiTools");

var GameConfig = require("GameConfig");

var AnimLayerTool = require("AnimLayerTool");

var GameScene = cc.Class({
  "extends": cc.Component,
  properties: {
    layerBack: cc.Sprite,
    backButton: cc.Node,
    //返回按钮
    cardNumberTTF: cc.Label,
    // 显示分数控件
    bestScoreTTF: cc.Label,
    // 显示最高分数控件
    progressBar: cc.Node,
    //进度条
    passNumTTF: cc.Label,
    //关数
    propMenu: [cc.Node],
    //道具按钮
    currentScore: 0,
    //当前得分
    isAddScore: false,
    //是否加分
    gameLogicLayer: cc.Node
  },
  ctor: function ctor() {
    GameConfig.GameScene = this;
    GameTools.playBackgroundMusic();
  },
  onLoad: function onLoad() {
    GameConfig.GameLogic = new GamePopStar();
    this.gameLogicLayer.addChild(GameConfig.GameLogic);
    this.currentScore = GameData.score0;
    this.cardNumberTTF.string = GameData.score0;
    this.bestScoreTTF.string = GameData.getGamePassScore();
    this.passNumTTF.string = "第 " + GameData.getGamePassNum() + " 关";
    GameUiTools.setButtonClickEvents(this, this.backButton, "backButtonFunc");
    GameUiTools.setButtonClickEvents(this, this.propMenu, "functionMenuTouchFunc");
  },
  start: function start() {},
  backButtonFunc: function backButtonFunc(event) {
    GameTools.playSimpleAudioEngine(0);
    this.loadingResource();
  },
  functionMenuTouchFunc: function functionMenuTouchFunc(event) {
    GameTools.playSimpleAudioEngine(0);
    var button = event.target;

    if (this.propMenu[0] == button) {
      if (GameData.getGamePropNumber(0) >= 1) {
        GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuDestroyCard;
      } else {
        this.showGamePropHelp(0);
        GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
      }
    } else if (this.propMenu[1] == button) {
      if (GameData.getGamePropNumber(1) >= 1) {
        GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuRemoveAcross;
      } else {
        this.showGamePropHelp(1);
        GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
      }
    } else if (this.propMenu[2] == button) {
      if (GameData.getGamePropNumber(2) >= 1) {
        GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuExchangeCard;
      } else {
        this.showGamePropHelp(2);
        GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
      }
    } else {
      GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
    }
  },
  showGamePropHelp: function showGamePropHelp(propType) {
    cc.loader.loadRes("panel/GamePropHelp", function (err, prefab) {
      var node = cc.instantiate(prefab);
      node.getComponent("GamePropHelp").setPropType(propType);
      cc.director.getScene().children[0].addChild(node);
    });
  },
  setGamePropNumber: function setGamePropNumber(propType) {
    this.propMenu[propType].getComponent("GamePropNode").setPropType();
  },
  setScore: function setScore(score) {
    if (this.currentScore > score) {
      this.currentScore = score;
      this.cardNumberTTF.string = this.currentScore;
    } else {
      this.isAddScore = true;
    }

    if (score > GameData.heightScore) {
      GameData.heightScore = score;
    }

    this.progressBar.scaleX = score / GameData.getGamePassScore() * 0.8;

    if (this.progressBar.scaleX > 0.9) {
      this.progressBar.scaleX = 0.9;
    }
  },
  update: function update(dt) {
    if (this.isAddScore && this.currentScore <= GameData.score0) {
      this.cardNumberTTF.string = this.currentScore++;
      this.currentScore++;
    } else {
      this.isAddScore = false;
    }
  },
  setPassNum: function setPassNum() {
    this.passNumTTF.string = "第 " + GameData.getGamePassNum() + " 关";
    this.bestScoreTTF.string = GameData.getGamePassScore();
  },
  loadingResource: function loadingResource() {
    GameTools.stopBackgroundMusic();
    GameConfig.loadingSceneType = GameConfig.LoadingSceneType.LoadingSceneBackGame;
    cc.director.loadScene("LoadingScene");
  } //特价9.9元一套cocoscreator代码联系Q2483367084 
  //截图 链接：https://share.weiyun.com/leGAHpnB 密码：b9udtv

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lU2NlbmUuanMiXSwibmFtZXMiOlsiR2FtZVBvcFN0YXIiLCJyZXF1aXJlIiwiR2FtZURhdGEiLCJHYW1lVG9vbHMiLCJHYW1lVWlUb29scyIsIkdhbWVDb25maWciLCJBbmltTGF5ZXJUb29sIiwiR2FtZVNjZW5lIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsYXllckJhY2siLCJTcHJpdGUiLCJiYWNrQnV0dG9uIiwiTm9kZSIsImNhcmROdW1iZXJUVEYiLCJMYWJlbCIsImJlc3RTY29yZVRURiIsInByb2dyZXNzQmFyIiwicGFzc051bVRURiIsInByb3BNZW51IiwiY3VycmVudFNjb3JlIiwiaXNBZGRTY29yZSIsImdhbWVMb2dpY0xheWVyIiwiY3RvciIsInBsYXlCYWNrZ3JvdW5kTXVzaWMiLCJvbkxvYWQiLCJHYW1lTG9naWMiLCJhZGRDaGlsZCIsInNjb3JlMCIsInN0cmluZyIsImdldEdhbWVQYXNzU2NvcmUiLCJnZXRHYW1lUGFzc051bSIsInNldEJ1dHRvbkNsaWNrRXZlbnRzIiwic3RhcnQiLCJiYWNrQnV0dG9uRnVuYyIsImV2ZW50IiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwibG9hZGluZ1Jlc291cmNlIiwiZnVuY3Rpb25NZW51VG91Y2hGdW5jIiwiYnV0dG9uIiwidGFyZ2V0IiwiZ2V0R2FtZVByb3BOdW1iZXIiLCJwcm9wc01lbnUiLCJQcm9wc01lbnUiLCJQcm9wc01lbnVEZXN0cm95Q2FyZCIsInNob3dHYW1lUHJvcEhlbHAiLCJQcm9wc01lbnVTcGFjZSIsIlByb3BzTWVudVJlbW92ZUFjcm9zcyIsIlByb3BzTWVudUV4Y2hhbmdlQ2FyZCIsInByb3BUeXBlIiwibG9hZGVyIiwibG9hZFJlcyIsImVyciIsInByZWZhYiIsIm5vZGUiLCJpbnN0YW50aWF0ZSIsImdldENvbXBvbmVudCIsInNldFByb3BUeXBlIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImNoaWxkcmVuIiwic2V0R2FtZVByb3BOdW1iZXIiLCJzZXRTY29yZSIsInNjb3JlIiwiaGVpZ2h0U2NvcmUiLCJzY2FsZVgiLCJ1cGRhdGUiLCJkdCIsInNldFBhc3NOdW0iLCJzdG9wQmFja2dyb3VuZE11c2ljIiwibG9hZGluZ1NjZW5lVHlwZSIsIkxvYWRpbmdTY2VuZVR5cGUiLCJMb2FkaW5nU2NlbmVCYWNrR2FtZSIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQXpCOztBQUNBLElBQUlDLFFBQVEsR0FBR0QsT0FBTyxDQUFDLFVBQUQsQ0FBdEI7O0FBQ0EsSUFBSUUsU0FBUyxHQUFHRixPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJRyxXQUFXLEdBQUdILE9BQU8sQ0FBQyxhQUFELENBQXpCOztBQUNBLElBQUlJLFVBQVUsR0FBR0osT0FBTyxDQUFDLFlBQUQsQ0FBeEI7O0FBQ0EsSUFBSUssYUFBYSxHQUFHTCxPQUFPLENBQUMsZUFBRCxDQUEzQjs7QUFDQSxJQUFJTSxTQUFTLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ3JCLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUztBQUVyQkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBRUosRUFBRSxDQUFDSyxNQUROO0FBRVJDLElBQUFBLFVBQVUsRUFBRU4sRUFBRSxDQUFDTyxJQUZQO0FBRWE7QUFDckJDLElBQUFBLGFBQWEsRUFBRVIsRUFBRSxDQUFDUyxLQUhWO0FBR2dCO0FBQ3hCQyxJQUFBQSxZQUFZLEVBQUVWLEVBQUUsQ0FBQ1MsS0FKVDtBQUllO0FBQ3ZCRSxJQUFBQSxXQUFXLEVBQUVYLEVBQUUsQ0FBQ08sSUFMUjtBQUthO0FBQ3JCSyxJQUFBQSxVQUFVLEVBQUVaLEVBQUUsQ0FBQ1MsS0FOUDtBQU1hO0FBQ3JCSSxJQUFBQSxRQUFRLEVBQUUsQ0FBQ2IsRUFBRSxDQUFDTyxJQUFKLENBUEY7QUFPWTtBQUVwQk8sSUFBQUEsWUFBWSxFQUFFLENBVE47QUFTUTtBQUNoQkMsSUFBQUEsVUFBVSxFQUFFLEtBVko7QUFVVTtBQUVsQkMsSUFBQUEsY0FBYyxFQUFFaEIsRUFBRSxDQUFDTztBQVpYLEdBRlM7QUFnQnJCVSxFQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZHBCLElBQUFBLFVBQVUsQ0FBQ0UsU0FBWCxHQUF1QixJQUF2QjtBQUNBSixJQUFBQSxTQUFTLENBQUN1QixtQkFBVjtBQUNILEdBbkJvQjtBQW9CckJDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUNoQnRCLElBQUFBLFVBQVUsQ0FBQ3VCLFNBQVgsR0FBdUIsSUFBSTVCLFdBQUosRUFBdkI7QUFDQSxTQUFLd0IsY0FBTCxDQUFvQkssUUFBcEIsQ0FBNkJ4QixVQUFVLENBQUN1QixTQUF4QztBQUVBLFNBQUtOLFlBQUwsR0FBb0JwQixRQUFRLENBQUM0QixNQUE3QjtBQUNBLFNBQUtkLGFBQUwsQ0FBbUJlLE1BQW5CLEdBQTRCN0IsUUFBUSxDQUFDNEIsTUFBckM7QUFDQSxTQUFLWixZQUFMLENBQWtCYSxNQUFsQixHQUEyQjdCLFFBQVEsQ0FBQzhCLGdCQUFULEVBQTNCO0FBQ0EsU0FBS1osVUFBTCxDQUFnQlcsTUFBaEIsR0FBeUIsT0FBTzdCLFFBQVEsQ0FBQytCLGNBQVQsRUFBUCxHQUFtQyxJQUE1RDtBQUNBN0IsSUFBQUEsV0FBVyxDQUFDOEIsb0JBQVosQ0FBaUMsSUFBakMsRUFBdUMsS0FBS3BCLFVBQTVDLEVBQXdELGdCQUF4RDtBQUNBVixJQUFBQSxXQUFXLENBQUM4QixvQkFBWixDQUFpQyxJQUFqQyxFQUF1QyxLQUFLYixRQUE1QyxFQUFzRCx1QkFBdEQ7QUFDSCxHQTlCb0I7QUErQnJCYyxFQUFBQSxLQS9CcUIsbUJBK0JiLENBQ1AsQ0FoQ29CO0FBaUNyQkMsRUFBQUEsY0FBYyxFQUFFLHdCQUFVQyxLQUFWLEVBQWlCO0FBQzdCbEMsSUFBQUEsU0FBUyxDQUFDbUMscUJBQVYsQ0FBZ0MsQ0FBaEM7QUFDQSxTQUFLQyxlQUFMO0FBQ0gsR0FwQ29CO0FBcUNyQkMsRUFBQUEscUJBQXFCLEVBQUUsK0JBQVVILEtBQVYsRUFBaUI7QUFDcENsQyxJQUFBQSxTQUFTLENBQUNtQyxxQkFBVixDQUFnQyxDQUFoQztBQUNBLFFBQUlHLE1BQU0sR0FBR0osS0FBSyxDQUFDSyxNQUFuQjs7QUFDQSxRQUFJLEtBQUtyQixRQUFMLENBQWMsQ0FBZCxLQUFvQm9CLE1BQXhCLEVBQWdDO0FBQzVCLFVBQUl2QyxRQUFRLENBQUN5QyxpQkFBVCxDQUEyQixDQUEzQixLQUFpQyxDQUFyQyxFQUF3QztBQUNwQ3RDLFFBQUFBLFVBQVUsQ0FBQ3VDLFNBQVgsR0FBdUJ2QyxVQUFVLENBQUN3QyxTQUFYLENBQXFCQyxvQkFBNUM7QUFDSCxPQUZELE1BRU87QUFDSCxhQUFLQyxnQkFBTCxDQUFzQixDQUF0QjtBQUNBMUMsUUFBQUEsVUFBVSxDQUFDdUMsU0FBWCxHQUF1QnZDLFVBQVUsQ0FBQ3dDLFNBQVgsQ0FBcUJHLGNBQTVDO0FBQ0g7QUFDSixLQVBELE1BT08sSUFBSSxLQUFLM0IsUUFBTCxDQUFjLENBQWQsS0FBb0JvQixNQUF4QixFQUFnQztBQUNuQyxVQUFJdkMsUUFBUSxDQUFDeUMsaUJBQVQsQ0FBMkIsQ0FBM0IsS0FBaUMsQ0FBckMsRUFBd0M7QUFDcEN0QyxRQUFBQSxVQUFVLENBQUN1QyxTQUFYLEdBQXVCdkMsVUFBVSxDQUFDd0MsU0FBWCxDQUFxQkkscUJBQTVDO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBS0YsZ0JBQUwsQ0FBc0IsQ0FBdEI7QUFDQTFDLFFBQUFBLFVBQVUsQ0FBQ3VDLFNBQVgsR0FBdUJ2QyxVQUFVLENBQUN3QyxTQUFYLENBQXFCRyxjQUE1QztBQUNIO0FBQ0osS0FQTSxNQU9BLElBQUksS0FBSzNCLFFBQUwsQ0FBYyxDQUFkLEtBQW9Cb0IsTUFBeEIsRUFBZ0M7QUFDbkMsVUFBSXZDLFFBQVEsQ0FBQ3lDLGlCQUFULENBQTJCLENBQTNCLEtBQWlDLENBQXJDLEVBQXdDO0FBQ3BDdEMsUUFBQUEsVUFBVSxDQUFDdUMsU0FBWCxHQUF1QnZDLFVBQVUsQ0FBQ3dDLFNBQVgsQ0FBcUJLLHFCQUE1QztBQUNILE9BRkQsTUFFTztBQUNILGFBQUtILGdCQUFMLENBQXNCLENBQXRCO0FBQ0ExQyxRQUFBQSxVQUFVLENBQUN1QyxTQUFYLEdBQXVCdkMsVUFBVSxDQUFDd0MsU0FBWCxDQUFxQkcsY0FBNUM7QUFDSDtBQUNKLEtBUE0sTUFPQTtBQUNIM0MsTUFBQUEsVUFBVSxDQUFDdUMsU0FBWCxHQUF1QnZDLFVBQVUsQ0FBQ3dDLFNBQVgsQ0FBcUJHLGNBQTVDO0FBQ0g7QUFDSixHQWhFb0I7QUFpRXJCRCxFQUFBQSxnQkFqRXFCLDRCQWlFSkksUUFqRUksRUFpRU07QUFDdkIzQyxJQUFBQSxFQUFFLENBQUM0QyxNQUFILENBQVVDLE9BQVYsQ0FBa0Isb0JBQWxCLEVBQXdDLFVBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUNyRCxVQUFJQyxJQUFJLEdBQUdoRCxFQUFFLENBQUNpRCxXQUFILENBQWVGLE1BQWYsQ0FBWDtBQUNBQyxNQUFBQSxJQUFJLENBQUNFLFlBQUwsQ0FBa0IsY0FBbEIsRUFBa0NDLFdBQWxDLENBQThDUixRQUE5QztBQUNBM0MsTUFBQUEsRUFBRSxDQUFDb0QsUUFBSCxDQUFZQyxRQUFaLEdBQXVCQyxRQUF2QixDQUFnQyxDQUFoQyxFQUFtQ2pDLFFBQW5DLENBQTRDMkIsSUFBNUM7QUFDSCxLQUpEO0FBS0gsR0F2RW9CO0FBd0VyQk8sRUFBQUEsaUJBeEVxQiw2QkF3RUhaLFFBeEVHLEVBd0VPO0FBQ3hCLFNBQUs5QixRQUFMLENBQWM4QixRQUFkLEVBQXdCTyxZQUF4QixDQUFxQyxjQUFyQyxFQUFxREMsV0FBckQ7QUFDSCxHQTFFb0I7QUEyRXJCSyxFQUFBQSxRQUFRLEVBQUUsa0JBQVVDLEtBQVYsRUFBaUI7QUFDdkIsUUFBSSxLQUFLM0MsWUFBTCxHQUFvQjJDLEtBQXhCLEVBQStCO0FBQzNCLFdBQUszQyxZQUFMLEdBQW9CMkMsS0FBcEI7QUFDQSxXQUFLakQsYUFBTCxDQUFtQmUsTUFBbkIsR0FBNEIsS0FBS1QsWUFBakM7QUFDSCxLQUhELE1BR087QUFDSCxXQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0g7O0FBQ0QsUUFBSTBDLEtBQUssR0FBRy9ELFFBQVEsQ0FBQ2dFLFdBQXJCLEVBQWtDO0FBQzlCaEUsTUFBQUEsUUFBUSxDQUFDZ0UsV0FBVCxHQUF1QkQsS0FBdkI7QUFFSDs7QUFDRCxTQUFLOUMsV0FBTCxDQUFpQmdELE1BQWpCLEdBQTBCRixLQUFLLEdBQUkvRCxRQUFRLENBQUM4QixnQkFBVCxFQUFULEdBQXdDLEdBQWxFOztBQUNBLFFBQUksS0FBS2IsV0FBTCxDQUFpQmdELE1BQWpCLEdBQTBCLEdBQTlCLEVBQW1DO0FBQy9CLFdBQUtoRCxXQUFMLENBQWlCZ0QsTUFBakIsR0FBMEIsR0FBMUI7QUFDSDtBQUNKLEdBMUZvQjtBQTJGckJDLEVBQUFBLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0FBQ2xCLFFBQUksS0FBSzlDLFVBQUwsSUFBbUIsS0FBS0QsWUFBTCxJQUFxQnBCLFFBQVEsQ0FBQzRCLE1BQXJELEVBQTZEO0FBQ3pELFdBQUtkLGFBQUwsQ0FBbUJlLE1BQW5CLEdBQTRCLEtBQUtULFlBQUwsRUFBNUI7QUFDQSxXQUFLQSxZQUFMO0FBQ0gsS0FIRCxNQUdPO0FBQ0gsV0FBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUNIO0FBQ0osR0FsR29CO0FBbUdyQitDLEVBQUFBLFVBbkdxQix3QkFtR1I7QUFDVCxTQUFLbEQsVUFBTCxDQUFnQlcsTUFBaEIsR0FBeUIsT0FBTzdCLFFBQVEsQ0FBQytCLGNBQVQsRUFBUCxHQUFtQyxJQUE1RDtBQUNBLFNBQUtmLFlBQUwsQ0FBa0JhLE1BQWxCLEdBQTJCN0IsUUFBUSxDQUFDOEIsZ0JBQVQsRUFBM0I7QUFDSCxHQXRHb0I7QUF1R3JCTyxFQUFBQSxlQUFlLEVBQUUsMkJBQVk7QUFDekJwQyxJQUFBQSxTQUFTLENBQUNvRSxtQkFBVjtBQUNBbEUsSUFBQUEsVUFBVSxDQUFDbUUsZ0JBQVgsR0FBOEJuRSxVQUFVLENBQUNvRSxnQkFBWCxDQUE0QkMsb0JBQTFEO0FBQ0FsRSxJQUFBQSxFQUFFLENBQUNvRCxRQUFILENBQVllLFNBQVosQ0FBc0IsY0FBdEI7QUFDSCxHQTNHb0IsQ0EyR25CO0FBQ047O0FBNUd5QixDQUFULENBQWhCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZVBvcFN0YXIgPSByZXF1aXJlKFwiR2FtZVBvcFN0YXJcIik7XG52YXIgR2FtZURhdGEgPSByZXF1aXJlKFwiR2FtZURhdGFcIik7XG52YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcbnZhciBHYW1lVWlUb29scyA9IHJlcXVpcmUoXCJHYW1lVWlUb29sc1wiKTtcbnZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XG52YXIgQW5pbUxheWVyVG9vbCA9IHJlcXVpcmUoXCJBbmltTGF5ZXJUb29sXCIpO1xudmFyIEdhbWVTY2VuZSA9IGNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYXllckJhY2s6IGNjLlNwcml0ZSxcbiAgICAgICAgYmFja0J1dHRvbjogY2MuTm9kZSwgLy/ov5Tlm57mjInpkq5cbiAgICAgICAgY2FyZE51bWJlclRURjogY2MuTGFiZWwsLy8g5pi+56S65YiG5pWw5o6n5Lu2XG4gICAgICAgIGJlc3RTY29yZVRURjogY2MuTGFiZWwsLy8g5pi+56S65pyA6auY5YiG5pWw5o6n5Lu2XG4gICAgICAgIHByb2dyZXNzQmFyOiBjYy5Ob2RlLC8v6L+b5bqm5p2hXG4gICAgICAgIHBhc3NOdW1UVEY6IGNjLkxhYmVsLC8v5YWz5pWwXG4gICAgICAgIHByb3BNZW51OiBbY2MuTm9kZV0sLy/pgZPlhbfmjInpkq5cblxuICAgICAgICBjdXJyZW50U2NvcmU6IDAsLy/lvZPliY3lvpfliIZcbiAgICAgICAgaXNBZGRTY29yZTogZmFsc2UsLy/mmK/lkKbliqDliIZcblxuICAgICAgICBnYW1lTG9naWNMYXllcjogY2MuTm9kZSxcbiAgICB9LFxuICAgIGN0b3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgR2FtZUNvbmZpZy5HYW1lU2NlbmUgPSB0aGlzO1xuICAgICAgICBHYW1lVG9vbHMucGxheUJhY2tncm91bmRNdXNpYygpO1xuICAgIH0sXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEdhbWVDb25maWcuR2FtZUxvZ2ljID0gbmV3IEdhbWVQb3BTdGFyKCk7XG4gICAgICAgIHRoaXMuZ2FtZUxvZ2ljTGF5ZXIuYWRkQ2hpbGQoR2FtZUNvbmZpZy5HYW1lTG9naWMpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFNjb3JlID0gR2FtZURhdGEuc2NvcmUwO1xuICAgICAgICB0aGlzLmNhcmROdW1iZXJUVEYuc3RyaW5nID0gR2FtZURhdGEuc2NvcmUwO1xuICAgICAgICB0aGlzLmJlc3RTY29yZVRURi5zdHJpbmcgPSBHYW1lRGF0YS5nZXRHYW1lUGFzc1Njb3JlKCk7XG4gICAgICAgIHRoaXMucGFzc051bVRURi5zdHJpbmcgPSBcIuesrCBcIiArIEdhbWVEYXRhLmdldEdhbWVQYXNzTnVtKCkgKyBcIiDlhbNcIjtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5iYWNrQnV0dG9uLCBcImJhY2tCdXR0b25GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLnByb3BNZW51LCBcImZ1bmN0aW9uTWVudVRvdWNoRnVuY1wiKTtcbiAgICB9LFxuICAgIHN0YXJ0KCkge1xuICAgIH0sXG4gICAgYmFja0J1dHRvbkZ1bmM6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDApO1xuICAgICAgICB0aGlzLmxvYWRpbmdSZXNvdXJjZSgpO1xuICAgIH0sXG4gICAgZnVuY3Rpb25NZW51VG91Y2hGdW5jOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgwKTtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKHRoaXMucHJvcE1lbnVbMF0gPT0gYnV0dG9uKSB7XG4gICAgICAgICAgICBpZiAoR2FtZURhdGEuZ2V0R2FtZVByb3BOdW1iZXIoMCkgPj0gMSkge1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcucHJvcHNNZW51ID0gR2FtZUNvbmZpZy5Qcm9wc01lbnUuUHJvcHNNZW51RGVzdHJveUNhcmQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0dhbWVQcm9wSGVscCgwKTtcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLnByb3BzTWVudSA9IEdhbWVDb25maWcuUHJvcHNNZW51LlByb3BzTWVudVNwYWNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcE1lbnVbMV0gPT0gYnV0dG9uKSB7XG4gICAgICAgICAgICBpZiAoR2FtZURhdGEuZ2V0R2FtZVByb3BOdW1iZXIoMSkgPj0gMSkge1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcucHJvcHNNZW51ID0gR2FtZUNvbmZpZy5Qcm9wc01lbnUuUHJvcHNNZW51UmVtb3ZlQWNyb3NzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dHYW1lUHJvcEhlbHAoMSk7XG4gICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5wcm9wc01lbnUgPSBHYW1lQ29uZmlnLlByb3BzTWVudS5Qcm9wc01lbnVTcGFjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BNZW51WzJdID09IGJ1dHRvbikge1xuICAgICAgICAgICAgaWYgKEdhbWVEYXRhLmdldEdhbWVQcm9wTnVtYmVyKDIpID49IDEpIHtcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLnByb3BzTWVudSA9IEdhbWVDb25maWcuUHJvcHNNZW51LlByb3BzTWVudUV4Y2hhbmdlQ2FyZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93R2FtZVByb3BIZWxwKDIpO1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcucHJvcHNNZW51ID0gR2FtZUNvbmZpZy5Qcm9wc01lbnUuUHJvcHNNZW51U3BhY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLnByb3BzTWVudSA9IEdhbWVDb25maWcuUHJvcHNNZW51LlByb3BzTWVudVNwYWNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzaG93R2FtZVByb3BIZWxwKHByb3BUeXBlKSB7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwicGFuZWwvR2FtZVByb3BIZWxwXCIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoXCJHYW1lUHJvcEhlbHBcIikuc2V0UHJvcFR5cGUocHJvcFR5cGUpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5jaGlsZHJlblswXS5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXRHYW1lUHJvcE51bWJlcihwcm9wVHlwZSkge1xuICAgICAgICB0aGlzLnByb3BNZW51W3Byb3BUeXBlXS5nZXRDb21wb25lbnQoXCJHYW1lUHJvcE5vZGVcIikuc2V0UHJvcFR5cGUoKTtcbiAgICB9LFxuICAgIHNldFNjb3JlOiBmdW5jdGlvbiAoc2NvcmUpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNjb3JlID4gc2NvcmUpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjb3JlID0gc2NvcmU7XG4gICAgICAgICAgICB0aGlzLmNhcmROdW1iZXJUVEYuc3RyaW5nID0gdGhpcy5jdXJyZW50U2NvcmU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzQWRkU2NvcmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzY29yZSA+IEdhbWVEYXRhLmhlaWdodFNjb3JlKSB7XG4gICAgICAgICAgICBHYW1lRGF0YS5oZWlnaHRTY29yZSA9IHNjb3JlO1xuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zY2FsZVggPSBzY29yZSAvIChHYW1lRGF0YS5nZXRHYW1lUGFzc1Njb3JlKCkpICogMC44O1xuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0Jhci5zY2FsZVggPiAwLjkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuc2NhbGVYID0gMC45O1xuICAgICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICBpZiAodGhpcy5pc0FkZFNjb3JlICYmIHRoaXMuY3VycmVudFNjb3JlIDw9IEdhbWVEYXRhLnNjb3JlMCkge1xuICAgICAgICAgICAgdGhpcy5jYXJkTnVtYmVyVFRGLnN0cmluZyA9IHRoaXMuY3VycmVudFNjb3JlKys7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY29yZSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0FkZFNjb3JlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNldFBhc3NOdW0oKSB7XG4gICAgICAgIHRoaXMucGFzc051bVRURi5zdHJpbmcgPSBcIuesrCBcIiArIEdhbWVEYXRhLmdldEdhbWVQYXNzTnVtKCkgKyBcIiDlhbNcIjtcbiAgICAgICAgdGhpcy5iZXN0U2NvcmVUVEYuc3RyaW5nID0gR2FtZURhdGEuZ2V0R2FtZVBhc3NTY29yZSgpO1xuICAgIH0sXG4gICAgbG9hZGluZ1Jlc291cmNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEdhbWVUb29scy5zdG9wQmFja2dyb3VuZE11c2ljKCk7XG4gICAgICAgIEdhbWVDb25maWcubG9hZGluZ1NjZW5lVHlwZSA9IEdhbWVDb25maWcuTG9hZGluZ1NjZW5lVHlwZS5Mb2FkaW5nU2NlbmVCYWNrR2FtZTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9hZGluZ1NjZW5lXCIpO1xuICAgIH0sLy/nibnku7c5LjnlhYPkuIDlpZdjb2Nvc2NyZWF0b3Lku6PnoIHogZTns7tRMjQ4MzM2NzA4NCBcbi8v5oiq5Zu+IOmTvuaOpe+8mmh0dHBzOi8vc2hhcmUud2VpeXVuLmNvbS9sZUdBSHBuQiDlr4bnoIHvvJpiOXVkdHZcbn0pOyJdfQ==
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcR2FtZVBhc3MuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVG9vbHMiLCJHYW1lRGF0YSIsIkdhbWVVaVRvb2xzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwYXNzTGFiZWwiLCJMYWJlbCIsInNjb3JlTGFiZWwiLCJuZXh0UGFzc0J1dHRvbiIsIk5vZGUiLCJzaGFyZUJ1dHRvbiIsImJhY2tCdXR0b24iLCJvbkxvYWQiLCJzdHJpbmciLCJnZXRHYW1lUGFzc051bSIsInNjb3JlMCIsInNldEJ1dHRvbkNsaWNrRXZlbnRzIiwiYnV0dG9uRnVuYyIsImV2ZW50IiwiYnV0dG9uIiwidGFyZ2V0IiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwic2hhcmVQaWN0dXJlIiwibm9kZSIsImRlc3Ryb3kiLCJHYW1lTG9naWMiLCJhdXRvQ3JlYXRlQ2FyZE51bWJlciIsInNhdmVNZW1vcnlJbmZvcm1hdGlvbiIsImxvYWRpbmdSZXNvdXJjZSIsImxvYWRpbmdTY2VuZVR5cGUiLCJMb2FkaW5nU2NlbmVUeXBlIiwiTG9hZGluZ1NjZW5lQmFja0dhbWUiLCJtYWluTWVudSIsIk1haW5NZW51IiwiTWFpbk1lbnVTcGFjZSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJRSxRQUFRLEdBQUdGLE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUNBLElBQUlHLFdBQVcsR0FBR0gsT0FBTyxDQUFDLGFBQUQsQ0FBekI7O0FBQ0FJLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0ssS0FETjtBQUVSQyxJQUFBQSxVQUFVLEVBQUVOLEVBQUUsQ0FBQ0ssS0FGUDtBQUdSRSxJQUFBQSxjQUFjLEVBQUVQLEVBQUUsQ0FBQ1EsSUFIWDtBQUdpQjtBQUN6QkMsSUFBQUEsV0FBVyxFQUFFVCxFQUFFLENBQUNRLElBSlI7QUFJYztBQUN0QkUsSUFBQUEsVUFBVSxFQUFFVixFQUFFLENBQUNRLElBTFAsQ0FLYTs7QUFMYixHQUZQO0FBVUxHLEVBQUFBLE1BVkssb0JBVUk7QUFDTCxTQUFLUCxTQUFMLENBQWVRLE1BQWYsR0FBd0IsUUFBUWQsUUFBUSxDQUFDZSxjQUFULEVBQVIsR0FBb0MsS0FBNUQ7QUFDQSxTQUFLUCxVQUFMLENBQWdCTSxNQUFoQixHQUF5QmQsUUFBUSxDQUFDZ0IsTUFBbEM7QUFDQWYsSUFBQUEsV0FBVyxDQUFDZ0Isb0JBQVosQ0FBaUMsSUFBakMsRUFBdUMsS0FBS1IsY0FBNUMsRUFBNEQsWUFBNUQ7QUFDQVIsSUFBQUEsV0FBVyxDQUFDZ0Isb0JBQVosQ0FBaUMsSUFBakMsRUFBdUMsS0FBS04sV0FBNUMsRUFBeUQsWUFBekQ7QUFDQVYsSUFBQUEsV0FBVyxDQUFDZ0Isb0JBQVosQ0FBaUMsSUFBakMsRUFBdUMsS0FBS0wsVUFBNUMsRUFBd0QsWUFBeEQ7QUFDSCxHQWhCSTtBQWtCTE0sRUFBQUEsVUFBVSxFQUFFLG9CQUFVQyxLQUFWLEVBQWlCO0FBQ3pCLFFBQUlDLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxNQUFuQjs7QUFDQSxRQUFJLEtBQUtWLFdBQUwsSUFBb0JTLE1BQXhCLEVBQWdDO0FBQzVCckIsTUFBQUEsU0FBUyxDQUFDdUIscUJBQVYsQ0FBZ0MsQ0FBaEM7QUFDQXZCLE1BQUFBLFNBQVMsQ0FBQ3dCLFlBQVY7QUFDSCxLQUhELE1BR08sSUFBSSxLQUFLZCxjQUFMLElBQXVCVyxNQUEzQixFQUFtQztBQUN0Q3JCLE1BQUFBLFNBQVMsQ0FBQ3VCLHFCQUFWLENBQWdDLENBQWhDO0FBQ0EsV0FBS0UsSUFBTCxDQUFVQyxPQUFWO0FBQ0E1QixNQUFBQSxVQUFVLENBQUM2QixTQUFYLENBQXFCQyxvQkFBckI7QUFDSCxLQUpNLE1BSUEsSUFBSSxLQUFLZixVQUFMLElBQW1CUSxNQUF2QixFQUErQjtBQUNsQ3JCLE1BQUFBLFNBQVMsQ0FBQ3VCLHFCQUFWLENBQWdDLENBQWhDO0FBQ0F6QixNQUFBQSxVQUFVLENBQUM2QixTQUFYLENBQXFCQyxvQkFBckI7QUFDQTlCLE1BQUFBLFVBQVUsQ0FBQzZCLFNBQVgsQ0FBcUJFLHFCQUFyQjtBQUNBLFdBQUtDLGVBQUw7QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSCxHQWxDSTtBQW1DTEEsRUFBQUEsZUFBZSxFQUFFLDJCQUFZO0FBQ3pCaEMsSUFBQUEsVUFBVSxDQUFDaUMsZ0JBQVgsR0FBOEJqQyxVQUFVLENBQUNrQyxnQkFBWCxDQUE0QkMsb0JBQTFEO0FBQ0FuQyxJQUFBQSxVQUFVLENBQUNvQyxRQUFYLEdBQXNCcEMsVUFBVSxDQUFDcUMsUUFBWCxDQUFvQkMsYUFBMUM7QUFDQWpDLElBQUFBLEVBQUUsQ0FBQ2tDLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixjQUF0QjtBQUNIO0FBdkNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XG52YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcbnZhciBHYW1lRGF0YSA9IHJlcXVpcmUoXCJHYW1lRGF0YVwiKTtcbnZhciBHYW1lVWlUb29scyA9IHJlcXVpcmUoXCJHYW1lVWlUb29sc1wiKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBwYXNzTGFiZWw6IGNjLkxhYmVsLFxuICAgICAgICBzY29yZUxhYmVsOiBjYy5MYWJlbCxcbiAgICAgICAgbmV4dFBhc3NCdXR0b246IGNjLk5vZGUsIC8v5LiL5LiA5YWz5oyJ6ZKuXG4gICAgICAgIHNoYXJlQnV0dG9uOiBjYy5Ob2RlLCAvL+WIhuS6q+aMiemSrlxuICAgICAgICBiYWNrQnV0dG9uOiBjYy5Ob2RlLCAvL+i/lOWbnuaMiemSrlxuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMucGFzc0xhYmVsLnN0cmluZyA9IFwi56ysICBcIiArIEdhbWVEYXRhLmdldEdhbWVQYXNzTnVtKCkgKyBcIiAg5YWzXCI7XG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBHYW1lRGF0YS5zY29yZTA7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMubmV4dFBhc3NCdXR0b24sIFwiYnV0dG9uRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5zaGFyZUJ1dHRvbiwgXCJidXR0b25GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLmJhY2tCdXR0b24sIFwiYnV0dG9uRnVuY1wiKTtcbiAgICB9LFxuXG4gICAgYnV0dG9uRnVuYzogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICh0aGlzLnNoYXJlQnV0dG9uID09IGJ1dHRvbikge1xuICAgICAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgwKTtcbiAgICAgICAgICAgIEdhbWVUb29scy5zaGFyZVBpY3R1cmUoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm5leHRQYXNzQnV0dG9uID09IGJ1dHRvbikge1xuICAgICAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgwKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVMb2dpYy5hdXRvQ3JlYXRlQ2FyZE51bWJlcigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYmFja0J1dHRvbiA9PSBidXR0b24pIHtcbiAgICAgICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVMb2dpYy5hdXRvQ3JlYXRlQ2FyZE51bWJlcigpO1xuICAgICAgICAgICAgR2FtZUNvbmZpZy5HYW1lTG9naWMuc2F2ZU1lbW9yeUluZm9ybWF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdSZXNvdXJjZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgbG9hZGluZ1Jlc291cmNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEdhbWVDb25maWcubG9hZGluZ1NjZW5lVHlwZSA9IEdhbWVDb25maWcuTG9hZGluZ1NjZW5lVHlwZS5Mb2FkaW5nU2NlbmVCYWNrR2FtZTtcbiAgICAgICAgR2FtZUNvbmZpZy5tYWluTWVudSA9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVTcGFjZTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9hZGluZ1NjZW5lXCIpO1xuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5c1e996ZgRF74Ib0kGwThK2', 'use_v2.0.x_cc.Toggle_event');
// migration/use_v2.0.x_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only compatible with projects prior to v2.1.0.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 之前版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether the 'toggle' and 'checkEvents' events are fired when 'toggle.check() / toggle.uncheck()' is called in the code
  // 在代码中调用 'toggle.check() / toggle.uncheck()' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_check = true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMC54X2NjLlRvZ2dsZV9ldmVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIlRvZ2dsZSIsIl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsRUFBRSxDQUFDQyxNQUFQLEVBQWU7QUFDWDtBQUNBO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVQywyQkFBVixHQUF3QyxJQUF4QztBQUNIIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBUaGlzIHNjcmlwdCBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBDb2NvcyBDcmVhdG9yIGFuZCBpcyBvbmx5IGNvbXBhdGlibGUgd2l0aCBwcm9qZWN0cyBwcmlvciB0byB2Mi4xLjAuXHJcbiAqIFlvdSBkbyBub3QgbmVlZCB0byBtYW51YWxseSBhZGQgdGhpcyBzY3JpcHQgaW4gYW55IG90aGVyIHByb2plY3QuXHJcbiAqIElmIHlvdSBkb24ndCB1c2UgY2MuVG9nZ2xlIGluIHlvdXIgcHJvamVjdCwgeW91IGNhbiBkZWxldGUgdGhpcyBzY3JpcHQgZGlyZWN0bHkuXHJcbiAqIElmIHlvdXIgcHJvamVjdCBpcyBob3N0ZWQgaW4gVkNTIHN1Y2ggYXMgZ2l0LCBzdWJtaXQgdGhpcyBzY3JpcHQgdG9nZXRoZXIuXHJcbiAqXHJcbiAqIOatpOiEmuacrOeUsSBDb2NvcyBDcmVhdG9yIOiHquWKqOeUn+aIkO+8jOS7heeUqOS6juWFvOWuuSB2Mi4xLjAg5LmL5YmN54mI5pys55qE5bel56iL77yMXHJcbiAqIOS9oOaXoOmcgOWcqOS7u+S9leWFtuWug+mhueebruS4reaJi+WKqOa3u+WKoOatpOiEmuacrOOAglxyXG4gKiDlpoLmnpzkvaDnmoTpobnnm67kuK3msqHnlKjliLAgVG9nZ2xl77yM5Y+v55u05o6l5Yig6Zmk6K+l6ISa5pys44CCXHJcbiAqIOWmguaenOS9oOeahOmhueebruacieaJmOeuoeS6jiBnaXQg562J54mI5pys5bqT77yM6K+35bCG5q2k6ISa5pys5LiA5bm25LiK5Lyg44CCXHJcbiAqL1xyXG5cclxuaWYgKGNjLlRvZ2dsZSkge1xyXG4gICAgLy8gV2hldGhlciB0aGUgJ3RvZ2dsZScgYW5kICdjaGVja0V2ZW50cycgZXZlbnRzIGFyZSBmaXJlZCB3aGVuICd0b2dnbGUuY2hlY2soKSAvIHRvZ2dsZS51bmNoZWNrKCknIGlzIGNhbGxlZCBpbiB0aGUgY29kZVxyXG4gICAgLy8g5Zyo5Luj56CB5Lit6LCD55SoICd0b2dnbGUuY2hlY2soKSAvIHRvZ2dsZS51bmNoZWNrKCknIOaXtuaYr+WQpuinpuWPkSAndG9nZ2xlJyDkuI4gJ2NoZWNrRXZlbnRzJyDkuovku7ZcclxuICAgIGNjLlRvZ2dsZS5fdHJpZ2dlckV2ZW50SW5TY3JpcHRfY2hlY2sgPSB0cnVlO1xyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GamePopStar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a3ac4EJGJABo4T04pKYHlg', 'GamePopStar');
// Script/GamePopStar.js

"use strict";

var CardSprite = require("CardSprite");

var GameConfig = require("GameConfig");

var GameData = require("GameData");

var AnimLayerTool = require("AnimLayerTool");

var GameTools = require("GameTools");

var GameUiTools = require("GameUiTools");

var TAG_card = 1006;
var GamePopStar = cc.Class({
  "extends": cc.Node,
  properties: {
    firstX: null,
    //点击元素
    firstY: null,
    //点击元素
    endX: null,
    endY: null,
    selectNumber: 0,
    //选中数字
    selectAmount: 0,
    //选中卡片数
    score: 0,
    //分数,
    cardArr: null,
    // 储存卡片类
    firstClickNum: new Array() //记录交换位置

  },
  ctor: function ctor() {
    this.x = -GameConfig.DEVICE_WIDTH / 2;
    this.y = -GameConfig.DEVICE_HEIGHT / 2;
    this.setContentSize(GameConfig.DEVICE_WIDTH * 4, GameConfig.DEVICE_HEIGHT * 4);
    this.init();
  },
  init: function init() {
    this.cardArr = new Array();

    for (var i = 0; i < GameConfig.CAED_LINES; i++) {
      this.cardArr[i] = Array();
    }

    this.firstClickNum[0] = -1;
    this.firstClickNum[1] = -1;
    this.initUI();
  },
  initUI: function initUI() {
    //设置触摸事件监听
    this.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
    this.createCardSprite(); //创建4X4卡片

    if (GameData.isHaveGameData()) {
      this.score = GameData.score0;

      for (var i = 0; i < GameConfig.CAED_LINES; i++) {
        for (var j = 0; j < GameConfig.CAED_LINES; j++) {
          this.cardArr[i][j].number = GameData.scoreCard0[i][j];
          this.cardArr[i][j].CardShow();

          if (GameData.scoreCard2[i][j] == 1) {
            this.cardArr[i][j].setVisible(false);
          }
        }
      }
    } else {
      for (var _i = 0; _i < GameConfig.CAED_LINES; _i++) {
        for (var _j = 0; _j < GameConfig.CAED_LINES; _j++) {
          AnimLayerTool.moveButtonAnim(this.cardArr[_i][_j], true, AnimLayerTool.MoveButtonAnimType.up);
        }
      }

      GameData.score0 = 0;
      GameData.score1 = 0;
      GameData.scoreNum = 0;
      this.score = 0;

      for (var _i2 = 0; _i2 < GameConfig.CAED_LINES; _i2++) {
        for (var _j2 = 0; _j2 < GameConfig.CAED_LINES; _j2++) {
          GameData.scoreCard3[_i2][_j2] = 0;
          GameData.scoreCard2[_i2][_j2] = 0;
          GameData.scoreCard1[_i2][_j2] = this.cardArr[_i2][_j2].number;
          GameData.scoreCard0[_i2][_j2] = this.cardArr[_i2][_j2].number;
        }
      }
    }
  },
  onTouchBegan: function onTouchBegan(event) {
    //获取触摸的X轴和Y轴
    var touchPoint = event.touch.getLocation(); //获取OpenGL坐标（即cocos2d-x坐标，原点在左下角）

    var self = event.getCurrentTarget();

    if (GameConfig.propsMenu != GameConfig.PropsMenu.PropsMenuSpace) {
      self.GamePopStarProperty(touchPoint);
      return false;
    } else {
      //碰撞检测
      if (self.selectAmount == 0) {
        for (var i = 0; i < GameConfig.CAED_LINES; i++) {
          for (var j = 0; j < GameConfig.CAED_LINES; j++) {
            if (self.cardArr[i][j].isVisible() && self.cardArr[i][j].getBoundingBoxToWorld().contains(touchPoint)) {
              GameTools.playSimpleAudioEngine(1);
              self.cardArr[i][j].CardClickShow(1);
              self.inspectionSelect(i, j);
            }
          }
        }

        self.cardVanish();
      }

      return true;
    }
  },
  //道具模式
  GamePopStarProperty: function GamePopStarProperty(touchPoint) {
    //碰撞检测
    for (var i = 0; i < GameConfig.CAED_LINES; i++) {
      for (var j = 0; j < GameConfig.CAED_LINES; j++) {
        if (this.cardArr[i][j].isVisible() && this.cardArr[i][j].getBoundingBoxToWorld().contains(touchPoint)) {
          GameTools.playSimpleAudioEngine(0);

          if (GameConfig.propsMenu == GameConfig.PropsMenu.PropsMenuDestroyCard) {
            this.cardArr[i][j].setVisible(false);
            this.cardVanishAni(0);
            GameData.setGamePropNumber(0, -1);
            GameConfig.GameScene.setGamePropNumber(0);
            GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
            return;
          } else if (GameConfig.propsMenu == GameConfig.PropsMenu.PropsMenuExchangeCard) {
            if (this.firstClickNum[0] == -1) {
              this.firstClickNum[0] = i;
              this.firstClickNum[1] = j;

              if (i > 0 && this.cardArr[i - 1][j].isVisible()) {
                this.cardArr[i - 1][j].CardClickShow(1);
              }

              if (i < GameConfig.CAED_LINES - 1 && this.cardArr[i + 1][j].isVisible()) {
                this.cardArr[i + 1][j].CardClickShow(1);
              }

              if (j > 0 && this.cardArr[i][j - 1].isVisible()) {
                this.cardArr[i][j - 1].CardClickShow(1);
              }

              if (j < GameConfig.CAED_LINES - 1 && this.cardArr[i][j + 1].isVisible()) {
                this.cardArr[i][j + 1].CardClickShow(1);
              } //AnimLayerTool.createExchangeCardAnim(this.cardArr[i][j], i, j);

            } else {
              if (Math.abs(i - this.firstClickNum[0]) == 1 && j - this.firstClickNum[1] == 0 || i - this.firstClickNum[0] == 0 && Math.abs(j - this.firstClickNum[1]) == 1) {
                this.cancelSelect();
                AnimLayerTool.createMoveAnim(this.cardArr[i][j], this.cardArr[this.firstClickNum[0]][this.firstClickNum[1]], true);
                AnimLayerTool.createMoveAnim(this.cardArr[this.firstClickNum[0]][this.firstClickNum[1]], this.cardArr[i][j], true);
                var num = this.cardArr[i][j].getNumber();
                this.cardArr[i][j].setNumber(this.cardArr[this.firstClickNum[0]][this.firstClickNum[1]].getNumber());
                this.cardArr[this.firstClickNum[0]][this.firstClickNum[1]].setNumber(num);
                this.firstClickNum[0] = -1;
                this.firstClickNum[1] = -1;
                GameData.setGamePropNumber(2, -1);
                GameConfig.GameScene.setGamePropNumber(2);
                this.cardVanishAni(0); //检测
              } else {
                this.firstClickNum[0] = -1;
                this.firstClickNum[1] = -1;
                this.cancelSelect();
              }

              GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
            }

            return;
          } else if (GameConfig.propsMenu == GameConfig.PropsMenu.PropsMenuRemoveAcross) {
            for (var z = 0; z < GameConfig.CAED_LINES; z++) {
              AnimLayerTool.callFuncPopStarAnim(null, this.cardArr[z][j]);
              this.cardArr[z][j].setVisible(false);
              AnimLayerTool.callFuncPopStarAnim(null, this.cardArr[i][z]);
              this.cardArr[i][z].setVisible(false);
            }

            GameData.setGamePropNumber(1, -1);
            GameConfig.GameScene.setGamePropNumber(1);
            this.cardVanishAni(0);
            GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
            return;
          }
        }
      }
    }

    if (this.firstClickNum[0] != -1) {
      this.cancelSelect();
      this.firstClickNum[0] = -1;
      this.firstClickNum[1] = -1;
    }

    GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
  },
  cardVanishAni: function cardVanishAni(dt) {
    //卡片消失监听动画
    this.doDown();
    this.doLeft();
    this.doCheck(0);
    this.selectAmount = 0;
  },
  cancelSelect: function cancelSelect() {
    //取消选择
    for (var i = 0; i < GameConfig.CAED_LINES; i++) {
      for (var j = 0; j < GameConfig.CAED_LINES; j++) {
        if (this.cardArr[i][j].getIsSelect()) {
          this.cardArr[i][j].CardClickShow(0);
        }
      }
    }

    this.selectAmount = 0;
  },
  cardVanish: function cardVanish() {
    //卡片消失
    if (this.selectAmount >= 2) {
      var firstCardI, firstCardJ;
      var deTime = 0;

      for (var i = 0; i < GameConfig.CAED_LINES; i++) {
        for (var j = 0; j < GameConfig.CAED_LINES; j++) {
          if (this.cardArr[i][j].getIsFirstSelect()) {
            firstCardI = i;
            firstCardJ = j;
          }

          if (this.cardArr[i][j].getIsSelect()) {
            this.cardArr[i][j].CardClickShow(0); //this.cardArr[i][j].setVisible(false);

            AnimLayerTool.createPopStarAnim(this.cardArr[i][j], deTime++ * 0.1); //AnimLayerTool.callFuncPopStarAnim(this.cardArr[i][j]);
          }
        }
      }

      this.score = this.score + this.selectAmount * this.selectAmount * 5;
      AnimLayerTool.createScoreMoveAnim(this.cardArr[firstCardI][firstCardJ], this.selectAmount * this.selectAmount * 5, false); //加分动画

      AnimLayerTool.createShowMessageBoxAward(this.getParent(), this.selectAmount); //展示奖励对话框

      var scoreNum = GameData.setGameRewards(this.selectNumber); //获取奖励

      AnimLayerTool.createScoreMoveAnim(this.cardArr[firstCardI][firstCardJ], scoreNum, true);
      GameUiTools.scheduleOnce(this, this.cardVanishAni, deTime * 0.1); //this.cardVanishAni(0);
    } else {
      this.cancelSelect();
    }

    return false;
  },
  //选择点中卡片
  inspectionSelect: function inspectionSelect(i, j) {
    this.cardArr[i][j].CardClickShow(2);
    this.selectAmount++;
    this.selectNumber = this.cardArr[i][j].getNumber();

    if (i >= 1 && this.cardArr[i - 1][j].isVisible() && !this.cardArr[i - 1][j].getIsSelect()) {
      if (this.selectNumber == this.cardArr[i - 1][j].getNumber()) {
        this.inspectionSelect(i - 1, j);
      }
    }

    if (j < GameConfig.CAED_LINES - 1 && this.cardArr[i][j + 1].isVisible() && !this.cardArr[i][j + 1].getIsSelect()) {
      if (this.selectNumber == this.cardArr[i][j + 1].getNumber()) {
        this.inspectionSelect(i, j + 1);
      }
    }

    if (i < GameConfig.CAED_LINES - 1 && this.cardArr[i + 1][j].isVisible() && !this.cardArr[i + 1][j].getIsSelect()) {
      if (this.selectNumber == this.cardArr[i + 1][j].getNumber()) {
        this.inspectionSelect(i + 1, j);
      }
    }

    if (j >= 1 && this.cardArr[i][j - 1].isVisible() && !this.cardArr[i][j - 1].getIsSelect()) {
      if (this.selectNumber == this.cardArr[i][j - 1].getNumber()) {
        this.inspectionSelect(i, j - 1);
      }
    }
  },
  doDown: function doDown() {
    var isdo = false;

    for (var x = 0; x < GameConfig.CAED_LINES; x++) {
      for (var y = 0; y < GameConfig.CAED_LINES; y++) {
        for (var y1 = y + 1; y1 < GameConfig.CAED_LINES; y1++) {
          if (this.cardArr[x][y1].isVisible()) {
            if (!this.cardArr[x][y].isVisible()) {
              AnimLayerTool.createMoveAnim(this.cardArr[x][y1], this.cardArr[x][y], false);
              this.cardArr[x][y].setNumber(this.cardArr[x][y1].getNumber());
              this.cardArr[x][y].setVisible(true);
              this.cardArr[x][y1].setVisible(false);
              this.cardArr[x][y1].CardShow();
              y--;
              isdo = true;
            }

            break;
          }
        }
      }
    }

    return isdo;
  },
  doLeft: function doLeft() {
    var isdo = false;

    for (var x = 0; x < GameConfig.CAED_LINES; x++) {
      for (var x1 = x + 1; x1 < GameConfig.CAED_LINES; x1++) {
        if (this.cardArr[x1][0].isVisible()) {
          if (!this.cardArr[x][0].isVisible()) {
            for (var y = 0; y < GameConfig.CAED_LINES; y++) {
              if (this.cardArr[x1][y].isVisible()) {
                AnimLayerTool.createMoveAnim(this.cardArr[x1][y], this.cardArr[x][y], false);
              }

              this.cardArr[x][y].setNumber(this.cardArr[x1][y].getNumber());
              this.cardArr[x][y].setVisible(this.cardArr[x1][y].isVisible());
              this.cardArr[x1][y].setVisible(false);
              this.cardArr[x1][y].CardShow();
            }

            x--;
            isdo = true;
          }

          break;
        }
      }
    }

    return isdo;
  },
  //根据屏幕大小创建卡片
  createCardSprite: function createCardSprite() {
    for (var i = 0; i < GameConfig.CAED_LINES; i++) {
      for (var j = 0; j < GameConfig.CAED_LINES; j++) {
        var card = CardSprite.createCardSprite(this.randomCreateCardNumber(), GameConfig.CARD_WIDTH * i + GameConfig.DEVICE_WIDTH / 20.0 + GameConfig.CARD_WIDTH / 2.0, GameConfig.CARD_WIDTH * j + GameConfig.DEVICE_HEIGHT / 8.0);
        this.cardArr[i][j] = card; // this.addChild(card, i, j);
        //版本调整

        this.addChild(card);
      }
    }
  },
  //随机产生数字
  randomCreateCardNumber: function randomCreateCardNumber() {
    // let num = cc.random0To1() * 5;
    var num = Math.random() * 5;
    var returnNum = Math.pow(2, Math.floor(num) + 1);
    return returnNum;
  },
  //自动生成卡片
  autoCreateCardNumber: function autoCreateCardNumber(dt) {
    // this.removeChildByTag(TAG_passSprit);
    for (var i = 0; i < GameConfig.CAED_LINES; i++) {
      for (var j = 0; j < GameConfig.CAED_LINES; j++) {
        this.cardArr[i][j].setVisible(true);
        this.cardArr[i][j].setNumber(this.randomCreateCardNumber());
        this.cardArr[i][j].CardShow();
        AnimLayerTool.moveButtonAnim(this.cardArr[i][j], true, AnimLayerTool.MoveButtonAnimType.up);
      }
    }

    GameData.setGamePassNum(GameData.getGamePassNum() + 1);
    GameConfig.GameScene.setPassNum();
    GameConfig.GameScene.progressBar.scaleX = 0;
    GameUiTools.scheduleOnce(this, this.doCheck, 0.15);
  },
  setScore: function setScore() {
    GameConfig.GameScene.setScore(this.score);
  },
  doCheck: function doCheck(dt) {
    this.saveMemoryInformation(); //保存临时信息
    //this.setScore(score);

    var isGameOver = true;
    var isPassGame = true;

    for (var y = 0; y < GameConfig.CAED_LINES; y++) {
      for (var x = 0; x < GameConfig.CAED_LINES; x++) {
        if (this.cardArr[x][y].isVisible()) {
          if (x < GameConfig.CAED_LINES - 1 && this.cardArr[x + 1][y].isVisible() && this.cardArr[x + 1][y].getNumber() == this.cardArr[x][y].getNumber()) {
            isPassGame = false;
            break;
          }

          if (y < GameConfig.CAED_LINES - 1 && this.cardArr[x][y + 1].isVisible() && this.cardArr[x][y + 1].getNumber() == this.cardArr[x][y].getNumber()) {
            isPassGame = false;
            break;
          }
        } else {
          isGameOver = false;
        }
      }
    }

    if (isPassGame) {
      var deTime = 0;

      for (var i = 0; i < GameConfig.CAED_LINES; i++) {
        for (var j = 0; j < GameConfig.CAED_LINES; j++) {
          if (this.cardArr[i][j].isVisible()) {
            if (deTime < 5) {
              AnimLayerTool.createPopStarAnim(this.cardArr[i][j], ++deTime * 0.5);
            } else {
              AnimLayerTool.createPopStarAnim(this.cardArr[i][j], deTime * 0.5);
            }
          }
        }
      }

      if (deTime < 5) {
        this.score = this.score + (5 - deTime) * (5 - deTime) * 5;
        AnimLayerTool.createScoreMoveAnim(this.cardArr[2][2], (5 - deTime) * (5 - deTime) * 5, false); //加分动画
      }

      if (this.score < GameData.getGamePassScore()) {
        GameUiTools.scheduleOnce(this, this.gameOver, 1 + deTime * 0.5);
      } else {
        AnimLayerTool.createShowMessageBoxAward(this.getParent(), -1); // GameUiTools.scheduleOnce(this, this.autoCreateCardNumber, 1 + deTime * 0.5);

        GameUiTools.scheduleOnce(this, this.gamePass, 1 + deTime * 0.5);
      }
    }
  },
  gamePass: function gamePass() {
    GameUiTools.loadingLayer("panel/GamePass");
  },
  gameOver: function gameOver(dt) //游戏结束
  {
    GameConfig.IS_GAME_OVER = true;
    GameUiTools.loadingLayer("panel/GameOver"); // cc.loader.loadRes("panel/GameOver", (err, prefab) => {
    //     let node = cc.instantiate(prefab);
    //     GameConfig.GameScene.node.addChild(node);
    // });
  },

  /**
   *撤销游戏
   */
  backGame: function backGame() {
    if (GameData.scoreNum == 1) {
      for (var i = 0; i < GameConfig.CAED_LINES; i++) {
        for (var j = 0; j < GameConfig.CAED_LINES; j++) {
          this.cardArr[i][j].setNumber(GameData.scoreCard1[i][j]);
          this.cardArr[i][j].CardShow();

          if (GameData.scoreCard3[i][j] == 1) {
            this.cardArr[i][j].setVisible(false);
          } else {
            this.cardArr[i][j].setVisible(true);
          }
        }
      }

      this.score = GameData.score1;
      GameData.scoreNum = 0;
      GameData.score0 = GameData.score1;

      for (var _i3 = 0; _i3 < GameConfig.CAED_LINES; _i3++) {
        for (var _j3 = 0; _j3 < GameConfig.CAED_LINES; _j3++) {
          GameData.scoreCard2[_i3][_j3] = GameData.scoreCard3[_i3][_j3];
          GameData.scoreCard0[_i3][_j3] = GameData.scoreCard1[_i3][_j3];
        }
      }

      this.setScore();
    } else {
      GameTools.toastMessage(4);
    }
  },
  saveMemoryInformation: function saveMemoryInformation() {
    if (GameData.scoreNum == 0) {
      GameData.scoreNum = 1;
    }

    GameData.score1 = GameData.score0;
    GameData.score0 = this.score;

    for (var i = 0; i < GameConfig.CAED_LINES; i++) {
      for (var j = 0; j < GameConfig.CAED_LINES; j++) {
        GameData.scoreCard3[i][j] = GameData.scoreCard2[i][j];
        GameData.scoreCard2[i][j] = this.cardArr[i][j].isVisible() ? 0 : 1;
        GameData.scoreCard1[i][j] = GameData.scoreCard0[i][j];
        GameData.scoreCard0[i][j] = this.cardArr[i][j].getNumber();
        GameData.bestNum = GameData.bestNum > this.cardArr[i][j].getNumber() ? GameData.bestNum : this.cardArr[i][j].getNumber();
      }
    }
  }
});
module.exports = GamePopStar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lUG9wU3Rhci5qcyJdLCJuYW1lcyI6WyJDYXJkU3ByaXRlIiwicmVxdWlyZSIsIkdhbWVDb25maWciLCJHYW1lRGF0YSIsIkFuaW1MYXllclRvb2wiLCJHYW1lVG9vbHMiLCJHYW1lVWlUb29scyIsIlRBR19jYXJkIiwiR2FtZVBvcFN0YXIiLCJjYyIsIkNsYXNzIiwiTm9kZSIsInByb3BlcnRpZXMiLCJmaXJzdFgiLCJmaXJzdFkiLCJlbmRYIiwiZW5kWSIsInNlbGVjdE51bWJlciIsInNlbGVjdEFtb3VudCIsInNjb3JlIiwiY2FyZEFyciIsImZpcnN0Q2xpY2tOdW0iLCJBcnJheSIsImN0b3IiLCJ4IiwiREVWSUNFX1dJRFRIIiwieSIsIkRFVklDRV9IRUlHSFQiLCJzZXRDb250ZW50U2l6ZSIsImluaXQiLCJpIiwiQ0FFRF9MSU5FUyIsImluaXRVSSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoQmVnYW4iLCJjcmVhdGVDYXJkU3ByaXRlIiwiaXNIYXZlR2FtZURhdGEiLCJzY29yZTAiLCJqIiwibnVtYmVyIiwic2NvcmVDYXJkMCIsIkNhcmRTaG93Iiwic2NvcmVDYXJkMiIsInNldFZpc2libGUiLCJtb3ZlQnV0dG9uQW5pbSIsIk1vdmVCdXR0b25BbmltVHlwZSIsInVwIiwic2NvcmUxIiwic2NvcmVOdW0iLCJzY29yZUNhcmQzIiwic2NvcmVDYXJkMSIsImV2ZW50IiwidG91Y2hQb2ludCIsInRvdWNoIiwiZ2V0TG9jYXRpb24iLCJzZWxmIiwiZ2V0Q3VycmVudFRhcmdldCIsInByb3BzTWVudSIsIlByb3BzTWVudSIsIlByb3BzTWVudVNwYWNlIiwiR2FtZVBvcFN0YXJQcm9wZXJ0eSIsImlzVmlzaWJsZSIsImdldEJvdW5kaW5nQm94VG9Xb3JsZCIsImNvbnRhaW5zIiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwiQ2FyZENsaWNrU2hvdyIsImluc3BlY3Rpb25TZWxlY3QiLCJjYXJkVmFuaXNoIiwiUHJvcHNNZW51RGVzdHJveUNhcmQiLCJjYXJkVmFuaXNoQW5pIiwic2V0R2FtZVByb3BOdW1iZXIiLCJHYW1lU2NlbmUiLCJQcm9wc01lbnVFeGNoYW5nZUNhcmQiLCJNYXRoIiwiYWJzIiwiY2FuY2VsU2VsZWN0IiwiY3JlYXRlTW92ZUFuaW0iLCJudW0iLCJnZXROdW1iZXIiLCJzZXROdW1iZXIiLCJQcm9wc01lbnVSZW1vdmVBY3Jvc3MiLCJ6IiwiY2FsbEZ1bmNQb3BTdGFyQW5pbSIsImR0IiwiZG9Eb3duIiwiZG9MZWZ0IiwiZG9DaGVjayIsImdldElzU2VsZWN0IiwiZmlyc3RDYXJkSSIsImZpcnN0Q2FyZEoiLCJkZVRpbWUiLCJnZXRJc0ZpcnN0U2VsZWN0IiwiY3JlYXRlUG9wU3RhckFuaW0iLCJjcmVhdGVTY29yZU1vdmVBbmltIiwiY3JlYXRlU2hvd01lc3NhZ2VCb3hBd2FyZCIsImdldFBhcmVudCIsInNldEdhbWVSZXdhcmRzIiwic2NoZWR1bGVPbmNlIiwiaXNkbyIsInkxIiwieDEiLCJjYXJkIiwicmFuZG9tQ3JlYXRlQ2FyZE51bWJlciIsIkNBUkRfV0lEVEgiLCJhZGRDaGlsZCIsInJhbmRvbSIsInJldHVybk51bSIsInBvdyIsImZsb29yIiwiYXV0b0NyZWF0ZUNhcmROdW1iZXIiLCJzZXRHYW1lUGFzc051bSIsImdldEdhbWVQYXNzTnVtIiwic2V0UGFzc051bSIsInByb2dyZXNzQmFyIiwic2NhbGVYIiwic2V0U2NvcmUiLCJzYXZlTWVtb3J5SW5mb3JtYXRpb24iLCJpc0dhbWVPdmVyIiwiaXNQYXNzR2FtZSIsImdldEdhbWVQYXNzU2NvcmUiLCJnYW1lT3ZlciIsImdhbWVQYXNzIiwibG9hZGluZ0xheWVyIiwiSVNfR0FNRV9PVkVSIiwiYmFja0dhbWUiLCJ0b2FzdE1lc3NhZ2UiLCJiZXN0TnVtIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxZQUFELENB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QlosQ0FBcEIsRUFBdUJVLENBQXZCLENBQTVCO0FBQ0FyQyxRQUFBQSxRQUFRLENBQUN1QyxVQUFULENBQW9CWixDQUFwQixFQUF1QlUsQ0FBdkIsSUFBNEIsS0FBS3BCLE9BQUwsQ0FBYVUsQ0FBYixFQUFnQlUsQ0FBaEIsRUFBbUJ3QyxTQUFuQixFQUE1QjtBQUNBN0UsUUFBQUEsUUFBUSxDQUFDNkgsT0FBVCxHQUFtQjdILFFBQVEsQ0FBQzZILE9BQVQsR0FBbUIsS0FBSzVHLE9BQUwsQ0FBYVUsQ0FBYixFQUFnQlUsQ0FBaEIsRUFBbUJ3QyxTQUFuQixFQUFuQixHQUFvRDdFLFFBQVEsQ0FBQzZILE9BQTdELEdBQXVFLEtBQUs1RyxPQUFMLENBQWFVLENBQWIsRUFBZ0JVLENBQWhCLEVBQW1Cd0MsU0FBbkIsRUFBMUY7QUFDSDtBQUNKO0FBQ0o7QUE5YnNCLENBQVQsQ0FBbEI7QUFpY0FpRCxNQUFNLENBQUNDLE9BQVAsR0FBaUIxSCxXQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENhcmRTcHJpdGUgPSByZXF1aXJlKFwiQ2FyZFNwcml0ZVwiKTtcbnZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XG52YXIgR2FtZURhdGEgPSByZXF1aXJlKFwiR2FtZURhdGFcIik7XG52YXIgQW5pbUxheWVyVG9vbCA9IHJlcXVpcmUoXCJBbmltTGF5ZXJUb29sXCIpO1xudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XG5jb25zdCBUQUdfY2FyZCA9IDEwMDY7XG52YXIgR2FtZVBvcFN0YXIgPSBjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuTm9kZSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGZpcnN0WDogbnVsbCwvL+eCueWHu+WFg+e0oFxuICAgICAgICBmaXJzdFk6IG51bGwsLy/ngrnlh7vlhYPntKBcbiAgICAgICAgZW5kWDogbnVsbCxcbiAgICAgICAgZW5kWTogbnVsbCxcbiAgICAgICAgc2VsZWN0TnVtYmVyOiAwLC8v6YCJ5Lit5pWw5a2XXG4gICAgICAgIHNlbGVjdEFtb3VudDogMCwvL+mAieS4reWNoeeJh+aVsFxuICAgICAgICBzY29yZTogMCwvL+WIhuaVsCxcbiAgICAgICAgY2FyZEFycjogbnVsbCwvLyDlgqjlrZjljaHniYfnsbtcbiAgICAgICAgZmlyc3RDbGlja051bTogbmV3IEFycmF5KCksLy/orrDlvZXkuqTmjaLkvY3nva5cbiAgICB9LFxuICAgIGN0b3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy54ID0gLUdhbWVDb25maWcuREVWSUNFX1dJRFRIIC8gMjtcbiAgICAgICAgdGhpcy55ID0gLUdhbWVDb25maWcuREVWSUNFX0hFSUdIVCAvIDI7XG4gICAgICAgIHRoaXMuc2V0Q29udGVudFNpemUoR2FtZUNvbmZpZy5ERVZJQ0VfV0lEVEggKiA0LCBHYW1lQ29uZmlnLkRFVklDRV9IRUlHSFQgKiA0KTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfSxcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2FyZEFyciA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV0gPSBBcnJheSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlyc3RDbGlja051bVswXSA9IC0xO1xuICAgICAgICB0aGlzLmZpcnN0Q2xpY2tOdW1bMV0gPSAtMTtcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcbiAgICB9LFxuICAgIGluaXRVSSgpIHtcbiAgICAgICAgLy/orr7nva7op6bmkbjkuovku7bnm5HlkKxcbiAgICAgICAgdGhpcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoQmVnYW4sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FyZFNwcml0ZSgpOyAvL+WIm+W7ujRYNOWNoeeJh1xuICAgICAgICBpZiAoR2FtZURhdGEuaXNIYXZlR2FtZURhdGEoKSkge1xuICAgICAgICAgICAgdGhpcy5zY29yZSA9IEdhbWVEYXRhLnNjb3JlMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpXVtqXS5udW1iZXIgPSBHYW1lRGF0YS5zY29yZUNhcmQwW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uQ2FyZFNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEdhbWVEYXRhLnNjb3JlQ2FyZDJbaV1bal0gPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2ldW2pdLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5tb3ZlQnV0dG9uQW5pbSh0aGlzLmNhcmRBcnJbaV1bal0sIHRydWUsIEFuaW1MYXllclRvb2wuTW92ZUJ1dHRvbkFuaW1UeXBlLnVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHYW1lRGF0YS5zY29yZTAgPSAwO1xuICAgICAgICAgICAgR2FtZURhdGEuc2NvcmUxID0gMDtcbiAgICAgICAgICAgIEdhbWVEYXRhLnNjb3JlTnVtID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgR2FtZURhdGEuc2NvcmVDYXJkM1tpXVtqXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNjb3JlQ2FyZDJbaV1bal0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5zY29yZUNhcmQxW2ldW2pdID0gdGhpcy5jYXJkQXJyW2ldW2pdLm51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgR2FtZURhdGEuc2NvcmVDYXJkMFtpXVtqXSA9IHRoaXMuY2FyZEFycltpXVtqXS5udW1iZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBvblRvdWNoQmVnYW4oZXZlbnQpIHtcbiAgICAgICAgLy/ojrflj5bop6bmkbjnmoRY6L205ZKMWei9tFxuICAgICAgICBsZXQgdG91Y2hQb2ludCA9IGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCk7IC8v6I635Y+WT3BlbkdM5Z2Q5qCH77yI5Y2zY29jb3MyZC145Z2Q5qCH77yM5Y6f54K55Zyo5bem5LiL6KeS77yJXG4gICAgICAgIGxldCBzZWxmID0gZXZlbnQuZ2V0Q3VycmVudFRhcmdldCgpO1xuICAgICAgICBpZiAoR2FtZUNvbmZpZy5wcm9wc01lbnUgIT0gR2FtZUNvbmZpZy5Qcm9wc01lbnUuUHJvcHNNZW51U3BhY2UpIHtcbiAgICAgICAgICAgIHNlbGYuR2FtZVBvcFN0YXJQcm9wZXJ0eSh0b3VjaFBvaW50KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHsgLy/norDmkp7mo4DmtYtcbiAgICAgICAgICAgIGlmIChzZWxmLnNlbGVjdEFtb3VudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5jYXJkQXJyW2ldW2pdLmlzVmlzaWJsZSgpICYmIHNlbGYuY2FyZEFycltpXVtqXS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyh0b3VjaFBvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYXJkQXJyW2ldW2pdLkNhcmRDbGlja1Nob3coMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnNwZWN0aW9uU2VsZWN0KGksIGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYuY2FyZFZhbmlzaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4vL+mBk+WFt+aooeW8j1xuICAgIEdhbWVQb3BTdGFyUHJvcGVydHkodG91Y2hQb2ludCkge1xuICAgICAgICAvL+eisOaSnuajgOa1i1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FyZEFycltpXVtqXS5pc1Zpc2libGUoKSAmJiB0aGlzLmNhcmRBcnJbaV1bal0uZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuY29udGFpbnModG91Y2hQb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcucHJvcHNNZW51ID09IEdhbWVDb25maWcuUHJvcHNNZW51LlByb3BzTWVudURlc3Ryb3lDYXJkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRWYW5pc2hBbmkoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5zZXRHYW1lUHJvcE51bWJlcigwLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVTY2VuZS5zZXRHYW1lUHJvcE51bWJlcigwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcucHJvcHNNZW51ID0gR2FtZUNvbmZpZy5Qcm9wc01lbnUuUHJvcHNNZW51U3BhY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoR2FtZUNvbmZpZy5wcm9wc01lbnUgPT0gR2FtZUNvbmZpZy5Qcm9wc01lbnUuUHJvcHNNZW51RXhjaGFuZ2VDYXJkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maXJzdENsaWNrTnVtWzBdID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdENsaWNrTnVtWzBdID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0Q2xpY2tOdW1bMV0gPSBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID4gMCAmJiB0aGlzLmNhcmRBcnJbaSAtIDFdW2pdLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpIC0gMV1bal0uQ2FyZENsaWNrU2hvdygxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBHYW1lQ29uZmlnLkNBRURfTElORVMgLSAxICYmIHRoaXMuY2FyZEFycltpICsgMV1bal0uaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2kgKyAxXVtqXS5DYXJkQ2xpY2tTaG93KDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA+IDAgJiYgdGhpcy5jYXJkQXJyW2ldW2ogLSAxXS5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1baiAtIDFdLkNhcmRDbGlja1Nob3coMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTIC0gMSAmJiB0aGlzLmNhcmRBcnJbaV1baiArIDFdLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpXVtqICsgMV0uQ2FyZENsaWNrU2hvdygxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9BbmltTGF5ZXJUb29sLmNyZWF0ZUV4Y2hhbmdlQ2FyZEFuaW0odGhpcy5jYXJkQXJyW2ldW2pdLCBpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgoTWF0aC5hYnMoaSAtIHRoaXMuZmlyc3RDbGlja051bVswXSkgPT0gMSkgJiYgKChqIC0gdGhpcy5maXJzdENsaWNrTnVtWzFdKSA9PSAwKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgKCgoaSAtIHRoaXMuZmlyc3RDbGlja051bVswXSkgPT0gMCkgJiYgKE1hdGguYWJzKGogLSB0aGlzLmZpcnN0Q2xpY2tOdW1bMV0pID09IDEpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbFNlbGVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbmltTGF5ZXJUb29sLmNyZWF0ZU1vdmVBbmltKHRoaXMuY2FyZEFycltpXVtqXSwgdGhpcy5jYXJkQXJyW3RoaXMuZmlyc3RDbGlja051bVswXV1bdGhpcy5maXJzdENsaWNrTnVtWzFdXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1MYXllclRvb2wuY3JlYXRlTW92ZUFuaW0odGhpcy5jYXJkQXJyW3RoaXMuZmlyc3RDbGlja051bVswXV1bdGhpcy5maXJzdENsaWNrTnVtWzFdXSwgdGhpcy5jYXJkQXJyW2ldW2pdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG51bSA9IHRoaXMuY2FyZEFycltpXVtqXS5nZXROdW1iZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2ldW2pdLnNldE51bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFyclt0aGlzLmZpcnN0Q2xpY2tOdW1bMF1dW3RoaXMuZmlyc3RDbGlja051bVsxXV0uZ2V0TnVtYmVyKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbdGhpcy5maXJzdENsaWNrTnVtWzBdXVt0aGlzLmZpcnN0Q2xpY2tOdW1bMV1dLnNldE51bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RDbGlja051bVswXSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0Q2xpY2tOdW1bMV0gPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZURhdGEuc2V0R2FtZVByb3BOdW1iZXIoMiwgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVTY2VuZS5zZXRHYW1lUHJvcE51bWJlcigyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkVmFuaXNoQW5pKDApOyAvL+ajgOa1i1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdENsaWNrTnVtWzBdID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RDbGlja051bVsxXSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbFNlbGVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLnByb3BzTWVudSA9IEdhbWVDb25maWcuUHJvcHNNZW51LlByb3BzTWVudVNwYWNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKEdhbWVDb25maWcucHJvcHNNZW51ID09IEdhbWVDb25maWcuUHJvcHNNZW51LlByb3BzTWVudVJlbW92ZUFjcm9zcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IHorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1MYXllclRvb2wuY2FsbEZ1bmNQb3BTdGFyQW5pbShudWxsLCB0aGlzLmNhcmRBcnJbel1bal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFyclt6XVtqXS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbmltTGF5ZXJUb29sLmNhbGxGdW5jUG9wU3RhckFuaW0obnVsbCwgdGhpcy5jYXJkQXJyW2ldW3pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bel0uc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5zZXRHYW1lUHJvcE51bWJlcigxLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVTY2VuZS5zZXRHYW1lUHJvcE51bWJlcigxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZFZhbmlzaEFuaSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcucHJvcHNNZW51ID0gR2FtZUNvbmZpZy5Qcm9wc01lbnUuUHJvcHNNZW51U3BhY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZmlyc3RDbGlja051bVswXSAhPSAtMSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxTZWxlY3QoKTtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDbGlja051bVswXSA9IC0xO1xuICAgICAgICAgICAgdGhpcy5maXJzdENsaWNrTnVtWzFdID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgR2FtZUNvbmZpZy5wcm9wc01lbnUgPSBHYW1lQ29uZmlnLlByb3BzTWVudS5Qcm9wc01lbnVTcGFjZTtcbiAgICB9LFxuXG4gICAgY2FyZFZhbmlzaEFuaShkdCkgey8v5Y2h54mH5raI5aSx55uR5ZCs5Yqo55S7XG4gICAgICAgIHRoaXMuZG9Eb3duKCk7XG4gICAgICAgIHRoaXMuZG9MZWZ0KCk7XG4gICAgICAgIHRoaXMuZG9DaGVjaygwKTtcbiAgICAgICAgdGhpcy5zZWxlY3RBbW91bnQgPSAwO1xuICAgIH0sXG5cbiAgICBjYW5jZWxTZWxlY3QoKSB7Ly/lj5bmtojpgInmi6lcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhcmRBcnJbaV1bal0uZ2V0SXNTZWxlY3QoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uQ2FyZENsaWNrU2hvdygwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RBbW91bnQgPSAwO1xuICAgIH0sXG5cbiAgICBjYXJkVmFuaXNoKCkgey8v5Y2h54mH5raI5aSxXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEFtb3VudCA+PSAyKSB7XG4gICAgICAgICAgICBsZXQgZmlyc3RDYXJkSSwgZmlyc3RDYXJkSjtcbiAgICAgICAgICAgIGxldCBkZVRpbWUgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FyZEFycltpXVtqXS5nZXRJc0ZpcnN0U2VsZWN0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0Q2FyZEkgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RDYXJkSiA9IGo7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FyZEFycltpXVtqXS5nZXRJc1NlbGVjdCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uQ2FyZENsaWNrU2hvdygwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5jYXJkQXJyW2ldW2pdLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5jcmVhdGVQb3BTdGFyQW5pbSh0aGlzLmNhcmRBcnJbaV1bal0sIChkZVRpbWUrKykgKiAwLjEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9BbmltTGF5ZXJUb29sLmNhbGxGdW5jUG9wU3RhckFuaW0odGhpcy5jYXJkQXJyW2ldW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zY29yZSA9IHRoaXMuc2NvcmUgKyB0aGlzLnNlbGVjdEFtb3VudCAqIHRoaXMuc2VsZWN0QW1vdW50ICogNTtcbiAgICAgICAgICAgIEFuaW1MYXllclRvb2wuY3JlYXRlU2NvcmVNb3ZlQW5pbSh0aGlzLmNhcmRBcnJbZmlyc3RDYXJkSV1bZmlyc3RDYXJkSl0sIHRoaXMuc2VsZWN0QW1vdW50ICogdGhpcy5zZWxlY3RBbW91bnQgKiA1LCBmYWxzZSk7Ly/liqDliIbliqjnlLtcbiAgICAgICAgICAgIEFuaW1MYXllclRvb2wuY3JlYXRlU2hvd01lc3NhZ2VCb3hBd2FyZCh0aGlzLmdldFBhcmVudCgpLCB0aGlzLnNlbGVjdEFtb3VudCk7Ly/lsZXnpLrlpZblirHlr7nor53moYZcblxuICAgICAgICAgICAgbGV0IHNjb3JlTnVtID0gR2FtZURhdGEuc2V0R2FtZVJld2FyZHModGhpcy5zZWxlY3ROdW1iZXIpOyAvL+iOt+WPluWlluWKsVxuICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5jcmVhdGVTY29yZU1vdmVBbmltKHRoaXMuY2FyZEFycltmaXJzdENhcmRJXVtmaXJzdENhcmRKXSwgc2NvcmVOdW0sIHRydWUpO1xuICAgICAgICAgICAgR2FtZVVpVG9vbHMuc2NoZWR1bGVPbmNlKHRoaXMsIHRoaXMuY2FyZFZhbmlzaEFuaSwgZGVUaW1lICogMC4xKTtcbiAgICAgICAgICAgIC8vdGhpcy5jYXJkVmFuaXNoQW5pKDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxTZWxlY3QoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbi8v6YCJ5oup54K55Lit5Y2h54mHXG4gICAgaW5zcGVjdGlvblNlbGVjdChpLCBqKSB7XG4gICAgICAgIHRoaXMuY2FyZEFycltpXVtqXS5DYXJkQ2xpY2tTaG93KDIpO1xuICAgICAgICB0aGlzLnNlbGVjdEFtb3VudCsrO1xuICAgICAgICB0aGlzLnNlbGVjdE51bWJlciA9IHRoaXMuY2FyZEFycltpXVtqXS5nZXROdW1iZXIoKTtcbiAgICAgICAgaWYgKGkgPj0gMSAmJiB0aGlzLmNhcmRBcnJbaSAtIDFdW2pdLmlzVmlzaWJsZSgpICYmICF0aGlzLmNhcmRBcnJbaSAtIDFdW2pdLmdldElzU2VsZWN0KCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdE51bWJlciA9PSB0aGlzLmNhcmRBcnJbaSAtIDFdW2pdLmdldE51bWJlcigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnNwZWN0aW9uU2VsZWN0KGkgLSAxLCBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUyAtIDEgJiYgdGhpcy5jYXJkQXJyW2ldW2ogKyAxXS5pc1Zpc2libGUoKVxuICAgICAgICAgICAgJiYgIXRoaXMuY2FyZEFycltpXVtqICsgMV0uZ2V0SXNTZWxlY3QoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0TnVtYmVyID09IHRoaXMuY2FyZEFycltpXVtqICsgMV0uZ2V0TnVtYmVyKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3BlY3Rpb25TZWxlY3QoaSwgaiArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTIC0gMSAmJiB0aGlzLmNhcmRBcnJbaSArIDFdW2pdLmlzVmlzaWJsZSgpXG4gICAgICAgICAgICAmJiAhdGhpcy5jYXJkQXJyW2kgKyAxXVtqXS5nZXRJc1NlbGVjdCgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3ROdW1iZXIgPT0gdGhpcy5jYXJkQXJyW2kgKyAxXVtqXS5nZXROdW1iZXIoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zcGVjdGlvblNlbGVjdChpICsgMSwgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGogPj0gMSAmJiB0aGlzLmNhcmRBcnJbaV1baiAtIDFdLmlzVmlzaWJsZSgpXG4gICAgICAgICAgICAmJiAhdGhpcy5jYXJkQXJyW2ldW2ogLSAxXS5nZXRJc1NlbGVjdCgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3ROdW1iZXIgPT0gdGhpcy5jYXJkQXJyW2ldW2ogLSAxXS5nZXROdW1iZXIoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zcGVjdGlvblNlbGVjdChpLCBqIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRvRG93bigpIHtcbiAgICAgICAgbGV0IGlzZG8gPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IHgrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IHkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHkxID0geSArIDE7IHkxIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyB5MSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhcmRBcnJbeF1beTFdLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FyZEFyclt4XVt5XS5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1MYXllclRvb2wuY3JlYXRlTW92ZUFuaW0odGhpcy5jYXJkQXJyW3hdW3kxXSwgdGhpcy5jYXJkQXJyW3hdW3ldLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW3hdW3ldLnNldE51bWJlcih0aGlzLmNhcmRBcnJbeF1beTFdLmdldE51bWJlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbeF1beV0uc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbeF1beTFdLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFyclt4XVt5MV0uQ2FyZFNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5LS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNkbyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNkbztcbiAgICB9LFxuICAgIGRvTGVmdCgpIHtcbiAgICAgICAgbGV0IGlzZG8gPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IHgrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeDEgPSB4ICsgMTsgeDEgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IHgxKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXJkQXJyW3gxXVswXS5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FyZEFyclt4XVswXS5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IHkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhcmRBcnJbeDFdW3ldLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1MYXllclRvb2wuY3JlYXRlTW92ZUFuaW0odGhpcy5jYXJkQXJyW3gxXVt5XSwgdGhpcy5jYXJkQXJyW3hdW3ldLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFyclt4XVt5XS5zZXROdW1iZXIodGhpcy5jYXJkQXJyW3gxXVt5XS5nZXROdW1iZXIoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW3hdW3ldLnNldFZpc2libGUodGhpcy5jYXJkQXJyW3gxXVt5XS5pc1Zpc2libGUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW3gxXVt5XS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbeDFdW3ldLkNhcmRTaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB4LS07XG4gICAgICAgICAgICAgICAgICAgICAgICBpc2RvID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzZG87XG4gICAgfSxcbiAgICAvL+agueaNruWxj+W5leWkp+Wwj+WIm+W7uuWNoeeJh1xuICAgIGNyZWF0ZUNhcmRTcHJpdGUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY2FyZCA9IENhcmRTcHJpdGUuY3JlYXRlQ2FyZFNwcml0ZSh0aGlzLnJhbmRvbUNyZWF0ZUNhcmROdW1iZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5DQVJEX1dJRFRIICogaSArIEdhbWVDb25maWcuREVWSUNFX1dJRFRIIC8gMjAuMCArIEdhbWVDb25maWcuQ0FSRF9XSURUSCAvIDIuMCxcbiAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5DQVJEX1dJRFRIICogaiArIEdhbWVDb25maWcuREVWSUNFX0hFSUdIVCAvIDguMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2ldW2pdID0gY2FyZDtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmFkZENoaWxkKGNhcmQsIGksIGopO1xuICAgICAgICAgICAgICAgIC8v54mI5pys6LCD5pW0XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChjYXJkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy/pmo/mnLrkuqfnlJ/mlbDlrZdcbiAgICByYW5kb21DcmVhdGVDYXJkTnVtYmVyKCkge1xuICAgICAgICAvLyBsZXQgbnVtID0gY2MucmFuZG9tMFRvMSgpICogNTtcbiAgICAgICAgbGV0IG51bSA9IE1hdGgucmFuZG9tKCkgKiA1O1xuICAgICAgICBsZXQgcmV0dXJuTnVtID0gTWF0aC5wb3coMiwgKE1hdGguZmxvb3IobnVtKSArIDEpKTtcbiAgICAgICAgcmV0dXJuIHJldHVybk51bTtcbiAgICB9LFxuICAgIC8v6Ieq5Yqo55Sf5oiQ5Y2h54mHXG4gICAgYXV0b0NyZWF0ZUNhcmROdW1iZXIoZHQpIHtcbiAgICAgICAgLy8gdGhpcy5yZW1vdmVDaGlsZEJ5VGFnKFRBR19wYXNzU3ByaXQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2ldW2pdLnNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2ldW2pdLnNldE51bWJlcih0aGlzLnJhbmRvbUNyZWF0ZUNhcmROdW1iZXIoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2ldW2pdLkNhcmRTaG93KCk7XG4gICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5tb3ZlQnV0dG9uQW5pbSh0aGlzLmNhcmRBcnJbaV1bal0sIHRydWUsIEFuaW1MYXllclRvb2wuTW92ZUJ1dHRvbkFuaW1UeXBlLnVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBHYW1lRGF0YS5zZXRHYW1lUGFzc051bShHYW1lRGF0YS5nZXRHYW1lUGFzc051bSgpICsgMSk7XG4gICAgICAgIEdhbWVDb25maWcuR2FtZVNjZW5lLnNldFBhc3NOdW0oKTtcbiAgICAgICAgR2FtZUNvbmZpZy5HYW1lU2NlbmUucHJvZ3Jlc3NCYXIuc2NhbGVYID0gMDtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2NoZWR1bGVPbmNlKHRoaXMsIHRoaXMuZG9DaGVjaywgMC4xNSk7XG4gICAgfSxcbiAgICBzZXRTY29yZSgpIHtcbiAgICAgICAgR2FtZUNvbmZpZy5HYW1lU2NlbmUuc2V0U2NvcmUodGhpcy5zY29yZSk7XG4gICAgfSxcbiAgICBkb0NoZWNrKGR0KSB7XG4gICAgICAgIHRoaXMuc2F2ZU1lbW9yeUluZm9ybWF0aW9uKCk7IC8v5L+d5a2Y5Li05pe25L+h5oGvXG4gICAgICAgIC8vdGhpcy5zZXRTY29yZShzY29yZSk7XG4gICAgICAgIGxldCBpc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgbGV0IGlzUGFzc0dhbWUgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgeCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FyZEFyclt4XVt5XS5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoeCA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUyAtIDEgJiYgdGhpcy5jYXJkQXJyW3ggKyAxXVt5XS5pc1Zpc2libGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKHRoaXMuY2FyZEFyclt4ICsgMV1beV0uZ2V0TnVtYmVyKCkgPT0gdGhpcy5jYXJkQXJyW3hdW3ldLmdldE51bWJlcigpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNQYXNzR2FtZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHkgPCBHYW1lQ29uZmlnLkNBRURfTElORVMgLSAxICYmIHRoaXMuY2FyZEFyclt4XVt5ICsgMV0uaXNWaXNpYmxlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICYmICh0aGlzLmNhcmRBcnJbeF1beSArIDFdLmdldE51bWJlcigpID09IHRoaXMuY2FyZEFyclt4XVt5XS5nZXROdW1iZXIoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUGFzc0dhbWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQYXNzR2FtZSkge1xuICAgICAgICAgICAgbGV0IGRlVGltZSA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXJkQXJyW2ldW2pdLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVUaW1lIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1MYXllclRvb2wuY3JlYXRlUG9wU3RhckFuaW0odGhpcy5jYXJkQXJyW2ldW2pdLCAoKytkZVRpbWUpICogMC41KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1MYXllclRvb2wuY3JlYXRlUG9wU3RhckFuaW0odGhpcy5jYXJkQXJyW2ldW2pdLCBkZVRpbWUgKiAwLjUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVUaW1lIDwgNSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgPSB0aGlzLnNjb3JlICsgKDUgLSBkZVRpbWUpICogKDUgLSBkZVRpbWUpICogNTtcbiAgICAgICAgICAgICAgICBBbmltTGF5ZXJUb29sLmNyZWF0ZVNjb3JlTW92ZUFuaW0odGhpcy5jYXJkQXJyWzJdWzJdLCAoNSAtIGRlVGltZSkgKiAoNSAtIGRlVGltZSkgKiA1LCBmYWxzZSk7Ly/liqDliIbliqjnlLtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnNjb3JlIDwgR2FtZURhdGEuZ2V0R2FtZVBhc3NTY29yZSgpKSB7XG4gICAgICAgICAgICAgICAgR2FtZVVpVG9vbHMuc2NoZWR1bGVPbmNlKHRoaXMsIHRoaXMuZ2FtZU92ZXIsIDEgKyBkZVRpbWUgKiAwLjUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBBbmltTGF5ZXJUb29sLmNyZWF0ZVNob3dNZXNzYWdlQm94QXdhcmQodGhpcy5nZXRQYXJlbnQoKSwgLTEpO1xuICAgICAgICAgICAgICAgIC8vIEdhbWVVaVRvb2xzLnNjaGVkdWxlT25jZSh0aGlzLCB0aGlzLmF1dG9DcmVhdGVDYXJkTnVtYmVyLCAxICsgZGVUaW1lICogMC41KTtcbiAgICAgICAgICAgICAgICBHYW1lVWlUb29scy5zY2hlZHVsZU9uY2UodGhpcywgdGhpcy5nYW1lUGFzcywgMSArIGRlVGltZSAqIDAuNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2FtZVBhc3MoKSB7XG4gICAgICAgIEdhbWVVaVRvb2xzLmxvYWRpbmdMYXllcihcInBhbmVsL0dhbWVQYXNzXCIpO1xuICAgIH0sXG5cbiAgICBnYW1lT3ZlcihkdCkvL+a4uOaIj+e7k+adn1xuICAgIHtcbiAgICAgICAgR2FtZUNvbmZpZy5JU19HQU1FX09WRVIgPSB0cnVlO1xuICAgICAgICBHYW1lVWlUb29scy5sb2FkaW5nTGF5ZXIoXCJwYW5lbC9HYW1lT3ZlclwiKTtcbiAgICAgICAgLy8gY2MubG9hZGVyLmxvYWRSZXMoXCJwYW5lbC9HYW1lT3ZlclwiLCAoZXJyLCBwcmVmYWIpID0+IHtcbiAgICAgICAgLy8gICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgLy8gICAgIEdhbWVDb25maWcuR2FtZVNjZW5lLm5vZGUuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgIC8vIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKuaSpOmUgOa4uOaIj1xuICAgICAqL1xuICAgIGJhY2tHYW1lKCkge1xuICAgICAgICBpZiAoR2FtZURhdGEuc2NvcmVOdW0gPT0gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2ldW2pdLnNldE51bWJlcihHYW1lRGF0YS5zY29yZUNhcmQxW2ldW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2ldW2pdLkNhcmRTaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChHYW1lRGF0YS5zY29yZUNhcmQzW2ldW2pdID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpXVtqXS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpXVtqXS5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zY29yZSA9IEdhbWVEYXRhLnNjb3JlMTtcbiAgICAgICAgICAgIEdhbWVEYXRhLnNjb3JlTnVtID0gMDtcbiAgICAgICAgICAgIEdhbWVEYXRhLnNjb3JlMCA9IEdhbWVEYXRhLnNjb3JlMTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNjb3JlQ2FyZDJbaV1bal0gPSBHYW1lRGF0YS5zY29yZUNhcmQzW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5zY29yZUNhcmQwW2ldW2pdID0gR2FtZURhdGEuc2NvcmVDYXJkMVtpXVtqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFNjb3JlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBHYW1lVG9vbHMudG9hc3RNZXNzYWdlKDQpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNhdmVNZW1vcnlJbmZvcm1hdGlvbigpIHtcbiAgICAgICAgaWYgKEdhbWVEYXRhLnNjb3JlTnVtID09IDApIHtcbiAgICAgICAgICAgIEdhbWVEYXRhLnNjb3JlTnVtID0gMTtcbiAgICAgICAgfVxuICAgICAgICBHYW1lRGF0YS5zY29yZTEgPSBHYW1lRGF0YS5zY29yZTA7XG4gICAgICAgIEdhbWVEYXRhLnNjb3JlMCA9IHRoaXMuc2NvcmU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBqKyspIHtcbiAgICAgICAgICAgICAgICBHYW1lRGF0YS5zY29yZUNhcmQzW2ldW2pdID0gR2FtZURhdGEuc2NvcmVDYXJkMltpXVtqXTtcbiAgICAgICAgICAgICAgICBHYW1lRGF0YS5zY29yZUNhcmQyW2ldW2pdID0gKHRoaXMuY2FyZEFycltpXVtqXS5pc1Zpc2libGUoKSA/IDAgOiAxKTtcbiAgICAgICAgICAgICAgICBHYW1lRGF0YS5zY29yZUNhcmQxW2ldW2pdID0gR2FtZURhdGEuc2NvcmVDYXJkMFtpXVtqXTtcbiAgICAgICAgICAgICAgICBHYW1lRGF0YS5zY29yZUNhcmQwW2ldW2pdID0gdGhpcy5jYXJkQXJyW2ldW2pdLmdldE51bWJlcigpO1xuICAgICAgICAgICAgICAgIEdhbWVEYXRhLmJlc3ROdW0gPSBHYW1lRGF0YS5iZXN0TnVtID4gdGhpcy5jYXJkQXJyW2ldW2pdLmdldE51bWJlcigpID8gR2FtZURhdGEuYmVzdE51bSA6IHRoaXMuY2FyZEFycltpXVtqXS5nZXROdW1iZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVQb3BTdGFyO1xuIl19
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lQ29uZmlnLmpzIl0sIm5hbWVzIjpbIkxvYWRpbmdTY2VuZVR5cGUiLCJMb2FkaW5nU2NlbmVGaXJzdCIsIkxvYWRpbmdTY2VuZUVudGVyR2FtZSIsIkxvYWRpbmdTY2VuZUJhY2tHYW1lIiwiTWFpbk1lbnUiLCJNYWluTWVudU51bUNsYXNzaWMiLCJNYWluTWVudU51bVBvcCIsIk1haW5NZW51TnVtUG9wU3RhciIsIk1haW5NZW51U3BhY2UiLCJQcm9wc01lbnUiLCJQcm9wc01lbnVCYWNrb3V0IiwiUHJvcHNNZW51RGVzdHJveUNhcmQiLCJQcm9wc01lbnVFeGNoYW5nZUNhcmQiLCJQcm9wc01lbnVTaHJpbmtOdW0iLCJQcm9wc01lbnVSZW1vdmVBY3Jvc3MiLCJQcm9wc01lbnVSZW1vdmVWZXJ0aWNhbCIsIlByb3BzTWVudVNwYWNlIiwiR2FtZUNvbmZpZyIsIkdhbWVOYW1lIiwiR2FtZUNsdWJCdXR0b24iLCJHYW1lU2NlbmUiLCJHYW1lTG9naWMiLCJERVZJQ0VfV0lEVEgiLCJERVZJQ0VfSEVJR0hUIiwiQ0FSRF9XSURUSCIsIkNBRURfTElORVMiLCJNQUlOX01FTlVfTlVNIiwibG9hZGluZ1NjZW5lVHlwZSIsIm1haW5NZW51IiwicHJvcHNNZW51IiwiSVNfR0FNRV9NVVNJQyIsIklTX0dBTUVfU0hBUkUiLCJJU19HQU1FX09WRVIiLCJJU19HQU1FX1dJTiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsZ0JBQWdCLEdBQUc7QUFDbkJDLEVBQUFBLGlCQUFpQixFQUFFLENBREE7QUFDRTtBQUNyQkMsRUFBQUEscUJBQXFCLEVBQUUsQ0FGSjtBQUVNO0FBQ3pCQyxFQUFBQSxvQkFBb0IsRUFBRSxDQUhILENBR0s7O0FBSEwsQ0FBdkI7QUFLQSxJQUFJQyxRQUFRLEdBQUc7QUFDWEMsRUFBQUEsa0JBQWtCLEVBQUUsQ0FEVDtBQUNXO0FBQ3RCQyxFQUFBQSxjQUFjLEVBQUUsQ0FGTDtBQUVPO0FBQ2xCQyxFQUFBQSxrQkFBa0IsRUFBRSxDQUhUO0FBR1c7QUFDdEJDLEVBQUFBLGFBQWEsRUFBRSxDQUpKLENBSUs7O0FBSkwsQ0FBZjtBQU9BLElBQUlDLFNBQVMsR0FBRztBQUNaQyxFQUFBQSxnQkFBZ0IsRUFBRSxDQUROO0FBQ1E7QUFDcEJDLEVBQUFBLG9CQUFvQixFQUFFLENBRlY7QUFFWTtBQUN4QkMsRUFBQUEscUJBQXFCLEVBQUUsQ0FIWDtBQUdhO0FBQ3pCQyxFQUFBQSxrQkFBa0IsRUFBRSxDQUpSO0FBSVU7QUFDdEJDLEVBQUFBLHFCQUFxQixFQUFFLENBTFg7QUFLYTtBQUN6QkMsRUFBQUEsdUJBQXVCLEVBQUUsQ0FOYjtBQU1lO0FBQzNCQyxFQUFBQSxjQUFjLEVBQUUsQ0FQSixDQU9NOztBQVBOLENBQWhCO0FBVUEsSUFBSUMsVUFBVSxHQUFHO0FBQ2JDLEVBQUFBLFFBQVEsRUFBRSxRQURHO0FBRWJDLEVBQUFBLGNBQWMsRUFBRSxJQUZIO0FBRVE7QUFDckJDLEVBQUFBLFNBQVMsRUFBRSxJQUhFO0FBSWJDLEVBQUFBLFNBQVMsRUFBRSxJQUpFO0FBTWJyQixFQUFBQSxnQkFBZ0IsRUFBRUEsZ0JBTkw7QUFPYkksRUFBQUEsUUFBUSxFQUFFQSxRQVBHO0FBUWJLLEVBQUFBLFNBQVMsRUFBRUEsU0FSRTtBQVViYSxFQUFBQSxZQUFZLEVBQUUsR0FWRDtBQVVNO0FBQ25CQyxFQUFBQSxhQUFhLEVBQUUsSUFYRjtBQWFiQyxFQUFBQSxVQUFVLEVBQUUsQ0FiQztBQWFDO0FBQ2RDLEVBQUFBLFVBQVUsRUFBRSxDQWRDO0FBY0M7QUFFZEMsRUFBQUEsYUFBYSxFQUFFLENBQUMsSUFoQkg7QUFnQlE7QUFFckJDLEVBQUFBLGdCQUFnQixFQUFFM0IsZ0JBQWdCLENBQUNDLGlCQWxCdEI7QUFrQndDO0FBQ3JEMkIsRUFBQUEsUUFBUSxFQUFFeEIsUUFBUSxDQUFDSSxhQW5CTjtBQW1Cb0I7QUFFakNxQixFQUFBQSxTQUFTLEVBQUVwQixTQUFTLENBQUNPLGNBckJSO0FBcUJ1QjtBQUVwQ2MsRUFBQUEsYUFBYSxFQUFFLElBdkJGO0FBdUJPO0FBRXBCQyxFQUFBQSxhQUFhLEVBQUUsS0F6QkY7QUF5QlE7QUFDckJDLEVBQUFBLFlBQVksRUFBRSxLQTFCRDtBQTBCTztBQUNwQkMsRUFBQUEsV0FBVyxFQUFFLEtBM0JBLENBMkJPOztBQTNCUCxDQUFqQjtBQTZCQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbEIsVUFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBMb2FkaW5nU2NlbmVUeXBlID0ge1xuICAgIExvYWRpbmdTY2VuZUZpcnN0OiAwLC8v6aaW5qyh6L+b5YWlXG4gICAgTG9hZGluZ1NjZW5lRW50ZXJHYW1lOiAxLC8v6L+b5YWl5ri45oiPXG4gICAgTG9hZGluZ1NjZW5lQmFja0dhbWU6IDIsLy/ov5Tlm57muLjmiI9cbn07XG52YXIgTWFpbk1lbnUgPSB7XG4gICAgTWFpbk1lbnVOdW1DbGFzc2ljOiAwLC8vIOe7j+WFuOaooeW8j1xuICAgIE1haW5NZW51TnVtUG9wOiA1LC8v5raI6Zmk5Y+g5Yqg5qih5byPXG4gICAgTWFpbk1lbnVOdW1Qb3BTdGFyOiA2LC8v5raI54Gt5pif5pif5qih5byPXG4gICAgTWFpbk1lbnVTcGFjZTogNy8v5riF56m6XG59O1xuXG52YXIgUHJvcHNNZW51ID0ge1xuICAgIFByb3BzTWVudUJhY2tvdXQ6IDAsLy/mkqTplIDlip/og71cbiAgICBQcm9wc01lbnVEZXN0cm95Q2FyZDogMSwvL+mUgOavgeS4gOS4quWNoeeJh1xuICAgIFByb3BzTWVudUV4Y2hhbmdlQ2FyZDogMiwvL+iwg+aNouWNoeeJh1xuICAgIFByb3BzTWVudVNocmlua051bTogMywvL+S9v+WNoeeJh+aVsOWtl+mZpDJcbiAgICBQcm9wc01lbnVSZW1vdmVBY3Jvc3M6IDQsLy/kvb/ljaHniYfmqKrmjpLmtojpmaRcbiAgICBQcm9wc01lbnVSZW1vdmVWZXJ0aWNhbDogNSwvL+S9v+WNoeeJh+erluaOkua2iOmZpFxuICAgIFByb3BzTWVudVNwYWNlOiA2LC8v5riF56m6XG59O1xuXG52YXIgR2FtZUNvbmZpZyA9IHtcbiAgICBHYW1lTmFtZTogXCLkuIDotbfmtojnga3mmJ/mmJ9cIixcbiAgICBHYW1lQ2x1YkJ1dHRvbjogbnVsbCwvL+a4uOaIj+WciOaMiemSrlxuICAgIEdhbWVTY2VuZTogbnVsbCxcbiAgICBHYW1lTG9naWM6IG51bGwsXG5cbiAgICBMb2FkaW5nU2NlbmVUeXBlOiBMb2FkaW5nU2NlbmVUeXBlLFxuICAgIE1haW5NZW51OiBNYWluTWVudSxcbiAgICBQcm9wc01lbnU6IFByb3BzTWVudSxcblxuICAgIERFVklDRV9XSURUSDogNzIwLCAvLyDlsY/luZXlrr3luqZcbiAgICBERVZJQ0VfSEVJR0hUOiAxMjgwLFxuXG4gICAgQ0FSRF9XSURUSDogMCwvLyDljaHniYflrr3luqZcbiAgICBDQUVEX0xJTkVTOiA0LC8vIOWNoeeJh+S4quaVsFxuXG4gICAgTUFJTl9NRU5VX05VTTogLTEwMDAsLy8g5qih5byP57G75Z6L5qCH6K+GXG5cbiAgICBsb2FkaW5nU2NlbmVUeXBlOiBMb2FkaW5nU2NlbmVUeXBlLkxvYWRpbmdTY2VuZUZpcnN0LC8vIOWKoOi9veeVjOmdolxuICAgIG1haW5NZW51OiBNYWluTWVudS5NYWluTWVudVNwYWNlLC8vIOS4u+mAieaLqeiPnOWNlVxuXG4gICAgcHJvcHNNZW51OiBQcm9wc01lbnUuUHJvcHNNZW51U3BhY2UsLy8g6YGT5YW35Yqf6IO9XG5cbiAgICBJU19HQU1FX01VU0lDOiB0cnVlLC8vIOa4uOaIj+mfs+aViFxuXG4gICAgSVNfR0FNRV9TSEFSRTogZmFsc2UsLy8g5ri45oiP5YiG5LqrXG4gICAgSVNfR0FNRV9PVkVSOiBmYWxzZSwvLyDmuLjmiI/mmK/lkKbnu5PmnZ9cbiAgICBJU19HQU1FX1dJTjogZmFsc2UsIC8v5ri45oiP5piv5ZCm6IOc5YipXG59O1xubW9kdWxlLmV4cG9ydHMgPSBHYW1lQ29uZmlnO1xuXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/LoadingScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa66dpbqYROFqRT9GK3/WP2', 'LoadingScene');
// Script/LoadingScene.js

"use strict";

var GameData = require("GameData");

var GameTools = require("GameTools");

var GameUiTools = require("GameUiTools");

var GameConfig = require("GameConfig");

var AnimLayerTool = require("AnimLayerTool");

cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {
    var _this = this;

    setTimeout(function () {
      _this.loadingResource();
    }, 10);
  },
  loadingResource: function loadingResource() {
    if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneFirst) {
      // GameTools.setGameIntegral(GameTools.getGameIntegral()+1000);
      GameConfig.IS_GAME_MUSIC = GameTools.getItemByLocalStorage("IS_GAME_MUSIC", true);
      this.initFrameCache();
      this.initWxSetting();
    } else if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneEnterGame) {
      GameConfig.IS_GAME_OVER = false;
      GameData.initData();
      GameData.heightScore = GameData.getHeightScore();

      if (GameData.isHaveGameData()) {
        if (GameData.loadGameData(true) || GameData.heightScore < 0 || GameData.heightScore > 1073741824) {
          GameData.setHaveGameData(false);
          GameData.heightScore = 0;
          GameData.setHeightScore(0);
        }
      }
    } else if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneBackGame) {
      if (!GameConfig.IS_GAME_OVER) {
        GameData.loadGameData(false);
      } // GameData.destroyInstance();

    }

    if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneFirst) {
      cc.director.preloadScene("MenuUI", function () {
        cc.director.loadScene("MenuUI");
      });
    } else if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneEnterGame) {
      cc.director.preloadScene("GameScene", function () {
        cc.director.loadScene("GameScene");
      });
    } else if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneBackGame) {
      cc.director.preloadScene("MenuUI", function () {
        cc.director.loadScene("MenuUI");
      });
    }
  },
  initFrameCache: function initFrameCache() {
    cc.loader.loadRes("number", cc.LabelAtlas, function (err, atlas) {
      GameTools.numberLabelAtlas = atlas;
    });
  },
  initWxSetting: function initWxSetting() {
    if (CC_WECHATGAME) {
      window.wx.onHide(function () {
        //监听小游戏隐藏到后台事件
        if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneEnterGame && !GameConfig.IS_GAME_OVER) {
          GameData.loadGameData(false);
          GameTools.stopBackgroundMusic();
        }
      });
      window.wx.onShow(function () {
        if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneEnterGame && !GameConfig.IS_GAME_OVER) {
          if (GameConfig.IS_GAME_MUSIC) {
            GameTools.playBackgroundMusic();
          }
        }
      });
      window.wx.onAudioInterruptionBegin(function () {
        GameTools.stopBackgroundMusic();
      });
      window.wx.onAudioInterruptionEnd(function () {
        //监听音频中断结束
        if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneEnterGame && !GameConfig.IS_GAME_OVER) {
          if (GameConfig.IS_GAME_MUSIC) {
            GameTools.playBackgroundMusic();
          }
        }
      });
      window.wx.showShareMenu({
        withShareTicket: true
      });
      window.wx.onShareAppMessage(function () {
        // 用户点击了“转发”按钮
        return {
          title: '来跟我一起挑战浪漫2048。',
          imageUrl: canvas.toTempFilePathSync({
            destWidth: 500,
            destHeight: 400
          })
        };
      });
      var LaunchOption = wx.getLaunchOptionsSync();

      if (LaunchOption.query != {} && LaunchOption.query.x != undefined) {
        GameConfig.MAIN_MENU_NUM = Number(LaunchOption.query.x);
      }

      var info = window.wx.getSystemInfoSync();
      GameConfig.GameClubButton = window.wx.createGameClubButton({
        icon: 'green',
        style: {
          left: info.windowWidth / 2 + 25,
          top: info.windowHeight * 90 / 100,
          width: 40,
          height: 40
        }
      });
      GameConfig.GameClubButton.hide();
    } else {// GameTools.getRankData("测试群排行");
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxMb2FkaW5nU2NlbmUuanMiXSwibmFtZXMiOlsiR2FtZURhdGEiLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiR2FtZVVpVG9vbHMiLCJHYW1lQ29uZmlnIiwiQW5pbUxheWVyVG9vbCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJzZXRUaW1lb3V0IiwibG9hZGluZ1Jlc291cmNlIiwibG9hZGluZ1NjZW5lVHlwZSIsIkxvYWRpbmdTY2VuZVR5cGUiLCJMb2FkaW5nU2NlbmVGaXJzdCIsIklTX0dBTUVfTVVTSUMiLCJnZXRJdGVtQnlMb2NhbFN0b3JhZ2UiLCJpbml0RnJhbWVDYWNoZSIsImluaXRXeFNldHRpbmciLCJMb2FkaW5nU2NlbmVFbnRlckdhbWUiLCJJU19HQU1FX09WRVIiLCJpbml0RGF0YSIsImhlaWdodFNjb3JlIiwiZ2V0SGVpZ2h0U2NvcmUiLCJpc0hhdmVHYW1lRGF0YSIsImxvYWRHYW1lRGF0YSIsInNldEhhdmVHYW1lRGF0YSIsInNldEhlaWdodFNjb3JlIiwiTG9hZGluZ1NjZW5lQmFja0dhbWUiLCJkaXJlY3RvciIsInByZWxvYWRTY2VuZSIsImxvYWRTY2VuZSIsImxvYWRlciIsImxvYWRSZXMiLCJMYWJlbEF0bGFzIiwiZXJyIiwiYXRsYXMiLCJudW1iZXJMYWJlbEF0bGFzIiwiQ0NfV0VDSEFUR0FNRSIsIndpbmRvdyIsInd4Iiwib25IaWRlIiwic3RvcEJhY2tncm91bmRNdXNpYyIsIm9uU2hvdyIsInBsYXlCYWNrZ3JvdW5kTXVzaWMiLCJvbkF1ZGlvSW50ZXJydXB0aW9uQmVnaW4iLCJvbkF1ZGlvSW50ZXJydXB0aW9uRW5kIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwidGl0bGUiLCJpbWFnZVVybCIsImNhbnZhcyIsInRvVGVtcEZpbGVQYXRoU3luYyIsImRlc3RXaWR0aCIsImRlc3RIZWlnaHQiLCJMYXVuY2hPcHRpb24iLCJnZXRMYXVuY2hPcHRpb25zU3luYyIsInF1ZXJ5IiwieCIsInVuZGVmaW5lZCIsIk1BSU5fTUVOVV9OVU0iLCJOdW1iZXIiLCJpbmZvIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJHYW1lQ2x1YkJ1dHRvbiIsImNyZWF0ZUdhbWVDbHViQnV0dG9uIiwiaWNvbiIsInN0eWxlIiwibGVmdCIsIndpbmRvd1dpZHRoIiwidG9wIiwid2luZG93SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJoaWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBdEI7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxhQUFELENBQXpCOztBQUNBLElBQUlHLFVBQVUsR0FBR0gsT0FBTyxDQUFDLFlBQUQsQ0FBeEI7O0FBQ0EsSUFBSUksYUFBYSxHQUFHSixPQUFPLENBQUMsZUFBRCxDQUEzQjs7QUFDQUssRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFLEVBRlA7QUFJTEMsRUFBQUEsS0FKSyxtQkFJRztBQUFBOztBQUNKQyxJQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNiLE1BQUEsS0FBSSxDQUFDQyxlQUFMO0FBQ0gsS0FGUyxFQUVQLEVBRk8sQ0FBVjtBQUdILEdBUkk7QUFVTEEsRUFBQUEsZUFWSyw2QkFVYTtBQUNkLFFBQUlSLFVBQVUsQ0FBQ1MsZ0JBQVgsSUFBK0JULFVBQVUsQ0FBQ1UsZ0JBQVgsQ0FBNEJDLGlCQUEvRCxFQUFrRjtBQUM5RTtBQUNBWCxNQUFBQSxVQUFVLENBQUNZLGFBQVgsR0FBMkJkLFNBQVMsQ0FBQ2UscUJBQVYsQ0FBZ0MsZUFBaEMsRUFBaUQsSUFBakQsQ0FBM0I7QUFDQSxXQUFLQyxjQUFMO0FBQ0EsV0FBS0MsYUFBTDtBQUNI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VSxFQUFFO0FBRm9CLFdBQTFCO0FBRlAsU0FBUDtBQU9ILE9BVEQ7QUFVQSxVQUFJQyxZQUFZLEdBQUdoQixFQUFFLENBQUNpQixvQkFBSCxFQUFuQjs7QUFDQSxVQUFJRCxZQUFZLENBQUNFLEtBQWIsSUFBc0IsRUFBdEIsSUFBNEJGLFlBQVksQ0FBQ0UsS0FBYixDQUFtQkMsQ0FBbkIsSUFBd0JDLFNBQXhELEVBQW1FO0FBQy9EekQsUUFBQUEsVUFBVSxDQUFDMEQsYUFBWCxHQUEyQkMsTUFBTSxDQUFDTixZQUFZLENBQUNFLEtBQWIsQ0FBbUJDLENBQXBCLENBQWpDO0FBQ0g7O0FBQ0QsVUFBSUksSUFBSSxHQUFHeEIsTUFBTSxDQUFDQyxFQUFQLENBQVV3QixpQkFBVixFQUFYO0FBQ0E3RCxNQUFBQSxVQUFVLENBQUM4RCxjQUFYLEdBQTRCMUIsTUFBTSxDQUFDQyxFQUFQLENBQVUwQixvQkFBVixDQUErQjtBQUN2REMsUUFBQUEsSUFBSSxFQUFFLE9BRGlEO0FBRXZEQyxRQUFBQSxLQUFLLEVBQUU7QUFDSEMsVUFBQUEsSUFBSSxFQUFFTixJQUFJLENBQUNPLFdBQUwsR0FBbUIsQ0FBbkIsR0FBdUIsRUFEMUI7QUFFSEMsVUFBQUEsR0FBRyxFQUFFUixJQUFJLENBQUNTLFlBQUwsR0FBb0IsRUFBcEIsR0FBeUIsR0FGM0I7QUFHSEMsVUFBQUEsS0FBSyxFQUFFLEVBSEo7QUFJSEMsVUFBQUEsTUFBTSxFQUFFO0FBSkw7QUFGZ0QsT0FBL0IsQ0FBNUI7QUFTQXZFLE1BQUFBLFVBQVUsQ0FBQzhELGNBQVgsQ0FBMEJVLElBQTFCO0FBQ0gsS0FsREQsTUFrRE8sQ0FDSDtBQUNIO0FBQ0o7QUE3R0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVEYXRhID0gcmVxdWlyZShcIkdhbWVEYXRhXCIpO1xudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XG52YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEFuaW1MYXllclRvb2wgPSByZXF1aXJlKFwiQW5pbUxheWVyVG9vbFwiKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdSZXNvdXJjZSgpO1xuICAgICAgICB9LCAxMCk7XG4gICAgfSxcblxuICAgIGxvYWRpbmdSZXNvdXJjZSgpIHtcbiAgICAgICAgaWYgKEdhbWVDb25maWcubG9hZGluZ1NjZW5lVHlwZSA9PSBHYW1lQ29uZmlnLkxvYWRpbmdTY2VuZVR5cGUuTG9hZGluZ1NjZW5lRmlyc3QpIHtcbiAgICAgICAgICAgIC8vIEdhbWVUb29scy5zZXRHYW1lSW50ZWdyYWwoR2FtZVRvb2xzLmdldEdhbWVJbnRlZ3JhbCgpKzEwMDApO1xuICAgICAgICAgICAgR2FtZUNvbmZpZy5JU19HQU1FX01VU0lDID0gR2FtZVRvb2xzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcIklTX0dBTUVfTVVTSUNcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmluaXRGcmFtZUNhY2hlKCk7XG4gICAgICAgICAgICB0aGlzLmluaXRXeFNldHRpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmIChHYW1lQ29uZmlnLmxvYWRpbmdTY2VuZVR5cGUgPT0gR2FtZUNvbmZpZy5Mb2FkaW5nU2NlbmVUeXBlLkxvYWRpbmdTY2VuZUVudGVyR2FtZSkge1xuICAgICAgICAgICAgR2FtZUNvbmZpZy5JU19HQU1FX09WRVIgPSBmYWxzZTtcbiAgICAgICAgICAgIEdhbWVEYXRhLmluaXREYXRhKCk7XG4gICAgICAgICAgICBHYW1lRGF0YS5oZWlnaHRTY29yZSA9IEdhbWVEYXRhLmdldEhlaWdodFNjb3JlKCk7XG4gICAgICAgICAgICBpZiAoR2FtZURhdGEuaXNIYXZlR2FtZURhdGEoKSkge1xuICAgICAgICAgICAgICAgIGlmIChHYW1lRGF0YS5sb2FkR2FtZURhdGEodHJ1ZSkgfHwgR2FtZURhdGEuaGVpZ2h0U2NvcmUgPCAwIHx8IEdhbWVEYXRhLmhlaWdodFNjb3JlID4gMTA3Mzc0MTgyNCkge1xuICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5zZXRIYXZlR2FtZURhdGEoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5oZWlnaHRTY29yZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNldEhlaWdodFNjb3JlKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChHYW1lQ29uZmlnLmxvYWRpbmdTY2VuZVR5cGUgPT0gR2FtZUNvbmZpZy5Mb2FkaW5nU2NlbmVUeXBlLkxvYWRpbmdTY2VuZUJhY2tHYW1lKSB7XG4gICAgICAgICAgICBpZighR2FtZUNvbmZpZy5JU19HQU1FX09WRVIpe1xuICAgICAgICAgICAgICAgIEdhbWVEYXRhLmxvYWRHYW1lRGF0YShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBHYW1lRGF0YS5kZXN0cm95SW5zdGFuY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLmxvYWRpbmdTY2VuZVR5cGUgPT0gR2FtZUNvbmZpZy5Mb2FkaW5nU2NlbmVUeXBlLkxvYWRpbmdTY2VuZUZpcnN0KSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJNZW51VUlcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1lbnVVSVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEdhbWVDb25maWcubG9hZGluZ1NjZW5lVHlwZSA9PSBHYW1lQ29uZmlnLkxvYWRpbmdTY2VuZVR5cGUuTG9hZGluZ1NjZW5lRW50ZXJHYW1lKSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJHYW1lU2NlbmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVTY2VuZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEdhbWVDb25maWcubG9hZGluZ1NjZW5lVHlwZSA9PSBHYW1lQ29uZmlnLkxvYWRpbmdTY2VuZVR5cGUuTG9hZGluZ1NjZW5lQmFja0dhbWUpIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcIk1lbnVVSVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWVudVVJXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGluaXRGcmFtZUNhY2hlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwibnVtYmVyXCIsIGNjLkxhYmVsQXRsYXMsIGZ1bmN0aW9uIChlcnIsIGF0bGFzKSB7XG4gICAgICAgICAgICBHYW1lVG9vbHMubnVtYmVyTGFiZWxBdGxhcyA9IGF0bGFzO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGluaXRXeFNldHRpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKENDX1dFQ0hBVEdBTUUpIHtcbiAgICAgICAgICAgIHdpbmRvdy53eC5vbkhpZGUoZnVuY3Rpb24gKCkgey8v55uR5ZCs5bCP5ri45oiP6ZqQ6JeP5Yiw5ZCO5Y+w5LqL5Lu2XG4gICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcubG9hZGluZ1NjZW5lVHlwZSA9PSBHYW1lQ29uZmlnLkxvYWRpbmdTY2VuZVR5cGUuTG9hZGluZ1NjZW5lRW50ZXJHYW1lICYmICFHYW1lQ29uZmlnLklTX0dBTUVfT1ZFUikge1xuICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5sb2FkR2FtZURhdGEoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMuc3RvcEJhY2tncm91bmRNdXNpYygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2luZG93Lnd4Lm9uU2hvdygoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcubG9hZGluZ1NjZW5lVHlwZSA9PSBHYW1lQ29uZmlnLkxvYWRpbmdTY2VuZVR5cGUuTG9hZGluZ1NjZW5lRW50ZXJHYW1lICYmICFHYW1lQ29uZmlnLklTX0dBTUVfT1ZFUikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoR2FtZUNvbmZpZy5JU19HQU1FX01VU0lDKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMucGxheUJhY2tncm91bmRNdXNpYygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aW5kb3cud3gub25BdWRpb0ludGVycnVwdGlvbkJlZ2luKCgpID0+IHtcbiAgICAgICAgICAgICAgICBHYW1lVG9vbHMuc3RvcEJhY2tncm91bmRNdXNpYygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aW5kb3cud3gub25BdWRpb0ludGVycnVwdGlvbkVuZCgoKSA9PiB7Ly/nm5HlkKzpn7PpopHkuK3mlq3nu5PmnZ9cbiAgICAgICAgICAgICAgICBpZiAoR2FtZUNvbmZpZy5sb2FkaW5nU2NlbmVUeXBlID09IEdhbWVDb25maWcuTG9hZGluZ1NjZW5lVHlwZS5Mb2FkaW5nU2NlbmVFbnRlckdhbWUgJiYgIUdhbWVDb25maWcuSVNfR0FNRV9PVkVSKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChHYW1lQ29uZmlnLklTX0dBTUVfTVVTSUMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5wbGF5QmFja2dyb3VuZE11c2ljKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy53eC5zaG93U2hhcmVNZW51KHt3aXRoU2hhcmVUaWNrZXQ6IHRydWV9KTtcbiAgICAgICAgICAgIHdpbmRvdy53eC5vblNoYXJlQXBwTWVzc2FnZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8g55So5oi354K55Ye75LqG4oCc6L2s5Y+R4oCd5oyJ6ZKuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmnaXot5/miJHkuIDotbfmjJHmiJjmtarmvKsyMDQ444CCJyxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IGNhbnZhcy50b1RlbXBGaWxlUGF0aFN5bmMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdFdpZHRoOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXN0SGVpZ2h0OiA0MDBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBMYXVuY2hPcHRpb24gPSB3eC5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xuICAgICAgICAgICAgaWYgKExhdW5jaE9wdGlvbi5xdWVyeSAhPSB7fSAmJiBMYXVuY2hPcHRpb24ucXVlcnkueCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0gPSBOdW1iZXIoTGF1bmNoT3B0aW9uLnF1ZXJ5LngpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGluZm8gPSB3aW5kb3cud3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbiAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZUNsdWJCdXR0b24gPSB3aW5kb3cud3guY3JlYXRlR2FtZUNsdWJCdXR0b24oe1xuICAgICAgICAgICAgICAgIGljb246ICdncmVlbicsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogaW5mby53aW5kb3dXaWR0aCAvIDIgKyAyNSxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBpbmZvLndpbmRvd0hlaWdodCAqIDkwIC8gMTAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZUNsdWJCdXR0b24uaGlkZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBHYW1lVG9vbHMuZ2V0UmFua0RhdGEoXCLmtYvor5XnvqTmjpLooYxcIik7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameUiTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6633adSwotPR4cUtDy9WXUH', 'GameUiTools');
// Script/GameUiTools.js

"use strict";

var GameConfig = require("GameConfig");

var GameTools = require("GameTools");

var GameUiTools = {
  getSpriteFrame: function getSpriteFrame(spriteName, curSp) {
    // return new cc.SpriteFrame(cc.url.raw(spriteName));
    cc.loader.loadRes(spriteName, cc.SpriteFrame, function (err, spriteFrame) {
      if (err) {
        cc.error(err.message || err);
        console.log("DEBUG: err" + err);
        return;
      }

      if (curSp) {
        curSp.spriteFrame = spriteFrame;
      }
    });
  },
  newSprite: function newSprite(spriteName, isCache) {
    var sprite = new cc.Node();

    if (isCache) {
      spriteName = spriteName.split('.')[0];
      sprite.addComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(spriteName);
    } else {
      sprite.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame("res/raw-assets/" + spriteName);
    }

    return sprite;
  },
  setNodeSpriteFrame: function setNodeSpriteFrame(node, spriteName) {
    node.getComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(spriteName);
  },
  setButtonClickEvents: function setButtonClickEvents(component, menu, handler, customEventData, isScale) {
    var arrayMenu = new Array();

    if (menu.length == undefined) {
      arrayMenu[0] = menu;
    } else {
      arrayMenu = menu;
    }

    for (var i = 0; i < arrayMenu.length; i++) {
      var clickEventHandler = new cc.Component.EventHandler();
      clickEventHandler.target = component.node; //这个 node 节点是你的事件处理代码组件所属的节点

      clickEventHandler.component = component.node.name; //这个是代码文件名

      clickEventHandler.handler = handler;

      if (menu.length == undefined) {
        clickEventHandler.customEventData = customEventData;
      } else {
        clickEventHandler.customEventData = i;
      }

      var button = arrayMenu[i].addComponent(cc.Button);
      button.clickEvents.push(clickEventHandler);

      if (isScale == undefined || isScale) {
        button.transition = cc.Button.Transition.SCALE;
        button.duration = 0.1;
        button.zoomScale = 1.2;
      } // this.secondSetMenu[i].on('click', this.setMenuTouchFunc, this);

    }
  },
  setSecondSetMenuSpriteFram: function setSecondSetMenuSpriteFram(secondSetMenu, isRight) {
    //设置是否勾选图片
    secondSetMenu.getChildren()[0].getComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(isRight ? "menuRight" : "menuClose");
  },
  addCloseSprite: function addCloseSprite(node) {
    var menuClose = new cc.Node();
    menuClose.addComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame("menuClose");
    node.addChild(menuClose);
  },
  scheduleOnce: function scheduleOnce(node, callFunc, delay) {
    //事件调度
    node.runAction(cc.sequence(cc.delayTime(delay), cc.callFunc(callFunc, node)));
  },
  loadingScene: function loadingScene(sceneName, isShowLayer) {
    //加载场景
    if (isShowLayer) {
      cc.loader.loadRes("panel/LoadingLayer", function (err, prefab) {
        var node = cc.instantiate(prefab);
        cc.director.getScene().children[0].addChild(node);
        cc.director.preloadScene(sceneName, function () {
          cc.director.loadScene(sceneName);
        });
      });
    } else {
      cc.director.preloadScene(sceneName, function () {
        cc.director.loadScene(sceneName);
      });
    }
  },
  loadingLayer: function loadingLayer(panelName) {
    //加载图层
    cc.loader.loadRes(panelName, function (err, prefab) {
      if (!err) {
        var node = cc.instantiate(prefab);
        cc.director.getScene().children[0].addChild(node);
      }
    });
  }
};
module.exports = GameUiTools;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lVWlUb29scy5qcyJdLCJuYW1lcyI6WyJHYW1lQ29uZmlnIiwicmVxdWlyZSIsIkdhbWVUb29scyIsIkdhbWVVaVRvb2xzIiwiZ2V0U3ByaXRlRnJhbWUiLCJzcHJpdGVOYW1lIiwiY3VyU3AiLCJjYyIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIm5ld1Nwcml0ZSIsImlzQ2FjaGUiLCJzcHJpdGUiLCJOb2RlIiwic3BsaXQiLCJhZGRDb21wb25lbnQiLCJTcHJpdGUiLCJsb3ZlMjA0OEZyYW1lQ2FjaGUiLCJzZXROb2RlU3ByaXRlRnJhbWUiLCJub2RlIiwiZ2V0Q29tcG9uZW50Iiwic2V0QnV0dG9uQ2xpY2tFdmVudHMiLCJjb21wb25lbnQiLCJtZW51IiwiaGFuZGxlciIsImN1c3RvbUV2ZW50RGF0YSIsImlzU2NhbGUiLCJhcnJheU1lbnUiLCJBcnJheSIsImxlbmd0aCIsInVuZGVmaW5lZCIsImkiLCJjbGlja0V2ZW50SGFuZGxlciIsIkNvbXBvbmVudCIsIkV2ZW50SGFuZGxlciIsInRhcmdldCIsIm5hbWUiLCJidXR0b24iLCJCdXR0b24iLCJjbGlja0V2ZW50cyIsInB1c2giLCJ0cmFuc2l0aW9uIiwiVHJhbnNpdGlvbiIsIlNDQUxFIiwiZHVyYXRpb24iLCJ6b29tU2NhbGUiLCJzZXRTZWNvbmRTZXRNZW51U3ByaXRlRnJhbSIsInNlY29uZFNldE1lbnUiLCJpc1JpZ2h0IiwiZ2V0Q2hpbGRyZW4iLCJhZGRDbG9zZVNwcml0ZSIsIm1lbnVDbG9zZSIsImFkZENoaWxkIiwic2NoZWR1bGVPbmNlIiwiY2FsbEZ1bmMiLCJkZWxheSIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwiZGVsYXlUaW1lIiwibG9hZGluZ1NjZW5lIiwic2NlbmVOYW1lIiwiaXNTaG93TGF5ZXIiLCJwcmVmYWIiLCJpbnN0YW50aWF0ZSIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJjaGlsZHJlbiIsInByZWxvYWRTY2VuZSIsImxvYWRTY2VuZSIsImxvYWRpbmdMYXllciIsInBhbmVsTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFELENBQXZCOztBQUNBLElBQUlFLFdBQVcsR0FBRztBQUNkQyxFQUFBQSxjQUFjLEVBQUUsd0JBQVVDLFVBQVYsRUFBc0JDLEtBQXRCLEVBQTZCO0FBQ3pDO0FBQ0FDLElBQUFBLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVQyxPQUFWLENBQWtCSixVQUFsQixFQUE4QkUsRUFBRSxDQUFDRyxXQUFqQyxFQUE4QyxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7QUFDdEUsVUFBSUQsR0FBSixFQUFTO0FBQ1RKLFFBQUFBLEVBQUUsQ0FBQ00sS0FBSCxDQUFTRixHQUFHLENBQUNHLE9BQUosSUFBZUgsR0FBeEI7QUFDQUksUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBYUwsR0FBekI7QUFDQTtBQUNDOztBQUNELFVBQUdMLEtBQUgsRUFBUztBQUNMQSxRQUFBQSxLQUFLLENBQUNNLFdBQU4sR0FBcUJBLFdBQXJCO0FBQ0g7QUFDQSxLQVRMO0FBVUgsR0FiYTtBQWNkSyxFQUFBQSxTQUFTLEVBQUUsbUJBQVVaLFVBQVYsRUFBc0JhLE9BQXRCLEVBQStCO0FBQ3RDLFFBQUlDLE1BQU0sR0FBRyxJQUFJWixFQUFFLENBQUNhLElBQVAsRUFBYjs7QUFDQSxRQUFJRixPQUFKLEVBQWE7QUFDVGIsTUFBQUEsVUFBVSxHQUFHQSxVQUFVLENBQUNnQixLQUFYLENBQWlCLEdBQWpCLEVBQXNCLENBQXRCLENBQWI7QUFDQUYsTUFBQUEsTUFBTSxDQUFDRyxZQUFQLENBQW9CZixFQUFFLENBQUNnQixNQUF2QixFQUErQlgs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LFlBQVosQ0FBeUJQLFNBQXpCLEVBQW9DLFlBQU07QUFDdEM1RCxVQUFBQSxFQUFFLENBQUNnRSxRQUFILENBQVlJLFNBQVosQ0FBc0JSLFNBQXRCO0FBQ0gsU0FGRDtBQUdILE9BTkQ7QUFPSCxLQVJELE1BUU87QUFDSDVELE1BQUFBLEVBQUUsQ0FBQ2dFLFFBQUgsQ0FBWUcsWUFBWixDQUF5QlAsU0FBekIsRUFBb0MsWUFBTTtBQUN0QzVELFFBQUFBLEVBQUUsQ0FBQ2dFLFFBQUgsQ0FBWUksU0FBWixDQUFzQlIsU0FBdEI7QUFDSCxPQUZEO0FBR0g7QUFDSixHQWhGYTtBQWlGZFMsRUFBQUEsWUFqRmMsd0JBaUZEQyxTQWpGQyxFQWlGVTtBQUFDO0FBQ3JCdEUsSUFBQUEsRUFBRSxDQUFDQyxNQUFILENBQVVDLE9BQVYsQ0FBa0JvRSxTQUFsQixFQUE2QixVQUFDbEUsR0FBRCxFQUFNMEQsTUFBTixFQUFpQjtBQUMxQyxVQUFJLENBQUMxRCxHQUFMLEVBQVU7QUFDTixZQUFJZSxJQUFJLEdBQUduQixFQUFFLENBQUMrRCxXQUFILENBQWVELE1BQWYsQ0FBWDtBQUNBOUQsUUFBQUEsRUFBRSxDQUFDZ0UsUUFBSCxDQUFZQyxRQUFaLEdBQXVCQyxRQUF2QixDQUFnQyxDQUFoQyxFQUFtQ2QsUUFBbkMsQ0FBNENqQyxJQUE1QztBQUNIO0FBQ0osS0FMRDtBQU1IO0FBeEZhLENBQWxCO0FBMEZBb0QsTUFBTSxDQUFDQyxPQUFQLEdBQWlCNUUsV0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XG52YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcbnZhciBHYW1lVWlUb29scyA9IHtcbiAgICBnZXRTcHJpdGVGcmFtZTogZnVuY3Rpb24gKHNwcml0ZU5hbWUsIGN1clNwKSB7XG4gICAgICAgIC8vIHJldHVybiBuZXcgY2MuU3ByaXRlRnJhbWUoY2MudXJsLnJhdyhzcHJpdGVOYW1lKSk7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHNwcml0ZU5hbWUsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiREVCVUc6IGVyclwiK2Vycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihjdXJTcCl7XG4gICAgICAgICAgICAgICAgY3VyU3Auc3ByaXRlRnJhbWUgPSAgc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICB9KTtcbiAgICB9LFxuICAgIG5ld1Nwcml0ZTogZnVuY3Rpb24gKHNwcml0ZU5hbWUsIGlzQ2FjaGUpIHtcbiAgICAgICAgbGV0IHNwcml0ZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgIGlmIChpc0NhY2hlKSB7XG4gICAgICAgICAgICBzcHJpdGVOYW1lID0gc3ByaXRlTmFtZS5zcGxpdCgnLicpWzBdO1xuICAgICAgICAgICAgc3ByaXRlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gR2FtZVRvb2xzLmxvdmUyMDQ4RnJhbWVDYWNoZS5nZXRTcHJpdGVGcmFtZShzcHJpdGVOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNwcml0ZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShcInJlcy9yYXctYXNzZXRzL1wiICsgc3ByaXRlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNwcml0ZTtcbiAgICB9LFxuICAgIHNldE5vZGVTcHJpdGVGcmFtZTogZnVuY3Rpb24gKG5vZGUsIHNwcml0ZU5hbWUpIHtcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IEdhbWVUb29scy5sb3ZlMjA0OEZyYW1lQ2FjaGUuZ2V0U3ByaXRlRnJhbWUoc3ByaXRlTmFtZSk7XG4gICAgfSxcbiAgICBzZXRCdXR0b25DbGlja0V2ZW50czogZnVuY3Rpb24gKGNvbXBvbmVudCwgbWVudSwgaGFuZGxlciwgY3VzdG9tRXZlbnREYXRhLCBpc1NjYWxlKSB7XG4gICAgICAgIGxldCBhcnJheU1lbnUgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgaWYgKG1lbnUubGVuZ3RoID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYXJyYXlNZW51WzBdID0gbWVudTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyYXlNZW51ID0gbWVudTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5TWVudS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IGNvbXBvbmVudC5ub2RlOyAvL+i/meS4qiBub2RlIOiKgueCueaYr+S9oOeahOS6i+S7tuWkhOeQhuS7o+eggee7hOS7tuaJgOWxnueahOiKgueCuVxuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gY29tcG9uZW50Lm5vZGUubmFtZTsvL+i/meS4quaYr+S7o+eggeaWh+S7tuWQjVxuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgICAgICBpZiAobWVudS5sZW5ndGggPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gY3VzdG9tRXZlbnREYXRhO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jdXN0b21FdmVudERhdGEgPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGFycmF5TWVudVtpXS5hZGRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgIGlmIChpc1NjYWxlID09IHVuZGVmaW5lZCB8fCBpc1NjYWxlKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnRyYW5zaXRpb24gPSBjYy5CdXR0b24uVHJhbnNpdGlvbi5TQ0FMRTtcbiAgICAgICAgICAgICAgICBidXR0b24uZHVyYXRpb24gPSAwLjE7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnpvb21TY2FsZSA9IDEuMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMuc2Vjb25kU2V0TWVudVtpXS5vbignY2xpY2snLCB0aGlzLnNldE1lbnVUb3VjaEZ1bmMsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXRTZWNvbmRTZXRNZW51U3ByaXRlRnJhbTogZnVuY3Rpb24gKHNlY29uZFNldE1lbnUsIGlzUmlnaHQpIHsvL+iuvue9ruaYr+WQpuWLvumAieWbvueJh1xuICAgICAgICBzZWNvbmRTZXRNZW51LmdldENoaWxkcmVuKClbMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBHYW1lVG9vbHMubG92ZTIwNDhGcmFtZUNhY2hlLmdldFNwcml0ZUZyYW1lKGlzUmlnaHQgPyBcIm1lbnVSaWdodFwiIDogXCJtZW51Q2xvc2VcIik7XG4gICAgfSxcbiAgICBhZGRDbG9zZVNwcml0ZTogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgbGV0IG1lbnVDbG9zZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgIG1lbnVDbG9zZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IEdhbWVUb29scy5sb3ZlMjA0OEZyYW1lQ2FjaGUuZ2V0U3ByaXRlRnJhbWUoXCJtZW51Q2xvc2VcIik7XG4gICAgICAgIG5vZGUuYWRkQ2hpbGQobWVudUNsb3NlKTtcbiAgICB9LFxuICAgIHNjaGVkdWxlT25jZTogZnVuY3Rpb24gKG5vZGUsIGNhbGxGdW5jLCBkZWxheSkgey8v5LqL5Lu26LCD5bqmXG4gICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShkZWxheSksIGNjLmNhbGxGdW5jKGNhbGxGdW5jLCBub2RlKSkpO1xuICAgIH0sXG4gICAgbG9hZGluZ1NjZW5lKHNjZW5lTmFtZSwgaXNTaG93TGF5ZXIpIHsvL+WKoOi9veWcuuaZr1xuICAgICAgICBpZiAoaXNTaG93TGF5ZXIpIHtcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwicGFuZWwvTG9hZGluZ0xheWVyXCIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmNoaWxkcmVuWzBdLmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShzY2VuZU5hbWUsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHNjZW5lTmFtZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShzY2VuZU5hbWUsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2NlbmVOYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBsb2FkaW5nTGF5ZXIocGFuZWxOYW1lKSB7Ly/liqDovb3lm77lsYJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMocGFuZWxOYW1lLCAoZXJyLCBwcmVmYWIpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuY2hpbGRyZW5bMF0uYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG59O1xubW9kdWxlLmV4cG9ydHMgPSBHYW1lVWlUb29sczsiXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcR2FtZU92ZXIuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVG9vbHMiLCJHYW1lVWlUb29scyIsIkdhbWVEYXRhIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiYWNrQ29sb3IiLCJOb2RlIiwiYmFja0J1dHRvbiIsInJldml2ZUJ1dHRvbiIsIm9uTG9hZCIsInN1Ym1pdFNjb3JlIiwiaGVpZ2h0U2NvcmUiLCJnZXRIZWlnaHRTY29yZSIsInNldEhlaWdodFNjb3JlIiwic2V0QnV0dG9uQ2xpY2tFdmVudHMiLCJidXR0b25GdW5jIiwiZXZlbnQiLCJidXR0b24iLCJ0YXJnZXQiLCJwbGF5U2ltcGxlQXVkaW9FbmdpbmUiLCJnZXRHYW1lSW50ZWdyYWwiLCJJU19HQU1FX09WRVIiLCJHYW1lTG9naWMiLCJiYWNrR2FtZSIsInNldEdhbWVQcm9wTnVtYmVyIiwic2V0R2FtZUludGVncmFsIiwiR2FtZVNjZW5lIiwibm9kZSIsImRlc3Ryb3kiLCJJU19HQU1FX01VU0lDIiwicGxheUJhY2tncm91bmRNdXNpYyIsImxvYWRpbmdSZXNvdXJjZSIsInJlbW92ZVJhbmtEYXRhIiwic2V0SGF2ZUdhbWVEYXRhIiwic2V0R2FtZVBhc3NOdW0iLCJsb2FkaW5nU2NlbmVUeXBlIiwiTG9hZGluZ1NjZW5lVHlwZSIsIkxvYWRpbmdTY2VuZUJhY2tHYW1lIiwibWFpbk1lbnUiLCJNYWluTWVudSIsIk1haW5NZW51U3BhY2UiLCJkaXJlY3RvciIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxZQUFELENBQXhCOztBQUNBLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUUsV0FBVyxHQUFHRixPQUFPLENBQUMsYUFBRCxDQUF6Qjs7QUFDQSxJQUFJRyxR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MkMsUUFBWCxDQUFvQkMsYUFBMUM7QUFDQXZDLElBQUFBLEVBQUUsQ0FBQ3dDLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixjQUF0QjtBQUNIO0FBakRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XG52YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcbnZhciBHYW1lVWlUb29scyA9IHJlcXVpcmUoXCJHYW1lVWlUb29sc1wiKTtcbnZhciBHYW1lRGF0YSA9IHJlcXVpcmUoXCJHYW1lRGF0YVwiKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBiYWNrQ29sb3I6IGNjLk5vZGUsXG4gICAgICAgIGJhY2tCdXR0b246IGNjLk5vZGUsIC8v6L+U5Zue5oyJ6ZKuXG4gICAgICAgIHJldml2ZUJ1dHRvbjogY2MuTm9kZSwgLy/lpI3mtLvmjInpkq5cbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBHYW1lVG9vbHMuc3VibWl0U2NvcmUoR2FtZURhdGEuaGVpZ2h0U2NvcmUpOyAvL+aPkOS6pOW+l+WIhlxuICAgICAgICBpZiAoR2FtZURhdGEuaGVpZ2h0U2NvcmUgPiBHYW1lRGF0YS5nZXRIZWlnaHRTY29yZSgpKSB7XG4gICAgICAgICAgICBHYW1lRGF0YS5zZXRIZWlnaHRTY29yZShHYW1lRGF0YS5oZWlnaHRTY29yZSk7XG4gICAgICAgIH1cbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5iYWNrQnV0dG9uLCBcImJ1dHRvbkZ1bmNcIik7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMucmV2aXZlQnV0dG9uLCBcImJ1dHRvbkZ1bmNcIik7XG4gICAgfSxcblxuICAgIGJ1dHRvbkZ1bmM6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBsZXQgYnV0dG9uID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAodGhpcy5yZXZpdmVCdXR0b24gPT0gYnV0dG9uKSB7XG4gICAgICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDApO1xuICAgICAgICAgICAgaWYgKEdhbWVEYXRhLmdldEdhbWVJbnRlZ3JhbCgpID49IDMwKSB7XG4gICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5JU19HQU1FX09WRVIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVMb2dpYy5iYWNrR2FtZSgpO1xuICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNldEdhbWVQcm9wTnVtYmVyKDAsIDEpO1xuICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNldEdhbWVQcm9wTnVtYmVyKDEsIDEpO1xuICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNldEdhbWVQcm9wTnVtYmVyKDIsIDEpO1xuICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNldEdhbWVJbnRlZ3JhbCgtMzApO1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZVNjZW5lLnNldEdhbWVQcm9wTnVtYmVyKDApO1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZVNjZW5lLnNldEdhbWVQcm9wTnVtYmVyKDEpO1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZVNjZW5lLnNldEdhbWVQcm9wTnVtYmVyKDIpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcuSVNfR0FNRV9NVVNJQykge1xuICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMucGxheUJhY2tncm91bmRNdXNpYygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJhY2tCdXR0b24gPT0gYnV0dG9uKSB7XG4gICAgICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDApO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nUmVzb3VyY2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGxvYWRpbmdSZXNvdXJjZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBHYW1lVG9vbHMucmVtb3ZlUmFua0RhdGEoKTtcbiAgICAgICAgR2FtZURhdGEuc2V0SGF2ZUdhbWVEYXRhKGZhbHNlKTtcbiAgICAgICAgR2FtZURhdGEuc2V0R2FtZVBhc3NOdW0oMSk7XG4gICAgICAgIEdhbWVDb25maWcubG9hZGluZ1NjZW5lVHlwZSA9IEdhbWVDb25maWcuTG9hZGluZ1NjZW5lVHlwZS5Mb2FkaW5nU2NlbmVCYWNrR2FtZTtcbiAgICAgICAgR2FtZUNvbmZpZy5tYWluTWVudSA9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVTcGFjZTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9hZGluZ1NjZW5lXCIpO1xuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/GamePropNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'baa95mizZVN5pOs1SeqB98u', 'GamePropNode');
// Script/panel/GamePropNode.js

"use strict";

var GameConfig = require("GameConfig");

var GameTools = require("GameTools");

var GameData = require("GameData");

var GameUiTools = require("GameUiTools");

cc.Class({
  "extends": cc.Component,
  properties: {
    propType: cc.Sprite,
    porpNumberLabel: cc.Label,
    porpNumberNode: cc.Node,
    addNode: cc.Node,
    propTypeNumber: 0
  },
  onLoad: function onLoad() {
    if (this.propTypeNumber == 0) {
      GameUiTools.getSpriteFrame("pop_game/popgame_25", this.propType);
    } else if (this.propTypeNumber == 1) {
      GameUiTools.getSpriteFrame("pop_game/popgame_31", this.propType);
    } else if (this.propTypeNumber == 2) {
      GameUiTools.getSpriteFrame("pop_game/popgame_30", this.propType);
    }

    this.setPropType();
  },
  setPropType: function setPropType() {
    if (GameData.getGamePropNumber(this.propTypeNumber) > 0) {
      this.porpNumberNode.active = true;
      this.porpNumberLabel.string = GameData.getGamePropNumber(this.propTypeNumber);
      this.addNode.active = false;
    } else {
      this.porpNumberNode.active = false;
      this.addNode.active = true;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcR2FtZVByb3BOb2RlLmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiR2FtZURhdGEiLCJHYW1lVWlUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicHJvcFR5cGUiLCJTcHJpdGUiLCJwb3JwTnVtYmVyTGFiZWwiLCJMYWJlbCIsInBvcnBOdW1iZXJOb2RlIiwiTm9kZSIsImFkZE5vZGUiLCJwcm9wVHlwZU51bWJlciIsIm9uTG9hZCIsImdldFNwcml0ZUZyYW1lIiwic2V0UHJvcFR5cGUiLCJnZXRHYW1lUHJvcE51bWJlciIsImFjdGl2ZSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxZQUFELENBQXhCOztBQUNBLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUUsUUFBUSxHQUFHRixPQUFPLENBQUMsVUFBRCxDQUF0Qjs7QUFDQSxJQUFJRyxXQUFXLEdBQUdILE9BQU8sQ0FBQyxhQUFELENBQXpCOztBQUNBSSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUVMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFFSixFQUFFLENBQUNLLE1BREw7QUFFUkMsSUFBQUEsZUFBZSxFQUFFTixFQUFFLENBQUNPLEtBRlo7QUFHUkMsSUFBQUEsY0FBYyxFQUFFUixFQUFFLENBQUNTLElBSFg7QUFJUkMsSUFBQUEsT0FBTyxFQUFFVixFQUFFLENBQUNTLElBSko7QUFLUkUsSUFBQUEsY0FBYyxFQUFFO0FBTFIsR0FGUDtBQVVMQyxFQUFBQSxNQVZLLG9CQVVJO0FBQ0wsUUFBSSxLQUFLRCxjQUFMLElBQXVCLENBQTNCLEVBQThCO0FBQzFCWixNQUFBQSxXQUFXLENBQUNjLGNBQVosQ0FBMkIscUJBQTNCLEVBQWtELEtBQUtULFFBQXZEO0FBQ0gsS0FGRCxNQUVPLElBQUksS0FBS08sY0FBTCxJQUF1QixDQUEzQixFQUE4QjtBQUNqQ1osTUFBQUEsV0FBVyxDQUFDYyxjQUFaLENBQTJCLHFCQUEzQixFQUFrRCxLQUFLVCxRQUF2RDtBQUNILEtBRk0sTUFFQSxJQUFJLEtBQUtPLGNBQUwsSUFBdUIsQ0FBM0IsRUFBOEI7QUFDakNaLE1BQUFBLFdBQVcsQ0FBQ2MsY0FBWixDQUEyQixxQkFBM0IsRUFBa0QsS0FBS1QsUUFBdkQ7QUFDSDs7QUFDRCxTQUFLVSxXQUFMO0FBQ0gsR0FuQkk7QUFxQkxBLEVBQUFBLFdBckJLLHlCQXFCUztBQUNWLFFBQUloQixRQUFRLENBQUNpQixpQkFBVCxDQUEyQixLQUFLSixjQUFoQyxJQUFrRCxDQUF0RCxFQUF5RDtBQUNyRCxXQUFLSCxjQUFMLENBQW9CUSxNQUFwQixHQUE2QixJQUE3QjtBQUNBLFdBQUtWLGVBQUwsQ0FBcUJXLE1BQXJCLEdBQThCbkIsUUFBUSxDQUFDaUIsaUJBQVQsQ0FBMkIsS0FBS0osY0FBaEMsQ0FBOUI7QUFDQSxXQUFLRCxPQUFMLENBQWFNLE1BQWIsR0FBc0IsS0FBdEI7QUFDSCxLQUpELE1BSU87QUFDSCxXQUFLUixjQUFMLENBQW9CUSxNQUFwQixHQUE2QixLQUE3QjtBQUNBLFdBQUtOLE9BQUwsQ0FBYU0sTUFBYixHQUFzQixJQUF0QjtBQUNIO0FBQ0o7QUE5QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcbnZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xudmFyIEdhbWVEYXRhID0gcmVxdWlyZShcIkdhbWVEYXRhXCIpO1xudmFyIEdhbWVVaVRvb2xzID0gcmVxdWlyZShcIkdhbWVVaVRvb2xzXCIpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHByb3BUeXBlOiBjYy5TcHJpdGUsXG4gICAgICAgIHBvcnBOdW1iZXJMYWJlbDogY2MuTGFiZWwsXG4gICAgICAgIHBvcnBOdW1iZXJOb2RlOiBjYy5Ob2RlLFxuICAgICAgICBhZGROb2RlOiBjYy5Ob2RlLFxuICAgICAgICBwcm9wVHlwZU51bWJlcjogMCxcbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wVHlwZU51bWJlciA9PSAwKSB7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL3BvcGdhbWVfMjVcIiwgdGhpcy5wcm9wVHlwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wVHlwZU51bWJlciA9PSAxKSB7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL3BvcGdhbWVfMzFcIiwgdGhpcy5wcm9wVHlwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wVHlwZU51bWJlciA9PSAyKSB7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL3BvcGdhbWVfMzBcIiwgdGhpcy5wcm9wVHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRQcm9wVHlwZSgpO1xuICAgIH0sXG5cbiAgICBzZXRQcm9wVHlwZSgpIHtcbiAgICAgICAgaWYgKEdhbWVEYXRhLmdldEdhbWVQcm9wTnVtYmVyKHRoaXMucHJvcFR5cGVOdW1iZXIpID4gMCkge1xuICAgICAgICAgICAgdGhpcy5wb3JwTnVtYmVyTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wb3JwTnVtYmVyTGFiZWwuc3RyaW5nID0gR2FtZURhdGEuZ2V0R2FtZVByb3BOdW1iZXIodGhpcy5wcm9wVHlwZU51bWJlcik7XG4gICAgICAgICAgICB0aGlzLmFkZE5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcnBOdW1iZXJOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hZGROb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/AnimLayerTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dcf6e/4kv9KYrR4VIQPHtsC', 'AnimLayerTool');
// Script/AnimLayerTool.js

"use strict";

var CardSprite = require("CardSprite");

var GameConfig = require("GameConfig");

var GameTools = require("GameTools");

var GameUiTools = require("GameUiTools");

var DEVICE_WIDTH = GameConfig.DEVICE_WIDTH;
var DEVICE_HEIGHT = GameConfig.DEVICE_HEIGHT;
var MoveButtonAnimType = {
  up: 0,
  //向上
  down: 1,
  //向下
  left: 2,
  //向左
  right: 3,
  //向右
  leftUp: 4,
  //左上
  leftDown: 5,
  //左下
  rightUp: 6,
  //右上
  rightDown: 7 //右下

};
var AnimLayerTool = {
  moveButtonAnimTime: 0.3,
  // 按钮动画移动时间
  MoveButtonAnimType: MoveButtonAnimType,
  bottonAnim: function bottonAnim(button) {
    // 创建按钮特效
    var arrayNode = new Array();

    if (button.length == undefined) {
      arrayNode[0] = button;
    } else {
      arrayNode = button;
    }

    for (var i = 0; i < arrayNode.length; i++) {
      // let time = cc.random0To1() * 5 + 1;
      var time = Math.random() * 5 + 1;
      var width = arrayNode[i].height / 20.0;
      var anim1 = cc.jumpBy(time, cc.v2(width, 0), width, 1);
      var anim2 = cc.jumpBy(time, cc.v2(-width, 0), -width, 1);
      var anim3 = cc.scaleBy(0.3, 1.1, 0.9);
      var anim4 = cc.delayTime(time);
      var actions = cc.sequence(anim1, anim2, anim3, anim3.reverse(), anim4);
      arrayNode[i].runAction(actions.repeatForever());
    }
  },
  createShowMessageBox: function createShowMessageBox(x, y, name, rotation, parentNode) {},
  createShowMessageBoxAward: function createShowMessageBoxAward(parentNode, engineType) //创建奖励消息提示框
  {
    var message = new cc.Node();

    if (engineType == -1) {// message.addComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame("toast6");
    } else if (engineType < 6) {
      return;
    } else if (engineType < 8) {
      GameUiTools.getSpriteFrame("pop_nopack/txt_good", message.addComponent(cc.Sprite));
    } else if (engineType < 10) {
      GameUiTools.getSpriteFrame("pop_nopack/txt_cool", message.addComponent(cc.Sprite));
    } else if (engineType < 12) {
      GameUiTools.getSpriteFrame("pop_nopack/txt_verygood", message.addComponent(cc.Sprite));
    } else if (engineType < 14) {
      GameUiTools.getSpriteFrame("pop_nopack/txt_smart", message.addComponent(cc.Sprite));
    } else {
      GameUiTools.getSpriteFrame("pop_nopack/txt_boom", message.addComponent(cc.Sprite));
    }

    GameTools.playSimpleAudioEngine(3);
    message.setPosition(0, 0); // message.setOpacity(0);

    message.opacity = 0;
    parentNode.addChild(message);
    var action1 = cc.fadeIn(0.5);
    var action2 = cc.delayTime(1);
    var action3 = cc.fadeOut(0.5);
    var moveFinish = cc.callFunc(this.callFuncAddScore, this, message);
    var action4 = cc.sequence(action1, action2, action3, moveFinish);
    message.runAction(action4);
  },
  moveButtonAnim: function moveButtonAnim(button, isShow, moveButtonAnimType) {
    // 按钮消失或出现动画
    var positionX = button.x;
    var positionY = button.y;
    var size = button.getContentSize();

    if (isShow) {
      switch (moveButtonAnimType) {
        case 0:
          // up:
          button.setPosition(positionX, DEVICE_HEIGHT + size.height);
          break;

        case 1:
          // down:
          button.setPosition(positionX, -size.height);
          break;

        case 2:
          // left:
          button.setPosition(-size.width, positionY);
          break;

        case 3:
          // right:
          button.setPosition(DEVICE_WIDTH + size.width, positionY);
          break;

        case 4:
          // leftUp:
          button.setPosition(-size.width, DEVICE_HEIGHT + size.height);
          break;

        case 5:
          // leftDown:
          button.setPosition(-size.width, -size.height);
          break;

        case 6:
          // rightUp:
          button.setPosition(DEVICE_WIDTH + size.width, DEVICE_HEIGHT + size.height);
          break;

        case 7:
          // rightDown:
          button.setPosition(DEVICE_WIDTH + size.width, -size.height);
          break;

        default:
          break;
      }

      var anim1 = cc.moveTo(this.moveButtonAnimTime, cc.v2(positionX, positionY));
      button.runAction(anim1);
    } else {
      var _anim;

      switch (moveButtonAnimType) {
        case 0:
          // up:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(positionX, DEVICE_HEIGHT + size.height));
          break;

        case 1:
          // down:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(positionX, -size.height));
          break;

        case 2:
          // left:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(-size.width, positionY));
          break;

        case 3:
          // right:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(DEVICE_WIDTH + size.width, positionY));
          break;

        case 4:
          // leftUp:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(-size.width, DEVICE_HEIGHT + size.height));
          break;

        case 5:
          // leftDown:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(-size.width, -size.height));
          break;

        case 6:
          // rightUp:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(DEVICE_WIDTH + size.width, DEVICE_HEIGHT + size.height));
          break;

        case 7:
          // rightDown:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(DEVICE_WIDTH + size.width, -size.height));
          break;

        default:
          break;
      }

      button.runAction(_anim);
    }
  },
  createAddScore: function createAddScore(addScore) //创建加分动画
  {
    var addScoreSprite = new cc.Node();
    var lable = addScoreSprite.addComponent(cc.Label);
    lable.font = GameTools.numberLabelAtlas;
    lable.string = ":" + addScore;
    addScoreSprite.setPosition(-46, 505); // addScoreSprite.setOpacity(100);

    addScoreSprite.opacity = 0;
    GameConfig.GameScene.node.addChild(addScoreSprite);
    var move1 = cc.moveBy(0.3, 0, 106);
    var move2 = cc.fadeIn(0.2);
    var move3 = cc.spawn(move1, move2);
    var moveFinish = cc.callFunc(this.callFuncAddScore, this, addScoreSprite);
    addScoreSprite.runAction(cc.sequence(move3, moveFinish));
  },
  callFuncAddScore: function callFuncAddScore(sender, node) //创建加分动画监听
  {
    sender.destroy();
  },
  createScoreMoveAnim: function createScoreMoveAnim(from, score, scoreType) {
    //创建得分移动动画
    if (score > 0) {
      var scoreNumberTTF = new cc.Node();
      var lable = scoreNumberTTF.addComponent(cc.Label);
      lable.font = GameTools.numberLabelAtlas;
      lable.string = ":" + score;
      scoreNumberTTF.setPosition(from.x, from.y);
      from.getParent().addChild(scoreNumberTTF);
      var moveFinish = cc.callFunc(this.callFuncScoreMoveAnim, this, scoreNumberTTF);
      var move1 = null;

      if (scoreType) {
        move1 = cc.moveTo(1, 58 + 360, 408 + 640);
      } else {
        move1 = cc.moveTo(1, -259 + 360, 290 + 640);
      }

      move1.easing(cc.easeExponentialIn());
      scoreNumberTTF.runAction(cc.sequence(move1, moveFinish));
    }
  },
  callFuncScoreMoveAnim: function callFuncScoreMoveAnim(sender, scoreNumberTTF) {
    //得分移动动画监听
    GameConfig.GameLogic.setScore();
    scoreNumberTTF.destroy();
  },
  createChangeCardNumAnim: function createChangeCardNumAnim(card, num) //创建移除动画
  {
    var cardSprite = CardSprite.createCardSprite(card.getNumber(), card.getPositionX(), card.getPositionY());
    card.getParent().addChild(cardSprite);
    card.active = false;
    card.setNumber(num);
    cardSprite.setNumber(num);
    var action2 = cc.scaleTo(0.3, 0);
    action2.easing(cc.easeBackIn());
    var action3 = cc.scaleTo(0.1, 1);
    var moveFinish1 = cc.callFunc(this.callFuncChangeCardNum1, this, cardSprite);
    var moveFinish2 = cc.callFunc(this.callFuncChangeCardNum2, this, [cardSprite, card]);
    var actions = cc.sequence(action2, moveFinish1, action3, moveFinish2);
    cardSprite.runAction(actions);
  },
  callFuncChangeCardNum1: function callFuncChangeCardNum1(sender, cardSprite) //卡片移除特效监听
  {
    cardSprite.CardShow();
  },
  callFuncChangeCardNum2: function callFuncChangeCardNum2(sender, funData) //卡片移除特效监听
  {
    var cardSprite = funData[0];
    var card = funData[1];
    card.CardShow();
    card.active = true;
    cardSprite.destroy();
  },
  createExchangeCardAnim: function createExchangeCardAnim(card, z, x) //创建道具交换特效
  {
    var X = card.getPositionX();
    var Y = card.getPositionY();
    var unitSize = GameConfig.CARD_WIDTH / (GameConfig.CAED_LINES + 1);
    var move1 = cc.scaleBy(0.4, 1.15);
    var actions = cc.sequence(move1, move1.reverse());

    if (z > 0) {
      var card1 = CardSprite.createCardSprite(-1, X - unitSize - GameConfig.CARD_WIDTH, Y);
      card.getParent().addChild(card1);
      card1.runAction(actions.clone().repeatForever());
    }

    if (z < GameConfig.CAED_LINES - 1) {
      var card2 = CardSprite.createCardSprite(-1, X + unitSize + GameConfig.CARD_WIDTH, Y);
      card.getParent().addChild(card2);
      card2.runAction(actions.clone().repeatForever());
    }

    if (x > 0) {
      var card3 = CardSprite.createCardSprite(-1, X, Y - unitSize - GameConfig.CARD_WIDTH);
      card.getParent().addChild(card3);
      card3.runAction(actions.clone().repeatForever());
    }

    if (x < GameConfig.CAED_LINES - 1) {
      var card4 = CardSprite.createCardSprite(-1, X, Y + unitSize + GameConfig.CARD_WIDTH);
      card.getParent().addChild(card4);
      card4.runAction(actions.clone().repeatForever());
    }
  },
  createRemoveExchangeCardAnim: function createRemoveExchangeCardAnim(card, z, x) //创建道具移除交换特效
  {
    if (z > 0) {
      card.getParent().removeChildByTag(2001);
    }

    if (z < GameConfig.CAED_LINES - 1) {
      card.getParent().removeChildByTag(2002);
    }

    if (x > 0) {
      card.getParent().removeChildByTag(2003);
    }

    if (x < GameConfig.CAED_LINES - 1) {
      card.getParent().removeChildByTag(2004);
    }
  },
  createScaleToCard: function createScaleToCard(card) {
    // 创建卡片初始化动画
    var cardSprite = CardSprite.createCardSprite(card.number, card.x, card.y);
    card.getParent().addChild(cardSprite);
    card.active = false;
    cardSprite.setScale(0);
    var action2 = cc.scaleTo(0.3, 1);
    action2.easing(cc.easeBackOut());
    var moveFinish = cc.callFunc(this.callFuncCard1, this, [cardSprite, card]);
    cardSprite.runAction(cc.sequence(action2, moveFinish));
  },
  callFuncCard1: function callFuncCard1(node, cardSprite) {
    cardSprite[1].CardShow();
    cardSprite[1].active = true;
    cardSprite[0].destroy();
  },
  createMoveAnim: function createMoveAnim(from, to, isShowAnim) {
    var cardSprite = CardSprite.createCardSprite(from.number, from.x, from.y);
    to.getParent().addChild(cardSprite);
    var i = 0;
    var moveFinish = cc.callFunc(this.callFuncCard2, this, [cardSprite, to, isShowAnim]);
    var move1 = cc.moveTo(0.3, cc.v2(to.x, to.y));

    if (i < 1) {
      move1 = cc.moveTo(0.1, cc.v2(to.x, to.y));
    } else if (i < 2) {
      move1.easing(cc.easeBackIn());
    } else if (i < 3) {
      move1.easing(cc.easeBackOut());
    } else if (i < 4) {
      move1.easing(cc.easeBackInOut());
    } else if (i < 5) {
      move1 = cc.jumpTo(0.3, cc.v2(to.x, to.y), GameConfig.CARD_WIDTH, 2);
    }

    cardSprite.runAction(cc.sequence(move1, moveFinish));
  },
  callFuncCard2: function callFuncCard2(sender, to) {
    to[1].CardShow();

    if (to[2]) {
      to[0].number = to[1].number;
      to[0].CardShow();
      var scale = cc.scaleBy(0.02, 1.15);
      var moveFinish = cc.callFunc(this.callFuncCard3, this, to[0]);
      to[0].runAction(cc.sequence(scale, scale.reverse(), moveFinish));
    } else {
      to[0].destroy();
    }
  },
  callFuncCard3: function callFuncCard3(sender, card) {
    card.destroy();
  },
  createPopStarAnim: function createPopStarAnim(from, dTime) //创建卡片爆炸特效
  {
    var moveFinish2 = cc.callFunc(this.callFuncPopStarAnim, this, from); // from.runAction(cc.sequence(cc.delayTime(dTime), moveFinish2, cc.hide()));

    from.runAction(cc.sequence(cc.delayTime(dTime), moveFinish2, cc.fadeOut()));
  },
  callFuncPopStarAnim: function callFuncPopStarAnim(sender, from) //卡片爆炸特效监听
  {
    GameTools.playSimpleAudioEngine(0);
    var emitterNode = new cc.Node();
    emitterNode.setPosition(from.getPosition());
    var move_emitter = emitterNode.addComponent(cc.ParticleSystem); // let move_emitter = ParticleExplosion.createWithTotalParticles(30);
    // let move_emitter = new cc.ParticleSystem(30);

    switch (from.getNumber()) {
      // case 2:
      //     move_emitter.texture = "res/raw-assets/resources/particals/noe/partical_tex_yellow";
      //     break;
      // case 4:
      //     move_emitter.texture = "res/raw-assets/resources/particals/noe/partical_tex_blue";
      //     break;
      // case 8:
      //     move_emitter.texture = "res/raw-assets/resources/particals/noe/partical_tex_green";
      //     break;
      // case 16:
      //     move_emitter.texture = "res/raw-assets/resources/particals/noe/partical_tex_red";
      //     break;
      // case 32:
      //     move_emitter.texture = "res/raw-assets/resources/particals/noe/partical_tex_purple";
      //     break;
      case 2:
        move_emitter.texture = "pop_game/n6";
        break;

      case 4:
        move_emitter.texture = "pop_game/n6";
        break;

      case 8:
        move_emitter.texture = "pop_game/n6";
        break;

      case 16:
        move_emitter.texture = "pop_game/n6";
        break;

      case 32:
        move_emitter.texture = "pop_game/n6";
        break;
    }

    move_emitter.startColor = cc.color(255, 255, 255, 255);
    move_emitter.startColorVar = cc.color(0, 0, 0, 0);
    move_emitter.endColorVar = cc.color(0, 0, 0, 0);
    move_emitter.endColor = move_emitter.startColor;
    move_emitter.autoRemoveOnFinish = true;
    move_emitter.duration = 0.1;
    move_emitter.emissionRate = 100;
    move_emitter.life = 2;
    move_emitter.lifeVar = 0.5;
    move_emitter.angle = 90;
    move_emitter.angleVar = 360;
    move_emitter.custom = true;
    move_emitter.playOnLoad = true;
    from.getParent().addChild(emitterNode);
  }
};
module.exports = AnimLayerTool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBbmltTGF5ZXJUb29sLmpzIl0sIm5hbWVzIjpbIkNhcmRTcHJpdGUiLCJyZXF1aXJlIiwiR2FtZUNvbmZpZyIsIkdhbWVUb29scyIsIkdhbWVVaVRvb2xzIiwiREVWSUNFX1dJRFRIIiwiREVWSUNFX0hFSUdIVCIsIk1vdmVCdXR0b25BbmltVHlwZSIsInVwIiwiZG93biIsImxlZnQiLCJyaWdodCIsImxlZnRVcCIsImxlZnREb3duIiwicmlnaHRVcCIsInJpZ2h0RG93biIsIkFuaW1MYXllclRvb2wiLCJtb3ZlQnV0dG9uQW5pbVRpbWUiLCJib3R0b25BbmltIiwiYnV0dG9uIiwiYXJyYXlOb2RlIiwiQXJyYXkiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJpIiwidGltZSIsIk1hdGgiLCJyYW5kb20iLCJ3aWR0aCIsImhlaWdodCIsImFuaW0xIiwiY2MiLCJqdW1wQnkiLCJ2MiIsImFuaW0yIiwiYW5pbTMiLCJzY2FsZUJ5IiwiYW5pbTQiLCJkZWxheVRpbWUiLCJhY3Rpb25zIiwic2VxdWVuY2UiLCJyZXZlcnNlIiwicnVuQWN0aW9uIiwicmVwZWF0Rm9yZXZlciIsImNyZWF0ZVNob3dNZXNzYWdlQm94IiwieCIsInkiLCJuYW1lIiwicm90YXRpb24iLCJwYXJlbnROb2RlIiwiY3JlYXRlU2hvd01lc3NhZ2VCb3hBd2FyZCIsImVuZ2luZVR5cGUiLCJtZXNzYWdlIiwiTm9kZSIsImdldFNwcml0ZUZyYW1lIiwiYWRkQ29tcG9uZW50IiwiU3ByaXRlIiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwic2V0UG9zaXRpb24iLCJvcGFjaXR5IiwiYWRkQ2hpbGQiLCJhY3Rpb24xIiwiZmFkZUluIiwiYWN0aW9uMiIsImFjdGlvbjMiLCJmYWRlT3V0IiwibW92ZUZpbmlzaCIsImNhbGxGdW5jIiwiY2FsbEZ1bmNBZGRTY29yZSIsImFjdGlvbjQiLCJtb3ZlQnV0dG9uQW5pbSIsImlzU2hvdyIsIm1vdmVCdXR0b25BbmltVHlwZSIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsInNpemUiLCJnZXRDb250ZW50U2l6ZSIsIm1vdmVUbyIsImNyZWF0ZUFkZFNjb3JlIiwiYWRkU2NvcmUiLCJhZGRTY29yZVNwcml0ZSIsImxhYmxlIiwiTGFiZWwiLCJmb250IiwibnVtYmVyTGFiZWxBdGxhcyIsInN0cmluZyIsIkdhbWVTY2VuZSIsIm5vZGUiLCJtb3ZlMSIsIm1vdmVCeSIsIm1vdmUyIiwibW92ZTMiLCJzcGF3biIsInNlbmRlciIsImRlc3Ryb3kiLCJjcmVhdGVTY29yZU1vdmVBbmltIiwiZnJvbSIsInNjb3JlIiwic2NvcmVUeXBlIiwic2NvcmVOdW1iZXJUVEYiLCJnZXRQYXJlbnQiLCJjYWxsRnVuY1Njb3JlTW92ZUFuaW0iLCJlYXNpbmciLCJlYXNlRXhwb25lbnRpYWxJbiIsIkdhbWVMb2dpYyIsInNldFNjb3JlIiwiY3JlYXRlQ2hhbmdlQ2FyZE51bUFuaW0iLCJjYXJkIiwibnVtIiwiY2FyZFNwcml0ZSIsImNyZWF0ZUNhcmRTcHJpdGUiLCJnZXROdW1iZXIiLCJnZXRQb3NpdGlvblgiLCJnZXRQb3NpdGlvblkiLCJhY3RpdmUiLCJzZXROdW1iZXIiLCJzY2FsZVRvIiwiZWFzZUJhY2tJbiIsIm1vdmVGaW5pc2gxIiwiY2FsbEZ1bmNDaGFuZ2VDYXJkTnVtMSIsIm1vdmVGaW5pc2gyIiwiY2FsbEZ1bmNDaGFuZ2VDYXJkTnVtMiIsIkNhcmRTaG93IiwiZnVuRGF0YSIsImNyZWF0ZUV4Y2hhbmdlQ2FyZEFuaW0iLCJ6IiwiWCIsIlkiLCJ1bml0U2l6ZSIsIkNBUkRfV0lEVEgiLCJDQUVEX0xJTkVTIiwiY2FyZDEiLCJjbG9uZSIsImNhcmQyIiwiY2FyZDMiLCJjYXJkNCIsImNyZWF0ZVJlbW92ZUV4Y2hhbmdlQ2FyZEFuaW0iLCJyZW1vdmVDaGlsZEJ5VGFnIiwiY3JlYXRlU2NhbGVUb0NhcmQiLCJudW1iZXIiLCJzZXRTY2FsZSIsImVhc2VCYWNrT3V0IiwiY2FsbEZ1bmNDYXJkMSIsImNyZWF0ZU1vdmVBbmltIiwidG8iLCJpc1Nob3dBbmltIiwiY2FsbEZ1bmNDYXJkMiIsImVhc2VCYWNrSW5PdXQiLCJqdW1wVG8iLCJzY2FsZSIsImNhbGxGdW5jQ2FyZDMiLCJjcmVhdGVQb3BTdGFyQW5pbSIsImRUaW1lIiwiY2FsbEZ1bmNQb3BTdGFyQW5pbSIsImVtaXR0ZXJOb2RlIiwiZ2V0UG9zaXRpb24iLCJtb3ZlX2VtaXR0ZXIiLCJQYXJ0aWNsZVN5c3RlbSIsInRleHR1cmUiLCJzdGFydENvbG9yIiwiY29sb3IiLCJzdGFydENvbG9yVmFyIiwiZW5kQ29sb3JWYXIiLCJlbmRDb2xvciIsImF1dG9SZW1vdmVPbkZpbmlzaCIsImR1cmF0aW9uIiwiZW1pc3Npb25SYXRlIiwibGlmZSIsImxpZmVWYXIiLCJhbmdsZSIsImFuZ2xlVmFyIiwiY3VzdG9tIiwicGxheU9uTG9hZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxZQUFELENBQXhCOztBQUNBLElBQUlFLFNBQVMsR0FBR0YsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUcsV0FBVyxHQUFHSCxPQUFPLENBQUMsYUFBRCxDQUF6Qjs7QUFDQSxJQUFJSSxZQUFZLEdBQUdILFVBQVUsQ0FBQ0csWUFBOUI7QUFDQSxJQUFJQyxhQUFhLEdBQUdKLFVBQVUsQ0FBQ0ksYUFBL0I7QUFDQSxJQUFJQyxrQkFBa0IsR0FBRztBQUNyQkMsRUFBQUEsRUFBRSxFQUFFLENBRGlCO0FBQ2Y7QUFDTkMsRUFBQUEsSUFBSSxFQUFFLENBRmU7QUFFYjtBQUNSQyxFQUFBQSxJQUFJLEVBQUUsQ0FIZTtBQUdiO0FBQ1JDLEVBQUFBLEtBQUssRUFBRSxDQUpjO0FBSVo7QUFDVEMsRUFBQUEsTUFBTSxFQUFFLENBTGE7QUFLWDtBQUNWQyxFQUFBQSxRQUFRLEVBQUUsQ0FOVztBQU1UO0FBQ1pDLEVBQUFBLE9BQU8sRUFB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Q0FBWixFQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FBN0I7QUFDQUosSUFBQUEsWUFBWSxDQUFDTSxXQUFiLEdBQTJCbkksRUFBRSxDQUFDaUksS0FBSCxDQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQixDQUFsQixDQUEzQjtBQUNBSixJQUFBQSxZQUFZLENBQUNPLFFBQWIsR0FBd0JQLFlBQVksQ0FBQ0csVUFBckM7QUFDQUgsSUFBQUEsWUFBWSxDQUFDUSxrQkFBYixHQUFrQyxJQUFsQztBQUVBUixJQUFBQSxZQUFZLENBQUNTLFFBQWIsR0FBd0IsR0FBeEI7QUFDQVQsSUFBQUEsWUFBWSxDQUFDVSxZQUFiLEdBQTRCLEdBQTVCO0FBQ0FWLElBQUFBLFlBQVksQ0FBQ1csSUFBYixHQUFvQixDQUFwQjtBQUNBWCxJQUFBQSxZQUFZLENBQUNZLE9BQWIsR0FBdUIsR0FBdkI7QUFDQVosSUFBQUEsWUFBWSxDQUFDYSxLQUFiLEdBQXFCLEVBQXJCO0FBQ0FiLElBQUFBLFlBQVksQ0FBQ2MsUUFBYixHQUF3QixHQUF4QjtBQUNBZCxJQUFBQSxZQUFZLENBQUNlLE1BQWIsR0FBc0IsSUFBdEI7QUFDQWYsSUFBQUEsWUFBWSxDQUFDZ0IsVUFBYixHQUEwQixJQUExQjtBQUNBNUUsSUFBQUEsSUFBSSxDQUFDSSxTQUFMLEdBQWlCeEMsUUFBakIsQ0FBMEI4RixXQUExQjtBQUNIO0FBbldlLENBQXBCO0FBc1dBbUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCOUosYUFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDYXJkU3ByaXRlID0gcmVxdWlyZShcIkNhcmRTcHJpdGVcIik7XG52YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XG52YXIgREVWSUNFX1dJRFRIID0gR2FtZUNvbmZpZy5ERVZJQ0VfV0lEVEg7XG52YXIgREVWSUNFX0hFSUdIVCA9IEdhbWVDb25maWcuREVWSUNFX0hFSUdIVDtcbnZhciBNb3ZlQnV0dG9uQW5pbVR5cGUgPSB7XG4gICAgdXA6IDAsLy/lkJHkuIpcbiAgICBkb3duOiAxLC8v5ZCR5LiLXG4gICAgbGVmdDogMiwvL+WQkeW3plxuICAgIHJpZ2h0OiAzLC8v5ZCR5Y+zXG4gICAgbGVmdFVwOiA0LC8v5bem5LiKXG4gICAgbGVmdERvd246IDUsLy/lt6bkuItcbiAgICByaWdodFVwOiA2LC8v5Y+z5LiKXG4gICAgcmlnaHREb3duOiA3LC8v5Y+z5LiLXG59O1xudmFyIEFuaW1MYXllclRvb2wgPSB7XG4gICAgbW92ZUJ1dHRvbkFuaW1UaW1lOiAwLjMsLy8g5oyJ6ZKu5Yqo55S756e75Yqo5pe26Ze0XG4gICAgTW92ZUJ1dHRvbkFuaW1UeXBlOiBNb3ZlQnV0dG9uQW5pbVR5cGUsXG4gICAgYm90dG9uQW5pbTogZnVuY3Rpb24gKGJ1dHRvbikgey8vIOWIm+W7uuaMiemSrueJueaViFxuICAgICAgICBsZXQgYXJyYXlOb2RlID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGlmIChidXR0b24ubGVuZ3RoID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYXJyYXlOb2RlWzBdID0gYnV0dG9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyYXlOb2RlID0gYnV0dG9uO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlOb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBsZXQgdGltZSA9IGNjLnJhbmRvbTBUbzEoKSAqIDUgKyAxO1xuICAgICAgICAgICAgbGV0IHRpbWUgPSBNYXRoLnJhbmRvbSgpICogNSArIDE7XG4gICAgICAgICAgICBsZXQgd2lkdGggPSBhcnJheU5vZGVbaV0uaGVpZ2h0IC8gMjAuMDtcbiAgICAgICAgICAgIGxldCBhbmltMSA9IGNjLmp1bXBCeSh0aW1lLCBjYy52Mih3aWR0aCwgMCksIHdpZHRoLCAxKTtcbiAgICAgICAgICAgIGxldCBhbmltMiA9IGNjLmp1bXBCeSh0aW1lLCBjYy52Migtd2lkdGgsIDApLCAtd2lkdGgsIDEpO1xuICAgICAgICAgICAgbGV0IGFuaW0zID0gY2Muc2NhbGVCeSgwLjMsIDEuMSwgMC45KTtcbiAgICAgICAgICAgIGxldCBhbmltNCA9IGNjLmRlbGF5VGltZSh0aW1lKTtcbiAgICAgICAgICAgIGxldCBhY3Rpb25zID0gY2Muc2VxdWVuY2UoYW5pbTEsIGFuaW0yLCBhbmltMywgYW5pbTMucmV2ZXJzZSgpLCBhbmltNCk7XG4gICAgICAgICAgICBhcnJheU5vZGVbaV0ucnVuQWN0aW9uKGFjdGlvbnMucmVwZWF0Rm9yZXZlcigpKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlU2hvd01lc3NhZ2VCb3goeCwgeSwgbmFtZSwgcm90YXRpb24sIHBhcmVudE5vZGUpIHtcbiAgICB9LFxuICAgIGNyZWF0ZVNob3dNZXNzYWdlQm94QXdhcmQocGFyZW50Tm9kZSwgZW5naW5lVHlwZSkgLy/liJvlu7rlpZblirHmtojmga/mj5DnpLrmoYZcbiAgICB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgaWYgKGVuZ2luZVR5cGUgPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIG1lc3NhZ2UuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBHYW1lVG9vbHMubG92ZTIwNDhGcmFtZUNhY2hlLmdldFNwcml0ZUZyYW1lKFwidG9hc3Q2XCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGVuZ2luZVR5cGUgPCA2KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoZW5naW5lVHlwZSA8IDgpIHtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX25vcGFjay90eHRfZ29vZFwiLCBtZXNzYWdlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbmdpbmVUeXBlIDwgMTApIHtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX25vcGFjay90eHRfY29vbFwiLG1lc3NhZ2UuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGVuZ2luZVR5cGUgPCAxMikge1xuICAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3Bfbm9wYWNrL3R4dF92ZXJ5Z29vZFwiLCBtZXNzYWdlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbmdpbmVUeXBlIDwgMTQpIHtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX25vcGFjay90eHRfc21hcnRcIiwgbWVzc2FnZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9ub3BhY2svdHh0X2Jvb21cIiwgbWVzc2FnZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgICAgIH1cbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgbWVzc2FnZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgLy8gbWVzc2FnZS5zZXRPcGFjaXR5KDApO1xuICAgICAgICBtZXNzYWdlLm9wYWNpdHkgPSAwO1xuICAgICAgICBwYXJlbnROb2RlLmFkZENoaWxkKG1lc3NhZ2UpO1xuXG4gICAgICAgIGxldCBhY3Rpb24xID0gY2MuZmFkZUluKDAuNSk7XG4gICAgICAgIGxldCBhY3Rpb24yID0gY2MuZGVsYXlUaW1lKDEpO1xuICAgICAgICBsZXQgYWN0aW9uMyA9IGNjLmZhZGVPdXQoMC41KTtcbiAgICAgICAgbGV0IG1vdmVGaW5pc2ggPSBjYy5jYWxsRnVuYyh0aGlzLmNhbGxGdW5jQWRkU2NvcmUsIHRoaXMsIG1lc3NhZ2UpO1xuICAgICAgICBsZXQgYWN0aW9uNCA9IGNjLnNlcXVlbmNlKGFjdGlvbjEsIGFjdGlvbjIsIGFjdGlvbjMsIG1vdmVGaW5pc2gpO1xuICAgICAgICBtZXNzYWdlLnJ1bkFjdGlvbihhY3Rpb240KTtcbiAgICB9LFxuICAgIG1vdmVCdXR0b25BbmltOiBmdW5jdGlvbiAoYnV0dG9uLCBpc1Nob3csIG1vdmVCdXR0b25BbmltVHlwZSkgey8vIOaMiemSrua2iOWkseaIluWHuueOsOWKqOeUu1xuICAgICAgICBsZXQgcG9zaXRpb25YID0gYnV0dG9uLng7XG4gICAgICAgIGxldCBwb3NpdGlvblkgPSBidXR0b24ueTtcbiAgICAgICAgbGV0IHNpemUgPSBidXR0b24uZ2V0Q29udGVudFNpemUoKTtcbiAgICAgICAgaWYgKGlzU2hvdykge1xuICAgICAgICAgICAgc3dpdGNoIChtb3ZlQnV0dG9uQW5pbVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6Ly8gdXA6XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRQb3NpdGlvbihwb3NpdGlvblgsIERFVklDRV9IRUlHSFQgKyBzaXplLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTovLyBkb3duOlxuICAgICAgICAgICAgICAgICAgICBidXR0b24uc2V0UG9zaXRpb24ocG9zaXRpb25YLCAtc2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6Ly8gbGVmdDpcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnNldFBvc2l0aW9uKC1zaXplLndpZHRoLCBwb3NpdGlvblkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6Ly8gcmlnaHQ6XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRQb3NpdGlvbihERVZJQ0VfV0lEVEggKyBzaXplLndpZHRoLCBwb3NpdGlvblkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6Ly8gbGVmdFVwOlxuICAgICAgICAgICAgICAgICAgICBidXR0b24uc2V0UG9zaXRpb24oLXNpemUud2lkdGgsIERFVklDRV9IRUlHSFQgKyBzaXplLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNTovLyBsZWZ0RG93bjpcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnNldFBvc2l0aW9uKC1zaXplLndpZHRoLCAtc2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDY6Ly8gcmlnaHRVcDpcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnNldFBvc2l0aW9uKERFVklDRV9XSURUSCArIHNpemUud2lkdGgsIERFVklDRV9IRUlHSFQgKyBzaXplLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNzovLyByaWdodERvd246XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRQb3NpdGlvbihERVZJQ0VfV0lEVEggKyBzaXplLndpZHRoLCAtc2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBhbmltMSA9IGNjLm1vdmVUbyh0aGlzLm1vdmVCdXR0b25BbmltVGltZSwgY2MudjIocG9zaXRpb25YLCBwb3NpdGlvblkpKTtcbiAgICAgICAgICAgIGJ1dHRvbi5ydW5BY3Rpb24oYW5pbTEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGFuaW0xO1xuICAgICAgICAgICAgc3dpdGNoIChtb3ZlQnV0dG9uQW5pbVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6Ly8gdXA6XG4gICAgICAgICAgICAgICAgICAgIGFuaW0xID0gY2MubW92ZVRvKHRoaXMubW92ZUJ1dHRvbkFuaW1UaW1lLCBjYy52Mihwb3NpdGlvblgsIERFVklDRV9IRUlHSFQgKyBzaXplLmhlaWdodCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6Ly8gZG93bjpcbiAgICAgICAgICAgICAgICAgICAgYW5pbTEgPSBjYy5tb3ZlVG8odGhpcy5tb3ZlQnV0dG9uQW5pbVRpbWUsIGNjLnYyKHBvc2l0aW9uWCwgLXNpemUuaGVpZ2h0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjovLyBsZWZ0OlxuICAgICAgICAgICAgICAgICAgICBhbmltMSA9IGNjLm1vdmVUbyh0aGlzLm1vdmVCdXR0b25BbmltVGltZSwgY2MudjIoLXNpemUud2lkdGgsIHBvc2l0aW9uWSkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6Ly8gcmlnaHQ6XG4gICAgICAgICAgICAgICAgICAgIGFuaW0xID0gY2MubW92ZVRvKHRoaXMubW92ZUJ1dHRvbkFuaW1UaW1lLCBjYy52MihERVZJQ0VfV0lEVEggKyBzaXplLndpZHRoLCBwb3NpdGlvblkpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0Oi8vIGxlZnRVcDpcbiAgICAgICAgICAgICAgICAgICAgYW5pbTEgPSBjYy5tb3ZlVG8odGhpcy5tb3ZlQnV0dG9uQW5pbVRpbWUsIGNjLnYyKC1zaXplLndpZHRoLCBERVZJQ0VfSEVJR0hUICsgc2l6ZS5oZWlnaHQpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1Oi8vIGxlZnREb3duOlxuICAgICAgICAgICAgICAgICAgICBhbmltMSA9IGNjLm1vdmVUbyh0aGlzLm1vdmVCdXR0b25BbmltVGltZSwgY2MudjIoLXNpemUud2lkdGgsIC1zaXplLmhlaWdodCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDY6Ly8gcmlnaHRVcDpcbiAgICAgICAgICAgICAgICAgICAgYW5pbTEgPSBjYy5tb3ZlVG8odGhpcy5tb3ZlQnV0dG9uQW5pbVRpbWUsIGNjLnYyKERFVklDRV9XSURUSCArIHNpemUud2lkdGgsIERFVklDRV9IRUlHSFQgKyBzaXplLmhlaWdodCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDc6Ly8gcmlnaHREb3duOlxuICAgICAgICAgICAgICAgICAgICBhbmltMSA9IGNjLm1vdmVUbyh0aGlzLm1vdmVCdXR0b25BbmltVGltZSwgY2MudjIoREVWSUNFX1dJRFRIICsgc2l6ZS53aWR0aCwgLXNpemUuaGVpZ2h0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uLnJ1bkFjdGlvbihhbmltMSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY3JlYXRlQWRkU2NvcmUoYWRkU2NvcmUpIC8v5Yib5bu65Yqg5YiG5Yqo55S7XG4gICAge1xuICAgICAgICBsZXQgYWRkU2NvcmVTcHJpdGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBsZXQgbGFibGUgPSBhZGRTY29yZVNwcml0ZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBsYWJsZS5mb250ID0gR2FtZVRvb2xzLm51bWJlckxhYmVsQXRsYXM7XG4gICAgICAgIGxhYmxlLnN0cmluZyA9IFwiOlwiICsgYWRkU2NvcmU7XG4gICAgICAgIGFkZFNjb3JlU3ByaXRlLnNldFBvc2l0aW9uKC00NiwgNTA1KTtcbiAgICAgICAgLy8gYWRkU2NvcmVTcHJpdGUuc2V0T3BhY2l0eSgxMDApO1xuICAgICAgICBhZGRTY29yZVNwcml0ZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgR2FtZUNvbmZpZy5HYW1lU2NlbmUubm9kZS5hZGRDaGlsZChhZGRTY29yZVNwcml0ZSk7XG4gICAgICAgIGxldCBtb3ZlMSA9IGNjLm1vdmVCeSgwLjMsIDAsIDEwNik7XG4gICAgICAgIGxldCBtb3ZlMiA9IGNjLmZhZGVJbigwLjIpO1xuICAgICAgICBsZXQgbW92ZTMgPSBjYy5zcGF3bihtb3ZlMSwgbW92ZTIpO1xuICAgICAgICBsZXQgbW92ZUZpbmlzaCA9IGNjLmNhbGxGdW5jKHRoaXMuY2FsbEZ1bmNBZGRTY29yZSwgdGhpcywgYWRkU2NvcmVTcHJpdGUpO1xuICAgICAgICBhZGRTY29yZVNwcml0ZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UobW92ZTMsIG1vdmVGaW5pc2gpKTtcbiAgICB9LFxuICAgIGNhbGxGdW5jQWRkU2NvcmUoc2VuZGVyLCBub2RlKSAvL+WIm+W7uuWKoOWIhuWKqOeUu+ebkeWQrFxuICAgIHtcbiAgICAgICAgc2VuZGVyLmRlc3Ryb3koKTtcbiAgICB9LFxuICAgIGNyZWF0ZVNjb3JlTW92ZUFuaW06IGZ1bmN0aW9uIChmcm9tLCBzY29yZSwgc2NvcmVUeXBlKSB7IC8v5Yib5bu65b6X5YiG56e75Yqo5Yqo55S7XG4gICAgICAgIGlmIChzY29yZSA+IDApIHtcbiAgICAgICAgICAgIGxldCBzY29yZU51bWJlclRURiA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgICAgICBsZXQgbGFibGUgPSBzY29yZU51bWJlclRURi5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbGFibGUuZm9udCA9IEdhbWVUb29scy5udW1iZXJMYWJlbEF0bGFzO1xuICAgICAgICAgICAgbGFibGUuc3RyaW5nID0gXCI6XCIgKyBzY29yZTtcbiAgICAgICAgICAgIHNjb3JlTnVtYmVyVFRGLnNldFBvc2l0aW9uKGZyb20ueCwgZnJvbS55KTtcbiAgICAgICAgICAgIGZyb20uZ2V0UGFyZW50KCkuYWRkQ2hpbGQoc2NvcmVOdW1iZXJUVEYpO1xuICAgICAgICAgICAgbGV0IG1vdmVGaW5pc2ggPSBjYy5jYWxsRnVuYyh0aGlzLmNhbGxGdW5jU2NvcmVNb3ZlQW5pbSwgdGhpcywgc2NvcmVOdW1iZXJUVEYpO1xuICAgICAgICAgICAgbGV0IG1vdmUxID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChzY29yZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBtb3ZlMSA9IGNjLm1vdmVUbygxLCA1OCArIDM2MCwgNDA4ICsgNjQwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbW92ZTEgPSBjYy5tb3ZlVG8oMSwgLTI1OSArIDM2MCwgMjkwICsgNjQwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vdmUxLmVhc2luZyhjYy5lYXNlRXhwb25lbnRpYWxJbigpKTtcbiAgICAgICAgICAgIHNjb3JlTnVtYmVyVFRGLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShtb3ZlMSwgbW92ZUZpbmlzaCkpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjYWxsRnVuY1Njb3JlTW92ZUFuaW06IGZ1bmN0aW9uIChzZW5kZXIsIHNjb3JlTnVtYmVyVFRGKSB7IC8v5b6X5YiG56e75Yqo5Yqo55S755uR5ZCsXG4gICAgICAgIEdhbWVDb25maWcuR2FtZUxvZ2ljLnNldFNjb3JlKCk7XG4gICAgICAgIHNjb3JlTnVtYmVyVFRGLmRlc3Ryb3koKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlQ2hhbmdlQ2FyZE51bUFuaW06IGZ1bmN0aW9uIChjYXJkLCBudW0pIC8v5Yib5bu656e76Zmk5Yqo55S7XG4gICAge1xuICAgICAgICBsZXQgY2FyZFNwcml0ZSA9IENhcmRTcHJpdGUuY3JlYXRlQ2FyZFNwcml0ZShjYXJkLmdldE51bWJlcigpLCBjYXJkLmdldFBvc2l0aW9uWCgpLCBjYXJkLmdldFBvc2l0aW9uWSgpKTtcbiAgICAgICAgY2FyZC5nZXRQYXJlbnQoKS5hZGRDaGlsZChjYXJkU3ByaXRlKTtcbiAgICAgICAgY2FyZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgY2FyZC5zZXROdW1iZXIobnVtKTtcbiAgICAgICAgY2FyZFNwcml0ZS5zZXROdW1iZXIobnVtKTtcblxuICAgICAgICBsZXQgYWN0aW9uMiA9IGNjLnNjYWxlVG8oMC4zLCAwKTtcbiAgICAgICAgYWN0aW9uMi5lYXNpbmcoY2MuZWFzZUJhY2tJbigpKVxuICAgICAgICBsZXQgYWN0aW9uMyA9IGNjLnNjYWxlVG8oMC4xLCAxKTtcbiAgICAgICAgbGV0IG1vdmVGaW5pc2gxID0gY2MuY2FsbEZ1bmModGhpcy5jYWxsRnVuY0NoYW5nZUNhcmROdW0xLCB0aGlzLCBjYXJkU3ByaXRlKTtcbiAgICAgICAgbGV0IG1vdmVGaW5pc2gyID0gY2MuY2FsbEZ1bmModGhpcy5jYWxsRnVuY0NoYW5nZUNhcmROdW0yLCB0aGlzLCBbY2FyZFNwcml0ZSwgY2FyZF0pO1xuICAgICAgICBsZXQgYWN0aW9ucyA9IGNjLnNlcXVlbmNlKGFjdGlvbjIsIG1vdmVGaW5pc2gxLCBhY3Rpb24zLCBtb3ZlRmluaXNoMik7XG4gICAgICAgIGNhcmRTcHJpdGUucnVuQWN0aW9uKGFjdGlvbnMpO1xuICAgIH0sXG4gICAgY2FsbEZ1bmNDaGFuZ2VDYXJkTnVtMTogZnVuY3Rpb24gKHNlbmRlciwgY2FyZFNwcml0ZSkgLy/ljaHniYfnp7vpmaTnibnmlYjnm5HlkKxcbiAgICB7XG4gICAgICAgIGNhcmRTcHJpdGUuQ2FyZFNob3coKTtcbiAgICB9LFxuICAgIGNhbGxGdW5jQ2hhbmdlQ2FyZE51bTI6IGZ1bmN0aW9uIChzZW5kZXIsIGZ1bkRhdGEpIC8v5Y2h54mH56e76Zmk54m55pWI55uR5ZCsXG4gICAge1xuICAgICAgICBsZXQgY2FyZFNwcml0ZSA9IGZ1bkRhdGFbMF07XG4gICAgICAgIGxldCBjYXJkID0gZnVuRGF0YVsxXTtcbiAgICAgICAgY2FyZC5DYXJkU2hvdygpO1xuICAgICAgICBjYXJkLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNhcmRTcHJpdGUuZGVzdHJveSgpO1xuICAgIH0sXG4gICAgY3JlYXRlRXhjaGFuZ2VDYXJkQW5pbTogZnVuY3Rpb24gKGNhcmQsIHosIHgpIC8v5Yib5bu66YGT5YW35Lqk5o2i54m55pWIXG4gICAge1xuICAgICAgICBsZXQgWCA9IGNhcmQuZ2V0UG9zaXRpb25YKCk7XG4gICAgICAgIGxldCBZID0gY2FyZC5nZXRQb3NpdGlvblkoKTtcbiAgICAgICAgbGV0IHVuaXRTaXplID0gR2FtZUNvbmZpZy5DQVJEX1dJRFRIIC8gKEdhbWVDb25maWcuQ0FFRF9MSU5FUyArIDEpO1xuICAgICAgICBsZXQgbW92ZTEgPSBjYy5zY2FsZUJ5KDAuNCwgMS4xNSk7XG4gICAgICAgIGxldCBhY3Rpb25zID0gY2Muc2VxdWVuY2UobW92ZTEsIG1vdmUxLnJldmVyc2UoKSk7XG4gICAgICAgIGlmICh6ID4gMCkge1xuICAgICAgICAgICAgbGV0IGNhcmQxID0gQ2FyZFNwcml0ZS5jcmVhdGVDYXJkU3ByaXRlKC0xLCBYIC0gdW5pdFNpemUgLSBHYW1lQ29uZmlnLkNBUkRfV0lEVEgsIFkpO1xuICAgICAgICAgICAgY2FyZC5nZXRQYXJlbnQoKS5hZGRDaGlsZChjYXJkMSk7XG4gICAgICAgICAgICBjYXJkMS5ydW5BY3Rpb24oYWN0aW9ucy5jbG9uZSgpLnJlcGVhdEZvcmV2ZXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHogPCBHYW1lQ29uZmlnLkNBRURfTElORVMgLSAxKSB7XG4gICAgICAgICAgICBsZXQgY2FyZDIgPSBDYXJkU3ByaXRlLmNyZWF0ZUNhcmRTcHJpdGUoLTEsIFggKyB1bml0U2l6ZSArIEdhbWVDb25maWcuQ0FSRF9XSURUSCwgWSk7XG4gICAgICAgICAgICBjYXJkLmdldFBhcmVudCgpLmFkZENoaWxkKGNhcmQyKTtcbiAgICAgICAgICAgIGNhcmQyLnJ1bkFjdGlvbihhY3Rpb25zLmNsb25lKCkucmVwZWF0Rm9yZXZlcigpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA+IDApIHtcbiAgICAgICAgICAgIGxldCBjYXJkMyA9IENhcmRTcHJpdGUuY3JlYXRlQ2FyZFNwcml0ZSgtMSwgWCwgWSAtIHVuaXRTaXplIC0gR2FtZUNvbmZpZy5DQVJEX1dJRFRIKTtcbiAgICAgICAgICAgIGNhcmQuZ2V0UGFyZW50KCkuYWRkQ2hpbGQoY2FyZDMpO1xuICAgICAgICAgICAgY2FyZDMucnVuQWN0aW9uKGFjdGlvbnMuY2xvbmUoKS5yZXBlYXRGb3JldmVyKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh4IDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTIC0gMSkge1xuICAgICAgICAgICAgbGV0IGNhcmQ0ID0gQ2FyZFNwcml0ZS5jcmVhdGVDYXJkU3ByaXRlKC0xLCBYLCBZICsgdW5pdFNpemUgKyBHYW1lQ29uZmlnLkNBUkRfV0lEVEgpO1xuICAgICAgICAgICAgY2FyZC5nZXRQYXJlbnQoKS5hZGRDaGlsZChjYXJkNCk7XG4gICAgICAgICAgICBjYXJkNC5ydW5BY3Rpb24oYWN0aW9ucy5jbG9uZSgpLnJlcGVhdEZvcmV2ZXIoKSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY3JlYXRlUmVtb3ZlRXhjaGFuZ2VDYXJkQW5pbTogZnVuY3Rpb24gKGNhcmQsIHosIHgpIC8v5Yib5bu66YGT5YW356e76Zmk5Lqk5o2i54m55pWIXG4gICAge1xuICAgICAgICBpZiAoeiA+IDApIHtcbiAgICAgICAgICAgIGNhcmQuZ2V0UGFyZW50KCkucmVtb3ZlQ2hpbGRCeVRhZygyMDAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUyAtIDEpIHtcbiAgICAgICAgICAgIGNhcmQuZ2V0UGFyZW50KCkucmVtb3ZlQ2hpbGRCeVRhZygyMDAyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA+IDApIHtcbiAgICAgICAgICAgIGNhcmQuZ2V0UGFyZW50KCkucmVtb3ZlQ2hpbGRCeVRhZygyMDAzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUyAtIDEpIHtcbiAgICAgICAgICAgIGNhcmQuZ2V0UGFyZW50KCkucmVtb3ZlQ2hpbGRCeVRhZygyMDA0KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjcmVhdGVTY2FsZVRvQ2FyZDogZnVuY3Rpb24gKGNhcmQpIHsvLyDliJvlu7rljaHniYfliJ3lp4vljJbliqjnlLtcbiAgICAgICAgbGV0IGNhcmRTcHJpdGUgPSBDYXJkU3ByaXRlLmNyZWF0ZUNhcmRTcHJpdGUoY2FyZC5udW1iZXIsIGNhcmQueCwgY2FyZC55KTtcbiAgICAgICAgY2FyZC5nZXRQYXJlbnQoKS5hZGRDaGlsZChjYXJkU3ByaXRlKTtcbiAgICAgICAgY2FyZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgY2FyZFNwcml0ZS5zZXRTY2FsZSgwKTtcbiAgICAgICAgbGV0IGFjdGlvbjIgPSBjYy5zY2FsZVRvKDAuMywgMSk7XG4gICAgICAgIGFjdGlvbjIuZWFzaW5nKGNjLmVhc2VCYWNrT3V0KCkpO1xuICAgICAgICBsZXQgbW92ZUZpbmlzaCA9IGNjLmNhbGxGdW5jKHRoaXMuY2FsbEZ1bmNDYXJkMSwgdGhpcywgW2NhcmRTcHJpdGUsIGNhcmRdKTtcbiAgICAgICAgY2FyZFNwcml0ZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYWN0aW9uMiwgbW92ZUZpbmlzaCkpO1xuICAgIH0sXG4gICAgY2FsbEZ1bmNDYXJkMTogZnVuY3Rpb24gKG5vZGUsIGNhcmRTcHJpdGUpIHtcbiAgICAgICAgY2FyZFNwcml0ZVsxXS5DYXJkU2hvdygpO1xuICAgICAgICBjYXJkU3ByaXRlWzFdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgY2FyZFNwcml0ZVswXS5kZXN0cm95KCk7XG4gICAgfSxcblxuICAgIGNyZWF0ZU1vdmVBbmltOiBmdW5jdGlvbiAoZnJvbSwgdG8sIGlzU2hvd0FuaW0pIHtcbiAgICAgICAgbGV0IGNhcmRTcHJpdGUgPSBDYXJkU3ByaXRlLmNyZWF0ZUNhcmRTcHJpdGUoZnJvbS5udW1iZXIsIGZyb20ueCwgZnJvbS55KTtcbiAgICAgICAgdG8uZ2V0UGFyZW50KCkuYWRkQ2hpbGQoY2FyZFNwcml0ZSk7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IG1vdmVGaW5pc2ggPSBjYy5jYWxsRnVuYyh0aGlzLmNhbGxGdW5jQ2FyZDIsIHRoaXMsIFtjYXJkU3ByaXRlLCB0bywgaXNTaG93QW5pbV0pO1xuICAgICAgICBsZXQgbW92ZTEgPSBjYy5tb3ZlVG8oMC4zLCBjYy52Mih0by54LCB0by55KSk7XG4gICAgICAgIGlmIChpIDwgMSkge1xuICAgICAgICAgICAgbW92ZTEgPSBjYy5tb3ZlVG8oMC4xLCBjYy52Mih0by54LCB0by55KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA8IDIpIHtcbiAgICAgICAgICAgIG1vdmUxLmVhc2luZyhjYy5lYXNlQmFja0luKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPCAzKSB7XG4gICAgICAgICAgICBtb3ZlMS5lYXNpbmcoY2MuZWFzZUJhY2tPdXQoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA8IDQpIHtcbiAgICAgICAgICAgIG1vdmUxLmVhc2luZyhjYy5lYXNlQmFja0luT3V0KCkpO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPCA1KSB7XG4gICAgICAgICAgICBtb3ZlMSA9IGNjLmp1bXBUbygwLjMsIGNjLnYyKHRvLngsIHRvLnkpLCBHYW1lQ29uZmlnLkNBUkRfV0lEVEgsIDIpO1xuICAgICAgICB9XG4gICAgICAgIGNhcmRTcHJpdGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKG1vdmUxLCBtb3ZlRmluaXNoKSk7XG4gICAgfSxcbiAgICBjYWxsRnVuY0NhcmQyOiBmdW5jdGlvbiAoc2VuZGVyLCB0bykge1xuICAgICAgICB0b1sxXS5DYXJkU2hvdygpO1xuICAgICAgICBpZiAodG9bMl0pIHtcbiAgICAgICAgICAgIHRvWzBdLm51bWJlciA9IHRvWzFdLm51bWJlcjtcbiAgICAgICAgICAgIHRvWzBdLkNhcmRTaG93KCk7XG4gICAgICAgICAgICBsZXQgc2NhbGUgPSBjYy5zY2FsZUJ5KDAuMDIsIDEuMTUpO1xuICAgICAgICAgICAgbGV0IG1vdmVGaW5pc2ggPSBjYy5jYWxsRnVuYyh0aGlzLmNhbGxGdW5jQ2FyZDMsIHRoaXMsIHRvWzBdKTtcbiAgICAgICAgICAgIHRvWzBdLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShzY2FsZSwgc2NhbGUucmV2ZXJzZSgpLCBtb3ZlRmluaXNoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b1swXS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNhbGxGdW5jQ2FyZDM6IGZ1bmN0aW9uIChzZW5kZXIsIGNhcmQpIHtcbiAgICAgICAgY2FyZC5kZXN0cm95KCk7XG4gICAgfSxcbiAgICBjcmVhdGVQb3BTdGFyQW5pbShmcm9tLCBkVGltZSkgLy/liJvlu7rljaHniYfniIbngrjnibnmlYhcbiAgICB7XG4gICAgICAgIGxldCBtb3ZlRmluaXNoMiA9IGNjLmNhbGxGdW5jKHRoaXMuY2FsbEZ1bmNQb3BTdGFyQW5pbSwgdGhpcywgZnJvbSk7XG4gICAgICAgIC8vIGZyb20ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShkVGltZSksIG1vdmVGaW5pc2gyLCBjYy5oaWRlKCkpKTtcbiAgICAgICAgZnJvbS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKGRUaW1lKSwgbW92ZUZpbmlzaDIsIGNjLmZhZGVPdXQoKSkpO1xuICAgIH0sXG4gICAgY2FsbEZ1bmNQb3BTdGFyQW5pbShzZW5kZXIsIGZyb20pIC8v5Y2h54mH54iG54K454m55pWI55uR5ZCsXG4gICAge1xuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDApO1xuICAgICAgICBsZXQgZW1pdHRlck5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBlbWl0dGVyTm9kZS5zZXRQb3NpdGlvbihmcm9tLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICBsZXQgbW92ZV9lbWl0dGVyID0gZW1pdHRlck5vZGUuYWRkQ29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKTtcbiAgICAgICAgLy8gbGV0IG1vdmVfZW1pdHRlciA9IFBhcnRpY2xlRXhwbG9zaW9uLmNyZWF0ZVdpdGhUb3RhbFBhcnRpY2xlcygzMCk7XG4gICAgICAgIC8vIGxldCBtb3ZlX2VtaXR0ZXIgPSBuZXcgY2MuUGFydGljbGVTeXN0ZW0oMzApO1xuICAgICAgICBzd2l0Y2ggKGZyb20uZ2V0TnVtYmVyKCkpIHtcbiAgICAgICAgICAgIC8vIGNhc2UgMjpcbiAgICAgICAgICAgIC8vICAgICBtb3ZlX2VtaXR0ZXIudGV4dHVyZSA9IFwicmVzL3Jhdy1hc3NldHMvcmVzb3VyY2VzL3BhcnRpY2Fscy9ub2UvcGFydGljYWxfdGV4X3llbGxvd1wiO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSA0OlxuICAgICAgICAgICAgLy8gICAgIG1vdmVfZW1pdHRlci50ZXh0dXJlID0gXCJyZXMvcmF3LWFzc2V0cy9yZXNvdXJjZXMvcGFydGljYWxzL25vZS9wYXJ0aWNhbF90ZXhfYmx1ZVwiO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSA4OlxuICAgICAgICAgICAgLy8gICAgIG1vdmVfZW1pdHRlci50ZXh0dXJlID0gXCJyZXMvcmF3LWFzc2V0cy9yZXNvdXJjZXMvcGFydGljYWxzL25vZS9wYXJ0aWNhbF90ZXhfZ3JlZW5cIjtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGNhc2UgMTY6XG4gICAgICAgICAgICAvLyAgICAgbW92ZV9lbWl0dGVyLnRleHR1cmUgPSBcInJlcy9yYXctYXNzZXRzL3Jlc291cmNlcy9wYXJ0aWNhbHMvbm9lL3BhcnRpY2FsX3RleF9yZWRcIjtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGNhc2UgMzI6XG4gICAgICAgICAgICAvLyAgICAgbW92ZV9lbWl0dGVyLnRleHR1cmUgPSBcInJlcy9yYXctYXNzZXRzL3Jlc291cmNlcy9wYXJ0aWNhbHMvbm9lL3BhcnRpY2FsX3RleF9wdXJwbGVcIjtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBtb3ZlX2VtaXR0ZXIudGV4dHVyZSA9IFwicG9wX2dhbWUvbjZcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBtb3ZlX2VtaXR0ZXIudGV4dHVyZSA9IFwicG9wX2dhbWUvbjZcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBtb3ZlX2VtaXR0ZXIudGV4dHVyZSA9IFwicG9wX2dhbWUvbjZcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgbW92ZV9lbWl0dGVyLnRleHR1cmUgPSBcInBvcF9nYW1lL242XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgIG1vdmVfZW1pdHRlci50ZXh0dXJlID0gXCJwb3BfZ2FtZS9uNlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIG1vdmVfZW1pdHRlci5zdGFydENvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgbW92ZV9lbWl0dGVyLnN0YXJ0Q29sb3JWYXIgPSBjYy5jb2xvcigwLCAwLCAwLCAwKTtcbiAgICAgICAgbW92ZV9lbWl0dGVyLmVuZENvbG9yVmFyID0gY2MuY29sb3IoMCwgMCwgMCwgMCk7XG4gICAgICAgIG1vdmVfZW1pdHRlci5lbmRDb2xvciA9IG1vdmVfZW1pdHRlci5zdGFydENvbG9yO1xuICAgICAgICBtb3ZlX2VtaXR0ZXIuYXV0b1JlbW92ZU9uRmluaXNoID0gdHJ1ZTtcblxuICAgICAgICBtb3ZlX2VtaXR0ZXIuZHVyYXRpb24gPSAwLjE7XG4gICAgICAgIG1vdmVfZW1pdHRlci5lbWlzc2lvblJhdGUgPSAxMDA7XG4gICAgICAgIG1vdmVfZW1pdHRlci5saWZlID0gMjtcbiAgICAgICAgbW92ZV9lbWl0dGVyLmxpZmVWYXIgPSAwLjU7XG4gICAgICAgIG1vdmVfZW1pdHRlci5hbmdsZSA9IDkwO1xuICAgICAgICBtb3ZlX2VtaXR0ZXIuYW5nbGVWYXIgPSAzNjA7XG4gICAgICAgIG1vdmVfZW1pdHRlci5jdXN0b20gPSB0cnVlO1xuICAgICAgICBtb3ZlX2VtaXR0ZXIucGxheU9uTG9hZCA9IHRydWU7XG4gICAgICAgIGZyb20uZ2V0UGFyZW50KCkuYWRkQ2hpbGQoZW1pdHRlck5vZGUpO1xuICAgIH0sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFuaW1MYXllclRvb2w7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/RankingListView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31b56tJWjpPlrcCAXTwiyUM', 'RankingListView');
// Script/panel/RankingListView.js

"use strict";

var GameConfig = require("GameConfig");

var AnimLayerTool = require("AnimLayerTool");

var GameTools = require("GameTools");

var GameUiTools = require("GameUiTools");

cc.Class({
  "extends": cc.Component,
  // name: "RankingListView",
  properties: {
    backButton: cc.Node,
    // shareButton: cc.Node,
    rankingScrollView: cc.Sprite,
    //显示排行榜
    shareTicket: null
  },
  onLoad: function onLoad() {},
  start: function start() {
    GameUiTools.setButtonClickEvents(this, this.backButton, "backButtonFunc"); // GameUiTools.setButtonClickEvents(this, this.shareButton, "shareButtonFunc");

    if (this.shareTicket != null) {
      var shareNode = new cc.Node();
      shareNode.addComponent(cc.Label).string = "群排行";
      shareNode.setPosition(-260, 503);
      this.node.addChild(shareNode);
    }

    if (CC_WECHATGAME) {
      if (window.sharedCanvas != undefined) {
        this.tex = new cc.Texture2D();
        window.sharedCanvas.width = 720;
        window.sharedCanvas.height = 1280; // 发消息给子域

        if (this.shareTicket != null) {
          window.wx.postMessage({
            messageType: 5,
            MAIN_MENU_NUM: GameConfig.MAIN_MENU_NUM,
            shareTicket: this.shareTicket
          });
        } else {
          window.wx.postMessage({
            messageType: 1,
            MAIN_MENU_NUM: GameConfig.MAIN_MENU_NUM
          });
        }
      }
    } else {
      var gameTypeNode = new cc.Node();
      gameTypeNode.addComponent(cc.Label).string = "暂无排行榜数据";
      this.node.addChild(gameTypeNode);
      cc.log("获取排行榜数据。" + GameConfig.MAIN_MENU_NUM);
    }
  },
  shareButtonFunc: function shareButtonFunc(event) {
    GameTools.playSimpleAudioEngine(4);
    setTimeout(function () {
      GameTools.sharePicture("shareTicket");
    }, 100);
  },
  backButtonFunc: function backButtonFunc(event) {
    GameTools.playSimpleAudioEngine(0);
    this.node.destroy();
  },
  // 刷新子域的纹理
  _updateSubDomainCanvas: function _updateSubDomainCanvas() {
    if (CC_WECHATGAME) {
      if (window.sharedCanvas != undefined) {
        this.tex.initWithElement(window.sharedCanvas);
        this.tex.handleLoadedTexture();
        this.rankingScrollView.spriteFrame = new cc.SpriteFrame(this.tex);
      }
    }
  },
  update: function update() {
    this._updateSubDomainCanvas();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcUmFua2luZ0xpc3RWaWV3LmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiQW5pbUxheWVyVG9vbCIsIkdhbWVUb29scyIsIkdhbWVVaVRvb2xzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiYWNrQnV0dG9uIiwiTm9kZSIsInJhbmtpbmdTY3JvbGxWaWV3IiwiU3ByaXRlIiwic2hhcmVUaWNrZXQiLCJvbkxvYWQiLCJzdGFydCIsInNldEJ1dHRvbkNsaWNrRXZlbnRzIiwic2hhcmVOb2RlIiwiYWRkQ29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJzZXRQb3NpdGlvbiIsIm5vZGUiLCJhZGRDaGlsZCIsIkNDX1dFQ0hBVEdBTUUiLCJ3aW5kb3ciLCJzaGFyZWRDYW52YXMiLCJ1bmRlZmluZWQiLCJ0ZXgiLCJUZXh0dXJlMkQiLCJ3aWR0aCIsImhlaWdodCIsInd4IiwicG9zdE1lc3NhZ2UiLCJtZXNzYWdlVHlwZSIsIk1BSU5fTUVOVV9OVU0iLCJnYW1lVHlwZU5vZGUiLCJsb2ciLCJzaGFyZUJ1dHRvbkZ1bmMiLCJldmVudCIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsInNldFRpbWVvdXQiLCJzaGFyZVBpY3R1cmUiLCJiYWNrQnV0dG9uRnVuYyIsImRlc3Ryb3kiLCJfdXBkYXRlU3ViRG9tYWluQ2FudmFzIiwiaW5pdFdpdGhFbGVtZW50IiwiaGFuZGxlTG9hZGVkVGV4dHVyZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxhQUFhLEdBQUdELE9BQU8sQ0FBQyxlQUFELENBQTNCOztBQUNBLElBQUlFLFNBQVMsR0FBR0YsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUcsV0FB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O0FBMkRMO0FBQ0FDLEVBQUFBLHNCQTVESyxvQ0E0RG9CO0FBQ3JCLFFBQUlyQixhQUFKLEVBQW1CO0FBQ2YsVUFBSUMsTUFBTSxDQUFDQyxZQUFQLElBQXVCQyxTQUEzQixFQUFzQztBQUNsQyxhQUFLQyxHQUFMLENBQVNrQixlQUFULENBQXlCckIsTUFBTSxDQUFDQyxZQUFoQztBQUNBLGFBQUtFLEdBQUwsQ0FBU21CLG1CQUFUO0FBQ0EsYUFBS3BDLGlCQUFMLENBQXVCcUMsV0FBdkIsR0FBcUMsSUFBSTNDLEVBQUUsQ0FBQzRDLFdBQVAsQ0FBbUIsS0FBS3JCLEdBQXhCLENBQXJDO0FBQ0g7QUFDSjtBQUNKLEdBcEVJO0FBcUVMc0IsRUFBQUEsTUFyRUssb0JBcUVJO0FBQ0wsU0FBS0wsc0JBQUw7QUFDSDtBQXZFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEFuaW1MYXllclRvb2wgPSByZXF1aXJlKFwiQW5pbUxheWVyVG9vbFwiKTtcbnZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xudmFyIEdhbWVVaVRvb2xzID0gcmVxdWlyZShcIkdhbWVVaVRvb2xzXCIpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICAvLyBuYW1lOiBcIlJhbmtpbmdMaXN0Vmlld1wiLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYmFja0J1dHRvbjogY2MuTm9kZSxcbiAgICAgICAgLy8gc2hhcmVCdXR0b246IGNjLk5vZGUsXG4gICAgICAgIHJhbmtpbmdTY3JvbGxWaWV3OiBjYy5TcHJpdGUsLy/mmL7npLrmjpLooYzmppxcbiAgICAgICAgc2hhcmVUaWNrZXQ6IG51bGwsXG4gICAgfSxcbiAgICBvbkxvYWQoKSB7XG4gICAgfSxcbiAgICBzdGFydCgpIHtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5iYWNrQnV0dG9uLCBcImJhY2tCdXR0b25GdW5jXCIpO1xuICAgICAgICAvLyBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLnNoYXJlQnV0dG9uLCBcInNoYXJlQnV0dG9uRnVuY1wiKTtcbiAgICAgICAgaWYgKHRoaXMuc2hhcmVUaWNrZXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHNoYXJlTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgICAgICBzaGFyZU5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIue+pOaOkuihjFwiO1xuICAgICAgICAgICAgc2hhcmVOb2RlLnNldFBvc2l0aW9uKC0yNjAsIDUwMyk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoc2hhcmVOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zaGFyZWRDYW52YXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXggPSBuZXcgY2MuVGV4dHVyZTJEKCk7XG4gICAgICAgICAgICAgICAgd2luZG93LnNoYXJlZENhbnZhcy53aWR0aCA9IDcyMDtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2hhcmVkQ2FudmFzLmhlaWdodCA9IDEyODA7XG4gICAgICAgICAgICAgICAgLy8g5Y+R5raI5oGv57uZ5a2Q5Z+fXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hhcmVUaWNrZXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cud3gucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVR5cGU6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICBNQUlOX01FTlVfTlVNOiBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVRpY2tldDogdGhpcy5zaGFyZVRpY2tldFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cud3gucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVR5cGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBNQUlOX01FTlVfTlVNOiBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBnYW1lVHlwZU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgZ2FtZVR5cGVOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLmmoLml6DmjpLooYzmppzmlbDmja5cIjtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChnYW1lVHlwZU5vZGUpO1xuICAgICAgICAgICAgY2MubG9nKFwi6I635Y+W5o6S6KGM5qac5pWw5o2u44CCXCIgKyBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNoYXJlQnV0dG9uRnVuYzogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoNCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgR2FtZVRvb2xzLnNoYXJlUGljdHVyZShcInNoYXJlVGlja2V0XCIpO1xuICAgICAgICB9LCAxMDApO1xuICAgIH0sXG5cbiAgICBiYWNrQnV0dG9uRnVuYzogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfSxcblxuICAgIC8vIOWIt+aWsOWtkOWfn+eahOe6ueeQhlxuICAgIF91cGRhdGVTdWJEb21haW5DYW52YXMoKSB7XG4gICAgICAgIGlmIChDQ19XRUNIQVRHQU1FKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnNoYXJlZENhbnZhcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRleC5pbml0V2l0aEVsZW1lbnQod2luZG93LnNoYXJlZENhbnZhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXguaGFuZGxlTG9hZGVkVGV4dHVyZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucmFua2luZ1Njcm9sbFZpZXcuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGhpcy50ZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN1YkRvbWFpbkNhbnZhcygpO1xuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/GameHelp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92d33tkzdhLxrs4dxYAfPUo', 'GameHelp');
// Script/panel/GameHelp.js

"use strict";

var GameConfig = require("GameConfig");

var GameTools = require("GameTools");

var GameUiTools = require("GameUiTools");

cc.Class({
  "extends": cc.Component,
  properties: {
    backColor: cc.Node,
    backButton: cc.Node //返回按钮

  },
  onLoad: function onLoad() {
    GameUiTools.setButtonClickEvents(this, this.backButton, "buttonFunc");
  },
  buttonFunc: function buttonFunc(event) {
    var button = event.target;

    if (this.backButton == button) {
      GameTools.playSimpleAudioEngine(0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcR2FtZUhlbHAuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVG9vbHMiLCJHYW1lVWlUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmFja0NvbG9yIiwiTm9kZSIsImJhY2tCdXR0b24iLCJvbkxvYWQiLCJzZXRCdXR0b25DbGlja0V2ZW50cyIsImJ1dHRvbkZ1bmMiLCJldmVudCIsImJ1dHRvbiIsInRhcmdldCIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsIm5vZGUiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxhQUFELENBQXpCOztBQUNBRyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUVMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFFSixFQUFFLENBQUNLLElBRE47QUFFUkMsSUFBQUEsVUFBVSxFQUFFTixFQUFFLENBQUNLLElBRlAsQ0FFYTs7QUFGYixHQUZQO0FBT0xFLEVBQUFBLE1BUEssb0JBT0k7QUFDTFIsSUFBQUEsV0FBVyxDQUFDUyxvQkFBWixDQUFpQyxJQUFqQyxFQUF1QyxLQUFLRixVQUE1QyxFQUF3RCxZQUF4RDtBQUNILEdBVEk7QUFXTEcsRUFBQUEsVUFBVSxFQUFFLG9CQUFVQyxLQUFWLEVBQWlCO0FBQ3pCLFFBQUlDLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxNQUFuQjs7QUFDQSxRQUFJLEtBQUtOLFVBQUwsSUFBbUJLLE1BQXZCLEVBQStCO0FBQzNCYixNQUFBQSxTQUFTLENBQUNlLHFCQUFWLENBQWdDLENBQWhDO0FBQ0EsV0FBS0MsSUFBTCxDQUFVQyxPQUFWO0FBQ0g7O0FBQ0QsV0FBTyxJQUFQO0FBQ0g7QUFsQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcbnZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xudmFyIEdhbWVVaVRvb2xzID0gcmVxdWlyZShcIkdhbWVVaVRvb2xzXCIpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGJhY2tDb2xvcjogY2MuTm9kZSxcbiAgICAgICAgYmFja0J1dHRvbjogY2MuTm9kZSwgLy/ov5Tlm57mjInpkq5cbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLmJhY2tCdXR0b24sIFwiYnV0dG9uRnVuY1wiKTtcbiAgICB9LFxuXG4gICAgYnV0dG9uRnVuYzogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICh0aGlzLmJhY2tCdXR0b24gPT0gYnV0dG9uKSB7XG4gICAgICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDApO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/ShowMessage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38b70CDgDNDRrOc8pj7+Z2r', 'ShowMessage');
// Script/panel/ShowMessage.js

"use strict";

var GameConfig = require("GameConfig");

var GameTools = require("GameTools");

var GameUiTools = require("GameUiTools");

cc.Class({
  "extends": cc.Component,
  properties: {
    messageLabel: cc.Label,
    backButton: cc.Node,
    //返回按钮
    toastType: 0
  },
  start: function start() {
    var toastMessage = null;

    if (this.toastType == 0) {
      toastMessage = "欢迎进入浪漫2048";
    } else if (this.toastType == 1) {
      toastMessage = "该功能苦逼的程序员还在努力开发中，欢迎留言反馈！";
    } else if (this.toastType == 2) {
      toastMessage = "积分不足！！！您可以玩游戏来获取积分，还可以每天登录赚取积分！";
    } else if (this.toastType == 3) {
      toastMessage = "最多只能后退3步！！！";
    } else if (this.toastType == 4) {
      toastMessage = "只能后退1步！！！";
    } else if (this.toastType == 5) {
      toastMessage = "该模式暂无帮助，谢谢！！！";
    } else if (this.toastType == 6) {
      toastMessage = "积分不足！！！您需要300积分来复活。";
    } else if (this.toastType == 7) {
      toastMessage = "恭喜充值成功，感谢您对浪漫2048的支持！！！";
    } else if (this.toastType == 8) {
      toastMessage = "充值失败，谢谢支持！！！";
    } else if (this.toastType == 9) {
      toastMessage = "今天首次进入奖励100积分，每天首次进入游戏都会获取积分哟！！！";
    } else if (this.toastType == 10) {
      toastMessage = "没有找到应用市场";
    } else if (this.toastType == 11) {
      toastMessage = "恭喜获得奖励10积分，感谢您对浪漫2048的支持";
    } else if (this.toastType == 12) {
      toastMessage = "您今天已经领过奖励了，谢谢";
    } else if (this.toastType == 13) {
      toastMessage = "聚合模式暂无自动功能，谢谢";
    } else if (this.toastType == 14) {
      toastMessage = "恭喜获得奖励100积分，感谢您对浪漫2048的支持";
    } else if (this.toastType == 15) {
      toastMessage = "经典模式不能使用道具功能，您可以去试试其它玩法哟！";
    } else if (this.toastType == 16) {
      toastMessage = "上传得分失败，请检查网络";
    } else if (this.toastType == 17) {
      toastMessage = "排行榜数据失败，请检查网络";
    } else if (this.toastType == 18) {
      toastMessage = "上传得分成功，赶紧去看看排行榜吧";
    } else if (this.toastType == 19) {
      toastMessage = "视频奖励";
    } else if (this.toastType == 20) {
      toastMessage = "保存图片成功";
    } else if (this.toastType == 21) {
      toastMessage = "保存图片失败";
    } else if (this.toastType == 22) {
      toastMessage = "点击需要消除的爱心即可消除该爱心！";
    } else if (this.toastType == 23) {
      toastMessage = "点击需要换位的爱心将会选中该爱心，继续点击该爱心周边的爱心即可实现爱心的换位！";
    } else if (this.toastType == 24) {
      toastMessage = "点击需要缩小数字的爱心即可将该爱心的数字缩小2倍";
    } else if (this.toastType == 25) {
      toastMessage = "点击需要消除的爱心即可消除与该爱心同横排的爱心！";
    } else if (this.toastType == 26) {
      toastMessage = "点击需要消除的爱心即可消除与该爱心同竖排的爱心！";
    } else if (this.toastType == 27) {
      toastMessage = "视频播放失败，谢谢！！";
    } else if (this.toastType == 28) {
      toastMessage = "滑动屏幕来移动小方块，两个数字一样的小方块相撞时就会相加合成一个方块，每次操作之后会在空白的方格处随机生成一个2或4的方块，最终得到一个2048的方块就算胜利了，如果16个格子全部填满无法移动的话则游戏结束。";
    } else if (this.toastType == 29) {
      toastMessage = "点击空白爱心，爱心会向点击的位置靠拢，当两个数字相同的爱心相遇时就会合并为两数字之和，全部填满无法移动的话则游戏结束。";
    } else if (this.toastType == 30) {
      toastMessage = "选中连接在一起的相同数字，点击的数字会聚合为更大的数字，其它数字则消除，完成通关所需得分即可进入下一关，否则游戏结束。";
    } else if (this.toastType == 31) {
      toastMessage = "选中连接在一起的相同数字，选中的数字将会被消除，完成通关所需得分即可进入下一关，否则游戏结束。";
    } else {
      toastMessage = this.toastType;
    }

    this.messageLabel.string = toastMessage; // GameUiTools.setButtonClickEvents(this, this.backButton, "backButtonFunc");
    // GameUiTools.setButtonClickEvents(this, this.node, "backButtonFunc");
    // if (CC_WECHATGAME) {
    //     this.node.destroy();
    //     wx.showModal({title: "浪漫提示", content: toastMessage,showCancel:false});
    // }
  },
  backButtonFunc: function backButtonFunc(event) {
    GameTools.playSimpleAudioEngine(0);
    this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcU2hvd01lc3NhZ2UuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVG9vbHMiLCJHYW1lVWlUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibWVzc2FnZUxhYmVsIiwiTGFiZWwiLCJiYWNrQnV0dG9uIiwiTm9kZSIsInRvYXN0VHlwZSIsInN0YXJ0IiwidG9hc3RNZXNzYWdlIiwic3RyaW5nIiwiYmFja0J1dHRvbkZ1bmMiLCJldmVudCIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsIm5vZGUiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxhQUFELENBQXpCOztBQUNBRyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsWUFBWSxFQUFFSixFQUFFLENBQUNLLEtBRFQ7QUFFUkMsSUFBQUEsVUFBVSxFQUFFTixFQUFFLENBQUNPLElBRlA7QUFFWTtBQUNwQkMsSUFBQUEsU0FBUyxFQUFFO0FBSEgsR0FIUDtBQVNMQyxFQUFBQSxLQVRLLG1CQVNHO0FBQ0osUUFBSUMsWUFBWSxHQUFHLElBQW5COztBQUNBLFFBQUksS0FBS0YsU0FBTCxJQUFrQixDQUF0QixFQUF5QjtBQUNyQkUsTUFBQUEsWUFBWSxHQUFHLFlBQWY7QUFDSCxLQUZELE1BRU8sSUFBSSxLQUFLRixTQUFMLElBQWtCLENBQXRCLEVBQXlCO0FBQzVCRSxNQUFBQSxZQUFZLEdBQUcsMEJBQWY7QUFDSCxLQUZNLE1BRUEsSUFBSSxLQUFLRixTQUFMLElBQWtC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RSxNQUFBQSxZQUFZLEdBQUcsMEJBQWY7QUFDSCxLQUZNLE1BRUEsSUFBSSxLQUFLRixTQUFMLElBQWtCLEVBQXRCLEVBQTBCO0FBQzdCRSxNQUFBQSxZQUFZLEdBQUcsMEJBQWY7QUFDSCxLQUZNLE1BRUEsSUFBSSxLQUFLRixTQUFMLElBQWtCLEVBQXRCLEVBQTBCO0FBQzdCRSxNQUFBQSxZQUFZLEdBQUcsYUFBZjtBQUNILEtBRk0sTUFFQSxJQUFJLEtBQUtGLFNBQUwsSUFBa0IsRUFBdEIsRUFBMEI7QUFDN0JFLE1BQUFBLFlBQVksR0FBRywwR0FBZjtBQUNILEtBRk0sTUFFQSxJQUFJLEtBQUtGLFNBQUwsSUFBa0IsRUFBdEIsRUFBMEI7QUFDN0JFLE1BQUFBLFlBQVksR0FBRyw2REFBZjtBQUNILEtBRk0sTUFFQSxJQUFJLEtBQUtGLFNBQUwsSUFBa0IsRUFBdEIsRUFBMEI7QUFDN0JFLE1BQUFBLFlBQVksR0FBRyw2REFBZjtBQUNILEtBRk0sTUFFQSxJQUFJLEtBQUtGLFNBQUwsSUFBa0IsRUFBdEIsRUFBMEI7QUFDN0JFLE1BQUFBLFlBQVksR0FBRyxpREFBZjtBQUNILEtBRk0sTUFFRDtBQUNGQSxNQUFBQSxZQUFZLEdBQUcsS0FBS0YsU0FBcEI7QUFDSDs7QUFDRCxTQUFLSixZQUFMLENBQWtCTyxNQUFsQixHQUEyQkQsWUFBM0IsQ0FyRUksQ0F1RUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsR0F0Rkk7QUF3RkxFLEVBQUFBLGNBQWMsRUFBRSx3QkFBVUMsS0FBVixFQUFpQjtBQUM3QmYsSUFBQUEsU0FBUyxDQUFDZ0IscUJBQVYsQ0FBZ0MsQ0FBaEM7QUFDQSxTQUFLQyxJQUFMLENBQVVDLE9BQVY7QUFDSDtBQTNGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBtZXNzYWdlTGFiZWw6IGNjLkxhYmVsLFxuICAgICAgICBiYWNrQnV0dG9uOiBjYy5Ob2RlLC8v6L+U5Zue5oyJ6ZKuXG4gICAgICAgIHRvYXN0VHlwZTogMCxcbiAgICB9LFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGxldCB0b2FzdE1lc3NhZ2UgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy50b2FzdFR5cGUgPT0gMCkge1xuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLmrKLov47ov5vlhaXmtarmvKsyMDQ4XCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMSkge1xuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLor6Xlip/og73oi6bpgLznmoTnqIvluo/lkZjov5jlnKjliqrlipvlvIDlj5HkuK3vvIzmrKLov47nlZnoqIDlj43ppojvvIFcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyKSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuenr+WIhuS4jei2s++8ge+8ge+8geaCqOWPr+S7peeOqea4uOaIj+adpeiOt+WPluenr+WIhu+8jOi/mOWPr+S7peavj+WkqeeZu+W9lei1muWPluenr+WIhu+8gVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDMpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5pyA5aSa5Y+q6IO95ZCO6YCAM+atpe+8ge+8ge+8gVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDQpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5Y+q6IO95ZCO6YCAMeatpe+8ge+8ge+8gVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDUpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi6K+l5qih5byP5pqC5peg5biu5Yqp77yM6LCi6LCi77yB77yB77yBXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gNikge1xuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLnp6/liIbkuI3otrPvvIHvvIHvvIHmgqjpnIDopoEzMDDnp6/liIbmnaXlpI3mtLvjgIJcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSA3KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuaBreWWnOWFheWAvOaIkOWKn++8jOaEn+iwouaCqOWvuea1qua8qzIwNDjnmoTmlK/mjIHvvIHvvIHvvIFcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSA4KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuWFheWAvOWksei0pe+8jOiwouiwouaUr+aMge+8ge+8ge+8gVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDkpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5LuK5aSp6aaW5qyh6L+b5YWl5aWW5YqxMTAw56ev5YiG77yM5q+P5aSp6aaW5qyh6L+b5YWl5ri45oiP6YO95Lya6I635Y+W56ev5YiG5ZOf77yB77yB77yBXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTApIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5rKh5pyJ5om+5Yiw5bqU55So5biC5Zy6XCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTEpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5oGt5Zac6I635b6X5aWW5YqxMTDnp6/liIbvvIzmhJ/osKLmgqjlr7nmtarmvKsyMDQ455qE5pSv5oyBXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTIpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5oKo5LuK5aSp5bey57uP6aKG6L+H5aWW5Yqx5LqG77yM6LCi6LCiXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTMpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi6IGa5ZCI5qih5byP5pqC5peg6Ieq5Yqo5Yqf6IO977yM6LCi6LCiXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTQpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5oGt5Zac6I635b6X5aWW5YqxMTAw56ev5YiG77yM5oSf6LCi5oKo5a+55rWq5ryrMjA0OOeahOaUr+aMgVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDE1KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIue7j+WFuOaooeW8j+S4jeiDveS9v+eUqOmBk+WFt+WKn+iDve+8jOaCqOWPr+S7peWOu+ivleivleWFtuWug+eOqeazleWTn++8gVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDE2KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuS4iuS8oOW+l+WIhuWksei0pe+8jOivt+ajgOafpee9kee7nFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDE3KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuaOkuihjOamnOaVsOaNruWksei0pe+8jOivt+ajgOafpee9kee7nFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDE4KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuS4iuS8oOW+l+WIhuaIkOWKn++8jOi1tue0p+WOu+eci+eci+aOkuihjOamnOWQp1wiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDE5KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuinhumikeWlluWKsVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDIwKSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuS/neWtmOWbvueJh+aIkOWKn1wiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDIxKSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuS/neWtmOWbvueJh+Wksei0pVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDIyKSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIueCueWHu+mcgOimgea2iOmZpOeahOeIseW/g+WNs+WPr+a2iOmZpOivpeeIseW/g++8gVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDIzKSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIueCueWHu+mcgOimgeaNouS9jeeahOeIseW/g+WwhuS8mumAieS4reivpeeIseW/g++8jOe7p+e7reeCueWHu+ivpeeIseW/g+WRqOi+ueeahOeIseW/g+WNs+WPr+WunueOsOeIseW/g+eahOaNouS9je+8gVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDI0KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIueCueWHu+mcgOimgee8qeWwj+aVsOWtl+eahOeIseW/g+WNs+WPr+WwhuivpeeIseW/g+eahOaVsOWtl+e8qeWwjzLlgI1cIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyNSkge1xuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLngrnlh7vpnIDopoHmtojpmaTnmoTniLHlv4PljbPlj6/mtojpmaTkuI7or6XniLHlv4PlkIzmqKrmjpLnmoTniLHlv4PvvIFcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyNikge1xuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLngrnlh7vpnIDopoHmtojpmaTnmoTniLHlv4PljbPlj6/mtojpmaTkuI7or6XniLHlv4PlkIznq5bmjpLnmoTniLHlv4PvvIFcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyNykge1xuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLop4bpopHmkq3mlL7lpLHotKXvvIzosKLosKLvvIHvvIFcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyOCkge1xuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLmu5HliqjlsY/luZXmnaXnp7vliqjlsI/mlrnlnZfvvIzkuKTkuKrmlbDlrZfkuIDmoLfnmoTlsI/mlrnlnZfnm7jmkp7ml7blsLHkvJrnm7jliqDlkIjmiJDkuIDkuKrmlrnlnZfvvIzmr4/mrKHmk43kvZzkuYvlkI7kvJrlnKjnqbrnmb3nmoTmlrnmoLzlpITpmo/mnLrnlJ/miJDkuIDkuKoy5oiWNOeahOaWueWdl++8jOacgOe7iOW+l+WIsOS4gOS4qjIwNDjnmoTmlrnlnZflsLHnrpfog5zliKnkuobvvIzlpoLmnpwxNuS4quagvOWtkOWFqOmDqOWhq+a7oeaXoOazleenu+WKqOeahOivneWImea4uOaIj+e7k+adn+OAglwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDI5KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIueCueWHu+epuueZveeIseW/g++8jOeIseW/g+S8muWQkeeCueWHu+eahOS9jee9rumdoOaLou+8jOW9k+S4pOS4quaVsOWtl+ebuOWQjOeahOeIseW/g+ebuOmBh+aXtuWwseS8muWQiOW5tuS4uuS4pOaVsOWtl+S5i+WSjO+8jOWFqOmDqOWhq+a7oeaXoOazleenu+WKqOeahOivneWImea4uOaIj+e7k+adn+OAglwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDMwKSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIumAieS4rei/nuaOpeWcqOS4gOi1t+eahOebuOWQjOaVsOWtl++8jOeCueWHu+eahOaVsOWtl+S8muiBmuWQiOS4uuabtOWkp+eahOaVsOWtl++8jOWFtuWug+aVsOWtl+WImea2iOmZpO+8jOWujOaIkOmAmuWFs+aJgOmcgOW+l+WIhuWNs+WPr+i/m+WFpeS4i+S4gOWFs++8jOWQpuWImea4uOaIj+e7k+adn+OAglwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDMxKSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIumAieS4rei/nuaOpeWcqOS4gOi1t+eahOebuOWQjOaVsOWtl++8jOmAieS4reeahOaVsOWtl+WwhuS8muiiq+a2iOmZpO+8jOWujOaIkOmAmuWFs+aJgOmcgOW+l+WIhuWNs+WPr+i/m+WFpeS4i+S4gOWFs++8jOWQpuWImea4uOaIj+e7k+adn+OAglwiO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSB0aGlzLnRvYXN0VHlwZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1lc3NhZ2VMYWJlbC5zdHJpbmcgPSB0b2FzdE1lc3NhZ2U7XG5cbiAgICAgICAgLy8gR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5iYWNrQnV0dG9uLCBcImJhY2tCdXR0b25GdW5jXCIpO1xuICAgICAgICAvLyBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLm5vZGUsIFwiYmFja0J1dHRvbkZ1bmNcIik7XG4gICAgICAgIC8vIGlmIChDQ19XRUNIQVRHQU1FKSB7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAvLyAgICAgd3guc2hvd01vZGFsKHt0aXRsZTogXCLmtarmvKvmj5DnpLpcIiwgY29udGVudDogdG9hc3RNZXNzYWdlLHNob3dDYW5jZWw6ZmFsc2V9KTtcbiAgICAgICAgLy8gfVxuICAgIH0sXG5cbiAgICBiYWNrQnV0dG9uRnVuYzogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d75bPsk+FALqemqL/20DvJ', 'GameData');
// Script/GameData.js

"use strict";

var GameConfig = require("GameConfig");

var GameTools = require("GameTools");

var GameData = {
  scoreCard0: [],
  //记录当前位置
  scoreCard1: [],
  //记录第一次位置
  scoreCard2: [],
  //记录第二次位置
  scoreCard3: [],
  //记录第三次位置
  score0: 0,
  // 记录当前得分
  score1: 0,
  // 记录第一次得分
  score2: 0,
  // 记录第二次得分
  score3: 0,
  // 记录第三次得分
  heightScore: 0,
  // 最高分
  bestNum: 2,
  //最大数字
  initData: function initData() {
    this.scoreCard0 = new Array();
    this.scoreCard1 = new Array();
    this.scoreCard2 = new Array();
    this.scoreCard3 = new Array();

    for (var i = 0; i < GameConfig.CAED_LINES; i++) {
      this.scoreCard0[i] = Array();
      this.scoreCard1[i] = Array();
      this.scoreCard2[i] = Array();
      this.scoreCard3[i] = Array();
    }

    this.score0 = 0; // 记录当前得分

    this.score1 = 0; // 记录第一次得分

    this.score2 = 0; // 记录第二次得分

    this.score3 = 0; // 记录第三次得分

    this.heightScore = 0; // 最高分

    this.bestNum = 2; //最大数字
  },
  getChallengeLevelNum: function getChallengeLevelNum() {
    return 7;
  },
  getChallengeLevelData: function getChallengeLevelData(type) {
    if (type == 0) {
      return "1000100000001000000010001";
    } else if (type == 1) {
      return "1101110001000001000111011";
    } else if (type == 2) {
      return "1100100001001001000010011";
    } else if (type == 3) {
      return "0111000100000000010001110";
    } else if (type == 4) {
      return "0001100001100011000011000";
    } else if (type == 5) {
      return "0000000100011100010000000";
    } else if (type == 6) {
      return "1000101010000000101010001";
    }
  },
  getGameData: function getGameData(cardNum, cardX, cardY) {
    return GameTools.getItemByLocalStorage("gameData_" + GameConfig.MAIN_MENU_NUM + "_" + cardNum + "_" + cardX + "_" + cardY, 0);
  },
  setGameData: function setGameData(gameData, cardNum, cardX, cardY) {
    cc.sys.localStorage.setItem("gameData_" + GameConfig.MAIN_MENU_NUM + "_" + cardNum + "_" + cardX + "_" + cardY, gameData);
  },
  getGameScoreData: function getGameScoreData(scoreNum) {
    return GameTools.getItemByLocalStorage("score_" + GameConfig.MAIN_MENU_NUM + "_" + scoreNum, 0);
  },
  setGameScoreData: function setGameScoreData(score, scoreNum) {
    cc.sys.localStorage.setItem("score_" + GameConfig.MAIN_MENU_NUM + "_" + scoreNum, score);
  },
  isHaveGameData: function isHaveGameData() {
    return GameTools.getItemByLocalStorage("isHaveGameData_" + GameConfig.MAIN_MENU_NUM, false);
  },
  setHaveGameData: function setHaveGameData(isHaveGameData) {
    cc.sys.localStorage.setItem("isHaveGameData_" + GameConfig.MAIN_MENU_NUM, isHaveGameData);
  },
  getScoreNum: function getScoreNum() {
    return GameTools.getItemByLocalStorage("ScoreNum_" + GameConfig.MAIN_MENU_NUM, 0);
  },
  setScoreNum: function setScoreNum(ScoreNum) {
    cc.sys.localStorage.setItem("ScoreNum_" + GameConfig.MAIN_MENU_NUM, ScoreNum);
  },
  getHeightScore: function getHeightScore() {
    return GameTools.getItemByLocalStorage("BestScoreNum_" + GameConfig.MAIN_MENU_NUM, 0);
  },
  setHeightScore: function setHeightScore(heightScore) {
    cc.sys.localStorage.setItem("BestScoreNum_" + GameConfig.MAIN_MENU_NUM, heightScore);
  },
  getIsRecordHeightNum: function getIsRecordHeightNum(heightNum) {
    return GameTools.getItemByLocalStorage("isRecordHeightNum_" + GameConfig.MAIN_MENU_NUM + "_" + heightNum, false);
  },
  setIsRecordHeightNum: function setIsRecordHeightNum(heightNum, isRecord) {
    cc.sys.localStorage.setItem("isRecordHeightNum_" + GameConfig.MAIN_MENU_NUM + "_" + heightNum, isRecord);
  },
  setGameRewards: function setGameRewards(num) {
    //设置游戏奖励
    if (num >= 1024 && !this.getIsRecordHeightNum(num)) {
      GameTools.playSimpleAudioEngine(3);
      this.setIsRecordHeightNum(num, true);
    }

    var gameIntergralNum = 0;

    switch (num) {
      case 128:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 4 - GameConfig.CAED_LINES;
        }

        break;

      case 256:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 5 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 1;
        }

        break;

      case 512:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 6 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 2;
        }

        break;

      case 1024:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 7 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 3;
        }

        break;

      case 2048:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 8 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 4;
        }

        break;

      case 4096:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 9 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 5;
        }

        break;

      case 8192:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 10 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 6;
        }

        break;

      case 16384:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 11 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 7;
        }

        break;

      case 65536:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 12 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 8;
        }

        break;

      case 131072:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 13 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 9;
        }

        break;

      default:
        break;
    }

    if (gameIntergralNum > 0) {
      this.setGameIntegral(gameIntergralNum);
    }

    return gameIntergralNum;
  },
  getGamePropNumber: function getGamePropNumber(propType) {
    return GameTools.getItemByLocalStorage("gameProp" + propType, 0);
  },
  setGamePropNumber: function setGamePropNumber(propType, number) {
    GameTools.setItemByLocalStorage("gameProp" + propType, GameTools.getItemByLocalStorage("gameProp" + propType, 0) + number);
  },
  getGameIntegral: function getGameIntegral() //获取积分
  {
    return GameTools.getGameIntegral();
  },
  setGameIntegral: function setGameIntegral(letrgral) {
    GameTools.setGameIntegral(this.getGameIntegral() + letrgral);
  },
  isGameHelp: function isGameHelp() {
    //判断游戏是否进行了帮助
    return GameTools.getItemByLocalStorage("isGameHelp" + GameConfig.mainMenu, false);
  },
  setGameHelp: function setGameHelp(gameHelp) {
    cc.sys.localStorage.setItem("isGameHelp" + GameConfig.mainMenu, gameHelp);
  },
  getGamePassNum: function getGamePassNum() {
    return GameTools.getItemByLocalStorage("passNum" + GameConfig.mainMenu, 1);
  },
  setGamePassNum: function setGamePassNum(passNum) {
    cc.sys.localStorage.setItem("passNum" + GameConfig.mainMenu, passNum);
  },
  getGamePassScore: function getGamePassScore() {
    var passNum = GameData.getGamePassNum();
    return 1000 + (passNum - 1) * 1500 + (passNum - 1) * (passNum - 1) * 500;
  },
  loadGameData: function loadGameData(isLoad) {
    if (isLoad) {
      for (var i = 0; i < GameConfig.CAED_LINES; i++) {
        for (var j = 0; j < GameConfig.CAED_LINES; j++) {
          this.scoreCard0[i][j] = this.getGameData(0, i, j);
          this.bestNum = this.bestNum > this.scoreCard0[i][j] ? this.bestNum : this.scoreCard0[i][j];

          if (this.checkGameData(this.scoreCard0[i][j])) {
            return true;
          }

          this.scoreCard1[i][j] = this.getGameData(1, i, j);
          this.scoreCard2[i][j] = this.getGameData(2, i, j);
          this.scoreCard3[i][j] = this.getGameData(3, i, j);
        }
      }

      this.scoreNum = this.getScoreNum();
      this.score0 = this.getGameScoreData(0);
      this.score1 = this.getGameScoreData(1);
      this.score2 = this.getGameScoreData(2);
      this.score3 = this.getGameScoreData(3);
      GameConfig.IS_GAME_WIN = this.bestNum >= 2048 ? true : false;
    } else {
      this.setHeightScore(this.heightScore);

      for (var _i = 0; _i < GameConfig.CAED_LINES; _i++) {
        for (var _j = 0; _j < GameConfig.CAED_LINES; _j++) {
          this.setGameData(this.scoreCard0[_i][_j], 0, _i, _j);
          this.setGameData(this.scoreCard1[_i][_j], 1, _i, _j);
          this.setGameData(this.scoreCard2[_i][_j], 2, _i, _j);
          this.setGameData(this.scoreCard3[_i][_j], 3, _i, _j);
        }
      }

      this.setScoreNum(this.scoreNum);
      this.setGameScoreData(this.score0, 0);
      this.setGameScoreData(this.score1, 1);
      this.setGameScoreData(this.score2, 2);
      this.setGameScoreData(this.score3, 3);
      this.setHaveGameData(true);
    }

    return false;
  },
  checkGameData: function checkGameData(gameData) {
    if (gameData == 0) {
      return false;
    }

    var num = 1;

    for (var i = 1; i < 25; i++) {
      if (gameData == num) {
        return false;
      }

      num *= 2;
    }

    if (gameData == -1) {
      return false;
    }

    return true;
  }
};
module.exports = GameData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lRGF0YS5qcyJdLCJuYW1lcyI6WyJHYW1lQ29uZmlnIiwicmVxdWlyZSIsIkdhbWVUb29scyIsIkdhbWVEYXRhIiwic2NvcmVDYXJkMCIsInNjb3JlQ2FyZDEiLCJzY29yZUNhcmQyIiwic2NvcmVDYXJkMyIsInNjb3JlMCIsInNjb3JlMSIsInNjb3JlMiIsInNjb3JlMyIsImhlaWdodFNjb3JlIiwiYmVzdE51bSIsImluaXREYXRhIiwiQXJyYXkiLCJpIiwiQ0FFRF9MSU5FUyIsImdldENoYWxsZW5nZUxldmVsTnVtIiwiZ2V0Q2hhbGxlbmdlTGV2ZWxEYXRhIiwidHlwZSIsImdldEdhbWVEYXRhIiwiY2FyZE51bSIsImNhcmRYIiwiY2FyZFkiLCJnZXRJdGVtQnlMb2NhbFN0b3JhZ2UiLCJNQUlOX01FTlVfTlVNIiwic2V0R2FtZURhdGEiLCJnYW1lRGF0YSIsImNjIiwic3lzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEdhbWVTY29yZURhdGEiLCJzY29yZU51bSIsInNldEdhbWVTY29yZURhdGEiLCJzY29yZSIsImlzSGF2ZUdhbWVEYXRhIiwic2V0SGF2ZUdhbWVEYXRhIiwiZ2V0U2NvcmVOdW0iLCJzZXRTY29yZU51bSIsIlNjb3JlTnVtIiwiZ2V0SGVpZ2h0U2NvcmUiLCJzZXRIZWlnaHRTY29yZSIsImdldElzUmVjb3JkSGVpZ2h0TnVtIiwiaGVpZ2h0TnVtIiwic2V0SXNSZWNvcmRIZWlnaHROdW0iLCJpc1JlY29yZCIsInNldEdhbWVSZXdhcmRzIiwibnVtIiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwiZ2FtZUludGVyZ3JhbE51bSIsIm1haW5NZW51IiwiTWFpbk1lbnUiLCJNYWluTWVudU51bVBvcCIsIk1haW5NZW51TnVtUG9wU3RhciIsInNldEdhbWVJbnRlZ3JhbCIsImdldEdhbWVQcm9wTnVtYmVyIiwicHJvcFR5cGUiLCJzZXRHYW1lUHJvcE51bWJlciIsIm51bWJlciIsInNldEl0ZW1CeUxvY2FsU3RvcmFnZSIsImdldEdhbWVJbnRlZ3JhbCIsImxldHJncmFsIiwiaXNHYW1lSGVscCIsInNldEdhbWVIZWxwIiwiZ2FtZUhlbHAiLCJnZXRHYW1lUGFzc051bSIsInNldEdhbWVQYXNzTnVtIiwicGFzc051bSIsImdldEdhbWVQYXNzU2NvcmUiLCJsb2FkR2FtZURhdGEiLCJpc0xvYWQiLCJqIiwiY2hlY2tHYW1lRGF0YSIsIklTX0dBTUVfV0lOIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxZQUFELENBQXhCOztBQUNBLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUUsUUFBUSxHQUFHO0FBQ1hDLEVBQUFBLFVBQVUsRUFBRSxFQUREO0FBQ0s7QUFDaEJDLEVBQUFBLFVBQVUsRUFBRSxFQUZEO0FBRUs7QUFDaEJDLEVBQUFBLFVBQVUsRUFBRSxFQUhEO0FBR0s7QUFDaEJDLEVBQUFBLFVBQVUsRUFBRSxFQUpEO0FBSUs7QUFDaEJDLEVBQUFBLE1BQU0sRUFBRSxDQUxHO0FBS0E7QUFDWEMsRUFBQUEsTUFBTSxFQUFFLENBTkc7QUFNQTtBQUNYQyxFQUFBQSxNQUFNLEVBQUUsQ0FQRztBQU9EO0FBQ1ZDLEVBQUFBLE1BQU0sRUFBRSxDQVJHO0FBUUQ7QUFDVkMsRUFBQUEsV0FBVyxFQUFFLENBVEY7QUFTSztBQUNoQkMsRUFBQUEsT0FBTyxFQUFFLENBVkU7QUFVQztBQUVaQyxFQUFBQSxRQUFRLEVBQUUsb0JBQVk7QUFDbEIsU0FBS1YsVUFBTCxHQUFrQixJQUFJVyxLQUFKLEVBQWxCO0FBQ0EsU0FBS1YsVUFBTCxHQUFrQixJQUFJVSxLQUFKLEVBQWxCO0FBQ0EsU0FBS1QsVUFBTCxHQUFrQixJQUFJUyxLQUFKLEVBQWxCO0FBQ0EsU0FBS1IsVUFBTCxHQUFrQixJQUFJUSxLQUFKLEVBQWxCOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENB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Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG52YXIgR2FtZURhdGEgPSB7XG4gICAgc2NvcmVDYXJkMDogW10sIC8v6K6w5b2V5b2T5YmN5L2N572uXG4gICAgc2NvcmVDYXJkMTogW10sIC8v6K6w5b2V56ys5LiA5qyh5L2N572uXG4gICAgc2NvcmVDYXJkMjogW10sIC8v6K6w5b2V56ys5LqM5qyh5L2N572uXG4gICAgc2NvcmVDYXJkMzogW10sIC8v6K6w5b2V56ys5LiJ5qyh5L2N572uXG4gICAgc2NvcmUwOiAwLCAvLyDorrDlvZXlvZPliY3lvpfliIZcbiAgICBzY29yZTE6IDAsIC8vIOiusOW9leesrOS4gOasoeW+l+WIhlxuICAgIHNjb3JlMjogMCwvLyDorrDlvZXnrKzkuozmrKHlvpfliIZcbiAgICBzY29yZTM6IDAsLy8g6K6w5b2V56ys5LiJ5qyh5b6X5YiGXG4gICAgaGVpZ2h0U2NvcmU6IDAsIC8vIOacgOmrmOWIhlxuICAgIGJlc3ROdW06IDIsIC8v5pyA5aSn5pWw5a2XXG5cbiAgICBpbml0RGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNjb3JlQ2FyZDAgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5zY29yZUNhcmQxID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuc2NvcmVDYXJkMiA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLnNjb3JlQ2FyZDMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zY29yZUNhcmQwW2ldID0gQXJyYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc2NvcmVDYXJkMVtpXSA9IEFycmF5KCk7XG4gICAgICAgICAgICB0aGlzLnNjb3JlQ2FyZDJbaV0gPSBBcnJheSgpO1xuICAgICAgICAgICAgdGhpcy5zY29yZUNhcmQzW2ldID0gQXJyYXkoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjb3JlMCA9IDA7IC8vIOiusOW9leW9k+WJjeW+l+WIhlxuICAgICAgICB0aGlzLnNjb3JlMSA9IDA7IC8vIOiusOW9leesrOS4gOasoeW+l+WIhlxuICAgICAgICB0aGlzLnNjb3JlMiA9IDA7Ly8g6K6w5b2V56ys5LqM5qyh5b6X5YiGXG4gICAgICAgIHRoaXMuc2NvcmUzID0gMDsvLyDorrDlvZXnrKzkuInmrKHlvpfliIZcbiAgICAgICAgdGhpcy5oZWlnaHRTY29yZSA9IDA7IC8vIOacgOmrmOWIhlxuICAgICAgICB0aGlzLmJlc3ROdW0gPSAyOyAvL+acgOWkp+aVsOWtl1xuICAgIH0sXG4gICAgZ2V0Q2hhbGxlbmdlTGV2ZWxOdW06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIDc7XG4gICAgfSxcbiAgICBnZXRDaGFsbGVuZ2VMZXZlbERhdGE6IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBcIjEwMDAxMDAwMDAwMDEwMDAwMDAwMTAwMDFcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBcIjExMDExMTAwMDEwMDAwMDEwMDAxMTEwMTFcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09IDIpIHtcbiAgICAgICAgICAgIHJldHVybiBcIjExMDAxMDAwMDEwMDEwMDEwMDAwMTAwMTFcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09IDMpIHtcbiAgICAgICAgICAgIHJldHVybiBcIjAxMTEwMDAxMDAwMDAwMDAwMTAwMDExMTBcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09IDQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIjAwMDExMDAwMDExMDAwMTEwMDAwMTEwMDBcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIjAwMDAwMDAxMDAwMTExMDAwMTAwMDAwMDBcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09IDYpIHtcbiAgICAgICAgICAgIHJldHVybiBcIjEwMDAxMDEwMTAwMDAwMDAxMDEwMTAwMDFcIjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0R2FtZURhdGE6IGZ1bmN0aW9uIChjYXJkTnVtLCBjYXJkWCwgY2FyZFkpIHtcbiAgICAgICAgcmV0dXJuIEdhbWVUb29scy5nZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJnYW1lRGF0YV9cIiArIEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSArIFwiX1wiICsgY2FyZE51bSArIFwiX1wiICsgY2FyZFggKyBcIl9cIiArIGNhcmRZLCAwKTtcbiAgICB9LFxuXG4gICAgc2V0R2FtZURhdGE6IGZ1bmN0aW9uIChnYW1lRGF0YSwgY2FyZE51bSwgY2FyZFgsIGNhcmRZKSB7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImdhbWVEYXRhX1wiICsgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNICsgXCJfXCIgKyBjYXJkTnVtICsgXCJfXCIgKyBjYXJkWCArIFwiX1wiICsgY2FyZFksIGdhbWVEYXRhKTtcbiAgICB9LFxuXG4gICAgZ2V0R2FtZVNjb3JlRGF0YTogZnVuY3Rpb24gKHNjb3JlTnVtKSB7XG4gICAgICAgIHJldHVybiBHYW1lVG9vbHMuZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwic2NvcmVfXCIgKyBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0gKyBcIl9cIiArIHNjb3JlTnVtLCAwKTtcbiAgICB9LFxuXG4gICAgc2V0R2FtZVNjb3JlRGF0YTogZnVuY3Rpb24gKHNjb3JlLCBzY29yZU51bSkge1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzY29yZV9cIiArIEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSArIFwiX1wiICsgc2NvcmVOdW0sIHNjb3JlKTtcbiAgICB9LFxuXG4gICAgaXNIYXZlR2FtZURhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEdhbWVUb29scy5nZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJpc0hhdmVHYW1lRGF0YV9cIiArIEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSwgZmFsc2UpO1xuICAgIH0sXG5cbiAgICBzZXRIYXZlR2FtZURhdGE6IGZ1bmN0aW9uIChpc0hhdmVHYW1lRGF0YSkge1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpc0hhdmVHYW1lRGF0YV9cIiArIEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSwgaXNIYXZlR2FtZURhdGEpO1xuICAgIH0sXG5cbiAgICBnZXRTY29yZU51bTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gR2FtZVRvb2xzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcIlNjb3JlTnVtX1wiICsgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNLCAwKTtcbiAgICB9LFxuXG4gICAgc2V0U2NvcmVOdW06IGZ1bmN0aW9uIChTY29yZU51bSkge1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJTY29yZU51bV9cIiArIEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSwgU2NvcmVOdW0pO1xuICAgIH0sXG4gICAgZ2V0SGVpZ2h0U2NvcmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEdhbWVUb29scy5nZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJCZXN0U2NvcmVOdW1fXCIgKyBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0sIDApO1xuICAgIH0sXG5cbiAgICBzZXRIZWlnaHRTY29yZTogZnVuY3Rpb24gKGhlaWdodFNjb3JlKSB7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkJlc3RTY29yZU51bV9cIiArIEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSwgaGVpZ2h0U2NvcmUpO1xuICAgIH0sXG4gICAgZ2V0SXNSZWNvcmRIZWlnaHROdW06IGZ1bmN0aW9uIChoZWlnaHROdW0pIHtcbiAgICAgICAgcmV0dXJuIEdhbWVUb29scy5nZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJpc1JlY29yZEhlaWdodE51bV9cIiArIEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSArIFwiX1wiICsgaGVpZ2h0TnVtLCBmYWxzZSk7XG4gICAgfSxcblxuICAgIHNldElzUmVjb3JkSGVpZ2h0TnVtOiBmdW5jdGlvbiAoaGVpZ2h0TnVtLCBpc1JlY29yZCkge1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpc1JlY29yZEhlaWdodE51bV9cIiArIEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSArIFwiX1wiICsgaGVpZ2h0TnVtLCBpc1JlY29yZCk7XG4gICAgfSxcblxuICAgIHNldEdhbWVSZXdhcmRzOiBmdW5jdGlvbiAobnVtKSB7IC8v6K6+572u5ri45oiP5aWW5YqxXG4gICAgICAgIGlmICgobnVtID49IDEwMjQpICYmICF0aGlzLmdldElzUmVjb3JkSGVpZ2h0TnVtKG51bSkpIHtcbiAgICAgICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMyk7XG4gICAgICAgICAgICB0aGlzLnNldElzUmVjb3JkSGVpZ2h0TnVtKG51bSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGdhbWVJbnRlcmdyYWxOdW0gPSAwO1xuICAgICAgICBzd2l0Y2ggKG51bSkge1xuICAgICAgICAgICAgY2FzZSAxMjg6XG4gICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcubWFpbk1lbnUgIT0gR2FtZUNvbmZpZy5NYWluTWVudS5NYWluTWVudU51bVBvcCAmJiBHYW1lQ29uZmlnLm1haW5NZW51ICE9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVOdW1Qb3BTdGFyKSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVJbnRlcmdyYWxOdW0gPSA0IC0gR2FtZUNvbmZpZy5DQUVEX0xJTkVTO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjU2OlxuICAgICAgICAgICAgICAgIGlmIChHYW1lQ29uZmlnLm1haW5NZW51ICE9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVOdW1Qb3AgJiYgR2FtZUNvbmZpZy5tYWluTWVudSAhPSBHYW1lQ29uZmlnLk1haW5NZW51Lk1haW5NZW51TnVtUG9wU3Rhcikge1xuICAgICAgICAgICAgICAgICAgICBnYW1lSW50ZXJncmFsTnVtID0gNSAtIEdhbWVDb25maWcuQ0FFRF9MSU5FUztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVJbnRlcmdyYWxOdW0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTEyOlxuICAgICAgICAgICAgICAgIGlmIChHYW1lQ29uZmlnLm1haW5NZW51ICE9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVOdW1Qb3AgJiYgR2FtZUNvbmZpZy5tYWluTWVudSAhPSBHYW1lQ29uZmlnLk1haW5NZW51Lk1haW5NZW51TnVtUG9wU3Rhcikge1xuICAgICAgICAgICAgICAgICAgICBnYW1lSW50ZXJncmFsTnVtID0gNiAtIEdhbWVDb25maWcuQ0FFRF9MSU5FUztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVJbnRlcmdyYWxOdW0gPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTAyNDpcbiAgICAgICAgICAgICAgICBpZiAoR2FtZUNvbmZpZy5tYWluTWVudSAhPSBHYW1lQ29uZmlnLk1haW5NZW51Lk1haW5NZW51TnVtUG9wICYmIEdhbWVDb25maWcubWFpbk1lbnUgIT0gR2FtZUNvbmZpZy5NYWluTWVudS5NYWluTWVudU51bVBvcFN0YXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDcgLSBHYW1lQ29uZmlnLkNBRURfTElORVM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBnYW1lSW50ZXJncmFsTnVtID0gMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDIwNDg6XG4gICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcubWFpbk1lbnUgIT0gR2FtZUNvbmZpZy5NYWluTWVudS5NYWluTWVudU51bVBvcCAmJiBHYW1lQ29uZmlnLm1haW5NZW51ICE9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVOdW1Qb3BTdGFyKSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVJbnRlcmdyYWxOdW0gPSA4IC0gR2FtZUNvbmZpZy5DQUVEX0xJTkVTO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0MDk2OlxuICAgICAgICAgICAgICAgIGlmIChHYW1lQ29uZmlnLm1haW5NZW51ICE9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVOdW1Qb3AgJiYgR2FtZUNvbmZpZy5tYWluTWVudSAhPSBHYW1lQ29uZmlnLk1haW5NZW51Lk1haW5NZW51TnVtUG9wU3Rhcikge1xuICAgICAgICAgICAgICAgICAgICBnYW1lSW50ZXJncmFsTnVtID0gOSAtIEdhbWVDb25maWcuQ0FFRF9MSU5FUztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVJbnRlcmdyYWxOdW0gPSA1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODE5MjpcbiAgICAgICAgICAgICAgICBpZiAoR2FtZUNvbmZpZy5tYWluTWVudSAhPSBHYW1lQ29uZmlnLk1haW5NZW51Lk1haW5NZW51TnVtUG9wICYmIEdhbWVDb25maWcubWFpbk1lbnUgIT0gR2FtZUNvbmZpZy5NYWluTWVudS5NYWluTWVudU51bVBvcFN0YXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDEwIC0gR2FtZUNvbmZpZy5DQUVEX0xJTkVTO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxNjM4NDpcbiAgICAgICAgICAgICAgICBpZiAoR2FtZUNvbmZpZy5tYWluTWVudSAhPSBHYW1lQ29uZmlnLk1haW5NZW51Lk1haW5NZW51TnVtUG9wICYmIEdhbWVDb25maWcubWFpbk1lbnUgIT0gR2FtZUNvbmZpZy5NYWluTWVudS5NYWluTWVudU51bVBvcFN0YXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDExIC0gR2FtZUNvbmZpZy5DQUVEX0xJTkVTO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2NTUzNjpcbiAgICAgICAgICAgICAgICBpZiAoR2FtZUNvbmZpZy5tYWluTWVudSAhPSBHYW1lQ29uZmlnLk1haW5NZW51Lk1haW5NZW51TnVtUG9wICYmIEdhbWVDb25maWcubWFpbk1lbnUgIT0gR2FtZUNvbmZpZy5NYWluTWVudS5NYWluTWVudU51bVBvcFN0YXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDEyIC0gR2FtZUNvbmZpZy5DQUVEX0xJTkVTO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMzEwNzI6XG4gICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcubWFpbk1lbnUgIT0gR2FtZUNvbmZpZy5NYWluTWVudS5NYWluTWVudU51bVBvcCAmJiBHYW1lQ29uZmlnLm1haW5NZW51ICE9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVOdW1Qb3BTdGFyKSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVJbnRlcmdyYWxOdW0gPSAxMyAtIEdhbWVDb25maWcuQ0FFRF9MSU5FUztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVJbnRlcmdyYWxOdW0gPSA5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdhbWVJbnRlcmdyYWxOdW0gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldEdhbWVJbnRlZ3JhbChnYW1lSW50ZXJncmFsTnVtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2FtZUludGVyZ3JhbE51bTtcbiAgICB9LFxuXG4gICAgZ2V0R2FtZVByb3BOdW1iZXIocHJvcFR5cGUpIHtcbiAgICAgICAgcmV0dXJuIEdhbWVUb29scy5nZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJnYW1lUHJvcFwiICsgcHJvcFR5cGUsIDApO1xuICAgIH0sXG5cbiAgICBzZXRHYW1lUHJvcE51bWJlcihwcm9wVHlwZSwgbnVtYmVyKSB7XG4gICAgICAgIEdhbWVUb29scy5zZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJnYW1lUHJvcFwiICsgcHJvcFR5cGUsIEdhbWVUb29scy5nZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJnYW1lUHJvcFwiICsgcHJvcFR5cGUsIDApICsgbnVtYmVyKTtcbiAgICB9LFxuXG4gICAgZ2V0R2FtZUludGVncmFsOiBmdW5jdGlvbiAoKSAvL+iOt+WPluenr+WIhlxuICAgIHtcbiAgICAgICAgcmV0dXJuIEdhbWVUb29scy5nZXRHYW1lSW50ZWdyYWwoKTtcbiAgICB9LFxuICAgIHNldEdhbWVJbnRlZ3JhbDogZnVuY3Rpb24gKGxldHJncmFsKSB7XG4gICAgICAgIEdhbWVUb29scy5zZXRHYW1lSW50ZWdyYWwodGhpcy5nZXRHYW1lSW50ZWdyYWwoKSArIGxldHJncmFsKTtcbiAgICB9LFxuICAgIGlzR2FtZUhlbHA6IGZ1bmN0aW9uICgpIHsgLy/liKTmlq3muLjmiI/mmK/lkKbov5vooYzkuobluK7liqlcbiAgICAgICAgcmV0dXJuIEdhbWVUb29scy5nZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJpc0dhbWVIZWxwXCIgKyBHYW1lQ29uZmlnLm1haW5NZW51LCBmYWxzZSk7XG4gICAgfSxcbiAgICBzZXRHYW1lSGVscDogZnVuY3Rpb24gKGdhbWVIZWxwKSB7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlzR2FtZUhlbHBcIiArIEdhbWVDb25maWcubWFpbk1lbnUsIGdhbWVIZWxwKTtcbiAgICB9LFxuICAgIGdldEdhbWVQYXNzTnVtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBHYW1lVG9vbHMuZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwicGFzc051bVwiICsgR2FtZUNvbmZpZy5tYWluTWVudSwgMSk7XG4gICAgfSxcbiAgICBzZXRHYW1lUGFzc051bTogZnVuY3Rpb24gKHBhc3NOdW0pIHtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGFzc051bVwiICsgR2FtZUNvbmZpZy5tYWluTWVudSwgcGFzc051bSk7XG4gICAgfSxcbiAgICBnZXRHYW1lUGFzc1Njb3JlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBwYXNzTnVtID0gR2FtZURhdGEuZ2V0R2FtZVBhc3NOdW0oKTtcbiAgICAgICAgcmV0dXJuICgxMDAwICsgKHBhc3NOdW0gLSAxKSAqIDE1MDAgKyAocGFzc051bSAtIDEpICogKHBhc3NOdW0gLSAxKSAqIDUwMCk7XG4gICAgfSxcblxuICAgIGxvYWRHYW1lRGF0YTogZnVuY3Rpb24gKGlzTG9hZCkge1xuICAgICAgICBpZiAoaXNMb2FkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlQ2FyZDBbaV1bal0gPSB0aGlzLmdldEdhbWVEYXRhKDAsIGksIGopO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJlc3ROdW0gPSB0aGlzLmJlc3ROdW0gPiB0aGlzLnNjb3JlQ2FyZDBbaV1bal0gPyB0aGlzLmJlc3ROdW0gOiB0aGlzLnNjb3JlQ2FyZDBbaV1bal07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrR2FtZURhdGEodGhpcy5zY29yZUNhcmQwW2ldW2pdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZUNhcmQxW2ldW2pdID0gdGhpcy5nZXRHYW1lRGF0YSgxLCBpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZUNhcmQyW2ldW2pdID0gdGhpcy5nZXRHYW1lRGF0YSgyLCBpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZUNhcmQzW2ldW2pdID0gdGhpcy5nZXRHYW1lRGF0YSgzLCBpLCBqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjb3JlTnVtID0gdGhpcy5nZXRTY29yZU51bSgpO1xuICAgICAgICAgICAgdGhpcy5zY29yZTAgPSB0aGlzLmdldEdhbWVTY29yZURhdGEoMCk7XG4gICAgICAgICAgICB0aGlzLnNjb3JlMSA9IHRoaXMuZ2V0R2FtZVNjb3JlRGF0YSgxKTtcbiAgICAgICAgICAgIHRoaXMuc2NvcmUyID0gdGhpcy5nZXRHYW1lU2NvcmVEYXRhKDIpO1xuICAgICAgICAgICAgdGhpcy5zY29yZTMgPSB0aGlzLmdldEdhbWVTY29yZURhdGEoMyk7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLklTX0dBTUVfV0lOID0gKHRoaXMuYmVzdE51bSA+PSAyMDQ4ID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SGVpZ2h0U2NvcmUodGhpcy5oZWlnaHRTY29yZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdhbWVEYXRhKHRoaXMuc2NvcmVDYXJkMFtpXVtqXSwgMCwgaSwgaik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2FtZURhdGEodGhpcy5zY29yZUNhcmQxW2ldW2pdLCAxLCBpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLnNjb3JlQ2FyZDJbaV1bal0sIDIsIGksIGopO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdhbWVEYXRhKHRoaXMuc2NvcmVDYXJkM1tpXVtqXSwgMywgaSwgaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTY29yZU51bSh0aGlzLnNjb3JlTnVtKTtcbiAgICAgICAgICAgIHRoaXMuc2V0R2FtZVNjb3JlRGF0YSh0aGlzLnNjb3JlMCwgMCk7XG4gICAgICAgICAgICB0aGlzLnNldEdhbWVTY29yZURhdGEodGhpcy5zY29yZTEsIDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRHYW1lU2NvcmVEYXRhKHRoaXMuc2NvcmUyLCAyKTtcbiAgICAgICAgICAgIHRoaXMuc2V0R2FtZVNjb3JlRGF0YSh0aGlzLnNjb3JlMywgMyk7XG4gICAgICAgICAgICB0aGlzLnNldEhhdmVHYW1lRGF0YSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBjaGVja0dhbWVEYXRhOiBmdW5jdGlvbiAoZ2FtZURhdGEpIHtcbiAgICAgICAgaWYgKGdhbWVEYXRhID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbnVtID0gMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAyNTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZ2FtZURhdGEgPT0gbnVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbnVtICo9IDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdhbWVEYXRhID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZURhdGE7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '415acQw6oNBeo2WRVLPUaoS', 'GameTools');
// Script/GameTools.js

"use strict";

var GameConfig = require("GameConfig");

var GameTools = {
  love2048FrameCache: null,
  numberLabelAtlas: null,
  backMusicIsPlay: null,
  playSimpleAudioEngine: function playSimpleAudioEngine(engineType) {
    if (GameConfig.IS_GAME_MUSIC) {
      switch (engineType) {
        case 0:
          cc.audioEngine.play(cc.url.raw('resources/sounds/pop_star.mp3'), false, 0.5);
          break;

        case 1:
          cc.audioEngine.play(cc.url.raw('resources/sounds/select.mp3'), false, 0.5);
          break;

        case 2:
          cc.audioEngine.play(cc.url.raw("resources/sounds/landing.mp3"), false, 0.5);
          break;

        case 3:
          cc.audioEngine.play(cc.url.raw("resources/sounds/cheers.mp3"), false, 0.5);
          break;

        default:
          break;
      }
    }
  },
  playBackgroundMusic: function playBackgroundMusic() {
    if (GameConfig.IS_GAME_MUSIC) {
      if (GameTools.backMusicIsPlay == null) {
        GameTools.backMusicIsPlay = cc.audioEngine.play(cc.url.raw('resources/sounds/backMusic.mp3'), true, 0.5);
      }
    }
  },
  stopBackgroundMusic: function stopBackgroundMusic() {
    if (GameTools.backMusicIsPlay != null) {
      cc.audioEngine.stop(GameTools.backMusicIsPlay);
      GameTools.backMusicIsPlay = null;
    }
  },
  getItemByLocalStorage: function getItemByLocalStorage(key, value) {
    var values = cc.sys.localStorage.getItem(key);

    if (values === undefined || values === null || values === '') {
      cc.sys.localStorage.setItem(key, value);
      return value;
    }

    if (typeof value === 'boolean') {
      if (typeof values === 'boolean') {
        return values;
      }

      return "true" == values;
    } else if (typeof value === 'number') {
      return Number(values);
    }

    return values;
  },
  setItemByLocalStorage: function setItemByLocalStorage(key, value) {
    cc.sys.localStorage.setItem(key, value);
  },
  toastMessage: function toastMessage(toastType) {
    cc.loader.loadRes("panel/ShowMessage", function (err, prefab) {
      if (!err) {
        var node = cc.instantiate(prefab);
        node.getComponent(cc.Component).toastType = toastType;
        cc.director.getScene().children[0].addChild(node); // cc.director.getScene().getChildByName('Canvas').addChild(node);
      }
    });
  },
  sharePicture: function sharePicture(pictureName) {
    var titleStr = '来跟我一起挑战浪漫2048吧。';

    if ("shareTicket" == pictureName) {
      titleStr = "看看你在群里排第几？来和我挑战浪漫2048吧。";
    } else if ("LotteryLayer" == pictureName) {
      //抽奖页面分享
      titleStr = "浪漫2048福利大放送！快进来抽奖吧！";
    } else if (pictureName != undefined && pictureName != null) {
      titleStr = "我得了" + pictureName + "分," + titleStr;
    }

    if (CC_WECHATGAME) {
      window.wx.shareAppMessage({
        title: titleStr,
        query: "x=" + GameConfig.MAIN_MENU_NUM,
        imageUrl: canvas.toTempFilePathSync({
          destWidth: 500,
          destHeight: 400
        }),
        success: function success(res) {
          if (res.shareTickets != undefined && res.shareTickets.length > 0) {
            if ("shareTicket" == pictureName) {
              window.wx.postMessage({
                messageType: 5,
                MAIN_MENU_NUM: GameConfig.MAIN_MENU_NUM == -1000 ? 1 : GameConfig.MAIN_MENU_NUM,
                shareTicket: res.shareTickets[0]
              });
            }
          }
        }
      });
    } else {
      cc.log("执行了截图" + titleStr);
    }
  },
  getGameIntegral: function getGameIntegral() {
    //获取积分
    return this.getItemByLocalStorage("GameIntegral", 0);
  },
  setGameIntegral: function setGameIntegral(intrgral) {
    // 设置积分
    cc.sys.localStorage.setItem("GameIntegral", intrgral);
  },
  commentGame: function commentGame() {
    //评论
    if (CC_WECHATGAME) {
      window.wx.openCustomerServiceConversation({});
    } else {
      this.toastMessage(1);
      cc.log("执行了评论");
    }
  },
  checkFirstLoginGame: function checkFirstLoginGame() {
    var _this = this;

    //检查是否首次登录
    var loginDate = Math.floor((new Date().getTime() - new Date(2018, 3, 18, 0, 0, 0, 0).getTime()) / (1000 * 60 * 60 * 24));

    if (loginDate > this.getItemByLocalStorage("FirstEnterGameDate", 0)) {
      cc.sys.localStorage.setItem("FirstEnterGameDate", loginDate);
      setTimeout(function () {
        _this.setGameIntegral(_this.getGameIntegral() + 100);

        _this.toastMessage(9);
      }, 1500);
    }
  },
  setCardBackPath: function setCardBackPath(num) //设置卡片背景路径
  {//GameConfig.setCardBackPath(num, "card/nl2048.png");
  },
  userLogin: function userLogin() {//用户登录
  },
  getRankData: function getRankData(shareTicket) {
    //获取排行榜
    cc.loader.loadRes("panel/RankingListView", function (err, prefab) {
      if (!err) {
        var node = cc.instantiate(prefab);

        if (shareTicket != undefined) {
          node.getComponent(cc.Component).shareTicket = shareTicket;
        } // node.setPosition(cc.p(0, 0));


        cc.director.getScene().children[0].addChild(node);
      }
    });
  },
  removeRankData: function removeRankData() {
    //移除排行榜数据
    if (CC_WECHATGAME) {
      window.wx.postMessage({
        messageType: 0
      });
    } else {
      cc.log("移除排行榜数据。");
    }
  },
  submitScore: function submitScore(score) {
    //提交得分
    if (CC_WECHATGAME) {
      window.wx.postMessage({
        messageType: 3,
        MAIN_MENU_NUM: GameConfig.MAIN_MENU_NUM,
        score: score
      });
    } else {
      cc.log("提交得分:" + GameConfig.MAIN_MENU_NUM + " : " + score);
    }
  },
  getSelectAddNum: function getSelectAddNum(num) //获取叠加数
  {
    if (num < 4) {
      num = 2;
    } else if (num < 8) {
      num = 4;
    } else if (num < 16) {
      num = 8;
    } else if (num < 32) {
      num = 16;
    } else if (num < 64) {
      num = 32;
    } else if (num < 128) {
      num = 64;
    } else if (num < 256) {
      num = 128;
    } else if (num < 512) {
      num = 256;
    } else if (num < 1024) {
      num = 512;
    } else if (num < 2048) {
      num = 1024;
    } else if (num < 4096) {
      num = 2048;
    } else if (num < 8192) {
      num = 4096;
    } else if (num < 16384) {
      num = 8192;
    } else if (num < 32768) {
      num = 16384;
    } else if (num < 65536) {
      num = 32768;
    } else if (num < 131072) {
      num = 65536;
    } else {
      num = 131072;
    }

    return num;
  }
};
module.exports = GameTools;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lVG9vbHMuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVG9vbHMiLCJsb3ZlMjA0OEZyYW1lQ2FjaGUiLCJudW1iZXJMYWJlbEF0bGFzIiwiYmFja011c2ljSXNQbGF5IiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwiZW5naW5lVHlwZSIsIklTX0dBTUVfTVVTSUMiLCJjYyIsImF1ZGlvRW5naW5lIiwicGxheSIsInVybCIsInJhdyIsInBsYXlCYWNrZ3JvdW5kTXVzaWMiLCJzdG9wQmFja2dyb3VuZE11c2ljIiwic3RvcCIsImdldEl0ZW1CeUxvY2FsU3RvcmFnZSIsImtleSIsInZhbHVlIiwidmFsdWVzIiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCIsInNldEl0ZW0iLCJOdW1iZXIiLCJzZXRJdGVtQnlMb2NhbFN0b3JhZ2UiLCJ0b2FzdE1lc3NhZ2UiLCJ0b2FzdFR5cGUiLCJsb2FkZXIiLCJsb2FkUmVzIiwiZXJyIiwicHJlZmFiIiwibm9kZSIsImluc3RhbnRpYXRlIiwiZ2V0Q29tcG9uZW50IiwiQ29tcG9uZW50IiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImNoaWxkcmVuIiwiYWRkQ2hpbGQiLCJzaGFyZVBpY3R1cmUiLCJwaWN0dXJlTmFtZSIsInRpdGxlU3RyIiwiQ0NfV0VDSEFUR0FNRSIsIndpbmRvdyIsInd4Iiwic2hhcmVBcHBNZXNzYWdlIiwidGl0bGUiLCJxdWVyeSIsIk1BSU5fTUVOVV9OVU0iLCJpbWFnZVVybCIsImNhbnZhcyIsInRvVGVtcEZpbGVQYXRoU3luYyIsImRlc3RXaWR0aCIsImRlc3RIZWlnaHQiLCJzdWNjZXNzIiwicmVzIiwic2hhcmVUaWNrZXRzIiwibGVuZ3RoIiwicG9zdE1lc3NhZ2UiLCJtZXNzYWdlVHlwZSIsInNoYXJlVGlja2V0IiwibG9nIiwiZ2V0R2FtZUludGVncmFsIiwic2V0R2FtZUludGVncmFsIiwiaW50cmdyYWwiLCJjb21tZW50R2FtZSIsIm9wZW5DdXN0b21lclNlcnZpY2VDb252ZXJzYXRpb24iLCJjaGVja0ZpcnN0TG9naW5HYW1lIiwibG9naW5EYXRlIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsImdldFRpbWUiLCJzZXRUaW1lb3V0Iiwic2V0Q2FyZEJhY2tQYXRoIiwibnVtIiwidXNlckxvZ2luIiwiZ2V0UmFua0RhdGEiLCJyZW1vdmVSYW5rRGF0YSIsInN1Ym1pdFNjb3JlIiwic2NvcmUiLCJnZXRTZWxlY3RBZGROdW0iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHO0FBQ1pDLEVBQUFBLGtCQUFrQixFQUFFLElBRFI7QUFFWkMsRUFBQUEsZ0JBQWdCLEVBQUUsSUFGTjtBQUdaQyxFQUFBQSxlQUFlLEVBQUUsSUFITDtBQUlaQyxFQUFBQSxxQkFBcUIsRUFBRSwrQkFBVUMsVUFBVixFQUFzQjtBQUN6QyxRQUFJUCxVQUFVLENBQUNRLGFBQWYsRUFBOEI7QUFDMUIsY0FBUUQsVUFBUjtBQUNJLGFBQUssQ0FBTDtBQUNJRSxVQUFBQSxFQUFFLENBQUNDLFdBQUgsQ0FBZUMsSUFBZixDQUFvQkYsRUFBRSxDQUFDRyxHQUFILENBQU9DLEdBQVAsQ0FBVywrQkFBWCxDQUFwQixFQUFpRSxLQUFqRSxFQUF3RSxHQUF4RTtBQUNBOztBQUNKLGFBQUssQ0FBTDtBQUNJSixVQUFBQSxFQUFFLENBQUNDLFdBQUgsQ0FBZUMsSUFBZixDQUFvQkYsRUFBRSxDQUFDRyxHQUFILENBQU9DLEdBQVAsQ0FBVyw2QkFBWCxDQUFwQixFQUErRCxLQUEvRCxFQUFzRSxHQUF0RTtBQUNBOztBQUNKLGFBQUssQ0FBTDtBQUNJSixVQUFBQSxFQUFFLENBQUNDLFdBQUgsQ0FBZUMsSUFBZixDQUFvQkYsRUFBRSxDQUFDRyxHQUFILENBQU9DLEdBQVAsQ0FBVyw4QkFB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QyxPQUFQLEdBQWlCcEYsU0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XG52YXIgR2FtZVRvb2xzID0ge1xuICAgIGxvdmUyMDQ4RnJhbWVDYWNoZTogbnVsbCxcbiAgICBudW1iZXJMYWJlbEF0bGFzOiBudWxsLFxuICAgIGJhY2tNdXNpY0lzUGxheTogbnVsbCxcbiAgICBwbGF5U2ltcGxlQXVkaW9FbmdpbmU6IGZ1bmN0aW9uIChlbmdpbmVUeXBlKSB7XG4gICAgICAgIGlmIChHYW1lQ29uZmlnLklTX0dBTUVfTVVTSUMpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZW5naW5lVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjYy51cmwucmF3KCdyZXNvdXJjZXMvc291bmRzL3BvcF9zdGFyLm1wMycpLCBmYWxzZSwgMC41KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGNjLnVybC5yYXcoJ3Jlc291cmNlcy9zb3VuZHMvc2VsZWN0Lm1wMycpLCBmYWxzZSwgMC41KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvc291bmRzL2xhbmRpbmcubXAzXCIpLCBmYWxzZSwgMC41KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvc291bmRzL2NoZWVycy5tcDNcIiksIGZhbHNlLCAwLjUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgcGxheUJhY2tncm91bmRNdXNpYzogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoR2FtZUNvbmZpZy5JU19HQU1FX01VU0lDKSB7XG4gICAgICAgICAgICBpZiAoR2FtZVRvb2xzLmJhY2tNdXNpY0lzUGxheSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgR2FtZVRvb2xzLmJhY2tNdXNpY0lzUGxheSA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoY2MudXJsLnJhdygncmVzb3VyY2VzL3NvdW5kcy9iYWNrTXVzaWMubXAzJyksIHRydWUsIDAuNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHN0b3BCYWNrZ3JvdW5kTXVzaWM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKEdhbWVUb29scy5iYWNrTXVzaWNJc1BsYXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChHYW1lVG9vbHMuYmFja011c2ljSXNQbGF5KTtcbiAgICAgICAgICAgIEdhbWVUb29scy5iYWNrTXVzaWNJc1BsYXkgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRJdGVtQnlMb2NhbFN0b3JhZ2U6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGxldCB2YWx1ZXMgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgaWYgKHZhbHVlcyA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlcyA9PT0gbnVsbCB8fCB2YWx1ZXMgPT09ICcnKSB7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlcyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcInRydWVcIiA9PSB2YWx1ZXM7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfSxcbiAgICBzZXRJdGVtQnlMb2NhbFN0b3JhZ2U6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICB9LFxuICAgIHRvYXN0TWVzc2FnZSh0b2FzdFR5cGUpIHtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJwYW5lbC9TaG93TWVzc2FnZVwiLCAoZXJyLCBwcmVmYWIpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkNvbXBvbmVudCkudG9hc3RUeXBlID0gdG9hc3RUeXBlO1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuY2hpbGRyZW5bMF0uYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICAgICAgLy8gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZSgnQ2FudmFzJykuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAsIHNoYXJlUGljdHVyZShwaWN0dXJlTmFtZSkge1xuICAgICAgICBsZXQgdGl0bGVTdHIgPSAn5p2l6Lef5oiR5LiA6LW35oyR5oiY5rWq5ryrMjA0OOWQp+OAgic7XG4gICAgICAgIGlmIChcInNoYXJlVGlja2V0XCIgPT0gcGljdHVyZU5hbWUpIHtcbiAgICAgICAgICAgIHRpdGxlU3RyID0gXCLnnIvnnIvkvaDlnKjnvqTph4zmjpLnrKzlh6DvvJ/mnaXlkozmiJHmjJHmiJjmtarmvKsyMDQ45ZCn44CCXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoXCJMb3R0ZXJ5TGF5ZXJcIiA9PSBwaWN0dXJlTmFtZSkgey8v5oq95aWW6aG16Z2i5YiG5LqrXG4gICAgICAgICAgICB0aXRsZVN0ciA9IFwi5rWq5ryrMjA0OOemj+WIqeWkp+aUvumAge+8geW/q+i/m+adpeaKveWlluWQp++8gVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHBpY3R1cmVOYW1lICE9IHVuZGVmaW5lZCAmJiBwaWN0dXJlTmFtZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aXRsZVN0ciA9IFwi5oiR5b6X5LqGXCIgKyBwaWN0dXJlTmFtZSArIFwi5YiGLFwiICsgdGl0bGVTdHI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKENDX1dFQ0hBVEdBTUUpIHtcbiAgICAgICAgICAgIHdpbmRvdy53eC5zaGFyZUFwcE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZVN0cixcbiAgICAgICAgICAgICAgICBxdWVyeTogXCJ4PVwiICsgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNLFxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiBjYW52YXMudG9UZW1wRmlsZVBhdGhTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdFdpZHRoOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIGRlc3RIZWlnaHQ6IDQwMFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5zaGFyZVRpY2tldHMgIT0gdW5kZWZpbmVkICYmIHJlcy5zaGFyZVRpY2tldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic2hhcmVUaWNrZXRcIiA9PSBwaWN0dXJlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53eC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNQUlOX01FTlVfTlVNOiBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0gPT0gLTEwMDAgPyAxIDogR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVRpY2tldDogcmVzLnNoYXJlVGlja2V0c1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5sb2coXCLmiafooYzkuobmiKrlm75cIiArIHRpdGxlU3RyKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0R2FtZUludGVncmFsKCkgeyAvL+iOt+WPluenr+WIhlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJHYW1lSW50ZWdyYWxcIiwgMCk7XG4gICAgfSxcbiAgICBzZXRHYW1lSW50ZWdyYWwoaW50cmdyYWwpIHsgLy8g6K6+572u56ev5YiGXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkdhbWVJbnRlZ3JhbFwiLCBpbnRyZ3JhbCk7XG4gICAgfVxuICAgICwgY29tbWVudEdhbWUoKSB7IC8v6K+E6K66XG4gICAgICAgIGlmIChDQ19XRUNIQVRHQU1FKSB7XG4gICAgICAgICAgICB3aW5kb3cud3gub3BlbkN1c3RvbWVyU2VydmljZUNvbnZlcnNhdGlvbih7fSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvYXN0TWVzc2FnZSgxKTtcbiAgICAgICAgICAgIGNjLmxvZyhcIuaJp+ihjOS6huivhOiuulwiKVxuICAgICAgICB9XG4gICAgfVxuICAgICwgY2hlY2tGaXJzdExvZ2luR2FtZSgpIHsgLy/mo4Dmn6XmmK/lkKbpppbmrKHnmbvlvZVcbiAgICAgICAgbGV0IGxvZ2luRGF0ZSA9IE1hdGguZmxvb3IoKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbmV3IERhdGUoMjAxOCwgMywgMTgsIDAsIDAsIDAsIDApLmdldFRpbWUoKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICBpZiAobG9naW5EYXRlID4gdGhpcy5nZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJGaXJzdEVudGVyR2FtZURhdGVcIiwgMCkpIHtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkZpcnN0RW50ZXJHYW1lRGF0ZVwiLCBsb2dpbkRhdGUpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lSW50ZWdyYWwodGhpcy5nZXRHYW1lSW50ZWdyYWwoKSArIDEwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy50b2FzdE1lc3NhZ2UoOSk7XG4gICAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICwgc2V0Q2FyZEJhY2tQYXRoKG51bSkvL+iuvue9ruWNoeeJh+iDjOaZr+i3r+W+hFxuICAgIHtcbiAgICAgICAgLy9HYW1lQ29uZmlnLnNldENhcmRCYWNrUGF0aChudW0sIFwiY2FyZC9ubDIwNDgucG5nXCIpO1xuICAgIH1cblxuICAgICwgdXNlckxvZ2luKCkgeyAvL+eUqOaIt+eZu+W9lVxuICAgIH1cblxuICAgICwgZ2V0UmFua0RhdGEoc2hhcmVUaWNrZXQpIHsgLy/ojrflj5bmjpLooYzmppxcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJwYW5lbC9SYW5raW5nTGlzdFZpZXdcIiwgKGVyciwgcHJlZmFiKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgICAgICBpZiAoc2hhcmVUaWNrZXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkNvbXBvbmVudCkuc2hhcmVUaWNrZXQgPSBzaGFyZVRpY2tldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbm9kZS5zZXRQb3NpdGlvbihjYy5wKDAsIDApKTtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmNoaWxkcmVuWzBdLmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLCByZW1vdmVSYW5rRGF0YSgpIHsvL+enu+mZpOaOkuihjOamnOaVsOaNrlxuICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xuICAgICAgICAgICAgd2luZG93Lnd4LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlVHlwZTogMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MubG9nKFwi56e76Zmk5o6S6KGM5qac5pWw5o2u44CCXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgICwgc3VibWl0U2NvcmUoc2NvcmUpIHsgLy/mj5DkuqTlvpfliIZcbiAgICAgICAgaWYgKENDX1dFQ0hBVEdBTUUpIHtcbiAgICAgICAgICAgIHdpbmRvdy53eC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZVR5cGU6IDMsXG4gICAgICAgICAgICAgICAgTUFJTl9NRU5VX05VTTogR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNLFxuICAgICAgICAgICAgICAgIHNjb3JlOiBzY29yZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MubG9nKFwi5o+Q5Lqk5b6X5YiGOlwiICsgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNICsgXCIgOiBcIiArIHNjb3JlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLCBnZXRTZWxlY3RBZGROdW0obnVtKSAvL+iOt+WPluWPoOWKoOaVsFxuICAgIHtcbiAgICAgICAgaWYgKG51bSA8IDQpIHtcbiAgICAgICAgICAgIG51bSA9IDI7XG4gICAgICAgIH0gZWxzZSBpZiAobnVtIDwgOCkge1xuICAgICAgICAgICAgbnVtID0gNDtcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPCAxNikge1xuICAgICAgICAgICAgbnVtID0gODtcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPCAzMikge1xuICAgICAgICAgICAgbnVtID0gMTY7XG4gICAgICAgIH0gZWxzZSBpZiAobnVtIDwgNjQpIHtcbiAgICAgICAgICAgIG51bSA9IDMyO1xuICAgICAgICB9IGVsc2UgaWYgKG51bSA8IDEyOCkge1xuICAgICAgICAgICAgbnVtID0gNjQ7XG4gICAgICAgIH0gZWxzZSBpZiAobnVtIDwgMjU2KSB7XG4gICAgICAgICAgICBudW0gPSAxMjg7XG4gICAgICAgIH0gZWxzZSBpZiAobnVtIDwgNTEyKSB7XG4gICAgICAgICAgICBudW0gPSAyNTY7XG4gICAgICAgIH0gZWxzZSBpZiAobnVtIDwgMTAyNCkge1xuICAgICAgICAgICAgbnVtID0gNTEyO1xuICAgICAgICB9IGVsc2UgaWYgKG51bSA8IDIwNDgpIHtcbiAgICAgICAgICAgIG51bSA9IDEwMjQ7XG4gICAgICAgIH0gZWxzZSBpZiAobnVtIDwgNDA5Nikge1xuICAgICAgICAgICAgbnVtID0gMjA0ODtcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPCA4MTkyKSB7XG4gICAgICAgICAgICBudW0gPSA0MDk2O1xuICAgICAgICB9IGVsc2UgaWYgKG51bSA8IDE2Mzg0KSB7XG4gICAgICAgICAgICBudW0gPSA4MTkyO1xuICAgICAgICB9IGVsc2UgaWYgKG51bSA8IDMyNzY4KSB7XG4gICAgICAgICAgICBudW0gPSAxNjM4NDtcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPCA2NTUzNikge1xuICAgICAgICAgICAgbnVtID0gMzI3Njg7XG4gICAgICAgIH0gZWxzZSBpZiAobnVtIDwgMTMxMDcyKSB7XG4gICAgICAgICAgICBudW0gPSA2NTUzNjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG51bSA9IDEzMTA3MjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVtO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZVRvb2xzOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MenuUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5c2b5VzgPNHI4Chk6xcuhIS', 'MenuUI');
// Script/MenuUI.js

"use strict";

var GameTools = require("GameTools");

var GameUiTools = require("GameUiTools");

var GameConfig = require("GameConfig");

var GameData = require("GameData");

var AnimLayerTool = require("AnimLayerTool");

cc.Class({
  "extends": cc.Component,
  properties: {
    layerBack: cc.Node,
    startGameButton: cc.Node,
    musicButton: cc.Node,
    bestScoreLabel: cc.Label,
    gameIntegral: cc.Label,
    rankButton: cc.Node,
    //排行榜按钮
    shareButton: cc.Node,
    //好友分享按钮
    shareButton2: cc.Node,
    //群分享按钮
    helpButton: cc.Node //帮助按钮

  },
  onLoad: function onLoad() {
    GameUiTools.setButtonClickEvents(this, this.startGameButton, "startGameButtonFunc");
    GameUiTools.setButtonClickEvents(this, this.musicButton, "musicButtonFunc");
    GameUiTools.setButtonClickEvents(this, this.rankButton, "rankButtonFunc");
    GameUiTools.setButtonClickEvents(this, this.shareButton, "shareButtonFunc");
    GameUiTools.setButtonClickEvents(this, this.shareButton2, "shareButtonFunc");
    GameUiTools.setButtonClickEvents(this, this.helpButton, "helpButtonFunc");

    if (!GameConfig.IS_GAME_MUSIC) {
      GameUiTools.getSpriteFrame("pop_main/popmain_78", this.musicButton.getComponent(cc.Sprite));
    }

    this.bestScoreLabel.string = GameData.getHeightScore();
    this.gameIntegral.string = GameTools.getGameIntegral();
  },
  start: function start() {
    if (CC_WECHATGAME) {
      if (GameConfig.GameClubButton != null) {
        GameConfig.GameClubButton.show();
      }
    }
  },
  startGameButtonFunc: function startGameButtonFunc(event, customEventData) {
    GameTools.playSimpleAudioEngine(0);
    this.loadingResource();
  },
  musicButtonFunc: function musicButtonFunc() {
    GameTools.playSimpleAudioEngine(0);
    GameConfig.IS_GAME_MUSIC = !GameConfig.IS_GAME_MUSIC;
    GameTools.setItemByLocalStorage("IS_GAME_MUSIC", GameConfig.IS_GAME_MUSIC);

    if (GameConfig.IS_GAME_MUSIC) {
      GameUiTools.getSpriteFrame("pop_main/popmain_58", this.musicButton.getComponent(cc.Sprite));
    } else {
      GameUiTools.getSpriteFrame("pop_main/popmain_78", this.musicButton.getComponent(cc.Sprite));
    }
  },
  //特价9.9元一套cocoscreator代码联系Q2483367084 
  //截图 链接：https://share.weiyun.com/leGAHpnB 密码：b9udtv
  rankButtonFunc: function rankButtonFunc(event) {
    GameTools.playSimpleAudioEngine(0);
    GameTools.getRankData();
  },
  shareButtonFunc: function shareButtonFunc(event) {
    GameTools.playSimpleAudioEngine(0);
    setTimeout(function () {
      GameTools.sharePicture();
    }, 100);
  },
  helpButtonFunc: function helpButtonFunc(event) {
    GameTools.playSimpleAudioEngine(0);
    GameUiTools.loadingLayer("panel/GameHelp");
  },
  loadingResource: function loadingResource() {
    // cc.director.loadScene('GameScene');
    GameConfig.CAED_LINES = 10;
    GameConfig.MAIN_MENU_NUM = 11;
    GameConfig.mainMenu = GameConfig.MainMenu.MainMenuNumPopStar;
    GameConfig.CARD_WIDTH = (GameConfig.DEVICE_WIDTH - GameConfig.DEVICE_WIDTH / 10.0) / GameConfig.CAED_LINES;
    GameConfig.loadingSceneType = GameConfig.LoadingSceneType.LoadingSceneEnterGame;
    cc.director.loadScene('LoadingScene');
  },
  onDestroy: function onDestroy() {
    if (CC_WECHATGAME) {
      if (GameConfig.GameClubButton != null) {
        GameConfig.GameClubButton.hide();
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNZW51VUkuanMiXSwibmFtZXMiOlsiR2FtZVRvb2xzIiwicmVxdWlyZSIsIkdhbWVVaVRvb2xzIiwiR2FtZUNvbmZpZyIsIkdhbWVEYXRhIiwiQW5pbUxheWVyVG9vbCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGF5ZXJCYWNrIiwiTm9kZSIsInN0YXJ0R2FtZUJ1dHRvbiIsIm11c2ljQnV0dG9uIiwiYmVzdFNjb3JlTGFiZWwiLCJMYWJlbCIsImdhbWVJbnRlZ3JhbCIsInJhbmtCdXR0b24iLCJzaGFyZUJ1dHRvbiIsInNoYXJlQnV0dG9uMiIsImhlbHBCdXR0b24iLCJvbkxvYWQiLCJzZXRCdXR0b25DbGlja0V2ZW50cyIsIklTX0dBTUVfTVVTSUMiLCJnZXRTcHJpdGVGcmFtZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInN0cmluZyIsImdldEhlaWdodFNjb3JlIiwiZ2V0R2FtZUludGVncmFsIiwic3RhcnQiLCJDQ19XRUNIQVRHQU1FIiwiR2FtZUNsdWJCdXR0b24iLCJzaG93Iiwic3RhcnRHYW1lQnV0dG9uRnVuYyIsImV2ZW50IiwiY3VzdG9tRXZlbnREYXRhIiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwibG9hZGluZ1Jlc291cmNlIiwibXVzaWNCdXR0b25GdW5jIiwic2V0SXRlbUJ5TG9jYWxTdG9yYWdlIiwicmFua0J1dHRvbkZ1bmMiLCJnZXRSYW5rRGF0YSIsInNoYXJlQnV0dG9uRnVuYyIsInNldFRpbWVvdXQiLCJzaGFyZVBpY3R1cmUiLCJoZWxwQnV0dG9uRnVuYyIsImxvYWRpbmdMYXllciIsIkNBRURfTElORVMiLCJNQUlOX01FTlVfTlVNIiwibWFpbk1lbnUiLCJNYWluTWVudSIsIk1haW5NZW51TnVtUG9wU3RhciIsIkNBUkRfV0lEVEgiLCJERVZJQ0VfV0lEVEgiLCJsb2FkaW5nU2NlbmVUeXBlIiwiTG9hZGluZ1NjZW5lVHlwZSIsIkxvYWRpbmdTY2VuZUVudGVy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WUFBWixDQUF5QixnQkFBekI7QUFDSCxHQXBFSTtBQXNFTFQsRUFBQUEsZUFBZSxFQUFFLDJCQUFZO0FBQ3pCO0FBQ0FuQyxJQUFBQSxVQUFVLENBQUM2QyxVQUFYLEdBQXdCLEVBQXhCO0FBQ0E3QyxJQUFBQSxVQUFVLENBQUM4QyxhQUFYLEdBQTJCLEVBQTNCO0FBQ0E5QyxJQUFBQSxVQUFVLENBQUMrQyxRQUFYLEdBQXNCL0MsVUFBVSxDQUFDZ0QsUUFBWCxDQUFvQkMsa0JBQTFDO0FBQ0FqRCxJQUFBQSxVQUFVLENBQUNrRCxVQUFYLEdBQXdCLENBQUNsRCxVQUFVLENBQUNtRCxZQUFYLEdBQTBCbkQsVUFBVSxDQUFDbUQsWUFBWCxHQUEwQixJQUFyRCxJQUE2RG5ELFVBQVUsQ0FBQzZDLFVBQWhHO0FBQ0E3QyxJQUFBQSxVQUFVLENBQUNvRCxnQkFBWCxHQUE4QnBELFVBQVUsQ0FBQ3FELGdCQUFYLENBQTRCQyxxQkFBMUQ7QUFDQW5ELElBQUFBLEVBQUUsQ0FBQ29ELFFBQUgsQ0FBWUMsU0FBWixDQUFzQixjQUF0QjtBQUNILEdBOUVJO0FBZ0ZMQyxFQUFBQSxTQWhGSyx1QkFnRk87QUFDUixRQUFJN0IsYUFBSixFQUFtQjtBQUNmLFVBQUk1QixVQUFVLENBQUM2QixjQUFYLElBQTZCLElBQWpDLEVBQXVDO0FBQ25DN0IsUUFBQUEsVUFBVSxDQUFDNkIsY0FBWCxDQUEwQjZCLElBQTFCO0FBQ0g7QUFDSjtBQUNKO0FBdEZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xudmFyIEdhbWVVaVRvb2xzID0gcmVxdWlyZShcIkdhbWVVaVRvb2xzXCIpO1xudmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcbnZhciBHYW1lRGF0YSA9IHJlcXVpcmUoXCJHYW1lRGF0YVwiKTtcbnZhciBBbmltTGF5ZXJUb29sID0gcmVxdWlyZShcIkFuaW1MYXllclRvb2xcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYXllckJhY2s6IGNjLk5vZGUsXG4gICAgICAgIHN0YXJ0R2FtZUJ1dHRvbjogY2MuTm9kZSxcbiAgICAgICAgbXVzaWNCdXR0b246IGNjLk5vZGUsXG4gICAgICAgIGJlc3RTY29yZUxhYmVsOiBjYy5MYWJlbCxcbiAgICAgICAgZ2FtZUludGVncmFsOiBjYy5MYWJlbCxcbiAgICAgICAgcmFua0J1dHRvbjogY2MuTm9kZSwgLy/mjpLooYzmppzmjInpkq5cbiAgICAgICAgc2hhcmVCdXR0b246IGNjLk5vZGUsIC8v5aW95Y+L5YiG5Lqr5oyJ6ZKuXG4gICAgICAgIHNoYXJlQnV0dG9uMjogY2MuTm9kZSwgLy/nvqTliIbkuqvmjInpkq5cbiAgICAgICAgaGVscEJ1dHRvbjogY2MuTm9kZSwgLy/luK7liqnmjInpkq5cbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLnN0YXJ0R2FtZUJ1dHRvbiwgXCJzdGFydEdhbWVCdXR0b25GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLm11c2ljQnV0dG9uLCBcIm11c2ljQnV0dG9uRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5yYW5rQnV0dG9uLCBcInJhbmtCdXR0b25GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLnNoYXJlQnV0dG9uLCBcInNoYXJlQnV0dG9uRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5zaGFyZUJ1dHRvbjIsIFwic2hhcmVCdXR0b25GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLmhlbHBCdXR0b24sIFwiaGVscEJ1dHRvbkZ1bmNcIik7XG4gICAgICAgIGlmICghR2FtZUNvbmZpZy5JU19HQU1FX01VU0lDKSB7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9tYWluL3BvcG1haW5fNzhcIiwgdGhpcy5tdXNpY0J1dHRvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iZXN0U2NvcmVMYWJlbC5zdHJpbmcgPSBHYW1lRGF0YS5nZXRIZWlnaHRTY29yZSgpO1xuICAgICAgICB0aGlzLmdhbWVJbnRlZ3JhbC5zdHJpbmcgPSBHYW1lVG9vbHMuZ2V0R2FtZUludGVncmFsKCk7XG4gICAgfSxcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xuICAgICAgICAgICAgaWYgKEdhbWVDb25maWcuR2FtZUNsdWJCdXR0b24gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZUNsdWJCdXR0b24uc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0R2FtZUJ1dHRvbkZ1bmM6IGZ1bmN0aW9uIChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XG4gICAgICAgIHRoaXMubG9hZGluZ1Jlc291cmNlKCk7XG4gICAgfSxcblxuICAgIG11c2ljQnV0dG9uRnVuYzogZnVuY3Rpb24gKCkge1xuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDApO1xuICAgICAgICBHYW1lQ29uZmlnLklTX0dBTUVfTVVTSUMgPSAhR2FtZUNvbmZpZy5JU19HQU1FX01VU0lDO1xuICAgICAgICBHYW1lVG9vbHMuc2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiSVNfR0FNRV9NVVNJQ1wiLCBHYW1lQ29uZmlnLklTX0dBTUVfTVVTSUMpO1xuICAgICAgICBpZiAoR2FtZUNvbmZpZy5JU19HQU1FX01VU0lDKSB7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9tYWluL3BvcG1haW5fNThcIiwgdGhpcy5tdXNpY0J1dHRvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9tYWluL3BvcG1haW5fNzhcIiwgdGhpcy5tdXNpY0J1dHRvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgICAgIH1cbiAgICB9LFxuLy/nibnku7c5LjnlhYPkuIDlpZdjb2Nvc2NyZWF0b3Lku6PnoIHogZTns7tRMjQ4MzM2NzA4NCBcbi8v5oiq5Zu+IOmTvuaOpe+8mmh0dHBzOi8vc2hhcmUud2VpeXVuLmNvbS9sZUdBSHBuQiDlr4bnoIHvvJpiOXVkdHZcbiAgICByYW5rQnV0dG9uRnVuYzogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XG4gICAgICAgIEdhbWVUb29scy5nZXRSYW5rRGF0YSgpO1xuICAgIH0sXG5cbiAgICBzaGFyZUJ1dHRvbkZ1bmM6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIEdhbWVUb29scy5zaGFyZVBpY3R1cmUoKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9LFxuICAgIGhlbHBCdXR0b25GdW5jOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgwKTtcbiAgICAgICAgR2FtZVVpVG9vbHMubG9hZGluZ0xheWVyKFwicGFuZWwvR2FtZUhlbHBcIik7XG4gICAgfSxcblxuICAgIGxvYWRpbmdSZXNvdXJjZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWVTY2VuZScpO1xuICAgICAgICBHYW1lQ29uZmlnLkNBRURfTElORVMgPSAxMDtcbiAgICAgICAgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNID0gMTE7XG4gICAgICAgIEdhbWVDb25maWcubWFpbk1lbnUgPSBHYW1lQ29uZmlnLk1haW5NZW51Lk1haW5NZW51TnVtUG9wU3RhcjtcbiAgICAgICAgR2FtZUNvbmZpZy5DQVJEX1dJRFRIID0gKEdhbWVDb25maWcuREVWSUNFX1dJRFRIIC0gR2FtZUNvbmZpZy5ERVZJQ0VfV0lEVEggLyAxMC4wKSAvIEdhbWVDb25maWcuQ0FFRF9MSU5FUztcbiAgICAgICAgR2FtZUNvbmZpZy5sb2FkaW5nU2NlbmVUeXBlID0gR2FtZUNvbmZpZy5Mb2FkaW5nU2NlbmVUeXBlLkxvYWRpbmdTY2VuZUVudGVyR2FtZTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdMb2FkaW5nU2NlbmUnKTtcbiAgICB9LFxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xuICAgICAgICAgICAgaWYgKEdhbWVDb25maWcuR2FtZUNsdWJCdXR0b24gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZUNsdWJCdXR0b24uaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------
