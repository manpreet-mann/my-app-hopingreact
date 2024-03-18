import React from "react";
function Header() {
    return (
        <div className="header">
            <ul>
                <li>
                    <a href="#">Gourmet au Catering</a>
                </li>
            </ul>
            <ul className="header-right">
                <li><a  href="#">About</a></li>
                <li><a  href="#">Menu</a></li>
                <li><a  href="#">Contact</a></li>
            </ul>
        </div>
    );
}
export default Header;