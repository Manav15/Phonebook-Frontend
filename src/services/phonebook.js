import axios from "axios";

const baseURL = "http://localhost:3001/api/persons";

const getAll = async () => {
    const response = await axios.get(baseURL);
    return await response.data
};

const create = async (payload) => {
    const response = await axios.post(baseURL, payload);
    return await response.data
};

const update = async (id, payload) => {
    const response = await axios.put(`${baseURL}/${id}`, payload);
    return response.data
};

const remove = async(id) => {
    const response  = await axios.delete(`${baseURL}/${id}`);
    return response.data
};

export default {
    getAll,
    create,
    update,
    remove
};