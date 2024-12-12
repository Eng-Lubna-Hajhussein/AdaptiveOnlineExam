import React from "react";
import { Button, Grid, Typography, SvgIcon } from "@basetoolkit/ui";
import Header from "./header/Header";
import { Link } from "react-router-dom";

export default function Account() {
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
            <Grid
              item
              xs="12"
              container
              justifyContent={"center"}
              alignItems={"center"}
            >
              <SvgIcon
                icon="account_circle"
                fontSize={55}
                color="black"
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
            <Link to="/teacher/exams">
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
            <Link to="/teacher/add-question">
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
    </React.Fragment>
  );
}
