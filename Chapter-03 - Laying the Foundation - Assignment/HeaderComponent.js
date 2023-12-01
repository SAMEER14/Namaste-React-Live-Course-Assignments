import React from "react";
import ReactDOM  from "react-dom/client";
import logo from "./assets/food-delivery.png"
import userIcon from "./assets/user icon.png"

/**
 * Create a Header Component from scratch using Functional Component with JSX
Add a Logo on Left
Add a search bar in middle
Add User icon on right
Add CSS to make it look nice
 */





const TitleComponents = function () {
  return(

  <div>
  <nav className="navbar">
    {/* div for logo */}
      <div className="navbar-logo">
      <img src={logo} className="imgIcon" style={{width :75 , height:60 }} alt="Food-Delivery" />
      </div>
{/* div for search bar and button */}
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <button className="button" >Search</button>
      </div>
{/* div for user logo */}
      <div className="navbar-user">
      <img src={userIcon} className="userIcon" style={{width :75 , height:60 }} alt="userIcon" />
      </div>

    </nav>
</div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TitleComponents/>);
