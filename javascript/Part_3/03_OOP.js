class Vechile{

    constructor(make,model){
        this.make = make;
        this.model = model;
    }

    startEngine(){
        console.log(` ${this.make} ${this.model} Engine ignition `);
        
    }

}

class Car extends Vechile{

    drive(){
        this.startEngine();
    }
}

let myCar = new Car("BMW","009");
myCar.drive();
