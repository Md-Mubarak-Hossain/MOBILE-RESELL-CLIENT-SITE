import React, { useContext } from 'react';
import { MdAddShoppingCart } from 'react-icons/md'
import useTitle from '../../../components/Hooks/useTitle';
import { AuthContext } from '../../../ContextApi/Context';
import { SellerAuth } from '../../../ContextApi/SellerContext';
const AddProduct = () => {
    useTitle('Seller AddProduct');
    const { user } = useContext(AuthContext);
    const { sellers } = useContext(SellerAuth);
    console.log(user.email);
    const handleSub = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const ram = form.ram.value;
        const camera = form.camera.value;
        const category = form.category.value;
        const seller = form.seller.value;
        const email = user.email;
        const battery = form.battery.value;
        const picture = form.picture.value;
        const location = form.location.value;
        const useTime = form.useTime.value;
        const resalePrice = form.resalePrice.value;
        const mobilePost = {
            name, brand, ram, camera, useTime, price, resalePrice, category, seller, email, battery, picture, location
        }

        fetch('https://mobile-server.vercel.app/mobile', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(mobilePost)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    alert('Added success')
                }
                else {
                    alert('sorry');
                }
            })
    }
    return (
        <div>
            <div className='text-center my-5'>
                <h2 className='text-xl lg:text-4xl text-orange-400 font-bold underline'>Seller Add Products Page</h2>
            </div>
            <form onSubmit={handleSub}>
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl lg:text-5xl font-bold">Add Product</h1>
                        <div className='py-6 text-rose-500 text-9xl'>
                            <MdAddShoppingCart></MdAddShoppingCart>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full lg:w-3/4  shadow-2xl">
                        <div className="card-body lg:w-full">
                            <div className='lg:grid lg:grid-cols-2'>
                                <div className="form-control lg:px-2">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input placeholder='enter the mobile name' name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control lg:px-2">
                                    <label className="label">
                                        <span className="label-text">Brand</span>
                                    </label>
                                    <input type="text" placeholder='enter the brand name' name='brand' className="input input-bordered" />
                                </div>
                                <div className="form-control lg:px-2">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input type="text" placeholder='enter category' name='category' className="input input-bordered" />
                                </div>
                                <div className="form-control lg:px-2">
                                    <label className="label">
                                        <span className="label-text">Ram</span>
                                    </label>
                                    <input type="text" placeholder='enter ram size' name='ram' className="input input-bordered" />
                                </div>
                                <div className="form-control lg:px-2">
                                    <label className="label">
                                        <span className="label-text">Camera</span>
                                    </label>
                                    <input type="text" placeholder='enter camera' name='camera' className="input input-bordered" />
                                </div>
                                <div className="form-control lg:px-2">
                                    <label className="label">
                                        <span className="label-text">Battery</span>
                                    </label>
                                    <input type="text" placeholder='enter battery' name='battery' className="input input-bordered" />
                                </div>
                                <div className="form-control lg:px-2">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" placeholder='enter price' name='price' className="input input-bordered" />
                                </div>
                                <div className="form-control lg:px-2">
                                    <label className="label">
                                        <span className="label-text">Re-sale Price</span>
                                    </label>
                                    <input type="text" placeholder='enter Resale price' name='resalePrice' className="input input-bordered" />
                                </div>
                                <div className="form-control lg:px-2">
                                    <label className="label">
                                        <span className="label-text">useTime</span>
                                    </label>
                                    <input type="text" placeholder='enter use time' name='useTime' className="input input-bordered" />
                                </div>
                                {
                                    sellers?.map(seller => <div key={seller._id} className="form-control lg:px-2">
                                        {
                                            seller?.email.includes(user.email) ?
                                                <>
                                                    <label className="label">
                                                        <span className="label-text">Seller name</span>
                                                    </label>
                                                    <input type="text" defaultValue={seller.username} placeholder='enter seller name' name='seller' className="input input-bordered" disabled />
                                                </>
                                                : <div className='hidden'>
                                                </div>
                                        }
                                    </div>)
                                }
                                <div className="form-control lg:px-2">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" defaultValue={user.email} placeholder='enter email' name='email' className="input input-bordered" disabled />
                                </div>
                                <div className="form-control lg:px-2">
                                    <label className="label">
                                        <span className="label-text">Location</span>
                                    </label>
                                    <input type="text" placeholder='enter location' name='location' className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control lg:px-2">
                                <label className="label">
                                    <span className="label-text">Product Picture Link</span>
                                </label>
                                <input type="text" placeholder='enter product picture link' name='picture' className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-primary">Add product</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    );
};

export default AddProduct;