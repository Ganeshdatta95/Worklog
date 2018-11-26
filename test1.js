var Television = /** @class */ (function () {
    function Television() {
    }
    Television.prototype.switchOn = function (input) {
        console.log("T.V Switvhed on..");
        switch (input) {
            case "1":
                {
                    console.log("Selected A channel..");
                    break;
                }
            case "2":
                {
                    console.log("Selected B channel..");
                    break;
                }
            case "3":
                {
                    console.log("Selected C channel..");
                    break;
                }
            default:
                {
                    console.log("Invalid Key..");
                    break;
                }
        }
    };
    Television.prototype.switchOff = function () {
        console.log("T.V Switvhed off..");
    };
    return Television;
}());
var balance;
var obj1 = new Television();
obj1.switchOn("2");
obj1.switchOff();
