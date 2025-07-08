import React, {useEffect, useState} from "react";
import {fetchCars} from "../../api/CarApi";
import {useNavigate} from "react-router-dom";

function List() {
    const navigate = useNavigate();

    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetchCars()
            .then((res) => {
                console.log(res.data)
                setCars(res.data)
            })
            .catch((error) => {
                console.log("차량 정보 불러오기 실패 : ", error)
            })
    }, []);

    const detail = (id) => {
        navigate(`/car/${id}`)
    };

    return (
        <div className="container text-center">
            <div className="row mt-5">
                <div className="col d-flex justify-content-evenly align-items-center">
                    <span className="h2">차량 리스트</span>
                    <a href="/car/create" className="btn btn-primary btn-lg">차량 등록</a>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">차량번호</th>
                            <th scope="col">차량이름</th>
                            <th scope="col">제조사</th>
                            <th scope="col">주행거리</th>
                            <th scope="col">차량등록일</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cars.map((car, count) => (
                            <tr key={car.id} onClick={() => detail(car.id)}>
                                <th>{count+1}</th>
                                <td>{car.number}</td>
                                <td>{car.name}</td>
                                <td>{car.manufacturer}</td>
                                <td>{car.mileage}</td>
                                <td>{car.registration_date}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default List;