import React, { useEffect, useState } from "react";
import { StrategyCard } from "../../components";
import { strategyApi } from "../../api";
import { useStore, action } from "../../store";

function Strategy() {
  const [data, setData] = useState([]);
  const [state, dispatch] = useStore();
  const { setLoading } = action;

  useEffect(() => {
    (async () => {
      try {
        const respone = await strategyApi.getAll();
        setData(respone);
      } catch (error) {
        console.log("Failed to fetch api", error);
      }
      dispatch(setLoading({ strategy: false }));
    })();
  }, []);
  return (
    <section className="section strategy">
      <div className="container">
        <div className="strategy-inner">
          <ul className="strategy-list">
            {data.map((item) => (
              <li key={item.id} className="strategy-item">
                <StrategyCard data={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Strategy;
