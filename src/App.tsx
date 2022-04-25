import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/home";
import theme from "./theme";
import "./theme/styles.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
