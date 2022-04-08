const app = require('express').Router()
const noteModel = require('../model/noteModel')
const auth = require('../auth/auth')


/*

path : /api/v1/deleteNote
method : Delete



*/



app.post('/deleteNote'  , async (req,res)=>{
    try {
        await noteModel.findByIdAndDelete({_id : req.body.delete})
        res.status(200).json({message : 'Deleted'})
    } catch (error) {
        res.status(201).json({error})
    }
})








module.exports = app
