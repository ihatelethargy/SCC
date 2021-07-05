import react, { useContext } from "react"
import FormSet from "../components/form/form";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Kakao from "../components/kakao/kakao";
import './scss/form.scss';


function EduForm(){
    return (
        <>
            <div class="formWrapper">
            <Header/>
            <div class="sec1">

            </div>
            <div class="sec2">
                <FormSet/>
                
            </div>
        </div> 
        <p>에듀폼</p>
         <Kakao/>
         <Footer/>
        </>

    )
}

export default EduForm;