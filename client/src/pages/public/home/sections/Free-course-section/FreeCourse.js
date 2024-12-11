import React from "react";
import { Container, Grid, Typography, Box } from "@basetoolkit/ui";
import FreeCourseCard from "./FreeCourseCard";
import courseImg01 from "../../../../assests/images/seo.png";
import courseImg02 from "../../../../assests/images/kids-learning.png";
import courseImg03 from "../../../../assests/images/seo.png";
import courseImg04 from "../../../../assests/images/ui-ux.png";

const freeCourseData = [
  {
    id: "01",
    title: "Intro to Humanitarian Aid",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Intermediate Humanitarian Aid",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "03",
    title: "Advanced Humanitarian Aid",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "04",
    title: "Extra Humanitarian Aid",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
  },
];

const FreeCourse = () => {
  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          Our Free Courses
        </Typography>
        <Grid container spacing={3}>
          {freeCourseData.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <FreeCourseCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FreeCourse;
