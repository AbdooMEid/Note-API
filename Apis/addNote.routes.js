const app = require('express').Router()
const noteModel = require('../model/noteModel')
const auth = require('../auth/auth')

/*
path : /api/v1/addNote/
method : POST



*/

app.post('/addNote' ,auth , async(req,res)=>{
    const {title , desc } = req.body
    try {
       
       await noteModel.insertMany({title , desc , userID : req.id})
       res.status(200).json({message : 'Success'})
       
    } catch (error) {
        res.status(400).json({error})
    }
})







module.exports = app