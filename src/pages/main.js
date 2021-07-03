import react from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Topbutton from '../components/Topbutton/topbutton';
import ApplyPillButton from '../components/applypillbutton/applypillbutton';
import './scss/main.scss';
import Slider from '../components/slider/Slider';
import Slogan from '../components/slogan/slogan';
import landing from '../static/images/slider1.png';
import FlowBanner from '../components/flowbanner/flowbanner';

function Main() {
  return (
    <div class="mainWrapper">
      <Header />
      <div className="sec1" id="top">
        <div className="sliderWrapper">
          <Slider />
        </div>
        <div className="landingImgWrapper">
          <img src={landing} alt="" />
        </div>
      </div>
      <div className="sec2">
        {/* <Slogan /> */}
        <FlowBanner />
      </div>
      <div className="sec3"></div>
      <Topbutton />
      <ApplyPillButton />
      <Footer />
    </div>
  );
}

export default Main;
