// TODO: IT19180526 - Chandrasiri S A N L D

import axios from "axios";

// TODO: Declare url for rest api
const DOWNLOAD_API_BASE_URL_LOCAL = "http://localhost:8080/download";
const DOWNLOAD_API_BASE_URL = "https://icaf-conference-backend.herokuapp.com/download";

export default new class DownloadService {

    // TODO: Method for add new Download Item to database
    postKeyNote(download) {
        return axios.post(DOWNLOAD_API_BASE_URL, download);
    }

    // TODO: Method for get all Download Items from database
    getDownloadItems() {
        return axios.get(DOWNLOAD_API_BASE_URL);
    }

    //TODO: Method for update Download item Status
    updateStatusByFormValue(status) {
        return axios.put(DOWNLOAD_API_BASE_URL + "/update-status", status);
    }

    //TODO: Method for delete Download item from database
    deleteDownloadItemById(id) {
        return axios.delete(DOWNLOAD_API_BASE_URL + "/" + id);
    }

    //TODO: Method for Download file by Id
    getDownloadFileById(id) {
        return axios.post(DOWNLOAD_API_BASE_URL + "/download-id/" + id, {responseType: 'blob'})
    }

    // TODO: Method for get Download Items by Status from database
    getDownloadItemsListByStatus(status) {
        return axios.get(DOWNLOAD_API_BASE_URL + "/get-by-status/" + status);
    }

    //TODO: Method for update Download item details
    putDownloadDetails(values) {
        return axios.put(DOWNLOAD_API_BASE_URL + "/update-file", values);
    }

    //TODO: Method for get File from database by param Id
    getDownloadFileByParamId(value) {
        return axios.post(DOWNLOAD_API_BASE_URL + "/download-id-param", value, {responseType: 'blob'});
    }
}