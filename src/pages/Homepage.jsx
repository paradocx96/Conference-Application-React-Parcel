// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/assets/styles/Homepage.css';

import About from "../components/Homepage/About";
import Gallery from "../components/Homepage/Gallery";
import ConferenceTracks from "../components/Homepage/ConferenceTracks";
import Organise from "../components/Homepage/Organise";
import Sponsored from "../components/Homepage/Sponsored";
import ImportantDates from "../components/Homepage/ImportantDates";
import News from "../components/Homepage/News";
import KeyNotes from "../components/Homepage/KeyNotes";

export default class Homepage extends Component {

    render() {
        return (
            <div>
                <section id="introduction">
                    <div className="introduction-container">
                        <h1>International Conference on Application Frameworks - 2021</h1>
                        <h3>Sri Lanka Institute of Information Technology</h3>
                        <a href="#news" className="btn btn-dark">Latest News</a>
                    </div>
                </section>

                <section id="about">
                    <div className="about-container">
                        <h2>ABOUT ICAF 2021</h2>
                        <br/>
                        <div>
                            <About/>
                        </div>
                    </div>
                </section>

                <section id="keynotes">
                    <div className="keynote-container">
                        <h2>KEY NOTE SPEAKERS</h2>
                        <br/>
                        <div>
                            <KeyNotes/>
                        </div>
                    </div>
                </section>

                <section id="news">
                    <div className="news-container">
                        <h2>LATEST NEWS</h2>
                        <br/>
                        <div>
                            <News/>
                        </div>
                    </div>
                </section>

                <section id="gallery">
                    <div className="gallery-container">
                        <h2>GALLERY</h2>
                        <br/>
                        <div>
                            <Gallery/>
                        </div>
                    </div>
                </section>

                <section id="ctracks">
                    <div className="ctracks-container">
                        <h2>CONFERENCE TRACKS</h2>
                        <br/>
                        <div>
                            <ConferenceTracks/>
                        </div>
                    </div>
                </section>

                <section id="organize">
                    <div className="organize-container">
                        <h2>ORGANISED BY</h2>
                        <br/>
                        <div>
                            <Organise/>
                        </div>
                    </div>
                </section>

                <section id="sponsor">
                    <div className="sponsor-container">
                        <h2>SPONSORED BY</h2>
                        <br/>
                        <div>
                            <Sponsored/>
                        </div>
                    </div>
                </section>

                <section id="idates">
                    <div className="idates-container">
                        <h2>IMPORTANT DATES</h2>
                        <br/>
                        <div>
                            <ImportantDates/>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}