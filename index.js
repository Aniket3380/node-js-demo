// const todo=require("fs")
// const app=require('./app')
const http=require("http")
// console.log(app.x)
// todo.writeFileSync("abc","hello aniket")
http.createServer((req,res)=>
{
    res.write("hello aniket ")
    res.end();
}).listen(3000);