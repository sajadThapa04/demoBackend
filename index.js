const express = require('express');
require('dotenv').config()

const app = express();


app.get('/',(req,res) =>{
    res.send('<h1>Hello World</h1>')
})

app.get('/about',(req,res) =>{
    res.send('<h1>Sajad kumar Thapa</h1>')
})

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Listening on port ${port} .....`)
})