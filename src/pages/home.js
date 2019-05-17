import React, { Component } from "react";
import Navbar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer";
import Slider from "react-slick";

export default class Home extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true,
      centerMode: true
    };
    return (
      <div>
        <Navbar />
        <Slider {...settings}>
          <div className="SlickImg one" style={{ width: 1000, height: 500 }}>
            <div className="SlickHeader">
              <div className="TopHeader">
                <h2>Hoodlm Clothing</h2>
                <h3>"Hold the vision, trust the proccess"</h3>
              </div>
              {/* <img src="https://source.unsplash.com/random" /> */}
            </div>
          </div>
          <div className="SlickImg one" style={{ width: 1000, height: 500 }}>
            <div className="SlickHeader">
              <div className="TopHeader">
                <h2>Hoodlm Clothing</h2>
                <h3>"Hold the vision, trust the proccess"</h3>
              </div>
              {/* <img src="https://source.unsplash.com/random" /> */}
            </div>
          </div>
          <div className="SlickImg one" style={{ width: 1000, height: 500 }}>
            <div className="SlickHeader">
              <div className="TopHeader">
                <h2>Hoodlm Clothing</h2>
                <h3>"Hold the vision, trust the proccess"</h3>
              </div>
              {/* <img src="https://source.unsplash.com/random" /> */}
            </div>
          </div>
        </Slider>
        <Footer />
      </div>
    );
  }
}
