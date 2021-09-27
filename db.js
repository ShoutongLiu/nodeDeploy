const mongoose = require('mongoose')

// 建立连接
mongoose.connect('mongodb://127.0.0.1:27017/info', { useNewUrlParser: true }, function (err) {
    if (err) {
        console.log('连接失败', err)
        return
    }
    console.log('数据库连接成功')
})

module.exports = mongoose