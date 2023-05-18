import axios from "axios";
import { Main_Url } from ".";


const requestInstance = (idToken) => {
    idToken=idToken || ""
    return axios.create({
        baseURL: Main_Url,
        headers: {
            Authorization: `bearer ${idToken}`
        }
    })
}

export default requestInstance