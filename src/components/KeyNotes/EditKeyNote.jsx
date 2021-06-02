// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";
import {Form, Button, Col, Row, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class EditKeyNote extends Component {

    // TODO: Initializing state values and functions
    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    componentDidMount() {
        const {data} = this.props.location.state;
        console.log(data);

        this.setState({
            id: data.id,
            speakername: data.speakername,
            speakertype: data.speakertype,
            organization: data.organization,
            description: data.description,
            status: data.status,
            user: data.user,
            datetime: data.datetime
        })
    }

    initialState = {
        id: '',
        speakername: '',
        speakertype: '',
        organization: '',
        description: '',
        status: '',
        user: '',
        datetime: ''
    }


    render() {
        return (
            <div>
                <section>
                    <div>
                        <h1>Edit KeyNote</h1>
                        {this.state.id}
                    </div>
                </section>
            </div>
        )
    }
}