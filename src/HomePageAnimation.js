import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./HomePageAnimation.css";

function HomePageAnimation({btn,linktext, pos, title, listarray, desc, btntext, url, src,width,height }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let i = (index + 1) % listarray.length;
      setIndex(i);
    }, 1000);
    //eslint-disable-next-line
  }, [index]);
  return (
    <div className="homepageanimation">
      {pos % 2 === 0 ? (
        <div style={{margin: 150}} className="homepage__description">
          <div className="homepage__title">
            <h1 className="title">{title}</h1>
            {listarray ? <h1 className="listarray">{listarray[index]}</h1> : ""}
          </div>
          <p className="desc">{desc}</p>
          {btn===true?<Button className="header__login">{btntext}</Button>:<a href={url} >link</a>}
        </div>
      ) : (
        <div className="homepage__image">
          <img style={{margin: 150}} width={width} height={height} className="homepage__img" src={src} alt="" />
        </div>
      )}

      {pos % 2 === 0 ? (
        <div className="homepage__image">
          <img width={width} height={height} className="homepage__img" src={src} alt="" />
        </div>
      ) : (
        <div className="homepage__description">
          <div className="homepage__title">
            <h1 className="title">{title}</h1>
            {listarray ? <h1 className="listarray">{listarray[index]}</h1> : ""}
          </div>
          <p className="desc">{desc}</p>
          {btn===true?<Button className="header__login">{btntext}</Button>:<a className="linktag" href={url} >{linktext}</a>}
        </div>
      )}
    </div>
  );
}

export default HomePageAnimation;
