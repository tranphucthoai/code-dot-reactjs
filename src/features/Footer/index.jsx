import React, { useEffect, useState } from "react";
import { FooterItem } from "../../components";
import { footerApi } from "../../api";
import { useStore, action } from "../../store";

function Footer() {
  const [data, setData] = useState({});
  const [state, dispatch] = useStore();
  const { setLoading } = action;

  useEffect(() => {
    (async () => {
      try {
        const respone = await footerApi.getAll();
        setData(...respone);
      } catch (error) {
        console.log("Failed to fetch api", error);
      }
      dispatch(setLoading({ footer: false }));
    })();
  }, []);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-main">
            <ul className="footer-list">
              <li className="footer-item">
                <div className="footer__logo">
                  <img src={data.logo} alt="" />
                </div>
                <p className="footer__text">{data["sub-footer"]}</p>
              </li>
              {data["footer-list"]?.map((item) => (
                <FooterItem key={item.id} data={item} />
              ))}
            </ul>
          </div>
          <div className="footer-sub">
            <p>
              © 2020{" "}
              <a
                href="https://www.codefest.co.uk"
                target="_blank"
                rel="noreferrer"
                title="Codefest"
              >
                Codefest
              </a>
              ™. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
