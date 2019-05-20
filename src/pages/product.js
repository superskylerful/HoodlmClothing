import React, { Component } from 'react'
import NavBar from '../components/navigation/navbar';
import Footer from '../components/navigation/footer';
import { mockData } from "../mockData";
import {Link} from 'react-router-dom';

export default class Product extends Component {
constructor(){
    super();

    this.state = {
        product: []
    };
}



    renderProduct = () => {
    return this.state.product.map(product => {
        return (
        <div key={product.id} className="show-page-content">
            <div className="ProductWrapper">
                <div className="ProductImage">
                    <img src={product.image} />
                </div>
                <div className="ProductContent">
                    <div className="ProductTitle">
                        {product.name}
                    </div>
                    <div className="ProductDescription">
                        <li>{product.description[0]}</li>
                        <li>{product.description[1]}</li>
                        <li>{product.description[2]}</li>
                        <li>{product.description[3]}</li>
                        <li>{product.description[4]}</li>
                        <li>{product.description[5]}</li>
                    </div>
                    <div className="ProductPrice">
                        {product.qty === 0 ? <h2>Sold Out</h2> :
                        <h2>${Number(product.price).toFixed(2)}</h2>}
                    </div>
                    <div className="ProductFooterwrapper">
                        <div className="ProductSize">
                            {product.sizes}
                        </div>
                        <div className="AddToCart">
                        <Link to={`/cart/${product.id}`}>Add To Cart</Link>
                        </div>
                        <div className="BackButton">
                        <Link to={"/shop"}>Back To Shop</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    })
}

componentWillMount() {
    this.setState({
        product: mockData.filter(item => {
            return item.id === this.props.match.params.id;
        })
    });
}

    render() {
        console.log('props from product', this.props.match.params.id);
        console.log('filtered product', this.state.product);
        
    return (
        <div>
            <NavBar />
            <div className="ItemContent">
                {this.renderProduct()}
            </div>
            <Footer />
        </div>
    )
    }
}
