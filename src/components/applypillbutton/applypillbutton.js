import react from 'react';
import { useHistory } from 'react-router';
import './applypillbutton.scss';

function ApplyPillButton() {
  let history = useHistory();
  return (
    <>
      <div className="applyWrapper">
        <div className="textWrapper">
          <span><button class="button_1" onClick={()=>{history.replace("/barifurcation");}}>교육/인증 신청하기</button></span>
        </div>
      </div>
    </>
  );
}

export default ApplyPillButton;
