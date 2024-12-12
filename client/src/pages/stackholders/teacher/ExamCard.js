import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@basetoolkit/ui";
import examIcon from "../../../assets/exam-icon.jpg";
import { Link } from "react-router-dom";

export default function ExamCard({ exam }) {
  return (
    <Card sx={{ maxWidth: 295 }}>
      <CardMedia sx={{ height: 250 }} image={examIcon} title="examIcon" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ textTransform: "capitalize" }}
          component="div"
        >
          #{exam.examID} {exam.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {exam.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container>
          <Grid item alignItems={"flex-start"} xs="6">
            <Link to={`/teacher/examSettings/${exam.examID}`}>
              <Button
                size="large"
                color="error"
                variant="outlined"
                sx={{ fontWeight: "700" }}
              >
                Settings
              </Button>
            </Link>
          </Grid>
          <Grid item alignItems={"flex-end"} xs="6">
            <Link to={`/teacher/examQuestions/${exam.examID}`}>
              <Button
                size="large"
                color="error"
                variant="outlined"
                sx={{ fontWeight: "700" }}
              >
                Questions
              </Button>
            </Link>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
