var Bunny = require("./bunny.js");
var Leaf = require("./leaf.js");


function Game() {
    this.board = document.querySelectorAll(".board div");
    this.bunny = new Bunny ();
    this.leaf = new Leaf();
    this.score = 0;
    this.isOver=false;

    this.index = function(x,y) {
        return x+(y*10);
    };

    this.showBunny = function () {
        this.board[this.index(this.bunny.x, this.bunny.y)].classList.add("bunny", this.bunny.direction);
    };

    this.hideVisibleBunny = function() {
        var toHide = document.querySelector(".bunny");
        toHide.classList.remove("bunny", "up", "down", "left", "right");
    };
    this.showLeaf = function () {
        this.board[this.index(this.leaf.x, this.leaf.y)].classList.add("leaf" );
    };

    this.moveBunny = function () {
        this.hideVisibleBunny();
        if(this.bunny.direction==="right") {
            this.bunny.x = this.bunny.x+1;


        }
        else if (this.bunny.direction==="left") {
            this.bunny.x = this.bunny.x-1;

        }
        else if (this.bunny.direction==="up") {
            this.bunny.y = this.bunny.y-1;
        }
        else if (this.bunny.direction==="down") {
            this.bunny.y = this.bunny.y+1;
        }
        this.checkLeafCollision();
        this.gameOver();
        if(this.isOver===true) {
            document.querySelector(".game-over").style.display="flex";
            const finalScore = document.querySelector(".final-score");
            finalScore.innerText = this.score;
            finalScore.style.fontSize="40px";
            document.querySelector("#score strong").innerText = 0;
        }
        else {
            this.showBunny();
        }

    };
    this.turnBunny = function(event) {

        switch (event.which) {
            case 37: {
                this.bunny.direction="left";

                break;
            }
            case 38: {
                this.bunny.direction="up";
                break;
            }
            case 39: {
                this.bunny.direction="right";
                break;
            }
            case 40: {
                this.bunny.direction="down";
                break;
            }
        }
    };


    this.checkLeafCollision = function () {
        if(this.leaf.x===this.bunny.x && this.leaf.y===this.bunny.y) {
            this.board[this.index(this.leaf.x, this.leaf.y)].classList.remove("leaf");
            this.score++;
            document.querySelector("#score strong").innerText = this.score;
            this.leaf = new Leaf ();
            this.showLeaf();
        }
    };
    this.hideLeaf = function () {
        const leaf = document.querySelector(".leaf");
        leaf.classList.remove("leaf");

    };

    this.gameOver = function() {
        if (this.bunny.x<0 || this.bunny.x>9 || this.bunny.y<0 || this.bunny.y>9) {
            clearInterval(this.idSetInterval);
            this.isOver = true;
            this.hideLeaf();

        }
    };



    var self = this;

    this.startGame = function() {
        this.idSetInterval=setInterval(function(){
            self.moveBunny();
        }, 250);
    };



}

module.exports = Game;