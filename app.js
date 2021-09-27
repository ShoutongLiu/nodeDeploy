const Koa = require('koa')
const router = require('koa-router')()
const cors = require('koa2-cors');
var https = require('https');
const fs = require('fs')
var enforceHttps = require('koa-sslify').default;

const app = new Koa()
const Student = require('./model/student')
router.get('/student' , async (ctx, next) => {
    let student = await Student.find({}, (err, data) => {
        if (err) {
            return
        }
        return data
    })
    ctx.body = {
        student
    }
})

app.use(enforceHttps());
app.use(cors())
app.use(router.routes())

// const options = {
//     key: fs.readFileSync('/usr/local/ssl/xxxx.com.key'),  //ssl文件路径
//     cert: fs.readFileSync('./ssl/xxxx.com.pem')  //ssl文件路径
// };



// https.createServer(options, app.callback()).listen(3000, () => {
//     console.log('服务启动');
// })

app.listen(3000, ()=> {
    console.log('服务启动:localhost:3000')
})