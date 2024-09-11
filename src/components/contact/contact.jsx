import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";

function Contact(){
    return(
        <div className="contact">
            <div className="container">
                <div className="image">
                    <img src='./images/log.svg' alt="" />
                </div>
                <div className="info">
                    <h2>Contact Us</h2>
                    <p>Best online store to buy right now, fashion trends that matter. Reviews & clothes: Women's, Men's, Old, Young, children.</p>
                    <a href='https://github.com/raoufboukh' target="_blank"><FaFacebook className="icon"/>Facebook</a> 
                    <a href='https://github.com/raoufboukh' target="_blank"><RiTwitterLine className="icon"/>Twitter</a>   
                    <a href='https://github.com/raoufboukh' target="_blank"><FaInstagram className="icon"/>Instagram</a>
                    <div>
                        <span><BsFillTelephoneFill className="tel"/> +234 5367 736538</span>
                        <span><BsFillTelephoneFill className="tel"/> +234 5367 736538</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;