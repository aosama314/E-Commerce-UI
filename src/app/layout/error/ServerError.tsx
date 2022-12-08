import { useEffect, useState } from "react";

import { Button, Divider, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";

import agent from "../../api/agent";
import { NavLink } from "react-router-dom";

const ServerError = () => {
  const [serverError, setServerError] = useState<any>();

  useEffect(() => {
    agent.TestError.get500Error().catch((error) => {
      setServerError(error.data);
    });
  }, []);
  console.log(serverError);

  return (
    <Container component={Paper}>
      {serverError ? (
        <>
          <Typography variant="h3" color="error" gutterBottom>
            {serverError.title}
          </Typography>
          <Divider />
          <Typography>
            {serverError.detail || "Internal Server Error!"}
          </Typography>
        </>
      ) : (
        <Typography variant="h5" gutterBottom>
          Server Error
        </Typography>
      )}
      <Button component={NavLink} to="/catalog">
        Go back to store
      </Button>
    </Container>
  );
};

export default ServerError;
