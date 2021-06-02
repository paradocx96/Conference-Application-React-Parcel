//IT19014128
//A.M.W.W.R.L. Wataketiya

import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class Research extends React.Component{
    constructor(props) {
        super(props);

    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h1 className={'text-white'}>Research</h1>
                <Link to={'/research/upload'} >Upload Research Paper</Link> <br />
                <Link to={'/research/download'} >Download Research Paper</Link> <br />
                <Link to={'/research/viewAll'} >View All  Research Papers</Link> <br />
                <Link to={'/research/deleteEntries'} >Delete research paper entries</Link> <br />
                <Link to={'/research/updatePaper'}>Update Paper</Link> <br />
                <Link to={'/research/viewSinglePaper'}>View Single Paper</Link> <br />
            </div>
        );
    }

}

export default Research;