// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";
import {Form, Button, Col, Row, Container, Card, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutService from "../../services/AboutService";

export default class AboutDashboard extends Component {

    // TODO: Initializing state values and functions
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state = {
            AboutList: []
        }

        // For Buttons
        this.submitBtn = this.submitBtn.bind(this);
        this.resetBtn = this.resetBtn.bind(this);

        // For Form Data
        this.DescriptionHandler = this.DescriptionHandler.bind();
        this.VenueHandler = this.VenueHandler.bind();
        this.DateHandler = this.DateHandler.bind();

        // For Functions
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount = async () => {
        await AboutService.getAboutDetails()
            .then(response => response.data)
            .then((data) => {
                this.setState({AboutList: data});
            }).catch(error =>
                console.log(error)
            );
    }

    // TODO: Initializing default values
    initialState = {
        description: '',
        venue: '',
        date: ''
    }

    // TODO: Set Values for state variables
    DescriptionHandler = (event) => {
        this.setState({description: event.target.value})
    }

    VenueHandler = (event) => {
        this.setState({venue: event.target.value})
    }

    DateHandler = (event) => {
        this.setState({date: event.target.value})
    }

    //TODO: Add About Details Function
    submitBtn = async (event) => {
        event.preventDefault();

        let aboutDetails = {
            description: this.state.description,
            venue: this.state.venue,
            date: this.state.date
        }

        await AboutService.postAbout(aboutDetails)
            .then(response => response.data)
            .then((data) => {
                console.log(data)
            })
            .catch(function (error) {
                console.log(error);
            });
        this.resetBtn();
        await this.componentDidMount();
    }

    // TODO: Reset form values
    resetBtn = () => {
        this.setState(() => this.initialState)
    }

    //TODO: Function for delete About Details
    handleDelete = async (id) => {
        await AboutService.deleteAboutDetailsById(id)
            .then(response => response.data)
            .then((data) => {
                console.log(data)
            }).catch(error => {
                console.log(error);
            });

        await this.componentDidMount();
    }

    render() {
        return (
            <div>
                <section id="about">
                    <div id="about-add">
                        <h2>Add About Details</h2>
                        <Form onSubmit={this.submitBtn.bind(this)} onReset={this.resetBtn.bind(this)}>

                            <Form.Group as={Row} controlId="NewsDescription">
                                <Form.Label column sm={2}>Description</Form.Label>
                                <Col sm={8}>
                                    <Form.Control placeholder="Description.."
                                                  as="textarea" rows={5}
                                                  value={this.state.description}
                                                  onChange={this.DescriptionHandler}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="SpeakerName">
                                <Form.Label column sm={2}>Venue</Form.Label>
                                <Col sm={5}>
                                    <Form.Control placeholder="Venue.."
                                                  value={this.state.venue}
                                                  onChange={this.VenueHandler}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="NewsDate">
                                <Form.Label column sm={2}>Date</Form.Label>
                                <Col sm={5}>
                                    <Form.Control type="date"
                                                  value={this.state.date}
                                                  onChange={this.DateHandler}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Col sm={{span: 10, offset: 2}}>
                                    <Button type="submit">Add News</Button>{'\u00A0'}
                                    <Button type="reset" className="btn-danger">Reset</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </div>

                    <div id="about-view">
                        <h2>About Details</h2>
                        <Table striped bordered hover variant="dark" size="sm">
                            <thead>
                            <tr>
                                <th>Description</th>
                                <th>Venue</th>
                                <th>Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.AboutList.length === 0 ?
                                    'Loading...'
                                    :
                                    this.state.AboutList.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.description}</td>
                                            <td>{item.venue}</td>
                                            <td>{item.date}</td>
                                            <td><Button>Edit</Button></td>
                                            <td>
                                                <Button
                                                    onClick={this.handleDelete.bind(this, item.id)}
                                                    className="btn-danger">Delete</Button>
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

// Add About data

// View About data