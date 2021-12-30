import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

PricingCard.propTypes = {
    data: PropTypes.object,
};

function PricingCard({ data }) {
    return (
        <div className={clsx(data.popular && 'special', 'pricing-card')}>
            {
                data.popular && (
                    <span className="pricing-card__popular">Popular</span>
                )
            }
            <h1 className="section-title pricing-card__price title-lg">
                ${data.price}
            </h1>
            <span className="pricing-card__period">
                {data.period}
            </span>
            <p className="pricing-card__excerpt">
                {data.excerpt}
            </p>
            <ul className="pricing-card-list__info">
                {
                    data['list-info']?.map((item, index) => (
                        <li key={index} className={clsx(item['is-check'] && 'check')}>
                            {item.title}
                        </li>
                    ))
                }
            </ul>
            <a href={data["btn-direction"]} className="btn bg-primary w-fit pricing-card__btn"
                type="submit"> {data["btn-text"]}</a>
        </div>
    );
}

export default PricingCard;