import React from "react";
import "./Fund.css";
import { ArrowRightAlt } from "@material-ui/icons";
function Fund() {
  return (
    <div className="funds">
      <div className="funds__heading" >
        <h2 className="funds__title">35+ Fund Partners</h2>
        <hr className="funds__linesegment"></hr>
      </div>

      <div className="fund__icons" >
          <img className="fund__icon" src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/lt.e6d04eea.png" alt="" />
          <img className="fund__icon" src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/kotak.cc656d32.png" alt="" />
          <img className="fund__icon" src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/sbi.0aea72a2.png" alt="" />
          <img className="fund__icon" src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/hdfc-bank-logo.25b7d8be.png" alt="" />
          <img className="fund__icon" src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/ab-small.e1161c17.png" alt="" />
          <img className="fund__icon" src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/21.0244eaad.png" alt="" />
      </div>
      
      <div className="fund__linkdiv">
          <a className="fund__link" href="/" >
              View all fund partners
          </a>
          <ArrowRightAlt className="arrow" />
      </div>
    </div>
  );
}

export default Fund;
