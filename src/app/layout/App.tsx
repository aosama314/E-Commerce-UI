import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  CssBaseline,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import Header from "./Header";
import Catalog from "./catalog/Catalog";
import HomePage from "./home/HomePage";
import ProductDetails from "./catalog/ProductDetails";
import AboutPage from "./about/AboutPage";
import ContactPage from "./contact/ContactPage";

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<ProductDetails />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
