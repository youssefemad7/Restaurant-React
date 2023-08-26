import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class Section extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "ease-in-out"
    };
    return (
      <div className="opinionscec">
<img src="images/h1-deco-img-2.png" className=" wow slideInDown" data-wow-duration="2s" data-wow-delay="0.2s"  alt=""  />
    <Slider {...settings} className=" wow slideInDown" data-wow-duration="2s" data-wow-delay="0.2s">
          <div>
            <p>“Lorem ip ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus. Aliquam eleifend mi in nulla posuere solli citudin aliquam ultrices sagittis orcil.”</p>
         <h5>Jenna Johnson / Barista</h5>
          </div>
          <div>
          <p>“Lorem ip ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus. Aliquam eleifend mi in nulla posuere solli citudin aliquam ultrices sagittis orcil.”</p>
         <h5>Jenna Johnson / Barista</h5>
          </div>
          <div>
          <p>“Lorem ip ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus. Aliquam eleifend mi in nulla posuere solli citudin aliquam ultrices sagittis orcil.”</p>
         <h5>Jenna Johnson / Barista</h5>
          </div>
         
        </Slider>
      </div>
    );
  }
}