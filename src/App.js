import clsx from "clsx";
import React, { useEffect, useState } from "react";
import {
  Clients,
  Contact,
  Footer,
  Hero,
  Navbar,
  News,
  Pricing,
  Services,
  ServicesSale,
  Strategy,
} from "./features";

import { Loader } from "./components";
import { useStore } from "./store";

function App() {
  const [scroll, setScroll] = useState(false);
  const [loader, setLoader] = useState(true);
  const [state, dispatch] = useStore();
  const { loaderTotal } = state;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 80);
    });
  }, []);
  useEffect(() => {
    for (const loaderItem in loaderTotal) {
      if (loaderTotal[loaderItem] === true) {
        break;
      } else {
        const valuesLoaderTotal = Object.values(loaderTotal);
        const checkLoader = valuesLoaderTotal.some((value) => value === false);
        if (checkLoader) {
          setLoader(false);
        } else {
          continue;
        }
      }
    }
  }, [loaderTotal]);
  return (
    <>
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
      {loader && <Loader />}
    </>
  );
}

export default App;
