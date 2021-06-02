// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import {Col, Row, Container, Table, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/styles/Download.css';

import DownloadService from "../../services/DownloadService";
import FileDownload from "js-file-download";

export default class DownloadSection extends Component {

    // TODO: Initializing state values
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.handleDownload = this.handleDownload.bind(this);
    }

    initialState = {
        itemList: []
    }

    //TODO: Function for get all activated News data from database
    componentDidMount = async () => {
        await DownloadService.getDownloadItemsListByStatus('Active')
            .then(response => response.data)
            .then((data) => {
                this.setState({itemList: data});
            }).catch(error =>
                console.log(error)
            );
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
        return (
            <div>
                <section id="download-main">
                    <h1>Download Items Section</h1>
                    <h2>Here you can download latest templates</h2>
                    <div className="download-list">
                        <Table striped bordered hover variant="dark" size="sm">
                            <tbody>
                            {
                                this.state.itemList.length === 0 ?
                                    <tr>
                                        <td>Loading...</td>
                                    </tr>
                                    :
                                    this.state.itemList.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.type}</td>
                                            <td>
                                                <Button onClick={this.handleDownload.bind(this, item.id)}
                                                        className="btn-secondary">
                                                    Download
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                            }
                            </tbody>
                        </Table>
                    </div>
                </section>
            </div>
        )
    }
}