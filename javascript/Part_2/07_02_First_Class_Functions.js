const calculateTotal = (price,quantity) => price * quantity;

let totalCost = calculateTotal(499 * 100)



//1st example of First class function 
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


//2nd Example
function launchGTA(typeOfGTA){
    return `launchGTA: ${typeOfGTA}`
}

function proccessGTAOnline(launchGTAFunction){
    return launchGTAFunction('Enchanced GTA V')
}

let game = proccessGTAOnline(launchGTA)
console.log(game);



