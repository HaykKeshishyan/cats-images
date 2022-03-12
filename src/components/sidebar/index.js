import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import navIcon from "../../assets/img/menu-button-of-three-horizontal-lines.png";
import navCloseIcon from "../../assets/img/close.png";

import "./styles.css";


const Sidebar = () => {
    const categories = useSelector(({ catDuck }) => catDuck.categories);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navClickHandler = () => setIsNavOpen(prev => !prev);


    const navItemClickHandler = () => setIsNavOpen(false);

    return (
        <div>
            <div className={isNavOpen ? "sidebar-wrapper" : "sidebar-wrapper nav-closed"}>
                {categories.map(({ id, name }) => <div key={id} className={"nav-link"}>
                    <NavLink to={`${name}`} onMouseDown={navItemClickHandler} className={"nav-item"}> {name}</NavLink>
                </div>)}
            </div>
            <img src={isNavOpen ? navCloseIcon : navIcon} onClick={navClickHandler} alt={"menu"}
                className={isNavOpen ? "nav nav-open" : "nav"} />

        </div>
    );

};
export default Sidebar;