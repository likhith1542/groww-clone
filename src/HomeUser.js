import React from "react";
import "./HomeUser.css";
function HomeUser({ title, desc, name, desg }) {
  return (
    <div className="homeuser">
      <div className="homeuser__card">
        <div className="card1__inner">
        <img src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/mfCardComma.9e9f9bcf.png" alt="" />
          <div className="card1__header">
            <div className="card1__heading">{title}</div>
          </div>
          <div className="card1__paratext">{desc}</div>
          <div className="user">{name}</div>
          <div className="userdeg">{desg}</div>
        </div>
      </div>
    </div>
  );
}

export default HomeUser;
