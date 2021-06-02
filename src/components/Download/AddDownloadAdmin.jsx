// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/styles/Keynote.css'

import DashboardPanel from "../Dashboard/DashboardPanel";
import AddDownload from "./AddDownload";

export default class AddDownloadAdmin extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <DashboardPanel/>
                <AddDownload/>
            </div>
        )
    }
}