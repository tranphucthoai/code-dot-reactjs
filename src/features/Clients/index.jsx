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
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <section className="section clients" id="clients">
            <div className="container">
                <div className="clients-heading text-center">
                    <p className="section-subtitle">{data.subtitle}</p>
                    <h2 className="section-title title-md">{data.title}</h2>
                </div>
                <div className="clients-inner">
                    <Slider {...settings} className='clients-slider'>
                        {data.slider?.map(item => (
                            <div key={item.id} className="item">
                                <div className="box-img clients-img">
                                    <img src={item.thumb} alt={item.thumb} />
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