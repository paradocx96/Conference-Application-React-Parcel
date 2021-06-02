//IT19014128
//A.M.W.W.R.L. Wataketiya

import React from "react";
import axios from "axios";
import FileDownload from "js-file-download";
import {Button, Form} from "react-bootstrap";

class ResearchPaperDownload extends React.Component{
    constructor(props) {
        super(props);

        this.state = this.initialState;

        this.changeUsername = this.changeUsername.bind(this);
        this.retrieveFile = this.retrieveFile.bind(this);

    }

    initialState = {
        username:''
    }

    componentDidMount() {
    }

    changeUsername = (event) => {
        event.preventDefault();

        this.setState({username:event.target.value});
    }

    retrieveFile =async (event) => {
        event.preventDefault();

        const COMMON_URL= "http://localhost:8080/";
        const DOWNLOAD_PATH = "researchpaper/downloadByUsername/";
        const DOWNLOAD_URL_FUL = COMMON_URL+DOWNLOAD_PATH;

        const formData = new FormData();
        formData.append("username",this.state.username);

        await axios.post(DOWNLOAD_URL_FUL,formData,{responseType:'blob'})
            .then( (response) => {
                console.log("Data : " +response.data);

                let headerline =  response.request.getResponseHeader('Content-Disposition') //get content disposition
                let startFileNameIndex = headerline.indexOf('=')+1;  //set start at '=' sign of 'filename=' phrase
                let endFileNameIndex = headerline.lastIndexOf('"');  //set the last index at the end of the content disposition
                let filename =  headerline.substring(startFileNameIndex,endFileNameIndex);  //get the substring filename
                console.log("Content disposition: "+ headerline);

                FileDownload(response.data,filename+".pdf");
            })
    }

    render() {
        const padding={
            padding:'10px'
        }
        return (
            <div>
                <Form style={padding} className={'bg-dark text-white'} onSubmit={this.retrieveFile.bind(this)}>

                    <Form.Group>
                        <Form.Label>Enter your username</Form.Label>
                        <Form.Control
                            type={'text'}
                            name={'username'}
                            required
                            onChange={this.changeUsername.bind(this)}

                        />
                    </Form.Group>

                    <Button type={'submit'} className={'btn btn-primary'}>Download</Button>
                </Form>

            </div>
        );
    }

}

export default ResearchPaperDownload;