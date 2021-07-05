import react, { useContext } from "react"
import FormSet from "../components/form/form";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Kakao from "../components/kakao/kakao";
import './scss/form.scss';

import {SccContext} from "../context/scc";

function Form(){
    const {eduflag} = useContext(SccContext);
    return (
        <>
        {
            eduflag? 
            <div class="formWrapper">
            <Header/>
            <div class="sec1">

            </div>
            <div class="sec2">
                <FormSet/>
            </div>
        </div> :
        <div class="formWrapper">
        <Header/>
        <div class="sec1">

        </div>
        <div class="sec2">
            <FormSet/>
        </div>
        
    </div>
        }
         <Kakao/>
         <Footer/>
        </>

    )
}

export default Form;