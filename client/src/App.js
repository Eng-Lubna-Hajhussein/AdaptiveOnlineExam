import { Route, Routes as Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from "@basetoolkit/ui";
import AppContextProvider from "./contextapi/contexts/AppContext";
import Home from "./pages/public/home/Home";
import AddQuestion from "./pages/stackholders/teacher/forms/AddQuestion";
import AddExam from "./pages/stackholders/teacher/forms/AddExam";
import Signup from "./pages/public/signup/Signup";
import TeacherSignup from "./pages/public/signup/teacher/Signup";
import StudentSignup from "./pages/public/signup/student/Signup";
import Login from "./pages/public/login/Login";
import TeacherLogin from "./pages/public/login/teacher/Login";
import StudentLogin from "./pages/public/login/student/Login";
import Exams from "./pages/stackholders/teacher/Exams";
import StudentExams from "./pages/stackholders/student/Exams";
import ExamQuestions from "./pages/stackholders/teacher/ExamQuestions";
import ExamSettings from "./pages/stackholders/teacher/ExamSettings";
import AddExamQuestion from "./pages/stackholders/teacher/AddExamQuestion";
import StudentExam from "./pages/stackholders/student/StudentExam";
import Score from "./pages/stackholders/student/score";
import Account from "./pages/stackholders/teacher/Account";

const theme = createTheme({
  direction: "rtl",
  palette:{
    primary:{
      main:"#e92239"
    },
    secondary:{
      main:"#216c27",
      light:"#7BCCA2"
    }
  }
});

function App() {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
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
          <Route
            path="/teacher/examQuestions/:examID"
            element={<ExamQuestions />}
          />
          <Route
            path="/teacher/examSettings/:examID"
            element={<ExamSettings />}
          />
          <Route
            path="/teacher/add-examQuestion/:examID"
            element={<AddExamQuestion />}
          />
          {/* Student Exams */}
          <Route path="/student/exams" element={<StudentExams />} />
          <Route path="/student/exam/:examID" element={<StudentExam />} />
          <Route path="/student/exam/score/:score/:qNum" element={<Score />} />
        </Switch>
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default App;
