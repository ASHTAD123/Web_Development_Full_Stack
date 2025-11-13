function fetchUserData(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject({username:'ash',url:"https://ash.com"});
        },3000);
    });
}
// fetchUserData().then().catch()

//Another way to consume Promises

async function getUserData(){

    try {
        console.log("Fetching user data...");
        const userData = await fetchUserData(); //await can only be used when async keyword is there
        console.log("User data fetched successfully : " ,userData);
        
    } catch (error) {
        console.log("Error fetching data",error);
    }
}
getUserData();