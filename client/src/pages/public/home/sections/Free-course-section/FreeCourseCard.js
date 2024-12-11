import React from "react";
import { Box, Typography, Button, SvgIcon } from "@basetoolkit/ui";

const FreeCourseCard = (props) => {
  const { imgUrl, title, students, rating } = props.item;

  return (
    <Box
      className="single__free__course"
      sx={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      {/* Image Section */}
      <Box className="free__course__img" sx={{ position: "relative", mb: 2 }}>
        <img
          src={imgUrl}
          alt={title}
          style={{ width: "100%", display: "block" }}
        />
        <Button
          className="free__btn"
          variant="contained"
          color="primary"
          size="small"
          sx={{
            position: "absolute",
            top: "8px",
            right: "8px",
            backgroundColor: "#e92239",
          }}
        >
          Free
        </Button>
      </Box>

      {/* Details Section */}
      <Box className="free__course__details" sx={{ px: 2, pb: 2 }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>

        <Box
          className="d-flex"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SvgIcon icon="person_outline" fontSize={18} color="#666" />
            <Typography variant="body2">{students}k</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SvgIcon icon="star" fontSize={18} color="#f4b400" />
            <Typography variant="body2">{rating}k</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FreeCourseCard;
