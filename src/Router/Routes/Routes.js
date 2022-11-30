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
import UpdateProduct from '../../pages/Dashboard/UpdateProduct';
import SeeProduct from '../../pages/Dashboard/SeeProduct';
import UpadeteScreen from '../../pages/Dashboard/UpadeteScreen';
import UserLayOut from '../../Layouts/Default/UserLayOut';
import UserDashBoard from '../../pages/UserDashboard/UserDashBoard';
import AdminLayout from '../../Layouts/Default/AdminLayout';
import AddminDashBoard from '../../pages/AdminDashboard/AddminDashBoard';
import SeeAllProducts from '../../pages/AdminDashboard/SeeAllProducts';
import Seller from '../../pages/AdminDashboard/Seller';
import UpdateProducts from '../../pages/AdminDashboard/UpdateProducts';
import AddProducts from '../../pages/AdminDashboard/AddProducts';
import Products from '../../pages/AdminDashboard/Products';
import Payment2 from '../../pages/UserDashboard/Payment2';
import AdminProtected from '../ProtectedRoute/AdminProtected';
import AdminWishList from '../../pages/AdminDashboard/AdminWishList';
import AdminBlog from '../../pages/AdminDashboard/AdminBlog';
import AdminFaq from '../../pages/AdminDashboard/AdminFaq';
import AdminHome from '../../pages/AdminDashboard/AdminHome';
import AdminOppo from '../../pages/AdminDashboard/AdminOppo';
import AdminVivo from '../../pages/AdminDashboard/AdminVivo';
import AdminInfinix from '../../pages/AdminDashboard/AdminInfinix';
import AdminA9 from '../../pages/AdminDashboard/AdminA9';
import AdminA5 from '../../pages/AdminDashboard/AdminA5';
import AdminF7 from '../../pages/AdminDashboard/AdminF7';
import AdminSpin from '../../pages/AdminDashboard/AdminSpin';
import AdminCategory from '../../pages/AdminDashboard/Other/AdminCategory';
import SellerProtected from '../ProtectedRoute/SellerProtected';
import UserProtected from '../ProtectedRoute/UserProtected';
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
            element: <AdminProtected><AdminLayout></AdminLayout></AdminProtected>,
            children: [
                {
                    path: '/admindashboard',
                    element: <AddminDashBoard></AddminDashBoard>
                },
                {
                    path: '/admindashboard/home',
                    element: <AdminHome></AdminHome>
                },
                {
                    path: '/admindashboard/User',
                    element: <User></User>
                },

                {
                    path: '/admindashboard/Seller',
                    element: <Seller></Seller>
                },
                {
                    path: '/admindashboard/Products',
                    element: <Products></Products>
                },
                {
                    path: '/admindashboard/wishlist',
                    element: <AdminWishList></AdminWishList>
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
                    path: '/admindashboard/AddProducts',
                    element: <AddProducts></AddProducts>
                },
                {
                    path: '/admindashboard/category',
                    element: <AdminCategory></AdminCategory>
                },
                {
                    path: '/admindashboard/A5',
                    element: <AdminA5></AdminA5>
                },
                {
                    path: '/admindashboard/oppo',
                    element: <AdminOppo></AdminOppo>
                },
                {
                    path: '/admindashboard/vivo',
                    element: <AdminVivo></AdminVivo>
                },
                {
                    path: '/admindashboard/infinix',
                    element: <AdminInfinix></AdminInfinix>
                },
                {
                    path: '/admindashboard/A9',
                    element: <AdminA9></AdminA9>
                },
                {
                    path: '/admindashboard/F7',
                    element: <AdminF7></AdminF7>
                },
                {
                    path: '/admindashboard/blog',
                    element: <AdminBlog></AdminBlog>
                },
                {
                    path: '/admindashboard/faq',
                    element: <AdminFaq></AdminFaq>
                },

                {
                    path: '/admindashboard/spinner',
                    element: <AdminSpin></AdminSpin>
                },

            ]
        },
        {
            path: '/sellerdashboard',
            element: <SellerProtected><SellerLayout></SellerLayout></SellerProtected>,
            children: [
                {
                    path: '/sellerdashboard',
                    element: <Dashboard></Dashboard>
                },

                {
                    path: '/sellerdashboard/updateScreen',
                    element: <UpadeteScreen></UpadeteScreen>
                },
                {
                    path: '/sellerdashboard/addproduct',
                    element: <SellerProtected><AddProduct></AddProduct></SellerProtected>
                },
                {
                    path: '/sellerdashboard/updateSellerProduct/:id',
                    element: <SellerProtected> <UpdateProduct></UpdateProduct></SellerProtected>,
                    loader: ({ params }) => fetch(`https://mobile-server.vercel.app/mobile/${params.id}`)
                },
                {
                    path: '/sellerdashboard/seeAllProduct',
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
                    element: <UserProtected><BuyProduct></BuyProduct></UserProtected>
                },
                {
                    path: '/userdashboard/wishlist',
                    element: <UserProtected><AddWishList></AddWishList></UserProtected>,
                    loader: () => fetch(`https://mobile-server.vercel.app/wish`)
                },
                {
                    path: '/userdashboard/payment/:id',
                    element: <UserProtected><Payment></Payment></UserProtected>,
                    loader: ({ params }) => fetch(`https://mobile-server.vercel.app/wish/${params.id}`)
                },
                {
                    path: '/userdashboard/payment2/:id',
                    element: <UserProtected><Payment2></Payment2></UserProtected>,
                    loader: ({ params }) => fetch(`https://mobile-server.vercel.app/mobile/${params.id}`)
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