import React, { Component } from 'react'
import Login from "../components/auth/login"
import NavLinks from '../components/navigation/navbar';
import Footer from '../components/navigation/footer';
import AdminForm from '../components/admin/adminForm';

export default class Admin extends Component {
    render() {
        return (
            <div className="AdminPageContainer">
                {/* <NavLinks /> */}
                    <AdminForm  />
                <Footer />
            </div>
        )
    }
}