import React, { useContext } from 'react';
import './header.scss';
import logoE from '../../img/sccLogo.png';
import ham from '../../img/hambur.png';
import { useHistory } from 'react-router';
import { SccContext } from '../../context/scc';

function Header() {
  let history = useHistory();
  const { prac } = useContext(SccContext);
  return (
    <>
      <div className="header">
        <div className="logoWrapper">
          <button
            class="button_1"
            onClick={() => {
              history.replace('/');
              window.location.reload();
            }}
          >
            <img class="logo" src={logoE} alt="" />
          </button>
        </div>
        <div className="menuBlock">
          <div className="menuWrapper">
            <div className="menuItem">
              <span>ABOUT </span>
              {/* {prac} */}
            </div>
            <div className="menuItem">
              <span>EDUCATION</span>
            </div>
            <div className="menuItem">
              <span>CERTIFICATION</span>
            </div>
            <div className="menuItem">
              <span>
                <button
                  class="blogBtn"
                  onClick={() =>
                    window.open('https://blog.naver.com/ztop021', '_blank')
                  }
                >
                  BLOG
                </button>
              </span>
            </div>
            <div className="menuItem hamItem">
              <img class="ham" src={ham} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
