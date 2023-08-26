import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from "./home/Footer";
export class Menu extends Component {
    render() {
        return (
            <div>
                <div className="divteam">
                    <Link to="/" >Home </Link><span> / Menu</span>
                </div>

                <section className="ssec nn">
                    <h3 className="h3333">Lunch</h3>
                    <Container fluid>
                        <Row>
                            <Col lg="4" md="4" sm="12" className="fcoll"><img className="  wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.2s" src="images/p-img-1.jpg" alt="" /> </Col>
                            <Col lg="4" md="4" sm="12" className="scolll wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                                <h3>LUNCH MENU</h3>
                                <div>
                                    <div className="d-flex hhhhhhhh">
                                        <h5>Smoothie</h5>
                                        <div></div>
                                        <p>25.00$</p>
                                    </div>
                                    <p>(banana, matcha, spinach, almond milk)</p>
                                </div>

                                <div>
                                    <div className="d-flex hhhhhhhh">

                                        <h5>Okonomiyaki</h5>
                                        <div></div>
                                        <p>35.00$</p>
                                    </div>
                                    <p>(flour, sugar, kosher salt, milk, egg)</p>
                                </div>
                                <div>
                                    <div className="d-flex hhhhhhhh">

                                        <h5>Salad Bowl</h5>
                                        <div></div>
                                        <p>22.00$</p>
                                    </div>
                                    <p>(prawn, mango, avocado, lime, lettuce)</p>
                                </div>
                                <div>
                                    <div className="d-flex hhhhhhhh">

                                        <h5>Gin Trifles</h5>
                                        <div></div>
                                        <p>30.00$</p>
                                    </div>
                                    <p>(tonic water, sugar, gelatine, vanilla)</p>
                                </div>
                                <div>
                                    <div className="d-flex hhhhhhhh">

                                        <h5>Quesadillas Benedict</h5>
                                        <div></div>
                                        <p>50.00$</p>
                                    </div>
                                    <p>(salsa, scallions, tortillas, hot sauce, lime)</p>
                                </div>
                                <Link to="/" className="linkk">VIEW MENU</Link>
                            </Col>
                            <Col lg="4" md="4" sm="12"><img className=" wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s" src="images/p-img-2.jpg" alt="" /></Col>

                        </Row>
                    </Container>
                </section>
                <br />

                <section>
                    <div className="thirdsecblog">
                        <h3 className="  wow slideInDown" data-wow-duration="2s" data-wow-delay="0.2s">
                            “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut”
                        </h3>


                    </div>
                </section>
                <section className="ssec nn">
                    <h3 className="h3333">DINNER</h3>
                    <Container fluid>
                        <Row>
                            <Col lg="4" md="4" sm="12" className="fcoll"><img className="  wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.2s" src="images/p-img-3.jpg" alt="" /> </Col>
                            <Col lg="4" md="4" sm="12" className="scolll  wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                                <h3>DINNER MENU</h3>
                                <div>
                                    <div className="d-flex hhhhhhhh">
                                        <h5>Vermouth Cassis</h5>
                                        <div></div>
                                        <p>18.00$</p>
                                    </div>
                                    <p>(dry vermouth, crème de cassis, soda)</p>
                                </div>

                                <div>
                                    <div className="d-flex hhhhhhhh">

                                        <h5>Panna Cotta</h5>
                                        <div></div>
                                        <p>25.00$</p>
                                    </div>
                                    <p>(heavy cream, vanilla, salt, dark chocolate)</p>
                                </div>
                                <div>
                                    <div className="d-flex hhhhhhhh">

                                        <h5>Pork Chops</h5>
                                        <div></div>
                                        <p>38.00$</p>
                                    </div>
                                    <p>(pork, sherry vinegar, gruyere, honey, thyme)</p>
                                </div>
                                <div>
                                    <div className="d-flex hhhhhhhh">

                                        <h5>Tomato Soup</h5>
                                        <div></div>
                                        <p>23.00$</p>
                                    </div>
                                    <p>(basil, tomato, tofu, thyme, celery)</p>
                                </div>
                                <div>
                                    <div className="d-flex hhhhhhhh">

                                        <h5>Beans & Rice</h5>
                                        <div></div>
                                        <p>16.00$</p>
                                    </div>
                                    <p>(black beans, thyme, garlic, rice, tomatoes)</p>
                                </div>
                                <Link to="/" className="linkk">VIEW MENU</Link>
                            </Col>
                            <Col lg="4" md="4" sm="12"><img className="  wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s" src="images/p-img-4.jpg" alt="" /></Col>

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

export default Menu
