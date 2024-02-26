import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import AppContextProvider, { AppContext } from "./contextapi/contexts/AppContext";
// import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import Home from "./pages/public/home/Home";
import AddQuestion from "./pages/stackholders/teacher/forms/AddQuestion";
import AddExam from "./pages/stackholders/teacher/forms/AddExam";
import Signup from "./pages/public/signup/Signup";
import TeacherSignup from "./pages/public/signup/teacher/Signup";
import StudentSignup from "./pages/public/signup/student/Signup";
import Login from "./pages/public/login/Login";
import TeacherLogin from "./pages/public/login/teacher/Login";
import StudentLogin from "./pages/public/login/student/Login";
import { useContext, useEffect, useState } from "react";
import Exams from "./pages/stackholders/teacher/Exams";
import StudentExams from "./pages/stackholders/student/Exams";
import Exam from "./pages/stackholders/teacher/Exam";
import ExamQuestions from "./pages/stackholders/teacher/ExamQuestions";
import ExamSettings from "./pages/stackholders/teacher/ExamSettings";
import AddExamQuestion from "./pages/stackholders/teacher/AddExamQuestion";
import StudentExam from "./pages/stackholders/student/StudentExam";
import Score from "./pages/stackholders/student/score";
import Account from "./pages/stackholders/teacher/Account";


const theme = createTheme({
  direction: "rtl"
});
// const cacheRtl = createCache({
//   key: "muirtl",
//   stylisPlugins: [rtlPlugin]
// });

function App() {

  return (
    <Router>
      <ThemeProvider theme={theme}>
      <AppContextProvider>
      {/* <CacheProvider value={cacheRtl}> */}
      <Switch>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/teacher-signup" element={<TeacherSignup />} />
        <Route path="/student-signup" element={<StudentSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        {/* Teacher Pages */}
        <Route path="/teacher/account" element={<Account />} />
        <Route path="/teacher/add-question" element={<AddQuestion />} />
        <Route path="/teacher/add-exam" element={<AddExam />} />
        <Route path="/teacher/exams" element={<Exams />} />
        <Route path="/teacher/examQuestions/:examID" element={<ExamQuestions />} />
        <Route path="/teacher/examSettings/:examID" element={<ExamSettings />} />
        <Route path="/teacher/add-examQuestion/:examID" element={<AddExamQuestion />} />
        {/* Student Exams */}
        <Route path="/student/exams" element={<StudentExams />} />
        <Route path="/student/exam/:examID" element={<StudentExam />} />
        <Route path="/student/exam/score/:score/:qNum" element={<Score />} />
        </Switch>
        </AppContextProvider>
      {/* </CacheProvider> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
