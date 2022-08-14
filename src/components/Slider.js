import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";


const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderItems.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <Wrapper>
    <div className="slider">
      <ArrowLeftOutlined className="arrow prev" onClick={prevSlide} />
      <ArrowRightOutlined className="arrow next" onClick={nextSlide} />
      {sliderItems.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div className="row">
                <img src={slide.img} alt="slide" className="image" />
                <div className="content">
                  <h1>{slide.title}</h1>
                  <p>{slide.desc}</p>
                  <hr />
                  <button id="btn" className="--btn --btn-primary"> SEE NOW </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
    <hr className="separator" />
    </Wrapper>
  );
};

const Wrapper = styled.div `

.separator{
  margin-top: 1rem;
  color: grey;
  display: block;
  margin-left: 13%;
  width: 70%
}

.row{
  display:flex;
  flex-direction: row;
}

#btn{
  background: white;
  color: black;
  width: 6rem;
  height: 2.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}

#btn :hover{

}

.slider {
  width: 100%;
  height: 90vh;
  position: relative;
  overflow: hidden;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateX(-50%);
  transition: all 0.5s ease;
}

@media screen and (min-width: 600px) {
  .slide img {
    width: 100%;
    height: 100%;
  }
}

.slide img {
  width: 50%;
  padding: 5rem;
  opacity: 0.9;
}

.current {
  opacity: 1;
  transform: translateX(0);
}

.content {
  width: 25rem;
  color: black;
  margin-top: 5rem;
  height: 22rem;
  padding: 3rem;
  margin-right: 7rem;
  font-weight:bold;
  margin-left: -10px;
}

@keyframes slide-up {
  0% {
    visibility: visible;
    top: 23rem;
  }
  100% {
    visibility: visible;
    top: 17rem;
  }
}

@media screen and (max-width: 600px) {
  .content {
    width: 80%;
  }
}

.content > * {
  color: black;
  margin-bottom: 1rem;
  font-weight:bold;

}

.current .content {
  opacity: 1;
  transform: translateX(0);
  transition: all 0.5s ease;
}

.arrow {
  margin-top: 2rem;
  border: 2px solid black;
  background-color: transparent;
  color: black;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  position: absolute;
  z-index: 999;
}

.arrow:hover {
  background-color: black;
  color: white;
}

.next {
  top: 35%;
  right: 1.5rem;
}
.prev {
  top: 35%;
  left: 1.5rem;
}

hr {
  height: 2px;
  background: white;
  width: 50%;
}

`

export default Slider;