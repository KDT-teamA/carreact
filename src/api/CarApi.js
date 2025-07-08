import axios from "axios";

export const newCar = () => axios.get('http://localhost:80/api/car/new');
export const createCar = (data) => axios.post(`http://localhost:80/api/car`, data, {headers:{'Content-type' : 'application/json'}});
export const fetchCars = () => axios.get('http://localhost:80/api/car');
export const fetchCarById = (id) => axios.get(`http://localhost:80/api/car/${id}`)
export const updateCarById = (id, data) => axios.put(`http://localhost:80/api/car/${id}`, data, {headers:{'Content-type' : 'application/json'}});
export const deleteCar = (id) => axios.delete(`http://localhost:80/api/car/${id}`);