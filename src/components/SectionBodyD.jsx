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
        // Process form data here (e.g., send it to a server)
        console.log(formData);
        writeMessageToDb(formData.name, formData.email, formData.message)
        // Optionally, reset form fields after submission
        setTimeout(()=>{
            setFormData({
                name: '', 
                email: '',
                message: ''
            });
            setIsBtnClicked(false);
        },1000)
        
    };
    
    function handleHover(x){
        setIsBtnHovered(x);
        return;
    }
    
    function activeClassSetter(x, y){
        if(x || y){
            return ('special-btn-clicked');
        }
        else return('special-btn-not-clicked');
    }
    
    // console.log(formData)
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
                            <div className = {`${activeClassSetter(isBtnClicked, isBtnHovered)}`}/>
                            <p className={`btn-p ${isBtnClicked || isBtnHovered? 'btn-clicked':''}`}>
                                SHOOT
                            </p>
                        </button>
                    </form>
                </div>
            </section>
        </Element>
    )
}