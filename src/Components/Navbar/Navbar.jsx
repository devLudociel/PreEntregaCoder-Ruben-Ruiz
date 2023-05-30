import React from "react";
import "./navbar.css";
import CardWiget from "../CardWiget/CardWiget";
import logo from "../../assets/logoB.png";
import { AiOutlineHome } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";

const Navbar = () => {
    return (
        <div className="navBar">
            <div className="logoNav">
                <img src={logo} alt="logo" />
            </div>

            <div className="items">
                <li className="item">
                    <a href="/">Inicio</a>
                </li>

                <li className="item">
                    <a href="/">Productos</a>
                </li>

                <li className="item">
                    <a href="/">Ofertas</a>
                </li>

                <li className="item">
                    <a href="/">contacto</a>
                </li>
            </div>

            <div className="cardWiget">
                <CardWiget />
            </div>
        </div>
    );
};

export default Navbar;
