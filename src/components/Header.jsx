import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/public/assets/logo.jpg";

function Header() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("");

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);

    useEffect(() => {
        function stickyNav() {
            const body = document.querySelector("body");
            const navbar = document.querySelector("#header");
            const navig = document.querySelector(".nav");
            const scrollValue = window.scrollY;

            if (scrollValue >= body.offsetHeight / 8) {
                navbar.classList.add("header-sticky");
                navig.classList.add("header-hidden");
            } else {
                navbar.classList.remove("header-sticky");
                navig.classList.remove("header-hidden");
            }
        }

        stickyNav();
        window.addEventListener("scroll", stickyNav);
        return () => window.removeEventListener("scroll", stickyNav);
    }, []);

    return (
        <header id="header">
            <div className="promo-bar">
                <p>Promotion jusqu'au 20 Janvier à ne pas rater 📦</p>
            </div>
            <div className="header">
              <Link to="/"> 
                <img src={logo} alt="logo" /></Link>

               
                <div className="search">
                    <div className="search-bar">
                        <input type="search" placeholder="Rechercher" />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>

                    <div className="nav" id="navList">
                        <ul>
                            <li >
                                <Link to="/sirop" className={activeTab === "/sirop" ? "active-link" : ""}>SIROP</Link>
                            </li>
                            <li >
                                <Link to="/creme" className={activeTab === "/creme" ? "active-link" : ""}>CRÈME</Link>
                            </li>
                            <li >
                                <Link to="/huile" className={activeTab === "/huile" ? "active-link" : ""}>HUILE</Link>
                            </li>
                            <li  >
                                <Link to="/apropos" className={activeTab === "/apropos" ? "active-link" : ""} >À PROPOS</Link>
                            </li>
                            <li >
                                <Link to="/conseil" className={activeTab === "/conseil" ? "active-link" : ""} >CONSEIL</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="nav-right">
                    <ul className="nav-right2">
                        <li className="dropdown">
                            <a href="#">
                                <i className="fa-solid fa-user fa-xl"></i> Bonjour, bibi
                            </a>
                            <ul className="dropdown-menu" id="compte">
                                <li><a href="#">Mon compte</a></li>
                                <li><a href="#">Mes commandes</a></li>
                                <li><a href="#">Liste de souhaits</a></li>
                                <li><a href="#">Paramètres</a></li>
                                <li><a href="#">Déconnexion</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#">
                                <i className="fa-solid fa-cart-shopping fa-xl"></i> Panier
                            </a>
                            <ul className="dropdown-menu" id="panier">
                                <li>
                                    <a href="#">
                                        <img src="public/assets/shopping-bag.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>Panier vide</span>
                                    </a>
                                </li>
                                <button>Ajouter un article</button>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
