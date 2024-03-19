import * as React from 'react';

//PAGINAS
import CreateProduct from '../pages/produtos/createProduct';
import Segments from '../pages/segments/index';
import Profile from '../pages/profile/index';

//SIDEBAR
import SideBar from '../components/sidebar/index';
import NotFound from '../pages/404';
import Home from '../pages/home';

import { Route, Routes } from 'react-router-dom';
import Analise from '../pages/analise';


const rotasPrivadas = () => {

    return (
        <SideBar>
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/products" element={<CreateProduct />} />
                <Route exact path="/segments" element={<Segments />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/analise" element={<Analise />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </SideBar>
    )
}

export default rotasPrivadas;