const calculateTotal = (price,quantity) => price * quantity;

let totalCost = calculateTotal(499 * 100)



//First class function example
function makeTea(typeOfTea){
    return `maketea: ${typeOfTea}`
}

function processTeaOrder(makeTeaFunction) {
    return  makeTeaFunction('earl grey')
}

let order = processTeaOrder(makeTea)
console.log(order);



function createTeaMaker(){

    return function(teaType){
        return `Making ${teaType}`
    };
}    

let teaMaker = createTeaMaker();
console.log(teaMaker('ash'));
