const express = require('express');
require('dotenv').config()
const mailer = require('./services/mails');
const app = express();

app.use(express.json());


app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err);   
        
    }else{
        console.log('Server is running on port', process.env.PORT);
    }
});


app.post('/sendmail', (req, res) => {
    try {
        mailer.sendMail({
            from: req.body.from,
            to: process.env.PAULINE_MAILER,
            subject: req.body.subject,
            html: `<div>${req.body.message}</div><div><p> email envoyé par :${req.body.from}</p></div>` 
        });
        res.status(200).send('Email sent');
    } catch (error) {
        res.status(500).send('Error sending email');
    }
});