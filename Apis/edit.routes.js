const app = require('express').Router()
const noteModel = require('../model/noteModel')
const auth = require('../auth/auth')






app.put('/updateNote'  , async (req,res)=>{
    try {
        await noteModel.findByIdAndUpdate({_id : req.body.edit} , {title : req.body.title , desc : req.body.desc})
        res.status(200).json({message : 'Updated'})
    } catch (error) {
        res.status(400).json({error})
    }
})








module.exports = app