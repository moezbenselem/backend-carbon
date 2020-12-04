const { Sequelize } = require("sequelize");
const { QueryTypes } = require("sequelize");
const Question = require("../models/question");
const Reponse = require("../models/reponse");
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
    //console.log("rep", rep);
    resultList.push(q);
    console.log("list", resultList);
    //console.log("list : ", resultList);
  }

  //   questions.forEach(async (quest) => {
  //     console.log("here in foreach");

  //   });
  console.log("here outside");
  console.log("list outside ", resultList);
  res.json(resultList);
};
