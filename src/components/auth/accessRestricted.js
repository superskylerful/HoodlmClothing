import React, { Component } from 'react'
import Navbar from "../navigation/navbar";
import Footer from "../navigation/footer";

export default class AccessRestricted extends Component {
    render() {
        return (
            <div>
                {/* <Navbar /> */}
                    <div className="AccessRestricted">
                        <h1>Access Restricted</h1>
                    </div>
                <Footer />
            </div>
        )
    }
}
