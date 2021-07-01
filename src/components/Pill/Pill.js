import react from "react"
import './Pill.css'

function Pill(){
    return (
        // <div class="main-con03-inner aos-init aos-animate" data-aos="fade-down" data-aos-delay="0" data-aos-duration="1000">
		// 				<div class="lf-con">
		// 					<ul class="main-con03-lf slick-initialized slick-slider">
        //                         <div aria-live="polite" class="slick-list draggable">
        //                             <div class="slick-track" role="listbox">
        //                                 <li class="txt slick-slide slick-active" data-slick-index="0" aria-hidden="false" tabindex="-1" role="option">
        //                                     <div>
        //                                         <p>
        //                                             <span>
        //                                                 문서 통합 관리와
        //                                                 <em class="arrow"></em>
        //                                             </span>
        //                                         </p>
        //                                     </div>
        //                                 </li>
        //                             </div>
        //                         </div>
		// 					</ul>
		// 				</div>
        //     </div>

        <div class="pill">
            <div class="comment">
            <a>편리한 관리와<br/>보안의 강화</a>
            </div>
             <div class="arrow">
                 <span></span>
            </div>
        </div>



        
    )
}

export default Pill;