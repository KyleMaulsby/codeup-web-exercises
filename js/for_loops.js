(function(){
"use strict";

function showMultiplicationTable(number){
    for (var i = 1; i<11; i++) {
        console.log(number+" x "+i+" = "+(number*i))
    }
}
showMultiplicationTable(7);

//############################################################

function randomNum(){
    return Math.floor(Math.random() * 180) + 20;
}
for(var i=0; i<10; i++){
    var number = randomNum();
    if(number%2 === 1){
        console.log(number+" is odd!");
    }else {
        console.log(number+" is even!");
    }
}

//############################################################

for(var I=1; I<10 ; I++){
    var output = I.toString();
 while(output.length < I) {
    output = (output+ I.toString());
 }
 console.log(Number(output));
}

//############################################################

for(var x = 20; x>0; x--){
    console.log(x*5);
}

})();