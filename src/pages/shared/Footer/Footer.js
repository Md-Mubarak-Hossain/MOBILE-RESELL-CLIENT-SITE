import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='mx-6 lg:mx-16'>
                <footer className="footer py-10  text-white ">
                    <div>
                        <span className="footer-title">Services</span>
                        <Link className="link link-hover">Branding</Link>
                        <Link className="link link-hover">Design</Link>

                    </div >
                    <div>
                        <span className="footer-title">Company</span>
                        <Link className="link link-hover">About us</Link>
                        <Link className="link link-hover" > Contact</Link>
                        <Link className="link link-hover" > Jobs</Link>
                    </div >
                    <div>
                        <span className="footer-title">Legal</span>
                        <Link className="link link-hover">Terms of use</Link>
                    </div >
                </footer >
            </div >
        </div >
    );
};

export default Footer;