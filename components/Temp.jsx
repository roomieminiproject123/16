
import Data from './Data.js';
import './Cards.css';
import {Link,NavLink} from 'react-router-dom';
const Cards = ({search,info,setInfo})=>{    
    let flag = true ;
    const HandleClick = (item)=>{
        setInfo({id:item.id,title:item.title,room_type:item.room_type,building_type:item.building_type,utilities_included:item.utilities_included,pets_allowed:item.pets_allowed,rent:item.rent,address:item.address,description:item.description,first_date_available:item.first_date_available,email:item.email,phone:item.phone,images:item.images});
    }

    return(
        <div> 
            <div>
            <div id="head_Card">
                <p>Searching rooms in:</p>
                <div> {search ? <h4>{search}</h4> : <h4>Everywhere</h4>} </div>
            </div>
            
            <div id="Cards_flex">
                {Data.map((item) =>{
                    if(item.address.includes(search)){
                    return(
                    <div className="card">
                        {flag = false}
                        <NavLink as={Link} to={'/Content'} onClick={()=>HandleClick(item)}><img src={item.images[0]} alt="none" id="Card_image" /></NavLink>
                        <div id="info">
                            <p id="card_p1">{item.room_type}</p>
                            <h4 ><b id="card_p2">{item.title}</b></h4> 
                            <p id="card_p4">{item.address}</p>
                            <p id="card_p5"><b>${item.rent}</b> /month</p>
                            {
                                (item.utilities_included  ||  item.pets_allowed )&&
                                <div id="card_p6">
                                        {item.utilities_included && <div id="card_p7">Utilities Included!</div>}
                                        {item.pets_allowed && <div id="card_p8">pets allowed</div>}
                                </div> 
                            }
                        </div>
                    </div>)}                    else{
                        return <div></div>
                    }
                }
                )}                
                {
                        flag && <div id="no_rooms_container"><h1 id="no_rooms"> 😐Oops no such locations </h1></div> 
                }
                
            </div>
        </div> 
        </div>
    )
}
export default Cards;




 // fetch('https://bb61-2409-4070-201f-fbce-dc2-dab9-6647-9840.in.ngrok.io/api/rooms/allrooms')
 // .then(response => response.json())
 // .then(json => console.log(json))
            










































// import './Upload.css'
// import {useState} from 'react';

// const Temp = () =>{
//     const True = true;
//     const False = false;
//     const [title,setTitile] = useState('');
//     const [Rent,setRent] = useState('');
//     const [Address,setAddress] = useState('');
//     const [Description,setDescription] = useState('');
//     const [Date,setDate] = useState('');
//     const [Email,setEmail] = useState('');
//     const [EmailError,setEmailError] = useState(false);
//     const [Phone,setPhone] = useState('');
//     const [PhoneError,setPhoneError] = useState(false);
//     const [picture, setPicture] = useState([]);
//     const [Utilites,setUtilities] = useState(false);
//     const [petsallowed,setPetsallowed] = useState(false);
//     const [room,setRoom] = useState("Shared");
//     const [building,setBuilding] = useState("Home");
//     const HandleClick = (e)=>{
//         e.preventDefault();
//         if (/^[a-zA-Z0-9]+@gmail.com+$/.test(Email)) {
//                     setEmailError(false);
//             }
//             else{
//                 setEmailError(true);  
//         }   
//         if(Phone.length!==10){
//             setPhoneError(true);
//         }
//         else{
//             setPhoneError(false);
//         }
//         if(!EmailError && !PhoneError){
//             let payload = {title:title,room_type:room,building_type:building,utilites_included:Utilites,pets_allowed:petsallowed,rent:Rent,address:Address,description:Description,first_data_available:Date,email:Email,phone:Phone,images:picture}

