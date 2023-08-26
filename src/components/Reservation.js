import React from 'react';
import Footer from "./home/Footer";
import emailjs from 'emailjs-com';
import { Container, Row, Col } from 'reactstrap';
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";

function Reservation() {
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

            <section className="reservesec">
                <div>
                    <h3 className=" wow slideInDown" data-wow-duration="2s" data-wow-delay="0.2s">RESERVATIONS</h3>
                </div>
            </section>
            <section className="tenthsec nnnnnnn">
                <form onSubmit={sendEmail} method="post" className="  wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.2s">
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
            <section className="ssecreserve">
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className="  wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.2s" >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2seg!4v1631333168494!5m2!1sen!2seg" title="" width="100%" height="450" allowFullScreen="" loading="lazy"></iframe>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="  wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
                            <h3>CONTACT US</h3>
                            <p className="hhhh">Lorem ipsum dolor sit amet, conse ctetur adis icing elit, sed do eiusm od tempor incididunt ut.</p>
                            <div className="d-flex fff">
                                <div>
                                    <h5>Location 1</h5>
                                    <div className="d-flex"><AiOutlineHome /><p>19 W 53rd St, New York, NY 10019, USA</p></div>
                                    <div className="d-flex"><BiPhone /><p>19 W 53rd St, New York, NY 10019, USA</p></div>
                                    <div className="d-flex"><AiOutlineMail /><p>19 W 53rd St, New York, NY 10019, USA</p></div>

                                </div>

                                <div>
                                    <h5>Location 2</h5>
                                    <div className="d-flex"><AiOutlineHome /><p>19 W 53rd St, New York, NY 10019, USA</p></div>
                                    <div className="d-flex"><BiPhone /><p>19 W 53rd St, New York, NY 10019, USA</p></div>
                                    <div className="d-flex"><AiOutlineMail /><p>19 W 53rd St, New York, NY 10019, USA</p></div>

                                </div>


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

export default Reservation
