import React, { useContext, useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@basetoolkit/ui";
import useFetch from "../../../../hooks/useFetch";
import { AppContext } from "../../../../contextapi/contexts/AppContext";
import Header from "../header/Header";
import teacherImg from "../../../../assets/add-question.svg";
import Copyright from "../../../public/Copyright/Copyright";
import AlertDialog from "../../../public/AlertDialog/AlertDialog";

export default function AddExam() {
  const { appState } = useContext(AppContext);
  const [{ isLoading }, fetchData] = useFetch();
  const [dialogConfig, setDialogConfig] = useState({
    open: false,
    title: "",
    message: "",
    alertType: "success",
    footer: null,
  });

  const handleDialogClose = () => {
    setDialogConfig((prev) => ({ ...prev, open: false }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const headers = {
      method: "POST",
      body: JSON.stringify({
        grade: fields.get("grade"),
        skill: fields.get("skill"),
        kpiNumber: fields.get("kpiNumber"),
        level: fields.get("level"),
        questionText: fields.get("text"),
        incorrectChoice1: fields.get("choice1"),
        incorrectChoice2: fields.get("choice2"),
        incorrectChoice3: fields.get("choice3"),
        correctChoice: fields.get("correctChoice"),
        teacherID: appState.userInfo?.teacherID,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetchData("http://localhost:4000/question", headers);
    if (!response.question) {
      setDialogConfig({
        open: true,
        title: "Oops...",
        message: "KPI is wrong",
        alertType: "error",
        footer: { text: "Why do I have this issue?", link: "#" },
      });
    } else {
      setDialogConfig({
        open: true,
        title: "Question Added...",
        message: "The question has been added successfully.",
        alertType: "success",
        footer: { text: "Why do I have this issue?", link: "#" },
      });
    }
  };

  return (
    <React.Fragment>
      <Header />
      <Container>
        <CssBaseline />
        <Grid container>
          <Grid item xs="6">
            <img src={teacherImg} />
          </Grid>
          <Grid item xs="6">
            <Box
              sx={{
                marginTop: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
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
                    fontWeight: "600",
                    marginBottom: "25px",
                    fontSize: "25px",
                  }}
                >
                  ADD NEW QUESTION TO TESTBANK!
                </Typography>
              </Grid>
              <Box
                component="form"
                width={"100%"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1em",
                }}
                onSubmit={handleSubmit}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="grade"
                  label="Question Grade"
                  name="grade"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="skill"
                  label="Question Skill"
                  name="skill"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="kpiNumber"
                  label="Question KPI Number"
                  name="kpiNumber"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="level"
                  label="Question Level"
                  name="level"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="text"
                  label="Question Text"
                  name="text"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="choice1"
                  label="Question First Choice"
                  name="choice1"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="choice2"
                  label="Question Second Choice"
                  name="choice2"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="choice3"
                  label="Question Third Choice"
                  name="choice3"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="correctChoice"
                  label="Question Correct Choice"
                  name="correctChoice"
                  autoFocus
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 3, mb: 2, color: "#e92239", borderColor: "#000" }}
                  disabled={isLoading}
                >
                  ADD QUESTION
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Copyright mt={8} mb={4} />
      </Container>
      <AlertDialog {...dialogConfig} onClose={handleDialogClose} />
    </React.Fragment>
  );
}
