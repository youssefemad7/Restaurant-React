import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  {
    src: 'images/h1-slider-img-1.jpg',
    caption: 'simply delicious',
    altText: 'Slide 1'
  },
  {
    src: 'images/h1-slider-img-2.jpg',
    caption: 'always fresh',
    altText: 'Slide 2'
  },
  {
    src: 'images/h1-slider-img-3.jpg',
    caption: 'pure artistry',
    altText: 'Slide 3'
  }
];

const Carsoul = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className="carsoulll ">
        <img src={item.src} alt={item.altText} />
        <div className="pp animate__animated animate__fadeInUp">
<h3>{item.caption}</h3>    
<button>view more</button>
</div>
</div>
  </CarouselItem>
    );
  });

  return (
    <div className="fcarsoul">
            <img className="fimgg  animate__animated animate__fadeInLeft" src="images/h1-deco-img-6.png" alt="" />
              <img className="simgg  animate__animated animate__fadeInRight" src="images/h1-deco-img-5.png" alt="" />
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>
  );
}

export default Carsoul;
