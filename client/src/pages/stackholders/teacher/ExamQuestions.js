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
import { Link, useParams } from "react-router-dom";
import ExamQuestionCard from "./ExamQuestionCard";

export default function ExamQuestions() {
  const { appState, appDispatch } = useContext(AppContext);
  const { examID } = useParams();
  const [{ data, isLoading, isError }, fetchData] = useFetch(
    `http://localhost:4000/examQuestion/${examID}`
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
                EXAM QUESTIONS!
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
                  variant="filled"
                  fontSize={55}
                  color="primary"
                />
              </Grid>
            </Grid>
            <Grid item xs="12" container justifyContent={"end"} my={4}>
              <Link to={`/teacher/add-examQuestion/${examID}`}>
                <Button variant="contained" color="error">
                  ADD NEW QUESTION
                </Button>
              </Link>
            </Grid>
            {data.questions.map((question) => (
              <Grid item xs="12">
                <ExamQuestionCard question={question} dir={appState.dir} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </React.Fragment>
  );
}
