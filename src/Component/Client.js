import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import clientFakedata from '../FakeData/ClientFakadata';


const Client = () => {
    console.log(clientFakedata);
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed:3000,
        autoplay:true,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };
    return (
        <div className="client-container my-5 py-5" >
            <h1 className="text-center mb-5">Our Client</h1>
        <Slider {...settings}>
            {
                clientFakedata.map( ctLogo => {
                    console.log(ctLogo);
                    return <>
                          <div>
                            <img className="img-fluid client-img"  src={ctLogo.logo} alt=""/>
                        </div>
                    </>
                })
            }
        
       
        </Slider>
      </div>
    );
};

export default Client;