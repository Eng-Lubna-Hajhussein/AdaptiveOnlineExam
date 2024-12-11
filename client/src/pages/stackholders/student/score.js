import React, { useContext } from "react";
import { Grid, Typography, Divider, Card } from "@basetoolkit/ui";
import { AppContext } from "../../../contextapi/contexts/AppContext";
import Header from "./header/Header";
import { useParams } from "react-router-dom";

export default function Score() {
  const { appState } = useContext(AppContext);
  const { score, qNum } = useParams();

  return (
    <React.Fragment>
      <Header />
      <div
        style={{
          margin: "auto",
          width: "90%",
          padding: "10px",
          paddingTop: "50px",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            xs="12"
            container
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              style={{
                fontWeight: "700",
                marginBottom: "25px",
                fontSize: "35px",
              }}
            >
              Student #{appState.userInfo.studentID}
            </Typography>
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
            <Card dir={appState.dir} sx={{ minWidth: 875 }}>
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
                  SCORE: {score} out of {qNum}
                </Typography>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
