import { Button } from "@material-ui/core";
import React from "react";
import "./MainNavBar.css";
function MainNavBar() {
  return (
    <div className="mainnavbar">
      <div className="mainbar__buttons">
        <Button className="mainbar__button" disableRipple={true}>
          Stocks
        </Button>
        <Button className="mainbar__button" disableRipple={true}>
          Mutual Funds
        </Button>
        <Button className="mainbar__button" disableRipple={true}>
          Gold
        </Button>
        <Button className="mainbar__button" disableRipple={true}>
          US Stocks
        </Button>
        <Button className="mainbar__button" disableRipple={true}>
          FDs
        </Button>
      </div>
      <div className="mainbar__line" ></div>
    </div>
  );
}

export default MainNavBar;
