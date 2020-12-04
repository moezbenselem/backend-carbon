const router = require("express").Router();

const mainController = require("../controllers/mainController");

router.get("/questions", mainController.getQuestions)

module.exports = router;
