import "./intro.css";
import Me from '../../img/Me.png';


const Intro=()=>{
    return(
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is </h2> 
                    <h1 className="i-name">Saksham Sinha</h1> 
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Programmer</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Software developer</div>
                            <div className="i-title-item">Software developer</div>
                            <div className="i-title-item">Chef</div>
                        </div>
                    </div>
                    <p className="i-desc">
                    ECE sophomore at BITS Pilani, Hyderabad Campus. Interested in various aspects of computer science and electronics. I just got started with web development. Basic proficiency in Python and Javascript and intermediate proficiency in C and C++. 
                    </p>
                </div>
                
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img"/>
            </div>
        </div>
    )
}

export default Intro;