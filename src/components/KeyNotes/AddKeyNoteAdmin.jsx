// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/styles/Keynote.css'

import DashboardPanel from "../Dashboard/DashboardPanel";
import AddKeyNote from "./AddKeyNote";

export default class AddKeyNoteAdmin extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <DashboardPanel/>
                <AddKeyNote/>
            </div>
        )
    }
}