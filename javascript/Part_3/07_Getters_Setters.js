//constructor sets the values differently
//getters and setters also set the value value

class Employee {

  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  // _ creates a new variable
  get salary() {
    console.log("Getter called");
    return this._salary;
  }

  set salary(amount){

    console.log("Setter called");
    
    if(amount<0){
        console.error("Invalid salary amount");
    }else{
        this._salary =amount;
    }
  }
}

let emp = new Employee("ash",3931);
console.log(emp.salary);

