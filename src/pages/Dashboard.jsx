// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/assets/styles/Dashboard.css';

import DashboardPanel from "../components/Dashboard/DashboardPanel";
import AboutDashboard from "../components/About/AboutDashboard";

export default class Dashboard extends Component {

    render() {
        return (
            <div>
                <DashboardPanel/>
                <div id="dashboard-example">
                    <h1>Dashboard Here</h1>
                    <AboutDashboard/>
                </div>
            </div>
        )
    }
}