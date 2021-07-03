import React from 'react';
import './topbutton.scss';
import arrowTop from '../../../src/img/arrowTop.png';

function TopCircle() {
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

export default TopCircle;