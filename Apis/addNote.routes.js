const app = require('express').Router()
const noteModel = require('../model/noteModel')
const auth = require('../auth/auth')

/*
path : /api/v1/addNote/
method : POST



*/

app.post('/addNote' ,auth , async(req,res)=>{
    try {
       const {title , desc , Time} = req.body
        const time = await noteModel.findOne({Time});
        if(time === null){
            const note =  await noteModel.insertMany({title , desc , userID : req.id , Time})
            res.status(200).json(note)
        }else{
            res.status(201).json('time is alerady')
        }
       
    } catch (error) {
        res.status(400).json({error})
    }
})







module.exports = app
