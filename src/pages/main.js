import react from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import './scss/main.scss';

function Main() {
  return (
    <div class="mainWrapper">
      <Header />
      <div className="sec1"></div>
      <div className="sec2"></div>
      <div className="sec3"></div>
      <Footer />
    </div>
  );
}

export default Main;
