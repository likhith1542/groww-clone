import React from "react";
import "./HomeUsers.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import HomeUser from "./HomeUser";

function HomeUsers() {
  return (
    <div className="homeusers">
      <div className="homeusers__heading">
        <h2 className="homeusers__title">From Our Users</h2>
        <hr className="homeusers__linesegment"></hr>
        <div className="homeusers__articles">
          <HomeUser
            className="home__indarticles"
            title="Helps you get Started"
            name="Abhinav Sohni"
            desc="I started investing because of groww. All this while I was losing money in my bank account."
            desg="Engineer at Tixdo"
          />
          <HomeUser
            className="home__indarticles"
            title="Helps you get Started"
            name="Abhinav Sohni"
            desc="I started investing because of groww. All this while I was losing money in my bank account."
            desg="Engineer at Tixdo"
          />
          <HomeUser
            className="home__indarticles"
            title="Helps you get Started"
            name="Abhinav Sohni"
            desc="I started investing because of groww. All this while I was losing money in my bank account."
            desg="Engineer at Tixdo"
          />
          
        </div>
        <div className="press__linkdiv">
          <a className="press__link" href="/">
            View all users
          </a>
          <ArrowRightAltIcon className="arrow" />
        </div>
      </div>
    </div>
  );
}

export default HomeUsers;
