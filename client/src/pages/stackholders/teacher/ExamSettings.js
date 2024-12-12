import React, { useState, useContext, useEffect } from "react";

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
  SvgIcon,
  CircularProgress,
} from "@basetoolkit/ui";
import useFetch from "../../../hooks/useFetch";
import { AppContext } from "../../../contextapi/contexts/AppContext";
import Header from "./header/Header";
import { useParams } from "react-router-dom";
import Copyright from "../../public/Copyright/Copyright";

export default function ExamSettings() {
  const { appState, appDispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { examID } = useParams();
  const [{ data, isLoading, isError }, fetchData] = useFetch(
    `http://localhost:4000/exam/${examID}`
  );

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
        <Grid container justifyContent={"center"}>
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
                    color: "#000",
                    fontWeight: "600",
                    marginBottom: "25px",
                    fontSize: "25px",
                  }}
                >
                  EXAM SETTINGS
                </Typography>
              </Grid>
              <Grid
                item
                xs="12"
                container
                justifyContent={"center"}
                alignItems={"center"}
              >
                <SvgIcon
                  icon="settings"
                  variant="filled"
                  fontSize={55}
                  color="primary"
                />
              </Grid>
              {data?.exam ? (
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
                    id="title"
                    label="Exam Title"
                    name="title"
                    color="secondary"
                    focused
                    value={data?.exam?.title}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="description"
                    label="Exam Description"
                    name="description"
                    color="secondary"
                    focused
                    value={data?.exam?.description}
                    multiline
                    rows={4}
                  />
                  <DatePicker
                    fullWidth
                    label="Start Date"
                    name="startDate"
                    inputColor="secondary"
                    id="startDate"
                    focused
                    value={new Date(data?.exam?.startDate)}
                    onChange={(newValue) => setStartDate(newValue)}
                  />
                  <DatePicker
                    fullWidth
                    label="End Date"
                    name="endDate"
                    inputColor="secondary"
                    id="endDate"
                    focused
                    value={new Date(data?.exam?.endDate)}
                    onChange={(newValue) => setEndDate(newValue)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="attemptsAllowed"
                    color="secondary"
                    label="Attempts Allowed"
                    name="attemptsAllowed"
                    focused
                    value={data?.exam?.attemptsAllowed}
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
                      color="secondary"
                      margin="normal"
                      required
                      sx={{ width: "186px", mr: "10px" }}
                      id="hours"
                      label="Hours"
                      name="hours"
                      focused
                      value={parseInt(data?.exam?.duration / 3600)}
                    />
                    <TextField
                      color="secondary"
                      margin="normal"
                      required
                      sx={{ width: "186px", mr: "10px" }}
                      id="minutes"
                      label="Minutes"
                      name="minutes"
                      focused
                      value={parseInt(
                        (data?.exam?.duration -
                          parseInt(data?.exam?.duration / 3600) * 3600) /
                          60
                      )}
                    />
                    <TextField
                      color="secondary"
                      margin="normal"
                      required
                      sx={{ width: "186px" }}
                      id="seconds"
                      label="Seconds"
                      name="seconds"
                      focused
                      value={
                        data?.exam?.duration -
                        parseInt(
                          (data?.exam?.duration -
                            parseInt(data?.exam?.duration / 3600) * 3600) /
                            60
                        ) *
                          60 -
                        parseInt(data?.exam?.duration / 3600) * 3600
                      }
                    />
                  </Box>
                  <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 3, mb: 2, color: "#e92239", borderColor: "#000" }}
                    disabled={isLoading}
                  >
                    SAVE
                  </Button>
                </Box>
              ) : (
                <CircularProgress />
              )}
            </Box>
          </Grid>
        </Grid>
        <Copyright mt={8} mb={4} />
      </Container>
    </React.Fragment>
  );
}
