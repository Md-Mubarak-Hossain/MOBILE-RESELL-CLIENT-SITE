import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const DataDelete = () => {
    // this use for view by id
    const Data = useLoaderData();
    const { _id, name, version
    } = Data;
    const [previousData, setPreviouData] = useState([])

    const [restData, setData] = useState(previousData);

    // get all data for update
    useEffect(() => {
        fetch('http://localhost:5000/mobile')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPreviouData(data)
            })
    }, [])
    console.log(Data)

    const handleReset = event => {
        event.preventDefault();
        event.target.reset();
    }

    const handleDelete = Data => {
        const procced = window.confirm(`Are you sure to delete???? : ${name}`)
        if (procced) {
            fetch(`http://localhost:5000/mobile/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('successfully deleted')
                        const remainData = restData.filter(d => d._id !== Data._id)
                        handleReset();
                        setPreviouData(remainData);
                    }

                })

        }
    }

    return (
        <form>
            {
                Data._id ?
                    <>
                        <p>Name:{name}</p>
                        <p>version:{version}</p>
                        <button className='btn' onClick={() => handleDelete(Data)}>Delete</button>
                    </>
                    : <>
                        <div>Data succesfully deleted</div>
                        <div>Return <Link to='/dataget'>View</Link></div>
                    </>
            }
        </form >
    );
};

export default DataDelete;