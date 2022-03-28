const app = require('express').Router()
const userModel = require('../model/userModel')
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')



/*
path : /api/v1/login
method : POST
token : send me in the header
*/

app.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });
      if (user) {
        const matche = await bcrypt.compare(password , user.password)
        if (matche) {
         const token =  JWT.sign({name : user.name , email : user.email , id : user._id} , 'abdoeid123')
         res.status(200).header({token}).json({ message : 'logedin' });
        } else {
          res.status(400).json({ message: "Password In correct" });
        }
      } else {
        res.status(400).json({ message: "User Not Found" });
      }
    } catch (error) {
      res.status(401).json(error);
    }
  });




module.exports = app
