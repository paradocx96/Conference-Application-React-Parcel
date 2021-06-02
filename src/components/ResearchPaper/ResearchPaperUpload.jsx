//IT19014128
//A.M.W.W.R.L. Wataketiya


import React from "react";
import axios from "axios";
import {Button, Form} from "react-bootstrap";

class ResearchPaperUpload extends React.Component{
    constructor(props) {
        super(props);

        this.state = this.initialState;

        this.fileChange =this.fileChange.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.submitResearchPaper = this.submitResearchPaper.bind(this);
        this.resetResearch = this.resetResearch.bind(this);
    }

    initialState = {
        username:'',
        email:'',
        title:'',
        file:null
    }

    resetResearch =(event) => {
        event.preventDefault();
        this.setState(() => this.initialState);
    }

    //save the changes to file upload
    fileChange = async (event) => {
        event.preventDefault();

        await this.setState({file:event.target.files[0]});
    }

    //save he changes to username
    //later this will be retrieved from session storage
    changeUsername = (event) =>{
        event.preventDefault();

        this.setState({username:event.target.value});
    }

    //save the changes to email
    changeEmail = (event) => {
        event.preventDefault();

        this.setState({email:event.target.value});
    }

    //save the changes to research paper title
    changeTitle = (event) => {
        event.preventDefault();

        this.setState({title:event.target.value});
    }

    //handle the upload and detail submission
    submitResearchPaper = async (event) =>{
        event.preventDefault();


        console.log("Running submit form");

        //setting the form data
        const formData = new FormData();
        formData.append("file",this.state.file);
        formData.append("username",this.state.username);
        formData.append("email",this.state.email);
        formData.append("title",this.state.title);


        //checking whether the form data is null
        if(formData == null){
            console.log('Form data is null');
        }

        const COMMON_URL= "http://localhost:8080/";
        const UPLOAD_PATH = "researchpaper/upload/";

        const UPLOAD_URL_FULL = COMMON_URL+  UPLOAD_PATH;

        await axios.post(UPLOAD_URL_FULL, formData)
            .then(response => response.data)
            .then( (data) => {
                if(data != null){
                    console.log("File Uploaded successfully");
                    alert("File Uploaded successfully\n ID: "+data);
                }
                else{
                    alert("Error in uploading data");
                }
            }).catch( error =>{
                console.log(error);
            })

    }

    componentDidMount() {
    }

    render() {

        const padding={
            padding:'10px'
        }

        const padding2={
            padding:'20px'
        }
        return (
            <div style={padding}>

                <h3 className={'text-white'}>Upload your research paper and your details</h3>


                <Form style={padding2} className={'bg-dark text-white'} onSubmit={this.submitResearchPaper.bind(this)} onReset={this.resetResearch.bind(this)}>

                    <Form.Group>
                        <Form.Label>Enter Username</Form.Label>
                        <Form.Control

                            type={'text'}
                            name={'username'}
                            onChange={this.changeUsername.bind(this)}
                            className={'bg-dark text-white'}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control

                            type={'text'}
                            name={'title'}
                            onChange={this.changeTitle.bind(this)}
                            className={'bg-dark text-white'}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control

                            type={'text'}
                            name={'email'}
                            onChange={this.changeEmail.bind(this)}
                            className={'bg-dark text-white'}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.File
                            className={'position-relative'}
                            required
                            name={'file'}
                            label={'Upload Research Paper (in pdf format'}
                            onChange={this.fileChange.bind(this)}
                            id={'fileUpload'}

                        />
                    </Form.Group>

                    <Button type={'submit'} className={'btn btn-primary'}>Upload</Button>
                    <Button type={'reset'} className={'btn btn-secondary'}>Reset</Button>
                </Form>



            </div>
        );
    }

}

export default  ResearchPaperUpload;