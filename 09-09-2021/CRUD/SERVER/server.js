const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json())


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'mayank',
    database: 'mydb'
})

app.post("/create", (req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const phone = req.body.phone;

    console.log(name)

    db.query('INSERT INTO crud(name, age, phone) VALUES(?,?,?)',[name, age, phone], (err, result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send("Values Inserted Successfully!")
        }
    });
})

app.get('/show', (req, res)=>{
    db.query("SELECT * from crud", (err, result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

app.put('/update', (req, res)=>{
    const id = req.body.id;
    const phone = req.body.phone;

    db.query(`UPDATE crud SET phone = ? WHERE id = ?`, [phone, id], (err, result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }    
    })
})

app.delete(`/delete/:id`, (req, res)=>{
    const id = req.params.id;
    db.query("DELETE FROM crud WHERE id = ?", id, (err, result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }    
    })
})

app.listen(3050, ()=>{
    console.log("Your Server Is Running");
})