import * as React from 'react';

import { Route, Routes } from "react-router-dom";

//PAGINAS

import NotFound from '../pages/404';
import Login from '../pages/auth/login';

const rotasPublicas = () => {
    return (
        <>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </>
    )
}

export default rotasPublicas;