const {
  Questions,
  ExamQuestions,
  KPIs,
  Choices,
  Teachers,
} = require("../../../database/models/database");

// controller actions
module.exports.question_post = async (req, res) => {
  console.log("^^^^^^^^^^^^^^^^^^^^^^^^^");
  console.log(req.body);
  console.log("^^^^^^^^^^^^^^^^^^^^^^^^^");

  const {
    skill,
    grade,
    level,
    kpiNumber,
    questionText,
    questionWeight,
    isPrivate,
    correctChoice,
    incorrectChoice1,
    incorrectChoice2,
    incorrectChoice3,
    teacherID,
  } = req.body;
  console.log({
    skill: skill,
    grade: grade,
    level: level,
    kpiNumber: kpiNumber,
  });
  const kpi = await KPIs.findOne({
    where: { skill: skill, grade: grade, level: level, kpiNumber: kpiNumber },
  });
  console.log({ kpi });
  if (!kpi) {
    return res.status(201).json({ error: true });
    // throw Error("kpi is not found");
  }
  const kpiID = kpi.kpiID;
  //
  const currentdate = new Date();
  const creationDate = `${currentdate.getFullYear()}-${
    currentdate.getMonth() + 1
  }-${currentdate.getDate()} ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;

  const question = await Questions.create({
    questionText,
    questionWeight,
    kpiID,
    creationDate,
    isPrivate,
    correctChoice,
    incorrectChoice1,
    incorrectChoice2,
    incorrectChoice3,
    teacherID,
  });
  res.status(201).json({ question });
};

module.exports.questions_get = async (req, res) => {
  const questions = await Questions.findAll();
  const questionsStringify = JSON.stringify(questions, null, 2);
  const test = JSON.parse(questionsStringify);
  test.forEach((element) => {
    console.log(element.questionID);
  });

  // console.log (JSON.parse(questions))
  // console.log (typeof (questions))
};

module.exports.questionKPI_get = async (req, res) => {
  // console.log("^^^^^^^^^^^^^^^^^^^^^^^^^");
  // console.log(req.body);
  // console.log("^^^^^^^^^^^^^^^^^^^^^^^^^");

  const { skill, grade, level, kpiNumber, examID } = req.body;

  const kpi = await KPIs.findOne({
    where: { skill: skill, grade: grade, level: level, kpiNumber: kpiNumber },
  });
  const kpiID = kpi?.kpiID;

  if (!kpiID) {
    res.status(201).json({ questions: undefined });
  }

  const questionsBank = await Questions.findAll({
    where: { kpiID: kpiID },
  });
  const examQuestions = await ExamQuestions.findAll({
    where: { examID: examID },
  });

  const questions = questionsBank.filter((question) => {
    const duplicate = examQuestions.find((eq) => {
      return eq.questionID === question.questionID;
    });
    return !duplicate;
  });

  res.status(201).json({ questions });
};
