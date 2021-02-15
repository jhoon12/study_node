let express= require('express');
let app = express();

app.use(express.static(__dirname + '/public'));//HTTP method나 route에 상관없이 서버에 요청이 올 때마다 무조건 콜백함수가 실행됩니다.
//원래는 app.use의 매개변수로 콜백을 받는데, express.static함수가 콜백함수를 리턴한다.
// '현재_위치/public' route를 static폴더로 지정하라는 명령어
//즉 '/'에 접속하면 '현재_위치/public'를, '/css'에 접속하면 '현재_위치/public/css'를 연결해 줍니다.

let port = 3000;
app.listen(port, function(){
    console.log('server on! http://localhost: ' + port);
})
