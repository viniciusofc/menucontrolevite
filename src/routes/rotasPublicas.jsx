import * as React from 'react';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Loading from '../componets/loading';

//PAGINAS
import Home from '../pages/home/index'
import NotFound from '../pages/404';
import Login from '../pages/auth/login';
// import Cadastro from '../pages/Usuario/Cadastro';
// import Login from '../pages/Auth/Login';
// import Forgot from '../pages/Auth/Recovery/Forgot';
// import Reset from '../pages/Auth/Recovery/Reset';



const routerPublica = createBrowserRouter([
    {
        path: '/*',
        element: <NotFound />
    },
    {
        path: '/login',
        element: <Login />
    },
    // {
    //     path: '/login',
    //     element: <Login />
    // },
    // {
    //     path: '/register',
    //     element: <Cadastro />
    // },
    // {
    //     path: '/forgot',
    //     element: <Forgot />
    // },
    // {
    //     path: '/reset',
    //     element: <Reset />
    // },
])

const rotasPublicas = () => {
    return (
        <>
            {/* <Loading /> */}
            <RouterProvider router={routerPublica} />
        </>
    )
}

export default rotasPublicas;