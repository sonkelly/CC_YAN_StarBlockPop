
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcR2FtZVByb3BOb2RlLmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiR2FtZURhdGEiLCJHYW1lVWlUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicHJvcFR5cGUiLCJTcHJpdGUiLCJwb3JwTnVtYmVyTGFiZWwiLCJMYWJlbCIsInBvcnBOdW1iZXJOb2RlIiwiTm9kZSIsImFkZE5vZGUiLCJwcm9wVHlwZU51bWJlciIsIm9uTG9hZCIsImdldFNwcml0ZUZyYW1lIiwic2V0UHJvcFR5cGUiLCJnZXRHYW1lUHJvcE51bWJlciIsImFjdGl2ZSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDdEMsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDLElBQUlFLFFBQVEsR0FBR0YsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNsQyxJQUFJRyxXQUFXLEdBQUdILE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDeENJLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBQ3JCQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFFSixFQUFFLENBQUNLLE1BQU07SUFDbkJDLGVBQWUsRUFBRU4sRUFBRSxDQUFDTyxLQUFLO0lBQ3pCQyxjQUFjLEVBQUVSLEVBQUUsQ0FBQ1MsSUFBSTtJQUN2QkMsT0FBTyxFQUFFVixFQUFFLENBQUNTLElBQUk7SUFDaEJFLGNBQWMsRUFBRTtFQUNwQixDQUFDO0VBRURDLE1BQU0sV0FBQUEsT0FBQSxFQUFHO0lBQ0wsSUFBSSxJQUFJLENBQUNELGNBQWMsSUFBSSxDQUFDLEVBQUU7TUFDMUJaLFdBQVcsQ0FBQ2MsY0FBYyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQ1QsUUFBUSxDQUFDO0lBQ3BFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ08sY0FBYyxJQUFJLENBQUMsRUFBRTtNQUNqQ1osV0FBVyxDQUFDYyxjQUFjLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDVCxRQUFRLENBQUM7SUFDcEUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDTyxjQUFjLElBQUksQ0FBQyxFQUFFO01BQ2pDWixXQUFXLENBQUNjLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUNULFFBQVEsQ0FBQztJQUNwRTtJQUNBLElBQUksQ0FBQ1UsV0FBVyxFQUFFO0VBQ3RCLENBQUM7RUFFREEsV0FBVyxXQUFBQSxZQUFBLEVBQUc7SUFDVixJQUFJaEIsUUFBUSxDQUFDaUIsaUJBQWlCLENBQUMsSUFBSSxDQUFDSixjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7TUFDckQsSUFBSSxDQUFDSCxjQUFjLENBQUNRLE1BQU0sR0FBRyxJQUFJO01BQ2pDLElBQUksQ0FBQ1YsZUFBZSxDQUFDVyxNQUFNLEdBQUduQixRQUFRLENBQUNpQixpQkFBaUIsQ0FBQyxJQUFJLENBQUNKLGNBQWMsQ0FBQztNQUM3RSxJQUFJLENBQUNELE9BQU8sQ0FBQ00sTUFBTSxHQUFHLEtBQUs7SUFDL0IsQ0FBQyxNQUFNO01BQ0gsSUFBSSxDQUFDUixjQUFjLENBQUNRLE1BQU0sR0FBRyxLQUFLO01BQ2xDLElBQUksQ0FBQ04sT0FBTyxDQUFDTSxNQUFNLEdBQUcsSUFBSTtJQUM5QjtFQUNKO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xyXG52YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcclxudmFyIEdhbWVEYXRhID0gcmVxdWlyZShcIkdhbWVEYXRhXCIpO1xyXG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwcm9wVHlwZTogY2MuU3ByaXRlLFxyXG4gICAgICAgIHBvcnBOdW1iZXJMYWJlbDogY2MuTGFiZWwsXHJcbiAgICAgICAgcG9ycE51bWJlck5vZGU6IGNjLk5vZGUsXHJcbiAgICAgICAgYWRkTm9kZTogY2MuTm9kZSxcclxuICAgICAgICBwcm9wVHlwZU51bWJlcjogMCxcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BUeXBlTnVtYmVyID09IDApIHtcclxuICAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3BfZ2FtZS9wb3BnYW1lXzI1XCIsIHRoaXMucHJvcFR5cGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wVHlwZU51bWJlciA9PSAxKSB7XHJcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX2dhbWUvcG9wZ2FtZV8zMVwiLCB0aGlzLnByb3BUeXBlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcFR5cGVOdW1iZXIgPT0gMikge1xyXG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL3BvcGdhbWVfMzBcIiwgdGhpcy5wcm9wVHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0UHJvcFR5cGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0UHJvcFR5cGUoKSB7XHJcbiAgICAgICAgaWYgKEdhbWVEYXRhLmdldEdhbWVQcm9wTnVtYmVyKHRoaXMucHJvcFR5cGVOdW1iZXIpID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvcnBOdW1iZXJOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucG9ycE51bWJlckxhYmVsLnN0cmluZyA9IEdhbWVEYXRhLmdldEdhbWVQcm9wTnVtYmVyKHRoaXMucHJvcFR5cGVOdW1iZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wb3JwTnVtYmVyTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5hZGROb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==