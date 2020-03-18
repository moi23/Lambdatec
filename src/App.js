import React from "react";
import "./App.css";
import Header from "./components/header";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Footer from "./components/footer";
import MBloco3items from "./components/MBloco3items";

function App() {
  return (
    <div className="App">
      <Header />
      <Section2 />
      <Section3 />
      <MBloco3items
        number="2"
        title="LEVANTAMENTO DE REQUISITOS"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam culpa eum nesciunt maiores omnis pariatur! Corporis est deserunt perferendis porro."
      />
      <Footer />
    </div>
  );
}

export default App;
