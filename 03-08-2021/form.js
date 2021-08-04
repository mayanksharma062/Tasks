const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const upload = require('express-fileupload');

const { body, validationResult } = require('express-validator');
const app = express();

app.set('view engine', 'ejs')

app.use(upload())

const urlencodedparser = express.urlencoded({ extended: false });
app.use(express.json());



app.get("/", (req, res) => {
  res.render('index')

})

app.get("/register", (req, res)=>{
  res.render('register')
})





app.post('/register', urlencodedparser, [body('Name').trim().isAlpha().withMessage('The name should contain alphabets'), body('Mobile').isNumeric().isLength({ min: 10 }).withMessage('Phone Number should contain only numeric value and length should be 10'), body('email').isEmail().withMessage("Email is Invalid"), body('dob').isBefore('2002-12-31').withMessage('DOB should be of before 2002'), body('confirmpass').custom((value, { req }) => {
  if (value !== req.body.password) {
    throw new Error('Password do not match')
  }
  return true
})], (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {

    const errorarray = errors.array();
    res.render('register', {errorarray})

  }else{
      var file = req.files.file;
      var filename = file.name;
      console.log(filename);
      const savePath = path.join(__dirname, 'upload', filename);
      file.mv('./upload/'+filename);

  }
  res.send(req.body);
});

app.listen(3001);

console.log("check at http://localhost:3001");