import { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png"
import  DarkMode from "../darkmode/DarkMode";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuToggleIcon, setMenuToggleIcon] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  const handleToggleClick = () => {
    setMenuVisible((prev) => !prev);
    setMenuToggleIcon((prev) => !prev);
  };

  useEffect(() => {
    // Header active state on scroll
    const handleScroll = () => {
      setIsHeaderActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isHeaderActive ? "active" : ""}`}>
      <nav className="nav__container">
        <div className="nav__data">
          <a href="#" className="nav__logo">
                <img 
                    src={Logo}
                    alt="Logo"
                    width="40"
                    className="nav__logo"
                />
                <span>TNSES</span>
          </a>

          <div className="nav__menu__section">
                <div className="nav__darkmode__sm">
                    <DarkMode />
                </div>
                <span className="nav__pipe">|</span>
                <h1 className="nav__menu__heading">Menu</h1>
                <div
                    className={`nav__toggle ${menuToggleIcon ? "show-icon" : ""}`}
                    onClick={handleToggleClick}
                >
                    <i
                    className={`ri-menu-line nav__burger ${
                        menuToggleIcon ? "hide-icon" : ""
                    }`}
                    ></i>
                </div>
          </div>

            

          {/* nav menu */}
          <div
            className={`nav__menu ${menuVisible ? "show-menu" : ""}`}
            id="nav-menu"
          >
            <div
                className={`nav__toggle ${menuToggleIcon ? "show-icon" : ""} nav__data`}
                onClick={handleToggleClick}
            >
                <a href="#" className="nav__logo ">
                    <img 
                        src={Logo}
                        alt="Logo"
                        width="40"
                        className="nav__logo"
                    />
                    <span>TNSES</span>
                </a>

                <i
                    className={`ri-close-line nav__close ${
                    menuToggleIcon ? "" : "hide-icon"
                    }`}
                    ></i>
            </div>

            <ul className="nav__list">
              <li>
                <a href="#" className="nav__link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav__link">
                  About
                </a>
              </li>

              {/* dropdown 1 */}
              <li className="dropdown__item">
                <div className="nav__link">
                  Services<i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className="dropdown__menu">
                    <li>
                        <a href="#" className="dropdown__link">
                            <i className="ri-pie-chart-line"></i> Applied Digital Skills
                        </a>
                    </li>
                    <li>
                        <a href="#" className="dropdown__link">
                            <i className="ri-arrow-up-down-line"></i> Blueprint
                        </a>
                    </li>

                    {/* dropdown submenu */}
                    <li className="dropdown__subitem">
                        <div className="dropdown__link">
                            <i className="ri-bar-chart-line"></i> Mentorship <i className="ri-add-line dropdown__add"></i>
                        </div>

                        <ul className="dropdown__submenu">
                            <li>
                                <a href="#" className="dropdown__sublink">
                                    <i className="ri-file-list-line"></i> Documents
                                </a>
                            </li>
                            <li>
                                <a href="#" className="dropdown__sublink">
                                    <i className="ri-cash-line"></i> Payments
                                </a>
                            </li>
                            <li>
                                <a href="#" className="dropdown__sublink">
                                    <i className="ri-refund-2-line"></i> Refunds
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
              </li>
              <li>
                <a href="#" className="nav__link">
                  Products
                </a>
              </li>

              {/* dropdown 2 */}
              {/* <li className="dropdown__item">
                <div className="nav__link">
                  Users <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul className="dropdown__menu">
                    <li>
                        <a href="#" className="dropdown__link">
                            <i className="ri-user-line"></i> Profiles
                         </a>
                    </li>
                    <li>
                        <a href="#" className="dropdown__link">
                            <i className="ri-lock-line"></i> Accounts
                        </a>
                    </li>
                    <li>
                        <a href="#" className="dropdown__link">
                            <i className="ri-message-3-line"></i> Messages
                        </a>
                    </li>
                </ul>
              </li> */}
              <li>
                <a href="#" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
            <div className="nav__btn">
                <button className="signup__btn">
                    Sign Up
                </button>
                <button className="login__btn">
                    Log In
                </button>
            </div>

            <div className="nav__darkmode__md">
                    <DarkMode />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
