let express=require("express")
let app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("hello from server")
})
app.get("/user",(req,res)=>{
    res.send("hello from server on /user")
})
app.post("/add",(req,res)=>{
    res.json(req.body)
})

app.listen(5002)