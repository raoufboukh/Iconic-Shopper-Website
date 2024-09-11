import { FaUser } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { FaCartShopping } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function Navbar(){
    const cards = useSelector(state => state.cards);
    const [menu,setMenu] = useState(false);
    return(
        <header>
            <div className="container">
                <div className="logo">
                    <h1>Iconic<span>Online store...</span></h1>
                </div>
                <CgMenuGridO className="menu" onClick={() => setMenu(!menu)}/>
                <div className={menu ? "links show" : 'links'}>
                    <ul>
                        <li><Link to="/" onClick={() => setMenu(!menu)}>Home</Link></li>
                        <li><Link to="/products" onClick={() => setMenu(!menu)}>Products</Link></li>
                        <li><Link to="/contact" onClick={() => setMenu(!menu)}>Contact</Link></li>
                        <li className="account"><FaUser className="user"/>Account<GoChevronDown/></li>
                        <ul className="list-sign">
                            <li><Link to={'/sign-in'} onClick={() => setMenu(!menu)}>Login</Link></li>
                            <li><Link to={'/sign-up'} onClick={() => setMenu(!menu)}>Register</Link></li>
                        </ul>
                        <li><Link to="/cart" onClick={() => setMenu(!menu)}><FaCartShopping className="icon-cart"/><span>{cards.length}</span></Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar;