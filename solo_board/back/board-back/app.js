const express = require("express");
const { sequelize } = require("./models");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

sequelize.sync({ force: true });

app.use("/", require("./routes/index"));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on 3000`);
});
