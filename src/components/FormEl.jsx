import React from "react";
import Notification from "./Notification";
export default function FormEl({title, name, type, value, placeHolder, handleChange, formError}){

    const [ isInputActive, setIsInputActive ] = React.useState(false);

    function handleFocus(){
        setIsInputActive(true);
    }
    function handleBlur(){
        setIsInputActive(false)
    }

    function renderNotification(){
        if(formError.err1){
            return(
                <Notification 
                text = "Please fill out this field"
                addClass = "small"
                type = "error"/>
            )
        }
        else if(formError.err2){
            return(
                <Notification 
                text = "Please fill out this field"
                addClass = "small"
                type = "error"/>
            )
        }
        else if(formError.err3){
            return(
                <Notification text = "Please include @ sign"
                addClass = "small"
                type = "error"/>
            )
        }
        else if(formError.err4){
            return(
                <Notification text = "messages must be larger than 30 characters long"
                addClass = "large"
                type = "error"/>
            )
        }
        else return(<div></div>)
    }
    function inputType(){
        if(name === "message"){
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
                placeholder={placeHolder}
                onChange={(event)=>handleChange(event)}
                onFocus={()=>{handleFocus()}}
                onBlur={()=>{handleBlur()}}/>
                { formError.err4 && renderNotification() }
            </div> 
            )
        }

        else if(name === "name"){
            return(
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
                placeholder={placeHolder}
                onChange={(event)=>handleChange(event)}
                onFocus={()=>{handleFocus()}}
                onBlur={()=>{handleBlur()}}/>
                { formError.err1 && renderNotification() }
            </div>
            )
        }

        else if(name === "email"){
            return(
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
                    placeholder={placeHolder}
                    onChange={(event)=>handleChange(event)}
                    onFocus={()=>{handleFocus()}}
                    onBlur={()=>{handleBlur()}}/>
                    { (formError.err2 || formError.err3) && renderNotification() }
                </div>
            )
        }
    }
    return(
        inputType()
    )
}