const router = require("express").Router();

const mainController = require("../controllers/mainController");

router.get("/questions", mainController.getQuestions)
router.post("/contact", mainController.postContact)
router.post("/score", mainController.postScore)

module.exports = router;
