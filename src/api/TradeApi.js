import axios from "axios";

export const createTrade = (id, data) => axios.post(`http://localhost:80/api/trade/${id}`, data, {headers:{'Content-type' : 'application/json'}});
export const fetchTrade = (id) => axios.get(`http://localhost:80/api/trade/${id}`)