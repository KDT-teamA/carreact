//import는 외부 스크립트를 추가할 때
//{}부분 함수를 추가할 때

import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from './routes/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';

//함수명(파일명)으로 작업을 작성
function App() {
  return (
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
  );
}

export default App;