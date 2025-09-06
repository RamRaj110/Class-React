import {MENU_IMG_CDN } from "./utils/libs";
import { useParams } from "react-router-dom";
import useCstmRes from "./utils/useCstmRes";

const RestMenu = () => {
  const resId = useParams();

  
const {resItem , resName} = useCstmRes(resId.id);

// console.log(resName);
// console.log(resItem);


  
  
  const {
    name,
    cuisines,
    avgRating,
    city,
    costForTwo,
    // cloudinaryImageId,
    sla,
  } = resName;




  if (resItem === null) return <h1>Loading...</h1>;

  return (
    <div>
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-type">{cuisines?.join(",")}</p>
        <p  className="card-type" >{city}</p>
        <div className="card-rating">⭐ {avgRating}</div>
        <div className="card-cost"> Rs.{costForTwo/100}</div>
        <div className="card-delivery-time">
          Delivery Time: {sla?.slaString}{" "}
        </div>
      </div>
      <h3 className="menu">Menu </h3>
      {resItem &&
        resItem.map((item) => (
          <div className="menu-sec" key={item?.card?.info?.id}>
            <h3 className="menu-item-name">{item?.card?.info?.name}</h3>
            <p className="menu-item-price">Rs.{item?.card?.info?.finalPrice /100 || item?.card?.info?.price / 100}</p>
            <img
              className="menu-item-img"
              src={MENU_IMG_CDN}
              alt={item?.card?.info?.name}
            />
            <p className="card-rating">
              ⭐ {item?.card?.info?.ratings?.aggregatedRating?.rating}
            </p>
            <h3 className="menu-item">Category: {item?.card?.info?.category}</h3>
            <p className="menu-item-description">{item?.card?.info?.description}</p>
          </div>
        ))}
    </div>
  );
};

export default RestMenu;
