const express = require("express");
const routes = require("./routes/routes");
const app = express();
const cors = require("cors");
const sequelize = require("./utils/database");
const Question = require("./models/question");
const Reponse = require("./models/reponse");
const Score = require("./models/score");
const Contact = require("./models/contact");

var corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
  credentials: true,
};
app.use(cors(corsOptions));

app.use(routes);

Question.hasMany(Reponse);
Reponse.belongsTo(Question);

sequelize
  .sync() //{ force: true }
  .then((result) => {
    console.log("sequelize success !");
    let PORT = process.env.PORT || 3000;

    const server = app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  });
