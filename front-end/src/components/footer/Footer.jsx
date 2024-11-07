import React from "react";
import "./footer.css";

const Footer = () => {
  // Footer data directly included inside the component
  const footer = [
    {
      title: "LAYOUTS",
      text: [
        { list: "Home Page" },
        { list: "About Page" },
        { list: "Service Page" },
        { list: "Property Page" },
        { list: "Contact Page" },
        { list: "Single Blog" },
      ],
    },
    {
      title: "ALL SECTIONS",
      text: [
        { list: "Headers" },
        { list: "Features" },
        { list: "Attractive" },
        { list: "Testimonials" },
        { list: "Videos" },
        { list: "Footers" },
      ],
    },
    {
      title: "COMPANY",
      text: [
        { list: "About" },
        { list: "Blog" },
        { list: "Pricing" },
        { list: "Affiliate" },
        { list: "Login" },
        { list: "Changelog" },
      ],
    },
  ];

  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className="btn5">Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../images/logo-light.png" alt="Logo" />
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, tutorials, and discounts sent straight
                to your inbox every month.
              </p>

              <div className="input flex">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val, index) => (
            <div className="box" key={index}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, idx) => (
                  <li key={idx}>{items.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      <div className="legal">
        <span>© 2021 RentUP. Designed By GorkCoder.</span>
      </div>
    </>
  );
};

export default Footer;
