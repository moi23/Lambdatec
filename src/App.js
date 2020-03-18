import React from "react";
import "./App.css";
import Header from "./components/header";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import H2 from "./components/H2";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Section2 />
      <Section3 />
      <Section4 />
      <H2 />
      <Footer />
    </div> 
  );
}

export default App;
