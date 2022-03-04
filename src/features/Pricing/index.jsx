import React, { useEffect, useState } from "react";
import { PricingCard } from "../../components";
import { pricingApi } from "../../api";
import { useStore, action } from "../../store";

function Pricing() {
  const [data, setData] = useState({});
  const [state, dispatch] = useStore();
  const { setLoading } = action;

  useEffect(() => {
    (async () => {
      try {
        const respone = await pricingApi.getAll();
        setData(...respone);
      } catch (error) {
        console.log("Failed to fetch api", error);
      }
      dispatch(setLoading({ pricing: false }));
    })();
  }, []);
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="pricing-heading text-center">
          <h2 className="section-title title-md"> {data.title}</h2>
          <p className="section-title-text">{data.excerpt}</p>
        </div>
        <div className="pricing-inner">
          <ul className="card-list">
            {data?.cards?.map((item) => (
              <li key={item.id} className="card-item">
                <PricingCard data={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
