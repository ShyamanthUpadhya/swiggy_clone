import RestaurantCard, { withPromotedLabel } from "./ResturantCard";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JustContext from "./util/UserContext";

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
  const { loggedInUser, setUserName } = useContext(JustContext);
  const ResturantCardPromoted = withPromotedLabel(RestaurantCard);
  const flag = true;
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
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
    <div>
      <div className="flex my-2">
        <div>
          <input
            type="text"
            className="outline mx-2"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
          <button
            className="mx-2 px-4 bg-purple-100 rounded-sm"
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
          className="mx-2 px-4 bg-purple-100 rounded-sm"
          onClick={() => {
            filterRes(resDetails, setResDetails);
          }}
        >
          Rating Filter
        </button>
      </div>
      <div>
        <label>User :</label>
        <input
          value={loggedInUser}
          className="border border-black"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap grid-cols-3">
        {filteredList.map((resObjs) => (
          <Link key={resObjs.info.id} to={"/RestMenu/" + resObjs.info.id}>
            {flag ? (
              <ResturantCardPromoted key={resObjs.info.id} res={resObjs} />
            ) : (
              <RestaurantCard key={resObjs.info.id} res={resObjs} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
