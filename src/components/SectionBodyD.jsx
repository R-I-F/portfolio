import React from "react";
import { Element } from "react-scroll";
import '../../public/styles/sectionBodyD.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import FormEl from "./FormEl";

export default function SectionBodyD(){
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [ isBtnClicked, setIsBtnClicked ] = React.useState(false);
    const [ isBtnHovered, setIsBtnHovered ] = React.useState(false);


    function handleChange(event){
        console.log(formData)
        const { name, value } = event.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    }

    const handleSubmit = (event) => {
        setIsBtnClicked(prev=>!prev)
        event.preventDefault();
        // Process form data here (e.g., send it to a server)
        console.log(formData);
        // Optionally, reset form fields after submission
        setFormData({
          name: '', 
          email: '',
          message: ''
        });
    };

    function handleHover(x){
        console.log('hovered');
        setIsBtnHovered(x);
        return;
    }

    function activeClassSetter(x, y){
        if(x || y){
            return ('special-btn-clicked');
        }
        else return('special-btn-not-clicked');
    }

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