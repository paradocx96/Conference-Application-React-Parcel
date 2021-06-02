// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";
import './../../assets/styles/News.css'
import NewsService from "../../services/NewsService";

export default class NewsSection extends Component {

    // TODO: Initializing state values
    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    initialState = {
        newsList: []
    }

    //TODO: Function for get all activated News data from database
    componentDidMount = async () => {
        await NewsService.getNewsByStatus('Active')
            .then(response => response.data)
            .then((data) => {
                this.setState({newsList: data});
            }).catch(error =>
                console.log(error)
            );
    }

    render() {
        return (
            <div>
                <section id="news-main">
                    <h1>NEWS</h1>
                    <div>
                        {
                            this.state.newsList.length === 0 ?
                                <p>Loading...</p>
                                :
                                this.state.newsList.map((news) => (
                                    <div key={news.id} className="news-list">
                                        <h2>{news.date}</h2>
                                        <h3>{news.description}</h3>
                                    </div>
                                ))
                        }
                    </div>
                </section>
            </div>
        )
    }
}