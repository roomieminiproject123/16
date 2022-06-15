import logo from './B3.webp';
import {Nav} from 'react-bootstrap';
import './Roomie.css';
import {Link} from 'react-router-dom';
import './Home.css';

const Home = ({search,setSearch}) =>{
    const HandleChange = (e)=>{
        setSearch(e.target.value);
    }
    return(
        <div id="Home_flex"> 
                <div>
                    <p id="Home_p1">Find Your New Place with </p>
                    <b id="Home_p2">roomie!</b>
                    <p id="Home_p3">Easy as making friends, with roomie you can look for</p>
                    <p id="Home_p4"> many rooms available across the country.</p>
                <div id="search_flex">
                    <input placeholder="Enter a city" className="Location" id="inpt_Home" onChange={HandleChange} />
                    <Nav.Link as={Link} to={'/Cards'} id="Search_button">Search</Nav.Link>
                </div>
                </div>
                <div>
                    <img src={logo} alt="Error" id="Home_img"/>
                </div>
                
        </div>
    )
}
export default Home;