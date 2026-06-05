const express = require("express")

const app = express();
app.use(express.json())

let todo = [];

// create a simple todo here 


// get all todo
app.get("/", (req, res) => {
    res.json({
        todo
    })
})


// create a new todo (id + title)
app.post("/", (req,res) =>{
    // create an randoom id for the todo

    let id = Math.round(Math.random()*1000);
    console.log(id)

    console.log(req.body.title)

    let title = req.body.title;

    // extract the body from the input 
    todo.push({
        title,
        id
    })

    res.json({
        message :"new todo created",
        todo
    })
})

// delete an todo by id

app.delete("/", (req,res) =>{

    if(!req.body){
        return res.json({
            message: "Body missing"
        })
    }

    let id = req.body.id;
    todo = todo.filter(item => item.id !== id);

    res.json({
        message :"Todo deletes",
        todo
    })

})

app.listen(3000);