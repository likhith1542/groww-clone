import React from "react";
import "./Trust.css";
function Trust() {
  return (
    <div className="trust">
      <div className="trust__inner" >
        <img className="trust__lock" src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/security_groww@1x.995ac9fd.svg" alt=""/>
        <h1 className="trust__title">Trusted by Millions of Indians</h1>
        <h4 className="trust__desc" >
          We use cutting-edge technology to ensure that your personal
          information is fully encrypted and securely stored
        </h4>
      </div>
    </div>
  );
}

export default Trust;
