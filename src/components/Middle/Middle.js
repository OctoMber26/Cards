import React,{Fragment} from "react";
import "./Middle.css";
import cards from "../images/Cards@2x.png";
import cards_row from "../images/Cards-row@2x.png";
import wallet from "../images/Wallet.svg";

const Middle=()=>{
    return(
        <Fragment>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <h1 className="description text-center text-sm-start">The Best Place to facilitate and secure your finances</h1>
                    <p className="about">Play better, improve faster. It's the most complete mobile app
<span className="trust">Trust</span> <span className="us">us</span></p>
<button className="register">Open Account</button>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <img className="cards img-fluid" src={cards} />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <img className="cards-row img-fluid"  src={cards_row} />
                </div>
                <div className="col-lg-6 col-sm-12 text-end">
                    <img className="wallet img-fluid"  src={wallet} />
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Middle;