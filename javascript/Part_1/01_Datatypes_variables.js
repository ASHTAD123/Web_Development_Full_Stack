// String , Number , Boolean , BigInt, Undefined , null , Object , Symbol

//Number
let score = 102;

//String
let name="Ash"

//Boolean
let isLoggedIn = false;

//Array
let typesOfGames = ["GTA_5","Detriot became human","Alien Isolation","Halo"]

//Object
let userProfile = [{name:'Ash',age:25,city:'Mumbai'}]

const a =20;
// a=39; A constant cannot be changed

console.log(a);

//Primitives
// String , Boolean ,Number, null , undefined , Symbol

//Non-Primitives [Objects]
//Arrays,functions,objects


//Number
let balance = 20;
let anotherBal = new Number(890)
console.log(balance);
console.log(anotherBal.valueOf());

console.log(typeof balance);
console.log(typeof anotherBal);

//Boolean
let isActive = true
let isOn = new Boolean(false)

//undefined - means it's present but it has no value
let name_1;
console.log(name_1);

//null - doesn't exists
// console.log(c);


//String
let hero = "myHero"
let hero_1 = 'myHero1'

let greet = `Hello ${hero}`
console.log(greet);

let sum = `${1+2}`
console.log(sum);

//Gives Uniqueness
let sm1= Symbol("a1")
let sm2= Symbol("a")

console.log(sm1==sm2);
