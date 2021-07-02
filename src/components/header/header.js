import React from 'react';
import './header.scss';
import logoE from '../../img/sccLogo.png';
import ham from '../../img/hambur.png';

function Header() {
  return (
    <>
      <div className="header">
        <div className="logoWrapper">
          <img class="logo" src={logoE} alt="" />
        </div>
        <div className="menuWrapper">
          <div className="menuItem">
            <span>ABOUT</span>
          </div>
          <div className="menuItem">
            <span>EDUCATION</span>
          </div>
          <div className="menuItem">
            <span>CERTIFICATION</span>
          </div>
          <div className="menuItem">
            <span>BLOG</span>
          </div>
          <div className="menuItem hamItem">
            <img class="ham" src={ham} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
