import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  Card,
  CardContent,
  FormLabel,
  RadioGroup,
  Radio,
  CircularProgress,
  Divider,
  Typography,
  Grid,
  FormControlLabel,
  Button,
  SvgIcon,
} from "@basetoolkit/ui";
import useFetch from "../../../hooks/useFetch";
import { AppContext } from "../../../contextapi/contexts/AppContext";
import Header from "./header/Header";
import { useParams, useNavigate } from "react-router-dom";

function shuffle(inputArr) {
  const array = [...inputArr];
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default function StudentExam() {
  const { appState } = useContext(AppContext);
  const { examID } = useParams();
  const navigate = useNavigate();
  const [{ data, isLoading, isError }, fetchData] = useFetch(
    `http://localhost:4000/examQuestion/${examID}`
  );
  const [remainTime, setRemainTime] = useState(12640);
  const [questions, setQuestions] = useState(data?.questions);
  const [currentQuestion, setCurrentQuestion] = useState(data?.questions[0]);
  const [questionIndex, setQuestionIndex] = useState(1);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState(null);
  const decrementTimer = useCallback(() => {
    setRemainTime((oldTimer) => oldTimer - 1);
  }, []);
  const choices = useMemo(() => {
    if (currentQuestion) {
      return shuffle([
        currentQuestion?.incorrectChoice1,
        currentQuestion?.incorrectChoice2,
        currentQuestion?.incorrectChoice3,
        currentQuestion?.correctChoice,
      ]);
    }
    return [];
  }, [currentQuestion]);

  useEffect(() => {
    if (remainTime <= 0) {
      return;
    }
    const timeoutFunction = setInterval(decrementTimer, 1000);
    return () => clearInterval(timeoutFunction);
  }, [decrementTimer, remainTime]);

  useEffect(() => {
    if (data) {
      setQuestions(data?.questions);
    }
  }, [data]);

  useEffect(() => {
    if (questions) {
      setCurrentQuestion(questions[0]);
    }
  }, [questions]);

  useEffect(() => {}, [answer]);

  useEffect(() => {
    console.log({ score });
  }, [score]);

  const handleNextQuestion = () => {
    //answer

    if (answer === currentQuestion.correctChoice) {
      setScore(score + 1);
    }

    if (answer === currentQuestion.correctChoice && questions.length === 1) {
      navigate(`/student/exam/score/${score + 1}/${data.questions.length}`);
      return;
    }
    if (answer !== currentQuestion.correctChoice && questions.length === 1) {
      navigate(`/student/exam/score/${score}/${data.questions.length}`);
      return;
    }
    if (answer === currentQuestion.correctChoice && questions.length > 1) {
      //questions sorted adaptiveIndex
      const updateQuestions = [...questions];
      updateQuestions.shift();
      setQuestions(updateQuestions);
    }
    if (answer !== currentQuestion.correctChoice && questions.length > 1) {
      //questions sorted adaptiveIndex
      const updateQuestions = [...questions];
      updateQuestions.shift();
      const targetQID = updateQuestions.findIndex((q) => {
        if (q.adaptiveIndex < currentQuestion.adaptiveIndex) {
          return q;
        }
      });
      if (targetQID !== -1) {
        const target = updateQuestions.splice(targetQID, 1)[0];
        updateQuestions.unshift(target);
      }
      setQuestions(updateQuestions);
    }
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <React.Fragment>
      <Header />
      {isLoading && <CircularProgress />}
      {!!questions?.length && !!choices.length && (
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
              <Grid
                item
                xs="12"
                container
                justifyContent={"center"}
                alignItems={"center"}
              >
                <SvgIcon
                  icon="access_time"
                  mx={"3px"}
                  fontSize={25}
                  color="primary"
                />
                <Typography sx={{ fontSize: "25px", color: "#e92239" }}>
                  Remain Time:
                </Typography>
                <Typography sx={{ fontSize: "25px", color: "#e92239" }}>
                  {parseInt(remainTime / 3600) +
                    ":" +
                    parseInt(
                      (remainTime - parseInt(remainTime / 3600) * 3600) / 60
                    ) +
                    ":" +
                    parseInt(
                      remainTime -
                        parseInt(remainTime / 3600) * 3600 -
                        parseInt(
                          (remainTime - parseInt(remainTime / 3600) * 3600) / 60
                        ) *
                          60
                    )}
                </Typography>
              </Grid>

              <Grid
                sx={{ p: "5px" }}
                item
                justifyContent={"center"}
                justifySelf={"center"}
                justifyItems={"center"}
                container
                xs="8"
              >
                {questionIndex > 1 && (
                  <Grid item xs="2" justifyContent={"flex-end"}>
                    <Grid item xs="2">
                      <Button
                        sx={{ margin: "20px" }}
                        disabled
                        variant="contained"
                        dir="ltr"
                        color="error"
                      >
                        BACK
                      </Button>
                    </Grid>
                  </Grid>
                )}
                <Grid item xs="2" justifyContent={"flex-start"}>
                  <Grid item xs="2">
                    <Button
                      onClick={handleNextQuestion}
                      sx={{ margin: "20px" }}
                      variant="contained"
                      dir="ltr"
                      color="error"
                    >
                      NEXT
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
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
              <Card dir={appState.dir} sx={{ minWidth: 875, border: "none" }}>
                <Divider />
                <Grid
                  sx={{ padding: "10px" }}
                  item
                  xs="12"
                  container
                  justifyContent={"center"}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "gree",
                      border: "1px solid green",
                      padding: "5px",
                    }}
                  >
                    Question Adaptivity: {currentQuestion.adaptiveIndex}
                  </Typography>
                </Grid>
                <CardContent>
                  <FormLabel id="demo-radio-buttons-group-label">
                    {questionIndex}) {currentQuestion?.questionText}
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="radio-buttons-group"
                    value={answer}
                    onChange={(e) => {
                      setAnswer(e.target.value);
                    }}
                  >
                    {choices.map((choice) => (
                      <FormControlLabel
                        value={choice}
                        control={<Radio />}
                        label={choice}
                      />
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      )}
    </React.Fragment>
  );
}
