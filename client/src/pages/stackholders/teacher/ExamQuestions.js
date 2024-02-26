import { useState, useContext, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useFetch from "../../../hooks/useFetch";
import { AppContext } from "../../../contextapi/contexts/AppContext";
import Header from "./header/Header";
import QuizIcon from '@mui/icons-material/Quiz';
import { Link, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import ExamCard from "./ExamCard";
import ExamQuestionCard from "./ExamQuestionCard";

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

export default function ExamQuestions() {
  const { appState, appDispatch } = useContext(AppContext);
  const {examID} = useParams();
  const [{ data, isLoading, isError }, fetchData] = useFetch(`http://localhost:4000/examQuestion/${examID}`);
  console.log({data});

  useEffect(() => {
    console.log({ appState });
  }, [appState]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const headers = {
      method: "POST",
      withCredentials: true,
      body: JSON.stringify({
        email: fields.get("email"),
        password: fields.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetchData(
      "http://localhost:4000/teachers/signup",
      headers
    );
    appDispatch({
      type: "GET_USERINFO",
      userInfo: { teacherID: response.user },
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      {isLoading&&<CircularProgress />}
      {data&&<div
        style={{
          margin: "auto",
          width: "90%",
          padding: "10px",
          paddingTop: "50px",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            xs="12"
            container
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              style={{
                // color: "#4C6373",
                fontWeight: "700",
                marginBottom: "25px",
                fontSize: "35px",
              }}
            >
              EXAM QUESTIONS!
            </Typography>
            <Grid
              item
              xs="12"
              container
              justifyContent={"center"}
              alignItems={"center"}
            >
              <QuizIcon sx={{ fontSize: "55px",color:"#e92239" }} />
            </Grid>
          </Grid>
          <Grid item xs="12" container justifyContent={"flex-end"} my-4>
            <Link to={`/teacher/add-examQuestion/${examID}`}>
              <Button variant="contained" color="error">ADD NEW QUESTION</Button>
            </Link>
          </Grid>
          {data.questions.map((question)=><Grid item xs="12">
           <ExamQuestionCard question={question} dir={appState.dir} />
          </Grid>)}

        </Grid>
      </div>}
      
    </ThemeProvider>
  );
}
