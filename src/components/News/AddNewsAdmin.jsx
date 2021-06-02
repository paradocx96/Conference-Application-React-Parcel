// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import DashboardPanel from "../Dashboard/DashboardPanel";
import AddNews from "./AddNews";

export default class AddNewsAdmin extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <DashboardPanel/>
                <AddNews/>
            </div>
        )
    }
}