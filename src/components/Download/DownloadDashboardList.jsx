// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";
import {Button, Table} from "react-bootstrap";

import DownloadService from "../../services/DownloadService";
import {confirmAlert} from "react-confirm-alert";
import FileDownload from "js-file-download";

export default class DownloadDashboardList extends Component {

    // TODO: Initializing state values and functions
    constructor(props) {
        super(props);
        this.state = {
            downloadItemList: [],
            isLoading: true,
            errors: null,
            show: false
        };

        this.handleActivate = this.handleActivate.bind(this);
        this.handleDeactivate = this.handleDeactivate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDeleteProcess = this.handleDeleteProcess.bind(this);
        this.handleDownload = this.handleDownload.bind(this);
    }

    //TODO: Function for get all News data from database
    componentDidMount = async () => {
        await DownloadService.getDownloadItems()
            .then(response =>
                response.data.map(
                    item => ({
                        id: item.id,
                        name: item.name,
                        type: item.type,
                        status: item.status,
                        user: item.user,
                        datetime: item.datetime
                    }))
            )
            .then(downloadItemList => {
                this.setState({
                    downloadItemList,
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

    //TODO: Function for activate a News
    handleActivate = async (id) => {

        const formValue = new FormData();
        formValue.append("id", id);
        formValue.append("status", 'Active');

        if (formValue == null) {
            console.log('Values NULL!!!');
        } else {
            await DownloadService.updateStatusByFormValue(formValue)
                .then(response => response.data)
                .then((data) => {
                    console.log(data)
                }).catch(error => {
                    console.log(error);
                })

            await this.componentDidMount();
        }
    }

    //TODO: Function for deactivate a News
    handleDeactivate = async (id) => {
        const formValue = new FormData();
        formValue.append("id", id);
        formValue.append("status", 'Deactivated');

        if (formValue == null) {
            console.log('Values NULL!!!');
        } else {
            await DownloadService.updateStatusByFormValue(formValue)
                .then(response => response.data)
                .then((data) => {
                    console.log(data)
                }).catch(error => {
                    console.log(error);
                })

            await this.componentDidMount();
        }
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
        });
    }

    handleDeleteCancel = () => {
        console.log('Delete Process Canceled!!!');
    }

    //TODO: Function for delete a News
    handleDeleteProcess = async (id) => {
        await DownloadService.deleteDownloadItemById(id)
            .then(response => response.data)
            .then((data) => {
                console.log(data)
            }).catch(error => {
                console.log(error);
            });

        await this.componentDidMount();
    }

    //TODO: Function for Download file
    handleDownload = async (id) => {

        const formValue = new FormData();
        formValue.append("id", id);

        await DownloadService.getDownloadFileByParamId(formValue)
            .then((response) => {
                //get content disposition
                let headerLine = response.request.getResponseHeader('Content-Disposition')

                //set start at '=' sign of 'filename=' phrase
                let startFileNameIndex = headerLine.indexOf('=') + 1;

                //set the last index at the end of the content disposition
                let endFileNameIndex = headerLine.lastIndexOf('"');

                //get the substring filename
                let filename = headerLine.substring(startFileNameIndex, endFileNameIndex);

                FileDownload(response.data, filename + ".pdf");
            });

    }

    render() {
        const {isLoading, downloadItemList} = this.state;
        return (
            <div>
                <h1>Download Items List</h1>
                <div>
                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Date & Time</th>
                            <th>Status</th>
                            <th>User</th>
                        </tr>
                        </thead>
                        <tbody>
                        {!isLoading ? (
                            downloadItemList.map(item => {
                                const {id, name, type, status, user, datetime} = item;
                                return (
                                    <tr key={id}>
                                        <td>{name}</td>
                                        <td>{type}</td>
                                        <td>{datetime}</td>
                                        <td>{status}</td>
                                        <td>{user}</td>
                                        <td>
                                            <Button className="btn-success">Edit</Button>
                                        </td>
                                        <td>
                                            <Button
                                                onClick={this.handleActivate.bind(this, item.id)}
                                                className="btn-secondary">Activate</Button><br/><br/>
                                            <Button
                                                onClick={this.handleDeactivate.bind(this, item.id)}
                                                className="btn-warning">Deactivate</Button>
                                        </td>
                                        <td>
                                            <Button
                                                onClick={this.handleDownload.bind(this, item.id)}
                                                className="btn-info">Download</Button>
                                        </td>
                                        <td>
                                            <Button
                                                onClick={this.handleDeleteProcess.bind(this, item.id)}
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
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}