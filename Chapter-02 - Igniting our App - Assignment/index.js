import React from "react";
// import ReactDOM  from "react-dom";
// earlier the only importing from react-dom used to work but after new version need to import /client also
import ReactDOM  from "react-dom/client";

const heading =  React.createElement('h1',{
    id:'title',
}, 
"Namaste React Everyone! (heading h1)")

const heading2 =  React.createElement('h2',{
    id:'title',
}, 
"Chapter 02")

const heading3 =  React.createElement('h3',{
    id:'title',
}, 
"Igniting our App")

const container =  React.createElement("div",{
    id:'container',
}, 
//so in third we want to pass mutiple data, this is the childrens as many we want to pass here in array
[heading2, heading3])
// [heading2])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); 

root.render(container);
