let pc ={
    ssd:"Kingston SDD",
    cpu:"64"
}

//here using prototype we dont need to explicity add each property of pc , we can just import it
let samsung = {
    screen:"HD",
    __proto__:pc,
}

let linusTech = {}

console.log(`pc`,pc.__proto__);
console.log(`samsung pc`,samsung.__proto__);
console.log();

// ==================================================================================================

//Another way
let genericRobot ={
    eyes:"Samsung camera"
}
let chittiRobo = {
  specialAbility: "360° Head Rotation",
};

// Syntax
// Object.setPrototypeOf(objectInsideWhichPrototypeIsInjected, prototypeObject);

Object.setPrototypeOf(chittiRobo,genericRobot)

// console.log(`chittiRobo`,chittiRobo);
console.log(`chittiRobo`,Object.getPrototypeOf(chittiRobo));
console.log(`chittiRobo`,chittiRobo.specialAbility);
console.log();


// ===================================================================================================

let genericCar={
    headlights:"2",
    wheels:"4"
}

let tarzan = {
  color: "Purple",
  __proto__: genericCar,
};

console.log(tarzan.__proto__);

 Object.setPrototypeOf(tarzan,genericCar)
 console.log(Object.getPrototypeOf(tarzan));

// ==================================================================================================
 let parent={
    parentBehaviour:"parent way"
 }

 let child={
    behaviour:"Child Behaviour"
 }

 Object.setPrototypeOf(child,parent)
 console.log(Object.getPrototypeOf(child));