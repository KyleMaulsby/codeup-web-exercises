"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var color = prompt("What is your favorite color?");
alert(color + " is my favorite color too!");

var rentalTime = prompt("How many days have you rented this movie?");
    parseInt(rentalTime);
var confirmed = confirm("Are you returning more movies today?");
    if(confirmed === true){
    var secRentalTime = prompt("How many days have you rented this movie?");
    rentalTime = parseInt(secRentalTime) + parseInt(rentalTime);
   }
var confirmed2 = confirm("Are you returning more movies today?");
    if(confirmed2 === true){
    var thirdRentalTime = prompt("How many days have you rented this movie?");
    rentalTime = parseInt(thirdRentalTime) + parseInt(rentalTime);
}
alert("Your total is $" + rentalTime*3);



var google = prompt("How many hours did you work at Google this week?");
var amazon = prompt("How many hours did you work at Amazon this week?");
var facebook = prompt("How many hours did you work at Facebook this week?");
alert("You earned $" + (facebook*350 + amazon*380 + google*400) + " this week!");



var maxSize = 24;
var timeConflict = confirm("Does this class time conflict with your schedule?");
var classSize = prompt("How many other people are in the class?");
if(!timeConflict && (classSize < maxSize)){
    alert("Congrats you can join the class!")
}
else{
    alert("Sorry the class is you can't join the class.")
}



var isExpired = confirm("Is the coupon expired?");
if(isExpired === false){
    var premium = confirm("Are you a premium member?");
        if(premium === false){
            var twoItems = confirm("Are you purchasing more than two items?");
                if(twoItems === true) {
                    alert("Yes you can use that discount.")
                }
                else{
                        alert("Sorry you can't use that discount.")
                }

        }
        else{
            alert("Yes you can use that discount.")
        }
}
else {
    alert("Sorry you can't use that discount.")
}
