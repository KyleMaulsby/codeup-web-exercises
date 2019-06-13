(function() {
    "use strict";

    /**
     * TODO:
     * Create a function called 'sayHello' that takes a parameter 'name'.
     * When called, the function should return a message that says hello to the passed in name.
     *
     * Example
     * > sayHello("codeup") // returns "Hello, codeup!"
     */

    function sayHello(name) {
        console.log("Hello, " + name);
        return ("Hello, " + name);
    }

    sayHello("Kyle");

    /* ########################################################################## */

    /**
     * TODO:
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * Store the result of the function call in a variable named 'helloMessage'.
     *
     * console.log 'helloMessage' to check your work
     */

    sayHello("Kyle");
    var helloMessage = sayHello("Kyle");
    console.log(helloMessage);

    /* ########################################################################## */

    /**
     * TODO:
     * Store your name as a string in a variable named 'myName', and pass that
     * variable to the 'sayHello' function. You should see the same output in the
     * console.
     */

    var myName = "Kyle";
    sayHello(myName);

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
    var random = Math.floor((Math.random() * 3) + 1);
    console.log(random);

    /* ########################################################################## */

    /**
     * TODO:
     * Create a function called 'isTwo' that takes a number as a parameter.
     * The function should return a boolean value based on whether or not the passed
     * number is the number 2.
     *
     * Example
     * > isTwo(1) // returns false
     * > isTwo(2) // returns true
     * > isTwo(3) // returns false
     *
     * Call the function 'isTwo' passing the variable 'random' as a argument.
     *
     * console.log *outside of the function* to check your work (you should see a
     * different result everytime you refresh the page if you are using the random
     * number)
     */

    function isTwo(number) {
        return ((number - 2) === 0);
    }

    isTwo(random);
    console.log(isTwo(random));

    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named 'calculateTip' to calculate a tip on a bill at a
     * restaurant. The function should accept a tip percentage and the total of the
     * bill, and return the amount to tip
     *
     * Examples:
     * > calculateTip(0.20, 20) // returns 4
     * > calculateTip(0.25, 25.50) // returns 6.37
     * > calculateTip(0.15, 33.42) // returns 5.013
     */

    function calculateTip(bill, tip) {
        return (tip * bill);
    }

    console.log(calculateTip(.15, 33.42));

    /* ########################################################################## */

    /**
     * TODO:
     * Use prompt and alert in combination with your calculateTip function to
     * prompt the user for the bill total and a percentage they would like to tip,
     * then display the dollar amount they should tip
     */

//Just messing around learning more about adjusting css with javascript
    function showImg() {
        document.getElementById("thanos").style.visibility = "visible";
    }

    // var billValue = prompt("How much did it cost you?");
    // if (billValue === "Everything") {
    //     showImg()
    // }
    // else if (billValue === ("" || null)) {
    // }
    // else {
    //     var tipValue = prompt("How much would you like to tip?");
    //     alert("Your should tip $" + calculateTip(billValue.replace("$", ""), tipValue));
    // }


    var billValue = prompt("How much did it cost you?");
    switch(billValue) {
        case "Everything","everything":
            showImg();
            break;
        case "" || null:
            break;
        default:
            var tipValue = prompt("How much would you like to tip?");
            alert("Your should tip $" + calculateTip(billValue.replace("$", ""), tipValue));
            break;
    }

    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `applyDiscount`. This function should accept a price
     * (before a discount is applied), and a discount percentage (a number between 0
     * and 1). It should return the result of applying the discount to the original
     * price.
     *
     * Example:
     * > var originalPrice = 100;
     * > var dicountPercent = .2; // 20%
     * > applyDiscount(originalPrice, dicountPercent) // 80
     *
     * > applyDiscount(45.99, 0.12) // 40.4712
     */

    function applyDiscount(Price, discount) {
        return (basePrice - (basePrice * discount));
    }
    var basePrice = 101;
    var discountPercent = .3215;
    console.log("$" + applyDiscount(basePrice, discountPercent).toFixed(2));

})();