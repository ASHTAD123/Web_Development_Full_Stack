//Write a while loop that calculates the sum of all numbers from 1 to 5 and stores the result in "result" variable
let i=0;
let sum=0;

while(i<=5){
    sum +=i;
    i++;
}
console.log(sum);

//Write a while loop that counts down from 5-1 and stores the nums in array named 'countdown'
let j =5;
let countdown =[];

while(j>0){
    countdown.push(j)
    j--;
}
console.log(countdown);

//Write a 'do while' loop that prompts a user to enter their fav game until they type 'stop'
//Store each sport type in 'sportsCollection' array
// RUN IN BROWSER

// let sportsCollection = []
// let sportInput="default sport";
// do {
    
//     sportInput = prompt(`Enter your favourite sport (type "stop" to finish)`)
    
//     if(sportInput!=="stop"){
//         sportsCollection.push(sportInput)
//     }
// } while (sportInput!=="stop");


//Write a do-while loop that adds numbers from 1-3 and stores in a result variable named 'total'
let total=0;
let k=0;

do {
    total= total+ k;
    k++; 
} while (k<4);

console.log(total);

//Write a 'for' loop that multiplies each element in array[2,4,6] by 2 and stores the results in a new array
//named 'multipliedNumbers'

let multipliedNumbers=[];
let numbers = [2,4,6];

for (let index = 0; index < numbers.length; index++) {
    multipliedNumbers.push(numbers[index] * 2);
}
console.log(multipliedNumbers);


//Add elements from 1 array to another
let cities = ["Paris","New York","Tokyo","London"]
let citiesList=[]

for(let i=0; i<cities.length; i++){
    const city = cities[i];
    citiesList.push(city)
}
console.log(citiesList);
