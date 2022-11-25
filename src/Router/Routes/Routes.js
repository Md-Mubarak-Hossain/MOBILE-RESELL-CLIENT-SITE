import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DataDelete from '../../components/Practice/DataDelete';
import DataGet from '../../components/Practice/DataGet';
import DataPost from '../../components/Practice/DataPost';
import DataUpdate from '../../components/Practice/DataUpdate';
import Main from '../../Layouts/Default/Main';
import Infinix from '../../pages/Categories/Infinix/Infinix';
import A5 from '../../pages/Categories/Oppo/A5';
import A9 from '../../pages/Categories/Oppo/A9';
import F7 from '../../pages/Categories/Oppo/F7';
import Oppo from '../../pages/Categories/Oppo/Oppo';
import Vivo from '../../pages/Categories/Vivo/Vivo';
import AddminDashBoard from '../../pages/Dashboard/Admin/AddminDashBoard';
import AddProducts from '../../pages/Dashboard/Admin/AddProducts';
import DeleteProducts from '../../pages/Dashboard/Admin/DeleteProducts';
import GoOther from '../../pages/Dashboard/Admin/GoOther';
import SeeAllProducts from '../../pages/Dashboard/Admin/SeeAllProducts';
import UpdateProducts from '../../pages/Dashboard/Admin/UpdateProducts';
import SellerDashBoard from '../../pages/Dashboard/Seller/SellerDashBoard';
import BuyerDashBoard from '../../pages/Dashboard/User/BuyerDashBoard';
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
                    // loader: fetch('http://localhost:5000/mobile')
                },
                {
                    path: '/admindashboard',
                    element: <AddminDashBoard></AddminDashBoard>,
                },
                {
                    path: '/seeAllProducts',
                    element: <SeeAllProducts></SeeAllProducts>
                },
                {
                    path: '/goOther',
                    element: <GoOther></GoOther>
                },
                {
                    path: '/UpdateProducts',
                    element: <UpdateProducts></UpdateProducts>
                },
                {
                    path: '/update/:id',
                    element: <UpdateProducts></UpdateProducts>,
                    loader: ({ params }) => fetch(`http://localhost:5000/mobile/${params.id}`)
                },
                {
                    path: '/delete/:id',
                    element: <DeleteProducts></DeleteProducts>,
                    loader: ({ params }) => fetch(`http://localhost:5000/mobile/${params.id}`)
                },
                {
                    path: '/AddProducts',
                    element: <AddProducts></AddProducts>
                },
                {
                    path: '/sellerdashboard',
                    element: <SellerDashBoard></SellerDashBoard>,
                },
                {
                    path: '/A5',
                    element: <A5></A5>
                },
                {
                    path: '/oppo',
                    element: <Oppo></Oppo>
                },
                {
                    path: '/vivo',
                    element: <Vivo></Vivo>
                },
                {
                    path: '/infinix',
                    element: <Infinix></Infinix>
                },
                {
                    path: '/A9',
                    element: <A9></A9>
                },
                {
                    path: '/F7',
                    element: <F7></F7>
                },
                {
                    path: '/userdashboard',
                    element: <BuyerDashBoard></BuyerDashBoard>,
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>,
                    // loader: fetch('http://localhost:5000/mobile')
                },
                {
                    path: '/faq',
                    element: <Faq></Faq>,
                    // loader: fetch('http://localhost:5000/mobile')
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
                    loader: ({ params }) => fetch(`http://localhost:5000/mobile/${params.id}`)
                },
                {
                    path: '/datadelete/:id',
                    element: <DataDelete></DataDelete>,
                    loader: ({ params }) => fetch(`http://localhost:5000/mobile/${params.id}`)
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