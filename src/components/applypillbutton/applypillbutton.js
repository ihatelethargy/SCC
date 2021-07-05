import { whileStatement } from '@babel/types';
import react from 'react';
import { useHistory, Link } from 'react-router-dom';
import './applypillbutton.scss';

function ApplyPillButton() {
  let history = useHistory();
  return (
    <>
      <div className="applyWrapper">
        <div className="textWrapper">
          <span><Link to="/barifurcation" replace><text>교육/인증 신청하기</text></Link></span>
        </div>
      </div>
    </>
  );
}

export default ApplyPillButton;
