let Mailer = require('./Mailer');

class SubscriptionMailer extends Mailer {
  static get templateName() {
    return 'newsletter_subscribe';
  }

  constructor(submission) {
    super(submission);

    this.mailOptions = {
      from: {address: submission.email},
      to: process.env.CONTACT_MAILTO,
      subject: 'Subscription Signup',
      html: this.html(submission),
      text: `The following email has signed up for your newsletter: ${submission.email}`
    };
  }

  send(callback) {
    this.sendMessage(this.mailOptions, callback)
  }
}

module.exports = SubscriptionMailer;
