import * as React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//PAGINAS
import CreateProduct from '../pages/produtos/createProduct';

//SIDEBAR
import SideBar from '../components/sidebar/sidebar';
import NotFound from '../pages/404';



const routerPrivadas = createBrowserRouter([
    {
        path: '/*',
        element: <NotFound />,
    },
    {
        path: '/create/products',
        element: <CreateProduct />,
    }

])

const rotasPrivadas = () => {

    return (
        <SideBar >
            {/* <Loading /> */}
            <RouterProvider router={routerPrivadas} />
        </SideBar>
    )
}

export default rotasPrivadas;