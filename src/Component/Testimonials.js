import React, { useRef } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {Button, Container } from 'react-bootstrap';

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
            <div className="text-center testimonials-container">
                <img  className="rounded-circle mx-auto d-block "  src="https://livedemo00.template-help.com/wt_prod-19259/images/team-01-270x270.jpg" alt=""/>
                <h2>Md. Faruk Hossian</h2>
                <h5>CEO</h5>
                <p className="px-5">Every writer needs to refresh the look of his/hers website from time to time, and that’s why I was looking for a new design for my website. I am so glad I found Rhombus to help me! Their designers understood what my website was lacking immediately and our cooperation brought amazing results. Thank you!</p>
            </div>
            <div className="text-center testimonials-container">
                <img  className="rounded-circle mx-auto d-block "  src="https://livedemo00.template-help.com/wt_prod-19259/images/team-03-270x270.jpg" alt=""/>
                <h2>Md. Faruk Hossian</h2>
                <h5>CEO</h5>
                <p className="px-5">Every writer needs to refresh the look of his/hers website from time to time, and that’s why I was looking for a new design for my website. I am so glad I found Rhombus to help me! Their designers understood what my website was lacking immediately and our cooperation brought amazing results. Thank you!</p>
            </div>
            <div className="text-center testimonials-container">
                <img  className="rounded-circle mx-auto d-block "  src="https://livedemo00.template-help.com/wt_prod-19259/images/team-01-270x270.jpg" alt=""/>
                <h2>Md. Faruk Hossian</h2>
                <h5>CEO</h5>
                <p className="px-5">Every writer needs to refresh the look of his/hers website from time to time, and that’s why I was looking for a new design for my website. I am so glad I found Rhombus to help me! Their designers understood what my website was lacking immediately and our cooperation brought amazing results. Thank you!</p>
            </div>
             </Slider>
          </Container>

       
        </div>
    );
};

export default Testimonials;