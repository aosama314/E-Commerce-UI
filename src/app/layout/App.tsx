import { useState } from "react";
import Catalog from "./catalog/Catalog";
import Header from "./Header";
import {
  CssBaseline,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const App = () => {
  const [themeMode, setThemeMode] = useState(false);

  const paletteType = themeMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header appMode={themeMode} handleAppMode={setThemeMode} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
};

export default App;
