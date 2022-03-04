import React, { useEffect, useState } from "react";
import { servicesSaleApi } from "../../api";
import { useStore, action } from "../../store";

function ServicesSale() {
  const [data, setData] = useState({});
  const [state, dispatch] = useStore();
  const { setLoading } = action;

  useEffect(() => {
    (async () => {
      try {
        const respone = await servicesSaleApi.getAll();
        setData(...respone);
      } catch (error) {
        console.log("Failed to fetch api", error);
      }
      dispatch(setLoading({ servicesSale: false }));
    })();
  }, []);
  return (
    <section className="section services-sale">
      <div className="container">
        <div className="services-sale-inner">
          <div className="services-sale-thumb">
            <img src={data?.thumb} alt="" />
          </div>
          <div className="services-sale-info">
            <p className="section-subtitle">{data.subtitle}</p>
            <h2 className="section-title title-md">{data.title}</h2>
            <p className="section-title-text">{data.excerpt}</p>
            <a
              href={data["btn-direction"]}
              className="btn bg-secondary w-fit"
              type="submit"
            >
              {data["btn-text"]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSale;
