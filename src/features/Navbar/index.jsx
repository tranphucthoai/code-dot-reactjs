import React, { useEffect, useState } from "react";
import { navbarApi } from "../../api";
import clsx from "clsx";
import { useStore, action } from "../../store";

function Navbar() {
  const [data, setData] = useState({});
  const [showMenu, setShowNenu] = useState(false);
  const [state, dispatch] = useStore();
  const { setLoading } = action;

  useEffect(() => {
    (async () => {
      try {
        const respone = await navbarApi.getAll();
        setData(...respone);
      } catch (error) {
        console.log("Failed to fetch api", error);
      }
      dispatch(setLoading({ navbar: false }));
    })();
  }, []);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-inner">
          <a className="navbar-brand" href={data.logo}>
            <img src={data.logo} alt="" />
          </a>
          <div className={clsx(showMenu && "active", "navbar-collapse")}>
            <ul className="navbar-nav nav">
              {data.nav?.map((item, index) => (
                <li key={item.id} className="nav-item">
                  <a
                    onClick={() => setShowNenu(false)}
                    className="nav-link active"
                    aria-current="page"
                    href={"#" + item.title}
                  >
                    <span>0{index + 1}</span>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <form>
              <a
                href={data["btn-direction"]}
                className="btn bg-primary"
                type="submit"
              >
                {data["btn-text"]}
              </a>
            </form>
          </div>
          <div
            className="navbar-toogle"
            onClick={() => {
              setShowNenu(!showMenu);
            }}
          >
            <img src={data["icon-toogle"]} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
