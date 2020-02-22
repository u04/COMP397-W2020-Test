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
            this._rollButton = new objects.Button("./Assets/images/rollButton.png", 300, 120, true);
            //this._rollButton.width = 3;
            this.dice1ResultLabel = new objects.Label("-1", "40px", "Consolas", "#000000", 200, 200, true);
            this.dice2ResultLabel = new objects.Label("-2", "40px", "Consolas", "#000000", 200, 250, true);
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
            });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map