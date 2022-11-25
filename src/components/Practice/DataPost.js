import React from 'react';
import toast from 'react-hot-toast';

const DataPost = () => {
    const handleSub = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const version = form.version.value;
        const mobilePost = {
            name, version
        }
        fetch('http://localhost:5000/mobile', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(mobilePost)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Added success')
                }
                else {
                    toast.error('sorry');
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleSub}>
                <div>
                    <input type="text" className='input border block' name='name' placeholder='enter name' />
                </div>
                <div>
                    <input type="text" className='input border block' name='version' placeholder='enter version' />
                </div>
                <button className='btn'>submit</button>
            </form>
        </div >
    );
};

export default DataPost;