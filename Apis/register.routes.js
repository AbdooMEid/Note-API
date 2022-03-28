const app = require('express').Router()
const userModel = require('../model/userModel')
const {check , validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')


app.post(
    "/register",
    check("name").isAlpha("en-US"),
    check("email").isEmail(),
    check("password").matches(/^(?=.*[A-Z]).{8,}$/),
    check("confirmPassword").matches(/^(?=.*[A-Z]).{8,}$/),
    async (req, res) => {
      try {
        const { name, email, password , confirmPassword} = req.body;
        const error = validationResult(req);
        if (!error.isEmpty()) {
         return res.status(204).json({ message: error.array() });
        } else {
            const user = await userModel.findOne({email})
            if(user == null){
              if(password === confirmPassword){
                bcrypt.hash(password , 10 , async (err , hash)=>{
                  const user = await userModel.insertMany({ name, email, password : hash});
                   res.status(200).json({user});
                 })
              }else{
                res.status(205).json({message : 'confirm Password do not matche password'})
              }
           
            }else{
                return res.status(206).json({message : 'email is alerady exsist'})
            }
         
        }
      } catch (error) {
        res.status(401).json(error);
      }
    }
  );



module.exports = app
