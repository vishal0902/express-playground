const express= require('express')
const path = require('path')
const fs = require('fs')

const app = express()

app.get('/files', (req,res)=>{
    fs.readdir(path.resolve(__dirname,"files"),(err, files)=>{
        res.status(200).send(files)
    })
})

app.get('/file/:fileName',(req,res)=>{
    const {fileName} = req.params
    console.log(typeof fileName, fileName)
    fs.readFile(path.resolve(__dirname,"files", fileName), "utf8" ,(err,data)=>{
        res.send(data)
    })

    // res.end()

})


app.listen(3000,()=>console.log("Server listening on port: 3000"))