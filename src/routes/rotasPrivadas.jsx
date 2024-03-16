import * as React from 'react';

//PAGINAS
import CreateProduct from '../pages/produtos/createProduct';

//SIDEBAR
import SideBar from '../components/sidebar/index';
import NotFound from '../pages/404';
import Home from '../pages/home';
import Table from '../components/table';

import { Route, Routes } from 'react-router-dom';


const rotasPrivadas = () => {

    return (
        <SideBar>
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/products" element={<CreateProduct />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </SideBar>
    )
}

export default rotasPrivadas;