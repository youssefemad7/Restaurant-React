import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {

      if (counter === 24) {
        clearInterval();
      } else {
        setCounter(counter + 1);
      }
      if (counter2 === 32) {
        clearInterval();
      } else {
        setCounter2(counter2 + 1);
      }
      if (counter3 === 16) {
        clearInterval();
      } else {
        setCounter3(counter3 + 1);
      }
      if (counter4 === 23) {
        clearInterval();
      } else {
        setCounter4(counter4 + 1);
      }
    }, 200);
  

 
    return () => {
      clearInterval(interval)
     

    }
  });


  return (
    <section className="sec6">

      <Container >
        <Row >
          <Col lg="3" md="3" sm="12" className="columnnn wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.2s" >
            <h5>
              {counter}
            </h5>
            <p>Dinner options</p>

          </Col>

          <Col lg="3" md="3" sm="12" className="columnnn wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.2s" >

            <h5>
              {counter2}
            </h5>
            <p>Tables in total</p>

          </Col>
          <Col lg="3" md="3" sm="12" className="columnnn wow bounceInDown" data-wow-duration="2s" data-wow-delay="0.2s" >

            <h5>
              {counter3}
            </h5>
            <p>experience Years</p>

          </Col>
          <Col lg="3" md="3" sm="12" className="columnnn wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s" >

            <h5>
              {counter4}
            </h5>
            <p>Breakfast options</p>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default Counter