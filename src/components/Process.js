import React, { Component } from 'react'
import Footer from "./home/Footer";
import { Container, Row, Col } from 'reactstrap';

export class Process extends Component {
    render() {
        return (
            <div>
                                 <section className="fsecprocess">
                    <div className="  wow slideInDown" data-wow-duration="2s" data-wow-delay="0.2s">
                    <h3>Our Process</h3>
                    </div>

                </section>
                <section className="ssecprocess">
                <Container>
                    <Row >
                        <Col lg="6" md="6" sm="12" className="  wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.2s"> <h3>INGREDIENTS</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eti dolore ist magna aliqua. Ut enim ad minim veniam qui is nostrum d.Lorem ipsum dolor sit amet, con seetur adip isicing elit, sed do eiusmod tempor.</p> <button>view more</button></Col>
                        <Col lg="6" md="6" sm="12" className="  wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s"> <img src="images/p6-img-01.jpg" alt="" /> </Col>

                        </Row>
                        <Row >
                        <Col lg="6" md="6" sm="12" className="  wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.2s"> <img src="images/p6-img-03.jpg" alt="" /> </Col>

                        <Col lg="6" md="6" sm="12" className="  wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s"> <h3>FRESH & CLEAN</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eti dolore ist magna aliqua. Ut enim ad minim veniam qui is nostrum d.Lorem ipsum dolor sit amet, con seetur adip isicing elit, sed do eiusmod tempor.</p> <button>view more</button></Col>

                        </Row>
                        <Row >
                        <Col lg="6" md="6" sm="12" className="  wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.2s"> <h3>WITH LOVE</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eti dolore ist magna aliqua. Ut enim ad minim veniam qui is nostrum d.Lorem ipsum dolor sit amet, con seetur adip isicing elit, sed do eiusmod tempor.</p> <button>view more</button></Col>
                        <Col lg="6" md="6" sm="12" className="  wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s"> <img src="images/p6-img-04.jpg" alt="" /> </Col>

                        </Row>
                </Container>
                </section>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default Process
