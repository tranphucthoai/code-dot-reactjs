import React, { useEffect, useState } from "react";
import { servicesApi } from "./../../api";
import { Accordion } from "../../components";
import { useStore, action } from "../../store";

function Services() {
  const [data, setData] = useState({});
  const [accordion, setAccordion] = useState([]);
  const [state, dispatch] = useStore();
  const { setLoading } = action;

  useEffect(() => {
    (async () => {
      try {
        const respone = await servicesApi.getAll();
        setData(...respone);
        setAccordion(respone[0].accordion);
      } catch (error) {
        console.log("Failed to fetch api", error);
      }
      dispatch(setLoading({ services: false }));
    })();
  }, []);

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="services-inner">
          <div className="services-info">
            <p className="section-subtitle">{data.subtitle}</p>
            <h2 className="section-title title-md">{data.title}</h2>
            <p className="section-title-text">{data.excerpt}</p>
            <ul className="services-accordion-list">
              {accordion?.map((item) => (
                <li key={item.id} className="services-accordion-item">
                  <Accordion data={item} />
                </li>
              ))}
            </ul>
          </div>
          <div className="services-thumb">
            <img src={data.thumb} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
