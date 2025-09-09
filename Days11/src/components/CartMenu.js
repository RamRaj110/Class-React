import { MENU_IMG_CDN } from "./utils/libs";
import { useDispatch } from "react-redux";
import { removeItem } from "./utils/cartSlice";

const CartMenu = (props) => {
  const {
    name,
    defaultPrice,
    price,
    category,
    ratings: {
      aggregatedRating: { rating },
    },
  } = props?.card?.info;

  const dispatch = useDispatch();

const handleRemove = ()=>{
  console.log("remove");
 
    dispatch(removeItem(  props.id ))
  
}
  return (
    <>
 
    <div className="flex items-center bg-white p-4 shadow-lg rounded-2xl hover:shadow-xl transition-shadow duration-300 mb-4">
       
      {/* Image Section */}
      <div className="w-28 h-28 flex-shrink-0">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={`${MENU_IMG_CDN}`}
          alt="menu-pic"
        />
      </div>

      {/* Content Section */}
      <div className="ml-5 flex flex-col justify-between h-full">
        <h1 className="text-xl font-semibold text-gray-800">{name}</h1>
        <p className="text-gray-600">{category}</p>

        <div className="flex items-center gap-4 mt-2">
          <p className="text-lg font-bold text-green-600">
            ₹{defaultPrice / 100 || price / 100}
          </p>
          <span className="flex items-center text-yellow-500 font-medium text-sm">
            ⭐ {rating ? rating : "N/A"}
          </span>
        </div>
         {/* <button onClickCapture={()=>{handleRemove()}} className="text-lg font-semibold cursor-pointer border rounded-lg px-2 py-1 mt-2 bg-blue-500 text-white hover:bg-blue-800 transition duration-300 ">Remove</button> */}
      </div>
    </div>
    </>
  );
};

export default CartMenu;
