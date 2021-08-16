const express = require('express');
const path = require('path');
const fs = require("fs");
const bodyParser = require('body-parser');



const app = express();
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get("/", (req, res) => {
  res.render('dyno')

})

app.post('/dyno', (req, res)=>{
    console.log(req.body);
    var datawhole = JSON.stringify(req.body);

    let data = [];
    data.push(req.body.name);
    data.push(req.body.email);
    data.push(req.body.id);
    data.push(req.body.mobile);


    res.render('dyno.ejs',{data});
    // res.send(req.body);
    fs.appendFileSync('./datadyno.txt', datawhole);
});
app.listen(3000);
console.log("check at http://localhost:3000");