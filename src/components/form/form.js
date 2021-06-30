import "./form.css";

export default function Form(){
    return(
        <div class="formContainer">
            <form noValidate class="formBox" enctype="multipart/form-data">
                <div class="inputContainer">
                    <div><input placeholder="성함(직위)"></input></div>
                    <div><input placeholder="연락처"></input></div>
                    <div><input placeholder="이메일 주소"></input></div>
                    <div><input placeholder="기업명(업태/종목)"></input></div>
                    <input multiple="multiple" type="file" name="filename[]"/>
                </div>
            </form>
        </div>
    );
}