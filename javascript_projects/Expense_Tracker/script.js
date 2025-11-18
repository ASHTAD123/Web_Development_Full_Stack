document.addEventListener('DOMContentLoaded',()=>{

    const form = document.getElementById("expense-form");
    const expenseNameInput = document.getElementById("expense-name");
    const expenseAmountInput = document.getElementById("expense-amount");
    const addExpenseBtn = document.getElementById("addExpenseBtn");
    let expenseList = document.getElementById("expense-list") ;
    let totalDisplay = document.getElementById("total-amount");


    let expenses =JSON.parse(localStorage.getItem('expenses')) || [];
    let totalAmount = calculateTotal();

    displayExpenses();

    function calculateTotal(){
        return expenses.reduce( (sum,expense)=> sum+expense.amt,0)
    }

    function updateTotal(){
        totalAmount = calculateTotal();
        totalDisplay.textContent= totalAmount.toFixed(2)
    }

    form.addEventListener("submit",(e)=>{ 
        
        e.preventDefault();
        const expenseName = expenseNameInput.value.trim();
        const expenseAmount = parseFloat(expenseAmountInput.value.trim());

        if (expenseName !== "" && !isNaN(expenseAmount) && expenseAmount > 0) {
         
            const newExpense = {
            id: Date.now(),
            name: expenseName,
            amt: expenseAmount,
          };

          expenses.push(newExpense);
          saveExpenses();
          displayExpenses();
          updateTotal();

          //clearInput
          expenseNameInput.value = "";
          expenseAmountInput.value="";
        }

    })

    function saveExpenses(){
        localStorage.setItem("expenses",JSON.stringify(expenses));
    }

    function displayExpenses(){

        expenseList.innerHTML=``;

        expenses.forEach(expense=>{

            const expenseItem = document.createElement('li');
            expenseItem.innerHTML = `${expense.name} -$${expense.amt}
            <button data-id="${expense.id}" >Delete</button>`;

               expenseList.appendChild(expenseItem);
        })
    }

    expenseList.addEventListener('click',(e)=>{

        if(e.target.tagName === 'BUTTON'){

            const expenseId = parseInt(e.target.getAttribute('data-id'));

            expenses = expenses.filter(expense=> expense.id != expenseId)

            saveExpenses(expenses)
            displayExpenses()
            updateTotal()
        }
    })
})