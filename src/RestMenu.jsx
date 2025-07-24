import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuAcc from "./MenuAcc";

const RestMenu = () => {
  const [restMenu, setRestMenu] = useState("");
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();
  useEffect(() => {
    fetchData();
    console.log(restMenu);
    // eslint-disable-next-line
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9719321&lng=77.512749&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setRestMenu(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (card) => {
          return (
            card?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
        }
      )
    );
  };

  return restMenu === "" ? (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
    <div className="items-center">
      {restMenu.map((each, index) => {
        return (
          <MenuAcc
            key={index}
            title={each.card.card.title}
            itemCards={each.card.card.itemCards}
            showIndex={showIndex === index ? true : false}
            setShowIndex={() =>
              showIndex === index ? setShowIndex(null) : setShowIndex(index)
            }
          />
        );
      })}
    </div>
  );
};

export default RestMenu;
