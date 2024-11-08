import React, { useState } from 'react';
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
