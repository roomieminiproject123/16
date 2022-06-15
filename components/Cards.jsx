import Data from './Data.js';
import './Cards.css';
import {Link,NavLink} from 'react-router-dom';
import { useEffect, useState } from 'react';
const Cards = ({search,info,setInfo})=>{    
    let flag = true ;
    const [fullData,setFullData] = useState();
    useEffect(()=>{
            fetch('https://1659-2409-4070-2e8a-64c4-3088-a3b6-74ad-18b9.in.ngrok.io/api/rooms/allrooms',
            {
                headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                },
            }
            )
            .then((response) => response.json())
            .then(json =>  setFullData(json.data))
            .catch(err => console.warn(err));
    }
    )
    const HandleClick = (item)=>{
        alert(fullData[0].email);
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
