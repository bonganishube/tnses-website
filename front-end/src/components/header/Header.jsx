import { useState, useEffect, useRef } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png"
// import  DarkMode from "../darkmode/DarkMode";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuToggleIcon, setMenuToggleIcon] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const accordionContainerRef = useRef(null);

  const handleToggleClick = () => {
    setMenuVisible((prev) => !prev);
    setMenuToggleIcon((prev) => !prev);
  };

  useEffect(() => {
    // Header active state on scroll
    const handleScroll = () => {
      setIsHeaderActive(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const accordions = accordionContainerRef.current.querySelectorAll("[data-accordion]");

    const initAccordion = (currentAccordion) => {
      const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

      const toggleAccordion = () => {
        const isExpanded = currentAccordion.classList.contains("expanded");
        currentAccordion.classList.toggle("expanded", !isExpanded);
      };

      const hoverExpand = () => {
        if (window.innerWidth > 770) {
          currentAccordion.classList.add("expanded");
        }
      };

      const hoverCollapse = () => {
        if (window.innerWidth > 770) {
          currentAccordion.classList.remove("expanded");
        }
      };

      // Add click listener
      accordionBtn.addEventListener("click", toggleAccordion);

      // Add hover listeners for larger screens
      currentAccordion.addEventListener("mouseenter", hoverExpand);
      currentAccordion.addEventListener("mouseleave", hoverCollapse);

      // Cleanup event listeners when component unmounts
      return () => {
        accordionBtn.removeEventListener("click", toggleAccordion);
        currentAccordion.removeEventListener("mouseenter", hoverExpand);
        currentAccordion.removeEventListener("mouseleave", hoverCollapse);
      };
    };

    // Initialize all accordions
    const cleanups = Array.from(accordions).map(initAccordion);

    // Cleanup all event listeners
    return () => {
      cleanups.forEach((cleanup) => cleanup && cleanup());
    };
  }, []);

  return (
    <header className={`header-section ${isHeaderActive ? "active" : ""}`}>
      <nav className="nav-container">
        <div className="nav-items">
          <a href="#" className={`nav-logo ${isHeaderActive ? "active" : ""}`}>
                <img 
                    src={Logo}
                    alt="Logo"
                    width="40"
                />
                <span>TNSES</span>
          </a>

          

          {/* small screen */}
          <div className={`header-section-sm ${isHeaderActive ? "active" : ""}`}>

          <div className="nav-btn-md">
                <button className="signup-btn">
                    Sign Up
                </button>
                <button className={`login-btn ${isHeaderActive ? "active" : ""}`}>
                    Log In
                </button>
                </div>
                {/* <div className="header-darkmode-sm">
                    <DarkMode />
                </div> */}
                <span className="header-pipe">|</span>
                <h1>Menu</h1>
                <div
                    className={`nav-toggle ${menuToggleIcon ? "show-icon" : ""}`}
                    onClick={handleToggleClick}
                >
                    <i
                    className={`ri-menu-line nav-burger ${
                        menuToggleIcon ? "hide-icon" : ""
                    } ${isHeaderActive ? "active" : ""}`}
                    ></i>
                </div>
          </div>

  
          {/* nav menu */}
          <div
            className={`nav-menu ${menuVisible ? "show-menu" : ""}`}
            id="nav-menu"
          >
            <div
                className={`nav-toggle-overlay ${menuToggleIcon ? "show-icon" : ""} nav-items`}
                onClick={handleToggleClick}
            >
                <a href="#" className="nav-logo-overlay">
                    <img 
                        src={Logo}
                        alt="Logo"
                    />
                    <span>TNSES</span>
                </a>
                <div className="nav-close-section">
                  <h1>Close</h1>
                  <i
                      className={`ri-close-line nav-close ${
                      menuToggleIcon ? "" : "hide-icon"
                      }`}
                  ></i>
                </div>
            </div>
          <div>

      <ul className="nav-list" ref={accordionContainerRef}>
        <li>
          <a href="#" className={`nav-link ${isHeaderActive ? "active" : ""}`}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={`nav-link ${isHeaderActive ? "active" : ""}`}>
            About
          </a>
        </li>

        {/* dropdown 1 accordion */}
        <li className="dropdown-item">
          <div className="accordion-card" data-accordion>
            <a className="accordion-btn" data-accordion-btn>
              <div className={`nav-link ${isHeaderActive ? "active" : ""}`}>
                <span>Services</span>
                <i className="ri-arrow-down-s-line dropdown-arrow"></i>
              </div>
            </a>
            <ul className="accordion-content dropdown-menu">
              <li>
                <a href="#" className="dropdown-link">
                  <i className="ri-pie-chart-line"></i> Applied Digital Skills
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-link">
                  <i className="ri-arrow-up-down-line"></i> Blueprint
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-link">
                  <i className="ri-file-list-line"></i> Mentorship
                </a>
              </li>

              {/* dropdown submenu accordion */}
              {/* <li className="dropdown-subitem">
                <div className="accordion-card-submenu" data-accordion>
                  <a className="accordion-btn-submenu" data-accordion-btn>
                    <div className="dropdown-link">
                      <i className="ri-bar-chart-line"></i>
                      <span className="span h5">Mentorship</span>
                      <i className="ri-add-line dropdown-add"></i>
                    </div>
                  </a>
                  <ul className="accordion-content-submenu dropdown-submenu">
                    <li>
                      <a href="#" className="dropdown-sublink">
                        <i className="ri-file-list-line"></i> Documents
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dropdown-link">
                        <i className="ri-cash-line"></i> Payments
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dropdown-link">
                        <i className="ri-refund-2-line"></i> Refunds
                      </a>
                    </li>
                  </ul>
                </div>
              </li> */}
            </ul>
          </div>
        </li>
        <li>
          <a href="#" className={`nav-link ${isHeaderActive ? "active" : ""}`}>
            Products
          </a>
        </li>
        <li>
          <a href="#" className={`nav-link ${isHeaderActive ? "active" : ""}`}>
            Contact
          </a>
        </li>
      </ul>
    </div>

            <div className="nav-btn">
                <button className="signup-btn">
                    Sign Up
                </button>
                <button className={`login-btn ${isHeaderActive ? "active" : ""}`}>
                    Log In
                </button>
            </div>

            {/* <div className={`nav-darkmode-lg ${isHeaderActive ? "active" : ""}`}>
                    <DarkMode />
            </div> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
