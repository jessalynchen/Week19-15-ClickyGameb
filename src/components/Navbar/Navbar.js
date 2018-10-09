import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="blue-br content-font row p-3 fixed-top">
        <div className="col-md-6 nav-heading">
            <h3 className="text-black mt-3 slideInLeft">{props.header}</h3>
        </div>
        <div className="col-md-6 nav-heading slideInRight">
            <ul className="h5 pr-2 d-flex justify-content-end mt-3 text-black">
                <li id="scores">Scores: {props.scores} | </li>
                <li id="highscore">HighScores: {props.highscore}</li>
            </ul>
        </div>
    </nav>
);

export default Navbar;