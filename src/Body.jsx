import { RestaurantCard } from "./ResturantCard";
import resList from "./ResList";
import { useState } from "react";

const filterRes = (resDetails,setResDetails) =>{
  setResDetails(resDetails.filter((resObjs) => {
    return resObjs?.info.avgRating >= 4.5;
  }));
}
  
export const Body = () => {
  const [resDetails , setResDetails ] = useState(resList)
  return (
    <div>
      <button onClick={() => {filterRes(resDetails,setResDetails)}}>Click</button>
    <div className="body">
      {resDetails.map((resObjs) => (
        <RestaurantCard key = {resObjs.info.id} res={resObjs} />
      ))}
    </div>
    </div>
  );
};