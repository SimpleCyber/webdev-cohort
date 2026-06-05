// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ``` 


const fs =  require("fs");


let value = fs.readFileSync("./1file.txt", "utf-8");

console.log(value);

let ans = "";
for(let i = 0; i < value.length - 1; i++){
    if(value[i+1] == value[i] && value[i] == " ") continue;
    ans += value[i];
}


fs.writeFileSync("./1file.txt", ans, "utf-8")
value = fs.readFileSync("./1file.txt", "utf-8");

console.log(value);