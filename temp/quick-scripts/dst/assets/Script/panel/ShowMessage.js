
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
    this.messageLabel.string = toastMessage;

    // GameUiTools.setButtonClickEvents(this, this.backButton, "backButtonFunc");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcU2hvd01lc3NhZ2UuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVG9vbHMiLCJHYW1lVWlUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibWVzc2FnZUxhYmVsIiwiTGFiZWwiLCJiYWNrQnV0dG9uIiwiTm9kZSIsInRvYXN0VHlwZSIsInN0YXJ0IiwidG9hc3RNZXNzYWdlIiwic3RyaW5nIiwiYmFja0J1dHRvbkZ1bmMiLCJldmVudCIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsIm5vZGUiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0QyxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDcEMsSUFBSUUsV0FBVyxHQUFHRixPQUFPLENBQUMsYUFBYSxDQUFDO0FBQ3hDRyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLFlBQVksRUFBRUosRUFBRSxDQUFDSyxLQUFLO0lBQ3RCQyxVQUFVLEVBQUVOLEVBQUUsQ0FBQ08sSUFBSTtJQUFDO0lBQ3BCQyxTQUFTLEVBQUU7RUFDZixDQUFDO0VBRURDLEtBQUssV0FBQUEsTUFBQSxFQUFHO0lBQ0osSUFBSUMsWUFBWSxHQUFHLElBQUk7SUFDdkIsSUFBSSxJQUFJLENBQUNGLFNBQVMsSUFBSSxDQUFDLEVBQUU7TUFDckJFLFlBQVksR0FBRyxZQUFZO0lBQy9CLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ0YsU0FBUyxJQUFJLENBQUMsRUFBRTtNQUM1QkUsWUFBWSxHQUFHLDBCQUEwQjtJQUM3QyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNGLFNBQVMsSUFBSSxDQUFDLEVBQUU7TUFDNUJFLFlBQVks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R0FBRywwQkFBMEI7SUFDN0MsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDRixTQUFTLElBQUksRUFBRSxFQUFFO01BQzdCRSxZQUFZLEdBQUcsYUFBYTtJQUNoQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNGLFNBQVMsSUFBSSxFQUFFLEVBQUU7TUFDN0JFLFlBQVksR0FBRywwR0FBMEc7SUFDN0gsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDRixTQUFTLElBQUksRUFBRSxFQUFFO01BQzdCRSxZQUFZLEdBQUcsNkRBQTZEO0lBQ2hGLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ0YsU0FBUyxJQUFJLEVBQUUsRUFBRTtNQUM3QkUsWUFBWSxHQUFHLDZEQUE2RDtJQUNoRixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNGLFNBQVMsSUFBSSxFQUFFLEVBQUU7TUFDN0JFLFlBQVksR0FBRyxpREFBaUQ7SUFDcEUsQ0FBQyxNQUFLO01BQ0ZBLFlBQVksR0FBRyxJQUFJLENBQUNGLFNBQVM7SUFDakM7SUFDQSxJQUFJLENBQUNKLFlBQVksQ0FBQ08sTUFBTSxHQUFHRCxZQUFZOztJQUV2QztJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFDSixDQUFDOztFQUVERSxjQUFjLEVBQUUsU0FBQUEsZUFBVUMsS0FBSyxFQUFFO0lBQzdCZixTQUFTLENBQUNnQixxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDbEMsSUFBSSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sRUFBRTtFQUN2QjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcclxudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XHJcbnZhciBHYW1lVWlUb29scyA9IHJlcXVpcmUoXCJHYW1lVWlUb29sc1wiKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBtZXNzYWdlTGFiZWw6IGNjLkxhYmVsLFxyXG4gICAgICAgIGJhY2tCdXR0b246IGNjLk5vZGUsLy/ov5Tlm57mjInpkq5cclxuICAgICAgICB0b2FzdFR5cGU6IDAsXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGxldCB0b2FzdE1lc3NhZ2UgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5qyi6L+O6L+b5YWl5rWq5ryrMjA0OFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuivpeWKn+iDveiLpumAvOeahOeoi+W6j+WRmOi/mOWcqOWKquWKm+W8gOWPkeS4re+8jOasoui/jueVmeiogOWPjemmiO+8gVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMikge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuenr+WIhuS4jei2s++8ge+8ge+8geaCqOWPr+S7peeOqea4uOaIj+adpeiOt+WPluenr+WIhu+8jOi/mOWPr+S7peavj+WkqeeZu+W9lei1muWPluenr+WIhu+8gVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMykge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuacgOWkmuWPquiDveWQjumAgDPmraXvvIHvvIHvvIFcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDQpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLlj6rog73lkI7pgIAx5q2l77yB77yB77yBXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSA1KSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi6K+l5qih5byP5pqC5peg5biu5Yqp77yM6LCi6LCi77yB77yB77yBXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSA2KSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi56ev5YiG5LiN6Laz77yB77yB77yB5oKo6ZyA6KaBMzAw56ev5YiG5p2l5aSN5rS744CCXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSA3KSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5oGt5Zac5YWF5YC85oiQ5Yqf77yM5oSf6LCi5oKo5a+55rWq5ryrMjA0OOeahOaUr+aMge+8ge+8ge+8gVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gOCkge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuWFheWAvOWksei0pe+8jOiwouiwouaUr+aMge+8ge+8ge+8gVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gOSkge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuS7iuWkqemmluasoei/m+WFpeWlluWKsTEwMOenr+WIhu+8jOavj+Wkqemmluasoei/m+WFpea4uOaIj+mDveS8muiOt+WPluenr+WIhuWTn++8ge+8ge+8gVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTApIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLmsqHmnInmib7liLDlupTnlKjluILlnLpcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDExKSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5oGt5Zac6I635b6X5aWW5YqxMTDnp6/liIbvvIzmhJ/osKLmgqjlr7nmtarmvKsyMDQ455qE5pSv5oyBXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAxMikge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuaCqOS7iuWkqeW3sue7j+mihui/h+WlluWKseS6hu+8jOiwouiwolwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTMpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLogZrlkIjmqKHlvI/mmoLml6Doh6rliqjlip/og73vvIzosKLosKJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDE0KSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5oGt5Zac6I635b6X5aWW5YqxMTAw56ev5YiG77yM5oSf6LCi5oKo5a+55rWq5ryrMjA0OOeahOaUr+aMgVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTUpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLnu4/lhbjmqKHlvI/kuI3og73kvb/nlKjpgZPlhbflip/og73vvIzmgqjlj6/ku6Xljrvor5Xor5XlhbblroPnjqnms5Xlk5/vvIFcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDE2KSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5LiK5Lyg5b6X5YiG5aSx6LSl77yM6K+35qOA5p+l572R57ucXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAxNykge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuaOkuihjOamnOaVsOaNruWksei0pe+8jOivt+ajgOafpee9kee7nFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTgpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLkuIrkvKDlvpfliIbmiJDlip/vvIzotbbntKfljrvnnIvnnIvmjpLooYzmppzlkKdcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDE5KSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi6KeG6aKR5aWW5YqxXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyMCkge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuS/neWtmOWbvueJh+aIkOWKn1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMjEpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLkv53lrZjlm77niYflpLHotKVcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDIyKSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi54K55Ye76ZyA6KaB5raI6Zmk55qE54ix5b+D5Y2z5Y+v5raI6Zmk6K+l54ix5b+D77yBXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyMykge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIueCueWHu+mcgOimgeaNouS9jeeahOeIseW/g+WwhuS8mumAieS4reivpeeIseW/g++8jOe7p+e7reeCueWHu+ivpeeIseW/g+WRqOi+ueeahOeIseW/g+WNs+WPr+WunueOsOeIseW/g+eahOaNouS9je+8gVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMjQpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLngrnlh7vpnIDopoHnvKnlsI/mlbDlrZfnmoTniLHlv4PljbPlj6/lsIbor6XniLHlv4PnmoTmlbDlrZfnvKnlsI8y5YCNXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyNSkge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIueCueWHu+mcgOimgea2iOmZpOeahOeIseW/g+WNs+WPr+a2iOmZpOS4juivpeeIseW/g+WQjOaoquaOkueahOeIseW/g++8gVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMjYpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLngrnlh7vpnIDopoHmtojpmaTnmoTniLHlv4PljbPlj6/mtojpmaTkuI7or6XniLHlv4PlkIznq5bmjpLnmoTniLHlv4PvvIFcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDI3KSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi6KeG6aKR5pKt5pS+5aSx6LSl77yM6LCi6LCi77yB77yBXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyOCkge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIua7keWKqOWxj+W5leadpeenu+WKqOWwj+aWueWdl++8jOS4pOS4quaVsOWtl+S4gOagt+eahOWwj+aWueWdl+ebuOaSnuaXtuWwseS8muebuOWKoOWQiOaIkOS4gOS4quaWueWdl++8jOavj+asoeaTjeS9nOS5i+WQjuS8muWcqOepuueZveeahOaWueagvOWkhOmaj+acuueUn+aIkOS4gOS4qjLmiJY055qE5pa55Z2X77yM5pyA57uI5b6X5Yiw5LiA5LiqMjA0OOeahOaWueWdl+Wwseeul+iDnOWIqeS6hu+8jOWmguaenDE25Liq5qC85a2Q5YWo6YOo5aGr5ruh5peg5rOV56e75Yqo55qE6K+d5YiZ5ri45oiP57uT5p2f44CCXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyOSkge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIueCueWHu+epuueZveeIseW/g++8jOeIseW/g+S8muWQkeeCueWHu+eahOS9jee9rumdoOaLou+8jOW9k+S4pOS4quaVsOWtl+ebuOWQjOeahOeIseW/g+ebuOmBh+aXtuWwseS8muWQiOW5tuS4uuS4pOaVsOWtl+S5i+WSjO+8jOWFqOmDqOWhq+a7oeaXoOazleenu+WKqOeahOivneWImea4uOaIj+e7k+adn+OAglwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMzApIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLpgInkuK3ov57mjqXlnKjkuIDotbfnmoTnm7jlkIzmlbDlrZfvvIzngrnlh7vnmoTmlbDlrZfkvJrogZrlkIjkuLrmm7TlpKfnmoTmlbDlrZfvvIzlhbblroPmlbDlrZfliJnmtojpmaTvvIzlrozmiJDpgJrlhbPmiYDpnIDlvpfliIbljbPlj6/ov5vlhaXkuIvkuIDlhbPvvIzlkKbliJnmuLjmiI/nu5PmnZ/jgIJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDMxKSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi6YCJ5Lit6L+e5o6l5Zyo5LiA6LW355qE55u45ZCM5pWw5a2X77yM6YCJ5Lit55qE5pWw5a2X5bCG5Lya6KKr5raI6Zmk77yM5a6M5oiQ6YCa5YWz5omA6ZyA5b6X5YiG5Y2z5Y+v6L+b5YWl5LiL5LiA5YWz77yM5ZCm5YiZ5ri45oiP57uT5p2f44CCXCI7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSB0aGlzLnRvYXN0VHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlTGFiZWwuc3RyaW5nID0gdG9hc3RNZXNzYWdlO1xyXG5cclxuICAgICAgICAvLyBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLmJhY2tCdXR0b24sIFwiYmFja0J1dHRvbkZ1bmNcIik7XHJcbiAgICAgICAgLy8gR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5ub2RlLCBcImJhY2tCdXR0b25GdW5jXCIpO1xyXG4gICAgICAgIC8vIGlmIChDQ19XRUNIQVRHQU1FKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgLy8gICAgIHd4LnNob3dNb2RhbCh7dGl0bGU6IFwi5rWq5ryr5o+Q56S6XCIsIGNvbnRlbnQ6IHRvYXN0TWVzc2FnZSxzaG93Q2FuY2VsOmZhbHNlfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfSxcclxuXHJcbiAgICBiYWNrQnV0dG9uRnVuYzogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgwKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==