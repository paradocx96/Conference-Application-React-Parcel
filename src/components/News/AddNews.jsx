// TODO: IT19180526 - Chandrasiri S A N L D

import React, { Component } from "react";

import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/styles/News.css'

import NewsService from "../../services/NewsService";

export default class AddNews extends Component {

    // TODO: Initializing state values and functions
    constructor(props) {
        super(props);
        this.state = this.initialState;

        this.submitNews = this.submitNews.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.DateHandler = this.DateHandler.bind();
        this.DescriptionHandler = this.DescriptionHandler.bind();
    }

    // TODO: Initializing default values
    initialState = {
        description: '',
        date: '',
        user: 'Admin'
    }

    // TODO: Set Values for state variables
    DateHandler = (event) => {
        this.setState({date: event.target.value})
    }

    DescriptionHandler = (event) => {
        this.setState({description: event.target.value})
    }

    // TODO: Reset form values
    resetForm = () => {
        this.setState(() => this.initialState)
    }

    //TODO: Add new News Function
    submitNews = async (event) => {
        event.preventDefault();
        
        let newsArray = {
            description: this.state.description,
            date: this.state.date,
            user: this.state.user
        }

        await NewsService.postNews(newsArray)
            .then(response => response.data)
            .then((data) => {
                console.log(data)
            })
            .catch(function (error) {
            console.log(error);
        });
        this.resetForm();
    }

    render() {
        return (
            <div>
                <section id="news">
                    <h2>Add News</h2>
                    <Form onSubmit={this.submitNews.bind(this)}
                        onReset={this.resetForm.bind(this)}>

                        <Form.Group as={Row} controlId="NewsDate">
                            <Form.Label column sm={2}>Date</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="date"
                                    value={this.state.date}
                                    onChange={this.DateHandler} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="NewsDescription">
                            <Form.Label column sm={2}>Description</Form.Label>
                            <Col sm={10}>
                                <Form.Control placeholder="Description"
                                    as="textarea" rows={5}
                                    value={this.state.description}
                                    onChange={this.DescriptionHandler} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button type="submit">Add News</Button>{'\u00A0'}
                                <Button type="reset" className="btn-danger">Reset</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </section>

            </div>
        )
    }
}