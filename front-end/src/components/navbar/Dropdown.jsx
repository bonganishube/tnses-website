import './Dropdown.css';

export const Dropdown = ({ isOpen, closeDropdown }) => {
    const ServiceDropdown = [
        { id: 1, name: "Google for Education", link: "./#google-for-education" },
        { id: 2, name: "Blueprint", link: "./#blueprint" },
        { id: 3, name: "Mentorship", link: "./#mentorship" }
    ];

    return (
        <div className={`services-submenu ${isOpen ? 'open' : ''}`}>
            <ul>
                {ServiceDropdown.map(({ id, name, link }) => (
                    <li key={id}>
                        <a 
                            href={link} 
                            className='submenu-item' 
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent dropdown from closing when clicking the item
                                closeDropdown(); // Close the dropdown after clicking an item
                            }}
                        >
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;

{/* Mobile view */}
          {/* <div className='mobile-view'>
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
          </div> */}