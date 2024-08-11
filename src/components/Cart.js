import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartslice";
import { EMPTY_CART_IMG } from "../utils/constants";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearClick = () => {
        dispatch(clearCart());
    };

    const handleRemoveCart = () => {
        dispatch(removeItem());
    };

    return (
        <div className="m-6 p-4">
            <div className="max-w-2xl mx-auto">
                {cartItems.length > 0 && (
                    <div className="flex justify-between mb-4">
                        <button
                            onClick={handleRemoveCart}
                            className="rounded-md bg-black text-white p-2"
                        >
                            Remove Cart
                        </button>
                        <button
                            onClick={handleClearClick}
                            className="rounded-md bg-slate-600 text-white p-2"
                        >
                            Empty Cart
                        </button>
                    </div>
                )}

                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center mt-20">
                        <img
                            className="w-72 h-64"
                            src={EMPTY_CART_IMG}
                            alt="Empty Cart"
                        />
                        <h1 className="font-semibold text-xl text-slate-800 text-center mt-5">
                            Your cart is empty
                        </h1>
                        <p className="font-thin text-md text-slate-500 text-center mt-1">
                            You can go to the home page to view more restaurants.
                        </p>
                    </div>
                ) : (
                    <ItemList items={cartItems} />
                )}

                {cartItems.length === 0 && (
                    <div className="mt-10 text-center">
                        <Link
                            className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-md inline-block"
                            to="/"
                        >
                            SEE RESTAURANTS NEAR YOU
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
