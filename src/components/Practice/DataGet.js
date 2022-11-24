import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'

const DataGet = () => {

    const [Data, setData] = useState([]);
    // const { data: Data, isLoading } = useQuery(
    //     {
    //         queryKey: ['Data'],
    //         queryFn: () => fetch('http://localhost:5000/package')
    //             .then(res => res.json())
    //     }
    // )
    useEffect(() => {
        fetch('http://localhost:5000/package')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(Data);
    return (
        <div>
            <h2>Data:{Data.length}</h2>
            <p>data testing....</p>
            {
                Data.map(d => <div key={d._id}>
                    <Link to={`/datadelete/${d._id}`}><button className='btn'>X</button></Link>
                    <p>Name:{d.name}</p>
                    <p>version:{d.version}</p>
                    <Link to={`/dataupdate/${d._id}`}> <button className=' btn'>update</button></Link>
                </div >)
            }
        </div >
    );
};

export default DataGet;