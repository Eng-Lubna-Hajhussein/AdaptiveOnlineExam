const { DATABASE, USER, PASSWORD, HOST, DIALECT } = require("../config/config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
});

const db = {};
db.sequelize = sequelize;
db.models = {};

db.models.KPIs = require("./KPIs/KPIs")(sequelize, Sequelize.DataTypes);
db.models.Teachers = require("./Teachers/Teachers")(sequelize, Sequelize.DataTypes);
db.models.Questions = require("./Questions/Questions")(sequelize, Sequelize.DataTypes);
db.models.Choices = require("./Choices/Choices")(sequelize, Sequelize.DataTypes);
db.models.Exams = require("./Exams/Exams")(sequelize, Sequelize.DataTypes);
db.models.ExamQuestions = require("./ExamQuestions/ExamQuestions")(sequelize, Sequelize.DataTypes);
db.models.Students = require("./Students/Students")(sequelize, Sequelize.DataTypes);
db.models.Attempts = require("./Attempts/Attempts")(sequelize, Sequelize.DataTypes);

module.exports = db;