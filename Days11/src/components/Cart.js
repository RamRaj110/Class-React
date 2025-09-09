import { useSelector } from "react-redux";
import CartMenu from "./CartMenu";
import {useDispatch} from "react-redux";
import { clearCart } from "./utils/cartSlice";




const Cart = () => {
    const cartSlice = useSelector(store => store.cart.items)
     console.log(cartSlice);

     const dispatch = useDispatch();

     const handleClearCart=()=>{
      dispatch(clearCart());

     }
    
    return <div>
         <button onClick={()=>{ handleClearCart()}} className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded-lg text-sm m-4 align-self-end">Clear Cart</button>

     {cartSlice.map((item) => (
        <CartMenu key={item?.card?.info?.id} {...item} />
      ))}
    </div>
}

export default Cart;