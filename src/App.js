import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact/";
import { Helmet } from "react-helmet";
// import FaviconSvg from "./assets/favicon.svg";
import FaviconJPG from "./assets/favicon.jpg";


const theme = createMuiTheme({
  spacing: 5,
  breakpoints: {
    values: {
      md: 1100,
    }
  }
});

export default function App() {
  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/jpg+xml" href={FaviconJPG} />
        <link rel="icon" type="image/jpg" href={FaviconJPG} />
        <title>Brett Sevy</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </ThemeProvider>
    </div>
  )
}
