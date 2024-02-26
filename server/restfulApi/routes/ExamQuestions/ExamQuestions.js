const { Router } = require("express");
const {
  examQuestions_post,
  examQuestions_get
} = require("../../controllers/ExamQuestions/ExamQuestions");

const router = Router();

router.post("/examQuestion",examQuestions_post );
router.get("/examQuestion/:examID",examQuestions_get );

module.exports = router;