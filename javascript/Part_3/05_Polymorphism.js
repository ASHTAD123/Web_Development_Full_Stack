class Bird{

    fly(){
        return 'Bird is flying'
    }
}

class Hen extends Bird{

    fly(){
        return `Hen cannot fly`
    }
}

let bird = new Bird();
let hen = new Hen();
console.log(bird.fly());
console.log(hen.fly());
