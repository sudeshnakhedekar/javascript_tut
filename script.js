var database = [
    {
        username: "sudeshna",
        password: "supersecret"
    } ,   
    {
        username: "bally",
        password: "122"
    },
        {
            username: "pasta",
            password: "888"
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
    },
    {
        username: "gommy",
        timeline: "Javascript is preetyy cool!"
    }
    ];
    
  
     function isUservalid(username, password){
        for (var i= 0; i < database.length; i++) {
            if (database[i].username === username && 
               database[i].password === password) {
                   return true;
               
               }
     }
     return false;
    }

    function signIn(username, password){
     if(isUservalid(username, password)){
          console.log(newsFeed);
              }else{
                  alert("Sorry, wrong username and password!");
              }
    }

    var userNamePrompt = prompt("What is your username?");
    var passwordPrompt = prompt("What is your password?");
    
       
    signIn(userNamePrompt, passwordPrompt); 