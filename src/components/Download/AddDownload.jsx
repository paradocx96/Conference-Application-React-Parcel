// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import {Form, Button, Col, Row, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/styles/Download.css';

import DownloadService from "../../services/DownloadService";

export default class AddDownload extends Component {

    // TODO: Initializing state values and functions
    constructor(props) {
        super(props);
        this.state = this.initialState;

        this.submitDownload = this.submitDownload.bind(this);
        this.resetForm = this.resetForm.bind(this);

        this.FileHandler = this.FileHandler.bind(this);
        this.NameHandler = this.NameHandler.bind(this);
        this.TypeHandler = this.TypeHandler.bind(this);
    }

    // TODO: Initializing default values
    initialState = {
        name: '',
        type: '',
        user: 'Editor',
        file: null
    }

    // TODO: Reset form values
    resetForm = () => {
        this.setState(() => this.initialState);
    }

    // TODO: Set Values for state variables
    FileHandler = async (event) => {
        event.preventDefault();
        await this.setState({file: event.target.files[0]});
    }

    NameHandler = (event) => {
        event.preventDefault();
        this.setState({name: event.target.value});
    }

    TypeHandler = (event) => {
        event.preventDefault();
        this.setState({type: event.target.value});
    }

    // TODO: Implementation of add Download item
    submitDownload = async (event) => {
        event.preventDefault();

        const formValue = new FormData();
        formValue.append("file", this.state.file);
        formValue.append("name", this.state.name);
        formValue.append("type", this.state.type);
        formValue.append("user", this.state.user);

        if (formValue == null) {
            console.log('Form value is NULL!!!');
        } else {
            await DownloadService.postKeyNote(formValue)
                .then(response => response.data)
                .then((data) => {
                    console.log(data)
                })
                .catch(function (error) {
                    console.log(error);
                });
            this.resetForm();
        }
    }

    render() {
        return (
            <div>
                <section id="download">
                    <h2>Add Download Items</h2>
                    <Form onSubmit={this.submitDownload.bind(this)}
                          onReset={this.resetForm.bind(this)}>

                        <Form.Group as={Row} controlId="name">
                            <Form.Label column sm={2}>File Name</Form.Label>
                            <Col sm={10}>
                                <Form.Control required placeholder="File Name"
                                              name={'name'}
                                              value={this.state.name}
                                              onChange={this.NameHandler.bind(this)}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="type">
                            <Form.Label column sm={2}>File Type</Form.Label>
                            <Col sm={10}>
                                <Form.Control required as="select"
                                              name={'type'}
                                              value={this.state.type}
                                              onChange={this.TypeHandler.bind(this)}>
                                    <option> </option>
                                    <option>Research Paper Template</option>
                                    <option>Workshop PowerPoint Templates</option>
                                    <option>Other Templates</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="file">
                            <Form.Label column sm={2}>Select File</Form.Label>
                            <Col sm={10}>
                                <Form.File
                                    className={'position-relative'}
                                    required
                                    name={'file'}
                                    onChange={this.FileHandler.bind(this)}
                                    id={'file'}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={{span: 10, offset: 2}}>
                                <Button type="submit">Submit File</Button>{'\u00A0'}
                                <Button type="reset" className="btn-danger">Reset</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </section>
            </div>
        )
    }
}