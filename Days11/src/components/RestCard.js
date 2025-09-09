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
    price
  } = resData?.info;
  

  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <img
        src={`${CDN_URL + cloudinaryImageId}`}
        alt={name}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 truncate">{name}</h2>
        <p className="text-sm text-gray-600 mt-1 truncate">{cuisines.join(", ")}</p>
        <p className="text-sm text-gray-500">{area}</p>

        {/* Ratings + Cost + Time */}
        <div className="flex items-center justify-between mt-3 text-sm">
          <span className="text-yellow-500 font-medium">⭐ {avgRating}</span>
          <span className="text-gray-600">{costForTwo ||price}</span>
          <span className="text-gray-600">{sla.slaString}</span>
        </div>
      </div>
    </div>
  );
};

export default RestCard;
