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
            <span>소개</span>
          </div>
          <div className="menuItem">
            <span>교육안내</span>
          </div>
          <div className="menuItem">
            <span>인증항목</span>
          </div>
          <div className="menuItem">
            <span>Blog</span>
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
