const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use((req,res,next)=>{
    console.log('모든 요청에 다 실행됩니다.')
})
app.get('/',(req,res,next)=>{
    console.log('GET / 요청에서만 실행됩니다.');
    next();
}, (req, res) => {
    thorw new Error('에러는 에러 처리 미들웨어로 갑니다.')
})