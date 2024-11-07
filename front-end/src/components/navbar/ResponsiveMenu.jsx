import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MenuLinks } from "./Navbar";
import './ResponsiveMenu.css';

const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <div className={`responsive-menu ${showMenu ? 'show' : ''}`}>
      <div className="card">
        <div className='user-section'>
        <div className='fa-user-circle'>
          <FaUserCircle size={50} />
        </div>
        <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
        </div>
        </div>
        <nav>
          <ul className="space-y-4 text-xl">
            {MenuLinks.map((data) => (
              <li key={data.name}>
                <a href={data.link} className="mb-5 inline-block">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          Made with ❤ by <a href="https://dilshad-ahmed.github.io/">//</a>
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
