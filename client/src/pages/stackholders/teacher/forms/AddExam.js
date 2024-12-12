import React, { useState, useContext } from "react";

import {
  Button,
  CssBaseline,
  Divider,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  DatePicker,
} from "@basetoolkit/ui";
import useFetch from "../../../../hooks/useFetch";
import { AppContext } from "../../../../contextapi/contexts/AppContext";
import Header from "../header/Header";
import teacherImg from "../../../../assets/add-exam.svg";
import Copyright from "../../../public/Copyright/Copyright";

export default function AddExam() {
  const { appState, appDispatch } = useContext(AppContext);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [{ data, isLoading, isError }, fetchData] = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);

    const headers = {
      method: "POST",
      body: JSON.stringify({
        teacherID: appState.userInfo.teacherID,
        startDate: startDate,
        endDate: endDate,
        duration:
          fields.get("hours") * 3600 +
          fields.get("minutes") * 60 +
          fields.get("seconds"),
        attemptsAllowed: fields.get("attemptsAllowed"),
        title: fields.get("title"),
        description: fields.get("description"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetchData("http://localhost:4000/exam", headers);
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
                  ADD NEW EXAM!
                </Typography>
              </Grid>
              <Box
                component="form"
                onSubmit={handleSubmit}
                width={"100%"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1em",
                }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Exam Title"
                  name="title"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="description"
                  label="Exam Description"
                  name="description"
                  autoFocus
                  multiline
                  rows={4}
                />

                <DatePicker
                  fullWidth
                  label="Start Date"
                  name="startDate"
                  id="startDate"
                  value={startDate}
                  onChange={(newDateValue) => setStartDate(newDateValue)}
                />
                <DatePicker
                  fullWidth
                  label="End Date"
                  name="endDate"
                  id="endDate"
                  value={endDate}
                  onChange={(newDateValue) => setEndDate(newDateValue)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="attemptsAllowed"
                  label="Attempts Allowed"
                  name="attemptsAllowed"
                  autoFocus
                />
                <Divider sx={{ color: "gray" }}>Duration</Divider>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1em",
                  }}
                >
                  <TextField
                    margin="normal"
                    required
                    id="hours"
                    label="Hours"
                    name="hours"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    id="minutes"
                    label="Minutes"
                    name="minutes"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    id="seconds"
                    label="Seconds"
                    name="seconds"
                    autoFocus
                  />
                </Box>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 3, mb: 2, color: "#e92239", borderColor: "#000" }}
                  disabled={isLoading}
                >
                  ADD EXAM
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Copyright mt={8} mb={4} />
      </Container>
    </React.Fragment>
  );
}
