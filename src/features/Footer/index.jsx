import React, { useEffect, useState } from 'react';
import { FooterItem } from '../../components';
import footerApi from './../../api/footerApi';

function Footer() {

    const [data, setData] = useState({})

    useEffect(() => {
        (async () => {
            try {
                const respone = await footerApi.getAll()
                setData(...respone);
                // console.log('data', ...respone);
            } catch (error) {
                console.log('Failed to fetch api', error);
            }
        })()
    }, [])
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
                                <p className="footer__text">
                                    {data["sub-footer"]}
                                </p>
                            </li>
                            {data["footer-list"]?.map(item => (
                                <FooterItem data={item} />
                            ))}
                        </ul>
                    </div>
                    <div className="footer-sub">
                        <p>© 2020 <a href="https://www.codefest.co.uk" target="_blank" title="Codefest">Codefest</a>™. All
                            Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;