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
router.post('/', async (req, res, next) => {
    const {phone} = req.body;
    let otp = otpGen(5, digits);

    try {
        const {sid: id } = await client.messages
            .create({
                body: `Tu código ATOMIC es: ${otp}`,
                from,
                to: phone
            });

        const oneTimePassword = await Otp.create({ id, phone, otp });

        return res.status(200).send( { success: true, sid: oneTimePassword.id });
    } catch (error){
        return  res.status(500).send( { success: false,  error });
    }
});

module.exports = router;
