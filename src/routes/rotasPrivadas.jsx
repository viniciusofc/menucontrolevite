import * as React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//PAGINAS
import CreateProduct from '../pages/produtos/createProduct';

//SIDEBAR
import SideBar from '../components/sidebar/index';
import NotFound from '../pages/404';
import Table from '../components/table';



const routerPrivadas = createBrowserRouter([
    {
        path: '/*',
        element: <NotFound />,
    },
    {
        path: '/products',
        element: <Table />,
    },
    {
        path: '/products2',
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