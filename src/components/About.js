import React, { Component } from 'react'
import Section from "./home/Section";
import Footer from "./home/Footer";
import { Container, Row, Col } from 'reactstrap';
import { FiInstagram } from "react-icons/fi"
import { AiOutlineTwitter, AiFillFacebook } from "react-icons/ai"
export class About extends Component {
    render() {
        return (
            <div>
                <section className="fsecabout">
                    <div>
                    <h3 className="wow bounceInDown" data-wow-duration="2s" data-wow-delay="0.2s">ABOUT US</h3>
                    </div>

                </section>
                <section className="ssecabout wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                    <img src="images/p-img-02.png" alt="" />
                    <p >“Lore ipsum dolor sit amet, con sectetur adipisicing elit, sed dontem por incididunt ut labore et dolorem magna aliqua. Ut enim ad minim es veniam, quis onde.”</p>

                </section>
                <section className="thirdsecabout">
                <Container>
                    <Row >
                        <Col lg="6" md="6" sm="12" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.2s"> <img  src="images/p1-img-04 (1).jpg" alt="" />  <h3>Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, morut lab dolore magna aliqua. Uten </h3></Col>
                        <Col lg="6" md="6" sm="12" className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s"> <img  src="images/p1-img-03.jpg" alt="" /><p>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor est incidim dunt ut labore et dolore magna ftomi aliquma. Ut enim ad minim veniam, quis nos trud exerc itation ullamco laboris nisi ut aliquip ex ea con modo consequat. Duis aute irure dolor in repr ehenderit in volupt ate velit esse. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor est incidim dunt ut labore et dolore magna ftomi aliquma</p>  </Col>
                        </Row>
                </Container>

                </section>
            
                <section className="fifthsecabout">
                <Container>
                    <Row>
                        <Col lg="3" md="3" sm="12" className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                             <img src="images/h4-img-14.jpg" alt="" />
                             <h3>Jenna Olsen</h3>
                             <p>Chef Assistant</p>
                             <FiInstagram /><AiOutlineTwitter /><AiFillFacebook />  
                         </Col>
                         <Col lg="3" md="3" sm="12" className=" wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                             <img src="images/h4-img-15.jpg" alt="" />
                             <h3>Anna Nikson</h3>
                             <p>Executive Chef</p>
                             <FiInstagram /><AiOutlineTwitter /><AiFillFacebook />  
                         </Col>                     
                         <Col lg="3" md="3" sm="12" className=" wow bounceInDown" data-wow-duration="2s" data-wow-delay="0.2s">
                             <img src="images/h4-img-17.jpg" alt="" />
                             <h3>Sam Johnson</h3>
                             <p>Food Stylist</p>
                             <FiInstagram /><AiOutlineTwitter /><AiFillFacebook />  
                         </Col>                      
                            <Col lg="3" md="3" sm="12" className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
                             <img src="images/h4-img-16.jpg" alt="" />
                             <h3>Lana Kook</h3>
                             <p>Sommelier</p>
                             <FiInstagram /><AiOutlineTwitter /><AiFillFacebook />  
                         </Col>
                        </Row>
                </Container>

                </section>
                <section className="abotsecccc">
                    <Section />

                </section>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default About
