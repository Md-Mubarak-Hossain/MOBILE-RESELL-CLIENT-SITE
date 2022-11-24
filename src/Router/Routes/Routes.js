import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DataDelete from '../../components/Practice/DataDelete';
import DataGet from '../../components/Practice/DataGet';
import DataPost from '../../components/Practice/DataPost';
import DataUpdate from '../../components/Practice/DataUpdate';
import Main from '../../Layouts/Default/Main';
import Home from '../../pages/Home/Home';
import Blog from '../../pages/publicPages/Blog/Blog';
import Faq from '../../pages/publicPages/FAQ/Faq';
import FourOfFour from '../FourOfFour/FourOfFour';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                    // loader: fetch('http://localhost:5000/package')
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>,
                    // loader: fetch('http://localhost:5000/package')
                },
                {
                    path: '/faq',
                    element: <Faq></Faq>,
                    // loader: fetch('http://localhost:5000/package')
                },
                {
                    path: '/dataget',
                    element: <DataGet></DataGet>,

                },
                {
                    path: '/datapost',
                    element: <DataPost></DataPost>
                },
                {
                    path: '/dataupdate/:id',
                    element: <DataUpdate></DataUpdate>,
                    loader: ({ params }) => fetch(`http://localhost:5000/package/${params.id}`)
                },
                {
                    path: '/datadelete/:id',
                    element: <DataDelete></DataDelete>,
                    loader: ({ params }) => fetch(`http://localhost:5000/package/${params.id}`)
                },
            ]
        },
        {
            path: '/*',
            element: <FourOfFour></FourOfFour>
        }
    ])
    return (
        <RouterProvider router={router}>

        </RouterProvider >
    );
};

export default Routes;