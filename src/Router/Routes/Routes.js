import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../documentations/default/layout/Main';
import AdminLogin from '../../pages/account/Login/AdminLogin/AdminLogin';
import Login from '../../pages/account/Login/UserLogin/Login';
import Register from '../../pages/account/Register/Register';
import Infinix from '../../pages/Categories/Infinix/Infinix';
import A5 from '../../pages/Categories/Oppo/A5';
import A9 from '../../pages/Categories/Oppo/A9';
import F7 from '../../pages/Categories/Oppo/F7';
import Oppo from '../../pages/Categories/Oppo/Oppo';
import Vivo from '../../pages/Categories/Vivo/Vivo';
import GoOther from '../../documentations/admin/dashboard/GoOther';
import User from '../../documentations/admin/dashboard/User';
import Home from '../../documentations/default/home/Home';
import Blog from '../../pages/publicPages/Blog/Blog';
import Faq from '../../pages/publicPages/FAQ/Faq';
import FourOfFour from '../FourOfFour/FourOfFour';
import AddWishList from '../../pages/wishlist/AddWishList';
import Payment from '../../pages/payment/Payment';
import UserProtected from '../ProtectedRoute/UserProtected';
import ErrorBoundary from '../ErrorBoundary';
import SeeProduct from '../../pages/products/SeeProduct';
import BuyProduct from '../../pages/products/BuyProduct';
import Brand from '../../documentations/default/home/Brand';
import UserDashboard from '../../documentations/user/dashboard/UserDashBoard';
import AddProduct from '../../pages/products/AddProduct';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            loader: async () => fetch("https://mobile-server.vercel.app/mobile"),
            errorElement: <ErrorBoundary />,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                },
                {
                    path: '/userdashboard',
                    element: <UserDashboard></UserDashboard>,
                    children: [
                        {path: '/userdashboard',element: <Brand />},
                        {path: '/userdashboard/addproduct',element: <AddProduct />},
                        { path: '/userdashboard/addwishlist', element: <AddWishList/> },
                        { path: '/userdashboard/addproduct', element: <AddProduct /> },
                        { path: '/userdashboard/buyproduct', element: <BuyProduct /> },
                        { path: '/userdashboard/seeproduct', element: <SeeProduct /> },
                        { path: '/userdashboard/payment', element: <Payment /> },
                        // { path: '/userdashboard/updatescreen', element: <UpdateScreen />}
                    ]
                },
                {
                    path: '/brand',
                    element: <Brand></Brand>,
                },
                {
                    path: '/product',
                    element: <SeeProduct></SeeProduct>,
                },
                {
                    path: '/buyproduct',
                    element: <BuyProduct></BuyProduct>,
                },
                {
                    path: '/A5',
                    element: <UserProtected><A5></A5></UserProtected>
                },
                {
                    path: '/oppo',
                    element: <UserProtected><Oppo></Oppo></UserProtected>
                },
                {
                    path: '/vivo',
                    element: <UserProtected><Vivo></Vivo></UserProtected>
                },
                {
                    path: '/infinix',
                    element: <UserProtected><Infinix></Infinix></UserProtected>
                },
                {
                    path: '/A9',
                    element: <UserProtected><A9></A9></UserProtected>
                },
                {
                    path: '/F7',
                    element: <UserProtected><F7></F7></UserProtected>
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>
                },
                {
                    path: '/faq',
                    element: <Faq></Faq>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '/adminlogin',
                    element: <AdminLogin></AdminLogin>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },

                {
                    path: '/register',
                    element: <Register></Register>
                },
            ]
        },
        {
            path: '/*',
            element: <FourOfFour></FourOfFour>
        }
    ])
    return (
        <>

            <RouterProvider router={router}>
            </RouterProvider>
        </>
    );
};

export default Routes;