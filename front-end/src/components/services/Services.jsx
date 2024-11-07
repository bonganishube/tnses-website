import React from "react";
import './Services.css';
import { MdCastForEducation } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";

const skillsData = [
  {
    name: "Google for Education",
    icon: <MdCastForEducation className="service-icon" />,
    link: "#",
    description:
      "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
    aosDelay: "0",
  },
  {
    name: "Blueprint",
    icon: <MdOutlineMenuBook className="service-icon" />,
    link: "#",
    description:
      "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
    aosDelay: "300",
  },
  {
    name: "Service Three",
    icon: <FaChalkboardTeacher className="service-icon" />,
    link: "#",
    description:
      "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <div className='services'>
      <span id="about"></span>
      <div className="services-container">
        <div className="container">
          {/* Header */}
          <div className="header">
            <h1 className="header-title">Explore Our Services</h1>
            <p className="header-description">
            "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod bibendum.
            </p>
          </div>

          {/* services cards */}
          <div className="services-grid">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                className="service-card"
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
              >
                <div>{skill.icon}</div>
                <h1 className="service-title">{skill.name}</h1>
                <p className="service-description">{skill.description}</p>

                {/* Subtle Learn More button for each service */}
                <a href={skill.link} className="subtle-btn">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
