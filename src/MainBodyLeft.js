import { Button } from "@material-ui/core";
import React from "react";
import CardComponent from "./CardComponent";
import "./MainBodyLeft.css";
function MainBodyLeft() {
  return (
    <div className="mainbodyleft">
      <h3 className="market__timing">Market Opens in 1 Day</h3>

      <div className="market__indexs">
        <div className="market__index">
          <h3 className="marketindex__heading">Index</h3>
          <Button className="market__allstocks" disableRipple={true}>
            All Stocks
          </Button>
        </div>
        <div className="marketindex__cards">
          <div className="market__card">
            <div className="market__names">
              <h4 className="market__name">Nifty</h4>
              <h5 className="market__namesh">Nse</h5>
            </div>
            <div className="market__graph">
              <h5>graph</h5>
            </div>
            <div className="market__values">
              <h4 className="market__value">13,513.85</h4>
              <h5 style={{ color: "#00d09c" }} className="market__valuesh">
                35.55 (0.26%)
              </h5>
            </div>
          </div>

          <div className="market__card">
            <div className="market__names">
              <h4 className="market__name">Sensex</h4>
              <h5 className="market__namesh">Bse</h5>
            </div>
            <div className="market__graph">
              <h5>graph</h5>
            </div>
            <div className="market__values">
              <h4 className="market__value">46,099.01</h4>
              <h5 style={{ color: "#00d09c" }} className="market__valuesh">
                139.13 (0.30%)
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="market__categories">
        <div className="market__index">
          <h3 className="marketindex__heading">Stocks in News</h3>
        </div>
        <div className="stock__card">
          <CardComponent
            name="IRCTC"
            marketprice="1,421.00"
            percentage="-31.75 (2.19%)"
            src="https://assets-netstorage.groww.in/stock-assets/logos/INE335Y01012.png"
          />
          <CardComponent
            name="Indian Oil Corp."
            marketprice="93.85"
            percentage="1.40 (1.51%)"
            src="https://assets-netstorage.groww.in/stock-assets/logos/INE242A01010.png"
          />
          <CardComponent
            name="Muthooth Finance"
            marketprice="1,173.00"
            percentage="-11.70 (0.99%)"
            src="https://assets-netstorage.groww.in/stock-assets/logos/INE414G01012.png"
          />
          <CardComponent
            name="Tata Steel"
            marketprice="621.70"
            percentage="11.60 (1.90%)"
            src="https://assets-netstorage.groww.in/stock-assets/logos/INE081A01012.png"
          />
        </div>
      </div>

      <div className="market__categories">
        <div className="market__index">
          <h3 className="marketindex__heading">Top Gainers</h3>
        </div>
        <div className="stock__card">
          <CardComponent
            name="ONGC"
            marketprice="96.80"
            percentage="5.15 (5.62%)"
            src="https://assets-netstorage.groww.in/stock-assets/logos/INE213A01029.png"
          />
          <CardComponent
            name="PNB"
            marketprice="40.50"
            percentage="2.10 (5.47%)"
            src="https://assets-netstorage.groww.in/stock-assets/logos/INE160A01022.png"
          />
          <CardComponent
            name="NTPC"
            marketprice="102.40"
            percentage="5.25 (5.40%)"
            src="https://assets-netstorage.groww.in/stock-assets/logos/INE733E01010.png"
          />
          <CardComponent
            name="GAIL India"
            marketprice="125.85"
            percentage="5.80 (4.83%)"
            src="https://assets-netstorage.groww.in/stock-assets/logos/INE129A01019.png"
          />
        </div>
      </div>

      <div className="market__categories">
        <div className="market__index">
          <h3 className="marketindex__heading">Top Losers</h3>
        </div>
        <div className="stock__card">
          <CardComponent
            name="YES Bank"
            marketprice="19.45"
            percentage="-1.00 (2.19%)"
            src="https://assets-netstorage.groww.in/stock-assets/logos/INE528G01027.png"
          />
          <CardComponent
            name="Page Industries"
            marketprice="23,557.90"
            percentage="-793.95 (3.26%)"
            src="https://assets-netstorage.groww.in/stock-assets/logos/INE761H01022.png"
          />
          <CardComponent
            name="Divis Lab"
            marketprice="3,462.10"
            percentage="-90.15 (2.42%)"
            src="https://assets-netstorage.groww.in/stock-assets/logos/INE361B01024.png"
          />
          <CardComponent
            name="Axis Bank"
            marketprice="613.25"
            percentage="-13.80 (2.20%)"
            src="https://assets-netstorage.groww.in/stock-assets/logos/INE238A01034.png"
          />
        </div>
      </div>

      <div className="market__stocks">
        <div className="market__index">
          <h3 className="marketindex__heading">Top Sectors</h3>
          <Button className="market__allstocks" disableRipple={true}>
            All Sectors
          </Button>
        </div>
        <div className="stocksector__cards">
          <div className="stocksector__card">
            <h4 className="stock__sector">Banking</h4>
            <h4 className="stock__number">34</h4>
          </div>
          <div className="stocksector__card">
            <h4 className="stock__sector">Energy</h4>
            <h4 className="stock__number">79</h4>
          </div>
          <div className="stocksector__card">
            <h4 className="stock__sector">Healthcare</h4>
            <h4 className="stock__number">160</h4>
          </div>
          <div className="stocksector__card">
            <h4 className="stock__sector">FMCG</h4>
            <h4 className="stock__number">174</h4>
          </div>
          <div className="stocksector__card">
            <h4 className="stock__sector">Automobile</h4>
            <h4 className="stock__number">116</h4>
          </div>
          <div className="stocksector__card">
            <h4 className="stock__sector">Tele-Communication</h4>
            <h4 className="stock__number">40</h4>
          </div>
          <div className="stocksector__card">
            <h4 className="stock__sector">Media & Entertainment</h4>
            <h4 className="stock__number">74</h4>
          </div>
        </div>
      </div>

      <div className="top__marketcap">
        <div className="market__index">
          <h3 className="marketindex__heading">Top by Market Cap</h3>
          <Button className="market__allstocks" disableRipple={true}>
            See All
          </Button>
        </div>

        <div className="card__holder" >
            <table className="top__table" >
                <thead className="top__head" >
                    <tr className="table__row" >
                        <th className="table__item" >
                            <h4 className="table__text" >Company</h4>
                        </th>
                        <th className="table__item" >
                            <h4 className="table__text" ></h4>
                        </th>
                        <th className="table__item" >
                            <h4 className="table__text" >Market Price</h4>
                        </th>
                        <th className="table__item" >
                            <h4 className="table__text" >Watchlist</h4>
                        </th>
                    </tr>
                </thead>
                <tbody className="top__body" ></tbody>
            </table>
        </div>
      </div>
    </div>
  );
}

export default MainBodyLeft;
