// ARRAYS

let fruits = ['manzana', 'fresa', 'piña'];

let books = ['Segunda fundación', 'El hobbit', 1984];

let data = ['abril', 1984, true];

// fruits[0] = true;
// books.push(true);

let test = [];
let bands: string[] = [];

// TUPLAS

let myTuple: [string, number, boolean] = ['diez', 30, true ];

let myArray: (string | number | boolean)[] = ['diez', 30, true ]

myArray = myTuple;

// myTuple = myArray2;
myTuple[0] = 'David';
myTuple[1] = 40;
myTuple[2] = false;
// myTuple[4] = 'false';

// OBJECTS

let myObj: object;
myObj = [];

myObj = bands;
console.log(myObj); // object

myObj = {};

const user = {
  name: 'David',
  ecutorian: true,
}

type Writer = {
  name?: string,
  alive?: boolean,
  books: (string | number)[]
}

let writer1: Writer = {
  name: 'George Orwell',
  alive: false,
  books: ["La rebelión de la granja", 1984]
}

// writer1.age = 50;

const writer2: Writer = {
  // name: 'Stephen King',
  // alive: true,
  books: ['El resplandor', 1408]
}

writer1 = writer2;

console.log(writer1);

function sayHiWriter(writer: Writer):string{
  if(writer.name){
    return `Hola ${writer.name.toUpperCase()}`;
  }
  return 'Hola escritor!'
}

console.log(sayHiWriter(writer2));