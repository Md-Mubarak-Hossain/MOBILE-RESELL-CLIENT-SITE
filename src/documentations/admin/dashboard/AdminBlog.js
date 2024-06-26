import React, { useEffect, useState } from 'react';
import useTitle from '../../../components/Hooks/useTitle';

const AdminBlog = () => {
    useTitle('Blog Page');
    const [blogs, setBlog] = useState([])
    useEffect(() => {
        fetch('https://mobile-server.vercel.app/blog')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBlog(data)
            })
    }, [])
    console.log(blogs)
    return (
        <>
            <div className='p-2 md:m-16'>
                <div className='w-full text-center flex flex-col justify-center items-center '>
                    <h2 className='text-2xl md:text-3xl text-primary text-bold md:w-1/3'>The Important Question with Answere </h2>
                </div>
                {
                    blogs.map(blog => <div key={blog._id} className='hero' >
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 border border-warning rounded-lg shadow-xl p-5">
                            <div className='w-full'>
                                <img alt='img' src={blog.img} className="h-full w-full rounded-lg shadow-xl" />
                            </div>
                            <div>
                                <h1 className="text-2xl md:text-4xl font-bold text-warning">{blog.title}</h1>
                                <p className="py-6 text-lg text-white">{blog.details}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div >
        </>
    );
};

export default AdminBlog;