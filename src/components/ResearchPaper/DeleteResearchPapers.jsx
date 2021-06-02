import React from "react";
import axios from "axios";
import {Button, Jumbotron, Table} from "react-bootstrap";
import {confirmAlert} from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import Toast1 from "../Toasts/Toast1";

class DeleteResearchPapers extends React.Component{

    constructor(props) {
        super(props);

        this.state = this.initialState;
        //this.state.show = false;

        this.handleDelete = this.handleDelete.bind(this);
        this.requestDelete = this.requestDelete.bind(this);

    }

    initialState={
        researchPapers:[],
        show:false
    }

    componentDidMount= async ()=> {
        const COMMON_URL= "http://localhost:8080/";
        const VIEW_PAPERS = "researchpaper/getAllResearchpapers/";

        const   FULL_URL_GET_PAPERS = COMMON_URL+ VIEW_PAPERS ;

        //get all the researchPapers and set them in the state variable
        await axios.get(FULL_URL_GET_PAPERS)
            .then(response => response.data)
            .then( (data) => {
                this.setState({researchPapers:data});
            })
    }

    handleDelete = async (id) => {

        const COMMON_URL= "http://localhost:8080/";
        const DELETE_ENTRY = "researchpaper/deletePaper/";
        const DELETE_ENTRY_FULL_PATH = COMMON_URL +  DELETE_ENTRY;

        //const formData = new FormData();
        //formData.append("id",id);

        await axios.delete(DELETE_ENTRY_FULL_PATH+id)
            .then(response => response.data)
            .then( (data) => {
                if(data!=null){
                    this.setState({"show":true});
                    setTimeout(() => this.setState({"show":false}),3000)
                    this.setState({
                        researchPapers:this.state.researchPapers.filter(researchPapers => researchPapers.id !== id)
                    })
                }
            }).catch(error => {
                console.log(error);
            })

    }

    requestDelete = (id) => {

        confirmAlert({
            title:'Delete this Entry?',
            message:'This cannot be undone',
            buttons:[
                {
                    label:'I understand. Delete.',
                    onClick:this.handleDelete.bind(this,id)
                },
                {
                    label:'Do not delete',
                    onClick:this.displayCancelled.bind(this)
                }
            ]
        })

    }

    displayCancelled =()=>{
        alert("Deletion Cancelled.");
    }

    render() {

        const padding={
            padding:'30px'
        }
        return (
            <div>
                <div style={{"display":this.state.show ? "block" :"none" }}>

                    <Toast1

                        children={{show:this.state.show,
                            message:"Entry deleted successfully",
                            type: 'danger'}}
                    />

                </div>

                <div style={padding}>
                    <Jumbotron>
                        <h3>Activities in this section are potentially destructive! Proceed with caution </h3>
                    </Jumbotron>

                </div>
                <Table striped bordered hover variant={'dark'}>

                    <thead>
                    <tr>
                        <th>Upload Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Research paper Title</th>
                        <th>Research paper Status</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.state.researchPapers.length === 0?
                            <tr align={'center'}>
                                <td>{this.state.researchPapers.length} research papers available</td>
                            </tr> :
                            this.state.researchPapers.map((e) => (
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.username}</td>
                                    <td>{e.email}</td>
                                    <td>{e.title}</td>
                                    <td>{e.status}</td>



                                    <td><Button className={'btn btn-danger'}
                                                onClick={this.requestDelete.bind(this,e.id)}>
                                        Delete
                                    </Button> </td>


                                </tr>
                            ))
                    }

                    </tbody>

                </Table>

                <div>hello</div>

            </div>
        );
    }

}
export default DeleteResearchPapers;