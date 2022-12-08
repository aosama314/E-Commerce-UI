import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  CssBaseline,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./Header";
import Catalog from "./catalog/Catalog";
import HomePage from "./home/HomePage";
import ProductDetails from "./catalog/ProductDetails";
import AboutPage from "./about/AboutPage";
import ContactPage from "./contact/ContactPage";
import Error from "./error/Error";
import ServerError from "./error/ServerError";
import NotFound from "./error/NotFound";

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
      <ToastContainer position="bottom-right" hideProgressBar />
      <CssBaseline />
      <Header appMode={themeMode} handleAppMode={setThemeMode} />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<ProductDetails />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/error-test" element={<Error />} />
          <Route path="/server-error" element={<ServerError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
