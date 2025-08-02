
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