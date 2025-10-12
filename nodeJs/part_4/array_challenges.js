/*
    Declare an array name 'teaFlavours' that contains the strings 'green tea','black tea' and 'oolang tea'

    Access first element of the array and store it a variable named 'pehliChai'
*/

let typesOfChai =['greenTea','blackTea','oolangTea'];
let pehliChai = typesOfChai[0];

let typesOfChaiFlavours = new Array('greenTea','blackTea','oolangTea');

/* 
    Declare an array named "cities" containing "London" "Newyork" "Paris" "Tokyo"
    Access the 3rd element in the array and store it in a variable named 'favouriteCity'
*/

let cities = ["London","New York","Paris","Tokyo"];
let favouriteCity = cities[2];
console.log(favouriteCity);


// Modifing an element in array
let typesofTea = ["greenTea", "blackTea", "oolangTea"];
typesofTea[1]="masala chai";
console.log(typesofTea[1]);

/* Declare an array containing cities visited ,add Berlin to the array using 'push' */
let citiesVisited = ["Mumbai","Gujrat","Delhi"]
citiesVisited[5]="london"//works
citiesVisited[6]="rome"
citiesVisited[citiesVisited.length]="nagpur"; //this also works
citiesVisited[citiesVisited.length]="kanpur"
citiesVisited.push("UP");
console.log(citiesVisited);


//Remove the last element of the array using the 'pop' method and store it in a variable 
let games=["cricket","hockey","badminton"]

// games.pop();
// games.pop();

let lastElement = games.pop();
console.log("Last element : " +lastElement);
console.log("After removing last ele : ",games);


//Make a soft copy of array
console.log();
console.log("Making soft copy of array");
let names = ["ash","sam","larry"];
let softCopyNames =names;

names.pop();
console.log(softCopyNames);//soft copy changes if original copy is changed
console.log(names);
console.log();



//Make a hard copy of array
console.log("Making hard copy of array");
let animals=["dog","cat","deer"]
let hardCopyAnimals=[...animals]
// let hardCopyAnimals=animals.slice()
animals.pop()
console.log(hardCopyAnimals);//original array doesnt change so the hard copy doesn't get affected;


//Merge 2 arrays
let first = ["one","two","three"];
let second = ["zero","nine","ten"];

// let merged = first+second;
// console.log(merged);
// console.log(typeof(merged));

// let merged = [first,second]
// console.log(merged);

console.log();
console.log("Merged 2 arrays");
let merged = first.concat(second);
console.log(merged);
console.log();


//Find length of array and store it
let citiesMumbai = ["Vasai","Andheri","Chruchgate"]
console.log(citiesMumbai);
console.log("Length of the array : " + citiesMumbai.length);


//Check a value in array
let test = [1,2,3,4,5]
let isNumberFivePreset = test.includes(5)/* for strings it's case sensitive*/
console.log("Number five is present ? : "+ isNumberFivePreset );
