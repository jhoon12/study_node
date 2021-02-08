const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
// app.use(bodyParser.raw());
const app = express();
const indexRouter = require('./routes');
const useRouter = require('./routes/user');
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev")); //콘솔에 찍는거
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);
app.use("/",indexRouter);
app.use('/user', useRouter);

app.use((req,res,next)=>{
  res.status(404).send("Not Found")
})

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message);
});
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
