import React, {useState} from 'react'
import './Slider.css';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from 'styled-components';
import slide1 from '../assets/bic.jpeg';
import { sliderItems } from '../data';

const Slider = () => {
    
    const [slider, setSlider] = useState(0);

    const handleClick = (direction) => {
        if(direction === "left"){
            setSlider(slider > 0 ? slider -1 : 2)
        } else {
            setSlider(slider < 2 ? slider +1 : 0)
        }
    }
  return (
    <Wrapper>
    <div className="container">
        <div className="arrow" direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </div> 
        <div className="wrapper">
            {slider.map((item) =>(
            <div className="slide" bg={item.bg} key={item.id}>
            <div className="imagecontainer">
                <img className="image" src={slide1} />
            </div>
            <div className="informations">
                <h1 className="title"> {item.title} </h1>
                <p className="desctiption"> {item.desc} </p>
                <button className="homebutton"> SEE MORE</button>
            </div>
            </div>
            ))};

            <div className="arrow" direction="right" onClick={()=>handleClick("right")}>
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
    background-color: bisque;
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

.arrow{
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
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "-20rem"};
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
}

.informations{
    flex: 1;
    padding: 50px;
}

.title{
    font-size: 70px;
}

.description{
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
}
`

export default Slider;
