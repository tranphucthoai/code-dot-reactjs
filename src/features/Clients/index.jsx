import React, { useEffect, useState } from 'react';
import clientsApi from './../../api/clientsApi';
import Slider from "react-slick";

function Clients() {

    const [data, setData] = useState({})

    useEffect(() => {
        (async () => {
            try {
                const respone = await clientsApi.getAll()
                setData(...respone);
                console.log('data', ...respone);
            } catch (error) {
                console.log('Failed to fetch api', error);
            }
        })()
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className="section clients" id="clients">
            <div className="container">
                <div className="clients-heading text-center">
                    <p className="section-subtitle">{data.subtitle}</p>
                    <h2 className="section-title title-md">{data.title}</h2>
                </div>
                <div className="clients-inner">
                    <Slider {...settings}>
                        {data.slider?.map(item => (
                            <div class="item">
                                <div key={item.id} class="box-img clients-img">
                                    <img src={item.thumb} alt="" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Clients;