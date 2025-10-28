function Person(name,age){
    this.name = name;
    this.age = age;
}

function Bike(make,model){
    this.make = make;
    this.model = model;
}

let myBike = new Bike("Triump", "1219X");
console.log(myBike);

let otherBike = new Bike("KTM","900")
console.log(otherBike);


function Coffee(type){

        this.type = type

        this.describe = function(){
            return `cup of ${this.type}`
        }
}

let coff_1 = new Coffee('strong coffe')
console.log(coff_1.describe());


// Using Prototypes
function Animal(species){
    this.species =species;
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}

let dog = new Animal("Dog");
console.log(dog.sound());

let cat = new Animal("cat");
console.log(cat.sound());
