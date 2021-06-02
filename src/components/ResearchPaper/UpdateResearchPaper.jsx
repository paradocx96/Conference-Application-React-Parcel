import React from "react";
import axios from "axios";
import {Button, Card, Form} from "react-bootstrap";

class UpdateResearchPaper extends React.Component{
    constructor(props) {
        super(props);

        this.state= this.initialState;

        this.handleUpload = this.handleUpload.bind(this);
        this.fileChange = this.fileChange.bind(this);

    }

    initialState={
        id:'',
        username:'',
        title:'',
        status:'',
        file:null
    }

    componentDidMount = async () => {

        //set username from session storage
        await this.setState({username:'ravi@gmail.com'});

        const COMMON_URL= "http://localhost:8080/";
        const VIEW_PAPER = "researchpaper/getResearchPaperDetailsByUsername/";

        const VIEW_PAPER_FULL_PATH = COMMON_URL+VIEW_PAPER;

        //const formData  = new FormData();
        //formData.append("username",this.state.username);

        await axios.get(VIEW_PAPER_FULL_PATH+this.state.username)
            .then(response => response.data)
            .then( (data) => {
                this.setState({id:data.id});
                this.setState({title:data.title});
                this.setState({status:data.status});
            }).catch(error => {
                console.log(error);
            })
    }

    fileChange = async (event) => {
        event.preventDefault();

        await this.setState({file:event.target.files[0]});
    }

    handleUpload = async (event) => {
        event.preventDefault();

        const COMMON_URL= "http://localhost:8080/";
        const UPLOAD_PATH = "researchpaper/updateFile/";

        const UPLOAD_URL_FULL = COMMON_URL+  UPLOAD_PATH;

        const formData = new FormData();
        formData.append("id",this.state.id);
        formData.append("file",this.state.file);

        await axios.put(UPLOAD_URL_FULL,formData)
            .then(response => response.data)
            .then( (data) => {
                if ((data != null)){
                    alert("File re-uploaded successfully\n ID: "+data.id);
                }
                else {
                    alert("Error in uploading file");
                }
            }).catch(error => {
                console.log(error);
            })
    }

    render() {
        const padding={
            padding:'10px'
        }
        const padding2={
            padding:'50px'
        }

        const padding3={
            padding:'20px'
        }
        return (
            <div style={padding}>
                <h2 className={'text-white'}>Update File</h2>

                <div style={padding2}>

                <Card className={'bg-dark text-white'}>
                    <Card.Header>
                        <Card.Title>
                            Upload id: {this.state.id}
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>Title : {this.state.title}</Card.Text>
                        <Card.Text>Status : {this.state.status}</Card.Text>
                    </Card.Body>
                </Card>

                </div>

                <p className={'text-white'}>Re Upload your file only if it is rejected.</p>
                <p className={'text-white'}>Once re-uploaded it will be revoked to pending</p>

                <Form style={padding3} className={'bg-dark text-white'} onSubmit={this.handleUpload.bind(this)}>
                    <Form.Group>
                        <Form.File

                            className={'position-relative'}
                            required
                            name={'file'}
                            label={'Upload Research Paper again (in pdf format)'}
                            onChange={this.fileChange.bind(this)}
                            id={'fileUpload'}

                        />
                    </Form.Group>

                    <Button type={'submit'} className={'btn btn-primary'}>Re-Upload</Button>
                </Form>
            </div>
        );
    }

}

export default UpdateResearchPaper;