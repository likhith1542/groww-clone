import React from "react";
import "./HomeArticles.css";
function HomeArticles({page,stitle,title,desc}) {
  return (
    <div className="homearticles">
      <div className="homearticles__card">
        <div className="card__inner">
          <div className="card__header">
            <div className="homearticles__box">
              <span className="card__sname">{stitle}</span>
            </div>
            <div className="card__heading">{title}</div>
          </div>
          <div className="card__paratext" >
              {desc}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeArticles;
