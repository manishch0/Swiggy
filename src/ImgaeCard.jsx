import React from "react";
import { IMG_CDN_URL } from "./Constant";
import { useState, useEffect, useContext } from "react";
// import { restrauntList } from "./Constant";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "./Utils/Helper";
// import "./Card.css";
import useOnline from "./Utils/useOnline";
import UserContext from "./Utils/useContext";
import { useDispatch } from "react-redux";
import { addItems, removeItems } from "./Utils/cartSlice";

// function filterData(filterRestraunt, search) {
//   const filterData = filterRestraunt.filter((res) =>
//     res?.data.name?.toLowerCase().includes(search.toLowerCase())
//   );
//   return filterData;
// }

function ImageCard() {
  // const { data } = props;
  const [allRestruant, setAllRestraunt] = useState([]);
  const [search, setSearch] = useState("");
  const [filterRestraunt, setFilterRestraunt] = useState([]);

  const dispatch = useDispatch();
  const handleAddItems = () => {
    dispatch(addItems("grapes"));
  };
  const handleRemveItems = () => {
    dispatch(removeItems());
  };
  // console.log(restraunt, "check in usestate");

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getApiCall();
  }, []);
  async function getApiCall() {
    const ApiCall = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await ApiCall.json();

    // console.log(json?.data?.cards[1]?.data?.data?.cards[0]?.subtype);

    setFilterRestraunt(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestraunt(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Show offline plz check your ur internet connection</h1>;
  }


  return allRestruant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <h1>{user.name}</h1>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            const dataCheck = filterData(allRestruant, search);
            setFilterRestraunt(dataCheck);
          }}
        />
        <button
          onClick={() => {
            const dataCheck = filterData(allRestruant, search);
            setFilterRestraunt(dataCheck);
          }}
        >
          search
        </button>

        {console.log(user.name)}
        <input
          value={user.name}
          onChange={(e) => {
            setUser({ name: e.target.value, email: e.target.email });
          }}
        ></input>

        {/* <div className="bg-red">
          <button onClick={() => handleAddItems()}>Add Items</button>
        </div>
        <div className="bg-red m-12">
          <button onClick={() => handleRemveItems()}>remove Items</button>
        </div> */}
      </div>
      <div className="card-flex">
        {filterRestraunt?.map((e) => {
          // console.log(e, "chek map");
          return (
            <Link to={"/resturant/" + e.data.id} key={e.data.id}>
              <div className="card-main">
                <img
                  className="card-image"
                  src={IMG_CDN_URL + e.data?.cloudinaryImageId}
                  alt=""
                />
                <h1>{e?.data?.name}</h1>
                <h2>{e.data?.cuisines}</h2>
                <h3>{e.data?.lastMileTravelString}</h3>
              </div>
            </Link>
          );
        })}
      </div>
      Card
    </div>
  );
}

export default ImageCard;
