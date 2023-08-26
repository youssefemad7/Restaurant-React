import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { FiInstagram } from "react-icons/fi"
import { AiOutlineTwitter, AiFillFacebook } from "react-icons/ai"

export class Footer extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col lg="4" md="4" sm="12" className="tenthsec  wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                            <h3>Contact Us</h3>
                            <p>9 W 53rd St, New York, NY <br /> 10019, USA</p>
                            <p>+1 212-344-12300</p>
                            <p>+1 212-5055-1230</p>

                        </Col>
                        <Col lg="4" md="4" sm="12" className="tenthsec  wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                            <img src="images/main-logo-footer-300x86.png" alt="" />
                            <p>Chef’s kiss for restaurants and cafés. Drew, the most <br /> important ingredient for your site.</p>
                            <button><FiInstagram /></button><button><AiOutlineTwitter /></button><button><AiFillFacebook /></button>

                        </Col>
                        <Col lg="4" md="4" sm="12" className="tenthsec  wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
                            <h3>Working Hours</h3>
                            <p>Monday-Friday:<br />08:00-22:00</p>
                            <p>Saturday-Sunday:<br />10:00-16:00</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Footer
