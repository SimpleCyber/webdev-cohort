const express = require("express");
const app =  express();
const cors = require("cors")
// create an middleware to log timestamp, method and the url

function logger(req, res, next){
  console.log(new Date());
  console.log(req.method);
  console.log(req.url);

  next();
}

app.use(logger);
app.use(cors());
app.use(express.json());


app.get("/", function (req,res){
    res.json({
        "multiply": "http://localhost:3000/multiply",
        "add":"http://localhost:3000/add",
        "divide":"http://localhost:3000/divide",
        "subtract":"http://localhost:3000/subtract"
    })
})

app.post("/add",function(req,res){
    const a = Number(req.body.a);
    const  b= Number(req.body.b);

    res.json({
        "data" : ` ${a} + ${b} = ${a+b}`
    })

})

app.post("/multiply",function(req,res){
        const a = Number(req.body.a);
    const  b= Number(req.body.b);

    res.json({
        "data" : `${a} * ${b} = ${a*b}`
    })
})


app.post("/subtract",function(req,res){
        const a = Number(req.body.a);
    const  b= Number(req.body.b);

    res.json({
        "data" : ` ${a} - ${b} = ${a-b}`
    })
})


app.post("/divide",function(req,res){
        const a = Number(req.body.a);
    const  b= Number(req.body.b);

    res.json({
        "data" : ` ${a} / ${b} =  ${a/b}`
    })
})

app.listen(3000);