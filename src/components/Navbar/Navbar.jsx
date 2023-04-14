import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">TÜİK Çocuk</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Anasayfa
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                İçerikler
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Eğlence
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Unicef
              </Link>
            </li>
            <li>
              <Link to="tuik" spy={true} smooth={true}>
                Tüik
              </Link>
            </li>
            <div>Kullanıcı</div>
          </ul>
        </div>
        <div style={{ fontSize: "18px", marginRight: "10px" }}>
          ayse@testmail.com
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Çıkış</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
