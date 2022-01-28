import "./about.css"
import  dp from '../../img/dp.png';
import Award from "../../img/award.png"

const About=()=>{
    return(
        <div className="a">
            <div className="a-left">
                <div className="a-bg"></div> 
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img 
                        src={dp}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>

            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">I am an aspiring software engineer, with a knack of development and problem solving </p>
                <p className="a-desc">
                    I have been regularly coding for around 6 months and am quite interested in Web Develoment and Machine Learning
                    <br/>
                    <br/>
                    Languages I know-
                    <br/>
                    *C
                    <br/>
                    *C++
                    <br/>
                    *JavaScript
                    <br/>
                    *Pythod(Basic)
                    <br/>
                    <br/>
                    <br/>
                    

                    Technologies I am familiar with-
                    <br/>
                    *NodeJS
                    <br/>
                    *ExpressJS
                    <br/>
                    *React
                    <br/>
                    *MongoDB with Mongoose
                    <br/>
                    *Git/Git Hub
                    <br/>

                </p>
                <div className="a-award">
                    <img 
                        src={Award}
                        alt=""
                        className="a-award-img"
                    />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">
                            Hobby-
                        </h4>
                        <p className="a-award-desc">
                            Really into cooking and all aspects of it
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About