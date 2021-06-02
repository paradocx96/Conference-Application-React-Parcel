// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import {Form, Button, Col, Row, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/styles/Keynote.css'

import KeyNoteService from "../../services/KeyNoteService";

export default class AddKeyNote extends Component {

    // TODO: Initializing state values and functions
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.assignSpeakerNameHandler = this.assignSpeakerNameHandler.bind();
        this.assignSpeakerTypeHandler = this.assignSpeakerTypeHandler.bind();
        this.assignOrganizationHandler = this.assignOrganizationHandler.bind();
        this.assignDescriptionHandler = this.assignDescriptionHandler.bind();
        this.submitKeyNote = this.submitKeyNote.bind(this);
        this.resetForm = this.resetForm.bind(this);
        // this.callGetViewMethod = ViewKeyNote.bind(this);
    }

    // TODO: Initializing default values
    initialState = {
        speakername: '',
        speakertype: '',
        organization: '',
        description:'',
        user:'Admin'
    }

    // TODO: Implementation of Add KeyNote Button
    submitKeyNote = (event) => {
        event.preventDefault();

        if (this.state.speakername == null || this.state.speakertype == null) {
            alert("Fill All Data!!!");
        } else {
            let keynote = {
                speakername: this.state.speakername,
                speakertype: this.state.speakertype,
                organization: this.state.organization,
                description: this.state.description,
                user: this.state.user
            }

            // TODO: Save new Keynote in database
           KeyNoteService.postKeyNote(keynote)
                .catch(function (error) {
                    console.log(error);
                }).then(() => {
                console.log('KEYNOTE ADDED TO DATABASE!');
                console.log('KeyNote => ' + JSON.stringify(keynote));
                this.resetForm();
            });
        }
        // this.callGetViewMethod.getKeyNotes();
    }

    // TODO: Reset form values
    resetForm = () => {
        this.setState(() => this.initialState)
    }

    // TODO: Set Values for state variables
    assignSpeakerNameHandler = (event) => {
        this.setState({speakername: event.target.value})
    }

    assignSpeakerTypeHandler = (event) => {
        this.setState({speakertype: event.target.value})
    }

    assignOrganizationHandler = (event) => {
        this.setState({organization: event.target.value})
    }

    assignDescriptionHandler = (event) => {
        this.setState({description: event.target.value})
    }

    render() {
        return (
            <div>
                <section id="keynote">
                    <h2>Add Keynote</h2>
                    <Form onSubmit={this.submitKeyNote.bind(this)}
                          onReset={this.resetForm.bind(this)}>
                        <Form.Group as={Row} controlId="SpeakerName">
                            <Form.Label column sm={2}>
                                Speaker Name
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control placeholder="Speaker Name"
                                              value={this.state.speakername}
                                              onChange={this.assignSpeakerNameHandler}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="SpeakerType">
                            <Form.Label column sm={2}>
                                Speaker Type
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control placeholder="Speaker Type"
                                              value={this.state.speakertype}
                                              onChange={this.assignSpeakerTypeHandler}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="SpeakerOrganization">
                            <Form.Label column sm={2}>
                                Speaker's Organization
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control placeholder="Speaker's Organization"
                                              value={this.state.organization}
                                              onChange={this.assignOrganizationHandler}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="SpeakerDescription">
                            <Form.Label column sm={2}>
                                Description
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control as="textarea" rows={10}
                                              value={this.state.description}
                                              onChange={this.assignDescriptionHandler}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={{span: 10, offset: 2}}>
                                <Button type="submit">Add KeyNote</Button>{'\u00A0'}
                                <Button type="reset">Reset</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </section>
            </div>
        )
    }
}