import react from "react"

import Kakao from "../components/kakao/kakao"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
function Detail(){
    return (
        <div>
            <Header/>
            <p>Detail</p>
            <Kakao/>
            <Footer/>
        </div>
    )
}

export default Detail;