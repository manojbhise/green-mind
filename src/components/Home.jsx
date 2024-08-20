import React from "react";
import "../styles/Home.css";
import freeHandImg1 from "../images/Vector 186.png";
import freeHandImg2 from "../images/Vector 187.png";
import rectangleImg from "../images/free_hand_rectangle.png";
import plantImg from "../images/plant.png";
import SearchIcon from "../icons/SearchIcon";

const Home = () => {
  return (
    <div className="home-container">
      <div className="plants">
        <div className="buy-plants">
          <div>
            <p>
              Buy your <br /> dream plants
            </p>
          </div>
          <div>
            <p>
              50+ <br /> <span>Plant Species</span>
            </p>
            <span></span>
            <p>
              100+ <br /> <span>Customers</span>
            </p>
          </div>
          <div>
            <input type="text" placeholder="What are you looking for?" />
            <div>
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="plant">
          <img
            className="free-hand-img1"
            src={freeHandImg1}
            alt="free-hand-img1"
          />
          <img
            className="rectangle-img"
            src={rectangleImg}
            alt="rectangle-img"
          />
          <img className="plant-img" src={plantImg} alt="plant-img" />
          <img
            className="free-hand-img2"
            src={freeHandImg2}
            alt="free-hand-img2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
