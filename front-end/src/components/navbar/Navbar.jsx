import { useState, useEffect } from 'react';
import './Navbar.css';
import './Dropdown.css';
import Logo from '../../assets/logo.png';
import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi';
import { FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [activeDropdown, setActiveDropdown] = useState(null);

  const MenuLinks = [
    { id: 1, name: 'Home', link: '/#home', hasDropdown: false },
    { id: 2, name: 'Services', link: '/#services', hasDropdown: true },
    { id: 3, name: 'About', link: '/#about', hasDropdown: false },
    { id: 4, name: 'Contact', link: '/#contact', hasDropdown: false },
  ];

  const DropdownItems = {
    Services: [
      { id: 1, name: 'Google for Education', link: './#google-for-education' },
      { id: 2, name: 'Blueprint', link: './#blueprint' },
      { id: 3, name: 'Mentorship', link: './#mentorship' },
    ],
    // Add more items if needed for other dropdowns
  };

  // Handle sticky navbar logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Manage dropdown behavior with useEffect for dynamic handling
  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Close dropdown if clicking outside
      if (!e.target.closest('.dropdown-container')) {
        setActiveDropdown(null); // Close the active dropdown
      }
    };

    if (activeDropdown !== null) {
      document.addEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [activeDropdown]);

  const handleDropdownToggle = (item) => {
    if (activeDropdown === item) {
      setActiveDropdown(null); // Close dropdown if it's already open
    } else {
      setActiveDropdown(item); // Open the new dropdown
    }
  };

  return (
    <nav className={`${sticky ? 'dark-nav' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-items">
          <div className="logo">
            <a href="#">
              <img src={Logo} alt="logo" />
            </a>
            <h1>TNSES</h1>
          </div>

          {/* Desktop view */}
          <div className="desktop-view">
            <ul className="nav-links">
              {MenuLinks.map(({ id, name, link, hasDropdown }) => {
                return (
                  <li
                    key={id}
                    className={`nav-item ${hasDropdown ? 'dropdown-container' : ''}`}
                    onMouseEnter={() => hasDropdown && handleDropdownToggle(name)}
                    onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                    style={{ position: 'relative' }}
                  >
                    <a href={link} className="nav-link">
                      {name}
                      {hasDropdown && <FiChevronDown style={{ marginLeft: '5px' }} />}
                    </a>
                    {hasDropdown && activeDropdown === name && (
                      <div className="services-submenu open">
                        <ul>
                          {DropdownItems[name]?.map(({ id, name, link }) => (
                            <li key={id}>
                              <a
                                href={link}
                                className="submenu-item"
                                onClick={(e) => {
                                  e.stopPropagation(); // Prevent dropdown from closing when clicking the item
                                  setActiveDropdown(null); // Close the dropdown after clicking an item
                                }}
                              >
                                {name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            <button>
              <i className="fa fa-sign-out"></i>Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
