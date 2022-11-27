import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DataDelete from '../../components/Practice/DataDelete';
import DataGet from '../../components/Practice/DataGet';
import DataPost from '../../components/Practice/DataPost';
import DataUpdate from '../../components/Practice/DataUpdate';
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
import AddminDashBoard from '../../pages/Dashboard/Admin/AddminDashBoard';
import AddProducts from '../../pages/Dashboard/Admin/AddProducts';
import DeleteProducts from '../../pages/Dashboard/Admin/DeleteProducts';
import GoOther from '../../pages/Dashboard/Admin/GoOther';
import RemoveSeller from '../../pages/Dashboard/Admin/RemoveSeller';
import RemoveUser from '../../pages/Dashboard/Admin/RemoveUser';
import SeeAllProducts from '../../pages/Dashboard/Admin/SeeAllProducts';
import Seller from '../../pages/Dashboard/Admin/Seller';
import UpdateProducts from '../../pages/Dashboard/Admin/UpdateProducts';
import User from '../../pages/Dashboard/Admin/User';
import AddProduct from '../../pages/Dashboard/Seller/AddProduct';
import DeleteProduct from '../../pages/Dashboard/Seller/DeleteProduct';
import SeeProduct from '../../pages/Dashboard/Seller/SeeProduct';
import SellerDashBoard from '../../pages/Dashboard/Seller/SellerDashBoard';
import UpadeteScreen from '../../pages/Dashboard/Seller/UpadeteScreen';
import UpdateProduct from '../../pages/Dashboard/Seller/UpdateProduct';
import BuyerDashBoard from '../../pages/Dashboard/User/BuyerDashBoard';
import Book from '../../pages/Dashboard/User/Book';
import Home from '../../pages/Home/Home';
import Blog from '../../pages/publicPages/Blog/Blog';
import Faq from '../../pages/publicPages/FAQ/Faq';
import FourOfFour from '../FourOfFour/FourOfFour';
import AddWishList from '../../pages/Dashboard/User/AddWishList';
import Payment from '../../pages/Dashboard/User/Payment';
import SellerRegister from '../../pages/account/Register/SellerRegister';
import Navbar from '../../pages/shared/Navbar/Navbar';

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
                    path: '/User',
                    element: <User></User>
                },
                {
                    path: '/removeUser/:id',
                    element: <RemoveUser></RemoveUser>,
                    loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`)
                },
                {
                    path: '/Seller',
                    element: <Seller></Seller>
                },
                {
                    path: '/removeSeller/:id',
                    element: <RemoveSeller></RemoveSeller>,
                    loader: ({ params }) => fetch(`http://localhost:5000/seller/${params.id}`)
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
                    path: '/book',
                    element: <Book></Book>,
                    loader: () => fetch(`http://localhost:5000/wish`)
                },
                {
                    path: '/wishlist',
                    element: <AddWishList></AddWishList>,
                    loader: () => fetch(`http://localhost:5000/wish`)
                },
                // {
                //     path: '/wishlist/:id',
                //     element: <AddWishList></AddWishList>,
                //     loader: ({ params }) => fetch(`http://localhost:5000/wish${params.id}`)
                // },
                {
                    path: '/payment/:id',
                    element: <Payment></Payment>,
                    loader: ({ params }) => fetch(`http://localhost:5000/wish/${params.id}`)

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
                    path: '/updateScreen',
                    element: <UpadeteScreen></UpadeteScreen>
                },
                {
                    path: '/AddProduct',
                    element: <AddProduct></AddProduct>
                },
                {
                    path: '/deleteSellerProduct/:id',
                    element: <DeleteProduct></DeleteProduct>,
                    loader: ({ params }) => fetch(`http://localhost:5000/mobile/${params.id}`)
                },
                {
                    path: '/updateSellerProduct/:id',
                    element: <UpdateProduct></UpdateProduct>,
                    loader: ({ params }) => fetch(`http://localhost:5000/mobile/${params.id}`)
                },
                {
                    path: '/seeAllProduct',
                    element: <SeeProduct></SeeProduct>
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