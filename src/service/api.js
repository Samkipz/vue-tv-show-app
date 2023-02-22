import axios from "axios";

export default () => {
    let currentUser = JSON.parse(window.localStorage.currentUser);
    return axios.create({
        baseURL: 'http://localhost:3000',
        // withCredentials: false,
        headers: {
            Authorization: 'Bearer ' + currentUser.accessToken
        }
    });
}