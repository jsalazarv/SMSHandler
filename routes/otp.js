const { config } = require('./../config');
const express = require('express');
const router = express.Router();
const otpGen = require('@ascmartins/verification-otp-generator');
const accountSid = config.twilio.TWILIO_ACCOUNT_SID;
const authToken = config.twilio.TWILIO_AUTH_TOKEN;
const from = config.twilio.TWILIO_NUMBER;
const client = require('twilio')(accountSid, authToken);
const digits = '01234567890';
const Otp = require('../Models/Otp');
const {log} = require("debug");

/* POST home page. */
router.post('/', function(req, res, next) {
    const {phone} = req.body;
    let verificationCode = otpGen(5, digits);

    client.messages
        .create({
            body: `Tu código ATOMIC es: ${verificationCode}`,
            from,
            to: phone
        })
        .then(message => {
            Otp.create({
                id: message.sid,
                phone,
                otp: verificationCode
            })
                .then(() => console.log("then"))
                .catch((error) => console.log(error));

            res.status(200).send( { success: true, sid: message.sid });
        })
        .catch((error) => {
            res.status(500).send( { success: false,  error });
        });
});

module.exports = router;
