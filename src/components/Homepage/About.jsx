// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import AboutService from "../../services/AboutService";
import {Col, Container, Row} from "react-bootstrap";

export default class About extends Component {

    constructor(props) {
        super(props);

        this.state = {
            AboutList: []
        }
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

    render() {
        return (
            <div>
                {
                    this.state.AboutList.length === 0 ?
                        'Loading...'
                        :
                        this.state.AboutList.map((item) => (
                            <Container key={item.id}>
                                <Row>
                                    <Col sm={2}> </Col>
                                    <Col sm={8}>{item.description}</Col>
                                    <Col sm={2}> </Col>
                                </Row>
                                <br/><br/>
                                <Row>
                                    <Col sm={3}> </Col>
                                    <Col sm={3}><h4>VENUE</h4></Col>
                                    <Col sm={3}><h4>DATE</h4></Col>
                                    <Col sm={3}> </Col>
                                </Row>
                                <Row>
                                    <Col sm={3}> </Col>
                                    <Col sm={3}><h5>{item.venue}</h5></Col>
                                    <Col sm={3}><h5>{item.date}</h5></Col>
                                    <Col sm={3}> </Col>
                                </Row>
                            </Container>
                        ))
                }
            </div>
        )
    }
}