import { Typography, useTheme } from "@basetoolkit/ui";
import { Link } from "react-router-dom";

function Copyright(props) {
  const theme = useTheme();
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        style={{ color: theme.palette.secondary.light }}
        href="https://mui.com/"
      >
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default Copyright;
