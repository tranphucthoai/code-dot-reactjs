import React from 'react';
import PropTypes from 'prop-types';

Accordion.propTypes = {
    data: PropTypes.object,
};

function Accordion({ data }) {
    return (
        <div className="services-accordion">
            <input className="services-accordion__checkbox" id={data.title.replace(" ", "")} type="checkbox" hidden />
            <label className="services-accordion__label btn bg-primary" htmlFor={data.title.replace(" ", "")}>
                {data.title}
            </label>
            <div className="services-accordion__text">
                {data.content}
            </div>
        </div>
    );
}

export default Accordion;