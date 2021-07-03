import React from 'react';
import './topbutton.scss';
import arrowTop from '../../../src/img/arrowTop.png';

function Topbutton() {
  return (
    <>
      <a href="#top">
        <div className="topButtonWrapper">
          <img class="topImg" src={arrowTop} alt="" />
          <div></div>
        </div>
      </a>
    </>
  );
}

export default Topbutton;