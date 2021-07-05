import react from "react"
import {useHistory} from "react-router-dom"
import nf from "../img/Notfound_img.png"

function Notfound(){
    let history = useHistory();
    return (
        <div>
            <img src={nf} width='500' height='500'/>
            <button onClick={()=>{
                history.replace('/');
            }}>메인페이지로 돌아가기</button>
        </div>
    )
}

export default Notfound;