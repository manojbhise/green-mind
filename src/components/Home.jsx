import React from "react";
import "../styles/Home.css";
import freeHandImg1 from "../images/Vector 186.png";
import freeHandImg2 from "../images/Vector 187.png";
import rectangleImg from "../images/free_hand_rectangle.png";
import plantImg from "../images/plant.png";
import SearchIcon from "../icons/SearchIcon";
import RightArrow from "../icons/RightArrow";
import naturalPlant from '../images/Frame 9.png'
import artificialPlants from '../images/Frame 8.png'
import RupayIcon from "../icons/RupayIcon";
import cactusIcon from '../images/Frame 7.png'

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
        <img
          className="free-hand-img1"
          src={freeHandImg1}
          alt="free-hand-img1"
        />
        <img className="rectangle-img" src={rectangleImg} alt="rectangle-img" />
        <img className="plant-img" src={plantImg} alt="plant-img" />
        <img
          className="free-hand-img2"
          src={freeHandImg2}
          alt="free-hand-img2"
        />
      </div>
      <div className="best-selling-plants">
        <div>
          <p>Best Selling Plants</p>
          <p>Easiest way to healthy life by buying your favorite plants </p>
          <button>See more <RightArrow/></button>
        </div>
        <div>
          <img src={naturalPlant} alt="Natural plants" />
          <p className="plant-cat">Natural Plants</p>
          <p className="price"><RupayIcon/>599/-</p>
        </div>
        <div>
          <img src={artificialPlants} alt="artificial-plants"/>
          <p className="plant-cat">Artificial Plants</p>
          <p className="price"><RupayIcon/>699/-</p>
        </div>
        <div>
          <img src={cactusIcon} alt="cactus-icon"/>
          <p className="plant-cat">Artificial Plants</p>
          <p className="price"><RupayIcon/>799/-</p>
        </div>
      </div>
    </div>
  );  
};

export default Home;
