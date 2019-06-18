(function(){
"use strict";

do {
    var number = prompt("Pick an odd number between 1 and 50.");
} while (number === null);
console.log("Skipping number "+number+"!");
for(var i = 1; i<50; i+=2){
    if(i === Number(number)){
        console.log("Skipping number "+ number+"!");
        continue;
    }
    console.log("Here is the odd number "+i+"!");
}

})();