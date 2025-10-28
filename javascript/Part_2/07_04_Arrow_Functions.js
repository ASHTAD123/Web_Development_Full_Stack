let arr = [1,2,3,4,5]

//function to all square numbers in array
const squareNumbers = (arr) =  arr.map(n=> n * n);
console.log(squareNumbers);


let users = ['ash','nish','shaluu','kaushik','geetu']
const modifyUser =(users) = users.map(user=> user+=" is good");
console.log(modifyUser);


//return mutiples of each value
let num = [10,20,30,40]
const  multiplesOfTwo = (num) =num.map(num=> num*num);
console.log(multiplesOfTwo);



//Write an arrow function getFullName that takes firstName and lastName and returns "firstName lastName".
let firstName='Ash'
let lastName='ira'

let fullName = (firstName,lastName) =>  firstName+lastName;
console.log(fullName(firstName,lastName));




//Write an arrow function findMax that takes an array and returns the maximum number without using the spread operator.
let max=0;

let findMax = (arr) =>{

    for (const element of arr) {
       
        if(element>max){
            max = element;
        }  
    }
}
console.log(findMax([4,5,4,5,500,100,324]));
console.log(max);



//Write an arrow function findMax that takes an array and returns the maximum number using the spread operator.
const findMaxUsingSpread = arr => Math.max(...arr);
console.log(findMaxUsingSpread([500, 100, 324]));




// Use filter() with an arrow function to return only even numbers from an array.
let myArr=[1,2,3,4,5,4,2,4,5,6,7,29,7,3]

let evenNos = (myArr) =>{

    return myArr.filter(num=> num%2==0)
}
console.log(evenNos(myArr));




//Use reduce() with an arrow function to calculate the sum of all numbers in an array.
let sumArr = [1,2,3]
let sumOfNums = sumArr.reduce((prev, next) => prev * next, 1);
console.log(`Sum of numbers : ${sumOfNums}`);




//Write an arrow function countVowels that takes a string and returns the number of vowels.
let vowels='aeiouAEIOU';

let countVowels = (str)=>{
let count =0;

    for(let i=0; i<vowels.length; i++){

        for(let j=0; j<str.length; j++){

            if (str.charAt(i) === vowels.charAt(j)) {
                 count++;
            }
        }
       
    }
    return count;
}

console.log(countVowels('ashtad'));


//write a function to reverse a string
let str1="hill";

let reversedString = (str)=>{

    let revString ="";

    for(let i=str.length ;i>=0 ; i--){

       revString = revString.concat(str.charAt(i));
    }
    return revString;
}

console.log(reversedString(str1));

//Use an arrow function inside forEach() to print all elements with their index:

let array1=[1,2,3,4,2,4];

array1.forEach((element,index) => {

    console.log(`${index} : ${element}`);
    
});