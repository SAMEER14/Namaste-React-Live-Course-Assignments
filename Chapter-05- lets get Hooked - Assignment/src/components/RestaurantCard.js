import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const { resDataList } = props;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      deliveryTime,
      costForTwo, 
      } = resDataList?.data;
    // ? -> question mark here is optional chaining
  
    return (
    <>
    <div className="res-card">
        <img src= { CDN_URL + cloudinaryImageId}
        className="res-logo" alt ="logoFood"/>
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>&#9733; {avgRating} STARS</h4>
        <h4>{deliveryTime} MINS</h4>
        <h4>&#8377; {costForTwo/100} FOR TWO</h4>
    </div>
   
  
    </>
    );
  };

export default RestaurantCard;