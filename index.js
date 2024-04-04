const exp = require("express")
const app = exp();
const mongoose = require("mongoose")
const Chat = require("./models/chat")
const path = require("path")

const methodOverride = require('method-override');
const { AsyncLocalStorage } = require("async_hooks");
app.use(methodOverride('_method'));

app.set("view-engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(exp.urlencoded({extended:true}))

let port = 8080;

main().then(res => { console.log("DB CONNECTED") }).catch(err => { console.log("ERROR IN DB") })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}



app.get("/", (req, res) => {
    res.send("working")
})

app.get("/chats", async(req,res)=>{
    let chats = await Chat.find();
   
     //console.log(chats)

    res.render("users.ejs",{ chats})

})

app.get("/chats/new" , (req,res)=>{
//res.send("recieved")
res.render("form.ejs")
})

app.post("/chats",(req,res)=>{
    let {from,to,message} = req.body
    let chat1 = new Chat({
        from:from,
        to:to,
        message:message,
        createdAt:new Date()
    })
      chat1.save()
     res.redirect("/chats")
} )


app.get("/chats/:id/edit", async (req,res)=>{
    let {id} = req.params
    // console.log(id)
    let chat = await Chat.findById(id)
    console.log(chat)
    res.render("edit.ejs",{chat})
})

app.put("/chats/:id",async(req,res)=>{
    let {id} = req.params
    let {message : msg} = req.body
    
    let newmsg = await Chat.findByIdAndUpdate(
        id , 
        {message:msg})
     console.log(newmsg)
      res.redirect("/chats")


})


app.delete("/chats/:id" , async (req,res) =>{
    let {id} = req.params;
    let deen = await Chat.findByIdAndDelete(id)
    console.log(deen)
    
    res.redirect("/chats")
})



app.listen(port, () => {
    console.log(`we are listening at ${port}`)
})


