import React, { Component } from 'react'
import Login from "../components/auth/login"
import NavLinks from '../components/navigation/navbar';
import Footer from '../components/navigation/footer';

export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth() {
        this.props.handleSuccessfulLogin();
        this.props.history.push("/admin");
    }

    handleUnsuccessfulAuth() {
        this.props.handleUnsuccessfulLogin();
    }

    render() {
        return (
            <div className="LoginPageWrapper">
                <NavLinks />
                <div className="LoginButtons">
                    <Login
                        handleSuccessfulAuth={this.handleSuccessfulAuth}
                        handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
                    />
                </div>
                <Footer />
            </div>
        )
    }
}
