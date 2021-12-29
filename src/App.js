import React from "react";
import Hero from "./features/Hero";
import Strategy from "./features/Strategy";
import Services from "./features/Services/index";
import ServicesSale from "./features/ServicesSale";

function App() {
  return (
    <>
      <header></header>
      <main>
        <Hero />
        <Strategy />
        <Services />
        <ServicesSale />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
