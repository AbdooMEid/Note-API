const JWT = require('jsonwebtoken')

module.exports = (req,res,next)=>{
    const token = req.header('token')
    if(token && token != null && token != undefined){
       
        JWT.verify(token , 'abdoeid123' ,async (err , decoded)=>{
            req.id = decoded.id
            if(err){
                res.status(400).json({err})
            }else{
                next()
            }
           })
    }
  
}