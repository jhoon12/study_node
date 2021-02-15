let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser')
let app = express();

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGO_DB);// process.env 오브젝트는 환경변수들을 가지고 있는 객체입니다

let db = mongoose.connection;
console.log(db);
db.once('open', function(){
    console.log('DB connected');
})
db.on('error', function(err){
    console.log('DB ERROR : ', err);
})
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());//form으로 입력받은 데이터 처리 가능
app.use(bodyParser.urlencoded({extended : true}))//urlencoded data를 extended 알고리즘을 사용해 분석

let contactSchema = mongoose.Schema({
    name : {type: String, required : true, unique:true},
    email : {type : String},
    phone : {type : String}
})//DB에 어떤 형식으로 데이터를 저장할지
let Contact = mongoose.model('contact', contactSchema);// contact schema의 model을 생성

app.get('/', (req, res)=>{
    res.redirect('/contacts');
});
app.get('/contacts', (req, res)=>{
    Contact.find({}, function(err, contacts){
        if(err) return res.json(err);
        res.render('contacts/index', {contacts:contacts});
      });
})//에러가 있다면 json형태로 브라우제어 표시, 없다면 index.ejs파일 읽어옴 (READ)

//Contact.find({}, function(err, contacts){ ... })를 살펴봅시다. 이 부분을 일반화시키면 모델.find(검색조건, callback_함수)로 나타낼 수 있습니다.
//모델.find의 검색조건은 Object 형태로 전달됩니다. 예를들어 {lastName:"Kim"}이라면 모델들 중에 lastName 항목의 값이 "Kim"인 모델들을 찾는 조건이 됩니다. 빈 Object({})를 전달하는 경우(=검색조건 없음) DB에서 해당 모델의 모든 data를 return합니다.

app.get('/contacts/new', function(req, res){
    res.render('contacts/new');
  });
  app.post('/contacts', function(req, res){
    Contact.create(req.body, function(err, contact){
      if(err) return res.json(err);
      res.redirect('/contacts');
    });
  });
//모델.create은 DB에 data를 생성하는 함수입니다. 첫번째 parameter로 생성할 data의 object(여기서는 req.body)를 받고, 두번째 parameter로 콜백 함수를 받습니다.
let port = 3000;
app.listen(port, function(){
    console.log('server on! http://localhost:'+port);
})