const { DATABASE, USER, PASSWORD, HOST, DIALECT } = require("../config/config");

const Sequelize = require("sequelize");
const db = {};

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
  define: {
    timestamps:false,
    freezeTableName: true,
  },
  operatorsAliases:false,
  pool:{
    max:5,
    min:0,
    acquire:30000,
    idle:10000
  }
});

db.sequelize = sequelize;
db.Sequelize = sequelize;

db.KPIs = require("./KPIs/KPIs")(sequelize, Sequelize);
db.Teachers = require("./Teachers/Teachers")(sequelize, Sequelize);
db.Questions = require("./Questions/Questions")(sequelize, Sequelize);
db.Exams = require("./Exams/Exams")(sequelize, Sequelize);
db.ExamQuestions = require("./ExamQuestions/ExamQuestions")(sequelize, Sequelize);
db.Students = require("./Students/Students")(sequelize, Sequelize);
db.Attempts = require("./Attempts/Attempts")(sequelize, Sequelize);

module.exports = db;