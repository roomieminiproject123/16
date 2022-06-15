import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from "./Login.png";
import './Login1.css';
import {useState} from 'react';
import { useContext } from "react";
import { UserContext } from "./UserContext";

const Login = ()=>{
   
    const [error,setError] = useState(false);

    const [email,setEmail] = useState();
    const [pass,setPass] = useState();

    const {user,setUser} = useContext(UserContext);

    const HandleClick = (e)=>{
        e.preventDefault();
        if(pass.length>7 && email.length>2){
            window.location.href = window.location.origin;
            setError(false);
            setUser(true);
        }
        else{
             setError(true);
             
        }
    }
    return(
       <div id="container2">
            <div style={{display:"flex"}}>
                <div>   
                        <b><h1 id="Sih">Sign in</h1></b>
                        <p className='S1'>Don't have an account ?<Nav.Link as={Link} to={"/SignUp"}  id="snv"> SignUp </Nav.Link></p>
                        <form>
                            <div style={{paddingTop:"30px"}}>
                                {error && <h7 style={{color:"red"}}>⚠Please enter correct details</h7>}
                                <p>E-mail:</p>
                                <input type="email" placeholder='email@email.com' className='inpT' onChange={(e)=>setEmail(e.target.value)} required/>
                                <br></br>
                                <br></br>
                                <p>Password:</p>
                                <input type="password" placeholder='**********' className='inpT' onChange={(e)=>setPass(e.target.value)}required/>
                                <br></br>
                                <Nav.Link id='FPP' as={Link} to={"/ForgetPassword"}>Forgot Password?</Nav.Link>
                                <br></br>
                                <button onClick={HandleClick} className='buttonSig'>Submit</button>
                                <br></br>  
                                <br></br>          
                                
                            </div>
                        </form>
                </div>
                <div id="image_Login">
                    <img src={logo} alt="Error" id="imageLogin"/>
                </div>
            </div>
        </div>
    )
}
export default Login;