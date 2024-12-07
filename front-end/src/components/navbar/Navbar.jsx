import { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.png';
import Dropdown from './Dropdown';
import DarkMode from './DarkMode';
import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi';

export const MenuLinks = [
  { id: 1, name: 'Home', link: '/#home' },
  { id: 2, name: 'Services', link: '/#services' },
  { id: 3, name: 'About', link: '/#about' },
  { id: 4, name: 'Contact', link: '/#contact' }
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  // Update theme in localStorage when it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [theme]);

  // Open/close dropdown when hovering over Services link
  const handleDropdownToggle = (state) => {
    setDropdownOpen(state);
  };

  return (
    <nav className={`${sticky ? 'dark-nav' : ''} ${theme === 'dark' ? 'dark' : ''}`}>
      <div className='navbar-container'>
        <div className='navbar-items'>
          <div className='logo'>
            <a href="#">
              <img src={Logo} alt='logo' />
            </a>
            <h1>TNSES</h1>
          </div>

          {/* Desktop view */}
          <div className='desktop-view'>
            <ul className='nav-links'>
              {MenuLinks.map(({ id, name, link }) => {
                if (name === 'Services') {
                  return (
                    <li 
                      key={id} 
                      onMouseEnter={() => handleDropdownToggle(true)} 
                      onMouseLeave={() => handleDropdownToggle(false)}
                      style={{ position: 'relative' }}
                    >
                      <a href={link} className='nav-link'>{name}</a>
                      {dropdownOpen && <Dropdown isOpen={dropdownOpen} closeDropdown={() => setDropdownOpen(false)} />}
                    </li>
                  );
                }
                return (
                  <li key={id}>
                    <a href={link} className='nav-link'>{name}</a>
                  </li>
                );
              })}
            </ul>
            <button>
              <i className='fa fa-sign-out'></i>Sign In
            </button>
            <div className='darkmode-desktop'>
              <DarkMode setTheme={setTheme} theme={theme} />
            </div>
          </div>

          {/* Mobile view */}
          <div className='mobile-view'>
            <div className='darkmode-mobile'>
              <DarkMode setTheme={setTheme} theme={theme} />
            </div>
            <button>
              <i className='fa fa-sign-out'></i>Sign In
            </button>
            {showMenu ? (
            <div className='himenualt1'>
              <HiMenuAlt1 onClick={() => setShowMenu(false)} />
            </div>
            ) : (
            <div className='himenualt3'>
              <HiMenuAlt3 onClick={() => setShowMenu(true)} />
            </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
