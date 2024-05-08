import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../documentations/default/layout/Main';
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
import GoOther from '../../documentations/admin/dashboard/GoOther';
import User from '../../documentations/admin/dashboard/User';
import Home from '../../documentations/default/home/Home';
import Blog from '../../pages/publicPages/Blog/Blog';
import Faq from '../../pages/publicPages/FAQ/Faq';
import FourOfFour from '../FourOfFour/FourOfFour';
import AddWishList from '../../pages/wishlist/AddWishList';
import Payment from '../../pages/payment/Payment';
import SellerRegister from '../../pages/account/Register/SellerRegister';
import Dashboard from '../../documentations/default/dashboard/Dashboard';
import SellerLayout from '../../documentations/seller/layout/SellerLayout';
import UserLayOut from '../../documentations/user/layout/UserLayOut';
import UserDashBoard from '../../documentations/user/dashboard/UserDashBoard';
import AdminLayout from '../../documentations/admin/layout/AdminLayout';
import AddminDashBoard from '../../documentations/admin/dashboard/AddminDashBoard';
import SeeAllProducts from '../../documentations/admin/dashboard/SeeAllProducts';
import Seller from '../../documentations/admin/dashboard/Seller';
import UpdateProducts from '../../documentations/admin/dashboard/UpdateProducts';
import AddProducts from '../../documentations/admin/dashboard/AddProducts';
import Products from '../../documentations/admin/dashboard/Products';
import Payment2 from '../../pages/payment/Payment2';
import AdminProtected from '../ProtectedRoute/AdminProtected';
import AdminWishList from '../../documentations/admin/dashboard/AdminWishList';
import AdminBlog from '../../documentations/admin/dashboard/AdminBlog';
import AdminFaq from '../../documentations/admin/dashboard/AdminFaq';
import AdminHome from '../../documentations/admin/dashboard/AdminHome';
import AdminOppo from '../../documentations/admin/dashboard/AdminOppo';
import AdminVivo from '../../documentations/admin/dashboard/AdminVivo';
import AdminInfinix from '../../documentations/admin/dashboard/AdminInfinix';
import AdminA9 from '../../documentations/admin/dashboard/AdminA9';
import AdminA5 from '../../documentations/admin/dashboard/AdminA5';
import AdminF7 from '../../documentations/admin/dashboard/AdminF7';
import AdminSpin from '../../documentations/admin/dashboard/AdminSpin';
import AdminCategory from '../../documentations/admin/dashboard/AdminCategory';
import SellerProtected from '../ProtectedRoute/SellerProtected';
import UserProtected from '../ProtectedRoute/UserProtected';
import UpadeteScreen from '../../pages/products/UpadeteScreen';
import UpdateProduct from '../../pages/products/UpdateProduct';
import SeeProduct from '../../pages/products/SeeProduct';
import AddProduct from '../../pages/products/AddProduct';
import BuyProduct from '../../pages/products/BuyProduct';
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
                    path: '/userdashboard/userlogin',
                    element: <Login></Login>
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
                // .......
                {
                    path: '/userdashboard/home',
                    element: <Home></Home>,
                },
                {
                    path: '/userdashboard/A5',
                    element: <UserProtected><A5></A5></UserProtected>
                },
                {
                    path: '/userdashboard/oppo',
                    element: <UserProtected><Oppo></Oppo></UserProtected>
                },
                {
                    path: '/userdashboard/vivo',
                    element: <UserProtected><Vivo></Vivo></UserProtected>
                },
                {
                    path: '/userdashboard/infinix',
                    element: <UserProtected><Infinix></Infinix></UserProtected>
                },
                {
                    path: '/userdashboard/A9',
                    element: <UserProtected><A9></A9></UserProtected>
                },
                {
                    path: '/userdashboard/F7',
                    element: <UserProtected><F7></F7></UserProtected>
                },
                {
                    path: '/userdashboard/blog',
                    element: <Blog></Blog>
                },
                {
                    path: '/userdashboard/faq',
                    element: <Faq></Faq>
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

        </RouterProvider>
    );
};

export default Routes;