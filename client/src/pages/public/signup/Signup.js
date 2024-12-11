import React from "react";
import { Typography, Grid, Button, SvgIcon, useTheme } from "@basetoolkit/ui";
import Header from "../header/Header";
import { Link } from "react-router-dom";

export default function Signup() {
  const theme = useTheme();
  return (
    <React.Fragment>
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
            <Typography
              style={{
                fontWeight: "700",
                marginBottom: "25px",
                fontSize: "35px",
              }}
            >
              Get Your Free Account Now!
            </Typography>
            <Grid
              item
              xs="12"
              container
              justifyContent={"center"}
              alignItems={"center"}
            >
              <SvgIcon
                icon="how_to_reg"
                color="common.black"
                fontSize={55}
                variant="filled"
              />
            </Grid>
            <Grid
              item
              xs="12"
              container
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                  color= "primary"
                style={{
                  fontWeight: "600",
                  marginBottom: "25px",
                  fontSize: "25px",
                }}
              >
                SIGNUP AS
              </Typography>
            </Grid>
          </Grid>
          <Grid alignItems={"start"} item xs={6}>
            <Link to="/student-signup">
              <Button
                style={{
                  padding: "20px",
                  fontFamily: "sans-serif",
                  fontSize: "20px",
                  color: "white",
                }}
                color="secondary.light"
                fullWidth
                variant="contained"
              >
                Student
              </Button>
            </Link>
          </Grid>
          <Grid alignItems={"end"} item xs={6}>
            <Link to="/teacher-signup">
              <Button
                style={{
                  padding: "20px",
                  fontFamily: "sans-serif",
                  fontSize: "20px",
                  color: "white",
                }}
                color="secondary.light"
                fullWidth
                variant="contained"
              >
                Teacher
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link
              to="/login"
              variant="body2"
              style={{ color: theme.palette.primary.main }}
            >
              {"Already have an account? Log In"}
            </Link>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
