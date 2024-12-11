import React from "react";
import useFetch from "../../../hooks/useFetch";
import Header from "./header/Header";
import { Grid, Typography, CircularProgress, SvgIcon } from "@basetoolkit/ui";
import ExamCard from "./ExamCard";

export default function Exams() {
  const [{ data, isLoading }] = useFetch(`http://localhost:4000/studentExams`);

  return (
    <React.Fragment>
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
                  color: "#e92239",
                  fontWeight: "700",
                  marginBottom: "25px",
                  fontSize: "35px",
                }}
              >
                EXAMS!
              </Typography>
              <Grid
                item
                xs="12"
                container
                justifyContent={"center"}
                alignItems={"center"}
              >
                <SvgIcon
                  icon="quiz"
                  color="black"
                  variant="filled"
                  fontSize={55}
                />
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
    </React.Fragment>
  );
}
