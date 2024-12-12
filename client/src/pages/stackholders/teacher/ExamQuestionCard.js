import * as React from "react";
import {
  Grid,
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@basetoolkit/ui";

export default function ExamQuestionCard({ question, dir }) {
  return (
    <Card dir={dir} sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container justifyContent={"center"}>
          <Grid item xs="12">
            <Typography
              sx={{ fontSize: 25 }}
              color="text.secondary"
              gutterBottom
            >
              {question.questionText}
            </Typography>
          </Grid>
          <Grid item xs="6">
            <Typography sx={{ fontSize: 20 }} color="red" gutterBottom>
              a){question.incorrectChoice1}
            </Typography>
          </Grid>
          <Grid item xs="6">
            <Typography sx={{ fontSize: 20 }} color="red" gutterBottom>
              b){question.incorrectChoice2}
            </Typography>
          </Grid>
          <Grid item xs="6">
            <Typography sx={{ fontSize: 20 }} color="red" gutterBottom>
              c){question.incorrectChoice3}
            </Typography>
          </Grid>
          <Grid item xs="6">
            <Typography sx={{ fontSize: 20 }} color="green" gutterBottom>
              d){question.correctChoice}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="large" fullWidth variant="outlined" color="error">
          حذف
        </Button>
      </CardActions>
    </Card>
  );
}
