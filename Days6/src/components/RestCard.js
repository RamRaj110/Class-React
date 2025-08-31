import { CDN_URL } from "./utils/libs";

const RestCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    area,
    costForTwo,
    cloudinaryImageId,
    sla,
  } = resData?.info;

  return (
    <div className="card">
      <img
        src={`${CDN_URL + cloudinaryImageId}`}
        alt={name}
        className="card-img"
      />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-type">{cuisines.join(",")}</p>
        <p className="card-address">{area}</p>
        <div className="card-rating">⭐ {avgRating}</div>
        <div className="card-cost"> {costForTwo}</div>
        <div className="card-delivery-time">
          Delivery Time: {sla.slaString}{" "}
        </div>
      </div>
    </div>
  );
};
export default RestCard;
