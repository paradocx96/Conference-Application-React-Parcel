// TODO: IT19180526 - Chandrasiri S A N L D

import axios from "axios";

// TODO: Declare url for rest api
const KEYNOTE_API_BASE_URL_LOCAL = "http://localhost:8080/keynote/";
const KEYNOTE_API_BASE_URL = "https://icaf-conference-backend.herokuapp.com/keynote/";
const KEYNOTE_API_BASE_URL_AWS = "http://rhna-env.eba-irftcrbc.us-east-1.elasticbeanstalk.com/keynote";

export default new class KeyNoteService {

    // TODO: Method for add new Keynote to database
    postKeyNote(keynote) {
        return axios.post(KEYNOTE_API_BASE_URL, keynote);
    }

    getKeyNotes() {
        return axios.get(KEYNOTE_API_BASE_URL);
    }

    getKeyNotesByStatus(status) {
        return axios.get(KEYNOTE_API_BASE_URL + "get-by-status/" + status);
    }

    getKeyNoteById(id) {
        return axios.get(KEYNOTE_API_BASE_URL + "get-by-id/" + id);
    }

    updateKeyNoteStatus(id, status) {
        return axios.put(KEYNOTE_API_BASE_URL +"update-status/"+ id, status)
    }

    deleteKeyNoteById(id) {
        return axios.delete(KEYNOTE_API_BASE_URL + id);
    }

    updateKeynote(keynote, id) {
        return axios.put(KEYNOTE_API_BASE_URL + id, keynote);
    }
}