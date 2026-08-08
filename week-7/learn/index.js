const express = require("express");

const app = express();
// import auth module
const {auth, JWT_SECRET} = require("./auth")
const jwt = require("jsonwebtoken")

const bcrypt = require('bcrypt');
const saltRounds = 10;



// import it over here
const {UserModel, TodoModel} = require("./db")

app.use(express.json());


// conet db 
const mongoose = require('mongoose');

const {z} = require("zod");


mongoose.connect("")



app.post("/signup", async function(req,res) {

  const requireBody = z.object({
    email :z.string().min(3).max(100).email(),
    name : z.string().min(5).max(30),
    password : z.string().min(5).max(100)
  })

  const parsedDataWithSuccess = requireBody.safeParse(req.body);

  if(!parsedDataWithSuccess.success){
    res.json({
        error :parsedDataWithSuccess.error
    })
  }

  const { email, password, name } = parsedDataWithSuccess.data;

const hashedPassword = await bcrypt.hash(password, 10);

  await UserModel.create({
    email,
    password : hashedPassword,
    name
  })

  res.json({
    message :  "You are loogged in"
  })
});




app.post("/signin", async function(req,res) {
  const email = req.body.email;
  const password =  req.body.password;

  try{

    const user = await UserModel.findOne({
        email: email
    });

    if (!user) {
        return res.status(401).json({
            message: "INCORRECT Credentials"
        });
    }

    const passwordMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (!passwordMatch) {
        return res.status(401).json({
            message: "INCORRECT Credentials"
        });
    }

    const token = jwt.sign({
        id: user._id
    }, JWT_SECRET);

    return res.json({
        token
    });


    return res.status(401).json({
            message: "INCORRECT Credentials"
    });

  }
  catch(e){
    res.status(403).json({
        message : "INCORRECT Credentails"
    })
  }

})


app.post("/todo",auth, async function(req,res) {
    const userId = req.userId;

    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    })

    res.json({
        title :"Todo created"
    })
})



app.get("/todos",auth, async function(req,res) {
    // Get the userId from the request object
    const userId = req.userId;

    // Find all the todos with the given userId
    const todos = await TodoModel.find({
        userId,
    });

    // Send the todos to the client
    res.json({
        todos,
    });
})

app.listen(3000);