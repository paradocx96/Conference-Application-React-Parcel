// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class FooterBar extends Component {

    render() {
        return (
            <div>
                <Card>
                    <Card.Header className="text-left">Contact Us</Card.Header>
                    <Card.Body className="text-left">
                        <Card.Title>Faculty of Computing, Sri Lanka Institute of Information Technology, Sri Lanka</Card.Title>
                        <Card.Text>Telephone: +94 11 754 4801</Card.Text>
                        <Card.Text>Fax: +94 11 241 3901</Card.Text>
                        <Card.Text>Email: info@sliit.lk</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">©2021 SLIIT, developed by RHNA. All Rights Reserved.</Card.Footer>
                </Card>
            </div>
        )
    }
}