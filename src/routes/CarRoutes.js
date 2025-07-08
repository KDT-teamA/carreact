//동일한 이름(명령) 반복사용 불가능
//BrowserRouter > Routes(그룹) > Route(항목)

import React from "react";
import {Route} from 'react-router-dom';

import CarList from '../pages/list'
import CarForm from '../pages/form'
import CarDetail from '../pages/detail'

function CarRoutes() {
    return (
        <>
            <Route path="/car/create" element={<CarForm/>}/>
            <Route path="/car/list" element={<CarList/>}/>
            <Route path="/car/detail/:id" element={<CarDetail/>}/>
            <Route path="/car/update/:id" element={<CarForm/>}/>
        </>
    )
}

export default CarRoutes;