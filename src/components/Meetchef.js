import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { FiInstagram } from "react-icons/fi"
import { AiOutlineTwitter, AiFillFacebook } from "react-icons/ai"

export class Meetchef extends Component {
    render() {
        return (
            <div className="meetchef">
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12">
                            <img src="images/p1-img-07-1.jpg" className="imgggg1 wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.2s" alt="" />
                            <div className="pmeet"></div>
                            <img src="images/p-img-02.png" className="pmeet3" alt="" />

                        </Col>
                        <Col lg="6" md="6" sm="12" >
                            <div className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
                            <h3>HELLO,<br />I'M JADE!</h3>
                            <p>Lorem ipsum dolor sit amet, cons ectetadip isicing elit, sed nus mas le eiusd temporem incididunt ut labore etim ipsum dolor amet, consectetur adipisicin.</p>
                            <p>Lorem ipsum dolor sit amet, conse ctetad ipisicing elit, sed do eiusd temporem incididunt ut labore etim ipsum dolor amet, consectetur adipisicing elit. Porem incididunt ut labore etim ipsum dolor amet, consectetur adipisicing elit.</p>
                            <button><FiInstagram /></button><button><AiOutlineTwitter /></button><button><AiFillFacebook /></button>
                             </div>
                            <div className="pmeet2"></div>
                            <img src="images/h1-deco-img-4.png" className="pmeet4" alt="" />

                        </Col>


                    </Row>
                </Container>
            </div>
        )
    }
}

export default Meetchef
