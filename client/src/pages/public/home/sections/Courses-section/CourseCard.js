import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  SvgIcon,
} from "@basetoolkit/ui";

const CourseCard = (props) => {
  const { imgUrl, title, lesson, students, rating } = props.item;

  return (
    <Card
    
      sx={{
        borderRadius: 2,
        boxShadow: 2,
        overflow: "hidden",
        width:"100%",
        "&:hover": { boxShadow: 4 },
      }}
    >
      <CardMedia
        component="img"
        image={imgUrl}
        alt={title}
        sx={{ height: 180 }}
      />
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          {title}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="body2"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <SvgIcon icon="book_online" size="small" /> {lesson} Lessons
          </Typography>
          <Typography
            variant="body2"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <SvgIcon icon="people_outline" size="small" /> {students}K
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
          <Typography
            variant="body2"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <SvgIcon icon="star_rate" size="small" color="#FFC107" /> {rating}K
          </Typography>
          <Typography variant="body2" color="primary">
            <Button variant="text" size="small" href="#">
              Enroll Now
            </Button>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
