//Checking no is greater than another

let num1 = 5;
let num2 = 8;

console.log("Before condition");

if(num1>num2){
    console.log("Num 1 is greater than num2");   
}else{
     console.log("Num 2 is greater");   
}

console.log("After condition");
console.log();


//Check if string is equal to another string
let username="chai"
let anotherUsername="chai1"

if(username == anotherUsername){
    console.log("Pick another username");
}else{
    console.log("You can pick this username");   
}


//Check if a variable is number or not
let score ='449s';
let score1=[];

if (typeof score === 'number'){
    console.log("This is a number");    
}else{
        console.log("This is not a number"); 
}


//checking if boolean value is true or false
let isTeaReady = false;

if(loggedIn){
    console.log("Tea is ready");   
}else{
    console.log("Tea is still getting ready");
}

//check if array is empty or not
let products =[1];
let products1=[];

if(products1.length==0){
    console.log("Array is empty");
}else{
    console.log("Array has elements");
}