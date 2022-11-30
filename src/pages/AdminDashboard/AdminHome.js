import React from 'react';
import useTitle from '../../components/Hooks/useTitle';
import AdminAdvertise from './Other/AdminAdverties';
import AdminBanner from './Other/AdminBanner';
import AdminBrand from './Other/AdminBrand';
import AdminCategory from './Other/AdminCategory';
import AdminOffer from './Other/AdminOffer';
import AdminServices from './Other/AdminServices';

const AdminHome = () => {
    useTitle('Home');
    return (
        <div data-theme='night'>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid lg:flex-grow lg:m-0 lg:p-0 bg-base-300 rounded-box place-items-center lg:w-2/3">
                    <AdminBanner></AdminBanner>
                </div>
                <div className="hidden lg:divider-horizontal w-0 divider-base-300 m-0 p-0"></div>
                <div className="hidden lg:grid flex-grow lg:m-0 lg:p-0 bg-base-300 rounded-box place-items-center w-1/3 px-2">
                    <AdminAdvertise></AdminAdvertise>
                </div>
            </div>
            <AdminBrand></AdminBrand>
            <AdminCategory></AdminCategory>
            <AdminOffer></AdminOffer>
            <AdminServices></AdminServices>
        </div >
    );
};

export default AdminHome;