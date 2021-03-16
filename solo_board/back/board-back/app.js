const express = require("express");
const {sequelize} = require('./models');

const app = express();

app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));

app.use("/", require("./routes/index"))