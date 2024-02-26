const { Router } = require("express");
const {
  question_post,
  questions_get,
  questionKPI_get
} = require("../../controllers/Questions/Questions");

const router = Router();

router.post("/question",question_post );
router.get("/questions",questions_get);
router.post("/questionKPI",questionKPI_get);

module.exports = router;