import styled, { keyframes, css } from 'styled-components';
import flow8 from '../../static/images/flow8logo.png';
import flow7 from '../../static/images/flow7logo.png';
import flow6 from '../../static/images/flow6logo.png';
import flow5 from '../../static/images/flow5logo.png';
import './flowbanner.scss';

const scrolling = keyframes`
    0%{
       transform: translateX(0);     
    }
    100%{
       transform: translateX(-100vw); 
    }
`;

const Marq = styled.div`
  width: 100%;
  height: 10vw;
  background-color: #303243;
  overflow: hidden;
  display: flex;
  align-items: center;
  display: flex;
`;

const MarqUl = styled.ul`
  list-style: none;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  @media (max-width: 1024px) {
  }
  animation: ${scrolling} 12s linear infinite;
`;

const MarqLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33vw;
  flex-shrink: 0;
  white-space: nowrap;
  color: #ffffff;
  font-size: 2vw !important;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  font-weight: 400;
  line-height: 36px;
`;

const bannerMsg1 = 'LOGO';

function FlowBanner() {
  return (
    <>
      <Marq>
        <MarqUl>
          <MarqLi>
            <img class="logoImg" src={flow8} alt="" />
          </MarqLi>
          <MarqLi>
            <img class="logoImg" src={flow7} alt="" />
          </MarqLi>
          <MarqLi>
            <img class="logoImg" src={flow6} alt="" />
          </MarqLi>
          <MarqLi>
            <img class="logoImg" src={flow5} alt="" />
          </MarqLi>
          <MarqLi>
            <img class="logoImg" src={flow8} alt="" />
          </MarqLi>
          <MarqLi>
            <img class="logoImg" src={flow7} alt="" />
          </MarqLi>
          <MarqLi>
            <img class="logoImg" src={flow6} alt="" />
          </MarqLi>
          <MarqLi>
            <img class="logoImg" src={flow5} alt="" />
          </MarqLi>
        </MarqUl>
      </Marq>
    </>
  );
}

export default FlowBanner;
