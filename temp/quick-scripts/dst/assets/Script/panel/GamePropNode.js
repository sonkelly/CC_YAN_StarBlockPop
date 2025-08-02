
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