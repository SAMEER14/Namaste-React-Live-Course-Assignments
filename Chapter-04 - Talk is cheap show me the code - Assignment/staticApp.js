import React from "react";
import ReactDOM  from "react-dom/client";

/**
         * Header Component
         *      -Logo/App name
         *      -Nav items(Right side)
         *      -Cart
         * Body 
         *    -Search Bar
         *    -Restaurant List/Restaurant container
         *      -Restaurant Card
         * -> First show static data
         * -> make dynamic by passing props
         *        -Image
         *        -Name
         *        -Cuisines
         *        -Rating
         *        -DeliveryTime
         *        -Cost For Two
         * -> Render card with dynamic data
         * -> use Array.map -> using map key is important
         * Footer
         *      -Links
         *      -Copyright
         */

// Header Component

const HeaderComponent = () => {
    return (
        <>
        <div className = "header">

        <div className="logo">
         {/* we can make our logo as anchor tag */}
         <a href="/"> 
        <img src  = "https://img.freepik.com/premium-vector/delivery-man-with-face-mask-delivering-order-motorcycle_154993-160.jpg?w=996" className="logo" />
        {/* <Title /> */}
        </a>
        </div>
        <div className="nav-items">
        <ul>
        <li>Home</li>
        <li>Help</li>
        <li>Sign In</li>
        <li>Cart</li>
        </ul>
        </div>
        </div>
        </>
    );
};

// Body Component

// Restaurant Card
const RestaurantCard = () => {
    return (
    <>
    <div className="res-card">
        <img src= "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/28fb13049b4e55297bb3f703cde63c35" className="res-logo" alt ="logoFood"/>
        <div className="details-font">
        <h2>Burger King</h2>
        <h4>Burgers, American</h4>
        <h4>4.2 stars</h4>
        <h4>25 MINS</h4>
        <h4>&#8377; 250 FOR TWO</h4>
        </div>
    </div>

    <div className="res-card">
        <img src= "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jkryuid0vxwswe1r48ha" className="res-logo" alt ="logoFood"/>
        <h2>Domino's Pizza</h2>
        <h4>Pizzas, Italian, Pastas, Desserts</h4>
        <h4>4.2 stars</h4>
        <h4>25 MINS</h4>
        <h4>&#8377; 400 FOR TWO</h4>
    </div>

    <div className="res-card">
        <img src= "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g0xbcyu8qaqbiu41am69" className="res-logo" alt ="logoFood"/>
        <h2>Pizza Hut</h2>
        <h4>Pizzas</h4>
        <h4>3.4 stars</h4>
        <h4>24 MINS</h4>
        <h4>&#8377; 350 FOR TWO</h4>
    </div>
    </>
    );
};

const BodyComponent = () =>{
    return(
        <>
        <div className="body">
        <div className="search">
            Search Bar
        </div>
        <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        </div>
        </div>
        </>
    );
};

// Footer component
const Footer = () => {
    return(
        <>
        <div className="footer">
            <h1>Footer</h1>
        </div>
        </>
    );
};

const AppLayout = () =>{
    return (
        // <h1>App Layout</h1>
        <>
        <HeaderComponent />
        <BodyComponent />
        {/* <Footer /> */}
        {/* { Footer } */}
        {/* <Footer></Footer> */}
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);