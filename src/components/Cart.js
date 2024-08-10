import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart,removeItem } from "../utils/cartslice";
import { EMPTY_CART_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
const Cart =()=>{

    const cartItems = useSelector((store=>store.cart.items))

    const dispatch = useDispatch()

    const handleClearClick=()=>{
        dispatch(clearCart())
    }
    const handleRemoveCart=()=>{
        dispatch(removeItem())
    }
    
    return(
        <div className=" m-6 p-4">
            <div className="w-6/12 m-auto">
            <button 
            onClick={handleClearClick}
            className={`rounded-md bg-black text-white ${cartItems.length > 0 ? 'p-1 w-[100px] ml-[90%]' : ''}`}>
            {cartItems.length > 0 ? "Clear Cart" : null}
    </button>
    <button
    onClick={handleRemoveCart}
    className={`rounded-md bg-black text-white ${cartItems.length > 0 ? 'p-1 w-[100px] ml-[40%]' : ''}`}>
    {cartItems.length > 0 ? "Remove Item" : null}
    </button>
                {cartItems.length===0 && <img 
                className="ml-[30%] w-[300px] h-[250px] mt-20"
                src={EMPTY_CART_IMG}/>}
                {cartItems.length===0 && <h1 className="font-semibold text-xl text-slate-800 text-center mt-5">Your cart is empty</h1>}
                
                {cartItems.length===0 && <p className="font-thin text-md text-slate-500 text-center mt-1">You can go to home page to view more restraurants</p>}
                <ItemList items={cartItems}/>
                <div className="mt-10 text-center">
                <Link 
                className={` text-white font-semibold ${cartItems.length >0 ? '':'bg-orange-500  min-w-fit p-2'}`}
                to={"/"}>SEE RESTRAURANT NEAR YOU</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;