const express = require("express");
const { todoModel } = require("../model/todo.model");
const todoRouter=express.Router()
todoRouter.use(express.json())
todoRouter.post("/",async (req, res) => {
    const payload = req.body;
    try {
      const new_data = new todoModel(payload);
      await new_data.save();
      res.send("New Todo has been posted successfully.");
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  todoRouter.get("/",async (req,res)=>{
   let query=req.query;

    try{
        const data = await todoModel.find(query)
        res.send(data)
    }catch(err){
      res.send(err.message)
    }
})

todoRouter.delete("/:id",async(req,res)=>{
    const {id} = req.params
    console.log(id)
    try{
        await todoModel.findByIdAndDelete({_id:id})
        res.send({"msg":"Todo is deleted"})
    }catch(err){
        res.send({"msg":err.message})
    }
})

todoRouter.patch("/:id",async(req,res)=>{
    const {id} = req.params
    const payload= req.body
    try{
        await visual_model.findByIdAndUpdate({_id:id},payload)
        res.send({"msg":"Todo is Updated"})
    }catch(err){
        res.send({"msg":err.message})
    }
})

module.exports={
    todoRouter
}