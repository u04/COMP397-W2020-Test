module scenes {
    export class Play extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _rollButton: objects.Button;

        private norr: objects.GameObject;


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