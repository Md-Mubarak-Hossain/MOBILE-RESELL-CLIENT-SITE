import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const DataUpdate = () => {
    // default view by id
    const Data = useLoaderData();
    console.log(Data)
    const { name, version } = Data;

    // load all data
    const [previousData, setUpdateData] = useState([])
    const [updateData, setData] = useState(previousData)
    useEffect(() => {
        fetch('http://localhost:5000/mobile')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUpdateData(data)
            })
    }, [])
    const handleSub = event => {
        event.preventDefault();
        fetch(`http://localhost:5000/mobile/${Data._id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('successfully update')
                    event.target.reset();
                }
            })
    }
    const onChangeHandle = event => {
        const value = event.target.value;
        const field = event.target.name;
        const totalData = { ...updateData };
        totalData[field] = value;
        setData(totalData);
    }
    return (
        <div>
            <form onSubmit={handleSub}>
                <div>
                    <input onChange={onChangeHandle} type="text" className='input border block' name='name' defaultValue={name} placeholder='enter name' />
                </div>
                <div>
                    <input onChange={onChangeHandle} type="text" className='input border block' name='version' defaultValue={version} placeholder='enter version' />
                </div>
                <button className='btn'>submit</button>
            </form>
        </div >
    );
};
export default DataUpdate;