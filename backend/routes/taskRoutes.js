const express = require('express');
const router = express.Router();
const tasks = require('../Model/TaskModel');

// Get all Tasks
router.get('/get-Tasks', async (req, res) => {
    try {
        const showTask = await tasks.find();
        res.status(200).json(showTask);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

//Get Completed task
router.get('/completed', async(req,res)=>{
    try{
       let result = await tasks.find({"status":"Completed"})
        if(result){
            res.status(200).json(result)
        }else{
            res.send("No completed Task")
        }
    }catch(error){
        res.status(401).json({error:error.message})
    }
})
//Get In-Progress task
router.get('/in-progress', async(req,res)=>{
    try{
       let result = await tasks.find({"status":"In-Progress"})
        if(result){
            res.status(200).json(result)
        }else{
            res.send("No completed Task")
        }
    }catch(error){
        res.status(401).json({error:error.message})
    }
})


//Get Pending tasks
router.get('/pending', async(req,res)=>{
    try{
       let result = await tasks.find({"status":"Pending"})
        if(result){
            res.status(200).json(result)
        }else{
            res.send("No Pending Task")
        }
    }catch(error){
        res.status(401).json({error:error.message})
    }
})
// Get single task
router.get('/edit/:id',async (req,res)=>{
    try{
        let result = await tasks.findOne({_id:req.params.id})
        if(result){
            res.status(200).json(result)
        }else{
            res.send("No record found")
        }
    }catch(error){
        res.status(401).json({error:error.message})
    }
})

// Post or add task
router.post('/add-task', async (req, res) => {
    try {
        
        let result = await tasks.create(req.body);
        console.log(result);
        res.status(201).json(result);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

//put data
router.put('/edit/:id',async(req,res)=>{
    try{
        let result = await tasks.updateOne(
            {_id:req.params.id},
            {
                $set:req.body
            }
            
        )
        res.status(201).json(result)
    }
    catch(error){
        res.status(401).json({ error: error.message }); 
    }
});

//delete task
router.delete('/:_id',async (req,res)=>{
    try{
        let result =await tasks.deleteOne(req.params);
        res.status(200).json(result);
    }
    catch(error){
        res.status(401).json({error:error.message})
    }
})

module.exports = router;
