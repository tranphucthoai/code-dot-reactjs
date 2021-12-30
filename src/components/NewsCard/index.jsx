import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx'

NewsCard.propTypes = {
    data: PropTypes.object,
};

function NewsCard({ data = {} }) {
    return (
        <article className="post">
            <div className="post__thumb">
                <img src={data.thumb} alt="" />
            </div>
            <div className="post-text">
                <h3 className="post__title">{data.title}</h3>
                <p className="post__excerpt">
                    {data.subtitle}
                </p>
                <a href="#contact" className={clsx(data.special && "btn bg-primary w-fit", "post__btn")} type="submit">
                    {data['btn-text']}
                </a>
            </div>
            <a className="post-link__ovelay" href="#contact"> </a>
        </article>
    );
}

export default NewsCard;