// import $ from 'jquery';
let myName = 'Chris';
const numOfStates = 50;
let add = 5 + 4;

function sayHello() {
    console.log('Hello World!')
};
sayHello();

interface People {
    name: string;
    age: number;
}

let personArray: People[] = [
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
]

function checkAge(name: string, age: number) {
    if (age > 21) {
        console.log(`Welcome in ${name}!`);
        alert(`Welcome in ${name}!`);
    } else {
        console.log(`Sorry ${name} you aren't old enough to view this page!`);
        alert(`Sorry ${name} you aren't old enough to view this page!`);
    }
}

for (let i = 0; i < personArray.length; i++) {
    checkAge(personArray[i].name, personArray[i].age);
};


interface Vegetables {
    vegetable: string;
}

let favoriteVegetables: Vegetables[] = [
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
]

for (let i = 0; i < favoriteVegetables.length; i++) {
    console.log(favoriteVegetables[i]);
}


function getLength(word: any) {
    return word.length
};

function oddOrEven(wordLength: any) {
    if (wordLength % 2 === 0) {
        console.log('The world is nice and even!');
    } else {
        console.log('The world is an odd place!');
    };
};

oddOrEven(getLength('Hello World'));
