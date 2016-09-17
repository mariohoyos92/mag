let Mailer = require('./Mailer');

class ContactMailer extends Mailer {
  constructor(submission) {
    super(submission);

    this.mailOptions = {
      from: {name: submission.contact_name, address: submission.contact_email},
      to: process.env.CONTACT_MAILTO,
      subject: 'Contact Submission From Website',
      text: submission.body
    };
  }

  send(callback) {
    this.sendMessage(this.mailOptions, callback)
  }
}

module.exports = ContactMailer;
