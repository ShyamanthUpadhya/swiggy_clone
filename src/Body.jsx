import { RestaurantCard } from "./ResturantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const filterRes = (resDetails, setResDetails) => {
  setResDetails(
    resDetails.filter((resObjs) => {
      return resObjs?.info.avgRating >= 4.2;
    })
  );
};

export const Body = () => {
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [resDetails, setResDetails] = useState();
  const [search, setSearch] = useState("");
  const [filteredList, setFilterList] = useState("");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9719321&lng=77.512749&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResDetails(
      json?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterList(
      json?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return filteredList === "" ? (
    <div></div>
  ) : (
    <div>
      <div>
        <input
          type="text"
          className="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <button
          className="searchButton"
          onClick={() => {
            setFilterList(
              resDetails.filter((resObj) => {
                return resObj?.info.name
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
            );
          }}
        >
          Filter
        </button>
      </div>
      <button
        onClick={() => {
          filterRes(resDetails, setResDetails);
        }}
      >
        Rating Filter
      </button>
      <div className="body">
        {filteredList.map((resObjs) => (
          <Link to={"/RestMenu/" + resObjs.info.id}>
            <RestaurantCard key={resObjs.info.id} res={resObjs} />
          </Link>
        ))}
      </div>
    </div>
  );
};
