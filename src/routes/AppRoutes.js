import React from "react";

import {Routes, Route} from "react-router-dom";
import CarRoutes from "./CarRoutes"
import Index from "../pages";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Index/>}/>
            {CarRoutes()}
        </Routes>
    )
}

export default AppRoutes;