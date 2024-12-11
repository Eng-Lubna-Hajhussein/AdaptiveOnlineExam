import React from "react";
import { Box, Container, Grid, Typography, Button } from "@basetoolkit/ui";
import courseImg1 from "../../../../../assets/bg1.jpg";
import courseImg2 from "../../../../../assets/bg1.jpg";
import courseImg3 from "../../../../../assets/bg1.jpg";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Grammers",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },
  {
    id: "02",
    title: "Math",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },
  {
    id: "03",
    title: "Physics",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
  {
    id: "04",
    title: "Chemistry",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container>
        <Grid container spacing={4} sx={{ mb: 5 }} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Our Popular Courses
            </Typography>
            <Typography variant="body1" mt={2} sx={{color: "text.secondary" }}>
              Explore some of our most popular and highly recommended courses to
              enhance your knowledge and skills before diving into your
              personalized adaptive online exam experience!
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            container
            justifyContent="end"
            md={4}
            textAlign="center"
          >
            <Button variant="contained" size="large">
              See All
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={4} justifyContent="center">
          {coursesData.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <CourseCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Courses;
