import React from "react";
import ImageCard from "./ImgaeCard";
// import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import LogoVila from "./assets/logoFood.png";

const logoFood = {
  width: 100,
};

const isLoggedIN = () => {
  return true;
};

const Title = () => {
  <img src={LogoVila} />;
};

function Header() {
  const [isLogIN, setIsLogIN] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <div className="header-main">
        <div>
          {/* <img
          style={foodVilla}
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            restrauntList[1].data?.cloudinaryImageId
          }
        />
        <h1>{restrauntList[0].data?.name}</h1>
        <h2>{restrauntList[0].data?.cuisines}</h2>
        <h2>{restrauntList[0].data.lastMileTravelString}</h2> */}
        </div>

        {/* <ImageCard data={restrauntList} /> */}

        <img className="logoImage" src={LogoVila} data-testid="logo" />

        <div className="linkss">
          <ul className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/support">Support</Link>
            <Link to="/singin">SingIN</Link>
            <Link to="/instamart">InstaMart</Link>
            <Link to="/cart">Cart- {cartItems.length} Items</Link>
          </ul>
          {isLogIN ? (
            <button onClick={() => setIsLogIN(false)}>Logout</button>
          ) : (
            <button onClick={() => setIsLogIN(true)}>login</button>
          )}
        </div>
      </div>
      <ImageCard />
    </>
  );
}

export default Header;
