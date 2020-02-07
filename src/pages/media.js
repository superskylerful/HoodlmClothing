import React from 'react';
import Navbar from '../components/navigation/navbar';
import Footer from '../components/navigation/footer';

const Media = () => {
    return (
      <div className="media-page-wrapper">
        {/* <Navbar /> */}
        <div className="MediaTitle">
          <h1>Media</h1>
        </div>
        <div className="ImagesWrapper">
          <div className="Image">
            <img src="https://res.cloudinary.com/hoodlm/image/upload/v1579106155/hoodlm/hoodlm1_ax4qbb.jpg" />
          </div>
          <div className="Image">
            <img src ="https://res.cloudinary.com/hoodlm/image/upload/v1579106154/hoodlm/hoodlm2_zmggtq.jpg" />
          </div>
          <div className="Image">
            <img src ="https://res.cloudinary.com/hoodlm/image/upload/v1579106155/hoodlm/Hoodlm3_vo8tga.jpg" />
          </div>
          <div className="Image">
            <img src ="https://res.cloudinary.com/hoodlm/image/upload/v1579106155/hoodlm/hoodlm4_uxfufe.jpg" />
          </div>
          <div className="Image">
            <img src ="https://res.cloudinary.com/hoodlm/image/upload/v1579106154/hoodlm/hoodlm5_azfeb9.jpg" />
          </div>
          <div className="Image">
            <img src="https://res.cloudinary.com/hoodlm/image/upload/v1579106154/hoodlm/hoodlm6_vpcrzx.jpg" />
          </div>
          <div className="Image">
            <img src ="https://res.cloudinary.com/hoodlm/image/upload/v1579106154/hoodlm/hoodlm7_z4midi.jpg" />
          </div>
          <div className="Image">
            <img src ="https://res.cloudinary.com/hoodlm/image/upload/v1579106154/hoodlm/hoodlm8_waw0jo.jpg" />
          </div>
          <div className="Image">
            <img src ="https://res.cloudinary.com/hoodlm/image/upload/v1579106154/hoodlm/hoodlm9_hser6c.jpg" />
          </div>
          <div className="Image">
            <img src ="https://res.cloudinary.com/hoodlm/image/upload/v1579106154/hoodlm/hoodlm10_k7mg9y.jpg" />
          </div>
          <div className="Image">
            <img src ="https://res.cloudinary.com/hoodlm/image/upload/v1579106154/hoodlm/hoodlm11_jkarqp.jpg" />
          </div>
          <div className="Image">
            <img src ="https://res.cloudinary.com/hoodlm/image/upload/v1579106153/hoodlm/hoodlm12_zpmumv.jpg" />
          </div>
          <div className="Image">
            <img src="https://res.cloudinary.com/hoodlm/image/upload/v1579106153/hoodlm/hoodlm13_pcbhzg.jpg" />
          </div>
          <div className="Image">
            <img src ="https://res.cloudinary.com/hoodlm/image/upload/v1579106153/hoodlm/hoodlm14_gtivrz.jpg" />
          </div>
          <div className="Image">
            <img src ="https://res.cloudinary.com/hoodlm/image/upload/v1579106153/hoodlm/hoodlm15_twjrku.jpg" />
          </div>
        </div>

        <Footer />
      </div>
    );
}

export default Media;