// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";
import {Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/assets/styles/Dashboard.css';

import DashboardPanel from "../Dashboard/DashboardPanel";
import ViewKeyNoteDashboardList from "./ViewKeyNoteDashboardList";

export default class ViewKeyNoteDashboard extends Component {

    render() {
        return(
            <div>
                <DashboardPanel/>
                <section id="keynote">
                    <h1>KeyNotes</h1>
                    <div className="addkeynote">
                        <Link to={'/dashboard-keynotes-add'} className={'btn btn-primary'} >Add Keynote</Link>
                    </div>
                    <div className="viewkeynote">
                        <ViewKeyNoteDashboardList/>
                    </div>
                </section>
            </div>
        )
    }
}