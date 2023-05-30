const mongoose = require("mongoose")
const userSchema=mongoose.Schema({
    email: String,
    password: String,
})

const userModel = mongoose.model("userdatas",userSchema)

module.exports={
    userModel
}