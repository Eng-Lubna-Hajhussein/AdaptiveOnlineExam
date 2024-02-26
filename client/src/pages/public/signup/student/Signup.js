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
import { createTheme, makeStyles, ThemeProvider } from "@mui/material/styles";
import { withStyles } from "@mui/styles";
import useFetch from "../../../../hooks/useFetch";
import { AppContext } from "../../../../contextapi/contexts/AppContext";
import Header from "../../header/Header";
import validator from "validator";
import { Link } from "react-router-dom";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import studentImg from "../../../../assets/student-signup.svg";
import Swal from "sweetalert2";

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

export default function Signup() {
  const { appState, appDispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [{ data, isLoading, isError }, fetchData] = useFetch();
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
    const fullname = fields.get("fullname").trim();
    const email = fields.get("email").trim();
    const password = fields.get("password").trim();
    let validErrors = {
      fullname: "",
      email: "",
      password: "",
    };
    try {
      if (!validator.isEmail(email)) {
        validErrors = {
          ...validErrors,
          ["email"]: "(invalid email):email syntax must be user@gmail.com",
        };
      }
      if (password.length < 8) {
        validErrors = {
          ...validErrors,
          ["password"]:
            "(weak password):your password must be at least 8 characters",
        };
      }
      if (fullname.split(" ").length < 2) {
        validErrors = {
          ...validErrors,
          ["fullname"]:
            "(incomplete fullname):your fullname must contain at least 2 word",
        };
      }
      setErrors({...validErrors});
      if (
        validator.isEmail(email) &&
        password.length > 7 &&
        fullname.split(" ").length >= 2
      ) {
        const headers = {
          method: "POST",
          withCredentials: true,
          body: JSON.stringify({
            email: email,
            password: password,
            fullname: fullname,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        };
        setLoading(true);
        const response = await fetchData(
          "http://localhost:4000/students/signup",
          headers
        );
        if(response.errors){
          if(response.errors.email.en){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              html: `<h5>${response.errors.email[appState.lang]}</h5>`,
              footer: `<a href="">Why do I have this issue?</a>`
            })
          }
          else 
          if(response.errors.password.ar){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              html: `<h5>${response.errors.password[appState.lang]}</h5>`,
              footer: `<a href="">Why do I have this issue?</a>`
            })
          }
        }else{
          setLoading(false);
          appDispatch({
            type: "GET_USERINFO",
            userInfo: { studentID: response.user },
          });
        }
      }
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Container>
        <CssBaseline />
        <Grid container>
          <Grid item xs="6">
            <img src={studentImg} />
          </Grid>
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
                <HowToRegIcon sx={{ fontSize: "55px" }} />
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
                  SIGNUP AS STUDENT!
                </Typography>
              </Grid>
              <Box component="form" onSubmit={handleSubmit}>
                <CssTextField
                  margin="normal"
                  required
                  fullWidth
                  id="fullname"
                  label="Full Name"
                  name="fullname"
                  autoComplete="fullname"
                  autoFocus
                  onChange={(e)=>{
                    if(e.target.value.trim().split(" ").length>=2){
                      setErrors({...errors,["fullname"]:""})
                    }
                  }}
                  error={!!errors.fullname.length}
                  helperText={!!errors.fullname.length? errors.fullname: ''}
                />
                <CssTextField
                  margin="normal"
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                />
                <CssTextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e)=>{
                    if(validator.isEmail(e.target.value)){
                      setErrors({...errors,["email"]:""})
                    }
                  }}
                  error={!!errors.email.length}
                  helperText={!!errors.email.length? errors.email: ''}
                />
                <CssTextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  autoFocus
                  onChange={(e)=>{
                    if(e.target.value.length>7){
                      setErrors({...errors,["password"]:""})
                    }
                  }}
                  error={!!errors.password.length}
                  helperText={!!errors.password.length? errors.password: ''}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="success" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 3, mb: 2, color: "#e92239", borderColor: "#000" }}
                  disabled={isLoading}
                >
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item>
                    <Link
                      to="/login"
                      variant="body2"
                      style={{ color: "#e92239" }}
                    >
                      {"Already have an account? Log In"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
