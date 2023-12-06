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

const RestaurantCard = ({ name, cuisines, avgRating, deliveryTime} ) => {

    // WE CAN DESTRUCTURE ON THE FLY ALSO as above-

    //passing directly the props => properties in component and using directly inside curly braces

    return (
    <>
    <div className="res-card">
        <img src= "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jkryuid0vxwswe1r48ha" className="res-logo" alt ="logoFood"/>
        {/* <h2>{props.name}</h2>
        <h4>{props.cuisines}</h4>
        <h4>{props.avgRating}</h4>
        <h4>{props.deliveryTime}</h4> */}
{/* passing directly not using props keyword and passing inside curly braces as JS property */}
        <h2>{name}</h2>
        <h4>{cuisines}</h4>
        <h4>{avgRating} STARS</h4>
        <h4>{deliveryTime} MINS</h4>
        <h4>&#8377; 400 FOR TWO</h4>
    </div>
   

    </>
    );
};


// Making RestautantCard2 to understand destructure on the fly

const RestaurantCard2 = (props) => {

    // WE CAN DESTRUCTURE ON THE FLY ALSO
    //passing directly the props => properties in component and using directly inside curly braces
    const { name, cuisines, avgRating, deliveryTime} = props; //here we are destructuring it
    
    return (
    <>
    <div className="res-card">
        <img src= "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jkryuid0vxwswe1r48ha" className="res-logo" alt ="logoFood"/>
        {/* <h2>{props.name}</h2>
        <h4>{props.cuisines}</h4>
        <h4>{props.avgRating}</h4>
        <h4>{props.deliveryTime}</h4> */}
        <h2>{name}</h2>
        <h4>{cuisines}</h4>
        <h4>{avgRating} STARS</h4>
        <h4>{deliveryTime} MINS</h4>
        <h4>&#8377; 400 FOR TWO</h4>
    </div>
   

    </>
    );
};

// -----------------------------------------------------------
const BodyComponent = () =>{
    return(
        <>
        <div className="body">
        <div className="search">
            Search Bar
        </div>
        <div className="res-container">

        <RestaurantCard 
        name ="Dominos" 
        cuisines = "Pizzas, Italian, Pastas, Desserts"
        avgRating = "4.2 stars"
        deliveryTime = "25 MINS"
        />

        <RestaurantCard 
        name ="Burger King" 
        cuisines = "Burgers, American"
        avgRating = "4.2 stars"
        deliveryTime = "25 MINS"
        />

        <RestaurantCard2 
        name ="Pizza Hut" 
        cuisines = "Pizza's, American"
        avgRating = "4.1 stars"
        deliveryTime = "30 MINS"
        />

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
        <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

// Done props destructuring and Destructuring on the fly