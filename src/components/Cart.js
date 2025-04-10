import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  let billAmount = 0;
  const cartItems = useSelector((store) => store.cart.items);

  cartItems.map(
    (item) =>
      (billAmount =
        billAmount +
        (item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100))
  );

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item?.card?.info?.id));
  };

  return (
    <div className="text-center m-4 ">
      <h1 className="m-2 font-bold text-2xl">Cart</h1>
      <button
        className="bg-black text-white rounded p-2 m-2"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && <p>Add something to the cart to enjoy </p>}
      <div>
        {cartItems.map((item) => (
          <div key={item?.card?.info?.id}>
            <FoodItem key={item?.card?.info?.id} items={item} />
            <button
              className="text-sm bg-black text-white rounded p-1 m-1"
              onClick={() => {
                handleRemoveItem(item);
              }}
            >
              Remove -
            </button>
          </div>
        ))}
      </div>
      <p className="font-bold ">Total Bill - {billAmount}</p>
    </div>
  );
};

export default Cart;
