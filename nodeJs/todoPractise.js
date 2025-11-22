const fs = require('fs');

const filePath = './tasks1.json'

//Getting the command line input
const command = process.argv[2];
const argument = process.argv[3];



const addTask = (task)=>{

    const tasks = loadTasks();
    tasks.push({task});

    saveTasks(tasks)
}

const saveTasks = (tasks)=>{
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath,dataJSON)
}

const loadTasks = ()=>{

    try {
        
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();

        return JSON.parse(dataJSON);

    } catch (error) {
        return[]
    }
}
const listTasks = ()=>{
    const  tasks = loadTasks();

    tasks.forEach((t,index) => {
        console.log(`${index + 1} - ${t.task}`);
    });
}

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log(" Invalid Command!");
}