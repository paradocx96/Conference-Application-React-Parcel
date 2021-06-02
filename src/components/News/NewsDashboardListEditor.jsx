// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";
import {Button, Table} from "react-bootstrap";

import NewsService from "../../services/NewsService";

export default class NewsDashboardListEditor extends Component {

    // TODO: Initializing state values
    constructor(props) {
        super(props);
        this.state = {
            newsList: [],
            isLoading: true,
            errors: null,
            show: false
        };
    }

    //TODO: Function for get all News data from database
    componentDidMount = async () => {
        await NewsService.getNews()
            .then(response =>
                response.data.map(
                    news => ({
                        id: news.id,
                        description: news.description,
                        date: news.date,
                        datetime: news.datetime,
                        status: news.status,
                        user: news.user
                    }))
            )
            .then(newsList => {
                this.setState({
                    newsList,
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
        const {isLoading, newsList} = this.state;
        return (
            <div>
                <h3>News List</h3>
                <div>
                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Creation Date & Time</th>
                            <th>Status</th>
                            <th>User</th>
                        </tr>
                        </thead>
                        <tbody>
                        {!isLoading ? (
                            newsList.map(news => {
                                const {id, description, date, datetime, status, user} = news;
                                return (
                                    <tr key={id}>
                                        <td>{date}</td>
                                        <td>{description}</td>
                                        <td>{datetime}</td>
                                        <td>{status}</td>
                                        <td>{user}</td>
                                        <td>
                                            <Button className="btn-success">Edit</Button>
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