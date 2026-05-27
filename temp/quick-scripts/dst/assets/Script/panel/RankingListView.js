
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
    GameUiTools.setButtonClickEvents(this, this.backButton, "backButtonFunc");
    // GameUiTools.setButtonClickEvents(this, this.shareButton, "shareButtonFunc");
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
        window.sharedCanvas.height = 1280;
        // 发消息给子域
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcUmFua2luZ0xpc3RWaWV3LmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiQW5pbUxheWVyVG9vbCIsIkdhbWVUb29scyIsIkdhbWVVaVRvb2xzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiYWNrQnV0dG9uIiwiTm9kZSIsInJhbmtpbmdTY3JvbGxWaWV3IiwiU3ByaXRlIiwic2hhcmVUaWNrZXQiLCJvbkxvYWQiLCJzdGFydCIsInNldEJ1dHRvbkNsaWNrRXZlbnRzIiwic2hhcmVOb2RlIiwiYWRkQ29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJzZXRQb3NpdGlvbiIsIm5vZGUiLCJhZGRDaGlsZCIsIkNDX1dFQ0hBVEdBTUUiLCJ3aW5kb3ciLCJzaGFyZWRDYW52YXMiLCJ1bmRlZmluZWQiLCJ0ZXgiLCJUZXh0dXJlMkQiLCJ3aWR0aCIsImhlaWdodCIsInd4IiwicG9zdE1lc3NhZ2UiLCJtZXNzYWdlVHlwZSIsIk1BSU5fTUVOVV9OVU0iLCJnYW1lVHlwZU5vZGUiLCJsb2ciLCJzaGFyZUJ1dHRvbkZ1bmMiLCJldmVudCIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsInNldFRpbWVvdXQiLCJzaGFyZVBpY3R1cmUiLCJiYWNrQnV0dG9uRnVuYyIsImRlc3Ryb3kiLCJfdXBkYXRlU3ViRG9tYWluQ2FudmFzIiwiaW5pdFdpdGhFbGVtZW50IiwiaGFuZGxlTG9hZGVkVGV4dHVyZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3RDLElBQUlDLGFBQWEsR0FBR0QsT0FBTyxDQUFDLGVBQWUsQ0FBQztBQUM1QyxJQUFJRSxTQUFTLEdBQUdGLE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDcEMsSUFBSUcsV0FBVyxH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Q0MsWUFBWSxJQUFJQyxTQUFTLEVBQUU7UUFDbEMsSUFBSSxDQUFDQyxHQUFHLENBQUNrQixlQUFlLENBQUNyQixNQUFNLENBQUNDLFlBQVksQ0FBQztRQUM3QyxJQUFJLENBQUNFLEdBQUcsQ0FBQ21CLG1CQUFtQixFQUFFO1FBQzlCLElBQUksQ0FBQ3BDLGlCQUFpQixDQUFDcUMsV0FBVyxHQUFHLElBQUkzQyxFQUFFLENBQUM0QyxXQUFXLENBQUMsSUFBSSxDQUFDckIsR0FBRyxDQUFDO01BQ3JFO0lBQ0o7RUFDSixDQUFDO0VBQ0RzQixNQUFNLFdBQUFBLE9BQUEsRUFBRztJQUNMLElBQUksQ0FBQ0wsc0JBQXNCLEVBQUU7RUFDakM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XHJcbnZhciBBbmltTGF5ZXJUb29sID0gcmVxdWlyZShcIkFuaW1MYXllclRvb2xcIik7XHJcbnZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xyXG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIC8vIG5hbWU6IFwiUmFua2luZ0xpc3RWaWV3XCIsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYmFja0J1dHRvbjogY2MuTm9kZSxcclxuICAgICAgICAvLyBzaGFyZUJ1dHRvbjogY2MuTm9kZSxcclxuICAgICAgICByYW5raW5nU2Nyb2xsVmlldzogY2MuU3ByaXRlLC8v5pi+56S65o6S6KGM5qacXHJcbiAgICAgICAgc2hhcmVUaWNrZXQ6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfSxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMuYmFja0J1dHRvbiwgXCJiYWNrQnV0dG9uRnVuY1wiKTtcclxuICAgICAgICAvLyBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLnNoYXJlQnV0dG9uLCBcInNoYXJlQnV0dG9uRnVuY1wiKTtcclxuICAgICAgICBpZiAodGhpcy5zaGFyZVRpY2tldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBzaGFyZU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgICAgICBzaGFyZU5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIue+pOaOkuihjFwiO1xyXG4gICAgICAgICAgICBzaGFyZU5vZGUuc2V0UG9zaXRpb24oLTI2MCwgNTAzKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHNoYXJlTm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChDQ19XRUNIQVRHQU1FKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2hhcmVkQ2FudmFzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXggPSBuZXcgY2MuVGV4dHVyZTJEKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2hhcmVkQ2FudmFzLndpZHRoID0gNzIwO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnNoYXJlZENhbnZhcy5oZWlnaHQgPSAxMjgwO1xyXG4gICAgICAgICAgICAgICAgLy8g5Y+R5raI5oGv57uZ5a2Q5Z+fXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGFyZVRpY2tldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lnd4LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVR5cGU6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1BSU5fTUVOVV9OVU06IEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVUaWNrZXQ6IHRoaXMuc2hhcmVUaWNrZXRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lnd4LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVR5cGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1BSU5fTUVOVV9OVU06IEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBnYW1lVHlwZU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgICAgICBnYW1lVHlwZU5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIuaaguaXoOaOkuihjOamnOaVsOaNrlwiO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZ2FtZVR5cGVOb2RlKTtcclxuICAgICAgICAgICAgY2MubG9nKFwi6I635Y+W5o6S6KGM5qac5pWw5o2u44CCXCIgKyBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2hhcmVCdXR0b25GdW5jOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDQpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBHYW1lVG9vbHMuc2hhcmVQaWN0dXJlKFwic2hhcmVUaWNrZXRcIik7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH0sXHJcblxyXG4gICAgYmFja0J1dHRvbkZ1bmM6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8g5Yi35paw5a2Q5Z+f55qE57q555CGXHJcbiAgICBfdXBkYXRlU3ViRG9tYWluQ2FudmFzKCkge1xyXG4gICAgICAgIGlmIChDQ19XRUNIQVRHQU1FKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2hhcmVkQ2FudmFzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXguaW5pdFdpdGhFbGVtZW50KHdpbmRvdy5zaGFyZWRDYW52YXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXguaGFuZGxlTG9hZGVkVGV4dHVyZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5raW5nU2Nyb2xsVmlldy5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0aGlzLnRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVN1YkRvbWFpbkNhbnZhcygpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==