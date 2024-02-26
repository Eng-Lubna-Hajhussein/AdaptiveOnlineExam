import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import examIcon from "../../../assets/exam-icon.jpg";
import { Grid } from "@mui/material";
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
          <Grid item container justifyContent={"center"} alignItems={"center"} xs="12">
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
