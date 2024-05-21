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
            <div className="flex flex-col w-full md:flex-row">
                <div className="grid md:flex-grow md:m-0 md:p-0 bg-base-300 rounded-box place-items-center md:w-2/3">
                    <AdminBanner></AdminBanner>
                </div>
                <div className="hidden md:divider-horizontal w-0 divider-base-300 m-0 p-0"></div>
                <div className="hidden md:grid flex-grow md:m-0 md:p-0 bg-base-300 rounded-box place-items-center w-1/3 px-2">
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