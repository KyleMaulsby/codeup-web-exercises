(function(){
"use strict";

var i = 1;

while(i<17){
    console.log(Math.pow(2,i));
    i++;
}

//############################################################

// This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
//     Math.floor(Math.random() * 5) + 1;

function randomNum(){
   return Math.floor(Math.random() * 5) + 1;
}
console.log("I have "+allCones+" cones to sell today.");
do{
    var random = randomNum();
    if(random <= allCones){
        console.log(random + " cones sold...");
          allCones -= random;
            if(allCones === 0){
                console.log("Yay! I sold them all!");
            }
    } else if(random > allCones) {
        console.log("Cannot sell you "+ random+" cones, I only have "+allCones+"...");
    }
} while(allCones > 0);

//############################################################



})();