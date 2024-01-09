var express = require('express');
var session = require('express-session');
var router = express.Router();
var moment = require('moment');
const { admin } = require("./../models/admin.mod");
const { inquiry } = require('../models/inquiry.mod');

router.get('/', function(req, res, next) {
    if (req.session.isLogin) {
        res.redirect('/admin/list');
    } else {
        res.redirect('/admin/login');
    }
})

router.get('/login', function(req, res, next) {
    if (req.session.isLogin) {
        res.redirect('/admin/list');
    } 
    res.render('admin/login');
});

router.post('/auth', async function (req, res, next) {
    var email = req.body.email;
    var pw = req.body.password;
    
    const check = await admin.findOne({ email: email, password: pw });
  
    if(check) {
        req.session.email = email;
        req.session.isLogin = true;
        res.redirect('/admin/list');
    } else {
        res.redirect('/admin/login');
    }
});

router.get('/list', async function(req, res, next) {
    if (req.session.isLogin !== true) {
        res.redirect('/admin/login');
    }

    const inquiryList = await inquiry.find({}).exec();
    res.render('admin/list', {data : inquiryList, moment : moment});
});

router.get('/logout', function(req, res, next) {
    try {
        if (req.session.isLogin) {
            req.session.destroy();
        }
    }
    catch (e) {
      console.log(e)
    }
  res.redirect('/admin/login');
});

module.exports = router;