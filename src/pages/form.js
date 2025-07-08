import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {createCarById, fetchCarById} from "../api/SalesInfoService";

function Create() {
    const {id} = useParams()

    const navigate = useNavigate();
    const [car, setCar] = useState({
        number: "",
        name: "",
        manufacturer: "",
        mileage: "",
        registration_date: ""
    });

    useEffect(() => {
        if (id) {
            fetchCarById(id)
                .then((res) => {
                    setCar(res.data);
                })
                .catch((err) => {
                    console.error("차량 정보 로드 실패:", err);
                });
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCar((prevCar) => ({
            ...prevCar,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        console.log(car)
        try {
            await createCarById(car)
            alert("등록 성공");
            navigate("/car/list")
        } catch (error) {
            alert("등록 실패!");
            console.error("차량 등록 실패:", error);
        }
    };

    return (
        <div className="container text-center">
            <div className="row">
                <p className="h2 mt-5 mb-3">차량 등록</p>
                <div className="col-6 offset-3">
                    <form id="form">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="number" value={car.number} placeholder="" onChange={handleChange}/>
                            <label htmlFor="number">차량번호</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="name" value={car.name} placeholder="" onChange={handleChange}/>
                            <label htmlFor="name">차량이름</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="manufacturer" value={car.manufacturer} placeholder="" onChange={handleChange}/>
                            <label htmlFor="manufacturer">제조사</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" name="mileage" value={car.mileage} placeholder="" onChange={handleChange}/>
                            <label htmlFor="mileage">주행거리</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="date" className="form-control" name="registration_date" value={car.registration_date} placeholder="" onChange={handleChange}/>
                            <label htmlFor="registration_date">차량등록일</label>
                        </div>
                        <div id="AlertPlaceholder"></div>
                        <button id="form_submit_btn" type="button" className="btn btn-primary me-2" onClick={handleSubmit}>등록</button>
                        <a href="/car/list" className="btn btn-outline-primary">취소</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create;