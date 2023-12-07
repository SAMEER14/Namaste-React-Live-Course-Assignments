import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {
    return (
        <>
        <div className = "header">

        <div className="logo">
         {/* we can make our logo as anchor tag */}
         <a href="/"> 
        <img src  = { LOGO_URL } className="logo" />
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

export default HeaderComponent;