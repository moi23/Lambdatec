import React from "react";
import "./App.css";
import Header from "./components/header";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5/";
import Section9 from "./components/section9/";
import Section10 from "./components/section10/";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section9 />
      <Section10 />
      <Footer />
    </div>
  );
}

export default App;
