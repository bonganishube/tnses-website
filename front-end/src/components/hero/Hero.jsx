import { useEffect, useState } from "react";
import "./Hero.css";
import Img1 from "../../assets/carousel/google-education-mobile.jpg";
import Img2 from "../../assets/carousel/blueprint-mobile.jpg";
import Img3 from "../../assets/carousel/readiness-mobile.jpg";
import Img4 from "../../assets/carousel/google-education.jpg";
import Img5 from "../../assets/carousel/blueprint.jpg";
import Img6 from "../../assets/carousel/readiness.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoPlayOutline } from "react-icons/io5";
import { IoPauseOutline } from "react-icons/io5";

const Hero = () => {
  const [isPaused, setIsPaused] = useState(false); // State to manage pause

  useEffect(() => {
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    const carousel = document.querySelector(".carousel-container");
    const list = document.querySelector(".list");
    const runningTime = document.querySelector(".carousel-container .timeRunning");
    const timeRunning = 3000; // Animation duration
    const timeAutoNext = 7000; // Auto next time interval
    let runTimeOut;
    let runNextAuto;

    const resetTimeAnimation = () => {
      if (!isPaused) {
        runningTime.style.animation = "none";
        runningTime.offsetHeight; // Trigger reflow
        runningTime.style.animation = "runningTime 7s linear 1 forwards";
      }
    };

    const showSlider = (type) => {
      const sliderItemsDom = list.querySelectorAll(".item");

      if (type === "next") {
        list.appendChild(sliderItemsDom[0]);
        carousel.classList.add("next");
      } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        carousel.classList.add("prev");
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carousel.classList.remove("next");
        carousel.classList.remove("prev");
      }, timeRunning);

      if (!isPaused) {
        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
          nextBtn.click();
        }, timeAutoNext);
      }

      resetTimeAnimation();
    };

    nextBtn.onclick = () => {
      showSlider("next");
    };

    prevBtn.onclick = () => {
      showSlider("prev");
    };

    // Start initial animation
    resetTimeAnimation();

    // Start auto-next
    if (!isPaused) {
      runNextAuto = setTimeout(() => {
        nextBtn.click();
      }, timeAutoNext);
    }

    // Cleanup function
    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, [isPaused]); // Re-run effect when isPaused changes

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
      <section className="carousel-container">
        <div className="list">
          <div
            className="item"
            style={{ backgroundImage: `url(${Img1})` }}
          >
            <div className="content">
              <div className="title">SLIDER</div>
              <div className="name">ONE</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis culpa similique consequuntur, reprehenderit dicta
                repudiandae.
              </div>
              <div className="btn">
                <button>Learn More</button>
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          <div
            className="item"
            style={{ backgroundImage: `url(${Img2})` }}
          >
            <div className="content">
              <div className="title">SLIDER</div>
              <div className="name">TWO</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis culpa similique consequuntur, reprehenderit dicta
                repudiandae.
              </div>
              <div className="btn">
                <button>Learn More</button>
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          <div
            className="item"
            style={{ backgroundImage: `url(${Img3})` }}
          >
            <div className="content">
              <div className="title">SLIDER</div>
              <div className="name">THREE</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis culpa similique consequuntur, reprehenderit dicta
                repudiandae.
              </div>
              <div className="btn">
                <button>Learn More</button>
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          <div
            className="item"
            style={{ backgroundImage: `url(${Img4})` }}
          >
            <div className="content">
              <div className="title">SLIDER</div>
              <div className="name">FOUR</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis culpa similique consequuntur, reprehenderit dicta
                repudiandae.
              </div>
              <div className="btn">
                <button>Learn More</button>
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          <div
            className="item"
            style={{ backgroundImage: `url(${Img5})` }}
          >
            <div className="content">
              <div className="title">SLIDER</div>
              <div className="name">FIVE</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis culpa similique consequuntur, reprehenderit dicta
                repudiandae.
              </div>
              <div className="btn">
                <button>Learn More</button>
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          <div
            className="item"
            style={{ backgroundImage: `url(${Img6})` }}
          >
            <div className="content">
              <div className="title">SLIDER</div>
              <div className="name">SIX</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis culpa similique consequuntur, reprehenderit dicta
                repudiandae.
              </div>
              <div className="btn">
                <button>Learn More</button>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          {/* Add other items */}
        </div>

        <div className="arrows">
          <button className="prev"><IoIosArrowBack /></button>
            <div className="controls">
            <button onClick={togglePause}>
                {isPaused ? <IoPlayOutline /> : <IoPauseOutline />}
            </button>
            </div>
          <button className="next"><IoIosArrowForward /></button>
        </div>
        <div className="timeRunning"></div>
      </section>
  );
};

export default Hero;
