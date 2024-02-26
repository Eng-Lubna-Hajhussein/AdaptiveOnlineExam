module.exports = (sequelize, DataTypes) => {
  const Questions = sequelize.define("Questions", {
    questionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    kpiID: {
      type: DataTypes.INTEGER,
    },
    questionText: {
      type: DataTypes.STRING(255),
    },
    questionWeight: {
      type: DataTypes.STRING(255),
    },
    creationDate: {
      type: DataTypes.DATE,
    },
    teacherID: {
      type: DataTypes.INTEGER,
    },
    isPrivate: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    correctChoice: {
      type: DataTypes.STRING(255),
    },
    incorrectChoice1: {
      type: DataTypes.STRING(255),
    },
    incorrectChoice2: {
      type: DataTypes.STRING(255),
    },
    incorrectChoice3: {
      type: DataTypes.STRING(255),
    },
  });
  return Questions;
};