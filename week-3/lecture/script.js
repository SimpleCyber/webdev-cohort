console.log("hello")


let x = document.querySelectorAll("h4")[1]


let i = 1;

setInterval(() =>{
    x.innerText = i
    i++
}, 1000)