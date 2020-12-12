import React from "react";
import HomeArticles from "./HomeArticles";
import "./HomePress.css";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function HomePress() {
  return (
    <div className="homepress">
      <div className="homepress__heading">
        <h2 className="homepress__title">In The Press</h2>
        <hr className="homepress__linesegment"></hr>
        <div className="homepress__articles">
          <HomeArticles className="home__indarticles"
            stitle="TOI"
            title="Times of India"
            desc="People were shopping online but finance was still old world"
          />
          <HomeArticles className="home__indarticles"
            stitle="TOI"
            title="Times of India"
            desc="People were shopping online but finance was still old world"
          />
          <HomeArticles className="home__indarticles"
            stitle="TOI"
            title="Times of India"
            desc="People were shopping online but finance was still old world"
          />
        </div>
        <div className="press__linkdiv" >
        <a className="press__link" href="/" >View all articles</a>
        <ArrowRightAltIcon className="arrow" />
        </div>
      </div>
    </div>
  );
}

export default HomePress;
