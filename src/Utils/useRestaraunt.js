import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../Constant";

const useRestaraunt = (id) => {
  const [menuList, setMenuList] = useState({});
  //   const [restaurantsName, setRestaurantName] = useState([]);

  useEffect(() => {
    getMenuList();
  }, []);
  async function getMenuList() {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=3241&submitAction=ENTER"
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
        id
    );
    const json = await data.json();
    console.log(json?.data);
    console.log(json, "data Api");

    // setMenuList(json?.data);
    setMenuList(json?.data?.menu?.items);

    // setRestaurantName(json?.data);
  }
  return menuList;
};
export default useRestaraunt;
