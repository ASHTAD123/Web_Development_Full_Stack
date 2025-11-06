//Example 1
function outer(){

    let counter = 1;

    return function(){
        counter++
        return counter;
    }

}

let increment = outer();

console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());



//Example 2

// Once makeFunc() finishes executing, you might expect that the name variable would no longer be accessible. However, because the code still works, this is obviously not the case in JavaScript.

// The reason is that functions in JavaScript form closures.

//  A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any variables that were in-scope at the time the closure was created.

//  In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run. The instance of displayName maintains a reference to its lexical environment, within which the variable name exists.

//  For this reason, when myFunc is invoked, the variable name remains available for use, and "Ashh" is passed to console.log.


function makeFunc(){

    const name1 ="Ashh"

    function displayName(){
        console.log(name1);
    }

    return displayName;
}
const myFunc = makeFunc();
console.log(myFunc);
