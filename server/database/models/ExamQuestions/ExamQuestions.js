module.exports = (sequelize, DataTypes) => {
  const ExamQuestions = sequelize.define("ExamQuestions", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    questionID: {
      type: DataTypes.INTEGER,
    },
    examID: {
      type: DataTypes.INTEGER,
    },
    adaptiveIndex:{
      type: DataTypes.INTEGER,
    }
  });
  return ExamQuestions;
};