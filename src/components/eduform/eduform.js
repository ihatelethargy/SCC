import "./eduform.css";

export default function EduForm(){
    return(
        <div class="formContainer">
            <form noValidate class="formBox" enctype="multipart/form-data">
                <div style={{display : 'flex'}}>
                    <div class="categoryBox"></div>
                    <div class="categoryBox"></div>
                </div>
                <div style={{display : "flex"}}>
                    <div class="categoryBox"></div>
                    <div class="categoryBox"></div>
                </div>
                <div class="inputContainer">
                    <input placeholder="성함(직위)"></input>
                    <input placeholder="연락처"></input>
                    <input placeholder="이메일 주소"></input>
                    <input placeholder="기업명(업태/종목)"></input>
                    <input multiple="multiple" type="file" name="filename[]"/>
                </div>
            </form>
        </div>
    );
}