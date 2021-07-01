import React from 'react';
import './footer.scss';
import logo from '../../img/sccLogoK.png';

function Footer() {
  return (
    <>
      <div className="footerWrapper">
        <div className="footerLogoWrapper">
          <img class="footerLogo" src={logo} alt="" />
        </div>
        <div className="footerContents">
          <span class="footerInfo">
            서울특별시 서초구 서초동 서초중앙로22길 117 <br />
            TEL) 02-6228-5100 Mail) info@ztop.kr <br />
            COPYRIGHTS&copy; 2021, ZEROTOONEPARTNERS <br />
            ALL rights reserved
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
