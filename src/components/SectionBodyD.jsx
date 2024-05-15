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
        // writeMessageToDb(formData.name, formData.email, formData.message)
 
        setTimeout(()=>{
            // setFormData({
            //     name: '', 
            //     email: '',
            //     message: ''
            // });
            setIsBtnClicked(false);
            setIsBtnHovered(false);
        },1000)
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
        if(formData.name){
            if(formData.email){
                if(formData.email.includes("@")){
                    if(formData.message.length >= 30){
                        console.log("all fields are true")
                        //send data to db and reset button style
                    }
                    else {console.log("messages must be larger than 30 characters long")}
                }
                else {console.log("email must include @ character")}
            }
            else {console.log("please fill out email")}
        }
        else {
            console.log("please fill out name")
            //display notification
        }
        
    };
    
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
                                handleChange={handleChange}/>

                                <FormEl 
                                title='Email Address:'
                                name='email'
                                type='text'
                                value={formData.email}
                                placeHolder='Enter your email address'
                                handleChange={handleChange}/>
                        </div>

                        <FormEl 
                        title='Your Message:'
                        name='message'
                        type='textArea'
                        value={formData.message}
                        placeHolder='Hi, I think we need to design a website for our products at Company X, How soon can you hop on to discuss this?'
                        handleChange={handleChange}/>

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