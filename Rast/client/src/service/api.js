import axios from 'axios';


const url = "http://localhost:3000/socialmedia";

export const getallData = async () => {

    return await axios.get(`${url}/`);
}

export const addData = async (data) => {
    return await axios.post(url,data);
}

