import React, { useEffect, useState } from "react";
import { NewsCard } from "../../components";
import { newsApi } from "../../api";
import { useStore, action } from "../../store";

function News() {
  const [data, setData] = useState({});
  const [state, dispatch] = useStore();
  const { setLoading } = action;

  useEffect(() => {
    (async () => {
      try {
        const respone = await newsApi.getAll();
        setData(...respone);
      } catch (error) {
        console.log("Failed to fetch api", error);
      }
      dispatch(setLoading({ news: false }));
    })();
  }, []);
  return (
    <section className="section news" id="news">
      <div className="container">
        <div className="news-heading text-center">
          <p className="section-subtitle">{data.subtitle}</p>
          <h2 className="section-title title-md">{data.title}</h2>
        </div>
        <div className="news-inner">
          <ul className="card-list">
            {data.posts?.map((item) => (
              <li key={item.id} className="card-item">
                <NewsCard data={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default News;
