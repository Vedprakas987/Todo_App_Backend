const mongoose = require("mongoose")
const connection = mongoose.connect(`mongodb+srv://vedprakash4gs:vedsinha@cluster0.2y9i4ac.mongodb.net/todo`)
module.exports={
    connection
}