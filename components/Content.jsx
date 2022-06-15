import './Content.css'
import SimpleImageSlider from "react-simple-image-slider";

const Content = ({info})=>{
    return(
        <div>
 <div id="Content_head">
                <p>{info.address}</p>
                <h5>{info.title}</h5>
            </div>
            <div id="Content_body">
            <div id="slider">
            <SimpleImageSlider
                width={300}
                height={300}
                images={info.images}
                showBullets={true}
                showNavs={true}
            /></div>
            <div id="Content_flex">
                <div id="C1">
                    <br></br>
                    <br></br>
                    <h4>Listing Information:</h4>
                    <p>Address:{info.address}</p>
                    <p>RoomType:{info.room_type}</p>
                    <p>BuildingType:{info.building_type}</p>
                    <p>Rent:${info.rent}/month</p>
                    <p>{info.utilities_included && <div>utilities included</div>} {info.pets_allowed && <div>pets allowed</div>}</p>
                    <p>Description : {info.description}</p>
                </div>
                <div id="C2">
                    <br></br>
                    <br></br>
                    <h4>Contact:</h4>
                    <p>Phone: {info.phone}</p>
                    <p>email:{info.email}</p>
                    <p>first_date_available:{info.first_date_available}</p>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Content;