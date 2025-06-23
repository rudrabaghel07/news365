import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import newsLogo from "./iconLogo.png";
import {
    FaFutbol,
    FaLaptopCode,
    FaHeartbeat,
    FaFilm,
    FaFlask,
    FaBusinessTime,
    FaInstagram,
    FaTwitter,
    FaGithub,
    FaFacebook,
    FaLinkedin
} from "react-icons/fa";

const Navbar = () => {
    const location = useLocation(); // Get the current route

    // List of categories
    const categories = [
        { name: "Sports", icon: <FaFutbol />, path: "/sports" },
        { name: "Technology", icon: <FaLaptopCode />, path: "/technology" },
        { name: "Health", icon: <FaHeartbeat />, path: "/health" },
        { name: "Entertainment", icon: <FaFilm />, path: "/entertainment" },
        { name: "Science", icon: <FaFlask />, path: "/science" },
        { name: "Business", icon: <FaBusinessTime />, path: "/business" },
    ];

    return (
        <div>
            {/* Horizontal Navbar */}
            <nav
                className="navbar navbar-expand-lg"
                style={{
                    backgroundColor: "#4b0505",
                    borderBottom: "4px solid #1e1e1e",
                    padding: "0.3rem 0.5rem",
                }}
            >
                <div className="container-fluid d-flex align-items-center justify-content-start">
                    {/* Logo */}
                    <img
                        src={newsLogo}
                        alt="newsLogo"
                        className="icon"
                        style={{ width: "80px", height: "80px", objectFit: "cover", marginRight: "15px" }}
                    />
                    
                    {/* Channel Name */}
                    <NavLink
                        className="navbar-brand"
                        to="/"
                        style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "2rem",
                            textShadow: "1px 1px 5px rgba(0, 0, 0, 0.8)",
                            letterSpacing: "2px",
                            fontFamily: "Livvic Bold",
                        }}
                    >
                        NEWS DASHBOARD
                    </NavLink>
                </div>

                {/* Social Media Icons (right side) */}
                <div className="ml-auto d-flex align-items-center">
                    <a href="https://www.instagram.com/yo_soy_loca_rs_7/" target="_blank" rel="noopener noreferrer" style={{ color: "white", marginLeft: "15px" }}>
                        <FaInstagram size={25} />
                    </a>
                    <a href="https://x.com/Choubey10rishu" target="_blank" rel="noopener noreferrer" style={{ color: "white", marginLeft: "15px" }}>
                        <FaTwitter size={25} />
                    </a>
                    <a href="https://github.com/rudrabaghel07" target="_blank" rel="noopener noreferrer" style={{ color: "white", marginLeft: "15px" }}>
                        <FaGithub size={25} />
                    </a>
                    <a href="https://www.facebook.com/shivamchoubey.rishu.9" target="_blank" rel="noopener noreferrer" style={{ color: "white", marginLeft: "15px" }}>
                        <FaFacebook size={25} />
                    </a>
                    <a href="https://www.linkedin.com/in/shivam-choubey%F0%9F%87%AE%F0%9F%87%B3-553483257" target="_blank" rel="noopener noreferrer" style={{ color: "white", marginLeft: "15px" }}>
                        <FaLinkedin size={25} />
                    </a>
                </div>

                <p style={{ margin:"1rem" ,color: "white", height: "1rem", whiteSpace: "nowrap" ,fontFamily:"Anton"}}>
                    Contact For Advertisements
                </p>
            </nav>

            {/* Second Navbar Section */}
            <nav
                className="navbar navbar-expand-lg"
                style={{
                    backgroundColor: "#1e1e1e",
                    borderBottom: "2px solid #4b0505",
                    padding: "0.5rem 1rem",
                }}
            >
                <div className="container-fluid justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/"
                                style={{
                                    color: "white",
                                    fontWeight: "bold",
                                    padding: "0 15px",
                                }}
                                activeStyle={{
                                    textDecoration: "underline",
                                    fontWeight: "bolder",
                                }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/about"
                                style={{
                                    color: "white",
                                    fontWeight: "bold",
                                    padding: "0 15px",
                                }}
                                activeStyle={{
                                    textDecoration: "underline",
                                    fontWeight: "bolder",
                                }}
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Vertical Navbar - Hidden on About Page */}
            {location.pathname !== "/about" && (
                <div className="d-flex">
                    <div
                        className="bg-gradient p-3"
                        style={{
                            width: "220px",
                            height: "100vh",
                            position: "fixed",
                            background: "linear-gradient(180deg, #4b0505 0%, #1e1e1e 100%)", // Gradient background
                            boxShadow: "4px 0 10px rgba(0, 0, 0, 0.2)", // Enhanced box-shadow for depth
                            borderRadius: "10px", // Rounded corners
                            paddingTop: "30px",
                        }}
                    >
                        <h5
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                marginBottom: "1rem",
                                textAlign: "center",
                                borderBottom: "2px solid #fff",
                                paddingBottom: "0.5rem",
                                fontSize: "1.5rem",
                                textTransform: "uppercase",
                            }}
                        >
                            Categories
                        </h5>
                        <ul className="list-group">
                            {categories.map((category) => (
                                <li
                                    key={category.name}
                                    className="list-group-item border-0 d-flex align-items-center"
                                    style={{
                                        backgroundColor: "#2c2c2c", // Darker background for list items
                                        borderRadius: "5px",
                                        marginBottom: "10px",
                                        padding: "10px 15px",
                                        transition: "transform 0.3s ease, background-color 0.3s ease",
                                    }}
                                >
                                    <div
                                        className="category-icon"
                                        style={{
                                            marginRight: "15px",
                                            color: "#ffcc00", // Color for the icons
                                            transition: "transform 0.3s ease", // Smooth hover animation
                                        }}
                                    >
                                        {category.icon}
                                    </div>
                                    <NavLink
                                        to={category.path}
                                        style={{
                                            color: "white",
                                            fontWeight: "bold",
                                            textDecoration: "none",
                                            fontSize: "1.1rem",
                                            transition: "color 0.3s ease",
                                        }}
                                        activeStyle={{
                                            color: "#4b0505",
                                            backgroundColor: "#fff",
                                            borderRadius: "5px",
                                            padding: "5px 10px",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = "#ffcc00"; // Highlight text on hover
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = "white"; // Revert text color
                                        }}
                                    >
                                        {category.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
