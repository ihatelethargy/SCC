import react, { useContext } from "react"
import {useHistory,NavLink} from "react-router-dom"
import {SccContext} from "../context/scc"
import Kakao from "../components/kakao/kakao"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"

function Barifurcation(){
    return (
        <>
        <div>
            <Header/> 
            <Footer/>
            <NavLink to="/eduform">교육 신청</NavLink>
            <NavLink to="/form">인증 신청</NavLink>
            <Kakao/>
            
            
        </div>
        </>

    )
}

export default Barifurcation;