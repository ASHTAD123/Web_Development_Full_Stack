//Access the 1st element of array
let names = ['ashtad','nisha','geetika','kaushik','shalini']
const myName =names[0];
console.log(myName);

//Access the 3rd element of array
let cities = ["Mumbai","Gujrat","Delhi"]
const thirdCity = cities[2];
console.log(thirdCity);

//Change the 2nd element of array 
let games = ["cricket","football","volleyball"]
games[1]='kabaddi';
console.log(games);

//Add element to array using push()
let elements = ["one","two","three"]
elements.push("four")
elements[elements.length]="four"
console.log(elements);

//Remove last element of the array using pop
let orders = ["order1","order2","order3"]
let lastOrder = orders[orders.length-1]
console.log(lastOrder);
orders.pop(orders.length)
console.log(orders);

let var_1 = 5;
let var_2 = var_1;
var_2 = 100;
console.log("Variable 1 : " + var_1);
console.log("Variable 2 : " + var_2);

//Create a soft copy of the array
let colors = ["Orange","Purple","Pink","Magenta"]
let softCopyColors = colors;
colors.pop()
console.log(softCopyColors);
console.log(colors);

//Create hard copy of the array
let mainArr = ["dog","cat","mouse"]
let mainArrCopy = [...mainArr]
mainArr.pop()
console.log(mainArrCopy);

//Merge 2 arrays
let arr1 = ["1","2","3"]
let arr2 = ["4","5","6"]
let merged = arr1 + arr2;
console.log(merged);

let proper_merge = arr1.concat(arr2);
console.log(proper_merge);

console.log("Length : " +arr1.length);
console.log(arr1.includes("one"));



