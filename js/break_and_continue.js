(function(){
"use strict";

function isNumeric(value){
    return Number(parseFloat(value)) === Number(value);
}

do {
 var number = prompt("Please pick an odd number between 1 and 50.");
    if((number % 2 === 1) && (number < 50)){
        console.log("Skipping number "+number+"!");
        for(var i = 1; i<50; i+=2){
            if(i === Number(number)){
                console.log("Skipping number "+ number+"!");
                continue;
            }
            console.log("Here is the odd number "+i+"!");
        }
    }else {
        number = false;
    }
} while(isNumeric(number) === false);

})();