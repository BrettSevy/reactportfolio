import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Portfolio from './components/portfoio/portfolio';
import Home from "./components/home/home";
import AboutMe from "./components/aboutme/aboutme";
import Contact from "./components/contact/contact";
// import { render } from '@testing-library/react';
// import Bannanas from "./components/tabs";
// import Foot from "./components/footer";

function App() {
  return (
    <div className="App">
      {/* <Bannanas></Bannanas> */}
      <Home></Home>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Contact></Contact>
      {/* <Foot></Foot> */}
    </div>
  )
};

export default App;
