import { useState, useContext, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { Divider, TextField } from "@mui/material";
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
import teacherImg from "../../../assets/add-exam.svg";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Swal from "sweetalert2";
// import QuizIcon from '@mui/icons-material/Quiz';
import SettingsIcon from '@mui/icons-material/Settings';

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

export default function ExamSettings() {
  const { appState, appDispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const {examID} = useParams();
  const [{ data, isLoading, isError }, fetchData] = useFetch(`http://localhost:4000/exam/${examID}`);
  console.log({data});

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
        teacherID: appState.userInfo.teacherID,
        startDate: startDate["$d"],
        endDate: endDate["$d"],
        duration:
          fields.get("hours") * 3600 +
          fields.get("minutes") * 60 +
          fields.get("seconds"),
        attemptsAllowed: fields.get("attemptsAllowed"),
        title: fields.get("title"),
        description: fields.get("description"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetchData("http://localhost:4000/exam", headers);
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
                    color: "#000",
                    fontWeight: "600",
                    marginBottom: "25px",
                    fontSize: "25px",
                  }}
                >
                  EXAM SETTINGS
                </Typography>
              </Grid>
              <Grid
              item
              xs="12"
              container
              justifyContent={"center"}
              alignItems={"center"}
            >
              <SettingsIcon sx={{ fontSize: "55px", color:"#e92239" }} />
            </Grid>
              <Box component="form" onSubmit={handleSubmit}>
                <CssTextField
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Exam Title"
                  name="title"
                  autoComplete="title"
                  focused
                  value={data?.exam?.title}
                />
                <CssTextField
                  margin="normal"
                  required
                  fullWidth
                  id="description"
                  label="Exam Description"
                  name="description"
                  autoComplete="description"
                  focused
                  value={data?.exam?.description}
                  multiline
                  rows={4}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker", "DatePicker"]}>
                    <DatePicker
                      sx={{ width: "580px" }}
                      label="Start Date"
                      name="startDate"
                      id="startDate"
                      value={dayjs(data?.exam?.startDate)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker", "DatePicker"]}>
                    <DatePicker
                      sx={{ width: "580px" }}
                      label="End Date"
                      name="endDate"
                      id="endDate"
                      value={dayjs(data?.exam?.endDate)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
                <CssTextField
                  margin="normal"
                  required
                  fullWidth
                  id="attemptsAllowed"
                  label="Attempts Allowed"
                  name="attemptsAllowed"
                  autoComplete="attemptsAllowed"
                  focused
                  value={data?.exam?.attemptsAllowed}
                />
                <Divider sx={{ color: "gray" }}>Duration</Divider>
                <CssTextField
                  margin="normal"
                  required
                  sx={{ width: "186px", mr: "10px" }}
                  id="hours"
                  label="Hours"
                  name="hours"
                  autoComplete="hours"
                  focused
                  value={parseInt(data?.exam?.duration/3600)}
                />
                <CssTextField
                  margin="normal"
                  required
                  sx={{ width: "186px", mr: "10px" }}
                  id="minutes"
                  label="Minutes"
                  name="minutes"
                  autoComplete="minutes"
                  focused
                  value={parseInt((data?.exam?.duration-parseInt(data?.exam?.duration/3600)*3600)/60)}
                />
                <CssTextField
                  margin="normal"
                  required
                  sx={{ width: "186px" }}
                  id="seconds"
                  label="Seconds"
                  name="seconds"
                  autoComplete="seconds"
                  focused
                  value={data?.exam?.duration-(parseInt((data?.exam?.duration-parseInt(data?.exam?.duration/3600)*3600)/60)*60)-(parseInt(data?.exam?.duration/3600)*3600)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 3, mb: 2, color: "#e92239", borderColor: "#000" }}
                  disabled={isLoading}
                >
                  SAVE
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
