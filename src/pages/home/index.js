 import React, { Fragment } from "react";
import Header from "../../components/header";
import Section2 from "../../components/section2";
import Section3 from "../../components/section3";
import Section4 from "../../components/section4";
import Section5 from "../../components/section5";
import Section6 from "../../components/section6";
import Section7 from "../../components/section7";
import Section8 from "../../components/section8";
import Section9 from "../../components/section9";
import Footer from "../../components/footer";


export default function Home() {
  return (
    <>
      <Header />
      <Section2 className="NaoMostraMobile"/>
      <Section3 className="NaoMostraMobile" />
      <Section4 className="NaoMostraMobile" />
      <Section5 className="NaoMostraMobile" />
      <Section7 className="NaoMostraMobile" />
      <Section6 className="NaoMostraMobile" />
      <Section8 className="NaoMostraMobile" />
      <Section9 className="NaoMostraMobile" />
      <Footer className="NaoMostraMobile" />
    </>
  );
}

