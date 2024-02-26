//post
const {
    ExamQuestions,Questions,KPIs
  } = require("../../../database/models/database");
  // controller actions
  module.exports.examQuestions_post = async (req, res) => {
  const {
    questionID,
    examID,
  } = req.body;
  
  const question = await Questions.findOne({where:{questionID:questionID}});
  const kpiIDTest = question.kpiID;
  const questionKpi = await KPIs.findOne({where:{kpiID:kpiIDTest}});
  // console.log()
  const adaptiveIndex = questionKpi.adaptiveIndex;
      
const examquestions = await ExamQuestions.create({
    questionID,
    examID,
    adaptiveIndex
  });
  res.status(201).json({ examquestions });
};

module.exports.examQuestions_get = async (req, res) => {
  const examID= req.params.examID;    
  const examQuestions = await ExamQuestions.findAll({where:{examID:examID}});
  let questions = await Promise.all(examQuestions.map(async({questionID,adaptiveIndex,examID})=>{
    const question = await Questions.findOne({where:{questionID:questionID}});
    return {...question.dataValues,adaptiveIndex,examID};
  }))
  questions = questions.sort((a,b)=>b.adaptiveIndex-a.adaptiveIndex);
  res.status(201).json({ questions });
};