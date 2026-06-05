const express = require("express");
const app = express();

const cors = require("cors")


// ṃiddleware
app.use(express.json())


// lets create the custom middleware
function logger(req, res, next){
    console.log(`URL is ${req.url}`);
    console.log(`TimeStamp is ${new Date()}`);
    console.log(`Method is ${req.method}`);
    next();
}


app.use(logger)







app.get("/", function(req,res){
    res.json({
        add : `http://localhost:3000/sum?a=4&b=7`,
        multiply : `http://localhost:3000/multiply`
    })
})


app.get("/sum", function(req,res){


    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({
        ans : a+b
    })
})










function doMultiply(req, res){
    const a = Number(req.body.a);
    const b = Number(req.body.b);

    res.json({
        ans : a*b
    })
}

app.post("/multiply", doMultiply)

app.listen(3000);