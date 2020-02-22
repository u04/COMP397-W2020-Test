module scenes {
    export class Play extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _rollButton: objects.Button;
        private dice1ResultLabel: objects.Label;
        private dice2ResultLabel: objects.Label;
        


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



            this._rollButton = new objects.Button("./Assets/images/rollButton.png", 300, 120, true);
            //this._rollButton.width = 3;
            this.dice1ResultLabel = new objects.Label("-1", "40px", "Consolas", "#000000", 200, 200, true);
            this.dice2ResultLabel = new objects.Label("-2", "40px", "Consolas", "#000000", 200, 250, true);

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
                
            });

        }


    }
}