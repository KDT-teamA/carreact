import React from "react";

import {Routes, Route} from "react-router-dom";
import CarRoutes from "./CarRoutes"

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<div>메인페이지</div>}/>
            {CarRoutes()}
        </Routes>
    )
}

export default AppRoutes;