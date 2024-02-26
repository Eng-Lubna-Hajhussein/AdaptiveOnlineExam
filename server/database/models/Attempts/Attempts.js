module.exports = (sequelize, DataTypes) => {
  const Attempts = sequelize.define("Attempts", {
    attemptID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    dateOfAttempt: {
      type: DataTypes.DATE,
    },
    score: {
      type: DataTypes.INTEGER,
    },
    studentID: {
      type: DataTypes.INTEGER,
    },
    examID: {
      type: DataTypes.INTEGER,
    },
    attemptDuration: {
      type: DataTypes.BIGINT,
    },
  });
  return Attempts;
};