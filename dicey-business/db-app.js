"use strict";
// import $ from 'jquery';
$(document).ready(function () {
    var diceArray = [];
    var Die = /** @class */ (function () {
        function Die() {
            var _this = this;
            this.value = 0;
            this.roll();
            //creates a new die
            this.div = $('<div class="dice-box"></div>');
            $("#dice-container").append(this.div);
            $(this.div).text(this.value);
            //adds die to array
            diceArray.push(this);
            $(this.div).click(function () {
                _this.reRoll();
            });
            $(this.div).dblclick(function () {
                var index = (diceArray.indexOf(_this));
                //removes from array
                diceArray.splice(index, 1);
                //removes div
                _this.div.remove();
            });
        }
        //gives value to die on initial roll
        Die.prototype.roll = function () {
            this.value = Math.floor(Math.random() * 6 + 1);
        };
        //gives new value to each die
        Die.prototype.reRoll = function () {
            this.roll();
            $(this.div).text(this.value);
        };
        return Die;
    }());
    //generates a new die class object and assigns it a value
    $("#btn-generateDie").click(function () {
        new Die();
    });
    //assigns new value to all dice on screen
    $("#btn-rollDie").click(function () {
        diceArray.forEach(function (die) { return die.reRoll(); });
        // for (let i = 0; i < diceArray.length; i++) {
        //     diceArray[i].reRoll();
        // }
    });
    //adds up the value of all dice created
    $("#btn-sum").click(function () {
        var sum = 0;
        for (var i = 0; i < diceArray.length; i++) {
            sum += diceArray[i].value;
        }
        alert("The sum of all dice is " + sum + ".");
    });
});
