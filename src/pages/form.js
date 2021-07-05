import react from "react"
import FormSet from "../components/form/form";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Kakao from "../components/kakao/kakao";
import './scss/form.scss';

function Form(){
    return (
        <>
        <div class="formWrapper">
            <Header/>
            <div class="sec1">

            </div>
            <div class="sec2">
                <FormSet/>
            </div>
            <Kakao/>
            <Footer/>
        </div>
        </>

    )
}

export default Form;