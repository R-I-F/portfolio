import React from "react";

export default function FormEl({title, name, type, value, placeHolder, handleChange, addClass}){

    const [ isInputActive, setIsInputActive ] = React.useState(false);

    function handleFocus(){
        setIsInputActive(true);
    }
    function handleBlur(){
        setIsInputActive(false)
    }
    function inputType(){
        if(type === 'textArea'){
            return(
            <div className="form-el">
                <label 
                className={`form-label ${isInputActive? 'focused':''}`}
                htmlFor={name}>
                {title}
                </label>
                <textarea
                className={`form-input text-area ${isInputActive? 'focused':''}`}
                id={name}
                name={name}
                type={type}
                value={value}
                placeHolder={placeHolder}
                onChange={(event)=>handleChange(event)}
                onFocus={()=>{handleFocus()}}
                onBlur={()=>{handleBlur()}}/>
            </div> 
            )
        }
        else return(
            <div className="form-el">
                <label 
                className={`form-label ${isInputActive? 'focused':''}`}
                htmlFor={name}>
                {title}
                </label>
                <input
                className={`form-input ${isInputActive? 'focused':''}`}
                id={name}
                name={name}
                type={type}
                value={value}
                placeHolder={placeHolder}
                onChange={(event)=>handleChange(event)}
                onFocus={()=>{handleFocus()}}
                onBlur={()=>{handleBlur()}}/>
            </div>
        )
    }
    return(
        inputType()
    )
}