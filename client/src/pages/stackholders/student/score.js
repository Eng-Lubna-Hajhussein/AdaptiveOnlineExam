import { useState, useContext, useEffect, useRef, useCallback, useMemo } from "react";
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
import { Link, useParams, useNavigate } from "react-router-dom";
import { CircularProgress, Divider } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExamCard from "./ExamCard";
import ExamQuestionCard from "./ExamQuestionCard";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Swal from "sweetalert2";

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


export default function Score() {
  const { appState, appDispatch } = useContext(AppContext);
  const { score,qNum } = useParams();
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
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
                Student #{appState.userInfo.studentID}
              </Typography>
            </Grid>
            <Grid
              sx={{ p: "5px" }}
              item
              justifyContent={"center"}
              justifySelf={"center"}
              justifyItems={"center"}
              container
              xs="12"
            >
              <Card dir={appState.dir} sx={{ minWidth: 875 }}>
              <Divider />
              <Grid sx={{padding:"10px"}} item xs="12" container justifyContent={"center"}>
              <Typography sx={{ fontSize: "14px", color: "gree",border:"1px solid green",padding:"5px" }}>
                  SCORE: {score} out of {qNum}
                </Typography>
              </Grid>
              </Card>
            </Grid>
          </Grid>
        </div>
    </ThemeProvider>
  );
}
