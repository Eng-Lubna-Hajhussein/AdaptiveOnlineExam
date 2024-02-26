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
import QuizIcon from "@mui/icons-material/Quiz";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import ExamCard from "./ExamCard";

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

export default function Exams() {
  const { appState, appDispatch } = useContext(AppContext);
  const teacherID = appState?.userInfo?.teacherID;
  const [{ data, isLoading, isError }, fetchData] = useFetch(
    `http://localhost:4000/exams/${teacherID}`
  );
  console.log({ data });

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
      {isLoading && <CircularProgress />}
      {data && (
        <div
          style={{
            margin: "auto",
            width: "90%",
            padding: "10px",
            paddingTop: "50px",
          }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
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
                  // color: "#4C6373",
                  fontWeight: "700",
                  marginBottom: "25px",
                  fontSize: "35px",
                }}
              >
                ADD | EDIT EXAMS!
              </Typography>
              <Grid
                item
                xs="12"
                container
                justifyContent={"center"}
                alignItems={"center"}
              >
                <QuizIcon sx={{ fontSize: "55px" }} />
              </Grid>
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
                  YOUR EXAMS
                </Typography>
              </Grid>
              <Grid item xs="12" container justifyContent={"flex-end"} my-4>
                <Link to={"/teacher/add-exam"}>
                  <Button variant="contained" color="error">
                    ADD NEW Exam
                  </Button>
                </Link>
              </Grid>
            </Grid>
            {data.exams.map((exam) => (
              <Grid item xs="4">
                <ExamCard exam={exam} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </ThemeProvider>
  );
}
