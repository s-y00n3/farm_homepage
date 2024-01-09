"use strict";

const mongoose = require("mongoose");

// 회원 정보
const adminSchema = new mongoose.Schema({
    email : String,
    password : String,
    date : {type:Date, default: Date.now}
});

const Admin = mongoose.model('Admin', adminSchema);

async function saveAdmin() {
    try {
      const admin = await Admin.findOne({ email: 'keyfarm@jfpartners.co.kr' });
  
      if (!admin) {
        const newAdmin = new Admin({
          email: 'keyfarm@jfpartners.co.kr',
          password: 'keyfarm',
        });
  
        const savedAdmin = await newAdmin.save();
      } 
    } catch (error) {
      console.error(error);
    }
  }
saveAdmin();


module.exports.admin = mongoose.model("Admin", adminSchema);
