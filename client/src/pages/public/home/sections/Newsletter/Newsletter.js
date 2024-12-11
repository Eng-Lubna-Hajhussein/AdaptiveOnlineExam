import React, { useContext } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@basetoolkit/ui";
import { AppContext } from "../../../../../contextapi/contexts/AppContext";
import { textFieldClasses } from "@basetoolkit/ui/classes";

const Newsletter = () => {
  const { appState } = useContext(AppContext);

  const dictionary = {
    title: {
      en: "Subscribe To Our Last News!",
      ar: "اشترك في اخر الاخبار!",
    },
    placeholder: {
      en: "Email...",
      ar: "البريد الالكتروني...",
    },
    btn: {
      en: "Subscribe",
      ar: "اشترك",
    },
  };

  return (
    <Box
      component="section"
      dir={appState.dir}
      mx={8}
      borderRadius={4}
      py={6}
      sx={{
        textAlign: "center",
        bgcolor: "primary",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          color="white"
          sx={{
            fontWeight: "bold",
            mb: 4,
            textAlign: "center",
          }}
        >
          {dictionary.title[appState.lang]}
        </Typography>

        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            sm={10}
            md={8}
            lg={6}
            sx={{ display: "flex", gap: 2, alignItems: "center" }}
          >
            <TextField
              fullWidth
              placeholder={dictionary.placeholder[appState.lang]}
              variant="outlined"
              sx={{
                [`& .${textFieldClasses.wrapper}`]: {
                  borderRadius: "4px",
                  border: "none",
                  bgcolor: "white !important",
                },
              }}
              InputProps={{
                endAdornment: (
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ textTransform: "none", px: 4 }}
                  >
                    {dictionary.btn[appState.lang]}
                  </Button>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Newsletter;
