// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";
import {Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import DashboardPanel from "../Dashboard/DashboardPanel";
import NewsDashboardList from "./NewsDashboardList";


export default class NewsDashboard extends Component {

    render() {
        return(
            <div>
                <DashboardPanel/>
                <section id="news">
                    <h1>News</h1>
                    <div className="addnews">
                        <Link to={'/dashboard-news-add'} className={'btn btn-primary'} >Add News</Link>
                    </div>
                    <div className="viewnews">
                        <NewsDashboardList/>
                    </div>
                </section>
            </div>
        )
    }
}