"use strict";
// import $ from 'jquery';
var myName = 'Chris';
var numOfStates = 50;
var add = 5 + 4;
function sayHello() {
    console.log('Hello World!');
}
;
sayHello();
var personArray = [
    {
        name: "Emily",
        age: 24
    },
    {
        name: "Keith",
        age: 60
    },
    {
        name: "Carol",
        age: 59
    },
    {
        name: "Oliver",
        age: 1
    },
    {
        name: "Julian",
        age: 3
    }
];
function checkAge(name, age) {
    if (age > 21) {
        console.log("Welcome in " + name + "!");
        alert("Welcome in " + name + "!");
    }
    else {
        console.log("Sorry " + name + " you aren't old enough to view this page!");
        alert("Sorry " + name + " you aren't old enough to view this page!");
    }
}
for (var i = 0; i < personArray.length; i++) {
    checkAge(personArray[i].name, personArray[i].age);
}
;
var favoriteVegetables = [
    {
        vegetable: "Onion"
    },
    {
        vegetable: "Carrot"
    },
    {
        vegetable: "Squash"
    },
    {
        vegetable: "Tomato"
    }
];
for (var i = 0; i < favoriteVegetables.length; i++) {
    console.log(favoriteVegetables[i]);
}
function getLength(word) {
    return word.length;
}
;
function oddOrEven(wordLength) {
    if (wordLength % 2 === 0) {
        console.log('The world is nice and even!');
    }
    else {
        console.log('The world is an odd place!');
    }
    ;
}
;
oddOrEven(getLength('Hello World'));
