import react from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Topbutton from '../components/topbutton/topbutton';
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
        <div className="landingImgWrapper">{/* <img src="" alt="" /> */}</div>
      </div>
      <div className="sec2">asdf</div>
      <div className="sec3"></div>
      <Topbutton />
      <ApplyPillButton />
      <Footer />
    </div>
  );
}

export default Main;
