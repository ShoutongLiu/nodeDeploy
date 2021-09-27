const mongoose = require('../db')
// 定义一个Schema，与数据库表里的字段一一对应
let StudentSchema = mongoose.Schema({
    name: String,
    age: Number
})

// 定义数据库模型，操作数据库, 默认与category复数的表相连接

let Student = mongoose.model('student', StudentSchema, 'student')

module.exports = Student