import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import linkedin from "../../img/linkedin.png"
import instagram from "../../img/instagram.png"
import github from "../../img/github.png"
import facebook from "../../img/facebook.png"
import emailjs from 'emailjs-com';
import React, {useRef,useState,useContext } from "react";
import {ThemeContext} from "../../context";

const Contact = ()  => {

        const formRef=useRef();
        const [done,setDone]=useState(false);
        const theme=useContext(ThemeContext);
        const darkMode=theme.state.darkMode;

        const handleSubmit=(e)=>{
            e.preventDefault();
            emailjs.sendForm(
                "service_kx2pazc", 
                "template_fcr12rm", 
                formRef.current, 
                "user_NtNimyJsTj8AtfzDum7HS"
                )
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });

        }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={Phone}
                                alt=""
                                className="c-icon"
                            />    
                            9971592739
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Email}
                                alt=""
                                className="c-icon"
                            />    
                            saksham04102001@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Address} 
                                alt=""
                                className="c-icon"
                            />    
                            BITS Hyderabad
                        </div>
                        <div className="c-info-item">
                            <img
                                src={linkedin} 
                                alt=""
                                className="c-icon"
                            /> 
                            <a href="https://www.linkedin.com/in/saksham-sinha-9b86351b8/" target="blank"> LinkedIn</a>   
                            
                        </div>
                        <div className="c-info-item">
                            <img
                                src={github} 
                                alt=""
                                className="c-icon"
                            /> 
                            <a href="https://github.com/sakshamsss" target="blank"> GitHub</a>   
                            
                        </div>
                        <div className="c-info-item">
                            <img
                                src={instagram} 
                                alt=""
                                className="c-icon"
                            /> 
                            <a href="https://www.instagram.com/sakshamising/" target="blank"> Instagram</a>     
                            
                        </div>
                        <div className="c-info-item">
                            <img
                                src={facebook} 
                                alt=""
                                className="c-icon"
                            />    
                            <a href="https://www.facebook.com/saksham.sinha.374/" target="blank"> Facebook</a> 
                            
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        Get in touch or feel free to say anything you want to or give any general advice or comment.
                        Thanks for checking my site out.   
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
                        <textarea style={{backgroundColor: darkMode && "#333" }} rows="5" placeholder="Message" name="message"/>
                        <button>Submit</button>
                        {done && "Thank You..."}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact