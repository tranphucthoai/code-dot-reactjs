import React from 'react';
import PropTypes from 'prop-types';

StrategyCard.propTypes = {
    data: PropTypes.object,
};


function StrategyCard({ data = {} }) {
    return (
        <div className="strategy-card">
            <div className="strategy-card__icon">
                <img src={data.thumb} alt="" />
            </div>
            <h3 className="strategy-card__title">
                {data.title}
            </h3>
            <p className="strategy-card__excerpt">
                {data.excerpt}
            </p>
        </div>
    );
}

export default StrategyCard;