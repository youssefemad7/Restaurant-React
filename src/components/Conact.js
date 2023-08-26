import React from 'react'
import Footer from "./home/Footer";
import emailjs from 'emailjs-com';
import { Container, Row, Col } from 'reactstrap';
function Conact() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_oniiacj', 'template_gfxy6kl', e.target, 'user_g1irYNKVOuewluAX01nOK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div>
            <section className="contactt" >
                <iframe className="  wow slideInDown" data-wow-duration="2s" data-wow-delay="0.2s" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2seg!4v1631333168494!5m2!1sen!2seg" title="" width="100%" height="450" allowFullScreen="" loading="lazy"></iframe>
            </section>
            <section className="contactsecccc">
                <Container>
                    <Row>
                        <Col lg="3" md="3" sm="12" className="  wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                            <h3>Call Us</h3>
                            <p>+1 212-344-1230<br />+1 212-344-1222</p>
                        </Col>
                        <Col lg="3" md="3" sm="12" className="  wow slideInDown" data-wow-duration="2s" data-wow-delay="0.2s">
                            <h3>Our Location</h3>
                            <p>19 W 53rd St, New York,<br />NY 10019, USA+1 212-344-12</p>

                        </Col>
                        <Col lg="3" md="3" sm="12" className="  wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                            <h3>Write Us</h3>
                            <p>drew@example.com<br />drew1@example.com</p>

                        </Col>
                        <Col lg="3" md="3" sm="12" className="  wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
                            <h3>Follow Us</h3>
                            <p>@QodeInterkact<br />@QodeIntejract</p>

                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="contactsec">

                <form onSubmit={sendEmail} className="  wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                    <div className="inputtt">
                        <input name="name" type="text" placeholder="Name*" />

                        <input name="user_email" type="email" placeholder="Email*" />
                    </div>
                    <textarea name="message" rows="5">Leave Your Message</textarea>
                    <br />
                    <input type="submit" value="Book Now" />
                </form>


            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Conact
