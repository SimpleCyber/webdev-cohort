const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "#Satyam123"

const app = express();

app.use(express.json());


const users = [];

function logger (req, res, next) {
    console.log(req.method);
    next();
}


app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/learn-frontend-jwt/index.html")
})

// signup
app.post("/signup",logger, (req,res)=>{
    const username  = req.body.username;
    const password = req.body.password;

    // Insted of inline we should have the db
    users.push({
        username : username,
        password : password
    })

    // we should check the user with this name is already exists

    res.json({
        message :"You are signed in"
    })
})


// sighin
app.post("/signin",logger,  (req,res)=>{
    const username  = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    for(let i = 0 ; i < users.length ; i++){
        if(users[i].username === username && users[i].password === password ){
            foundUser = users[i];
        }
    }

    if(!foundUser) {
        res.json({
            message : "Credential are incorrect"
        })
        return
    }
    else{
        // now user ispresent then create the jwt token 
        const token = jwt.sign({
            username
        }, JWT_SECRET)
        res.json({
            token : token
        })
        
    }
})


// me
app.get("/get-password", logger, (req,res)=>{
    const token = req.headers.token;
    const decodedData =  jwt.verify(token, JWT_SECRET);

    if(decodedData.username){

        let foundUser = null;
        for(let i = 0 ; i < users.length ; i++){
            if(users[i].username === decodedData.username ){
                foundUser = users[i];
            }
        }

        res.json({
            username : foundUser.username,
            password : foundUser.password
        })

    }
})

app.listen(3000);