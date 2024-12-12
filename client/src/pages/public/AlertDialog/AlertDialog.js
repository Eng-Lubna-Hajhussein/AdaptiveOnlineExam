import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  Button,
  Box,
  SvgIcon,
} from "@basetoolkit/ui";

const AlertDialog = ({ open, onClose, title, message, alertType }) => {
  const getIcon = () => {
    switch (alertType) {
      case "error":
        return <SvgIcon icon="error_outline" color="#e92239" fontSize={100} />;
      case "success":
        return (
          <SvgIcon icon="check_circle_outline" color="#4caf50" fontSize={100} />
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Box minWidth={400}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: 4,
        }}
      >
        {getIcon()}
        <DialogTitle
          sx={{
            marginTop: 2,
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          {title}
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ fontSize: "1rem", marginTop: 1 }}>
            {message}
          </Typography>
        </DialogContent>
      </Box>
      <DialogActions
        sx={{
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={onClose}
          sx={{ width: "100px" }}
        >
          OK
        </Button>
      </DialogActions>

      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
        }}
      >
        <SvgIcon icon="close" />
      </IconButton>
    </Dialog>
  );
};

AlertDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  alertType: PropTypes.oneOf(["error", "success"]).isRequired,
};

export default AlertDialog;
