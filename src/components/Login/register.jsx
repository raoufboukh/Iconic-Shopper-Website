import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register(){
    const [email,setEmail] = useState('');
    const [pas,setPas] = useState('');
    const [name,setName] = useState('');
    const navigate = useNavigate();
    const [errorNm, setErrN] = useState('');
    const [errorEm, setErrE] = useState('');
    const [errorPas, setErrP] = useState('')
    return(
        <div className="login">
            <div className="container">
                <div className="image">
                    <img src='./images/log.svg' alt="" />
                </div>
                <div className="info">
                    <h2>Register</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        if(((email === '' && !email.includes('@')) && pas.length < 8 )&& name === ''){
                            setErrN('Name is invalid');
                            setErrE('Email address is invalid.');
                            setErrP('Password should be between 8 to 20 characters long.');
                            const inp = document.querySelectorAll('div input');
                            for(let i = 0;i < inp.length;i++){
                                inp[i].classList.add('border');
                            }
                        }else{
                            navigate('/sign-in')
                        }
                    }}>
                        <div>
                            <label htmlFor="text">Username</label>
                            <input type="text" id="text" placeholder="Enter Username" onChange={(e) => setName(e.target.value)}/>
                            <p style={{color:'#ff523b',fontSize:'13px'}}>{errorNm}</p>
                        </div>
                        <div>
                            <label htmlFor="em">Email address</label>
                            <input type="email" id="em" placeholder="Enter Email address" onChange={(e) => setEmail(e.target.value)}/>
                            <p style={{color:'#ff523b',fontSize:'13px'}}>{errorEm}</p>
                        </div>
                        <div>
                            <label htmlFor="pas">Password</label>
                            <input type="password" id="pas" placeholder="Enter user password" min={8} max={20} onChange={(e) => setPas(e.target.value)}/>
                            <p style={{color:'#ff523b',fontSize:'13px'}}>{errorPas}</p>
                        </div>
                        <input type="Submit" value={'Sign Up'}  />
                        <p>Already have an account ? <Link to={'/sign-in'}>Login here</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;