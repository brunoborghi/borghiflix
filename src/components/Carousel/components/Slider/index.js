/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-family: "Font Awesome 5 Free"; 
      font-size: 30px;
      color: var(--primary);
      font-weight: 900; 
    }
  }
  
  .slick-prev {
    left: 0;
    &:before {
      content: "\f053";
    }
  }

  .slick-next {
    right: 10px;
    &:before {
      content: "\f054";
    }
}
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: true,
      variableWidth: true,
      adaptiveHeight: true,
      rtl: false
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;