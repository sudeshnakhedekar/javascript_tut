var database = [
{
    username: "sudeshna",
    password: "supersecret"
}    
];

var newsFeed = [
{
    username: "Bobby",
    timeline: "So tired from all that learning!"
},
{
    username: "Sally",
    timeline: "Javascript is so cool!"
}
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function signIn(user, pass){
    if (user=== database[0].username &&
         pass === database[0].password) {
             console.log(newsFeed);
         }else{
             alert("Sorry, wrong username and password!")
         }
}

signIn(userNamePrompt, passwordPrompt);