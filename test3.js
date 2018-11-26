var Bank = /** @class */ (function () {
    function Bank(value) {
        balance = value;
    }
    Bank.prototype.deposit = function (damount) {
        balance = damount + balance;
        console.log("The final balance in your account is : " + balance);
    };
    Bank.prototype.withdrawal = function (wamount) {
        if (balance >= wamount) {
            balance = balance - wamount;
            console.log("The final balance in your account is : " + balance);
        }
        else {
            console.log("Sorry Insufficient funds..!!");
        }
    };
    return Bank;
}());
var balance;
var obj = new Bank(1000);
obj.deposit(1000);
obj.withdrawal(100);
obj.withdrawal(200);
obj.deposit(300);
obj.withdrawal(2000);
