import React from "react";
import {Link} from "react-router-dom";

function Index() {
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center text-center">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to="/car/list" className="btn btn-primary">차량 목록</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index