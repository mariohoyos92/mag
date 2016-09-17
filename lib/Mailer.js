var nodemailer = require('nodemailer');

var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL 
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
    }
};

class Mailer {
  constructor(data) {
    this.transporter = nodemailer.createTransport(smtpConfig);
  }

  sendMessage(data, callback) {
    this.transporter.sendMail(data, function(error, info){
      if(error){
        callback({error: error});
      }
      console.log(info);
      console.log('Contact Submission Delivered');
      callback(info.response);
    });
  }
}

module.exports = Mailer;
