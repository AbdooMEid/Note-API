const express = require("express");
const app = express();
const colors = require("colors");
const mongoose = require("mongoose");
const port = 3030;
app.use(express.json());






app.use('/api/v1' , require('./Apis/register.routes'))
app.use('/api/v1' , require('./Apis/login.routes'))
app.use('/api/v1', require('./Apis/addNote.routes'))
app.use('/api/v1' , require('./Apis/getNote.routes'))
app.use('/api/v1' , require('./Apis/deleteNote.routes'))
app.use('/api/v1' , require('./Apis/edit.routes'))
app.use('/api/v1' , require('./Apis/search.routes'))



app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening on port ${port}!`.red.bold)
);
mongoose.connect("mongodb+srv://admin:admin@cluster0.cz5b9.mongodb.net/NotesAPI?retryWrites=true&w=majority");
