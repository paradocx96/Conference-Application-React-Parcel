import React from "react";

class ViewSingleResearchPaper extends React.Component{

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        console.log("Component did mount single research paper");
    }

    render() {
        return (
            <div>
                <h1>Your Research paper</h1>
            </div>
        );
    }

}

export default ViewSingleResearchPaper;