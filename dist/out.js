/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("document.addEventListener(\"DOMContentLoaded\", function (ev) {\n    var Game = __webpack_require__(/*! ./game.js */ \"./js/game.js\");\n    const startButton = document.querySelector(\".start-button\");\n    const gameScreen = document.querySelector(\".game\");\n    gameScreen.style.display=\"none\";\n    startButton.addEventListener(\"click\", function(e){\n        document.querySelector(\".start\").style.display=\"none\";\n        gameScreen.style.display=\"block\";\n        var game = new Game();\n        game.showBunny();\n        game.showLeaf();\n        game.startGame();\n\n        document.addEventListener(\"keydown\", function (event){\n            game.turnBunny(event);\n        });\n    });\n    const againButton = document.querySelector(\".again-button\");\n    againButton.addEventListener(\"click\", function (e){\n        document.querySelector(\".game-over\").style.display=\"none\";\n        gameScreen.style.display=\"block\";\n        var game = new Game();\n        game.showBunny();\n        game.showLeaf();\n        game.startGame();\n\n        document.addEventListener(\"keydown\", function (event){\n            game.turnBunny(event);\n        });\n    })\n\n\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/bunny.js":
/*!*********************!*\
  !*** ./js/bunny.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Bunny() {\n    this.x=0;\n    this.y=0;\n    this.direction=\"right\";\n\n}\n\nmodule.exports = Bunny;\n\n//# sourceURL=webpack:///./js/bunny.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Bunny = __webpack_require__(/*! ./bunny.js */ \"./js/bunny.js\");\nvar Leaf = __webpack_require__(/*! ./leaf.js */ \"./js/leaf.js\");\n\n\nfunction Game() {\n    this.board = document.querySelectorAll(\".board div\");\n    this.bunny = new Bunny ();\n    this.leaf = new Leaf();\n    this.score = 0;\n    this.isOver=false;\n\n    this.index = function(x,y) {\n        return x+(y*10);\n    };\n\n    this.showBunny = function () {\n        this.board[this.index(this.bunny.x, this.bunny.y)].classList.add(\"bunny\", this.bunny.direction);\n    };\n\n    this.hideVisibleBunny = function() {\n        var toHide = document.querySelector(\".bunny\");\n        toHide.classList.remove(\"bunny\", \"up\", \"down\", \"left\", \"right\");\n    };\n    this.showLeaf = function () {\n        this.board[this.index(this.leaf.x, this.leaf.y)].classList.add(\"leaf\" );\n    };\n\n    this.moveBunny = function () {\n        this.hideVisibleBunny();\n        if(this.bunny.direction===\"right\") {\n            this.bunny.x = this.bunny.x+1;\n\n\n        }\n        else if (this.bunny.direction===\"left\") {\n            this.bunny.x = this.bunny.x-1;\n\n        }\n        else if (this.bunny.direction===\"up\") {\n            this.bunny.y = this.bunny.y-1;\n        }\n        else if (this.bunny.direction===\"down\") {\n            this.bunny.y = this.bunny.y+1;\n        }\n        this.checkLeafCollision();\n        this.gameOver();\n        if(this.isOver===true) {\n            document.querySelector(\".game-over\").style.display=\"flex\";\n            document.querySelector(\".game\").style.display=\"none\";\n            const finalScore = document.querySelector(\".final-score\");\n            finalScore.innerText = this.score;\n            finalScore.style.fontSize=\"40px\";\n            document.querySelector(\"#score strong\").innerText = 0;\n        }\n        else {\n            this.showBunny();\n        }\n\n    };\n    this.turnBunny = function(event) {\n\n        switch (event.which) {\n            case 37: {\n                this.bunny.direction=\"left\";\n\n                break;\n            }\n            case 38: {\n                this.bunny.direction=\"up\";\n                break;\n            }\n            case 39: {\n                this.bunny.direction=\"right\";\n                break;\n            }\n            case 40: {\n                this.bunny.direction=\"down\";\n                break;\n            }\n        }\n    };\n\n\n    this.checkLeafCollision = function () {\n        if(this.leaf.x===this.bunny.x && this.leaf.y===this.bunny.y) {\n            this.board[this.index(this.leaf.x, this.leaf.y)].classList.remove(\"leaf\");\n            this.score++;\n            document.querySelector(\"#score strong\").innerText = this.score;\n            this.leaf = new Leaf ();\n            this.showLeaf();\n        }\n    };\n    this.hideLeaf = function () {\n        const leaf = document.querySelector(\".leaf\");\n        leaf.classList.remove(\"leaf\");\n\n    };\n\n    this.gameOver = function() {\n        if (this.bunny.x<0 || this.bunny.x>9 || this.bunny.y<0 || this.bunny.y>9) {\n            clearInterval(this.idSetInterval);\n            this.isOver = true;\n            this.hideLeaf();\n\n        }\n    };\n\n\n\n    var self = this;\n\n    this.startGame = function() {\n        this.idSetInterval=setInterval(function(){\n            self.moveBunny();\n        }, 250);\n    };\n\n\n\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ }),

/***/ "./js/leaf.js":
/*!********************!*\
  !*** ./js/leaf.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Leaf() {\n    this.x=Math.floor(Math.random()*10);\n    this.y=Math.floor(Math.random()*10);\n}\n\nmodule.exports = Leaf;\n\n//# sourceURL=webpack:///./js/leaf.js?");

/***/ })

/******/ });