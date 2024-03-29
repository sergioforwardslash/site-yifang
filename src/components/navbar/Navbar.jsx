import React, { useEffect, useState } from "react";
import YiFangLogo from "../../assets/yifanglogo-white.webp";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaFacebook,
  FaPhoneAlt,
} from "react-icons/fa";
import "./navbar.css";
import axios from "axios";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("http://localhost:8000/user/auth", config)
      .then((response) => {
        setUsername(response.data.username);
      })
      .catch((error) => {
        localStorage.removeItem("token");
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const classes = ["navbar"];
  if (scrollPosition > 50) {
    classes.push("navbar-scroll");
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={YiFangLogo} alt="YiFangLogo" />
        </a>
      </div>

      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.toasttab.com/yifang-fruit-tea-glendale-251-north-brand-boulevard-unit-a-advfe/v3/#d10144b72-2359-4d9e-ac04-725cb5f4d119d6579997c-4428-4e97-aa49-b15f214b149b"
          >
            Menu
          </a>
        </li>
        <li>
          <a href="/catering">Catering</a>
        </li>
        <li>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSci079XcMzEHn6IFikBbHP1KCNiYfM8_JCLlwifBSm4oNPHpQ/viewform?usp=sf_link">
            Careers
          </a>
        </li>
        <li>
          <a href="/contactus">Contact Us</a>
        </li>

      {username ? (
        <li><a href="/profile">Welcome, {username}</a></li>
      ) : (
        <li>
          <a href="/login" className="login-button"><span>Login</span></a>
        </li>
      )}
      </ul>

      <div className="navbar-menu">
        <FaBars color="#fff" fontSize={27} onClick={() => setNav(true)} />
        {nav && (
          <div className="navbar-menu-overlay flex-center">
            <FaTimes
              fontSize={27}
              className="overlay-close"
              onClick={() => setNav(false)}
            />
            <ul className="navbar-menu-links">
              <li>
                <a href="/" onClick={() => setNav(false)}>
                  Home
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.toasttab.com/yifang-fruit-tea-glendale-251-north-brand-boulevard-unit-a-advfe/v3/#d10144b72-2359-4d9e-ac04-725cb5f4d119d6579997c-4428-4e97-aa49-b15f214b149b"
                  onClick={() => setNav(false)}
                >
                  Menu
                </a>
              </li>
              <li>
                <a href="/catering" onClick={() => setNav(false)}>
                  Catering
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSci079XcMzEHn6IFikBbHP1KCNiYfM8_JCLlwifBSm4oNPHpQ/viewform?usp=sf_link"
                  onClick={() => setNav(false)}
                >
                  Careers
                </a>
              </li>
              <li>
                <a href="/contactus" onClick={() => setNav(false)}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="sidebar">
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/yifang_taiwanfruittea_glendale/"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/yifangUSA"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li>
            <a href="/contactus">
              Contact Us <FaPhoneAlt size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
