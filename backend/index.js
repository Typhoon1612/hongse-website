import express from "express"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"SYW432021#",
    database:"honsge_database"
})

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})