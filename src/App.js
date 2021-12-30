import React from "react";
import Hero from "./features/Hero";
import Strategy from "./features/Strategy";
import Services from "./features/Services/index";
import ServicesSale from "./features/ServicesSale";
import Pricing from "./features/Pricing/index";
import News from "./features/News";
import Contact from "./features/Contact";
import Footer from "./features/Footer";
import Clients from "./features/Clients";

function App() {
  return (
    <>
      <header></header>
      <main>
        <Hero />
        <Strategy />
        <Services />
        <ServicesSale />
        <Pricing />
        <Clients />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
