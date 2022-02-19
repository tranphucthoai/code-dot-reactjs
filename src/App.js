import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Clients from "./features/Clients";
import Contact from "./features/Contact";
import Footer from "./features/Footer";
import Hero from "./features/Hero";
import Navbar from "./features/Navbar";
import News from "./features/News";
import Pricing from "./features/Pricing/index";
import Services from "./features/Services/index";
import ServicesSale from "./features/ServicesSale";
import Strategy from "./features/Strategy";
import Provider from "./store/Provider";
function App() {
  const [scroll, setScroll] = useState(false);
  const [loader, setLoader] = useState(true);
  const [loaderTotal, setLoaderTotal] = useState({});
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 80);
    });
  }, []);

  if (loader) {
    return <Loader />;
  }
  return (
    <Provider values={loaderTotal}>
      <header className={clsx(scroll && "fixed-nav")}>
        <Navbar />
      </header>
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
    </Provider>
  );
}

export default App;
