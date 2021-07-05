import React, { useRef } from 'react';
import sliderOne from '../../static/images/slider1.png';
import sliderTwo from '../../static/images/slider2.png';
import sliderThree from '../../static/images/slider3.png';
import './Slider.scss';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';

const contentStyle1 = {
  height: '90vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  // marginTop: '9vh',
};

const contentStyle2 = {
  height: '90vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  // marginTop: '9vh',
};

const contentStyle3 = {
  height: '90vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  // marginTop: '9vh',
};

function Slider() {
  return (
    <>
      <div className="sliderWrapper" id="sec1">
        <Carousel autoplay dotPosition="bottom">
          <div>
            <h3 style={contentStyle1}>
              <div className="slideOne">
                <img src={sliderOne} alt="" />
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle2}>
              <div className="slideOne">
                <img src={sliderTwo} alt="" />
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle3}>
              <div className="slideOne">
                <img src={sliderThree} alt="" />
              </div>
            </h3>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Slider;
