import React, { useRef } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {Button, Container } from 'react-bootstrap';
import ClientFeedback from '../FakeData/ClientFeedback';

const Testimonials = () => {
    const customSlider = useRef();

  const previous = () => {
    customSlider.current.slickPrev();
  }
  const next = () => {
    customSlider.current.slickNext()
  }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed:3000,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div id="testimonials">
            <h1 className="text-center my-3">Testimonials</h1>
              <div className="text-center mb-5">
                <Button className="btn btn-danger btn-sm m-1" onClick={previous}>Prev</Button>
                <Button className="btn btn-danger btn-sm m-1" onClick={next}>Next</Button>
              </div>
            
          <Container>
          <Slider ref={c => (customSlider.current = c)} {  ...settings}>
            {
            ClientFeedback.map(cltFeedback => {
             return<>
                <div className="text-center testimonials-container">
                  <img  className="rounded-circle mx-auto d-block "  src={cltFeedback.img} alt=""/>
            <h2>{cltFeedback.name}</h2>
            <h5 className="text-danger">{cltFeedback.designation}</h5>
            <p className="px-5">{cltFeedback.desc}</p>
                </div>
               </>
            
             })
            }
         
            
             </Slider>
          </Container>

       
        </div>
    );
};

export default Testimonials;{}