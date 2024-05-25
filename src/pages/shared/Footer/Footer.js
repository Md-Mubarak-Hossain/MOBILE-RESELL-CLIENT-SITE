import React from 'react';
import { Link } from 'react-router-dom';
import FooterDescription from './FooterDescription';

const Footer = () => {
  return (
    <div className='relative bg-base-300'>
      <div className='z-30'>
<FooterDescription/>
<div className="flex items-center justify-center">
    <div className="p-2 w-full">
        <div className="flex flex-col items-center justify-around md:flex-row">
            <div className="items-center m-1 justify-items-start w-60"> 
            <img className="flex m-1" src="https://dummyimage.com/150x50" alt='pic'/>
                <div className="text-gray-500 md:text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
            </div>
            <div className="items-center m-1 justify-items-start w-60">
                <h1 className="flex flex-col text-xl text-blue-600 font-medium"> Product </h1> <Link to='/'
                    className="flex hover:text-blue-600 text-gray-500">Features</Link> <Link to='/'
                    className="flex hover:text-blue-600 text-gray-500">Integrations</Link> <Link to='/'
                    className="flex hover:text-blue-600 text-gray-500">Shopify Integrations</Link> <Link to='/'
                    className="flex hover:text-blue-600 text-gray-500">Pricing</Link> <Link to='/'
                    className="flex hover:text-blue-600 text-gray-500">Chrome Extensions</Link>
            </div>
            <div className="items-center m-1 justify-start w-60">
                <h1 className="flex flex-col text-xl text-blue-600 font-medium"> Company </h1> <Link to='/'
                    className="flex hover:text-blue-600 text-gray-500">Terms</Link> <Link to='/'
                    className="flex hover:text-blue-600 text-gray-500">Customers</Link> <Link to='/'
                    className="flex hover:text-blue-600 text-gray-500">Blog</Link> <Link to='/'
                    className="flex hover:text-blue-600 text-gray-500">Terms of Services</Link> <Link to='/'
                    className="flex hover:text-blue-600 text-gray-500">Privacy Policy</Link>
            </div>
            <div className="items-center m-1 w-60">
                <h1 className="flex flex-col text-xl text-blue-600 font-medium"> Support </h1> <Link to='/'
                    className="flex hover:text-blue-600 text-gray-500">Community</Link> <Link to='/'
                    className="flex hover:text-blue-600 text-gray-500">Support Customers</Link> <Link to='/'
                    className="flex hover:text-blue-600 text-gray-500">Documentations</Link> <Link to='/'
                    className="flex hover:text-blue-600 text-gray-500">Service Providers</Link> <Link to='/'
                    className="flex hover:text-blue-600 text-gray-500">Email Contact</Link>
            </div>
            <div className="items-center m-1 w-60 md:-mt-16">
                <h1 className="flex flex-col text-xl text-blue-600 font-medium"> Contact Us </h1> <Link to='/'
                    className="flex hover:text-blue-600 text-gray-500">suppport@admin.com</Link> <Link to='/'
                    className="flex hover:text-blue-600 text-gray-500">(+251)987-6543-210</Link>
            </div>
        </div>
        <div className="mt-2 flex flex-row justify-between p-2 bg-black w-full">
            <div className="flex"> <Link to='/'
                    className="w-9 h-9 rounded-full text-white hover:text-blue-600 pt-1 inline-block"><i
                        className="fa fa-twitter p-1"></i></Link> <Link to='/'
                    className="w-9 h-9 rounded-full text-white hover:text-blue-600 pt-1 inline-block"><i
                        className="fa fa-instagram p-1"></i></Link> <Link to='/'
                    className="w-9 h-9 rounded-full text-white hover:text-blue-600 pt-1 inline-block"><i
                        className="fa fa-facebook p-1"></i></Link> <Link to='/'
                    className="w-9 h-9 rounded-full text-white hover:text-blue-600 pt-1 inline-block"><i
                        className="fa fa-linkedin p-1"></i></Link> <Link to='/'
                    className="w-9 h-9 rounded-full text-white hover:text-blue-600 pt-1 inline-block"><i
                        className="fa fa-quora p-1"></i></Link> </div>
        </div>
    </div>
</div> 
      </div>
    </div>
  );
};

export default Footer;