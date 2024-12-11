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
  useTheme,
} from "@basetoolkit/ui";
import { AppContext } from "../../../../contextapi/contexts/AppContext";
import Header from "../../header/Header";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "@basetoolkit/ui/form";
import teacherImg from "../../../../assets/teacher-signup.svg";
import Copyright from "../../Copyright/Copyright";

export default function TeacherSignup() {
  const theme = useTheme();
  const { appState, appDispatch } = useContext(AppContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = React.useState(false);
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
    const { fullname, username, email, password } = data;

    try {
      setLoading(true);
      const response = await fetch("http://localhost:4000/teachers/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, username, email, password }),
      });

      const result = await response.json();
      setLoading(false);

      if (result.errors) {
        const errorMessage =
          result.errors.email?.[appState.lang] ||
          result.errors.password?.[appState.lang] ||
          "An error occurred.";
        setSnackbar({ open: true, message: errorMessage, severity: "error" });
      } else {
        setLoading(false);
        appDispatch({
          type: "GET_USERINFO",
          userInfo: { teacherID: response.user },
        });
        navigate(`/teacher-login`);
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
            <img src={teacherImg} alt="Teacher Signup" />
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
                icon="how_to_reg"
                fontSize={55}
                color="black"
                variant="filled"
              />
              <Typography
                color="primary"
                style={{
                  fontWeight: "600",
                  marginBottom: "25px",
                  fontSize: "25px",
                }}
              >
                SIGNUP AS TEACHER!
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                width="100%"
                px={5}
              >
                <Controller
                  name="fullname"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Full name is required.",
                    },
                    validate: (value) =>
                      value.trim().split(" ").length >= 2 ||
                      "Full name must contain at least 2 words.",
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      sx={{ mb: 2 }}
                      margin="normal"
                      color="secondary"
                      required
                      fullWidth
                      id="fullname"
                      label="Full Name"
                      error={!!errors?.fullname?.message}
                      helperText={errors.fullname?.message}
                    />
                  )}
                />
                <Controller
                  name="username"
                  control={control}
                  rules={{
                    required: { value: true, message: "Username is required." },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      sx={{ mb: 2 }}
                      color="secondary"
                      margin="normal"
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      error={!!errors?.username?.message}
                      helperText={errors.username?.message}
                    />
                  )}
                />
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
                      color="secondary"
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
                      color="secondary"
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
                  color="primary"
                  sx={{ mt: 3, mb: 2, borderColor: "#000" }}
                  disabled={loading}
                >
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item>
                    <Link
                      to="/login"
                      style={{ color: theme.palette.primary.main }}
                    >
                      Already have an account? Log In
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
