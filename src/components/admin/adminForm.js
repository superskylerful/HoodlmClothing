import React, { Component } from 'react'

export default class AdminForm extends Component {
    render() {
        return (
            <div className="form-page">
                <div className="form-title">
                    <h1>Add items to store</h1>
                </div>

                <div className="form-container">
                    <div className="form">
                        <div className="form-group">
                            <input type="text" id="productName" placeholder="Product Name" />
                            <label for="productName">Product Name</label>
                        </div>

                        <div className="form-group">
                            <input type="number" id="price" placeholder="$0.00" />
                            <label for="price">Price</label>
                        </div>

                        <div className="form-group">
                            <input type="text" id="description" placeholder="Description" />
                            <label for="description">Description</label>
                        </div>

                        <div className="form-group">
                            <input type="number" id="extraSmallQty" placeholder="Extra Small Qty" />
                            <label for="extraSmallQty">Extra Small Qty</label>
                        </div>

                        <div className="form-group">
                            <input type="number" id="smallQty" placeholder="Small Qty" />
                            <label for="smallQty">Small Qty</label>
                        </div>

                        <div className="form-group">
                            <input type="number" id="mediumQty" placeholder="Medium Qty" />
                            <label for="mediumQty">Medium Qty</label>
                        </div>

                        <div className="form-group">
                            <input type="number" id="largeQty" placeholder="Large Qty" />
                            <label for="largeQty">Large Qty</label>
                        </div>

                        <div className="form-group">
                            <input type="number" id="extraLargeQty" placeholder="Extra Large Qty" />
                            <label for="extraLargeQty">Extra Large Qty</label>
                        </div>

                        <div className="form-group">
                            <input type="number" id="extraExtraLargeQty" placeholder="Extra Extra Large Qty" />
                            <label for="extraExtraLargeQty">Extra Extra Large Qty</label>
                        </div>

                        <div className="btn-wrapper">
                            <button type="submit" className="btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

