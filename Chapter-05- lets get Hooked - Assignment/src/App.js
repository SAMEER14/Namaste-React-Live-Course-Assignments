import React from "react";
import ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body.jsx";
import Footer from "./components/Footer.js";

// Header Component
// Body Component
// Restaurant Card
// -----------------------------------------------------------
// Footer component

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

