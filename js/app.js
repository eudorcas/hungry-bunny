document.addEventListener("DOMContentLoaded", function (ev) {
    var Game = require("./game.js");
    const startButton = document.querySelector(".start-button");
    startButton.addEventListener("click", function(e){
        document.querySelector(".start").style.display="none";
        var game = new Game();
        game.showBunny();
        game.showLeaf();
        game.startGame();

        document.addEventListener("keydown", function (event){
            game.turnBunny(event);
        });
    });
    const againButton = document.querySelector(".again-button");
    againButton.addEventListener("click", function (e){
        document.querySelector(".game-over").style.display="none";
        var game = new Game();
        game.showBunny();
        game.showLeaf();
        game.startGame();

        document.addEventListener("keydown", function (event){
            game.turnBunny(event);
        });
    })


});