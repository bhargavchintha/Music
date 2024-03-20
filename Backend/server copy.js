const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const server = express() 
server.use(cors());
server.use(express.json())
const db =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'music',
    port: 3306
})

server.post('/Signup',(req, res) =>{
    const sql ="Insert INTO signup (`name`, `userid` , `email` , `password` ) values(?) ";
    const values =[
        req.body.name,
        req.body.userid,
        req.body.email,
        req.body.password,
    ]
    db.query(sql, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
} )

server.listen(5586, () =>{

    console.log("Server is hais")
} )