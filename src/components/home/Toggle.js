import React, { useState } from 'react';
import { Button, Modal } from 'reactstrap';
import {BsPlay} from "react-icons/bs";
const Toggle = (props) => {
  const {
  
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="toggleee">
      <img src="images/h1-video-img-1.jpg" alt="" />

      <Button  onClick={toggle} className="btnnn wow bounceInDown" data-wow-duration="2s" data-wow-delay="0.2s"><BsPlay className="iconnnn"/></Button>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} >
        <iframe className="modalll" src="https://player.vimeo.com/video/243443906?h=58aabcda1d" title="" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      
      </Modal>
    </div>
  );
}

export default Toggle;