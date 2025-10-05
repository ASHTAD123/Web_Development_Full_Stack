let username={
    firstname:"ash",
    email:"ash@gmail.com",
    "pet name":"ash"
};

let profile={
    name:"ashu",
    age:"25",
    ph:"232392293"
}

//objects values are mutable but memory ref remains same
username.firstname="Ashu"
username.lastname="irani"

console.log(username["pet name"]);
console.log(username);
console.log(typeof username);
console.log("-----------------");

//Array[of different types]
let anotherUser =["Sam",true,23]
console.log(anotherUser[0]);
console.log("-----------------");


console.log();
console.log("-----------------");
let abc =["sdj",232,`$`,2]
console.log("0:" ,abc[0]);
console.log("1:", abc[1]);
console.log("2:", abc[2]);
console.log("3:", abc[3]);
console.log("4:", abc[4]);
console.log("-----------------");
console.log();

console.log("-----------------");
let isValue = true;
console.log(isValue+1);
console.log(Number(isValue));
console.log("-----------------");
console.log();


let isValue1 = false;
console.log(Number(isValue1));

let isValue2 = "2";
console.log(typeof Number(isValue2));

let isValue3 = "2asv";
console.log(typeof Number(isValue3));
console.log(Number(isValue3));
console.log(Number(null));