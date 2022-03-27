const app = require('express').Router()
const JWT = require('jsonwebtoken')
const auth = require('../auth/auth')




app.get("/logout" ,(req,res)=>{
    try {
        res.status(200).json({message : 'logout'})
    } catch (error) {
        res.status(401).json({error})
    }
})










module.exports = app