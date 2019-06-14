(function() {
"use strict";
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
function numPlusOneHund (){
    var numPlusOneHundred = (Number(number) + 100);
    return "Your number plus 100 is "+numPlusOneHundred+"!";
}
function isNegative (){
    if(number > 0){
        return "Your number is positive!";
    }
    else{
        return "Your number is negative!";
    }
}
var wantNumber = confirm("Would you like to enter a number?");
    if (wantNumber) {
        var number = Number(prompt("What number would you like to enter?"));

        switch(number % 2) {
            case (0):
                alert("Your number is an even number!\n" + numPlusOneHund() + "\n" + isNegative());
                break;
            case (1):case(-1):
                alert("Your number is an odd number!\n" + numPlusOneHund() + "\n" + isNegative());
                break;
            default:
                alert("You didn't enter a number dummy!");
        }

        // if (number % 2 === 0) {
        //     alert("Your number is an even number!\n"+numPlusOneHund()+"\n"+isNegative());
        //     numPlusOneHund();
        //     isNegative();
        // }
        // else if(number % 2 === (1)) {
        //     alert("Your number is an odd number!\n"+numPlusOneHund()+"\n"+isNegative());
        //     numPlusOneHund();
        //     isNegative();
        // }
        // else if(number % 2 === (-1)) {
        //     alert("Your number is an odd number!\n"+numPlusOneHund()+"\n"+isNegative());
        //     numPlusOneHund();
        //     isNegative();
        // }
        // else{
        //     alert("You didn't enter a number dummy!");
        // }
    }
    else{
        alert("WELL FINE BE THAT WAY!")
    }

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

    function analyzeColor(color) {
        if (color === "red") {
            return ("Red like roses.");
        }
        else if (color ==="orange"){
            return ("Orange like a carrot.");
        }
        else if(color === "yellow"){
            return ("Yellow like the Sun.");
        }
        else if(color === "green") {
            return ("Green like grass");
        }
        else if(color === "blue") {
            return ("Blue like the ocean.");
        }
        else if(color === "indigo") {
            return ("Indigo like...who tf uses indigo?");
        }
        else if(color === "violet") {
            return ("Violet like lavender");
        }
        else {
            return ("That's not one of our colors");
        }
    }
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
console.log(randomColor);
    console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColorSwitch(color){
    switch(color) {
        case 'red':
            console.log("Red like roses.");
            break;
        case 'orange':
            console.log("Orange like a carrot.");
            break;
        case 'yellow':
            console.log("Yellow like the Sun.");
            break;
        case 'green':
            console.log("Green like grass");
            break;
        case 'blue':
            console.log("Blue like the ocean.");
            break;
        case 'indigo':
            console.log("Indigo like...who tf uses indigo?");
            break;
        case 'violet':
            console.log("Violet like lavender");
            break;
        default:
            console.log("That's not one of our colors");
    }
}
    analyzeColorSwitch(randomColor);

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var colorPick = prompt("Pick a color any color?");
var colorLog = analyzeColor(colorPick);
    alert(colorLog);


    /* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckNum,total){
    switch(luckNum) {
        case 0:
            return total;
        case 1:
            return (total*0.9);
        case 2:
            return (total*0.75);
        case 3:
            return (total*0.65);
        case 4:
            return (total*0.5);
        case 5:
            return 0;
    }
}

    console.log(calculateTotal(4, 100));

    /**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 5
var luckyNumber = Math.floor(Math.random() * 6);
    console.log(luckyNumber);

    var billTotal = prompt("How much was you bill?");
    console.log(calculateTotal(luckyNumber, billTotal));
    alert("Your lucky number is "+luckyNumber+
        "\nYour total before discounts was $"+billTotal+
        "\nYour new total is $"+calculateTotal(luckyNumber,billTotal))


})();