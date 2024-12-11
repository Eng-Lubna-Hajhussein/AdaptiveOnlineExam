import React from "react";
import { Container, Grid, Typography, Box, SvgIcon } from "@basetoolkit/ui";

const companies = [
  {
    icon: (
      <SvgIcon
        variant="filled"
        icon="youtube_searched_for"
        fontSize={40}
        color="#FF0000"
      />
    ),
    name: "Vimeo",
  },
  {
    icon: (
      <SvgIcon
        variant="filled"
        icon="picture_in_picture"
        fontSize={40}
        color="#E60023"
      />
    ),
    name: "Pinterest",
  },
  {
    icon: (
      <SvgIcon
        variant="filled"
        icon="sports_basketball"
        fontSize={40}
        color="#F57C00"
      />
    ),
    name: "Dribble",
  },
  {
    icon: (
      <SvgIcon
        variant="filled"
        icon="app_settings_alt"
        fontSize={40}
        color="#000"
      />
    ),
    name: "Apple",
  },
  {
    icon: (
      <SvgIcon
        variant="filled"
        icon="folder_open"
        fontSize={40}
        color="#4CAF50"
      />
    ),
    name: "Finder",
  },
  {
    icon: (
      <SvgIcon
        variant="filled"
        icon="group_off"
        fontSize={40}
        color="#4285F4"
      />
    ),
    name: "Google",
  },
];

const Company = () => {
  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container>
        <Grid container spacing={3}>
          {companies.map((company, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              <Box display="flex" alignItems="center" gap={1}>
                {company.icon}
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {company.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Company;
