const express = require("express");
const { sequelize } = require("./models");
const cors = require("cors");


const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

sequelize.sync({ force: true });

app.use("/", require("./routes/index"));

app.listen(process.env.PORT || 80, () => {
  console.log(`Server is running on 80`);
});
