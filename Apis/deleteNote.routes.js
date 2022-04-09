const app = require('express').Router()
const noteModel = require('../model/noteModel')
const auth = require('../auth/auth')


/*

path : /api/v1/deleteNote
method : Delete



*/

app.post('/deleteNote'  , async (req,res)=>{
    try {
        const noteDelete = await noteModel.findOne({_id : req.body.delete})
        if(noteDelete != null){
            await noteModel.deleteOne({_id : req.body.delete})
            res.status(200).json({message : 'Deleted'})
        }else{
            res.status(201).json({message : 'Not Found'}) 
        }
        
    } catch (error) {
        res.status(201).json({error})
    }
})



module.exports = app
