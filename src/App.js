import "./App.css";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { ColorProvider } from "./ColorContext";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Router from "./Router";

function App() {
  return (
    <ColorProvider>
      <BrowserRouter basename="/own.io/">
        <GlobalStyle />
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </ColorProvider>
  );
}

export default App;
