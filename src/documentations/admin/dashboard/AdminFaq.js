import React, { useEffect, useState } from 'react';
import useTitle from '../../../components/Hooks/useTitle';
const AdminFaq = () => {
    useTitle('FAQ Page');
    const [faqs, setFaq] = useState([])
    useEffect(() => {
        fetch('https://mobile-server.vercel.app/faqAns')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setFaq(data)
            })
    }, [])
    console.log(faqs)
    return (
        <div>
            <div className='m-6 md:m-16'>

                {
                    faqs.map(faq => <div key={faq._id} className="hero py-5 bg-primary my-10 border-base-200 rounded-lg shadow-2xl">
                        <div className="hero-content flex-col md:flex-row-reverse">
                            <div className='md:w-1/2'>
                                <img alt='img' src={faq.img} className="md:w-full rounded-lg shadow-2xl" />
                            </div>
                            <div className='md:w-1/2'>
                                <h1 className="text-2xl md:text-5xl font-bold text-warning">{faq.title}</h1>
                                <p className="py-6 text-white">{faq.details}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div >
    );
};

export default AdminFaq;