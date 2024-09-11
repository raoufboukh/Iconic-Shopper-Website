import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";

function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="flex">
                    <div className="about-footer">
                        <h3>About Us</h3>
                        <p>Best online store to buy right now, fashion trends that matter. Reviews & clothes: Women's, Men's, Old, Young, children.
                        Best online store to buy right now, fashion trends that matter. Reviews & clothes: Women's, Men's, Old, Young, children.</p>
                    </div>
                    <div className="links-footer">
                        <ul>
                            <h3>Links</h3>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/products'}>Products</Link></li>
                            <li><Link to={'/sign-up'}>Register</Link></li>
                            <li><Link to={'/sign-in'}>Login</Link></li>
                        </ul>
                        <ul>
                            <h3>Follow Us</h3>
                            <li><a href='https://github.com/raoufboukh' target="_blank"><FaFacebook className="icon"/> Facebook</a></li>
                            <li><a href='https://github.com/raoufboukh' target="_blank"><RiTwitterLine className="icon"/> Twitter</a></li>
                            <li><a href='https://github.com/raoufboukh' target="_blank"><FaInstagram className="icon"/> Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <p className="last-phrase">Copyright Iconic online store &copy; 2024</p>
            </div>
        </footer>
    )
}

export default Footer;