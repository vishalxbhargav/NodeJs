const fs=require('fs');
fs.writeFileSync("../File-Handling/test.txt","this is file in node");


// //blocking ....
// console.log("first stetement");
// const result = fs.readFileSync("../File-Handling/test.txt","utf-8");
// console.log("file content",result.toLocaleString());

// console.log("last statment");

//non-blocking ....
console.log("first stetement");
const result = fs.readFileSync("../File-Handling/test.txt","utf-8");
console.log("file content",result.toLocaleString());

console.log("last statment");