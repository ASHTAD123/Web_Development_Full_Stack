//Example 1 

//Grabbing button
let hold = document.getElementById('changeTextBtn')


.addEventListener('click',function (){
  
  //if u declare normal function u will get current context i.e which button is being called
  //if u declare arrow function it will point to global window object
  // console.log(this);

  let para = document.getElementById("myParagraph");
  console.log(para);

  para.textContent ="Paragraph has been changed"
})

//Example 2 
let highlightBtn = document.getElementById("highlightFirstCity")
.addEventListener('click',function() {
    
   let list = document.getElementById("cityList");

    list.firstElementChild.classList.add('highlight');
    

});

//Example 3
let changeOrderBtn = document.getElementById("changeOrder")
.addEventListener('click',function(){

    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = "Espresso";
    coffeeType.style.padding="10px"
    coffeeType.style.backgroundColor="brown"
    coffeeType.style.color="white"
})

//Example  4
document.getElementById("addNewItem").addEventListener('click',function(){

      let listEle = document.createElement('li')
      listEle.textContent = "Eggs"

      document.getElementById("shoppingList").appendChild(listEle);
})

//Example 5
document.getElementById("removeLastTask").addEventListener('click',function(){

    let taskList= document.getElementById("taskList");
    taskList.lastElementChild.remove();
});

//Example 6
document.getElementById("clickMeButton")
.addEventListener('mouseover',function(){
  alert("chai")
})

//Example 7
document.getElementById("teaList")
.addEventListener('click',function (event) {

    if(event.target && event.target.matches('.tea-Item')){
      alert("You selected : " +event.target.textContent)
    }
})

//Example 8
document.getElementById("feedbackForm")
.addEventListener('submit',function(event){
  event.preventDefault();

  let feedback = document.getElementById("feedbackInput").value;
  console.log(feedback);

  document.getElementById("feedbackDisplay").textContent=`Feedback is ${feedback}`
  
})

//Example 9
document.addEventListener('DOMContentLoaded',function(){
   
  document.getElementById("domStatus").textContent="DOM Fully loaded";
})

//Example 10
document.getElementById("toggleHighlight").addEventListener('click',function(params) {
  
  let decriptionText = document.getElementById("decriptionText");

  decriptionText.classList.toggle("highlight")
})