
import React, { useRef } from "react";


export default function RegForm(props) {
    var name=useRef() ;
    var email=useRef() ;

    const onRegButtonClick = () => {
        console.log(name.current.value, email.current.value) ;
        props.insertFunc( {name:name.current.value, email:email.current.value } )

        name.current.value=''
        email.current.value=''
    }

    return (
        <div className="reg_form">
            <label>
               <input name="name" ref={name} placeholder="이름"></input>
                <input name="email" ref={email} placeholder="이메일"></input>
            </label>
            <button name="regBtn" onClick={onRegButtonClick}>등록</button>
        </div>
    )
}
