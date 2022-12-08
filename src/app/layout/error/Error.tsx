import { useState } from "react";
import {
  Alert,
  AlertTitle,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import agent from "./../../api/agent";
import { NavLink } from "react-router-dom";

const Error = () => {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const getValidationErrors = () => {
    agent.TestError.getValidationError()
      .then(() => console.log("should not see this!"))
      .catch((error) => setValidationErrors(error));
  };

  return (
    <Container>
      <Typography gutterBottom variant="h2">
        Errors for testing purposes
      </Typography>
      <ButtonGroup fullWidth>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestError.get400Error().catch((error) => console.log(error))
          }
        >
          Test 400 Error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestError.get401Error().catch((error) => console.log(error))
          }
        >
          Test 401 Error
        </Button>
        <Button
          variant="contained"
          component={NavLink}
          to="/not-found"
          onClick={() =>
            agent.TestError.get404Error().catch((error) => console.log(error))
          }
        >
          Test 404 Error
        </Button>
        <Button component={NavLink} to="/server-error" variant="contained">
          Test 500 Error
        </Button>
        <Button variant="contained" onClick={getValidationErrors}>
          Test Validation Error
        </Button>
      </ButtonGroup>
      {validationErrors.length > 0 && (
        <Alert severity="error">
          <AlertTitle>Validation Errors</AlertTitle>
          <List>
            {validationErrors.map((error) => (
              <ListItem key={error}>
                <ListItemText>{error}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Alert>
      )}
    </Container>
  );
};

export default Error;
