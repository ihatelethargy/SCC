import react from "react"
import FormSet from "../components/form/form";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Kakao from "../components/kakao/kakao";

function Eduform(){
    return (
        <>
        <div class="mainWrapper">
        <Header/>
        <div>
        <FormSet/>
        </div>
        <Kakao/>
        <Footer/>
        </div>
        </>

    )
}

export default Eduform;