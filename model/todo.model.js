const mongoose = require("mongoose")
const todoSchema=mongoose.Schema({
title:String,
description:String,
State:Boolean
})

const todoModel = mongoose.model("tododata",todoSchema)


module.exports={
    todoModel
}