class Calculator{
     
    static add(a,b){
        return a + b;
    }
}

let cal = new Calculator();
// console.log(cal.add(1,2)); Throws error because it's static
console.log(Calculator.add(1,2));
