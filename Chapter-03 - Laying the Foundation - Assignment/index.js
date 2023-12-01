import React from "react";
// import {createElement as ce} from "react";
import ReactDOM  from "react-dom/client";

// "Created the below h1, h2, h3 tags inside div container using React.createElement and giving className as "title" "

const heading =  React.createElement('h1',{
    id:'title1',
    key: "h1"
}, 
"Namaste React Everyone!")

const heading2 =  React.createElement('h2',{
  id:'title2',
  key:"h2"
}, 
"Chapter 03 - Laying The Foundation")

const heading3 =  React.createElement('h3',{
    id:'title3',
    key:"h3"
}, 
"Created the h1, h2, h3 tags inside div container using React.createElement");

const container =  React.createElement("div",{
    id:'container',
    className:"title",
}, 
[heading,heading2, heading3])


// ================ Creating same elements USING JSX ==================

// created single tag using jsx
const headingJSX1 = <h1 id="title" key="h1">
Namaste React from JSX
</h1>
//this is react element we made

const headingJSX2 = <h2 id="title" key="h2">
Chapter 03 - Laying The Foundation
</h2>

const headingJSX3 = (
<h3 id="title" key="h2">
Created the h1, h2, h3 tags inside div container using JSX
</h3>
);

// to create multiple tags using jsx we need to put parenthesis
const headerJsx = (
    <div className="title" key="title">
      <h1 key="h1">Namaste React from JSX</h1>
      <h2 key="h2">Chapter 03 - Laying The Foundation</h2>
      <h3 key="h3">Created the h1, h2, h3 tags inside div container using JSX (using multiple jsx then but paranthesis () )</h3>
    </div>
);

// The above jsx we just created a react element

// =================================================
//============FUNCTIONAL COMPONENT => creating heading tags==================

const HeadingFunctionalComponent = function () {
  return (
    <div className="title" key="title">
    <h1 key="h1">Namaste React from JSX - Functional Component</h1>
    <h2 key="h2">Chapter 03 - Laying The Foundation</h2>
    <h3 key="h3">Created the h1, h2, h3 tags inside div container using JSX in Functional component</h3>
  </div>
  );
};

// with no retun keyword
// const HeadingComponentNoReturnKeyword = () => (
//     <div className="title" key="title">
//     <h1 key="h1">Namaste React from JSX - Functional Component</h1>
//     <h2 key="h2">Chapter 03 - Laying The Foundation</h2>
//     <h3 key="h3">Created the h1, h2, h3 tags inside div container using JSX in Functional component</h3>
//   </div>
// );


//Pass attributes into the tag in JSX

const divStyle = {
  color: 'green',
};

const HeadingComponentAttributes = function () {
  return (
    <div className="title" key="title">
    <h1 key="h1" style={{color:"aqua"}} >Namaste React from JSX - Functional Component</h1>
    <h2 key="h2" style={divStyle} >Chapter 03 - Laying The Foundation</h2>
    <h3 key="h3" tabIndex={1} >Created the h1, h2, h3 tags inside div container using JSX and passing attributes into tag in jsx</h3>
  </div>
  );
};


//Composition of component

const ComponentHeader2 = function () {
  return (
  <div>
    <h1> Namaste Everyone from Functional Component 2</h1>
    <h2> Composition Component</h2>
  </div>
  );
};

const ComponentHeader1 = function () {
  return (
  <div>
    <h1> Namaste Everyone from Functional Component 1</h1>
    <ComponentHeader2/>
    <h2> Passing one component in another component </h2>
  </div>
  );
};

// {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

/**
 * =>{TitleComponent} using like this means TitleComponent is JSX expression used and is also known as React element.
-Normal react element with JSX => Use in curly braces => {title}

=>{<TitleComponent/>} ->Component returning some JSX.

=>{<TitleComponent></TitleComponent>} ->when the component has child components, we have to write like this:
<TitleComponent>
    <Child1 />
    <Child2/>
</TitleComponent>
-> If no child component is present then {<TitleComponent/>} is equivalent to {<TitleComponent></TitleComponent>}
 * 
 */
// {TitleComponent}
// const TitleComponent = () => {
//   <h1 style={{ color: "blue"  }}>Title Component in jsx syntax</h1>
// };

const TitleComponent = (
  <h1 style={{ color: "blue"  }}>Title Component in jsx syntax</h1>
);


const TitleChildComponent1 = () => {
  return <h1 style={{ color: "red" }}>TitleChildComponent1</h1>;
};

const TitleChildComponent2 = () => {
  return <h1 style={{ color: "yellow" }}>TitleChildComponent2</h1>;
};


const TitleComponents = function () {
  return(
  <div>
  <h1 style={{color : "purple"}}>Making TitleComponents and showing different ways to use when</h1>
  {/* <TitleComponent/> */}
  {TitleComponent}
  <TitleChildComponent1/>
  <TitleChildComponent1></TitleChildComponent1>
  </div>
  );
}

// when child component then use
{/* <TitleChildComponent1>
<ChildComponent2/>
</TitleChildComponent1> */}

const TitleComponents2 = function () {
  return(
  <div>
  <TitleChildComponent1>

    {TitleComponent}
    <TitleChildComponent2/>

  </TitleChildComponent1>
  </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering the container div tag
root.render(container);
 
// rendering the div container using tag made with jsx
//root.render(headingJSX1);
root.render(headerJsx);

// rendering the div container using tag made with jsx in functional component
// root.render(HeadingFunctionalComponent); // gives warning 
root.render(<HeadingFunctionalComponent/>);
// root.render(<HeadingComponentNoReturnKeyword/>);

// rendering the functional component and passing attributes in tag in jsx
root.render(<HeadingComponentAttributes/>);

//rendering the functional component and passing another component => Composiition component
root.render(<ComponentHeader1/>);

// {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
root.render(<TitleComponents/>);
// root.render(<TitleComponents></TitleComponents>);

root.render(<TitleComponents2/>);
