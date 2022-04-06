import React from "react";
import { Link } from "react-router-dom";
import { RoundImageCard } from "../components/RoundImageCard";

export const HomeScreen = () => {
  return (
    <div id="main">
      <div className="hero-section">
        <div className="hero-content">
          <p className="hero-heading h2 white-0">Watch amazing videos</p>
          <p className="hero-subheading h6 regular white-0">
            We bring the most authentic and trending videos to give you full
            entertainment and information
          </p>
          <Link to="/auth" className="btn btn-primary btn-lg">
            WATCH NOW
          </Link>
        </div>
      </div>
      {/* <!-- offer-section --> */}
      <div className="offer-section">
        <h2 className="h2 tx-center m-20 p-20 black-6">Categories</h2>
        <div className="offer-container">
          {[1, 2, 3, 4].map((item, idx) => {
            return (
              <Link key={item} to="/videos">
                <RoundImageCard
                  key={item.id}
                  imageUrl="https://via.placeholder.com/150"
                  title={"Categories"}
                  onClick={() => console.log("Clicked")}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="feature-section">
        <h2 className="h2 tx-center m-20 p-20 black-6">Why Us ?</h2>
        <div className="feature-cards-container">
          <div className="feature-card">
            <i className="uil uil-shield-check feature-icon"></i>
            <h3 className="feature-card-heading">Fully Secure</h3>
            <p className="feature-card-subheading">
              Shopping with us ensure full security for our customer
            </p>
          </div>

          <div className="feature-card">
            <i className="uil uil-gift feature-icon"></i>
            <h3 className="feature-card-heading">Amazing Offers</h3>
            <p className="feature-card-subheading">
              Shopping with us ensure full security for our customer
            </p>
          </div>
          <div className="feature-card">
            <i className="uil uil-truck feature-icon"></i>
            <h3 className="feature-card-heading">Ontime Shipment</h3>
            <p className="feature-card-subheading">
              Shopping with us ensure full security for our customer
            </p>
          </div>
          <div className="feature-card">
            <i className="uil uil-wallet feature-icon"></i>
            <h3 className="feature-card-heading">Easy Payment</h3>
            <p className="feature-card-subheading">
              Shopping with us ensure full security for our customer
            </p>
          </div>
          <div className="feature-card">
            <i className="uil uil-phone-volume feature-icon"></i>
            <h3 className="feature-card-heading">24*7 Support</h3>
            <p className="feature-card-subheading">
              Shopping with us ensure full security for our customer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
