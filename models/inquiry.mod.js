"use strict";

const mongoose = require("mongoose");

// 회원 정보
const InquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  telephone: { type: String, required: true },
  selects: { type: Array, required: true },
  content: { type: String, required: true },
});


module.exports.inquiry = mongoose.model("Inquiry", InquirySchema);
