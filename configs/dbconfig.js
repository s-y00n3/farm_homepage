/*
 * @Description:
 * @Author: Elijah Roh
 * @Date: 2021-01-01 03:22:15
 * @LastEditTime: 2021-03-02 14:24:31
 * @LastEditors: Elijah Roh
 */
require('dotenv').config('.env');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/jfpartners");
// 몽고디
module.exports = mongoose;
