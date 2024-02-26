//dependencies-------------------------------------------------------------------------------------
const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const { requireAuth, checkUser_IsTeacher } = require('./restfulApi/middleware/authMiddleware');
const teachersRoutes = require("./restfulApi/routes/Teachers/Teachers")
const studentsRoutes = require("./restfulApi/routes/Students/Students")
const questionsRoutes = require("./restfulApi/routes/Questions/Questions")
const examRoutes = require("./restfulApi/routes/Exams/Exams");
const examQuestionsRoutes = require("./restfulApi/routes/ExamQuestions/ExamQuestions");

//app modules---------------------------------------------------------------------------------------
const db = require("./database/models/database");

const PORT = process.env.PORT || 4000;

const app = express();

//middleware----------------------------------------------------------------------------------------
//middleware to parse req body from a json format
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
//middleware to allow cors origin requests from client
app.use(cors({
  credentials: true,
  origin: [
    "http://localhost:3000",
    "http://localhost:8080",
    "http://localhost:4200",
  ],
}));
//middleware to parse cookie
app.use(cookieParser());

//Routes middleware
app.use("/teachers",teachersRoutes);
app.use("/students",studentsRoutes);
app.use("/",requireAuth,examRoutes);
app.use("/",requireAuth,checkUser_IsTeacher,questionsRoutes);
app.use("/",requireAuth,examQuestionsRoutes);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`listening on: http://localhost:${PORT}`);
    });
  });