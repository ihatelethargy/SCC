import react from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Topbutton from '../components/topbutton/topbutton';
import ApplyPillButton from '../components/applypillbutton/applypillbutton';
import './scss/main.scss';

function Main() {
  return (
    <div class="mainWrapper">
      <Header />
      <div className="sec1" id="top"></div>
      <div className="sec2"></div>
      <div className="sec3"></div>
      <Topbutton />
      <ApplyPillButton />
      <Footer />
    </div>
  );
}

export default Main;
