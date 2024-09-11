import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(){
    const [email,setEmail] = useState('');
    const [pas,setPas] = useState('');
    const navigate = useNavigate();
    const [errorEm, setErrE] = useState('');
    const [errorPas, setErrP] = useState('')
    return(
        <div className="login">
            <div className="container">
                <div className="image">
                    <img src='./images/log.svg' alt="" />
                </div>
                <div className="info">
                    <h2>Login</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        if((email === '' && !email.includes('@')) && pas.length < 8){
                            setErrE('Email address is invalid.');
                            setErrP('Password should be between 8 to 20 characters long.');
                            const inp = document.querySelectorAll('div input');
                            for(let i = 0;i < inp.length;i++){
                                inp[i].classList.add('border');
                            }
                        }else{
                            navigate('/')
                        }
                    }}>
                        <div>
                            <label htmlFor="em">Email address</label>
                            <input type="email" id="em" placeholder="Enter Email address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <p style={{color:'#ff523b',fontSize:'13px'}}>{errorEm}</p>
                        </div>
                        <div>
                            <label htmlFor="pas">Password</label>
                            <input type="password" id="pas" placeholder="Enter user password" value={pas} min={8} max={20} onChange={(e) => setPas(e.target.value)}/>
                            <p style={{color:'#ff523b',fontSize:'13px'}}>{errorPas}</p>
                        </div>
                        <input type="Submit" value={'Login'} />
                        <p>Don't have an account ? <Link to={'/sign-up'}>Register here</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;