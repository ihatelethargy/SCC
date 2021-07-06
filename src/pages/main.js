import react, { useContext } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import TopCircle from '../components/topcircle/topcircle';
import ApplyPillButton from '../components/applypillbutton/applypillbutton';
import Kakao from '../components/kakao/kakao';
import SecOne from '../components/section/mainsection/secone/secone';
import SecTwo from '../components/section/mainsection/sectwo/sectwo';
import SecThree from '../components/section/mainsection/secthree/secthree';
import './scss/main.scss';

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
