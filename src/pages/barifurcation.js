import react, { useContext } from "react"
import {useHistory,NavLink} from "react-router-dom"
import {SccContext} from "../context/scc"

function Barifurcation(){
    return (
        <>
        <div>
            <NavLink to="/eduform" replace>교육 신청</NavLink>
            <NavLink to="/form" replace>인증 신청</NavLink>
        </div>
        </>

    )
}

export default Barifurcation;