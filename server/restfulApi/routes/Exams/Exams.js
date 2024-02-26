const { Router } = require("express");
const {
  exam_post, exams_get,
  exam_get,
  studentExams_get
} = require("../../controllers/Exams/Exams");

const router = Router();

router.post("/exam",exam_post );
router.get("/studentExams",studentExams_get );
router.get("/exam/:examID",exam_get );
router.get("/exams/:teacherID",exams_get );

module.exports = router;