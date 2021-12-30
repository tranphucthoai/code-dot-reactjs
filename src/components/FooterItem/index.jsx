import React from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import clsx from 'clsx'

FooterItem.propTypes = {
    data: PropTypes.object,
};

function FooterItem({ data = {} }) {
    return (
        <li className="footer-item">
            <h3 className="footer__title">{data["footer-title"]}</h3>

            {
                data["footer-sub"] && (<p className="footer__text">
                    {data["footer-sub"]}
                </p>)
            }
            {
                data["contact-list"] && (
                    <ul className="address-list">
                        {
                            data["contact-list"]?.map(item => (
                                <li key={item.id} className="address-item">
                                    <i className={
                                        clsx(
                                            "fa",
                                            item.name === "address" && "fa-map-marker",
                                            item.name === "phone" && "fa-phone",
                                            item.name === "mail" && "fa-envelope",
                                        )}></i>
                                    <p>
                                        {
                                            item.info
                                        }
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
            {
                data["social-list"] && (
                    <ul className="social-list">
                        {
                            data["social-list"]?.map(item => (
                                <li key={item.id} className="social-item">
                                    <a href={item.url}>
                                        <i className={
                                            clsx(
                                                "fa",
                                                item.name === "facebook" && "fa-facebook",
                                                item.name === "youtube" && "fa-youtube-play",
                                                item.name === "twitter" && "fa-twitter",
                                                item.name === "github" && "fa-github",
                                            )}>
                                        </i>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                )
            }

        </li>
    );
}

export default FooterItem;