import React from 'react';
import useTitle from '../../../components/Hooks/useTitle';
import AdminAdvertise from './AdminAdverties';
import AdminBanner from './AdminBanner';
import AdminBrand from './AdminBrand';
import AdminCategory from './AdminCategory';
import AdminOffer from './AdminOffer';
import AdminServices from './AdminServices';

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