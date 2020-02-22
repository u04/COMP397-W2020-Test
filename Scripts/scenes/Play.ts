module scenes {
    export class Play extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _rollButton: objects.Button;
        private dice1ResultLabel: objects.Label;
        private dice2ResultLabel: objects.Label;
        
        private oneBitmapLeft: createjs.Bitmap;
        private oneBitmapRight: createjs.Bitmap;

        private twoBitmapLeft: createjs.Bitmap;
        private twoBitmapRight: createjs.Bitmap;

        private threeBitmapLeft: createjs.Bitmap;
        private threeBitmapRight: createjs.Bitmap;

        private fourBitmapLeft: createjs.Bitmap;
        private fourBitmapRight: createjs.Bitmap;

        private fiveBitmapLeft: createjs.Bitmap;
        private fiveBitmapRight: createjs.Bitmap;

        private sixBitmapLeft: createjs.Bitmap;
        private sixBitmapRight: createjs.Bitmap;
        


        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor() {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void {
            this.oneBitmapLeft = new createjs.Bitmap('./Assets/images/1_small.png');
            this.oneBitmapLeft.x = 100;
            this.oneBitmapLeft.y = 300;
            this.oneBitmapRight = new createjs.Bitmap('./Assets/images/1_small.png');
            this.oneBitmapRight.x = 300;
            this.oneBitmapRight.y = 300;

            this.twoBitmapLeft = new createjs.Bitmap('./Assets/images/2_small.png');
            this.twoBitmapLeft.x = 100;
            this.twoBitmapLeft.y = 300;
            this.twoBitmapRight = new createjs.Bitmap('./Assets/images/2_small.png');
            this.twoBitmapRight.x = 300;
            this.twoBitmapRight.y = 300;

            this.threeBitmapLeft = new createjs.Bitmap('./Assets/images/3_small.png');
            this.threeBitmapLeft.x = 100;
            this.threeBitmapLeft.y = 300;
            this.threeBitmapRight = new createjs.Bitmap('./Assets/images/3_small.png');
            this.threeBitmapRight.x = 300;
            this.threeBitmapRight.y = 300;

            this.fourBitmapLeft = new createjs.Bitmap('./Assets/images/4_small.png');
            this.fourBitmapLeft.x = 100;
            this.fourBitmapLeft.y = 300;
            this.fourBitmapRight = new createjs.Bitmap('./Assets/images/4_small.png');
            this.fourBitmapRight.x = 300;
            this.fourBitmapRight.y = 300;

            this.fiveBitmapLeft = new createjs.Bitmap('./Assets/images/5_small.png');
            this.fiveBitmapLeft.x = 100;
            this.fiveBitmapLeft.y = 300;
            this.fiveBitmapRight = new createjs.Bitmap('./Assets/images/5_small.png');
            this.fiveBitmapRight.x = 300;
            this.fiveBitmapRight.y = 300;

            this.sixBitmapLeft = new createjs.Bitmap('./Assets/images/6_small.png');
            this.sixBitmapLeft.x = 100;
            this.sixBitmapLeft.y = 300;
            this.sixBitmapRight = new createjs.Bitmap('./Assets/images/6_small.png');
            this.sixBitmapRight.x = 300;
            this.sixBitmapRight.y = 300;


            this._rollButton = new objects.Button("./Assets/images/rollButton.png", 300, 120, true);
            //this._rollButton.width = 3;
            this.dice1ResultLabel = new objects.Label("-1", "40px", "Consolas", "#000000", 200, 250, true);
            this.dice2ResultLabel = new objects.Label("-2", "40px", "Consolas", "#000000", 400, 250, true);

 
            this.Main();
        }

        public Update(): void {

        }

        public Main(): void {

            this.addChild(this._rollButton);
            this.addChild(this.dice1ResultLabel);
            this.addChild(this.dice2ResultLabel);
            this._rollButton.on("click", ()=>{
                this.dice1ResultLabel.text = "hi"
                this.dice2ResultLabel.text = "bye"
                var res1 = Math.floor(util.Mathf.RandomRange(1, 6));
                var res2 = Math.floor(util.Mathf.RandomRange(1, 6));
                this.dice1ResultLabel.text = res1.toString();
                this.dice2ResultLabel.text = res2.toString();



                switch (res1) {
                    case 1:
                        this.addChild(this.oneBitmapLeft);
                        break;
                    case 2:
                        this.addChild(this.twoBitmapLeft);
                        break;
                    case 3:
                        this.addChild(this.threeBitmapLeft);
                        break;
                    case 4:
                        this.addChild(this.fourBitmapLeft);
                        break;
                    case 5:
                        this.addChild(this.fiveBitmapLeft);
                        break;
                    case 6:
                        this.addChild(this.sixBitmapLeft);
                        break;
                }

                switch (res2) {
                    case 1:
                        this.addChild(this.oneBitmapRight);
                        break;
                    case 2:
                        this.addChild(this.twoBitmapRight);
                        break;
                    case 3:
                        this.addChild(this.threeBitmapRight);
                        break;
                    case 4:
                        this.addChild(this.fourBitmapRight);
                        break;
                    case 5:
                        this.addChild(this.fiveBitmapRight);
                        break;
                    case 6:
                        this.addChild(this.sixBitmapRight);
                        break;
                }
       
                
            });

        }


    }
}