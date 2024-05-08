import React from 'react';
import {vivo ,A5 ,A9 ,F7} from '../../../components/Image';
const AdminBanner = () => {
    return (
        <div>
            <div className="carousel w- full pt-2">
                <div id="item1" className="carousel-item w-full">
                    <img alt='img' src={A5} className=" w-full rounded h-64" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img alt='img' src={A9} className=" w-full h-64" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img alt='img' src={F7} className=" w-full h-64" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img alt='img' src={vivo} className="w-full h-64" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default AdminBanner;