import * as React from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@basetoolkit/ui";
import examIcon from "../../../assets/exam-icon.jpg";
import { Link } from "react-router-dom";

export default function ExamCard({ exam }) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia sx={{ height: 250 }} image={examIcon} />
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
          <Grid
            item
            container
            justifyContent={"center"}
            alignItems={"center"}
            xs="12"
          >
            <Link to={`/student/exam/${exam.examID}`}>
              <Button
                size="large"
                color="error"
                fullWidth
                variant="outlined"
                sx={{ fontWeight: "700" }}
              >
                Attempt
              </Button>
            </Link>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
