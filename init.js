const mongoose = require("mongoose")
const Chat = require("./models/chat")

main().then(res => { console.log("DB CONNECTED") }).catch(err => { console.log("ERROR IN DB") })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}

let chat1 = Chat({
    from:
        "oksir",
    to:
        "nosir",
    message:
        "yessir",
    createdAt: new Date()
})

chat1.save().then(res => {console.log("inserted")})

// Chat.insertMany([{
//     from:
//         "rohit",
//     to:
//         "deepak",
//     message:
//         "sendingMoney",
//     createdAt: new Date()
// }, {
//     from:
//         "ashish",
//     to:
//         "rohith",
//     message:
//         "cometobox",
//     createdAt: new Date()
// }, {
//     from:
//         "vikas",
//     to:
//         "bharat",
//     message:
//         "lets party",
//     createdAt: new Date()
// }, {
//     from:
//         "bhama",
//     to:
//         "Musalodu(Thirupathi Nayak)",
//     message:
//         "da mancham akku",
//     createdAt: new Date()
// }, {
//     from:
//         "Musalodu(Thirupathi Nayak)",
//     to:
//         "bhama",
//     message:
//         "No kadgam",
//     createdAt: new Date()
// }]).then((res) => { console.log("all inserted") })