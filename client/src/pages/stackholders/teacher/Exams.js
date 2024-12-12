import React, { useContext } from "react";
import {
  CircularProgress,
  Button,
  Grid,
  Typography,
  SvgIcon,
} from "@basetoolkit/ui";
import useFetch from "../../../hooks/useFetch";
import { AppContext } from "../../../contextapi/contexts/AppContext";
import Header from "./header/Header";
import { Link } from "react-router-dom";
import ExamCard from "./ExamCard";

export default function Exams() {
  const { appState, appDispatch } = useContext(AppContext);
  const teacherID = appState?.userInfo?.teacherID;
  const [{ data, isLoading, isError }, fetchData] = useFetch(
    `http://localhost:4000/exams/${teacherID}`
  );

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
                  // color: "#4C6373",
                  fontWeight: "700",
                  marginBottom: "25px",
                  fontSize: "35px",
                }}
              >
                ADD | EDIT EXAMS!
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
                  YOUR EXAMS
                </Typography>
              </Grid>
              <Grid item xs="12" container justifyContent={"flex-end"} my-4>
                <Link to={"/teacher/add-exam"}>
                  <Button variant="contained" color="error">
                    ADD NEW Exam
                  </Button>
                </Link>
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
