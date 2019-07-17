"use strict";
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const userFiltered = users.filter(function(lang){
    return lang.languages.length >= 3;
});
console.log(userFiltered);

const emails = users.map(function(email){
    return email.email;
});
console.log(emails);

const experience = users.reduce(function(base,years){
    return base + years.yearsOfExperience;
},0);
console.log(experience/users.length);

let longestEmail;
const longest = emails.reduce(function(base,email){
     if(base < email.length){
         longestEmail = email;
         base = email.length;
     }
    return longestEmail;
},0);
console.log(longest);

const nameString = users.reduce(function(base,name){
    if(users.indexOf(name) === (users.length-1)){
        return base + `${name.name}.`;
    }
    return base + `${name.name}, `;
},"Your instructors are: ");
console.log(nameString);