import React, { useEffect, useState } from 'react';
import heroApi from './../../api/heroApi';

function Hero() {
    const [data, setData] = useState({})

    useEffect(() => {
        (async () => {
            try {
                const respone = await heroApi.getAll()
                setData(...respone);
                // console.log('data', ...respone);
            } catch (error) {
                console.log('Failed to fetch api', error);
            }
        })()
    }, [])
    return (
        <section className="section hero" id="hero">
            <div className="container">
                <div className="hero-inner">
                    <div className="hero-thumb">
                        <img src={data?.thumb} alt="" />
                    </div>
                    <div className="hero-info">
                        <p className="section-subtitle">{data.subtitle}</p>
                        <h2 className="section-title title-lg">{data.title}</h2>
                        <p className="section-title-text">
                            {data.excerpt}
                        </p>
                        <a href={data['btn-direction']} class="btn bg-secondary w-fit" type="submit">{data['btn-text']}</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;