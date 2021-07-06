import react, { useContext } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import TopCircle from '../components/topcircle/topcircle';
import ApplyPillButton from '../components/applypillbutton/applypillbutton';
import './scss/main.scss';
import Slider from '../components/slider/Slider';
import Slogan from '../components/slogan/slogan';
import landing from '../static/images/slider1.png';
import FlowBanner from '../components/flowbanner/flowbanner';
import Kakao from "../components/kakao/kakao";

function Main() {
  return (
    <div class="mainWrapper">
      <Header />
      <div className="sec1" id="top">
        <div className="landingImgWrapper"></div>
      </div>
      <div className="sec2"></div>
      <div className="sec3"></div>
      <Kakao/>
      <TopCircle />
      <ApplyPillButton />
      <Footer />
    </div>
  );
}

export default Main;
