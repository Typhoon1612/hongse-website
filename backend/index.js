import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"SYW432021#",
    database:"honsge_database"
})

// app.get("/", (req,res)=>{
//     res.json("Hello this is backend!")
// })

app.get("/", (req, res)=>{
    const query = "SELECT * FROM login_info"
    db.query(query,(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)  
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})