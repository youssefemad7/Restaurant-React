import React from 'react'
import Carsoul from "./Carsoul";
import { Container, Row, Col } from 'reactstrap';
import Toggle from "./Toggle";
import Section from "./Section";
import Counter from "./Counter"
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import Carsoul2 from "./Carsoul2"
import Footer from "./Footer"

function Home() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_oniiacj', 'template_azengl9', e.target, 'user_g1irYNKVOuewluAX01nOK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div>
            <Carsoul />
            <section className="fsec">
                <img src="images/h1-img-1.png" alt="" />
                <p className="wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.2s">Enjoy some of the most exquisite and delicious dishes. With our unique recipes we guarantee a taste you won’t forget!</p>
            </section>
            <section className="ssec">
                <h3 className="h3333">menu</h3>
                <Container fluid>
                    <Row>
                        <Col lg="4" md="4" sm="12" className="fcoll"><img  className="wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.2s" src="images/h1-img-3.jpg" alt="" /> </Col>
                        <Col lg="4" md="4" sm="12" className=" scolll wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                            <h3>OUR SPECIALS</h3>
                            <div>
                                <h5>Smoothie</h5>
                                <p>(banana, matcha, spinach, almond milk)</p>
                            </div>

                            <div>
                                <h5>Okonomiyaki</h5>
                                <p>(flour, sugar, kosher salt, milk, egg)</p>
                            </div>
                            <div>
                                <h5>Salad Bowl</h5>
                                <p>(prawn, mango, avocado, lime, lettuce)</p>
                            </div>
                            <div>
                                <h5>Gin Trifles</h5>
                                <p>(tonic water, sugar, gelatine, vanilla)</p>
                            </div>
                            <Link to="/" className="linkk">VIEW MENU</Link>
                        </Col>
                        <Col lg="4" md="4" sm="12"><img className="wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s" src="images/h1-img-4.jpg" alt="" /></Col>

                    </Row>
                </Container>
            </section>
            <section className="thirdsec">
                <h3>DELIVERY & PICK-UP MENU</h3>
                <Container >
                    <Row>
                        <Col lg="4" md="4" sm="12" className="wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                            <img src="images/h1-icon-1-ver-2.png" alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <Link to="/" className="linkk">VIEW MENU</Link>


                        </Col>
                        <Col lg="4" md="4" sm="12" className="wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                            <img src="images/h1-icon-2.png" alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <Link to="/" className="linkk">VIEW MENU</Link>

                        </Col>
                        <Col lg="4" md="4" sm="12" className="wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
                            <img src="images/h1-icon-3.png" alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <Link to="/" className="linkk">VIEW MENU</Link>

                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Toggle />
            </section>
            <section>
                <Section />
            </section>
            <section className="ssec">
                <h3 className="h3333">CHEF</h3>
                <Container fluid>
                    <Row>
                        <Col lg="4" md="4" sm="12"  className="fcoll"><img className="  wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.2s" src="images/h1-img-5.jpg" alt="" /> </Col>
                        <Col lg="4" md="4" sm="12" className="scolll">
                            <div className="  wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                                <h3>OUR CHEF</h3>

                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor est incididunt</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor est incidim dunt ut labore et dolore magna ftomi aliquma. Ut enim ad minim veniam, quis nos trud exerc itation ullamco laboris nisi ut aliquip ex ea con modo consequat. Duis aute irure dolor in repr ehenderit in volupt ate velit lorem suis impsumesse.</p>

                            </div>

                        </Col>
                        <Col lg="4" md="4" sm="12"><img className="  wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s" src="images/h1-img-6.jpg" alt="" /></Col>

                    </Row>
                </Container>
            </section>
            <section>
                <Counter />
            </section>
            <section className="tenthsec  wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                <form onSubmit={sendEmail} method="post">
                    <h3>MAKE A RESERVATION</h3>

                    <div className="formdiv">
                        <select name="people">
                            <option value="1" selected>1 Person</option>
                            <option value="2">2  Person</option>
                            <option value="3">3  Person</option>
                            <option value="4">4  Person</option>
                            <option value="5">5  Person</option>
                            <option value="6">6  Person</option>
                            <option value="7">7  Person</option>
                            <option value="8">8  Person</option>
                            <option value="9">9  Person</option>
                            <option value="10">10  Person</option>


                        </select>
                        <input type="date" name="date" />
                        <select name="hour">
                            <option value="00:30am" selected>00:30 am</option>
                            <option value="01:00am">01:00 am</option>
                            <option value="01:30am">01:30 am</option>
                            <option value="02:00am">02:00 am</option>
                            <option value="02:30am">02:30 am</option>
                            <option value="03:00am">03:00 am</option>
                            <option value="03:30am">03:30 am</option>
                            <option value="04:00am">04:00 am</option>
                            <option value="04:30am">04:30 am</option>
                            <option value="05:00am">05:00 am</option>
                            <option value="05:30am">05:30 am</option>
                            <option value="06:00am">06:00 am</option>
                            <option value="06:30am">06:30 am</option>
                            <option value="07:00am">00:00 am</option>
                            <option value="07:30am">07:30 am</option>
                            <option value="08:00am">00:00 am</option>
                            <option value="08:30am">08:30 am</option>
                            <option value="09:00am">09:00 am</option>
                            <option value="09:30am">09:30 am</option>
                            <option value="10:00am">10:00 am</option>
                            <option value="10:30am">10:30 am</option>
                            <option value="11:00am">11:00 am</option>
                            <option value="11:30am">11:30 am</option>
                            <option value="12:00pm">12:00 pm</option>
                            <option value="12:30pm">12:30 pm</option>
                            <option value="01:00pm">01:00 pm</option>
                            <option value="01:30pm">01:30 pm</option>
                            <option value="02:00pm">02:00 pm</option>
                            <option value="02:30pm">02:30 pm</option>
                            <option value="03:00pm">03:00 pm</option>
                            <option value="03:30pm">03:30 pm</option>
                            <option value="04:00pm">04:00 pm</option>
                            <option value="04:30pm">04:30 pm</option>
                            <option value="05:00pm">05:00 pm</option>
                            <option value="05:30pm">05:30 pm</option>
                            <option value="06:00pm">06:00 pm</option>
                            <option value="06:30pm">06:30 pm</option>
                            <option value="07:00pm">00:00 pm</option>
                            <option value="07:30pm">07:30 pm</option>
                            <option value="08:00pm">00:00 pm</option>
                            <option value="08:30pm">08:30 pm</option>
                            <option value="09:00pm">09:00 pm</option>
                            <option value="09:30pm">09:30 pm</option>
                            <option value="10:00pm">10:00 pm</option>
                            <option value="10:30pm">10:30 pm</option>
                            <option value="11:00pm">11:00 pm</option>
                            <option value="11:30pm">11:30 pm</option>
                            <option value="12:00pm">12:00 pm</option>

                        </select>
                    </div>

                    <input type="submit" value="BOOK NOW" />
                </form>


            </section>
            <section className="eleventhsecc">
                <h3>FOLLOW ON INSTAGRAM</h3>
                <Carsoul2 />
            </section>
            <section className="twelvethsec">
                <Container className="tenthsec  ">
                    <Row>
                        <Col lg="2" md="2" sm="12" >
                            <div className="divyyylogo wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                                <img src="images/h1-client-img-1.png" alt="" className="imglogo" />
                                <img src="images/h1-client-img-1-hover.png" alt="" className="imglogo2" />


                            </div>
                        </Col>
                        <Col lg="2" md="2" sm="12" >

                            <div  className="divyyylogo wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                                <img src="images/h1-client-img-2.png" alt="" className="imglogo" />
                                <img src="images/h1-client-img-2-hover.png" alt="" className="imglogo2" />


                            </div>
                        </Col>
                        <Col lg="2" md="2" sm="12" >

                            <div  className="divyyylogo wow bounceInDown" data-wow-duration="2s" data-wow-delay="0.2s">
                                <img src="images/h1-client-img-3.png" alt="" className="imglogo" />
                                <img src="images/h1-client-img-3-hover.png" alt="" className="imglogo2" />


                            </div>
                        </Col>
                        <Col lg="2" md="2" sm="12" >

                            <div  className="divyyylogo wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                                <img src="images/h1-client-img-4.png" alt="" className="imglogo" />
                                <img src="images/h1-client-img-4-hover.png" alt="" className="imglogo2" />


                            </div>
                        </Col>
                        <Col lg="2" md="2" sm="12" >

                            <div  className="divyyylogo wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
                                <img src="images/h1-client-img-5.png" alt="" className="imglogo" />
                                <img src="images/h1-client-img-5-hover.png" alt="" className="imglogo2" />


                            </div>
                        </Col>
                        <Col lg="2" md="2" sm="12" >

                            <div  className="divyyylogo wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s" >
                                <img src="images/h1-client-img-6.png" alt="" className="imglogo" />
                                <img src="images/h1-client-img-6-hover.png" alt="" className="imglogo2" />


                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
<footer>
<Footer />
</footer>
        </div>
    )
}

export default Home
