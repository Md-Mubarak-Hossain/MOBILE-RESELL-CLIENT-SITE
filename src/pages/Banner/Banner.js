import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img alt='img' src="https://placeimg.com/800/200/arch" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img alt='img' src="https://placeimg.com/800/200/arch" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img alt='img' src="https://placeimg.com/800/200/arch" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img alt='img' src="https://placeimg.com/800/200/arch" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <Link href="#item1" className="btn btn-xs">1</Link>
                <Link href="#item2" className="btn btn-xs" > 2</Link>
                <Link href="#item3" className="btn btn-xs" > 3</Link>
                <Link href="#item4" className="btn btn-xs" > 4</Link>
            </div >
        </div>
    );
};

export default Banner;