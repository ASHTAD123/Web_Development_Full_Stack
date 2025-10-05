//Number
let balance =120;
let anotherBalance = new Number(120);
let c =30;

console.log(balance);
// console.log(anotherBalance);
// console.log(anotherBalance.valueOf());

console.log(typeof balance);
console.log(typeof anotherBalance);

//Boolean
let isActive = true
let isReallyActive = new Boolean(true)
console.log(typeof isActive);
console.log(typeof isReallyActive);

//null and undefined
let firstName;
console.log(firstName);

let lastName=null;
console.log(lastName);


//String
let myString ="Hello";
let stringOne ="sdsk";
let username="ash";

let oldGret = myString + " jsdh";
console.log(oldGret);

//String interpolation
let greet=`hello ${oldGret}  !`;
let value =  `Value ${2*2}`;
console.log(value);

//Symbol[Guarantees uniquness]
let sm1 = Symbol()
let sm2 = Symbol()

console.log(sm1);
console.log(sm2);
console.log(sm1 == sm2);

let sm11 = Symbol('as');
let sm22 = Symbol('as');

console.log(sm11);
console.log(sm22);
console.log(sm11 == sm22);