import React from "react";
import { Element } from "react-scroll";
import { fireBaseContext } from "../context/fireBaseProvider";
import '../../public/styles/sectionBodyD.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import FormEl from "./FormEl";

export default function SectionBodyD({name}){
    const writeMessageToDb = React.useContext(fireBaseContext).writeMessageToDb
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [ isBtnClicked, setIsBtnClicked ] = React.useState(false);
    const [ isBtnHovered, setIsBtnHovered ] = React.useState(false);
    const errorObj = {
        err1: false,
        err2: false,
        err3: false,
        err4: false
    }
    const [ formError, setFormError] = React.useState(errorObj)


    function handleChange(event){
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    
    const handleSubmit = (event) => {
        setIsBtnClicked(true);
        event.preventDefault();
        function proceed(){
            writeMessageToDb(formData.name, formData.email, formData.message)
            setTimeout(()=>{
                setFormData({
                    name: '', 
                    email: '',
                    message: ''
                });
                setIsBtnClicked(false);
                setIsBtnHovered(false);
            },1000)
        }
 
        if(formData.name){
            if(formData.email){
                if(formData.email.includes("@")){
                    if(formData.message.length >= 30){
                        // all fields are true
                        proceed()
                    }
                    else {
                        // messages must be larger than 30 characters long
                        setFormError({...errorObj, err4: true})
                        resetFormError();
                        //error4
                    }
                }
                else {
                    // email must include @ character
                    setFormError({...errorObj, err3: true})
                    resetFormError();
                    //error3
                }
            }
            else {
                // please fill out email
                setFormError({...errorObj, err2: true})
                resetFormError();
                //error 2
            }
        }
        else {
            // please fill out name
            //error 1
            setFormError({...errorObj, err1: true})
            resetFormError();
        }
        
    };
    
    /*
    1. check if name field filled 
        true: check if email filled 
        false promp user to fill email
        true: check if email field contains @
        false: prompt user that emails must include @
        true: check if message at least contains 30 characters 
                false: prompt user that message should at least contain 30 characters
                    true send message to database
                        true: notify user that the message has been sent
                        false: notify user that a problem happened while sending the message
    */
    
    function resetFormError(){
        setTimeout(()=>{
            setFormError(errorObj);
        }, 2000)
    }
    
    function handleHover(x){
        setIsBtnHovered(x);
        return;
    }
    
    function renderBtn(){
        if(isBtnClicked || isBtnHovered){
            return(
                <>
                    <div className = 'special-btn-clicked'/>
                    <p className='btn-p btn-clicked'>SHOOT</p>
                </>
            )
        }
        else {
            return(
                <>
                    <div className = 'special-btn-not-clicked'/>
                    <p className='btn-p'>SHOOT</p>
                </>
            )
        }
    }
    
    // console.log(formData)
    // console.log(isBtnClicked);
    console.log(formError);
    return(
        <Element
        name = {name}>
            <section
            className="section-body-d-container">
                <div className="lanes-d">
                    <h1 className= 'body-d-title' >Send me a message!</h1>
                    <p className="lane-info-d">Got a question or proposal, or just want to say hello? Go ahead.</p>
                    <form className="form-container">
                        <div className="form-info-1">
                                <FormEl 
                                title='Your Name:'
                                name='name'
                                type='text'
                                value={formData.name}
                                placeHolder='Enter your name'
                                handleChange={handleChange}
                                formError = {formError}/>

                                <FormEl 
                                title='Email Address:'
                                name='email'
                                type='text'
                                value={formData.email}
                                placeHolder='Enter your email address'
                                handleChange={handleChange}
                                formError = {formError}/>
                        </div>

                        <FormEl 
                        title='Your Message:'
                        name='message'
                        type='textArea'
                        value={formData.message}
                        placeHolder='Hi, I think we need to design a website for our products at Company X, How soon can you hop on to discuss this?'
                        handleChange={handleChange}
                        formError = {formError}/>

                        <button 
                        className = {`special-btn`}
                        onClick={(event)=>handleSubmit(event)}
                        onMouseEnter={()=>handleHover(true)}
                        onMouseLeave={()=>handleHover(false)}>
                            { renderBtn() }
                        </button>
                    </form>
                </div>
            </section>
        </Element>
    )
}