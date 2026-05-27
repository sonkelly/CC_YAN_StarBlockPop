
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcR2FtZUhlbHAuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVG9vbHMiLCJHYW1lVWlUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmFja0NvbG9yIiwiTm9kZSIsImJhY2tCdXR0b24iLCJvbkxvYWQiLCJzZXRCdXR0b25DbGlja0V2ZW50cyIsImJ1dHRvbkZ1bmMiLCJldmVudCIsImJ1dHRvbiIsInRhcmdldCIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsIm5vZGUiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0QyxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDcEMsSUFBSUUsV0FBVyxHQUFHRixPQUFPLENBQUMsYUFBYSxDQUFDO0FBQ3hDRyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUNyQkMsVUFBVSxFQUFFO0lBQ1JDLFNBQVMsRUFBRUosRUFBRSxDQUFDSyxJQUFJO0lBQ2xCQyxVQUFVLEVBQUVOLEVBQUUsQ0FBQ0ssSUFBSSxDQUFFO0VBQ3pCLENBQUM7RUFFREUsTUFBTSxXQUFBQSxPQUFBLEVBQUc7SUFDTFIsV0FBVyxDQUFDUyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDRixVQUFVLEVBQUUsWUFBWSxDQUFDO0VBQ3pFLENBQUM7RUFFREcsVUFBVSxFQUFFLFNBQUFBLFdBQVVDLEtBQUssRUFBRTtJQUN6QixJQUFJQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0UsTUFBTTtJQUN6QixJQUFJLElBQUksQ0FBQ04sVUFBVSxJQUFJSyxNQUFNLEVBQUU7TUFDM0JiLFNBQVMsQ0FBQ2UscUJBQXFCLENBQUMsQ0FBQyxDQUFDO01BQ2xDLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLEVBQUU7SUFDdkI7SUFDQSxPQUFPLElBQUk7RUFDZjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcclxudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XHJcbnZhciBHYW1lVWlUb29scyA9IHJlcXVpcmUoXCJHYW1lVWlUb29sc1wiKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJhY2tDb2xvcjogY2MuTm9kZSxcclxuICAgICAgICBiYWNrQnV0dG9uOiBjYy5Ob2RlLCAvL+i/lOWbnuaMiemSrlxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5iYWNrQnV0dG9uLCBcImJ1dHRvbkZ1bmNcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGJ1dHRvbkZ1bmM6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFja0J1dHRvbiA9PSBidXR0b24pIHtcclxuICAgICAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgwKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG59KTtcclxuIl19