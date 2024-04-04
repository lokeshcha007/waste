const mongoose = require("mongoose")

let chatSchema = new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    message:{
        type:String,
        maxLength:50
    },
    createdAt:{
        type:Date,
        required:true
    }
})

let Chat = new mongoose.model("Chat",chatSchema)

//console.log(Chat.find())

module.exports = Chat