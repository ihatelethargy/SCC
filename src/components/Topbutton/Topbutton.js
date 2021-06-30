// import React, {Component} from "react";

// export default class Topbutton extends Component{
//     constructor(props){
//         super(props);
//             this.state = {
//                 is_visible : false
//             };    
//     }

//     componentDidMount(){
//         var scrollComent = this;
//         document.addEventListener("scroll", function(e){
//           scrollComent.toggleVisibility();  
//         });
//     }

//     toggleVisibility(){
//         if(window.pageYOffset>300){
//             this.setState({
//                 is_visible:true
//             });
//         }else{
//             this.setState({
//                 is_visible:false
//             });
//         }
//     }

//     scrollToTop(){
//         window.scrollTo({
//             top:0,
//             behavior:"smooth"
//         });
//     }

//     render(){
//         const{is_visible}=this.state;
//         return(
//             <div className="back-to-top show-back-to-top">
//                 {is_visible && (
//                     <div className="top" onClick={() => this.scrollToTop()}>
//                         Top
//                     </div>
//                 )}
//             </div>
//         );
//     }



// }

import react from "react"
import './Topbutton.css'

function Topbutton(){
    return (
        <div class="topbutton">
            <p>↑</p>
        </div>
        
    )
}

export default Topbutton;