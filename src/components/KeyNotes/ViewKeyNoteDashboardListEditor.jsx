// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import {Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import KeyNoteService from "../../services/KeyNoteService";

export default class ViewKeyNoteDashboardListEditor extends Component {

    // TODO: Initializing state values
    constructor(props) {
        super(props);
        this.state = {
            keynotes: [],
            isLoading: true,
            errors: null,
            show: false
        };
    }

    //TODO: Function for get all activated Keynotes data from database
    componentDidMount = async () => {
        // this.getKeyNotes();
        await KeyNoteService.getKeyNotes()
            .then(response =>
                response.data.map(
                    keynote => ({
                        id: keynote.id,
                        speakername: keynote.speakername,
                        speakertype: keynote.speakertype,
                        organization: keynote.organization,
                        description: keynote.description,
                        status: keynote.status,
                        user: keynote.user,
                        datetime: keynote.datetime
                    }))
            )
            .then(keynotes => {
                this.setState({
                    keynotes,
                    isLoading: false
                });
            })
            .catch(error =>
                this.setState({
                    error,
                    isLoading: true
                })
            );
    }

    render() {
        const {isLoading, keynotes} = this.state;
        return (
            <div>
                <h3>KeyNotes List</h3>
                <div>
                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                        <tr>
                            <th>Speaker Name</th>
                            <th>Speaker Type</th>
                            <th>Organization</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>User</th>
                            <th>Date & Time</th>
                        </tr>
                        </thead>
                        <tbody>
                        {!isLoading ? (
                            keynotes.map(keynote => {
                                const {
                                    id,
                                    speakername,
                                    speakertype,
                                    organization,
                                    description,
                                    status,
                                    user,
                                    datetime
                                } = keynote;
                                return (
                                    <tr key={id}>
                                        <td>{speakername}</td>
                                        <td>{speakertype}</td>
                                        <td>{organization}</td>
                                        <td>{description}</td>
                                        <td>{status}</td>
                                        <td>{user}</td>
                                        <td>{datetime}</td>
                                        <td>
                                            <Button className="btn-success">Edit</Button>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td>Loading...</td>
                                <td>Loading...</td>
                                <td>Loading...</td>
                                <td>Loading...</td>
                                <td>Loading...</td>
                                <td>Loading...</td>
                                <td>Loading...</td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}