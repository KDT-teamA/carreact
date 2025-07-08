import React, {useEffect, useState} from "react";
import {deleteCar, fetchCarById} from "../../api/CarApi";
import {useNavigate, useParams} from "react-router-dom";
import Swal from "sweetalert2";
import {createTrade, fetchTrade} from "../../api/TradeApi";

function Detail() {
    const navigate = useNavigate()
    const {id} = useParams()

    const [carDetail, setCarDetail] = useState({});
    useEffect(() => {
        fetchCarById(id).then((res) => {
            setCarDetail(res.data)
        })
    }, []);

    const [trade, setTrade] = useState({});
    useEffect(() => {
        fetchTrade(id).then((res) => {
            setTrade(res.data)
        })
    }, [])

    const [hiddenInput, setHiddenInput] = useState(true);

    const handleTradeUpdate = async () => {
        if (hiddenInput === false) {
            createTrade(id, trade)
        }
        setHiddenInput((prev) => (!prev))
    }

    const handleTradeInputChange = async (e) => {
        const {name, value} = e.target;
        setTrade((prev) => ({
           ...prev,
           [name]: value
        }))
    }

    const handleDelete = async () => {
        Swal.fire({
            title: "삭제하시겠습니까?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "삭제하기",
            confirmButtonColor: "#3085d6",
            cancelButtonText: "삭제취소",
            cancelButtonColor: "#d33",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteCar(carDetail.id).then((res) => {
                    if (res.status === 200) {
                        Swal.fire({
                            title: res.data,
                            icon: "success"
                        }).then(() => {
                            navigate('/car/list')
                        })
                    } else {
                        Swal.fire({
                            title: "에러 발생",
                            icon: "error"
                        })
                    }
                })
            }
        });
    }

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
                                <button id="delete_btn" className="btn btn-danger" onClick={handleDelete}>삭제하기
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 card">
                        <div className="card-header">
                            거래정보
                        </div>
                        <div className="card-body text-start">
                            <form>
                                <h5 className="card-title mb-3 trade_info" hidden={!trade.purchase_date || !hiddenInput}>구매날짜 : {trade.purchase_date}</h5>
                                <div className="form-floating mb-3" hidden={hiddenInput}>
                                    <input type="date" className="form-control" placeholder="" name="purchase_date" value={trade.purchase_date}
                                           onChange={handleTradeInputChange}/>
                                    <label>구매날짜</label>
                                </div>
                                <h5 className="card-title mb-3 trade_info" hidden={!trade.purchase_price || !hiddenInput}>구매가격 : {trade.purchase_price}</h5>
                                <div className="form-floating mb-3" hidden={hiddenInput}>
                                    <input type="number" className="form-control" placeholder="" name="purchase_price" value={trade.purchase_price}
                                           onChange={handleTradeInputChange}/>
                                    <label>구매가격</label>
                                </div>
                                <h5 className="card-title mb-3 trade_info" hidden={!trade.sale_date || !hiddenInput}>판매날짜 : {trade.sale_date}</h5>
                                <div className="form-floating mb-3" hidden={hiddenInput}>
                                    <input type="date" className="form-control" placeholder="" name="sale_date" value={trade.sale_date}
                                           onChange={handleTradeInputChange}/>
                                    <label>판매날짜</label>
                                </div>
                                <h5 className="card-title mb-3 trade_info" hidden={!trade.sale_price || !hiddenInput}>판매가격 : {trade.sale_price}</h5>
                                <div className="form-floating mb-3" hidden={hiddenInput}>
                                    <input type="number" className="form-control" placeholder="" name="sale_price" value={trade.sale_price}
                                           onChange={handleTradeInputChange}/>
                                    <label>판매가격</label>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                        <button id="trade_update_btn" type="button" className="btn btn-warning" onClick={handleTradeUpdate}>수정하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;