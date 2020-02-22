"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            this.oneBitmapLeft = new createjs.Bitmap('./Assets/images/1.png');
            this.oneBitmapLeft.x = 50;
            this.oneBitmapLeft.y = 50;
            this.oneBitmapRight = new createjs.Bitmap('./Assets/images/1.png');
            this.oneBitmapRight.x = 350;
            this.oneBitmapRight.y = 50;
            this.twoBitmapLeft = new createjs.Bitmap('./Assets/images/2.png');
            this.twoBitmapLeft.x = 50;
            this.twoBitmapLeft.y = 50;
            this.twoBitmapRight = new createjs.Bitmap('./Assets/images/2.png');
            this.twoBitmapRight.x = 350;
            this.twoBitmapRight.y = 50;
            this.threeBitmapLeft = new createjs.Bitmap('./Assets/images/3.png');
            this.threeBitmapLeft.x = 50;
            this.threeBitmapLeft.y = 50;
            this.threeBitmapRight = new createjs.Bitmap('./Assets/images/3.png');
            this.threeBitmapRight.x = 350;
            this.threeBitmapRight.y = 50;
            this.fourBitmapLeft = new createjs.Bitmap('./Assets/images/4.png');
            this.fourBitmapLeft.x = 50;
            this.fourBitmapLeft.y = 50;
            this.fourBitmapRight = new createjs.Bitmap('./Assets/images/4.png');
            this.fourBitmapRight.x = 350;
            this.fourBitmapRight.y = 50;
            this.fiveBitmapLeft = new createjs.Bitmap('./Assets/images/5.png');
            this.fiveBitmapLeft.x = 50;
            this.fiveBitmapLeft.y = 50;
            this.fiveBitmapRight = new createjs.Bitmap('./Assets/images/5.png');
            this.fiveBitmapRight.x = 350;
            this.fiveBitmapRight.y = 50;
            this.sixBitmapLeft = new createjs.Bitmap('./Assets/images/6.png');
            this.sixBitmapLeft.x = 50;
            this.sixBitmapLeft.y = 50;
            this.sixBitmapRight = new createjs.Bitmap('./Assets/images/6.png');
            this.sixBitmapRight.x = 350;
            this.sixBitmapRight.y = 50;
            this._rollButton = new objects.Button("./Assets/images/rollButton.png", 300, 370, true);
            //this._rollButton.width = 3;
            this.dice1ResultLabel = new objects.Label("-1", "40px", "Consolas", "#000000", 150, 265, true);
            this.dice2ResultLabel = new objects.Label("-2", "40px", "Consolas", "#000000", 450, 265, true);
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        Play.prototype.Main = function () {
            var _this = this;
            this.addChild(this._rollButton);
            this.addChild(this.dice1ResultLabel);
            this.addChild(this.dice2ResultLabel);
            this._rollButton.on("click", function () {
                _this.dice1ResultLabel.text = "hi";
                _this.dice2ResultLabel.text = "bye";
                var res1 = Math.floor(util.Mathf.RandomRange(1, 6));
                var res2 = Math.floor(util.Mathf.RandomRange(1, 6));
                _this.dice1ResultLabel.text = res1.toString();
                _this.dice2ResultLabel.text = res2.toString();
                switch (res1) {
                    case 1:
                        _this.addChild(_this.oneBitmapLeft);
                        break;
                    case 2:
                        _this.addChild(_this.twoBitmapLeft);
                        break;
                    case 3:
                        _this.addChild(_this.threeBitmapLeft);
                        break;
                    case 4:
                        _this.addChild(_this.fourBitmapLeft);
                        break;
                    case 5:
                        _this.addChild(_this.fiveBitmapLeft);
                        break;
                    case 6:
                        _this.addChild(_this.sixBitmapLeft);
                        break;
                }
                switch (res2) {
                    case 1:
                        _this.addChild(_this.oneBitmapRight);
                        break;
                    case 2:
                        _this.addChild(_this.twoBitmapRight);
                        break;
                    case 3:
                        _this.addChild(_this.threeBitmapRight);
                        break;
                    case 4:
                        _this.addChild(_this.fourBitmapRight);
                        break;
                    case 5:
                        _this.addChild(_this.fiveBitmapRight);
                        break;
                    case 6:
                        _this.addChild(_this.sixBitmapRight);
                        break;
                }
            });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map