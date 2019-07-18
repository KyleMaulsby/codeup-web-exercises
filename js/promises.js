"use strict";
const wait = function(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, num);
    });
};

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.1) {
//             resolve("Hooray!");
//         } else {
//             reject("Boo!");
//         }
//     }, Math.random()*3000);
// })

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
let searchUsers = function (username){
    fetch("https://api.github.com/users", {headers: {'Authorization': `token ${gitApi}`}})
    .then(response =>  response.json())
    .then (data => {
        for(let user of data){
            if(user.login === username){
                fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${gitApi}`}})
                .then(response => response.json())
                .then(data =>{
                    console.log(data);
                    console.log(data[0].created_at);
                    return data[0].created_at;
                })
            }
        }
    });
};
searchUsers("defunkt");


fetch("https://api.github.com/users", {headers: {'Authorization': `token ${gitApi}`}})
    .then(response =>  response.json())
    .then (data =>  console.log(data));