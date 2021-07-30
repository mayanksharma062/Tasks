var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mayank.s.addweb@gmail.com',
    pass: 'Addweb@01621'
  }
});

var mailOptions = {
  from: 'mayank.s.addweb@gmail.com',
  to: 'sharma.mayank3011@gmail.com',
  subject: 'This is Mayank From Addweb',
  text: 'Thanks Mayank, For Sending This Email!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 