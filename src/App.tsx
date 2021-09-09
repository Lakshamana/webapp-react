import { ChakraProvider } from "@chakra-ui/react";

import "./styles/index.css";
import "./App.css";

const App = () => {
  return (
    <ChakraProvider>
      <div className="App" />
    </ChakraProvider>
  );
};

export default App;
