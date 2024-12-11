import React, { useContext } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
  Snackbar,
  SvgIcon,
} from "@basetoolkit/ui";
import { AppContext } from "../../../../contextapi/contexts/AppContext";
import Header from "../../header/Header";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "@basetoolkit/ui/form";
import loginImg from "../../../../assets/student-signup.svg";
import Copyright from "../../Copyright/Copyright";
import useFetch from "../../../../hooks/useFetch";

export default function StudentLogin() {
  const { appState, appDispatch } = useContext(AppContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = React.useState(false);
  const [{}, fetchData] = useFetch();
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: "",
    severity: "success",
  });
  const navigate = useNavigate();

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      setLoading(true);
      const headers = {
        method: "POST",
        withCredentials: true,
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetchData(
        "http://localhost:4000/students/login",
        headers
      );

      setLoading(false);

      if (response.errors) {
        const errorMessage =
          response.errors.email?.[appState.lang] ||
          response.errors.password?.[appState.lang] ||
          "An error occurred.";
        setSnackbar({ open: true, message: errorMessage, severity: "error" });
      } else {
        setLoading(false);

        appDispatch({
          type: "GET_USERINFO",
          userInfo: { studentID: response.user },
        });
        navigate("/student/exams");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setSnackbar({
        open: true,
        message: "An unexpected error occurred.",
        severity: "error",
      });
    }
  };

  return (
    <React.Fragment>
      <Header />
      <Container>
        <CssBaseline />
        <Grid container>
          <Grid item xs={6}>
            <img src={loginImg} alt="Student Login" />
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                marginTop: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <SvgIcon
                icon="lock_open"
                fontSize={55}
                color="black"
                variant="filled"
              />
              <Typography
                style={{
                  color: "#e92239",
                  fontWeight: "600",
                  marginBottom: "25px",
                  fontSize: "25px",
                }}
              >
                STUDENT LOGIN!
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                width="100%"
                px={5}
              >
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: { value: true, message: "Email is required." },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address.",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      sx={{ mb: 2 }}
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      error={!!errors?.email?.message}
                      helperText={errors.email?.message}
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: { value: true, message: "Password is required." },
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long.",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      sx={{ mb: 2 }}
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      error={!!errors?.password?.message}
                      helperText={errors.password?.message}
                    />
                  )}
                />
                <FormControlLabel
                  control={<Checkbox size="large" color="success" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 3, mb: 2, color: "#e92239", borderColor: "#000" }}
                  disabled={loading}
                >
                  Log In
                </Button>
                <Grid container>
                  <Grid item>
                    <Link to="/signup" style={{ color: "#e92239" }}>
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Copyright mt={8} mb={4} />
      </Container>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        {snackbar.message}
      </Snackbar>
    </React.Fragment>
  );
}
