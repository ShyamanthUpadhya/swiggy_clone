import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestMenu = () => {
  const [restMenu, setRestMenu] = useState("");
  const [restName, setRestName] = useState("");
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
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card
    );
    setRestName(json?.data?.cards[0]?.card?.card?.text);
  };

  return restMenu === "" ? (
    <div></div>
  ) : (
    <div>
      <h1>{restName}</h1>
      {restMenu?.itemCards?.map((res) => {
        return <li>{res?.card?.info?.name}</li>;
      })}
    </div>
  );
};

export default RestMenu;
