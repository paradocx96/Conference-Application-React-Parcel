// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";
import {Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/assets/styles/Dashboard.css';
import {Nav} from "react-bootstrap";

export default class DashboardPanel extends Component {

    render() {
        return (
            <div>
                <section id="dashboard">
                    <h1>ADMIN DASHBOARD</h1>
                    <div className="dashboard-container">

                        <Nav variant="tabs" defaultActiveKey="/dashboard">
                            <Nav.Item>
                                <Link to={'/dashboard'} className={'nav-link'} >Dashboard</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={'/dashboard-keynotes'} className={'nav-link'} >Keynote</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={'/dashboard-news'} className={'nav-link'} >News</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={'/dashboard-download'} className={'nav-link'} >Download</Link>
                            </Nav.Item>
                        </Nav>

                    </div>
                </section>
            </div>
        )
    }
}