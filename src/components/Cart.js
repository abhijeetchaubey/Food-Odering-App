import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartslice";

const Cart =()=>{

    const cartItems = useSelector((store=>store.cart.items))

    const dispatch = useDispatch()

    const handleClearClick=()=>{
        dispatch(clearCart())
    }
    
    return(
        <div className=" m-6 p-4">
            <h1 className="text-2xl text-center font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
            <button 
            onClick={handleClearClick}
            className={`rounded-md bg-black text-white ${cartItems.length > 0 ? 'p-1 w-[100px] ml-[90%]' : ''}`}>
            {cartItems.length > 0 ? "Clear Cart" : null}
    </button>
                {cartItems.length===0 && <h1 className="font-semibold text-2xl">Cart is Empty. Add Items to your Cart</h1>}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;