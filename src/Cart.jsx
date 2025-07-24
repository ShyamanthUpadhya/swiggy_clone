import { useSelector, useDispatch } from "react-redux";
import MenuAcc from "./MenuAcc";
import { clearItem } from "./util/cartSlice";

const Cart = () => {
  const restMenu = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearItem());
  };

  return restMenu === "" ? (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
    <div className="items-center">
      <div className="flex justify-center items-center flex-col">
        <button
          className="my-4 border border-black bg-black text-white rounded-lg p-2"
          onClick={handleClear}
        >
          Clear Cart
        </button>
        <MenuAcc itemCards={restMenu} showIndex={true} />
      </div>
    </div>
  );
};

export default Cart;
