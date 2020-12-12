import React from "react";
import "./CardComponent.css";

function CardComponent({ src, name, marketprice, percentage }) {
  return (
    <div className="cardcomponent">
      <div className="card">
        <div className="card__info" >
          <div className="card__imgholder">
            <img className="card__img" src={src} alt="" />
          </div>
          <h4 className="card__name" >{name}</h4>
        </div>
        <div className="card__details">
          <h4 className="card__price" >₹{marketprice}</h4>
          <h4 style={{ color: "#00d09c" }} className="market__valuesh" >{percentage}</h4>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
