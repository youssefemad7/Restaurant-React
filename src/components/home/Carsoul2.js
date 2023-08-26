import React, { Component } from "react";
import Slider from "react-slick";
import { GrInstagram } from "react-icons/gr"
export default class Carsoul2 extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [{
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        }
        return (
            <div>
                <Slider {...settings} className=" wow bounceInDown" data-wow-duration="2s" data-wow-delay="0.2s">
                    <div className="divvvv">
                        <img src="images/172999576_287619606252709_4452895269028591560_nfull.jpg" alt="" />
                        <button><GrInstagram /></button>

                    </div>
                    <div className="divvvv down">
                        <img src="images/173656190_297052718480731_3762871804748483337_nfull.jpg" alt="" />
                        <button><GrInstagram /></button>       
                        </div>
                    <div className="divvvv ">
                        <img src="images/170803196_957942594978521_5017698078632107193_nfull.jpg" alt="" />
                        <button><GrInstagram /></button>       
                        </div>
                    <div className="divvvv down">
                        <img src="images/173099877_836324300621774_102573819052783961_nfull.jpg" alt="" />
                        <button><GrInstagram /></button>       
                        </div>
                    <div className="divvvv ">
                        <img src="images/p1-img-04.jpg" alt="" />
                        <button><GrInstagram /></button>       
                        </div>
                    <div className="divvvv down">
                        <img src="images/blog-img-01.jpg" alt="" />
                        <button><GrInstagram /></button>       
                        </div>
                </Slider>
            </div>
        );
    }
}