let express=require("express")
let mongoose=require("mongoose")
let app=express()
app.use(express.json())
mongoose.connect("mongodb+srv://vyshnavi:12345@cluster0.hzwb4zt.mongodb.net/userdemo")
let usersch=new mongoose.Schema({
    "_id":Number,
    "name":String
})
let user=mongoose.model("user",usersch)

app.get("/",(req,res)=>{
    res.send("hello from server")
})
app.get("/user",(req,res)=>{
    res.send("hello from server on /user")
})
app.post("/add",async(req,res)=>{
    try{
    let data=new user(req.body)
    await data.save()
    res.json({"msg":"added"})
    }
    catch(err)
    {
        res.json(err)
    }
})

app.listen(5002)