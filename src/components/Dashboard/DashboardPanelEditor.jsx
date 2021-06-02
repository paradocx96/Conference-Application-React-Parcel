// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/styles/Dashboard.css'
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class DashboardPanelEditor extends Component {

    render() {
        return (
            <div>
                <section id="dashboard">
                    <h1>EDITOR DASHBOARD</h1>
                    <div className="dashboard-container">
                        <Nav variant="tabs" defaultActiveKey="#">
                            <Nav.Item>
                                <Link to="/editor-dashboard" className={'nav-link'} >Dashboard</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <a href="#keynote" className={'nav-link'} >Keynote</a>
                            </Nav.Item>
                            <Nav.Item>
                                <a href="#news" className={'nav-link'} >News</a>
                            </Nav.Item>
                            <Nav.Item>
                                <a href="#download" className={'nav-link'} >Download</a>
                            </Nav.Item>
                        </Nav>
                    </div>
                </section>
            </div>
        )
    }
}