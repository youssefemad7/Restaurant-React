import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Footer from "./home/Footer";
import Section from "./home/Section";

import { Container, Row, Col } from 'reactstrap';
import { FiInstagram } from "react-icons/fi"
import { AiOutlineTwitter, AiFillFacebook } from "react-icons/ai"
export class Ourteam extends Component {
    render() {
        return (
            <div>
                <div className="divteam  wow slideInDown" data-wow-duration="2s" data-wow-delay="0.2s">
                    <Link to="/" >Home </Link><span> / Our Team</span>
                </div>
                <section className="fifthsecabout ffff">
                    <Container>
                        <Row>
                            <Col lg="3" md="3" sm="12" className="  wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                                <img src="images/h4-img-14.jpg"  alt="" />
                                <h3>Jenna Olsen</h3>
                                <p>Chef Assistant</p>
                                <FiInstagram /><AiOutlineTwitter /><AiFillFacebook />
                            </Col>
                            <Col lg="3" md="3" sm="12" className="  wow slideInDown" data-wow-duration="2s" data-wow-delay="0.2s">
                                <img src="images/h4-img-15.jpg" alt="" />
                                <h3>Anna Nikson</h3>
                                <p>Executive Chef</p>
                                <FiInstagram /><AiOutlineTwitter /><AiFillFacebook />
                            </Col>
                            <Col lg="3" md="3" sm="12" className="  wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                                <img src="images/h4-img-17.jpg" alt="" />
                                <h3>Sam Johnson</h3>
                                <p>Food Stylist</p>
                                <FiInstagram /><AiOutlineTwitter /><AiFillFacebook />
                            </Col>
                            <Col lg="3" md="3" sm="12" className="  wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
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

export default Ourteam
