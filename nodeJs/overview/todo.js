const { log } = require('console')
const fs = require('fs')

const filePath = "./tasks.json"

    const loadTasks = ()=>{

        try {
        const dataBuffer = fs.readFileSync(filePath);
        console.log();
        
        console.log("Data buffer : " , dataBuffer);
        console.log();
        
        const dataJSON = dataBuffer.toString();
        console.log("Data JSON : " + dataJSON);
            
            return JSON.parse(dataJSON)
            
        } catch (error) {
            return[]
        }
    }

const  saveTasks = (tasks)=>{
    
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath,dataJSON)
}

const addTask = (task) =>{
 
  const tasks = loadTasks();
  tasks.push({task});

  saveTasks(tasks);
  console.log("Task added : ",task);

}

const listTasks = ()=>{
    const  tasks = loadTasks();

    tasks.forEach((t,index) => {
        console.log(`${index + 1} - ${t.task}`);
    });
}
//Get the command line arguments
  const command = process.argv[2];
  const arg = process.argv[3];


if(command ==='add'){
    addTask(arg)
}else if(command === 'list'){
    listTasks()
}else if(command === 'remove'){
    removeTask(parseInt(arg))
}else{
    console.log("Command not found !");
    
}