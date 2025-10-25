//adding only selected values in array
let languages = ["java","springboot","html","css","js"]
let selectedLanguages = []

for(let i=0; i<languages.length; i++){

        if(languages[i]==='html'){
            break;
        }else{
            selectedLanguages.push(languages[i]);
        }
}

console.log(selectedLanguages);


//skip an element in array and continue storing another elements
let projects =["project_1","project_2","project_3","project_4","project_5"]
let selectedProjects=[];

for(let i=0; i<projects.length; i++){

    if(projects[i]==='project_3'){
        continue;
    }else{
        selectedProjects.push(projects[i]);
    }
}
console.log(selectedProjects);


//for-of loop to iterate through the array
let numbers=[1,2,3,4,5]
let smallNumbers = []

for(const num of numbers){
    if(num===4){
        break
    }
    smallNumbers.push(num)
}
console.log(smallNumbers);



//for-in loop use to iterate over object
let cityPopulation ={
    "London":8900000,
    "New York":8400000,
    "Paris":2200000,
    "Berlin":3500000
};

let newCityPopulation={}

for(const city in cityPopulation){

    if(city=="Berlin"){
        break;
    }
    newCityPopulation[city] = cityPopulation[city];
}
console.log(newCityPopulation);


//for-in loop
console.log("Dog population for-in-loop");

let dogPopulation = {
    "India":1000000,
    "China":800000,
    "Paris":300000,
    "Berlin":25000
}

let newCountOfDogPopulation={}

for (const city in dogPopulation) {
 
    if (city == "Paris") {
      break;
  }
  newCountOfDogPopulation[city] = dogPopulation[city];
}
console.log(newCountOfDogPopulation);





//for-each loop
let teaCollection=["early grey","green tea","chai","oolong tea"];
let availableTeas = [];

teaCollection.forEach(function(tea){

    if(tea==="chai"){
        return;
    }

    availableTeas.push(tea)
});

console.log(availableTeas);
