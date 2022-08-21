import React, { useEffect, useState } from "react";
import "./Footer.css";
import { routes } from "../../Config/routes";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function Footer() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            fetch("organizations/1/public")
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchData();
    }, []);

    return (
        <footer className="footer footer-container">
            <div className="footer-column">
                <img
                    src={data.image}
                    alt="somosmas-logo"
                    className="footer-logo"
                />
            </div>
            <div className="footer-column">
                <ul className="footer-column-links">
                    <li className="footer-column-link">
                        <Link to={routes.home}>Inicio</Link>
                    </li>
                    <li className="footer-column-link">
                        <Link to={routes.about}>Nosotros</Link>
                    </li>
                    <li className="footer-column-link">
                        <Link to={routes.news}>Novedades</Link>
                    </li>
                    <li className="footer-column-link">
                        <Link to={routes.testimonials}>Testimonios</Link>
                    </li>
                    <li className="footer-column-link">
                        <Link to={routes.contact}>Contacto</Link>
                    </li>
                    <li className="footer-column-link">
                        <Link to={routes.getInvolved}>Contribuye</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-column">
                <ul className="footer-column-links">
                    <li className="footer-column-link">
                        <Link
                            to="https://www.facebook.com/somosmas-ong"
                            className="footer-column-link-icon"
                        >
                            <BsFacebook />
                        </Link>
                    </li>
                    <li className="footer-column-link">
                        <Link
                            to="https://www.instagram.com/somosmas-ong"
                            className="footer-column-link-icon"
                        >
                            <BsInstagram />
                        </Link>
                    </li>
                    <li className="footer-column-link">
                        <Link
                            to="https://twitter.com/somosmas-ong"
                            className="footer-column-link-icon"
                        >
                            <BsTwitter />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
