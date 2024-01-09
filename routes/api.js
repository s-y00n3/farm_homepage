const express = require('express');
const {inquiry } = require("./../models/inquiry.mod");
const router = express.Router();
const nodeMailer = require('nodemailer');

require("dotenv").config(".env");

const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port : 587,
    secure: false,
    // google 계정에서 발급
    auth: {
        user: process.env.GOOGLEID, 
        pass: process.env.GOOGLEPW,
    }
});

/* GET users listing. */
router.post('/', function (req, res, next) {
    const user = new inquiry(req.body);
    user.save();
    //send mail
    transporter.sendMail({
        from: "keyfarm@jfpartners.co.kr",
        to: "sykim@jfpartners.co.kr",
        subject: "[키팜 창업 문의 예약] " + req.body.name,
        text: "",
        html : 
        `<div>
            <ul>
                <li class="name">성함 : ${req.body.name}</li>
                <li class="contact">연락처 : ${req.body.telephone}</li>
                <li class="districtdndnd">창업 후보 지역 : ${req.body.selects}</li>
                <li class="inquiry">문의 내용 :  ${req.body.content}</li>
            </ul>
        </div>`
    }, (error, info) => {
        if (error) console.log(error);
        transporter.close();
    });

    res.json(req.body);
});


module.exports = router;