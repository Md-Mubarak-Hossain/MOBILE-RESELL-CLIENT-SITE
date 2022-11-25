import React, { useEffect, useState } from 'react';
import Footer from '../../shared/Footer/Footer';

const Faq = () => {
    const [faqs, setFaq] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/faqAns')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setFaq(data)
            })
    }, [])
    console.log(faqs)
    return (
        <div>
            <div className='m-6 lg:m-16'>

                {
                    faqs.map(faq => <div key={faq._id} className="hero py-5 bg-primary my-10 border-base-200 rounded-lg shadow-2xl">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className='lg:w-1/2'>
                                <img alt='img' src={faq.img} className="lg:w-full rounded-lg shadow-2xl" />
                            </div>
                            <div className='lg:w-1/2'>
                                <h1 className="text-2xl lg:text-5xl font-bold text-warning">{faq.title}</h1>
                                <p className="py-6 text-white">{faq.details}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <Footer></Footer>
        </div >
    );
};

export default Faq;