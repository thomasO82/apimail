const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.LOG_MAILER,
        pass: process.env.MDP_MAILER
    }
});

exports.sendMail = (mailoption) => {
    transporter.sendMail(mailoption, (err, info) => {
        if (err) {
            console.log(err);
            throw err;
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
}