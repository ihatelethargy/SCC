import { useEffect, useState } from "react";
import {useForm} from "react-hook-form";
import {send} from 'emailjs-com';
import Modal from 'react-modal';
import "./form.css";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

export default function FormSet(){
    const [files,setFiles] = useState([]);
    const [toSend, setToSend] = useState({
        username: '',
        call: '',
        email: '',
        enter: '',
      });
    const [emailText, setEmailText] = useState("이메일 형식이 잘못되었습니다.");
    const [mod,setMod] = useState(false);
    const [mm,setMm] = useState('');
    const re = /\S+@\S+\.\S+/;

      const onSubmit = (e) => {
        if(check()){
            setMm("전송중입니다.");
            setMod(true);
            e.preventDefault();
            send(
              'service_2gdjk0y',
              'template_xbhsdep',
              toSend,
              "user_zD0dr13eGKGyjsGZGCdKa",
            )
              .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMm("신청이 완료되었습니다!");
                setMod(true);
              })
              .catch((err) => {
                console.log('FAILED...', err);
                setMm("Email Server Error : 500");
                setMod(true);
              });
        }else{
            setMm("이메일 형식 혹은 빈칸이 없는 지 확인해주세요.");
                setMod(true);
        }
      };
      const usernameChange = (e) => {
          setToSend({
              ...toSend,
              username : e.target.value
          })
      }
      const callChange = (e) => {
        const regex = /^[0-9\b -]{0,13}$/;
        if(regex.test(e.target.value)){
            setToSend({
                ...toSend,
                call : e.target.value
            })
        }
      }
      const emailChange = (e) => {
          setToSend({
              ...toSend,
              email : e.target.value
          })
      }
      const enterChange = (e) => {
        setToSend({
            ...toSend,
            enter : e.target.value
        })
    }

    useEffect(()=>{
        if(toSend.call.length === 11){
            setToSend({
                ...toSend,
                call : toSend.call.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
            })
        }
        if(re.test(toSend.email)){
            setEmailText("");
        }else{
            setEmailText("이메일 형식이 잘못되었습니다.");
        }
    },[toSend.call,toSend.email]);

    const check =() =>{
        let re = /\S+@\S+\.\S+/;
        let et = re.test(toSend.email);
        let nt = toSend.username.length >0;
        let pt = toSend.enter.length >0;
        let ct = toSend.call.length >0;
        return(et&&nt&&pt&&ct);

    }

    const openModal =()=>{
        setMod(true);
    }

    const closeModal =()=>{
        setMod(false);
    }

    //files
    const filesHandler = (e) =>{
        setFiles(e.target.value);
    }

    

    return(
        <div class="formContainer">
            <form noValidate class="formBox" enctype="multipart/form-data">
                <div class="inputContainer">
                    <form noValidate target="if">
                        <input placeholder="성함(직위)"  type="text" name="username" value={toSend.username} onChange={usernameChange}/>
                        <input placeholder="휴대폰 번호" type="text" name="call" value={toSend.call} onChange={callChange}/>
                        <input placeholder="Email 주소" type="text" name="email" value={toSend.email} onChange={emailChange}/>
                        <div><p>{emailText}</p></div>
                        <input placeholder="기업형(업태/종목)"  type="text" name="enter" value={toSend.enter} onChange={enterChange}/>
                        <button onClick={onSubmit}>Submit</button>
                    </form>
                </div>
            </form>
            <div>
                <Modal
                    isOpen={mod}
                    onRequestClose={closeModal}
                    close={closeModal}
                    style={customStyles}
                    contentLabel="dev">
                        <div>{`${mm}`}</div>
                        <button onClick={closeModal}>닫기</button>
                    </Modal>
            </div>
            <iframe id="if" name="if" style={{display:'none'}}></iframe>
        </div>
    );
}
