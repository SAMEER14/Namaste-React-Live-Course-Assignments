const heading =  React.createElement('h1',{
    id:'title',
    // null
    // style={{color: "red"}}
    // and play more add multiple thing and check
}, 
"Namaste React Everyone! (heading h1)")

// --------------how to create and render multiple tags-----------------
//here heading we create react element,these are react element


const nestedHeading =  React.createElement('h1',{
    id:'title',
}, 
"Namaste React Nested Elements (heading Nested)")


const heading2 =  React.createElement('h2',{
    id:'title',
}, 
"Namaste React Everyone! (heading 2)")

const heading3 =  React.createElement('h3',{
    id:'title',
}, 
"Namaste React Everyone! (heading 3)")

const container =  React.createElement("div",{
    id:'container',
}, 
//so in third we want to pass mutiple data, this is the childrens as many we want to pass here in array
// [heading2, heading3])
[nestedHeading, heading2, heading3, heading, nestedHeading])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); 
//we see the above the heading first one doesnt render as we root .render the latest one

root.render(container);

//render modiy the DOM