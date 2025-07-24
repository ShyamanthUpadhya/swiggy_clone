import { useDispatch } from "react-redux";
import { addItem } from "./util/cartSlice";

const MenuAcc = ({ title, itemCards, showIndex, setShowIndex }) => {
  // const [flag, setFlag] = useState(true);
  const dispatch = useDispatch();
  const handeAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="items-center mx-auto m-2 p-2 shadow-lg rounded-md bg-gray-200 w-6/12">
      <div className="flex justify-between" onClick={() => setShowIndex()}>
        <h1 className="text-xl">
          {title ? title : "Cart"}({itemCards?.length})
        </h1>
        ⬇️
      </div>

      {showIndex &&
        itemCards.map((item) => {
          return (
            <div
              key={item.card.info.name}
              className="m-2 p-2 border-b-2 border-black"
            >
              <div className="flex justify-between">
                <div className="w-9/12">
                  <h1>{item.card.info.name}</h1>
                  <h2>
                    {" "}
                    Rs.{" "}
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                  </h2>
                  <div className="text-xs">{item.card.info.description}</div>
                </div>
                <div className=" w-3/12">
                  <div className="absolute">
                    <button
                      className="p-2 rounded-lg bg-black text-white mx-16"
                      style={{ marginTop: " 88px", marginBottom: " 88px" }}
                      onClick={() => handeAddItem(item)}
                    >
                      Add+
                    </button>
                  </div>
                  <div>
                    <img
                      className=" w-full h-32"
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                        item.card.info.imageId
                      }
                      alt={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MenuAcc;
