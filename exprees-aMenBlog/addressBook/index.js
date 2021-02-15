let express = require('express');
let mongoose = require('mongoose');
let app = express();

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGO_DB);// process.env 오브젝트는 환경변수들을 가지고 있는 객체입니다
let db = mongoose.connection;

db.once('open', function(){
    console.log('DB connected');
})
db.on('error', function(err){
    console.log('DB ERROR : ', err);
})
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));

let port = 3000;
app.listen(port, function(){
    console.log('server on! http://localhost:'+port);
})