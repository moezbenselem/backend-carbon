const { Sequelize } = require("sequelize");
const { QueryTypes } = require("sequelize");
const Contact = require("../../../Dev/PROJECTS/Node-JS-Projects/salon-backend/models/contact");
const Question = require("../models/question");
const Reponse = require("../models/reponse");
const Score = require("../models/score");
const sequelize = require("../utils/database");

exports.getQuestions = async (req, res) => {
  const resultList = [];
  var rep = null;
  var q = null;
  const questions = await sequelize.query("SELECT * FROM `questions`", {
    type: QueryTypes.SELECT,
  });
  for (let index = 0; index < questions.length; index++) {
    const quest = questions[index];
    q = quest;
    rep = await sequelize.query(
      "SELECT * FROM `reponses` where questionId=" + quest.id,
      {
        type: QueryTypes.SELECT,
      }
    );
    q.reponses = rep;

    resultList.push(q);
  }

  res.json(resultList);
};

exports.postContact = (req, res) => {
  const body = req.body;
  Contact.create({
    name: body.name,
    date_time: new Date().toISOString(),
    email: body.email,
    content: body.content,
  })
    .then((result) => {
      console.log(result);
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      res.status(500).json({
        sucess: false,
      });
    });
};

exports.getContacts = (req, res) => {
  Contact.findAll().then((contacts) => {
    res.header("X-Total-Count", contacts.length);
    res.header("Access-Control-Expose-Headers", "X-Total-Count");
    res.json(contacts);
  });
};

exports.postScore = (req, res) => {
  const body = req.body;
  Score.create({
    score: body.score,
    date_time: new Date().toISOString(),
  })
    .then((result) => {
      console.log(result);
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      res.status(500).json({
        sucess: false,
      });
    });
};
