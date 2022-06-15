import {Navbar,Nav,Container} from 'react-bootstrap';
import './Roomie.css';
import logo from './roomie_logo.png';
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import Home from './Home.jsx';
import ForgetPassword  from './ForgetPassword';
import UpdatePassword from './Update_Password';
import MyAccount from './MyAccount';
import Cards from './Cards';
import Content from './Content';
import Temp from './Temp';
import Upload from './Upload';
import { UserContext  } from './UserContext';
import {useState} from 'react';

const Navbars = () =>{
    const [search,setSearch] = useState('');
    const [user,setUser] = useState(false);

    const Handle_login = ()=>{
      setUser(false);
    }
    const [info,setInfo] = useState({id:'',title:'',room_type:'',building_type:'',utilities_included:'',pets_allowed:'',rent:'',address:'',description:'',first_date_available:'',email:'',phone:'',images:[]});
    return(
      <Router>
        <div>
            <Navbar bg="light" expand="lg">
              <Container>
                <img src={logo} alt="BigCo Inc.logo" style={{paddingLeft:"0px" }}/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to={""} style={{paddingLeft:"230px" }} ><h5 className="Navbar" >Home</h5></Nav.Link>
                    <Nav.Link as={Link} to={"/About"} style={{paddingLeft:"50px"}} > <h5 className="Navbar">About</h5></Nav.Link>
                    <Nav.Link as={Link} to={"/Contact"} style={{paddingLeft:"50px"}}><h5  className="Navbar">Contact us</h5></Nav.Link>
                    {user ? <Nav.Link as={Link} to={"/"} style={{paddingLeft:"50px"}} onClick={Handle_login} ><h5 className="Navbar">Logout</h5></Nav.Link>: <Nav.Link as={Link} to={"/Login"} style={{paddingLeft:"50px"}} ><h5 className="Navbar">Login</h5></Nav.Link>}
                    {user ? <Nav.Link as={Link} to={"/Upload"} style={{paddingLeft:"50px"}} ><h5 className="Navbar">Upload</h5></Nav.Link>: <Nav.Link as={Link} to={"/SignUp"} style={{paddingLeft:"50px"}} ><h5 className="Navbar">SignUp</h5></Nav.Link>}
                    {user && <Nav.Link as={Link} to={"/MyAccount"} style={{paddingLeft:"50px"}} > <h5 className="Navbar">MyAccount</h5></Nav.Link>}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
        <div>
          <UserContext.Provider  value={{user,setUser}}>
              <Routes>
                <Route path="" element={<Home search={search} setSearch={setSearch}/>} />
                <Route path="/About"  element={<About />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/ForgetPassword" element={<ForgetPassword />} />
                <Route path="/UpdatePassword" element={<UpdatePassword />}/>
                <Route path="/MyAccount" element={<MyAccount />} />
                <Route path="/Cards" element={<Cards search={search} info={info} setInfo={setInfo} />} />
                <Route path="/Content" element={<Content info={info}/>}  />
                <Route path="/Temp" element = {<Temp />}   />
                <Route path="/Upload" element = {<Upload />} />
              </Routes>         
            </UserContext.Provider >
        </div>
      </Router>
    )
}
export default Navbars;