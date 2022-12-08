import React from "react";
import { Container } from "@mui/system";
import { Button, Divider, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Container component={Paper} sx={{ height: 200 }}>
      <Typography variant="h3">
        Oops - we could not find what you are looking for!
      </Typography>
      <Divider />
      <Button fullWidth component={NavLink} to="/catalog">
        Go back to shop
      </Button>
    </Container>
  );
};

export default NotFound;
