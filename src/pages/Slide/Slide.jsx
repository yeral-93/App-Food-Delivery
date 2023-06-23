import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled, {css} from 'styled-components';
import mujer1 from '../../asset/Svg.png'
import hombre1 from '../../asset/Svg (1).png'
import mujer2 from '../../asset/Svg (2).png'
import { useNavigate } from 'react-router-dom';

const CarouselWrapper = styled.div`
  max-width: 500px;
margin:25px ;
`;
const StyledCarousel = styled(Carousel)`
  .carousel .slider-wrapper {
    margin-bottom: 180px; 
  }
`;

const Slide = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px; 
  width:100% ;

`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  
`;
const Legend = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 40px 20px 20px 20px;
`;
const IndicatorButton = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  border: none;
  margin: 0 5px;
  padding: 0;
  cursor: pointer;

  ${(props) =>
    props.isSelected &&
    css`
      background-color: yellow;
    `}
`;
export const ButtonSlide = styled.button`
width:350px ;
border-radius:10px ;
background:#FFE031 ;
border:none ;
height:44px ;
position: relative;
bottom:60px;
left:25px ;
`



const Slides = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };
  const navegar = useNavigate()
  const onClikNext = () => {
      navegar('/login')
    }

  return (
    <>
    <CarouselWrapper>
         <StyledCarousel 
                 selectedItem={activeIndex}
                 onSelect={handleSelect}
                 renderIndicator={(onClickHandler, isSelected, index, label) => (
                   <IndicatorButton
                     type="button"
                     onClick={onClickHandler}
                     isSelected={isSelected}
                     aria-label={`Slide ${index}`}
                   />
                 )}
               >
        <Slide>
          <Image src={mujer1} alt="Image 1" />
          <Legend>Choose what to eat choosing from 
a variety of restaurants from the list</Legend>
        </Slide>
        <Slide>
          <Image src={hombre1} alt="Image 2" />
          <Legend>Choose where you want to deliver
 by indicating on the map</Legend>
        </Slide>
        <Slide>
          <Image src={mujer2} alt="Image 3" />
          <Legend>We will deliver as soon as possible</Legend>
        </Slide>
        </StyledCarousel>
    </CarouselWrapper>
     <ButtonSlide onClick={onClikNext}>Next</ButtonSlide>
     </>
  );
}

export default Slides;
