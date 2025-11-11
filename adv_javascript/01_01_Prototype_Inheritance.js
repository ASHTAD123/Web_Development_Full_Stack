function User(name){
  this.name = name;

  // This function is re-created for EVERY new user
  this.greet = function () {
    console.log("Hi, I'm " + this.name);
  };
}

const ash = new User("ash")
const nish = new User("nish")

// Prototypes solve this by creating a single, shared "blueprint" object. All objects created from a constructor share the same prototype.

//Here's the right way to do it:

function User_1(name){
    this.name=name;
}

User_1.prototype.greet = function(){
    console.log("Hi, I'm " + this.name);
}


const ash1 = new User_1("ash");
const nish2 = new User_1("nish");

// Now, when you create ash1 and nish2, neither one has its own greet function. Instead, they are both linked to the Player.prototype object.
ash1.greet();
nish2.greet();
