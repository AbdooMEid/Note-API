const app = require('express').Router()
const noteModel = require('../model/noteModel')
const auth = require('../auth/auth')



/*

path : /api/v1/getAllNote
method : get




*/

app.get('/getAllNote' , auth,async (req,res)=>{
    try {
        const notes = await noteModel.find({userID : req.id})
        res.status(200).json(notes)
    } catch (error) {
        res.status(400).json({error})
    }
})


module.exports = app
