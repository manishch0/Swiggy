import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constant";
import { addItems } from "../Utils/cartSlice";
import useRestaraunt from "../Utils/useRestaraunt";

function ResturantMenu() {
  const { id } = useParams();
  const [menuList, setMenuList] = useState([]);
  const [restaurantsName, setRestaurantName] = useState([]);

  const dispatch = useDispatch();

  const handleAddItems = () => {
    dispatch(addItems("Grapes"));
  };

  const handleAddFoodItems = (item) => {
    dispatch(addItems(item));
  };
  // const menuList = useRestaraunt(id);
  // const restaurantsName = useRestaraunt(id);
  console.log(menuList, "useState check data");
  // useEffect(() => {
  //   getMenuList();
  // }, []);
  // async function getMenuList() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
  //       id
  //   );
  //   const json = await data.json();
  //   console.log(json?.data);
  //   console.log(json, "data Api");

  //   setMenuList(json?.data?.menu?.items);
  //   setRestaurantName(json?.data);
  // }
  return (
    <div>
      Menu card
      <div>
        <button className="p-2 m-2" onClick={() => handleAddItems()}>
          Add Items
        </button>
      </div>
      <h1 className="m-12">ResturantMenu :{id}</h1>
      <h1>{restaurantsName.name}</h1>
      <img src={IMG_CDN_URL + restaurantsName.cloudinaryImageId} alt="" />
      <h3>{menuList.area}</h3>
      <h3>{menuList.city}</h3>
      <h3>{menuList.avgRating}</h3>
      <h3>{menuList.costForTwoMsg}</h3>
      {/* <h2>
        {Object.values(menuList?.menu?.items).map((item) => {
          console.log(item);
        })}
      </h2> */}
      <ul>
        {Object.values(menuList).map((item) => {
          return (
            <li key={item.id}>
              {item.name}
              {/* i am adding food item from *{items.name} item*  which i pass in the handleAddFoodItems(item) */}
              <button
                className="bg-green"
                onClick={() => handleAddFoodItems(item)}
              >
                Add food
              </button>
            </li>
          );
          // console.log(item.name);
        })}
      </ul>
    </div>
  );
}

export default ResturantMenu;
