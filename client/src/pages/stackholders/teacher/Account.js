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
// import HowToRegIcon from "@mui/icons-material/HowToReg";
import AccountIcon from '@mui/icons-material/AccountBox';
import { Link } from "react-router-dom";

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

export default function Account() {
  const { appState, appDispatch } = useContext(AppContext);
  const [{ data, isLoading, isError }, fetchData] = useFetch();

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
      "http://localhost:4000/teachers/login",
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
      <div
        style={{
          margin: "auto",
          width: "40%",
          padding: "10px",
          paddingTop: "120px",
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
            <Grid
              item
              xs="12"
              container
              justifyContent={"center"}
              alignItems={"center"}
            >
              <AccountIcon sx={{ fontSize: "55px" }} />
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
                ACCOUNT
              </Typography>
            </Grid>
          </Grid>
          <Grid alignItems={"flex-start"} item xs={6}>
          <Link
                to="/teacher/exams"
              >
            <Button
              style={{
                background: "#7BCCA2",
                padding: "20px",
                fontFamily: "sans-serif",
                fontSize: "20px",
              }}
              fullWidth
              variant="contained"
            >
              
                Exams
            </Button>
              </Link>
          </Grid>
          <Grid alignItems={"flex-end"} item xs={6}>
          <Link
                to="/teacher/add-question"
              >
            <Button
              style={{
                background: "#7BCCA2",
                padding: "20px",
                fontFamily: "sans-serif",
                fontSize: "20px",
              }}
              fullWidth
              variant="contained"
            >
                TESTBANK
            </Button>
              </Link>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
