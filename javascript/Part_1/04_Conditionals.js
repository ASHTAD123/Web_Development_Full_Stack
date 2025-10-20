//Check if a number is greater than another
let num_1 = 100;
let num_2 = 200;

if(num_1 > num_2){
    console.log("num 1 is greater than num 2");
}else{
    console.log("num 2 is greater than num 1");
}

//Check if a string is equal to another String
let username ="ashu";
let anotherName = "ashu1";

if(username==anotherName){
    console.log("Usernames are equal");
}else{
      console.log("Usernames are unequal");
}


//Check a variable is number or nt
let num_3 = "440";

if(typeof num_3==='number'){
        console.log("It's a number");
}else{
      console.log("No it's not a number");
}

//Check boolean value is true or false
let isReady = false;

if(isReady){
    console.log("It's ready");   
}else{
    console.log("Not ready");
}

//Check if array is empty or not
let items =[];

console.log(items.length);

if(items.length===0){
    console.log("Array is empty");
}else{
    console.log("Array is not empty");
    
}
