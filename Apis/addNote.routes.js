const app = require('express').Router()
const noteModel = require('../model/noteModel')
const auth = require('../auth/auth')

/*
path : /api/v1/addNote/
method : POST



*/

app.post('/addNote' ,auth , async(req,res)=>{
    const {title , desc , Time} = req.body
    try {
       
       const note = await noteModel.insertMany({title , desc , userID : req.id , Time})
       res.status(200).json(note)
       
    } catch (error) {
        res.status(400).json({error})
    }
})







module.exports = app
