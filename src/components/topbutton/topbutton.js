import React from 'react';
import './topbutton.scss';
import arrowTop from '../../../src/img/arrowTop.png';

function Topbutton() {
  return (
    <>
      <div className="topButtonWrapper">
        <img class="topImg" src={arrowTop} alt="" />
      </div>
    </>
  );
}

export default Topbutton;
