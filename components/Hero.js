import React from 'react'
import styled, {css} from 'styled-components'
import  Button  from './Button';
import {IoMdArrowRoundForward}from 'react-icons/io';

import slides from '../data/SliderImage'



const HeroSection = styled.section`
height: 100vh;
max-height: 1100px;
position: relative;
overflow: hidden;
`;
const HeroWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`;
const HeroSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;
`;
const HeroSlider = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

&::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradiant(0deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.6) 100% )
}
`;
const HeroImage = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
object-fit: cover;
opacity:0.9;
`;
const HeroContent = styled.div`
position: relative;
z-index: 10;
display: flex;
flex-direction: column;
max-width: 1600px;
width: calc(100% - 100px);
color: #fff;
h1 {
    font-size: clamp(2rem, 9vw, 3rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 1rem;
}
h3 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 1rem;
}

p{
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);

}

`;
const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 0.5rem`;

const SliderButtons = styled.div`
position: absolute;
bottom: 50px;
right: 50px;
display: flex;
z-index: 10;
`;

const arrowButtons = css`
width: 50px;
height: 50px;
color: #fff;
cursor: pointer;
background: #000d1a;
border-radius: 50px;
padding: 10px;
margin-right: 1rem;
user-select: none;
transition: 0.3s;

&:hover {
    background: #0096FF;
    transform: scale(1.05);
}
`;


const Hero = () => {
    


   
    
    
    return (
        <div>



        <HeroSection>
            <HeroWrapper>
            
                    <HeroSlide >
                        
                        <HeroSlider>
                            <HeroImage src='hero1.png' alt= 'test'  />
                            <HeroContent>
                            <h1 className="text-white"> fdjhfjhdfhhfsdh</h1>
                             <h3 className= "text-white">fdfsfdsfsd </h3> 
                              <Button href='/' primary='true'
                              css={`
                              max-width: 160px;
                              `}>
                                  labal
                                  <Arrow />
                                  </Button> 
                            </HeroContent>    
                            
                        </HeroSlider>
                 
                    </HeroSlide>
                
            
            </HeroWrapper>
        </HeroSection>

            
        </div>
    )
}

export default Hero
