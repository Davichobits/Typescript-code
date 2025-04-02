"use strict";
// ARRAYS
let fruits = ['manzana', 'fresa', 'piña'];
let books = ['Segunda fundación', 'El hobbit', 1984];
let data = ['abril', 1984, true];
// fruits[0] = true;
// books.push(true);
let test = [];
let bands = [];
// TUPLAS
let myTuple = ['diez', 30, true];
let myArray = ['diez', 30, true];
myArray = myTuple;
// myTuple = myArray2;
myTuple[0] = 'David';
myTuple[1] = 40;
myTuple[2] = false;
// myTuple[4] = 'false';
// OBJECTS
let myObj;
myObj = [];
myObj = bands;
console.log(myObj); // object
myObj = {};
const user = {
    name: 'David',
    ecutorian: true,
};
let writer1 = {
    name: 'George Orwell',
    alive: false,
    books: ["La rebelión de la granja", 1984]
};
// writer1.age = 50;
const writer2 = {
    // name: 'Stephen King',
    // alive: true,
    books: ['El resplandor', 1408]
};
writer1 = writer2;
console.log(writer1);
function sayHiWriter(writer) {
    if (writer.name) {
        return `Hola ${writer.name.toUpperCase()}`;
    }
    return 'Hola escritor!';
}
console.log(sayHiWriter(writer2));
