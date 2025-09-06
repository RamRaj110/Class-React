import { useEffect, useState } from "react";
import { MENU_API,MENU_IMG_CDN } from "./utils/libs";
import { useParams } from "react-router-dom";
import useCstmRes from "./utils/useCstmRes";

const RestMenu = () => {
  // const [resItem, setResItem] = useState(null);
  const resId = useParams();
  const id = resId.id;
  
  const resName = useCstmRes(id);
  const resItem = resName;
  console.log(resItem);

console.log(resName);
const{name}= resItem?.data?.cards[2]?.card?.card?.info


  const {
    // name,
    cuisines,
    avgRating,
    area,
    costForTwo,
    cloudinaryImageId,
    sla,
  } = resName || {};

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const url = `${MENU_API}${id}`;
  //   // console.log("url", url);
  //   const data = await fetch(url);
  //   const res = await data.json();
  //   console.log(res);
  //   // const itemCards = res?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.name;
  //   const itemCards =
  //     res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //       ?.card?.itemCards;
  //   setResItem(itemCards);
  //   setResName(res?.data?.cards[2]?.card?.card?.info);
  //   console.log(itemCards);
  // };

  if (resItem === null) return <h1>Loading...</h1>;

  return (
    <div>
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        {/* <p className="card-type">{cuisines.join(",")}</p> */}
        <div className="card-rating">⭐ {avgRating}</div>
        <div className="card-cost"> Rs.{costForTwo/100}</div>
        <div className="card-delivery-time">
          Delivery Time: {sla?.slaString}{" "}
        </div>
      </div>
      {/* <h3 className="menu">{resItem?.[0]?.card?.info?.name} </h3> */}
      {/* {resItem &&
        resItem.map((item, index) => (
          <div className="menu-sec" key={index}>
            <h2 className="menu-item-name">{item?.card?.info?.name}</h2>
            <p className="menu-item-price">Rs.{item?.card?.info?.defaultPrice / 100}</p>
            <img
              className="menu-item-img"
              src={MENU_IMG_CDN}
              alt={item?.card?.info?.name}
            />
            <p className="card-rating">
              ⭐ {item?.card?.info.ratings.aggregatedRating.rating}
            </p>
            <h3 className="menu-item">Category: {item.card.info.category}</h3>
            <p className="menu-item-description">{item.card.info.description}</p>
          </div>
        ))} */}
    </div>
  );
};

export default RestMenu;
