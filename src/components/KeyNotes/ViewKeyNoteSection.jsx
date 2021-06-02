// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import {Image} from "react-bootstrap";
import './../../assets/styles/Keynote.css';

import KeyNoteService from "../../services/KeyNoteService";

export default class ViewKeyNoteSection extends Component {

    // TODO: Initializing state values
    constructor(props) {
        super(props);
        this.state = {
            keynotes: [],
            isLoading: true,
            errors: null
        };
    }

    //TODO: Function for get all activated Keynotes data from database
    componentDidMount = async () => {
        await KeyNoteService.getKeyNotesByStatus("Active")
            .then(response =>
                response.data.map(
                    keynote => ({
                        id: keynote.id,
                        speakername: keynote.speakername,
                        speakertype: keynote.speakertype,
                        organization: keynote.organization,
                        description: keynote.description,
                        status: keynote.status,
                        user: keynote.user
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

    render() {
        const {isLoading, keynotes} = this.state;
        return(
            <div>
                <section id="keynote-main">
                    <h1>KEYNOTES</h1>
                    <div className="keynotespeaker">
                        {!isLoading ? (
                            keynotes.map(keynote => {
                                const {id, speakername, speakertype, organization, description} = keynote;
                                return (
                                    <div key={id} className="speaker-list">
                                        <Image
                                            src="https://i.pinimg.com/originals/a7/0e/16/a70e1675c7bc001f1578aa76bb0a7819.png"
                                            height="250px" width="auto" rounded />
                                        <h2>{speakername}</h2>
                                        <h3>{speakertype}</h3>
                                        <h4>{organization}</h4>
                                        <h5>{description}</h5>
                                    </div>
                                );
                            })
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </section>
            </div>
        )
    }
}