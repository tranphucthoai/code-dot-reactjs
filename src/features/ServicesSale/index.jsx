import React, { useEffect, useState } from 'react';
import servicesSaleApi from './../../api/servicesSaleApi';

function ServicesSale() {
    const [data, setData] = useState({})

    useEffect(() => {
        (async () => {
            try {
                const respone = await servicesSaleApi.getAll();
                setData(...respone);
                // console.log('respone', ...respone);
            } catch (error) {
                console.log('Failed to fetch api', error);
            }
        })()
    }, [])
    return (
        <section class="section services-sale">
            <div class="container">
                <div class="services-sale-inner">
                    <div class="services-sale-thumb">
                        <img src={data?.thumb} alt="" />
                    </div>
                    <div class="services-sale-info">
                        <p class="section-subtitle">{data.subtitle}</p>
                        <h2 class="section-title title-md">{data.title}</h2>
                        <p class="section-title-text">
                            {data.excerpt}
                        </p>
                        <a href={data['btn-direction']} class="btn bg-secondary w-fit" type="submit">
                            {data['btn-text']}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSale;