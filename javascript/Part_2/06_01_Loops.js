//adding only selected values in array
let languages = ["java","springboot","html","css","js"]
let selectedLanguages = []

for(let i=0; i<languages.length; i++){

        if(languages[i]==='html'){
            break;
        }else{
            selectedLanguages.push(languages[i]);
        }
}

console.log(selectedLanguages);


//skip an element in array and continue storing another elements
let projects =["project_1","project_2","project_3","project_4","project_5"]
let selectedProjects=[];

for(let i=0; i<projects.length; i++){

    if(selectedProjects[i]=='project_3'){
        continue;
    }else{
        selectedProjects.push(projects[i]);
    }
}