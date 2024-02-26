import { useState, useContext, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { CircularProgress, Divider, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, makeStyles, ThemeProvider } from "@mui/material/styles";
import { withStyles } from "@mui/styles";
import useFetch from "../../../hooks/useFetch";
import { AppContext } from "../../../contextapi/contexts/AppContext";
import Header from "./header/Header";
import validator from "validator";
import { Link, useParams } from "react-router-dom";
import HowToRegIcon from "@mui/icons-material/HowToReg";
// import { AppContext } from "../../../../contextapi/contexts/AppContext";
import teacherImg from "../../../assets/add-question.svg";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Swal from "sweetalert2";
import AddExamQuestionCard from "./AddExamQuestionCard";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#3c7e54",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "yellow",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#3c7e54",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3c7e54",
      },
    },
  },
})(TextField);

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function AddExamQuestion() {
  const { appState, appDispatch } = useContext(AppContext);
  const {examID} = useParams();
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [{ data, isLoading, isError }, fetchData] = useFetch();
  const [questions, setQuestions] = useState([]);
  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log({ appState });
  }, [appState]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const headers = {
      method: "POST",
      body: JSON.stringify({
        grade: fields.get("grade"),
        skill: fields.get("skill"),
        kpiNumber: fields.get("kpiNumber"),
        level: fields.get("level"),
        examID:examID
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    setLoading(true);
    const response = await fetchData("http://localhost:4000/questionKPI", headers);
    setLoading(false);
    if(response?.questions?.length){
        setQuestions(response.questions)
    }
    if(!response?.questions?.length){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: `<h5>No Questions Found</h5>`,
            footer: `<a href="">Why do I have this issue?</a>`
          })
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Container>
        <CssBaseline />
        <Grid container justifyContent={"center"}>
          <Grid item xs="6">
            <Box
              sx={{
                marginTop: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Grid
                item
                xs="12"
                container
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography
                  style={{
                    color: "#e92239",
                    fontWeight: "600",
                    marginBottom: "25px",
                    fontSize: "25px",
                  }}
                >
                  ADD NEW QUESTION TO YOUR EXAM!
                </Typography>
              </Grid>
              <Box component="form" onSubmit={handleSubmit}>
                <CssTextField
                  margin="normal"
                  required
                  sx={{width:"278px",margin:"5px"}}
                  id="grade"
                  label="Question Grade"
                  name="grade"
                  autoComplete="grade"
                  autoFocus
                />
                <CssTextField
                  margin="normal"
                  required
                  sx={{width:"278px",margin:"5px"}}
                  id="skill"
                  label="Question Skill"
                  name="skill"
                  autoComplete="skill"
                  autoFocus
                />
                <CssTextField
                  margin="normal"
                  required
                  sx={{width:"278px",margin:"5px"}}
                  id="kpiNumber"
                  label="Question KPI Number"
                  name="kpiNumber"
                  autoComplete="kpiNumber"
                  autoFocus
                />
                <CssTextField
                  margin="normal"
                  required
                  sx={{width:"278px",margin:"5px"}}
                  id="level"
                  label="Question Level"
                  name="level"
                  autoComplete="level"
                  autoFocus
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 3, mb: 2, color: "#e92239", borderColor: "#000" }}
                  disabled={isLoading}
                >
                  SEARCH
                </Button>
              </Box>
            </Box>
          </Grid>
          {loading&&<Grid item xs="12" justifyContent={"center"} alignContent={"center"}>
          <CircularProgress /></Grid>}
          {!!questions.length&&<Grid item xs="12" container justifyContent={"center"}>
          <Grid item xs="12">
            <Divider >QUESTIONS BANK</Divider>
            <Grid item xs="12"></Grid>
            {questions.map((question)=><Grid item xs="12" sx={{padding:"10px"}}>
           <AddExamQuestionCard question={question} examID={examID} dir={appState.dir} />
          </Grid>)}
            </Grid>
          </Grid>}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
