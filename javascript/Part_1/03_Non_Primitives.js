let ob ={
    firstname:'ash',
    isloggedIn:false
}

//values can be changed
const ob1 = {
  firstname: "ash",
  isloggedIn: false,
  "my age":25
};

ob1.firstname ="nishh"
ob1.lastname ="nisssh1"

console.log(ob);
console.log(typeof ob);
console.log(ob.firstname);
console.log(ob.isloggedIn);

console.log(ob1.firstname);
console.log(ob1.lastname);


//Another way to access
console.log(ob1['my age']);
console.log(ob1);
console.log(typeof ob1);

let today = new Date();
console.log(today.getDate());
console.log(today.getTime());

//Array
let heros = ["NSKM","aSASA","ASAS",true]
console.log(heros[2]);
console.log(heros[5]);

console.log(1+"1");
let value=true;
console.log(true+2);
console.log(true+2);

let val ="2abc"
console.log(typeof Number(val));
