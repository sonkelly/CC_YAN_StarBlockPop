
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
              }
              //AnimLayerTool.createExchangeCardAnim(this.cardArr[i][j], i, j);
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
            this.cardArr[i][j].CardClickShow(0);
            //this.cardArr[i][j].setVisible(false);
            AnimLayerTool.createPopStarAnim(this.cardArr[i][j], deTime++ * 0.1);
            //AnimLayerTool.callFuncPopStarAnim(this.cardArr[i][j]);
          }
        }
      }

      this.score = this.score + this.selectAmount * this.selectAmount * 5;
      AnimLayerTool.createScoreMoveAnim(this.cardArr[firstCardI][firstCardJ], this.selectAmount * this.selectAmount * 5, false); //加分动画
      AnimLayerTool.createShowMessageBoxAward(this.getParent(), this.selectAmount); //展示奖励对话框

      var scoreNum = GameData.setGameRewards(this.selectNumber); //获取奖励
      AnimLayerTool.createScoreMoveAnim(this.cardArr[firstCardI][firstCardJ], scoreNum, true);
      GameUiTools.scheduleOnce(this, this.cardVanishAni, deTime * 0.1);
      //this.cardVanishAni(0);
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
        this.cardArr[i][j] = card;
        // this.addChild(card, i, j);
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
        AnimLayerTool.createShowMessageBoxAward(this.getParent(), -1);
        // GameUiTools.scheduleOnce(this, this.autoCreateCardNumber, 1 + deTime * 0.5);
        GameUiTools.scheduleOnce(this, this.gamePass, 1 + deTime * 0.5);
      }
    }
  },
  gamePass: function gamePass() {
    GameUiTools.loadingLayer("panel/GamePass");
  },
  gameOver: function gameOver(dt)
  //游戏结束
  {
    GameConfig.IS_GAME_OVER = true;
    GameUiTools.loadingLayer("panel/GameOver");
    // cc.loader.loadRes("panel/GameOver", (err, prefab) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lUG9wU3Rhci5qcyJdLCJuYW1lcyI6WyJDYXJkU3ByaXRlIiwicmVxdWlyZSIsIkdhbWVDb25maWciLCJHYW1lRGF0YSIsIkFuaW1MYXllclRvb2wiLCJHYW1lVG9vbHMiLCJHYW1lVWlUb29scyIsIlRBR19jYXJkIiwiR2FtZVBvcFN0YXIiLCJjYyIsIkNsYXNzIiwiTm9kZSIsInByb3BlcnRpZXMiLCJmaXJzdFgiLCJmaXJzdFkiLCJlbmRYIiwiZW5kWSIsInNlbGVjdE51bWJlciIsInNlbGVjdEFtb3VudCIsInNjb3JlIiwiY2FyZEFyciIsImZpcnN0Q2xpY2tOdW0iLCJBcnJheSIsImN0b3IiLCJ4IiwiREVWSUNFX1dJRFRIIiwieSIsIkRFVklDRV9IRUlHSFQiLCJzZXRDb250ZW50U2l6ZSIsImluaXQiLCJpIiwiQ0FFRF9MSU5FUyIsImluaXRVSSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoQmVnYW4iLCJjcmVhdGVDYXJkU3ByaXRlIiwiaXNIYXZlR2FtZURhdGEiLCJzY29yZTAiLCJqIiwibnVtYmVyIiwic2NvcmVDYXJkMCIsIkNhcmRTaG93Iiwic2NvcmVDYXJkMiIsInNldFZpc2libGUiLCJtb3ZlQnV0dG9uQW5pbSIsIk1vdmVCdXR0b25BbmltVHlwZSIsInVwIiwic2NvcmUxIiwic2NvcmVOdW0iLCJzY29yZUNhcmQzIiwic2NvcmVDYXJkMSIsImV2ZW50IiwidG91Y2hQb2ludCIsInRvdWNoIiwiZ2V0TG9jYXRpb24iLCJzZWxmIiwiZ2V0Q3VycmVudFRhcmdldCIsInByb3BzTWVudSIsIlByb3BzTWVudSIsIlByb3BzTWVudVNwYWNlIiwiR2FtZVBvcFN0YXJQcm9wZXJ0eSIsImlzVmlzaWJsZSIsImdldEJvdW5kaW5nQm94VG9Xb3JsZCIsImNvbnRhaW5zIiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwiQ2FyZENsaWNrU2hvdyIsImluc3BlY3Rpb25TZWxlY3QiLCJjYXJkVmFuaXNoIiwiUHJvcHNNZW51RGVzdHJveUNhcmQiLCJjYXJkVmFuaXNoQW5pIiwic2V0R2FtZVByb3BOdW1iZXIiLCJHYW1lU2NlbmUiLCJQcm9wc01lbnVFeGNoYW5nZUNhcmQiLCJNYXRoIiwiYWJzIiwiY2FuY2VsU2VsZWN0IiwiY3JlYXRlTW92ZUFuaW0iLCJudW0iLCJnZXROdW1iZXIiLCJzZXROdW1iZXIiLCJQcm9wc01lbnVSZW1vdmVBY3Jvc3MiLCJ6IiwiY2FsbEZ1bmNQb3BTdGFyQW5pbSIsImR0IiwiZG9Eb3duIiwiZG9MZWZ0IiwiZG9DaGVjayIsImdldElzU2VsZWN0IiwiZmlyc3RDYXJkSSIsImZpcnN0Q2FyZEoiLCJkZVRpbWUiLCJnZXRJc0ZpcnN0U2VsZWN0IiwiY3JlYXRlUG9wU3RhckFuaW0iLCJjcmVhdGVTY29yZU1vdmVBbmltIiwiY3JlYXRlU2hvd01lc3NhZ2VCb3hBd2FyZCIsImdldFBhcmVudCIsInNldEdhbWVSZXdhcmRzIiwic2NoZWR1bGVPbmNlIiwiaXNkbyIsInkxIiwieDEiLCJjYXJkIiwicmFuZG9tQ3JlYXRlQ2FyZE51bWJlciIsIkNBUkRfV0lEVEgiLCJhZGRDaGlsZCIsInJhbmRvbSIsInJldHVybk51bSIsInBvdyIsImZsb29yIiwiYXV0b0NyZWF0ZUNhcmROdW1iZXIiLCJzZXRHYW1lUGFzc051bSIsImdldEdhbWVQYXNzTnVtIiwic2V0UGFzc051bSIsInByb2dyZXNzQmFyIiwic2NhbGVYIiwic2V0U2NvcmUiLCJzYXZlTWVtb3J5SW5mb3JtYXRpb24iLCJpc0dhbWVPdmVyIiwiaXNQYXNzR2FtZSIsImdldEdhbWVQYXNzU2NvcmUiLCJnYW1lT3ZlciIsImdhbWVQYXNzIiwibG9hZGluZ0xheWVyIiwiSVNfR0FNRV9PVkVSIiwiYmFja0dhbWUiLCJ0b2FzdE1lc3NhZ2UiLCJiZXN0TnVtIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxZQUFZLENB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QUFDLENBQUMsQ0FBQ1UsQ0FBQyxDQUFDLENBQUN3QyxTQUFTLEVBQUU7UUFDMUQ3RSxRQUFRLENBQUM2SCxPQUFPLEdBQUc3SCxRQUFRLENBQUM2SCxPQUFPLEdBQUcsSUFBSSxDQUFDNUcsT0FBTyxDQUFDVSxDQUFDLENBQUMsQ0FBQ1UsQ0FBQyxDQUFDLENBQUN3QyxTQUFTLEVBQUUsR0FBRzdFLFFBQVEsQ0FBQzZILE9BQU8sR0FBRyxJQUFJLENBQUM1RyxPQUFPLENBQUNVLENBQUMsQ0FBQyxDQUFDVSxDQUFDLENBQUMsQ0FBQ3dDLFNBQVMsRUFBRTtNQUM1SDtJQUNKO0VBQ0o7QUFDSixDQUFDLENBQUM7QUFFRmlELE1BQU0sQ0FBQ0MsT0FBTyxHQUFHMUgsV0FBVyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENhcmRTcHJpdGUgPSByZXF1aXJlKFwiQ2FyZFNwcml0ZVwiKTtcclxudmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcclxudmFyIEdhbWVEYXRhID0gcmVxdWlyZShcIkdhbWVEYXRhXCIpO1xyXG52YXIgQW5pbUxheWVyVG9vbCA9IHJlcXVpcmUoXCJBbmltTGF5ZXJUb29sXCIpO1xyXG52YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcclxudmFyIEdhbWVVaVRvb2xzID0gcmVxdWlyZShcIkdhbWVVaVRvb2xzXCIpO1xyXG5jb25zdCBUQUdfY2FyZCA9IDEwMDY7XHJcbnZhciBHYW1lUG9wU3RhciA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLk5vZGUsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZmlyc3RYOiBudWxsLC8v54K55Ye75YWD57SgXHJcbiAgICAgICAgZmlyc3RZOiBudWxsLC8v54K55Ye75YWD57SgXHJcbiAgICAgICAgZW5kWDogbnVsbCxcclxuICAgICAgICBlbmRZOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdE51bWJlcjogMCwvL+mAieS4reaVsOWtl1xyXG4gICAgICAgIHNlbGVjdEFtb3VudDogMCwvL+mAieS4reWNoeeJh+aVsFxyXG4gICAgICAgIHNjb3JlOiAwLC8v5YiG5pWwLFxyXG4gICAgICAgIGNhcmRBcnI6IG51bGwsLy8g5YKo5a2Y5Y2h54mH57G7XHJcbiAgICAgICAgZmlyc3RDbGlja051bTogbmV3IEFycmF5KCksLy/orrDlvZXkuqTmjaLkvY3nva5cclxuICAgIH0sXHJcbiAgICBjdG9yOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy54ID0gLUdhbWVDb25maWcuREVWSUNFX1dJRFRIIC8gMjtcclxuICAgICAgICB0aGlzLnkgPSAtR2FtZUNvbmZpZy5ERVZJQ0VfSEVJR0hUIC8gMjtcclxuICAgICAgICB0aGlzLnNldENvbnRlbnRTaXplKEdhbWVDb25maWcuREVWSUNFX1dJRFRIICogNCwgR2FtZUNvbmZpZy5ERVZJQ0VfSEVJR0hUICogNCk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2FyZEFyciA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2ldID0gQXJyYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maXJzdENsaWNrTnVtWzBdID0gLTE7XHJcbiAgICAgICAgdGhpcy5maXJzdENsaWNrTnVtWzFdID0gLTE7XHJcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuICAgIH0sXHJcbiAgICBpbml0VUkoKSB7XHJcbiAgICAgICAgLy/orr7nva7op6bmkbjkuovku7bnm5HlkKxcclxuICAgICAgICB0aGlzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hCZWdhbiwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FyZFNwcml0ZSgpOyAvL+WIm+W7ujRYNOWNoeeJh1xyXG4gICAgICAgIGlmIChHYW1lRGF0YS5pc0hhdmVHYW1lRGF0YSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSBHYW1lRGF0YS5zY29yZTA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0ubnVtYmVyID0gR2FtZURhdGEuc2NvcmVDYXJkMFtpXVtqXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uQ2FyZFNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoR2FtZURhdGEuc2NvcmVDYXJkMltpXVtqXSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpXVtqXS5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5tb3ZlQnV0dG9uQW5pbSh0aGlzLmNhcmRBcnJbaV1bal0sIHRydWUsIEFuaW1MYXllclRvb2wuTW92ZUJ1dHRvbkFuaW1UeXBlLnVwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBHYW1lRGF0YS5zY29yZTAgPSAwO1xyXG4gICAgICAgICAgICBHYW1lRGF0YS5zY29yZTEgPSAwO1xyXG4gICAgICAgICAgICBHYW1lRGF0YS5zY29yZU51bSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZURhdGEuc2NvcmVDYXJkM1tpXVtqXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZURhdGEuc2NvcmVDYXJkMltpXVtqXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZURhdGEuc2NvcmVDYXJkMVtpXVtqXSA9IHRoaXMuY2FyZEFycltpXVtqXS5udW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZURhdGEuc2NvcmVDYXJkMFtpXVtqXSA9IHRoaXMuY2FyZEFycltpXVtqXS5udW1iZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Ub3VjaEJlZ2FuKGV2ZW50KSB7XHJcbiAgICAgICAgLy/ojrflj5bop6bmkbjnmoRY6L205ZKMWei9tFxyXG4gICAgICAgIGxldCB0b3VjaFBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTsgLy/ojrflj5ZPcGVuR0zlnZDmoIfvvIjljbNjb2NvczJkLXjlnZDmoIfvvIzljp/ngrnlnKjlt6bkuIvop5LvvIlcclxuICAgICAgICBsZXQgc2VsZiA9IGV2ZW50LmdldEN1cnJlbnRUYXJnZXQoKTtcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5wcm9wc01lbnUgIT0gR2FtZUNvbmZpZy5Qcm9wc01lbnUuUHJvcHNNZW51U3BhY2UpIHtcclxuICAgICAgICAgICAgc2VsZi5HYW1lUG9wU3RhclByb3BlcnR5KHRvdWNoUG9pbnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHsgLy/norDmkp7mo4DmtYtcclxuICAgICAgICAgICAgaWYgKHNlbGYuc2VsZWN0QW1vdW50ID09IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmNhcmRBcnJbaV1bal0uaXNWaXNpYmxlKCkgJiYgc2VsZi5jYXJkQXJyW2ldW2pdLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKHRvdWNoUG9pbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYXJkQXJyW2ldW2pdLkNhcmRDbGlja1Nob3coMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmluc3BlY3Rpb25TZWxlY3QoaSwgaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNhcmRWYW5pc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuLy/pgZPlhbfmqKHlvI9cclxuICAgIEdhbWVQb3BTdGFyUHJvcGVydHkodG91Y2hQb2ludCkge1xyXG4gICAgICAgIC8v56Kw5pKe5qOA5rWLXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXJkQXJyW2ldW2pdLmlzVmlzaWJsZSgpICYmIHRoaXMuY2FyZEFycltpXVtqXS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyh0b3VjaFBvaW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcucHJvcHNNZW51ID09IEdhbWVDb25maWcuUHJvcHNNZW51LlByb3BzTWVudURlc3Ryb3lDYXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpXVtqXS5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkVmFuaXNoQW5pKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5zZXRHYW1lUHJvcE51bWJlcigwLCAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZVNjZW5lLnNldEdhbWVQcm9wTnVtYmVyKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLnByb3BzTWVudSA9IEdhbWVDb25maWcuUHJvcHNNZW51LlByb3BzTWVudVNwYWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lQ29uZmlnLnByb3BzTWVudSA9PSBHYW1lQ29uZmlnLlByb3BzTWVudS5Qcm9wc01lbnVFeGNoYW5nZUNhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RDbGlja051bVswXSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdENsaWNrTnVtWzBdID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RDbGlja051bVsxXSA9IGo7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IDAgJiYgdGhpcy5jYXJkQXJyW2kgLSAxXVtqXS5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpIC0gMV1bal0uQ2FyZENsaWNrU2hvdygxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTIC0gMSAmJiB0aGlzLmNhcmRBcnJbaSArIDFdW2pdLmlzVmlzaWJsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2kgKyAxXVtqXS5DYXJkQ2xpY2tTaG93KDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPiAwICYmIHRoaXMuY2FyZEFycltpXVtqIC0gMV0uaXNWaXNpYmxlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1baiAtIDFdLkNhcmRDbGlja1Nob3coMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUyAtIDEgJiYgdGhpcy5jYXJkQXJyW2ldW2ogKyAxXS5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpXVtqICsgMV0uQ2FyZENsaWNrU2hvdygxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQW5pbUxheWVyVG9vbC5jcmVhdGVFeGNoYW5nZUNhcmRBbmltKHRoaXMuY2FyZEFycltpXVtqXSwgaSwgaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChNYXRoLmFicyhpIC0gdGhpcy5maXJzdENsaWNrTnVtWzBdKSA9PSAxKSAmJiAoKGogLSB0aGlzLmZpcnN0Q2xpY2tOdW1bMV0pID09IDApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICgoKGkgLSB0aGlzLmZpcnN0Q2xpY2tOdW1bMF0pID09IDApICYmIChNYXRoLmFicyhqIC0gdGhpcy5maXJzdENsaWNrTnVtWzFdKSA9PSAxKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbFNlbGVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1MYXllclRvb2wuY3JlYXRlTW92ZUFuaW0odGhpcy5jYXJkQXJyW2ldW2pdLCB0aGlzLmNhcmRBcnJbdGhpcy5maXJzdENsaWNrTnVtWzBdXVt0aGlzLmZpcnN0Q2xpY2tOdW1bMV1dLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbmltTGF5ZXJUb29sLmNyZWF0ZU1vdmVBbmltKHRoaXMuY2FyZEFyclt0aGlzLmZpcnN0Q2xpY2tOdW1bMF1dW3RoaXMuZmlyc3RDbGlja051bVsxXV0sIHRoaXMuY2FyZEFycltpXVtqXSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG51bSA9IHRoaXMuY2FyZEFycltpXVtqXS5nZXROdW1iZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uc2V0TnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbdGhpcy5maXJzdENsaWNrTnVtWzBdXVt0aGlzLmZpcnN0Q2xpY2tOdW1bMV1dLmdldE51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbdGhpcy5maXJzdENsaWNrTnVtWzBdXVt0aGlzLmZpcnN0Q2xpY2tOdW1bMV1dLnNldE51bWJlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0Q2xpY2tOdW1bMF0gPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0Q2xpY2tOdW1bMV0gPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5zZXRHYW1lUHJvcE51bWJlcigyLCAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5HYW1lU2NlbmUuc2V0R2FtZVByb3BOdW1iZXIoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkVmFuaXNoQW5pKDApOyAvL+ajgOa1i1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdENsaWNrTnVtWzBdID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdENsaWNrTnVtWzFdID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxTZWxlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcucHJvcHNNZW51ID0gR2FtZUNvbmZpZy5Qcm9wc01lbnUuUHJvcHNNZW51U3BhY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoR2FtZUNvbmZpZy5wcm9wc01lbnUgPT0gR2FtZUNvbmZpZy5Qcm9wc01lbnUuUHJvcHNNZW51UmVtb3ZlQWNyb3NzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyB6KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1MYXllclRvb2wuY2FsbEZ1bmNQb3BTdGFyQW5pbShudWxsLCB0aGlzLmNhcmRBcnJbel1bal0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW3pdW2pdLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5jYWxsRnVuY1BvcFN0YXJBbmltKG51bGwsIHRoaXMuY2FyZEFycltpXVt6XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bel0uc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgR2FtZURhdGEuc2V0R2FtZVByb3BOdW1iZXIoMSwgLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVTY2VuZS5zZXRHYW1lUHJvcE51bWJlcigxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkVmFuaXNoQW5pKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLnByb3BzTWVudSA9IEdhbWVDb25maWcuUHJvcHNNZW51LlByb3BzTWVudVNwYWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmZpcnN0Q2xpY2tOdW1bMF0gIT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5jZWxTZWxlY3QoKTtcclxuICAgICAgICAgICAgdGhpcy5maXJzdENsaWNrTnVtWzBdID0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDbGlja051bVsxXSA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBHYW1lQ29uZmlnLnByb3BzTWVudSA9IEdhbWVDb25maWcuUHJvcHNNZW51LlByb3BzTWVudVNwYWNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBjYXJkVmFuaXNoQW5pKGR0KSB7Ly/ljaHniYfmtojlpLHnm5HlkKzliqjnlLtcclxuICAgICAgICB0aGlzLmRvRG93bigpO1xyXG4gICAgICAgIHRoaXMuZG9MZWZ0KCk7XHJcbiAgICAgICAgdGhpcy5kb0NoZWNrKDApO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QW1vdW50ID0gMDtcclxuICAgIH0sXHJcblxyXG4gICAgY2FuY2VsU2VsZWN0KCkgey8v5Y+W5raI6YCJ5oupXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXJkQXJyW2ldW2pdLmdldElzU2VsZWN0KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uQ2FyZENsaWNrU2hvdygwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGVjdEFtb3VudCA9IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIGNhcmRWYW5pc2goKSB7Ly/ljaHniYfmtojlpLFcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RBbW91bnQgPj0gMikge1xyXG4gICAgICAgICAgICBsZXQgZmlyc3RDYXJkSSwgZmlyc3RDYXJkSjtcclxuICAgICAgICAgICAgbGV0IGRlVGltZSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXJkQXJyW2ldW2pdLmdldElzRmlyc3RTZWxlY3QoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdENhcmRJID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RDYXJkSiA9IGo7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhcmRBcnJbaV1bal0uZ2V0SXNTZWxlY3QoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uQ2FyZENsaWNrU2hvdygwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmNhcmRBcnJbaV1bal0uc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1MYXllclRvb2wuY3JlYXRlUG9wU3RhckFuaW0odGhpcy5jYXJkQXJyW2ldW2pdLCAoZGVUaW1lKyspICogMC4xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9BbmltTGF5ZXJUb29sLmNhbGxGdW5jUG9wU3RhckFuaW0odGhpcy5jYXJkQXJyW2ldW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSB0aGlzLnNjb3JlICsgdGhpcy5zZWxlY3RBbW91bnQgKiB0aGlzLnNlbGVjdEFtb3VudCAqIDU7XHJcbiAgICAgICAgICAgIEFuaW1MYXllclRvb2wuY3JlYXRlU2NvcmVNb3ZlQW5pbSh0aGlzLmNhcmRBcnJbZmlyc3RDYXJkSV1bZmlyc3RDYXJkSl0sIHRoaXMuc2VsZWN0QW1vdW50ICogdGhpcy5zZWxlY3RBbW91bnQgKiA1LCBmYWxzZSk7Ly/liqDliIbliqjnlLtcclxuICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5jcmVhdGVTaG93TWVzc2FnZUJveEF3YXJkKHRoaXMuZ2V0UGFyZW50KCksIHRoaXMuc2VsZWN0QW1vdW50KTsvL+WxleekuuWlluWKseWvueivneahhlxyXG5cclxuICAgICAgICAgICAgbGV0IHNjb3JlTnVtID0gR2FtZURhdGEuc2V0R2FtZVJld2FyZHModGhpcy5zZWxlY3ROdW1iZXIpOyAvL+iOt+WPluWlluWKsVxyXG4gICAgICAgICAgICBBbmltTGF5ZXJUb29sLmNyZWF0ZVNjb3JlTW92ZUFuaW0odGhpcy5jYXJkQXJyW2ZpcnN0Q2FyZEldW2ZpcnN0Q2FyZEpdLCBzY29yZU51bSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLnNjaGVkdWxlT25jZSh0aGlzLCB0aGlzLmNhcmRWYW5pc2hBbmksIGRlVGltZSAqIDAuMSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5jYXJkVmFuaXNoQW5pKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5jZWxTZWxlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuLy/pgInmi6nngrnkuK3ljaHniYdcclxuICAgIGluc3BlY3Rpb25TZWxlY3QoaSwgaikge1xyXG4gICAgICAgIHRoaXMuY2FyZEFycltpXVtqXS5DYXJkQ2xpY2tTaG93KDIpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QW1vdW50Kys7XHJcbiAgICAgICAgdGhpcy5zZWxlY3ROdW1iZXIgPSB0aGlzLmNhcmRBcnJbaV1bal0uZ2V0TnVtYmVyKCk7XHJcbiAgICAgICAgaWYgKGkgPj0gMSAmJiB0aGlzLmNhcmRBcnJbaSAtIDFdW2pdLmlzVmlzaWJsZSgpICYmICF0aGlzLmNhcmRBcnJbaSAtIDFdW2pdLmdldElzU2VsZWN0KCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0TnVtYmVyID09IHRoaXMuY2FyZEFycltpIC0gMV1bal0uZ2V0TnVtYmVyKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zcGVjdGlvblNlbGVjdChpIC0gMSwgaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGogPCBHYW1lQ29uZmlnLkNBRURfTElORVMgLSAxICYmIHRoaXMuY2FyZEFycltpXVtqICsgMV0uaXNWaXNpYmxlKClcclxuICAgICAgICAgICAgJiYgIXRoaXMuY2FyZEFycltpXVtqICsgMV0uZ2V0SXNTZWxlY3QoKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3ROdW1iZXIgPT0gdGhpcy5jYXJkQXJyW2ldW2ogKyAxXS5nZXROdW1iZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnNwZWN0aW9uU2VsZWN0KGksIGogKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUyAtIDEgJiYgdGhpcy5jYXJkQXJyW2kgKyAxXVtqXS5pc1Zpc2libGUoKVxyXG4gICAgICAgICAgICAmJiAhdGhpcy5jYXJkQXJyW2kgKyAxXVtqXS5nZXRJc1NlbGVjdCgpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdE51bWJlciA9PSB0aGlzLmNhcmRBcnJbaSArIDFdW2pdLmdldE51bWJlcigpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3BlY3Rpb25TZWxlY3QoaSArIDEsIGopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChqID49IDEgJiYgdGhpcy5jYXJkQXJyW2ldW2ogLSAxXS5pc1Zpc2libGUoKVxyXG4gICAgICAgICAgICAmJiAhdGhpcy5jYXJkQXJyW2ldW2ogLSAxXS5nZXRJc1NlbGVjdCgpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdE51bWJlciA9PSB0aGlzLmNhcmRBcnJbaV1baiAtIDFdLmdldE51bWJlcigpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3BlY3Rpb25TZWxlY3QoaSwgaiAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRvRG93bigpIHtcclxuICAgICAgICBsZXQgaXNkbyA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeTEgPSB5ICsgMTsgeTEgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IHkxKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXJkQXJyW3hdW3kxXS5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FyZEFyclt4XVt5XS5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5jcmVhdGVNb3ZlQW5pbSh0aGlzLmNhcmRBcnJbeF1beTFdLCB0aGlzLmNhcmRBcnJbeF1beV0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFyclt4XVt5XS5zZXROdW1iZXIodGhpcy5jYXJkQXJyW3hdW3kxXS5nZXROdW1iZXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbeF1beV0uc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFyclt4XVt5MV0uc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbeF1beTFdLkNhcmRTaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5LS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc2RvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzZG87XHJcbiAgICB9LFxyXG4gICAgZG9MZWZ0KCkge1xyXG4gICAgICAgIGxldCBpc2RvID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IHgrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4MSA9IHggKyAxOyB4MSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgeDErKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FyZEFyclt4MV1bMF0uaXNWaXNpYmxlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FyZEFyclt4XVswXS5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXJkQXJyW3gxXVt5XS5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1MYXllclRvb2wuY3JlYXRlTW92ZUFuaW0odGhpcy5jYXJkQXJyW3gxXVt5XSwgdGhpcy5jYXJkQXJyW3hdW3ldLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbeF1beV0uc2V0TnVtYmVyKHRoaXMuY2FyZEFyclt4MV1beV0uZ2V0TnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW3hdW3ldLnNldFZpc2libGUodGhpcy5jYXJkQXJyW3gxXVt5XS5pc1Zpc2libGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbeDFdW3ldLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW3gxXVt5XS5DYXJkU2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNkbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc2RvO1xyXG4gICAgfSxcclxuICAgIC8v5qC55o2u5bGP5bmV5aSn5bCP5Yib5bu65Y2h54mHXHJcbiAgICBjcmVhdGVDYXJkU3ByaXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhcmQgPSBDYXJkU3ByaXRlLmNyZWF0ZUNhcmRTcHJpdGUodGhpcy5yYW5kb21DcmVhdGVDYXJkTnVtYmVyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5DQVJEX1dJRFRIICogaSArIEdhbWVDb25maWcuREVWSUNFX1dJRFRIIC8gMjAuMCArIEdhbWVDb25maWcuQ0FSRF9XSURUSCAvIDIuMCxcclxuICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkNBUkRfV0lEVEggKiBqICsgR2FtZUNvbmZpZy5ERVZJQ0VfSEVJR0hUIC8gOC4wKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpXVtqXSA9IGNhcmQ7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmFkZENoaWxkKGNhcmQsIGksIGopO1xyXG4gICAgICAgICAgICAgICAgLy/niYjmnKzosIPmlbRcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/pmo/mnLrkuqfnlJ/mlbDlrZdcclxuICAgIHJhbmRvbUNyZWF0ZUNhcmROdW1iZXIoKSB7XHJcbiAgICAgICAgLy8gbGV0IG51bSA9IGNjLnJhbmRvbTBUbzEoKSAqIDU7XHJcbiAgICAgICAgbGV0IG51bSA9IE1hdGgucmFuZG9tKCkgKiA1O1xyXG4gICAgICAgIGxldCByZXR1cm5OdW0gPSBNYXRoLnBvdygyLCAoTWF0aC5mbG9vcihudW0pICsgMSkpO1xyXG4gICAgICAgIHJldHVybiByZXR1cm5OdW07XHJcbiAgICB9LFxyXG4gICAgLy/oh6rliqjnlJ/miJDljaHniYdcclxuICAgIGF1dG9DcmVhdGVDYXJkTnVtYmVyKGR0KSB7XHJcbiAgICAgICAgLy8gdGhpcy5yZW1vdmVDaGlsZEJ5VGFnKFRBR19wYXNzU3ByaXQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2ldW2pdLnNldFZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uc2V0TnVtYmVyKHRoaXMucmFuZG9tQ3JlYXRlQ2FyZE51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpXVtqXS5DYXJkU2hvdygpO1xyXG4gICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5tb3ZlQnV0dG9uQW5pbSh0aGlzLmNhcmRBcnJbaV1bal0sIHRydWUsIEFuaW1MYXllclRvb2wuTW92ZUJ1dHRvbkFuaW1UeXBlLnVwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBHYW1lRGF0YS5zZXRHYW1lUGFzc051bShHYW1lRGF0YS5nZXRHYW1lUGFzc051bSgpICsgMSk7XHJcbiAgICAgICAgR2FtZUNvbmZpZy5HYW1lU2NlbmUuc2V0UGFzc051bSgpO1xyXG4gICAgICAgIEdhbWVDb25maWcuR2FtZVNjZW5lLnByb2dyZXNzQmFyLnNjYWxlWCA9IDA7XHJcbiAgICAgICAgR2FtZVVpVG9vbHMuc2NoZWR1bGVPbmNlKHRoaXMsIHRoaXMuZG9DaGVjaywgMC4xNSk7XHJcbiAgICB9LFxyXG4gICAgc2V0U2NvcmUoKSB7XHJcbiAgICAgICAgR2FtZUNvbmZpZy5HYW1lU2NlbmUuc2V0U2NvcmUodGhpcy5zY29yZSk7XHJcbiAgICB9LFxyXG4gICAgZG9DaGVjayhkdCkge1xyXG4gICAgICAgIHRoaXMuc2F2ZU1lbW9yeUluZm9ybWF0aW9uKCk7IC8v5L+d5a2Y5Li05pe25L+h5oGvXHJcbiAgICAgICAgLy90aGlzLnNldFNjb3JlKHNjb3JlKTtcclxuICAgICAgICBsZXQgaXNHYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgbGV0IGlzUGFzc0dhbWUgPSB0cnVlO1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyB5KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FyZEFyclt4XVt5XS5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4IDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTIC0gMSAmJiB0aGlzLmNhcmRBcnJbeCArIDFdW3ldLmlzVmlzaWJsZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmICh0aGlzLmNhcmRBcnJbeCArIDFdW3ldLmdldE51bWJlcigpID09IHRoaXMuY2FyZEFyclt4XVt5XS5nZXROdW1iZXIoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNQYXNzR2FtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHkgPCBHYW1lQ29uZmlnLkNBRURfTElORVMgLSAxICYmIHRoaXMuY2FyZEFyclt4XVt5ICsgMV0uaXNWaXNpYmxlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKHRoaXMuY2FyZEFyclt4XVt5ICsgMV0uZ2V0TnVtYmVyKCkgPT0gdGhpcy5jYXJkQXJyW3hdW3ldLmdldE51bWJlcigpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1Bhc3NHYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNHYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1Bhc3NHYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBkZVRpbWUgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FyZEFycltpXVtqXS5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVUaW1lIDwgNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5jcmVhdGVQb3BTdGFyQW5pbSh0aGlzLmNhcmRBcnJbaV1bal0sICgrK2RlVGltZSkgKiAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5jcmVhdGVQb3BTdGFyQW5pbSh0aGlzLmNhcmRBcnJbaV1bal0sIGRlVGltZSAqIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkZVRpbWUgPCA1KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlID0gdGhpcy5zY29yZSArICg1IC0gZGVUaW1lKSAqICg1IC0gZGVUaW1lKSAqIDU7XHJcbiAgICAgICAgICAgICAgICBBbmltTGF5ZXJUb29sLmNyZWF0ZVNjb3JlTW92ZUFuaW0odGhpcy5jYXJkQXJyWzJdWzJdLCAoNSAtIGRlVGltZSkgKiAoNSAtIGRlVGltZSkgKiA1LCBmYWxzZSk7Ly/liqDliIbliqjnlLtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zY29yZSA8IEdhbWVEYXRhLmdldEdhbWVQYXNzU2NvcmUoKSkge1xyXG4gICAgICAgICAgICAgICAgR2FtZVVpVG9vbHMuc2NoZWR1bGVPbmNlKHRoaXMsIHRoaXMuZ2FtZU92ZXIsIDEgKyBkZVRpbWUgKiAwLjUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5jcmVhdGVTaG93TWVzc2FnZUJveEF3YXJkKHRoaXMuZ2V0UGFyZW50KCksIC0xKTtcclxuICAgICAgICAgICAgICAgIC8vIEdhbWVVaVRvb2xzLnNjaGVkdWxlT25jZSh0aGlzLCB0aGlzLmF1dG9DcmVhdGVDYXJkTnVtYmVyLCAxICsgZGVUaW1lICogMC41KTtcclxuICAgICAgICAgICAgICAgIEdhbWVVaVRvb2xzLnNjaGVkdWxlT25jZSh0aGlzLCB0aGlzLmdhbWVQYXNzLCAxICsgZGVUaW1lICogMC41KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZ2FtZVBhc3MoKSB7XHJcbiAgICAgICAgR2FtZVVpVG9vbHMubG9hZGluZ0xheWVyKFwicGFuZWwvR2FtZVBhc3NcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGdhbWVPdmVyKGR0KS8v5ri45oiP57uT5p2fXHJcbiAgICB7XHJcbiAgICAgICAgR2FtZUNvbmZpZy5JU19HQU1FX09WRVIgPSB0cnVlO1xyXG4gICAgICAgIEdhbWVVaVRvb2xzLmxvYWRpbmdMYXllcihcInBhbmVsL0dhbWVPdmVyXCIpO1xyXG4gICAgICAgIC8vIGNjLmxvYWRlci5sb2FkUmVzKFwicGFuZWwvR2FtZU92ZXJcIiwgKGVyciwgcHJlZmFiKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAvLyAgICAgR2FtZUNvbmZpZy5HYW1lU2NlbmUubm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKuaSpOmUgOa4uOaIj1xyXG4gICAgICovXHJcbiAgICBiYWNrR2FtZSgpIHtcclxuICAgICAgICBpZiAoR2FtZURhdGEuc2NvcmVOdW0gPT0gMSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2ldW2pdLnNldE51bWJlcihHYW1lRGF0YS5zY29yZUNhcmQxW2ldW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uQ2FyZFNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoR2FtZURhdGEuc2NvcmVDYXJkM1tpXVtqXSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpXVtqXS5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY29yZSA9IEdhbWVEYXRhLnNjb3JlMTtcclxuICAgICAgICAgICAgR2FtZURhdGEuc2NvcmVOdW0gPSAwO1xyXG4gICAgICAgICAgICBHYW1lRGF0YS5zY29yZTAgPSBHYW1lRGF0YS5zY29yZTE7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5zY29yZUNhcmQyW2ldW2pdID0gR2FtZURhdGEuc2NvcmVDYXJkM1tpXVtqXTtcclxuICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5zY29yZUNhcmQwW2ldW2pdID0gR2FtZURhdGEuc2NvcmVDYXJkMVtpXVtqXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFNjb3JlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgR2FtZVRvb2xzLnRvYXN0TWVzc2FnZSg0KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNhdmVNZW1vcnlJbmZvcm1hdGlvbigpIHtcclxuICAgICAgICBpZiAoR2FtZURhdGEuc2NvcmVOdW0gPT0gMCkge1xyXG4gICAgICAgICAgICBHYW1lRGF0YS5zY29yZU51bSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEdhbWVEYXRhLnNjb3JlMSA9IEdhbWVEYXRhLnNjb3JlMDtcclxuICAgICAgICBHYW1lRGF0YS5zY29yZTAgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgR2FtZURhdGEuc2NvcmVDYXJkM1tpXVtqXSA9IEdhbWVEYXRhLnNjb3JlQ2FyZDJbaV1bal07XHJcbiAgICAgICAgICAgICAgICBHYW1lRGF0YS5zY29yZUNhcmQyW2ldW2pdID0gKHRoaXMuY2FyZEFycltpXVtqXS5pc1Zpc2libGUoKSA/IDAgOiAxKTtcclxuICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNjb3JlQ2FyZDFbaV1bal0gPSBHYW1lRGF0YS5zY29yZUNhcmQwW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgR2FtZURhdGEuc2NvcmVDYXJkMFtpXVtqXSA9IHRoaXMuY2FyZEFycltpXVtqXS5nZXROdW1iZXIoKTtcclxuICAgICAgICAgICAgICAgIEdhbWVEYXRhLmJlc3ROdW0gPSBHYW1lRGF0YS5iZXN0TnVtID4gdGhpcy5jYXJkQXJyW2ldW2pdLmdldE51bWJlcigpID8gR2FtZURhdGEuYmVzdE51bSA6IHRoaXMuY2FyZEFycltpXVtqXS5nZXROdW1iZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVQb3BTdGFyO1xyXG4iXX0=