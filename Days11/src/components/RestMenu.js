import { MENU_IMG_CDN } from "./utils/libs";
import { useParams } from "react-router-dom";
import useCstmRes from "./utils/useCstmRes";
import { addItem } from "./utils/cartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const RestMenu = () => {
  const resId = useParams();

  
  const { resItem, resName } = useCstmRes(resId.id);
  
  const cartItems = useSelector(store => store.cart.items)
  console.log(cartItems);
  
  const dispatch = useDispatch();


  const handleAddItem= function(item){
    dispatch(addItem(item));
    // console.log(item);
  }

  const {
    name,
    cuisines,
    avgRating,
    city,
    costForTwo,
    sla,
  } = resName;

  if (resItem === null) return <h1 className="text-center text-xl font-semibold mt-10">Loading...</h1>;

  return (

    <div className="container mx-auto p-6">
      {/* Header */}
      {/* <div className="flex  justify-between  bg-gray-300 shadow-md rounded-xl items-center mb-8 border-b p-4 sticky top-0 z-10">
        <h2 className="text-3xl font-extrabold text-gray-800">{name}</h2>
          <span className="text-sm text-yellow-500 font-medium">⭐ {avgRating}</span>
          <span className="text-lg font-semibold text-yellow-600">Cart-items-{cartItems.length}</span>
      </div> */}

      {/* Restaurant Details */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 text-sm mb-1">{cuisines?.join(", ")}</p>
        <p className="text-gray-600 text-sm mb-1">{city}</p>
        <div className="flex items-center gap-4 mt-3">
          <span className="text-sm text-yellow-500 font-medium">⭐ {avgRating}</span>
          <span className="text-sm text-gray-600">Rs.{costForTwo / 100} for two</span>
          <span className="text-sm text-gray-600">{sla?.slaString}</span>
        </div>
      </div>

      {/* Menu Section */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Menu</h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resItem &&
          resItem.map((item) => (
            <div
              key={item?.card?.info?.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                className="w-full h-48 object-cover"
                src={MENU_IMG_CDN}
                alt={item?.card?.info?.name}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{item?.card?.info?.name}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Rs.{item?.card?.info?.finalPrice / 100 || item?.card?.info?.price / 100}
                </p>
                <div className="flex items-center mt-2">
                  <span className="text-sm text-yellow-500">
                    ⭐ {item?.card?.info?.ratings?.aggregatedRating?.rating || "N/A"}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mt-2">
                  Category: <span className="font-medium">{item?.card?.info?.category}</span>
                </p>

          <button className="text-lg font-semibold cursor-pointer border rounded-lg px-2 py-1 mt-2 bg-blue-500 text-white hover:bg-blue-800 transition duration-300 " onClick={()=> handleAddItem(item)}>Add</button>

                <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                  {item?.card?.info?.description || "No description available."}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RestMenu;
