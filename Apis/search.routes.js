const app = require('express').Router()
const noteModel = require('../model/noteModel')
const auth = require('../auth/auth')


app.post('/searchNote' ,async (req,res)=>{
    try {
        const notes = await noteModel.findOne({_id : req.body.search})
        if(notes != null){
            res.status(200).json({_id : notes._id})
        }else{
            res.status(200).json({_id : 'Not Found'})
        }
        
    } catch (error) {
        res.status(201).json({error})
    }
})


module.exports = app