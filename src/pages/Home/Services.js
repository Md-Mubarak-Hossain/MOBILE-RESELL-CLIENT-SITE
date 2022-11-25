import React from 'react';
import useTitle from '../../components/Hooks/useTitle';

const Services = () => {
    useTitle('Service Page');
    return (
        <div className='m-6 lg:m-16'>
            <div className='text-end my-6'>
                <h2 className='text-xl'>services</h2>
                <h2 className='text-3xl'>our best services</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        Click me to show/hide content
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        Click me to show/hide content
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        Click me to show/hide content
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;