const express = require("express");
const app = express();



// Middleware for the parsing the json data
app.use(express.json());

app.get("/",(req, res) =>{
    res.send({
        message:"Hello from auth app"
    })
})


// lets create an array to store the user data
const users = [];


app.post("/signin", (req, res) =>{
    // here take the data from the user and and do testing 

    const username =  req.body.username;
    const password =  req.body.password;


    users.push({
        username,
        password
    })

    res.send({
        message :"You have signed in sucessfully 🤪"
    })

})


function generateToken(){
    let options = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|:,.<>?/~'.split('');
    let token  = "";
    for(let i = 0; i <32; i++){
        token += options[Math.floor(Math.random() * options.length)];
    }

    return token;

}



app.post("/signup", (req, res) =>{
    const username =  req.body.username;
    const password =  req.body.password;

    const user  = users.find(user => user.username === username && user.password === password);


    if(user){
        const token = generateToken();
        user.token = token;
        res.send({
            token
        })
        console.log(users);
    }
    else{
        res.status(403).send({
            message:"Invalid username or password"
        })
    }
})

app.listen(3000);