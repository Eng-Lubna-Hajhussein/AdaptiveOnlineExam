import { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@basetoolkit/ui";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function AddExamQuestionCard({ question, examID, dir }) {
  const [{ data, isLoading, isError }, fetchData] = useFetch();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const headers = {
      method: "POST",
      body: JSON.stringify({
        questionID: question.questionID,
        examID: examID,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    setLoading(true);
    const response = await fetchData(
      "http://localhost:4000/examQuestion",
      headers
    );
    setLoading(false);

    navigate(`/teacher/examQuestions/${examID}`);
  };

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
        <Button
          size="large"
          disabled={loading}
          fullWidth
          onClick={handleSubmit}
          variant="outlined"
          color="error"
        >
          اضافة
        </Button>
      </CardActions>
    </Card>
  );
}
