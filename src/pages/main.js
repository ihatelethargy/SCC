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
import Kakao from '../components/kakao/kakao';
import { Route } from 'react-router-dom';
import SecOne from '../components/section/mainsection/secone/secone';
import SecTwo from '../components/section/mainsection/sectwo/sectwo';
import SecThree from '../components/section/mainsection/secthree/secthree';

function Main() {
  return (
    <div class="mainWrapper">
      <Route component={Header} />
      <Route component={SecOne} />
      <Route component={SecTwo} />
      <Route component={SecThree} />
      <Route component={Kakao} />
      <Route component={TopCircle} />
      <Route component={ApplyPillButton} />
      <Route component={Footer} />
    </div>
  );
}

export default Main;