//             fetch("https://bb61-2409-4070-201f-fbce-dc2-dab9-6647-9840.in.ngrok.io/api/rooms/addnewroom",{
//                 method:"POST",
//                 body:payload,
//             }).then(res => res.json())
//              .then(data => console.log(data))
//              .catch(err => console.log(err));
//         }
//     }
//     const onChangePicture = e => {
//         console.warn('picture: ', picture);
//         setPicture((p)=>[...p,e.target.files[0].name]);
//         console.warn(e.target.files[0].name);
//     };
//     return(
//         <div>
//         <h3 id="head">New Listing</h3>
//         <form id="form">
//             <div id="Upload">
//                 <br></br>
//                 <span id="imgUpload">images:</span>
//                 <br></br>
//                 <br></br>
//                 <input type="file" name="images" className='file' onChange={e => onChangePicture(e)} />
//                 <br></br>
//                 <br></br>
//                 <input type="file" name="images" className='file' onChange={e => onChangePicture(e)} />
//                 <br></br>
//                 <br></br>
//                 <input type="file" name="images" className='file' onChange={e => onChangePicture(e)}/> 
//                 <br></br>
//                 <br></br>
//                 <h5> Listing Information:</h5>
//                 <hr style={{color:"orange"}}></hr>
//                 <label>Title:</label>
//                 <br></br>
//                 <br></br>
//                 <input type="text" className="inputUpload"  name="title" required onChange={(e)=>setTitile(e.target.value)}/>
//                 <br></br>
//                 <br></br>
//                 <div id="flex_div">
//                     <div id="f1">
//                         <label for="room">Room:</label>
//                         <br></br>
//                         <select name="room_type" id="room" onChange={(e)=>setRoom(e.target.value)}>
//                             <option value="Shared">Shared</option>
//                             <option value="Private">Private</option>
//                         </select>
//                     </div>
//                     <div id="f1">
//                         <label>Building Type:</label>
//                         <br></br>
//                          <select name="building_type" id="building" onChange={(e)=>setBuilding(e.target.value)}>
//                             <option value="Home">Home</option>
//                             <option value="Apartment">Apartment</option>
//                             <option value="Condo">Condo</option>
//                         </select>
//                     </div >
//                     <div id="f1">
//                         <label>Utilities Included?</label>
//                         <br></br>
//                         <input type="radio"  id="Yes" name="utilites_included" value="true" onChange={(e)=>setUtilities(true)}/>
//                         <label for="Yes">Yes</label>
//                         <input type="radio" id="No" name="utilites_included" value="false" onChange={(e)=>setUtilities(false)}/>
//                         <label for="No">No</label>  
//                     </div>
//                     <div id="f1">
//                         <label>Pets Allowed?</label>
//                         <br></br>
//                         <input type="radio" id="Yes1" name="pets_allowed" defaultValue={True} onChange={(e)=>setPetsallowed(true)}/>
//                         <label for="Yes">Yes</label>
//                         <input type="radio" id="No1" name="pets_allowed" value="false" onChange={(e)=>setPetsallowed(false)}/>
//                         <label for="No">No</label>  
//                     </div>
//                 </div>
//                 <br></br>
//                 <br></br>
//                 <label>Rent:</label>
//                 <br></br>
//                 <br></br>
//                 <input type="number" name='rent' className="inputUpload" required onChange={(e)=>setRent(e.target.value)}/>
//                 <br></br>
//                 <br></br>
//                 <label>Address:</label>
//                 <br></br>
//                 <br></br>
//                 <input type="text" name='address' className="inputUpload" required  onChange={(e)=>setAddress(e.target.value)}/>
//                 <br></br>
//                 <br></br>  
//                 <label>Description about your space:</label>
//                 <br></br>
//                 <br></br>
//                 <input type="text" name='description' className="inputUpload" required onChange={(e)=>setDescription(e.target.value)}/>
//                 <br></br>
//                 <br></br>
//                 <label>First Date Available:</label>
//                 <br></br>
//                 <br></br>
//                 <input type="Date" name='first_date_available' className="inputUpload" required onChange={(e)=>setDate(e.target.value)}/>
//                 <br></br>
//                 <br></br>
//                 <h5>Contact:</h5>
//                 <hr style={{color:"orange"}}></hr>
//                 <label>E-mail:</label>
//                 <br></br>
//                 <br></br>
//                 <input type="email" name='email' className="inputUpload" required onChange={(e)=>setEmail(e.target.value)}/>
//                 <br></br>
//                 {EmailError && <h7 className="Error_Upload">⚠ Please provide a valid Email.</h7>}
//                 <br></br>
//                 <label>Phone:</label>
//                 <br></br>
//                 <br></br>
//                 <input type="number" name='phone' maxLength="10" placeholder="xxxxxxxxxx" className="inputUpload" required onChange={(e)=>setPhone(e.target.value)}/>
//                 {PhoneError && <h7 className="Error_Upload">⚠ Please provide a valid Number.</h7>}
//                 <br></br>
//                 <br></br>
//                 <button className='SubmitUpload' onClick={HandleClick} onSubmit={HandleClick}>Submit</button>
//                 <br></br>
//                 <br></br>
//             </div>
//           </form>
//         </div>
//     )
// }

// export default Temp;



//             //   console.warn(title,Rent,Address,Description,Date,Email,Phone,picture,Utilites,petsallowed,room,building);
//             //   let data = {title:title,rent:Rent,address:Address,description:Description,date:Date,email:Email,phone:Phone}
//             //   fetch('https://acdc-2409-4070-201f-fbce-dc2-dab9-6647-9840.in.ngrok.io/link/api/rooms/addnewroom', {
//             //   method: 'POST',
//             //   body: JSON.stringify(data),
//             //   headers: {
//             //   'Content-type': 'application/json; charset=UTF-8',
//             //   },})
//             //   .then((response) => response.json())
//             //   .then((json) => console.log(json));

//             // const form  = document.getElementById('form');
//             // const prepayload = new FormData(form);
//             // const payload = new URLSearchParams(prepayload);