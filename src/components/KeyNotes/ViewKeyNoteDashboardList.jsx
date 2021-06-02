// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import {Button, Table} from 'react-bootstrap';
import {confirmAlert} from "react-confirm-alert";
import 'bootstrap/dist/css/bootstrap.min.css';

import KeyNoteService from "../../services/KeyNoteService";

export default class ViewKeyNoteDashboardList extends Component {

    // TODO: Initializing state values and functions
    constructor(props) {
        super(props);
        this.state = {
            keynotes: [],
            isLoading: true,
            errors: null,
            show: false
        };

        this.handleActivate = this.handleActivate.bind(this);
        this.handleDeactivate = this.handleDeactivate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDeleteProcess = this.handleDeleteProcess.bind(this);
    }

    //TODO: Function for get all Keynotes data from database
    componentDidMount = async () => {

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

    //TODO: Function for activate a Keynote
    handleActivate = async (id) => {
        let value = {
            status: 'Active'
        }

        await KeyNoteService.updateKeyNoteStatus(id, value)
            .then(response => response.data)
            .then((data) => {
                console.log(data)
            }).catch(error => {
                console.log(error);
            })

        await this.componentDidMount();
    }

    //TODO: Function for deactivate a Keynote
    handleDeactivate = async (id) => {
        let value = {
            status: 'Deactive'
        }

        await KeyNoteService.updateKeyNoteStatus(id, value)
            .then(response => response.data)
            .then((data) => {
                console.log(data)
            }).catch(error => {
                console.log(error);
            })

        await this.componentDidMount();
    }

    //TODO: Function for confirm popup
    handleDelete = (id) => {
        confirmAlert({
            title: 'Do you want to delete Keynote?',
            message: 'This cannot be undone',
            buttons: [
                {
                    label: 'I understand. Delete.',
                    onClick: this.handleDeleteProcess.bind(this, id)
                },
                {
                    label: 'Do not delete',
                    onClick: this.handleDeleteCancel.bind(this)
                }
            ]
        })

    }

    handleDeleteCancel = () => {
        alert("Deletion Cancelled.");
    }

    //TODO: Function for delete a Keynote
    handleDeleteProcess = async (id) => {
        await KeyNoteService.deleteKeyNoteById(id)
            .then(response => response.data)
            .then((data) => {
                console.log(data)
            }).catch(error => {
                console.log(error);
            });

        await this.componentDidMount();
    }

    render() {
        const {isLoading, keynotes} = this.state;
        return (
            <div>
                <h1>KeyNotes List</h1>
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
                                        <td>
                                            <Button onClick={this.handleActivate.bind(this, keynote.id)}
                                                    className="btn-secondary">Activate</Button><br/><br/>
                                            <Button onClick={this.handleDeactivate.bind(this, keynote.id)}
                                                    className="btn-warning">Deactivate</Button>
                                        </td>
                                        <td>
                                            <Button onClick={this.handleDeleteProcess.bind(this, keynote.id)}
                                                    className="btn-danger">Delete</Button>
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
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}