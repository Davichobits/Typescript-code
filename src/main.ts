let userName: string = 'David';
let age: number;
let isLoading: boolean; // verdadero o falso
let address: string | number; // union type
let response: any;

function sum(a:number, b:number): number{
  return a + b;
}

const sumArroy = (a:number, b:number):number => a + b;

const expression: RegExp = /\w+\s/g;