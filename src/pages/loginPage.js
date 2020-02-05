import React, { Component } from 'react'
import Login from "../components/auth/login"
import NavLinks from '../components/navigation/navbar';
import Footer from '../components/navigation/footer';

export default class LoginPage extends Component {
    render() {
        return (
            <div className="LoginPageWrapper">
                <NavLinks />
                <div className="LoginButtons">
                    <Login />
                </div>
                <Footer />
            </div>
        )
    }
}
