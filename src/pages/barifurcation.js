import react, { useContext } from "react"
import {useHistory,NavLink} from "react-router-dom"
import {SccContext} from "../context/scc"

function Barifurcation(){
    const {setEduflag} = useContext(SccContext)
    return (
        <>
        <div>
            <NavLink to="/form" onClick={setEduflag(true)} replace>교육 신청</NavLink>
            <NavLink to="/form" onClick={setEduflag(false)} replace>인증 신청</NavLink>
        </div>
        </>

    )
}

export default Barifurcation;