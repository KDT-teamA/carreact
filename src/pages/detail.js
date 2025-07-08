import React, {useEffect, useState} from "react";
import {fetchCarById} from "../api/SalesInfoService";
import {useParams} from "react-router-dom";

function Detail() {
    const {id} = useParams()

    const [carDetail, setCarDetail] = useState([]);
    useEffect(() => {
        fetchCarById(id).then((res) => {
            setCarDetail(res.data)
        })
    }, []);

    return (
        <div className="container text-center">
            <div className="row mt-5">
                <div className="col-6 offset-3">
                    <div className="card">
                        <div className="card-header">
                            차량정보
                        </div>
                        <div className="card-body text-start">
                            <h5 className="card-title mb-3">차량번호 : {carDetail.number}</h5>
                            <h5 className="card-title mb-3">차량이름 : {carDetail.name}</h5>
                            <h5 className="card-title mb-3">제조사 : {carDetail.manufacturer}</h5>
                            <h5 className="card-title mb-3">주행거리 : {carDetail.mileage}</h5>
                            <h5 className="card-title">차량등록일 : {carDetail.registration_date}</h5>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <a href="/car/list" className="btn btn-primary">뒤로가기</a>
                            <div>
                                <a href={`/car/update/${id}`} className="btn btn-warning me-2">수정하기</a>
                                <button id="delete_btn" className="btn btn-danger">삭제하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;