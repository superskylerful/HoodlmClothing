import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EmptyCart extends Component {
    render() {
        return (
            <div className="EmptyCartContainer">
                <div className="EmptyCartTitleContainer">
                    <div className="EmptyCartTitle">
                    <h1>Your Cart is Currently Empty :(</h1>
                    </div>
                </div>
                <div className="GoToShopContainer">
                    <div className="GoToShopButton">
                    <Link to={"/shop"}>Go To Shop</Link>
                    </div>
                </div>
            </div>
    )
    }
}
