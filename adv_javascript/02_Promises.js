// //Without Promises
function sayHello() {
  console.log("I would like to say Hello");
}

setTimeout(() => {
  sayHello();
}, 10);

console.log("chaicode");

for (let index = 0; index < 10; index++) {
  console.log(index);
}


//With Promise
function sayHello_1(){

    return new Promise( (resolve,reject)=>{
            
        setTimeout(() => {

            let success = true;

            if(success){
                sayHello_1();
                resolve("Data fetched successfully")
            }else{
                    reject("Error fetching data")
            }
        },1000)
    })
}
for (let index = 0; index < 10; index++) {
  console.log(index);
}

sayHello_1()
    .then( (data)=>console.log(data))
    .catch( (error)=>{console.error(error)})



// //Example
function fetchData(){

    return new Promise((resolve,reject)=>{
        
        console.log("Waiting ....");
        
        setTimeout(()=>{
                
                let success = false;            
                
                if(success){
                    resolve("Data fetched successfully")
                }else{
                    reject("Error fetching data")
                }
        },5000)
    })
}

fetchData()
    .then( (data)=>console.log(data))
    .catch( (error)=>{console.error(error)})