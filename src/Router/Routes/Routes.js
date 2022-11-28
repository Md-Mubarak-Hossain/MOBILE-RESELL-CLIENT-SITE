import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../Layouts/Default/Main';
import AdminLogin from '../../pages/account/Login/AdminLogin/AdminLogin';
import SellerLogin from '../../pages/account/Login/SellerLogin/SellerLogin';
import Login from '../../pages/account/Login/UserLogin/Login';
import Register from '../../pages/account/Register/Register';
import Spin from '../../pages/account/Spinner/Spin';
import Infinix from '../../pages/Categories/Infinix/Infinix';
import A5 from '../../pages/Categories/Oppo/A5';
import A9 from '../../pages/Categories/Oppo/A9';
import F7 from '../../pages/Categories/Oppo/F7';
import Oppo from '../../pages/Categories/Oppo/Oppo';
import Vivo from '../../pages/Categories/Vivo/Vivo';
import GoOther from '../../pages/AdminDashboard/GoOther';
import User from '../../pages/AdminDashboard/User';
import Home from '../../pages/Home/Home';
import Blog from '../../pages/publicPages/Blog/Blog';
import Faq from '../../pages/publicPages/FAQ/Faq';
import FourOfFour from '../FourOfFour/FourOfFour';
import AddWishList from '../../pages/UserDashboard/AddWishList';
import Payment from '../../pages/UserDashboard/Payment';
import SellerRegister from '../../pages/account/Register/SellerRegister';
import BuyProduct from '../../pages/UserDashboard/BuyProduct';
import Dashboard from '../../pages/Dashboard/Dashboard';
import SellerLayout from '../../Layouts/Default/SellerLayout';
import AddProduct from '../../pages/Dashboard/AddProduct';
import DeleteProduct from '../../pages/Dashboard/DeleteProduct';
import UpdateProduct from '../../pages/Dashboard/UpdateProduct';
import SeeProduct from '../../pages/Dashboard/SeeProduct';
import UpadeteScreen from '../../pages/Dashboard/UpadeteScreen';
import UserLayOut from '../../Layouts/Default/UserLayOut';
import UserDashBoard from '../../pages/UserDashboard/UserDashBoard';
import AdminLayout from '../../Layouts/Default/AdminLayout';
import AddminDashBoard from '../../pages/AdminDashboard/AddminDashBoard';
import RemoveUser from '../../pages/AdminDashboard/RemoveUser';
import RemoveSeller from '../../pages/AdminDashboard/RemoveSeller';
import SeeAllProducts from '../../pages/AdminDashboard/SeeAllProducts';
import Seller from '../../pages/AdminDashboard/Seller';
import UpdateProducts from '../../pages/AdminDashboard/UpdateProducts';
import DeleteProducts from '../../pages/AdminDashboard/DeleteProducts';
import AddProducts from '../../pages/AdminDashboard/AddProducts';
import Products from '../../pages/AdminDashboard/Products';
const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
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
                    path: '/blog',
                    element: <Blog></Blog>
                },
                {
                    path: '/faq',
                    element: <Faq></Faq>
                },

                {
                    path: '/spinner',
                    element: <Spin></Spin>
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
                    path: '/userlogin',
                    element: <Login></Login>
                },
                {
                    path: '/sellerlogin',
                    element: <SellerLogin></SellerLogin>
                },
                {
                    path: '/sellerRegister',
                    element: <SellerRegister></SellerRegister>
                },
            ]
        },
        {
            path: '/admindashboard',
            element: <AdminLayout></AdminLayout>,
            children: [
                {
                    path: '/admindashboard',
                    element: <AddminDashBoard></AddminDashBoard>
                },
                {
                    path: '/admindashboard/User',
                    element: <User></User>
                },
                {
                    path: '/admindashboard/removeUser/:id',
                    element: <RemoveUser></RemoveUser>,
                    loader: ({ params }) => fetch(`https://mobile-server.vercel.app/user/${params.id}`)
                },
                {
                    path: '/admindashboard/Seller',
                    element: <Seller></Seller>
                },
                {
                    path: '/admindashboard/removeSeller/:id',
                    element: <RemoveSeller></RemoveSeller>,
                    loader: ({ params }) => fetch(`https://mobile-server.vercel.app/seller/${params.id}`)
                },
                {
                    path: '/admindashboard/Products',
                    element: <Products></Products>
                },
                {
                    path: '/admindashboard/seeAllProducts',
                    element: <SeeAllProducts></SeeAllProducts>
                },
                {
                    path: '/admindashboard/goOther',
                    element: <GoOther></GoOther>
                },
                {
                    path: '/admindashboard/UpdateProducts',
                    element: <UpdateProducts></UpdateProducts>
                },

                {
                    path: '/admindashboard/update/:id',
                    element: <UpdateProducts></UpdateProducts>,
                    loader: ({ params }) => fetch(`https://mobile-server.vercel.app/mobile/${params.id}`)
                },


                {
                    path: '/admindashboard/delete/:id',
                    element: <DeleteProducts></DeleteProducts>,
                    loader: ({ params }) => fetch(`https://mobile-server.vercel.app/mobile/${params.id}`)
                },
                {
                    path: '/admindashboard/AddProducts',
                    element: <AddProducts></AddProducts>
                },

            ]
        },
        {
            path: '/dashboard',
            element: <SellerLayout></SellerLayout>,
            children: [
                {
                    path: '/dashboard',
                    element: <Dashboard></Dashboard>
                },

                {
                    path: '/dashboard/updateScreen',
                    element: <UpadeteScreen></UpadeteScreen>
                },
                {
                    path: '/dashboard/addproduct',
                    element: <AddProduct></AddProduct>
                },
                {
                    path: '/dashboard/deleteSellerProduct/:id',
                    element: <DeleteProduct></DeleteProduct>,
                    loader: ({ params }) => fetch(`https://mobile-server.vercel.app/mobile/${params.id}`)
                },
                {
                    path: '/dashboard/updateSellerProduct/:id',
                    element: <UpdateProduct></UpdateProduct>,
                    loader: ({ params }) => fetch(`https://mobile-server.vercel.app/mobile/${params.id}`)
                },
                {
                    path: '/dashboard/seeAllProduct',
                    element: <SeeProduct></SeeProduct>
                },
            ]
        },
        {
            path: '/userdashboard',
            element: <UserLayOut></UserLayOut>,
            children: [
                {
                    path: '/userdashboard',
                    element: <UserDashBoard></UserDashBoard>
                },
                {
                    path: '/userdashboard/buyerProduct',
                    element: <BuyProduct></BuyProduct>
                },
                {
                    path: '/userdashboard/wishlist',
                    element: <AddWishList></AddWishList>,
                    loader: () => fetch(`https://mobile-server.vercel.app/wish`)
                },
                {
                    path: '/userdashboard/payment/:id',
                    element: <Payment></Payment>,
                    loader: ({ params }) => fetch(`https://mobile-server.vercel.app/wish/${params.id}`)
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