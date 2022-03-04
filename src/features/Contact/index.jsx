import React, { useEffect, useState } from "react";
import { contactApi } from "../../api";
import { useStore, action } from "../../store";

function Contact() {
  const [data, setData] = useState({});
  const [state, dispatch] = useStore();
  const { setLoading } = action;

  useEffect(() => {
    (async () => {
      try {
        const respone = await contactApi.getAll();
        setData(...respone);
      } catch (error) {
        console.log("Failed to fetch api", error);
      }
      dispatch(setLoading({ contact: false }));
    })();
  }, []);
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-info">
            <p className="section-subtitle">{data.subtitle}</p>
            <h2 className="section-title title-md">{data.title}</h2>
            <p className="section-title-text">{data.excerpt}</p>
            <a href="#pricing" className="btn bg-secondary w-fit" type="submit">
              {data["btn-text"]}
            </a>
          </div>
          <div className="services-sale-thumb">
            <img src={data.thumb} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
