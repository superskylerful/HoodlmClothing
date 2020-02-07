import React, { useState } from "react";
import Navbar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer";

const Home = () => {
  
    return (
      <div>
        {/* <Navbar /> */}
          <div className="HomePage">
            <div className="Image">
              <img src ="https://res.cloudinary.com/hoodlm/image/upload/v1579106153/hoodlm/hoodlm14_gtivrz.jpg" />
            {/* <div className="Title">
              Hoodlm Clothing
            </div> */}
            </div>
          </div>
        <Footer />
      </div>
    );
  }

export default Home;