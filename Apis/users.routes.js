const app = require('express').Router()
const userModel = require('../model/userModel')




app.get("/", async (req, res) => {
    try {
      const users = await userModel.find().select("-password");
      res.status(200).json(users);
    } catch (error) {
      res.status(401).json({ message: error });
    }
  });
  


module.exports = app