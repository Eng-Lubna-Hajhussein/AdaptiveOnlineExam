const { Exams } = require("../../../database/models/database");
// controller actions
module.exports.exam_post = async (req, res) => {
  // console.log("^^^^^^^^^^^^^^^^^^^^^^^^^");
  // console.log(req.body);
  // console.log("^^^^^^^^^^^^^^^^^^^^^^^^^");

  console.log(req.body)
  const { duration, startDate, endDate, attemptsAllowed, teacherID, title,description } = req.body;

  //
  const currentdate = new Date();
  const creationDate = `${currentdate.getFullYear()}-${
    currentdate.getMonth() + 1
  }-${currentdate.getDate()} ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;

  const exam = await Exams.create({
    duration,
    startDate,
    endDate,
    attemptsAllowed,
    creationDate,
    teacherID,
    title,
    description
  });
  
  console.log(exam.examID)
  res.status(201).json({examID:exam.examID });
  // res.status(201).json({ examID:exam.examID });
};

module.exports.exams_get = async (req, res) => {
  const teacherID = req.params.teacherID;
  const exams = await Exams.findAll({where:{teacherID:teacherID}})
  res.status(201).json({exams });
 }

 module.exports.studentExams_get = async (req, res) => {
  const exams = await Exams.findAll();
  console.log('here')
  res.status(201).json({exams });
 }

 module.exports.exam_get = async (req, res) => {
  const examID = req.params.examID;
  const exam = await Exams.findOne({where:{examID:examID}})
  res.status(201).json({exam });
 }