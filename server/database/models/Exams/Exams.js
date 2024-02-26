module.exports = (sequelize, DataTypes) => {
  const Exams = sequelize.define("Exams", {
    examID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    teacherID: {
      type: DataTypes.INTEGER,
    },
    startDate: {
      type: DataTypes.DATE,
    },
    endDate: {
      type: DataTypes.DATE,
    },
    creationDate: {
      type: DataTypes.DATE,
    },
    duration: {
      type: DataTypes.BIGINT,
    },
    attemptsAllowed: {
      type: DataTypes.INTEGER,
    },
    title:{
      type: DataTypes.STRING(255),
    },
    description:{
      type: DataTypes.STRING(255),
    }
  });
  return Exams;
};