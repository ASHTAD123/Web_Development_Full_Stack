//without bind
const example ={
  
    name :'ash',

    getName(){
      return this.name;
    },

    greet: function(greeting, punctuation) {
    console.log(greeting + ", my name is " + this.name + punctuation);
  }
}

const getName = example.getName;
console.log(getName());//here it doesn't have context to 'this'


//bind method doesn't run the function , it returns the function


//with bind()
console.log("With bind()");
const getName_1 = getName.bind(example); //returns a new function with 'this context'
console.log(getName_1());

const p ={
    name:'Sana'
}

const argsArray = ["Hi", "!"];


// bind and call methods executes the function immediately

//apply()
console.log("With apply()");
example.greet.apply(p,argsArray)


//call()
console.log("With call()");
example.greet.call(p,"Hii","!!")