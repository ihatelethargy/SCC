import { useEffect, useState } from "react";
import {useForm} from "react-hook-form";
import {send} from 'emailjs-com';
import "./form.css";


export default function FormSet(){
    const [files,setFiles] = useState([]);
    const [toSend, setToSend] = useState({
        username: '',
        call: '',
        email: '',
        enter: '',
      });
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_2gdjk0y',
          'template_xbhsdep',
          toSend,
          "user_zD0dr13eGKGyjsGZGCdKa",
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
   

    //files
    const filesHandler = (e) =>{
        setFiles(e.target.value);
    }

    

    return(
        <div class="formContainer">
            <form noValidate class="formBox" enctype="multipart/form-data">
                <div class="inputContainer">
                    <form noValidate>
                        <input placeholder="성함(직위)"  type="text" name="username" value={toSend.username} onChange={handleChange}/>
                        <input placeholder="휴대폰 번호" type="text" name="call" value={toSend.call} onChange={handleChange}/>
                        <input placeholder="Email 주소" type="text" name="email" value={toSend.email} onChange={handleChange}/>
                        <input placeholder="기업형(업태/종목)"  type="text" name="enter" value={toSend.enter} onChange={handleChange}/>
                        <button onClick={onSubmit}>Submit</button>
                    </form>
                </div>
            </form>
        </div>
    );
}
