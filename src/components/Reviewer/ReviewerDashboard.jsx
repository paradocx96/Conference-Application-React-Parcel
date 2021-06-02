import React from "react";
import {Col, Jumbotron, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class ReviewerDashboard extends React.Component{
    constructor(props) {
        super(props);

    }

    componentDidMount() {
    }

    render() {
        const padding={
            padding:'10px'
        }
        return (
            <div style={padding}>

                <Jumbotron className={'bg-dark text-white'}>
                    <h2>Reviewer Dashboard</h2>
                    <div>
                        <Row>
                            <Col>
                                <Link to={'/research/viewAll'} className={'btn btn-primary'}>Review research papers</Link>
                            </Col>

                            <Col>
                                <Link className={'btn btn-success'}>Review workshop submissions</Link>
                            </Col>
                        </Row>
                    </div>
                </Jumbotron>

            </div>
        );
    }

}
export default ReviewerDashboard;