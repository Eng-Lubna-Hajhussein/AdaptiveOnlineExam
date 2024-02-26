import { useState, useContext, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useFetch from "../../../hooks/useFetch";
import { AppContext } from "../../../contextapi/contexts/AppContext";

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

const AddExam = () => {
  const { appState, appDispatch } = useContext(AppContext);

  const [{ data, isLoading, isError }, fetchData] = useFetch();

  const handleSubmit = async (event) => {
      event.preventDefault();
      const fields = new FormData(event.currentTarget);

    const headers = {
      method: "POST",
      body: JSON.stringify({
        teacherID: appState.userInfo.teacherID,
        startDate: fields.get("startDate"),
        endDate: fields.get("endDate"),
        duration: fields.get("duration"),
        attemptsAllowed: fields.get("attemptsAllowed"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetchData("http://localhost:4000/exam", headers);
    appDispatch({
      type: "GET_EXAMINFO",
      examInfo: { examID: response?.examID },
    });
  };

  return (
    <div>
      <Button
        onClick={() => {
          handleSubmit();
        }}
      >
        Create Exam
      </Button>
    </div>
  );
};

export default AddExam;
