//Encapsulation means restricting direct access to data

class BankAccount{

    //only accessible inside the class
    #balance = 0;

    deposit(amount){
        this.#balance +=amount;
        return this.#balance;
    }

    getBalance(){
            return `$ ${this.#balance}`;
    }

}

let account = new BankAccount();
console.log(account.balance);
console.log(account.getBalance());
