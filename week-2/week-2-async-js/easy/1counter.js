
let counter  = 0;

function call(){
    setTimeout(printtime, 1000);
}




function printtime(){
    console.clear();
    console.log (counter ++);
    call();
}


    setTimeout(printtime, 1000);

