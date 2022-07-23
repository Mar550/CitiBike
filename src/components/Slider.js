import React, {useState} from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from 'styled-components';
import slide1 from '../assets/img1.png';
import { sliderItems } from '../data';

const Slider = () => {
    
    const [slideIndex, setSlideIndex] = useState(0);

    const slideChange = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
            console.log("clicked")
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    }

  return (
    <Wrapper>
    <div className="container">
        <div direction="left" className="arrowleft" onClick={() => slideChange("left")}>
            <ArrowLeftOutlined/>
        </div> 
        <div className="wrapper" slideIndex={slideIndex} >
            {sliderItems.map((item) =>(
            <div className="slide" bg={item.bg} key={item.id}>
            <div className="imagecontainer">
                <img className="image" src={item.img} />
            </div>
            <div className="informations">
                <h1 className="title"> {item.title} </h1>
                <p className="description"> {item.desc} </p>
                <button className="homebutton"> SEE MORE</button>
            </div>
            </div>
            ))}
            <div  direction="right" className="arrowright" onClick={() => slideChange("right")}>
                <ArrowRightOutlined/>
            </div> 
        </div>
    </div>
    </Wrapper>
  )
}



const Wrapper = styled.div`

.container{
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
    background-color: white;
    position: relative;
}

.wrapper{
    height: 100%;
    display: flex;
    transition: all 1.5 ease;
    tranform: translateX(${(props) => props.slideIndex * -100}vw);
}

.slide{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
}

.imagecontainer{
    height: 100%;
    flex: 1;
    display:flex;
}

.image{
    height: 85%;
    display: flex;
    display:block;
    margin-left: auto;
    margin-right: auto;
}

.homebutton{
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    font-weight:bold;
}

.informations{
    flex: 1;
    padding: 50px;
}

.title{
    font-size: 70px;
    color: black;
}

.description{
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    color: black;
}

.arrowleft{
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1rem;
    margin: auto;
    cursor:pointer;
    opacity: 0.5;
    z-index: 2; 
    color:black;   
}

.arrowright{
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 95%;
    margin: auto;
    cursor:pointer;
    opacity: 0.5;
    z-index: 2;
    color:black;
}

`

export default Slider;
