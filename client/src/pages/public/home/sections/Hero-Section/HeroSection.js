import React from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  TextField,
} from "@basetoolkit/ui";
import { textFieldClasses } from "@basetoolkit/ui/classes";
import heroImg from "../../../../assests/images/home.jpg";

const HeroSection = () => {
  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={9}>
            <Box className="hero__content">
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  mb: 4,
                }}
              >
                Petra Tourism...
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 5,
                  lineHeight: 1.8,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas
                illum quae porro architecto provident assumenda ullam incidunt
                vitae? Optio, eligendi. Voluptates repellendus minus dolorem
                quae ratione est perferendis atque.
              </Typography>
            </Box>
            <Box className="search" sx={{ display: "flex", gap: 2 }}>
              <TextField
                fullWidth
                placeholder="Search"
                variant="outlined"
                sx={{
                  [`& .${textFieldClasses.wrapper}`]: {
                    borderRadius: 2,
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: "none", px: 4 }}
              >
                Search
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              component="img"
              src={heroImg}
              alt="Hero"
              sx={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
