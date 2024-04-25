let express=require("express")
let app=express()
app.get("/",(req,res)=>{
    res.send("hello from server")
})
app.get("/user",(req,res)=>{
    res.send("hello from server on /user")
})

app.listen(5002)