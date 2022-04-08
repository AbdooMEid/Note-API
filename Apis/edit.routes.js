const app = require('express').Router()
const noteModel = require('../model/noteModel')
const auth = require('../auth/auth')






app.put('/updateNote'  , async (req,res)=>{
    try {
const {title , desc , Time} = req.body
        const time = await noteModel.findOne({Time});
        if(time === null){
         await noteModel.findByIdAndUpdate({_id : req.body.edit} , {title , desc , Time})
        res.status(200).json({message : 'Updated'})
        }else{
            res.status(201).json({'message' : 'time is repeted'})
        }
    } catch (error) {
        res.status(201).json({error})
    }
})








module.exports = app
